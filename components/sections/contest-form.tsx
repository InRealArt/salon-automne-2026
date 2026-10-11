"use client"

import { useActionState, useState } from "react"
import { submitContest, type ContestField, type ContestState } from "@/app/actions/contest"
import { VISIT_DAYS } from "@/lib/content"

const initial: ContestState = { status: "idle" }
const label = "text-[13px] font-semibold"
const check = "flex cursor-pointer items-start gap-3 text-sm leading-normal text-body"
const box = "mt-px size-5 shrink-0 accent-ink"

function FieldError({ state, field }: { state: ContestState; field: ContestField }) {
  const msg = state.status === "error" ? state.fieldErrors?.[field] : undefined
  return msg ? (
    <p id={`err-${field}`} className="m-0 text-[13px] text-[#b3261e]">
      {msg}
    </p>
  ) : null
}

export function ContestForm() {
  const [state, action, pending] = useActionState(submitContest, initial)
  const [dismissed, setDismissed] = useState<ContestState | null>(null)
  const sent = state.status === "success" && dismissed !== state

  const values = state.status === "error" ? state.values : {}
  const aria = (f: ContestField) =>
    state.status === "error" && state.fieldErrors?.[f]
      ? { "aria-invalid": true as const, "aria-describedby": `err-${f}` }
      : {}

  if (sent) {
    return (
      <div role="status" className="flex min-h-[420px] flex-col justify-center gap-4">
        <span className="font-display text-[64px] leading-none text-gold italic">Merci.</span>
        <p className="m-0 text-[17px] leading-[1.65] text-body">
          Votre participation est enregistrée. Les gagnants seront prévenus par e-mail après le tirage au sort.
        </p>
        <button
          type="button"
          onClick={() => setDismissed(state)}
          className="mt-2 min-h-11 cursor-pointer self-start rounded-full border border-ink bg-transparent px-[22px] py-3 text-sm font-semibold text-ink"
        >
          Nouvelle participation
        </button>
      </div>
    )
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-[18px]">
      <p className="font-display m-0 mb-1 text-[30px] font-medium">
        Je <span className="italic">participe</span>
      </p>

      {state.status === "error" ? (
        <p role="alert" className="m-0 border-l-2 border-[#b3261e] pl-3 text-sm text-body">
          {state.message}
        </p>
      ) : null}

      <div className="grid grid-cols-2 gap-3.5 max-tpl:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-prenom" className={label}>Prénom</label>
          <input id="f-prenom" name="prenom" type="text" required autoComplete="given-name" defaultValue={values.prenom} className="field" {...aria("prenom")} />
          <FieldError state={state} field="prenom" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-nom" className={label}>Nom</label>
          <input id="f-nom" name="nom" type="text" required autoComplete="family-name" defaultValue={values.nom} className="field" {...aria("nom")} />
          <FieldError state={state} field="nom" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-email" className={label}>Adresse e-mail</label>
        <input id="f-email" name="email" type="email" required autoComplete="email" defaultValue={values.email} className="field" {...aria("email")} />
        <FieldError state={state} field="email" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-tel" className={label}>Téléphone (optionnel)</label>
        <input id="f-tel" name="tel" type="tel" autoComplete="tel" defaultValue={values.tel} className="field" {...aria("tel")} />
        <FieldError state={state} field="tel" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-jour" className={label}>Jour de visite souhaité</label>
        <select id="f-jour" name="jour" defaultValue={values.jour ?? VISIT_DAYS[0].value} className="field" {...aria("jour")}>
          {VISIT_DAYS.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <FieldError state={state} field="jour" />
      </div>

      {/* Pot de miel anti-robots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-website">Ne pas remplir</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className={check}>
        <input type="checkbox" name="reglement" required defaultChecked={values.reglement === "on"} className={box} {...aria("reglement")} />
        <span>
          J’accepte le <a href="#faq">règlement du jeu</a> et le traitement de mes données pour le tirage au sort.
        </span>
      </label>
      <FieldError state={state} field="reglement" />
      <label className={check}>
        <input type="checkbox" name="newsletter" defaultChecked={values.newsletter === "on"} className={box} />
        <span>Je souhaite découvrir les talents InRealArt en avant-première.</span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-1.5 min-h-[52px] cursor-pointer rounded-full border-none bg-ink px-7 py-4 text-[15px] font-semibold text-white disabled:cursor-progress disabled:opacity-60"
      >
        {pending ? "Envoi en cours…" : "Valider ma participation"}
      </button>
      <p className="m-0 text-xs leading-normal text-muted">
        Jeu gratuit sans obligation d’achat. Vos données sont traitées conformément au RGPD et ne sont jamais revendues.
      </p>
    </form>
  )
}
