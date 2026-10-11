import { TIMELINE } from "@/lib/content"

export function History() {
  return (
    <section id="histoire" aria-labelledby="histoire-titre" className="bg-alt">
      <div className="mx-auto max-w-[1288px] px-6 py-28">
        <div className="grid grid-cols-2 items-end gap-x-16 gap-y-6 max-tpl:grid-cols-1">
          <div>
            <p className="eyebrow">06. Historique</p>
            <h2 id="histoire-titre" data-split className="title-section">
              Là où l’art moderne <span className="italic">a vu le jour.</span>
            </h2>
          </div>
          <p data-reveal className="m-0 max-w-[48ch] text-[17px] leading-[1.75] text-body">
            Fondé en 1903 par l’architecte Frantz Jourdain et un cercle d’artistes et d’écrivains, le Salon d’Automne est un
            salon conçu par des artistes, pour les artistes.
          </p>
        </div>
        <ol className="m-0 mt-14 list-none p-0">
          {TIMELINE.map((t) => (
            <li
              key={t.year}
              data-reveal
              className="grid grid-cols-[180px_minmax(0,1fr)_minmax(0,1.2fr)] items-baseline gap-10 border-t border-line-strong py-[30px] max-tpl:grid-cols-1 max-tpl:gap-2"
            >
              <div className="font-display text-[56px] leading-none text-gold italic">{t.year}</div>
              <h3 className="font-display m-0 text-[28px] leading-[1.15] font-medium">{t.title}</h3>
              <p className="m-0 text-base leading-[1.7] text-body">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
