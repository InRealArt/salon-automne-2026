import { Magnetic } from "@/components/motion/magnetic"
import { NAV_LINKS } from "@/lib/content"

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-[1288px] flex-wrap items-center justify-between gap-4 px-6 py-3.5"
      >
        <a href="#accueil" className="flex items-baseline gap-2.5 text-ink no-underline">
          <span className="font-display text-[25px] font-semibold tracking-[-0.01em]">InRealArt</span>
          <span className="font-display text-[15px] text-gold italic">× Salon d’Automne</span>
        </a>
        <div className="flex gap-[30px] text-sm font-medium max-tpl:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-ink no-underline transition-colors duration-300 hover:text-gold">
              {link.label}
            </a>
          ))}
        </div>
        <Magnetic>
          <a href="#jeu" className="btn-solid min-h-11 px-[22px] py-3 text-sm">
            Gagner mes invitations
          </a>
        </Magnetic>
      </nav>
    </header>
  )
}
