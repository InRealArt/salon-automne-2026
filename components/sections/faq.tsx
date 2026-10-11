import { FAQ } from "@/lib/content"

/** FAQ du template, en <details name> natifs (accordéon exclusif, première question ouverte). */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titre" className="bg-white">
      <div className="mx-auto grid max-w-[1288px] grid-cols-2 items-start gap-12 px-6 py-28 max-tpl:grid-cols-1">
        <div>
          <p className="eyebrow">08. Questions fréquentes</p>
          <h2 id="faq-titre" data-split className="title-section">
            Tout savoir <span className="italic">avant de venir.</span>
          </h2>
          <a
            href="mailto:contact@inrealart.com"
            className="mt-7 inline-flex min-h-11 items-center rounded-full border border-ink px-6 py-3.5 text-sm font-semibold text-ink no-underline hover:text-ink"
          >
            Nous contacter
          </a>
        </div>
        <div data-stagger className="border-t border-line-strong">
          {FAQ.map((item, i) => (
            <details key={item.q} name="faq" open={i === 0} className="faq-item group border-b border-line-strong">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-[22px] text-left text-ink [&::-webkit-details-marker]:hidden">
                <span className="font-display text-[22px] leading-[1.25] font-medium">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-gold text-lg text-gold"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="m-0 mb-6 max-w-[56ch] text-base leading-[1.75] text-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
