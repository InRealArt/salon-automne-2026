import Image from "next/image"
import { AmbientVideo } from "@/components/ui/ambient-video"
import { IMAGES, VIDEO_SRC } from "@/lib/content"

function SidePhoto({ src, alt, caption, offset }: { src: string; alt: string; caption: string; offset: number }) {
  return (
    <figure
      data-parallax="30"
      className="m-0 max-tpl:hidden"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden border border-bronze">
        <Image src={src} alt={alt} fill sizes="28vw" className="object-cover" />
      </div>
      <figcaption className="font-display mt-3 text-[15px] text-cream/80 italic">{caption}</figcaption>
    </figure>
  )
}

export function VideoTriptych() {
  return (
    <section id="video" aria-labelledby="video-titre" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1288px] px-6 py-28">
        <div className="grid grid-cols-2 items-end gap-x-16 gap-y-6 max-tpl:grid-cols-1">
          <div>
            <p className="eyebrow text-honey">02. Le Salon en mouvement</p>
            <h2 id="video-titre" data-split className="title-section">
              Entrez, <span className="text-honey italic">vous y êtes déjà.</span>
            </h2>
          </div>
          <p data-reveal className="m-0 max-w-[46ch] text-[17px] leading-[1.75] text-cream/85">
            Les allées pleines, les toiles qui se répondent, les artistes présents aux côtés de leurs œuvres : vingt secondes
            dans les pavillons de l’édition 2025.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-7 max-tpl:grid-cols-1">
          <SidePhoto src={IMAGES.allee} alt="Une allée du Salon pleine de visiteurs" caption="Les allées, un samedi après-midi" offset={40} />
          <figure data-reveal className="m-0 bg-cream p-2.5 shadow-[0_0_0_1px_#d3ae5f]">
            <AmbientVideo
              src={VIDEO_SRC}
              poster={IMAGES.videoPoster}
              label="Vidéo : visite des allées du Salon d’Automne 2025"
              className="block aspect-[9/16] w-full bg-ink-3 object-cover"
            />
          </figure>
          <SidePhoto
            src={IMAGES.standOr}
            alt="Des visiteurs échangent devant une grande toile dorée"
            caption="Face aux œuvres, la conversation commence"
            offset={-40}
          />
        </div>
      </div>
    </section>
  )
}
