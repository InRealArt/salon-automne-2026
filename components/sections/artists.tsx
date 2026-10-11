import Image from "next/image"
import { ARTISTS, artistUrl } from "@/lib/content"

const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]"

export function Artists() {
  return (
    <section id="artistes" aria-labelledby="artistes-titre" className="bg-white">
      <div className="mx-auto max-w-[1288px] px-6 py-28">
        <div className="grid grid-cols-2 items-end gap-x-16 gap-y-6 max-tpl:grid-cols-1">
          <div>
            <p className="eyebrow">03. Les artistes</p>
            <h2 id="artistes-titre" data-split className="title-section">
              Six talents InRealArt <span className="italic">au Salon.</span>
            </h2>
          </div>
          <p data-reveal className="m-0 max-w-[46ch] text-[17px] leading-[1.75] text-body">
            Artistes résidents InRealArt, ils exposent au Salon d’Automne 2026 et vous y attendent, en personne, aux côtés de
            leurs œuvres.
          </p>
        </div>
        <ul data-stagger className="m-0 mt-14 grid list-none grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] border-t border-line-strong p-0">
          {ARTISTS.map((artist) => (
            /* Carte entièrement cliquable : le lien porte sur le nom et s'étend à toute la carte (after:inset-0) */
            <li
              key={artist.slug}
              className="group relative flex items-center gap-6 border-b border-line-strong py-8 pr-2 outline-offset-4 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-gold max-tpl:gap-5"
            >
              <span className="relative size-[132px] shrink-0 overflow-hidden rounded-full bg-cream shadow-[0_0_0_5px_#ffffff,0_0_0_6px_#cdb47a] transition-shadow duration-500 group-hover:shadow-[0_0_0_5px_#ffffff,0_0_0_6px_#9a7121] max-tpl:size-[104px]">
                <Image
                  src={artist.portrait}
                  alt={`Portrait de ${artist.name}`}
                  fill
                  sizes="(min-width: 861px) 132px, 104px"
                  className={`object-cover transition-transform duration-700 ${ease} group-hover:scale-[1.06]`}
                />
              </span>
              <div className="min-w-0 flex-1">
                {artist.chief ? (
                  <span className="mb-1.5 inline-block text-[11px] font-bold tracking-[0.06em] text-gold uppercase">
                    Chef de section
                  </span>
                ) : null}
                <h3 className="font-display m-0 text-[28px] leading-[1.1] font-medium">
                  <a
                    href={artistUrl(artist.slug)}
                    target="_blank"
                    rel="noopener"
                    className="text-ink no-underline outline-none after:absolute after:inset-0 after:content-[''] hover:text-ink"
                  >
                    {artist.name}
                    <span className="sr-only"> — voir son profil sur InRealArt (nouvel onglet)</span>
                  </a>
                </h3>
                <p className="m-0 mt-1.5 text-sm text-muted">{artist.discipline}</p>
                <p
                  aria-hidden="true"
                  className={`m-0 mt-2.5 text-xs font-semibold text-gold opacity-0 transition-[opacity,translate] duration-500 ${ease} -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 group-has-[a:focus-visible]:translate-x-0 group-has-[a:focus-visible]:opacity-100`}
                >
                  Voir le profil InRealArt
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
