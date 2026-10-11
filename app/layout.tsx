import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"

/* Polices de la DA In Real Art, aux graisses utilisées par le template */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "InRealArt — Invitations Salon d’Automne 2026",
  description:
    "Du 28 octobre au 1ᵉʳ novembre 2026, place de la Concorde : gagnez vos invitations au Salon d’Automne, rencontrez six artistes InRealArt et vivez une visite privée avec Stefan Beiu.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "InRealArt",
    images: [{ url: "/images/hero/hero_main.webp", width: 1800, height: 2400, alt: "Le Salon d’Automne place de la Concorde" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

/** Drapeau posé avant le premier rendu : autorise le masquage des éléments animés par GSAP. */
const bootScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')}catch(e){}`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
