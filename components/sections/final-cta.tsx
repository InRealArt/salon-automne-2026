import Image from "next/image"
import { Magnetic } from "@/components/motion/magnetic"
import { IMAGES } from "@/lib/content"

export function FinalCta() {
  return (
    <section aria-label="Dernier appel" className="relative overflow-hidden bg-ink">
      <div data-zoom className="absolute inset-0 opacity-[0.38]">
        <Image src={IMAGES.concorde} alt="" aria-hidden="true" fill sizes="100vw" className="object-cover object-[center_40%]" />
      </div>
      <div className="relative mx-auto flex max-w-[1288px] flex-col items-center gap-7 px-6 py-[140px] text-center text-white">
        <p data-reveal className="font-display m-0 text-xl text-honey italic">
          Place de la Concorde · 28 octobre — 1ᵉʳ novembre
        </p>
        <h2 data-split className="font-display m-0 max-w-[900px] text-[clamp(40px,6vw,84px)] leading-none font-medium">
          Découvrez les talents d’exception <span className="text-honey italic">en avant-première.</span>
        </h2>
        <Magnetic>
          <a href="#jeu" className="btn-solid bg-white px-[30px] text-ink hover:text-ink">
            Gagner mes invitations
          </a>
        </Magnetic>
      </div>
    </section>
  )
}
