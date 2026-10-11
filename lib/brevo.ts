import "server-only"
import { BrevoClient } from "@getbrevo/brevo"
import { z } from "zod"

const BrevoEnv = z.object({
  BREVO_API_KEY: z.string().min(1),
  BREVO_CONTEST_LIST_ID: z.coerce.number().int().positive(),
  BREVO_NEWSLETTER_LIST_ID: z.coerce.number().int().positive(),
})

export type BrevoConfig = z.infer<typeof BrevoEnv>

/** Retourne la config Brevo, ou null si elle est absente / invalide. */
export function getBrevoConfig(): BrevoConfig | null {
  const parsed = BrevoEnv.safeParse(process.env)
  return parsed.success ? parsed.data : null
}

let client: BrevoClient | null = null

export function getBrevoClient(apiKey: string): BrevoClient {
  client ??= new BrevoClient({ apiKey, timeoutInSeconds: 15, maxRetries: 2 })
  return client
}
