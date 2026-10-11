import { Tour } from "./tour"

export function Journey() {
  return (
    <section id="parcours" aria-labelledby="parcours-titre" className="bg-alt">
      <div className="mx-auto max-w-[1288px] px-6 py-28">
        <div className="grid grid-cols-2 items-end gap-x-16 gap-y-6 max-tpl:grid-cols-1">
          <div>
            <p className="eyebrow">04. Le parcours</p>
            <h2 id="parcours-titre" data-split className="title-section">
              Cinq étapes, <span className="italic">une seule visite.</span>
            </h2>
          </div>
          <p data-reveal className="m-0 max-w-[46ch] text-[17px] leading-[1.7] text-muted">
            Suivez le chemin d’un invité, de la place de la Concorde jusqu’à la{" "}
            <b className="font-semibold text-ink">visite privée de Stefan Beiu</b>. Lancez la visite ou cliquez sur une étape.
          </p>
        </div>
        <Tour />
      </div>
    </section>
  )
}
