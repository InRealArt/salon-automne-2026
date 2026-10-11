import Image from "next/image"
import { IMAGES } from "@/lib/content"
import { ContestForm } from "./contest-form"

export function Contest() {
  return (
    <section id="jeu" aria-labelledby="jeu-titre" className="bg-white">
      <div className="mx-auto grid max-w-[1288px] grid-cols-2 items-start gap-[72px] px-6 py-[120px] max-tpl:grid-cols-1">
        <div>
          <p className="eyebrow">07. Jeu-concours</p>
          <h2
            id="jeu-titre"
            data-split
            className="font-display m-0 text-[clamp(44px,5.5vw,76px)] leading-none font-medium tracking-[-0.015em]"
          >
            Gagnez vos <span className="text-gold italic">invitations.</span>
          </h2>
          <p data-reveal className="m-0 mt-7 max-w-[46ch] text-[17px] leading-[1.75] text-body">
            [NOMBRE] invitations pour deux personnes sont à gagner, avec accès à la visite privée de Stefan Beiu.
            Participation gratuite, tirage au sort le [DATE DU TIRAGE].
          </p>
          <figure
            data-reveal
            className="m-0 mt-10 max-w-[440px] -rotate-[1.5deg] bg-white p-2.5 shadow-[0_0_0_1px_#cdb47a,0_30px_50px_-30px_rgba(20,39,30,0.45)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.contest}
                alt="Des visiteurs devant les œuvres exposées au Salon"
                fill
                sizes="(min-width: 861px) 420px, 90vw"
                className="object-cover object-[center_62%]"
              />
            </div>
            <figcaption className="font-display mt-2.5 text-[15px] italic">Votre place vous attend.</figcaption>
          </figure>
        </div>
        <div
          data-reveal
          className="box-border rounded-[2px] border border-line bg-white p-10 shadow-[0_0_0_6px_#f6f7f2] max-tpl:p-6"
        >
          <ContestForm />
        </div>
      </div>
    </section>
  )
}
