import Image from "next/image"
import { artistUrl, IMAGES, STEFAN_PORTRAIT_POSITION } from "@/lib/content"

export function Meeting() {
  return (
    <section id="rencontre" aria-labelledby="rencontre-titre" className="bg-white">
      <div className="mx-auto grid max-w-[1288px] grid-cols-2 items-center gap-20 px-6 py-[120px] max-tpl:grid-cols-1">
        <div className="flex justify-center">
          <figure
            data-reveal
            className="relative m-0 aspect-square w-[min(100%,440px)] overflow-hidden rounded-full bg-ink shadow-[0_0_0_10px_#ffffff,0_0_0_11px_#cdb47a,0_0_0_26px_#ffffff,0_0_0_27px_#dde2da]"
          >
            <Image
              src={IMAGES.stefanBeiuPortrait}
              alt="Portrait de Stefan Beiu, artiste peintre et chef de section au Salon d’Automne"
              fill
              sizes="(min-width: 861px) 440px, 90vw"
              className="object-cover"
              style={{ objectPosition: STEFAN_PORTRAIT_POSITION }}
            />
          </figure>
        </div>
        <div>
          <p className="eyebrow">05. Rencontre exceptionnelle</p>
          <h2
            id="rencontre-titre"
            data-split
            className="font-display m-0 text-[clamp(52px,6.5vw,92px)] leading-[0.95] font-medium tracking-[-0.015em]"
          >
            Stefan <span className="text-gold italic">Beiu.</span>
          </h2>
          <p className="m-0 mt-3.5 text-[15px] font-semibold text-muted">
            Artiste peintre · Chef de section au Salon d’Automne · [Nom de la section]
          </p>
          <blockquote data-reveal className="m-0 mt-9 flex gap-3.5 p-0">
            <span aria-hidden="true" className="font-display text-[56px] leading-[0.8] text-gold">
              ❝
            </span>
            <p className="font-display m-0 text-[25px] leading-[1.4] italic">
              [Citation de Stefan Beiu sur sa section ou sur le Salon.]
            </p>
          </blockquote>
          <p data-reveal className="m-0 mt-7 max-w-[50ch] text-[17px] leading-[1.75] text-body">
            Au Salon d’Automne, chaque section est portée par un artiste qui sélectionne, accroche et fait dialoguer les
            œuvres. Peintre et artiste résident InRealArt, Stefan Beiu ouvre sa section aux gagnants pour une visite
            commentée, au plus près des œuvres et de leurs coulisses.
          </p>
          <div data-stagger className="mt-9 grid grid-cols-2 gap-4 max-tpl:grid-cols-1">
            {[
              { label: "Quand", value: "[Date et heure]" },
              { label: "Où", value: "Espace de sa section" },
            ].map((item) => (
              <div key={item.label} className="rounded-[2px] border border-line px-5 py-[18px]">
                <p className="m-0 text-xs font-semibold text-muted">{item.label}</p>
                <p className="font-display m-0 mt-1.5 text-[22px]">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#jeu" className="btn-solid">
              Je veux le rencontrer
            </a>
            <a href={artistUrl("stefan-beiu")} target="_blank" rel="noopener" className="btn-outline">
              Voir ses œuvres
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
