import Image from "next/image"
import { Magnetic } from "@/components/motion/magnetic"
import { FIGURES, IMAGES } from "@/lib/content"

const frame = "shadow-[0_0_0_1px_#cdb47a,0_40px_60px_-30px_rgba(20,39,30,0.45)]"

export function Hero() {
  return (
    <section id="accueil" className="mx-auto max-w-[1288px] px-6 pb-16 pt-[72px]">
      <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-[72px] max-tpl:grid-cols-1">
        <div>
          <span
            data-intro="badge"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-[7px] text-[13px] font-semibold"
          >
            <span aria-hidden="true" className="size-[7px] rounded-full bg-gold" />
            Jeu-concours · 123ᵉ édition
          </span>
          <h1
            data-intro="title"
            className="font-display mt-7 text-[clamp(46px,6vw,86px)] leading-[0.98] font-medium tracking-[-0.02em]"
          >
            InRealArt vous ouvre les portes du <span className="text-gold italic">Salon d’Automne.</span>
          </h1>
          <p data-intro="text" className="mt-7 max-w-[500px] text-lg leading-[1.7] text-body">
            Du 28 octobre au 1ᵉʳ novembre 2026, place de la Concorde. Gagnez vos invitations, retrouvez six artistes
            InRealArt au cœur du Salon et vivez une visite privée avec <strong className="text-ink">Stefan Beiu</strong>,
            chef de section.
          </p>
          <div data-intro="cta" className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <a href="#jeu" className="btn-solid">
                Je tente ma chance
              </a>
            </Magnetic>
            <a href="#video" className="btn-outline">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 1 L11 6 L3 11 Z" fill="currentColor" />
              </svg>
              Voir le Salon en vidéo
            </a>
          </div>
        </div>

        <div className="relative pb-14 pl-14">
          <figure data-intro="visual" className={`m-0 bg-white p-3 ${frame}`}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={IMAGES.concorde}
                alt="Le pavillon du Salon d’Automne place de la Concorde, avec l’obélisque et la tour Eiffel en fond"
                fill
                preload
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 861px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
          <figure
            data-intro="inset"
            className="absolute bottom-0 left-0 m-0 w-[calc(42%+16px)] -rotate-3 bg-white p-2 shadow-[0_0_0_1px_#cdb47a,0_30px_40px_-20px_rgba(20,39,30,0.5)] max-tpl:hidden"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={IMAGES.accueil}
                alt="Une visiteuse accueille le public, bras ouverts, devant l’entrée du Salon"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </figure>
          <div data-intro="caption" className="absolute -right-2 bottom-1.5 max-w-[250px] border border-line bg-white px-3.5 py-2.5">
            <p className="font-display m-0 text-[15px] italic">Place de la Concorde</p>
            <p className="m-0 mt-0.5 text-xs text-muted">Pavillons du Salon, édition 2025</p>
          </div>
        </div>
      </div>

      <dl data-intro="figures" className="mt-20 mb-0 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] border-t border-ink">
        {FIGURES.map((f) => (
          <div key={f.label} className="pt-6 pr-6">
            <dt className="font-display text-[54px] leading-none font-medium" {...("count" in f ? { "data-count": f.count, "data-suffix": f.suffix } : {})}>
              {f.value}
            </dt>
            <dd className="m-0 mt-2.5 text-sm text-muted">{f.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
