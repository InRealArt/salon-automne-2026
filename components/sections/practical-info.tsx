import { PRACTICAL_INFO } from "@/lib/content"

export function PracticalInfo() {
  return (
    <section aria-label="Informations pratiques" className="border-t border-line bg-alt">
      <div data-stagger className="mx-auto grid max-w-[1288px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-6 py-[72px]">
        {PRACTICAL_INFO.map((info) => (
          <div key={info.label}>
            <p className="m-0 mb-2.5 text-[13px] font-semibold text-gold">{info.label}</p>
            <p className="font-display m-0 text-[25px] leading-[1.2]">{info.value}</p>
            <p className="m-0 mt-2 text-sm text-muted">{info.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
