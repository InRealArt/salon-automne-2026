import { Fragment } from "react"
import { ARTISTS } from "@/lib/content"

/** Bandeau des artistes (template) — les noms apparaissent en cascade. */
export function ArtistsMarquee() {
  return (
    <section aria-label="Les artistes InRealArt présents" className="border-y border-line bg-white">
      <p
        data-stagger
        className="font-display mx-auto my-0 max-w-[1288px] px-6 py-7 text-center text-[clamp(22px,2.6vw,34px)] leading-[1.4] italic"
      >
        {ARTISTS.map((a, i) => (
          <Fragment key={a.slug}>
            <span className="inline-block">{a.name}</span>
            {i < ARTISTS.length - 1 ? (
              <>
                {" "}
                <span className="inline-block text-gold">✦</span>{" "}
              </>
            ) : null}
          </Fragment>
        ))}
      </p>
    </section>
  )
}
