"use server"

import { BrevoError } from "@getbrevo/brevo"
import { z } from "zod"
import { getBrevoClient, getBrevoConfig } from "@/lib/brevo"
import { VISIT_DAYS } from "@/lib/content"

const dayValues = VISIT_DAYS.map((d) => d.value) as [string, ...string[]]

const ContestSchema = z.object({
  prenom: z.string("Indiquez votre prénom.").trim().min(1, "Indiquez votre prénom.").max(80),
  nom: z.string("Indiquez votre nom.").trim().min(1, "Indiquez votre nom.").max(80),
  email: z.email("Adresse e-mail invalide.").max(254),
  tel: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s().-]*$/, "Numéro de téléphone invalide.")
    .optional(),
  jour: z.enum(dayValues, "Choisissez un jour de visite."),
  reglement: z.literal("on", "Vous devez accepter le règlement."),
  newsletter: z.literal("on").optional(),
  // Pot de miel anti-robots : doit rester vide
  website: z.string().max(0).optional(),
})

export type ContestField = "prenom" | "nom" | "email" | "tel" | "jour" | "reglement"

export type ContestState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error"
      message: string
      fieldErrors?: Partial<Record<ContestField, string>>
      /** Valeurs saisies, réinjectées car React réinitialise le formulaire après l'action */
      values: Record<string, string>
    }

export async function submitContest(_prev: ContestState, formData: FormData): Promise<ContestState> {
  const raw = Object.fromEntries(
    [...formData.entries()].filter((e): e is [string, string] => typeof e[1] === "string" && e[1] !== ""),
  )
  const values = Object.fromEntries(Object.entries(raw).filter(([k]) => k !== "website"))
  const parsed = ContestSchema.safeParse(raw)

  if (!parsed.success) {
    const flat = z.flattenError(parsed.error).fieldErrors
    // Le pot de miel rempli : on simule un succès sans rien enregistrer
    if (flat.website) return { status: "success" }
    const fieldErrors: Partial<Record<ContestField, string>> = {}
    for (const key of ["prenom", "nom", "email", "tel", "jour", "reglement"] as const) {
      const first = flat[key]?.[0]
      if (first) fieldErrors[key] = first
    }
    return { status: "error", message: "Merci de vérifier les champs indiqués.", fieldErrors, values }
  }

  const data = parsed.data
  const config = getBrevoConfig()

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contest] Brevo non configuré : participation simulée", { email: data.email })
      return { status: "success" }
    }
    console.error("[contest] Variables BREVO_* manquantes")
    return { status: "error", message: "Le jeu-concours est momentanément indisponible. Réessayez plus tard.", values }
  }

  const listIds = [config.BREVO_CONTEST_LIST_ID]
  if (data.newsletter) listIds.push(config.BREVO_NEWSLETTER_LIST_ID)

  try {
    await getBrevoClient(config.BREVO_API_KEY).contacts.createContact({
      email: data.email,
      listIds,
      updateEnabled: true,
      attributes: {
        PRENOM: data.prenom,
        NOM: data.nom,
        JOUR_VISITE: data.jour,
        ...(data.tel ? { TELEPHONE: data.tel } : {}),
        OPTIN_NEWSLETTER: Boolean(data.newsletter),
      },
    })
    return { status: "success" }
  } catch (err) {
    if (err instanceof BrevoError) {
      console.error("[contest] Brevo", err.statusCode, err.body)
    } else {
      console.error("[contest]", err)
    }
    return { status: "error", message: "Une erreur est survenue lors de l’enregistrement. Réessayez dans un instant.", values }
  }
}
