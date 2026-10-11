import { ArtistsMarquee } from "@/components/sections/artists-marquee"
import { Artists } from "@/components/sections/artists"
import { Contest } from "@/components/sections/contest"
import { Edition } from "@/components/sections/edition"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { History } from "@/components/sections/history"
import { Journey } from "@/components/sections/journey"
import { PageMotion } from "@/components/motion/page-motion"
import { Meeting } from "@/components/sections/meeting"
import { PracticalInfo } from "@/components/sections/practical-info"
import { VideoTriptych } from "@/components/sections/video-triptych"
import { FAQ } from "@/lib/content"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ExhibitionEvent",
      name: "Salon d’Automne 2026 — 123ᵉ édition",
      startDate: "2026-10-28T11:00:00+01:00",
      endDate: "2026-11-01T18:00:00+01:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Place de la Concorde",
        address: { "@type": "PostalAddress", addressLocality: "Paris", postalCode: "75008", addressCountry: "FR" },
      },
      organizer: { "@type": "Organization", name: "Société du Salon d’Automne" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main>
        <Hero />
        <ArtistsMarquee />
        <Edition />
        <VideoTriptych />
        <Artists />
        <Journey />
        <Meeting />
        <History />
        <Contest />
        <PracticalInfo />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <PageMotion />
    </>
  )
}
