export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1288px] flex-wrap items-center justify-between gap-4 px-6 py-10 text-[13px] text-muted">
        <span className="font-display text-[22px] font-semibold text-ink">InRealArt</span>
        <span>Opération InRealArt · Salon d’Automne, 123ᵉ édition</span>
        <span>
          <a href="#faq" className="text-muted">Règlement</a> · <a href="#faq" className="text-muted">Mentions légales</a> · © 2026 InRealArt
        </span>
      </div>
    </footer>
  )
}
