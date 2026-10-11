import Image from "next/image"
import { EDITION_FACTS, IMAGES } from "@/lib/content"

export function Edition() {
  return (
    <section id="affiche" aria-labelledby="affiche-titre" className="bg-alt">
      <div className="mx-auto grid max-w-[1288px] grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-center gap-20 px-6 py-28 max-tpl:grid-cols-1">
        <figure
          data-reveal
          className="m-0 bg-white p-[18px] shadow-[0_0_0_1px_#cdb47a,0_0_0_7px_#ffffff,0_0_0_8px_#dde2da,0_50px_70px_-40px_rgba(20,39,30,0.5)]"
        >
          <div className="relative aspect-[707/1000] overflow-hidden">
            <Image
              src={IMAGES.affiche}
              alt="Affiche officielle du Salon d’Automne 2026 : du 28 octobre au 1er novembre, place de la Concorde"
              fill
              sizes="(min-width: 861px) 42vw, 90vw"
              className="object-cover"
            />
          </div>
        </figure>
        <div>
          <p className="eyebrow">01. L’édition 2026</p>
          <h2 id="affiche-titre" data-split className="title-section">
            123 ans de création, <span className="italic">une nouvelle affiche.</span>
          </h2>
          <p data-reveal className="mt-7 mb-0 max-w-[50ch] text-[17px] leading-[1.75] text-body">
            Pour 2026, le Salon revient à ses fondamentaux : l’artiste, le geste, la création. Plus de 1 000 œuvres
            réparties en 18 courants, des artistes de 50 nationalités, et la littérature mise à l’honneur par le parrain de
            l’édition, l’écrivain Gilles Legardinier.
          </p>
          <dl data-stagger className="mt-9 mb-0 grid grid-cols-2 border-t border-line-strong max-tpl:grid-cols-1">
            {EDITION_FACTS.map((fact, i) => (
              <div
                key={fact.label}
                className={`border-b border-line-strong py-[18px] ${i % 2 === 0 ? "pr-4" : "pl-4 max-tpl:pl-0"}`}
              >
                <dt className="text-xs font-semibold text-muted">{fact.label}</dt>
                <dd className="font-display m-0 mt-1 text-2xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
