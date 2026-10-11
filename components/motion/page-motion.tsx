"use client"

import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap"

/**
 * Animations GSAP de la page, pilotées par attributs :
 * - data-intro="badge|title|text|cta|visual|inset|caption|figures" : entrée du hero
 * - data-split      : titre révélé ligne par ligne au scroll (SplitText + masque)
 * - data-reveal     : apparition en fondu montant au scroll
 * - data-stagger    : les enfants directs apparaissent en cascade
 * - data-count      : compteur animé (valeur numérique du texte)
 * - data-parallax   : décalage vertical au scroll (px), ajouté au décalage d'origine
 * - data-zoom       : léger dézoom au scroll (image de fond)
 * Le rendu final est identique au template ; tout est coupé si l'utilisateur préfère réduire les animations.
 */
export function PageMotion() {
  useGSAP(() => {
    const root = document.documentElement
    const q = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel)
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = []

      /* ---------- Entrée du hero ---------- */
      const intro = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
      const heroTitle = document.querySelector<HTMLElement>('[data-intro="title"]')
      if (heroTitle) {
        const split = SplitText.create(heroTitle, { type: "lines", mask: "lines" })
        splits.push(split)
        intro.from(split.lines, { yPercent: 110, duration: 1.15, stagger: 0.1, ease: "expo.out" }, 0.15)
      }
      intro
        .from('[data-intro="badge"]', { autoAlpha: 0, y: 16 }, 0)
        .from('[data-intro="text"]', { autoAlpha: 0, y: 24 }, 0.55)
        .from('[data-intro="cta"] > *', { autoAlpha: 0, y: 20, stagger: 0.08 }, 0.7)
        .from(
          '[data-intro="visual"]',
          { clipPath: "inset(100% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
          0.2,
        )
        .from('[data-intro="visual"] img', { scale: 1.25, duration: 1.8, ease: "expo.out" }, 0.3)
        .from('[data-intro="inset"]', { autoAlpha: 0, y: 70, rotate: 4, duration: 1.2, ease: "expo.out" }, 0.9)
        .from('[data-intro="caption"]', { autoAlpha: 0, x: 24 }, 1.15)
        .from('[data-intro="figures"] > *', { autoAlpha: 0, y: 30, stagger: 0.08 }, 0.9)

      // Les états initiaux sont posés : on lève le masquage CSS
      root.classList.add("motion-ready")

      /* ---------- Compteurs ---------- */
      q('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count)
        const suffix = el.dataset.suffix ?? ""
        const fmt = new Intl.NumberFormat("fr-FR")
        const obj = { v: 0 }
        el.textContent = `0${suffix}`
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          delay: 1,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = fmt.format(Math.round(obj.v)) + suffix
          },
        })
      })

      /* ---------- Titres de section ---------- */
      q('[data-split]').forEach((el) => {
        const split = SplitText.create(el, { type: "lines", mask: "lines" })
        splits.push(split)
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
      })

      /* ---------- Apparitions ---------- */
      q('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 40,
          duration: 1,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        })
      })

      q('[data-stagger]').forEach((el) => {
        gsap.from(el.children, {
          autoAlpha: 0,
          y: 32,
          duration: 0.9,
          stagger: 0.09,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
      })

      /* ---------- Zoom de l’image de fond ---------- */
      q('[data-zoom]').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.18 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        )
      })

      // Recalcule les positions une fois les polices chargées
      void document.fonts.ready.then(() => ScrollTrigger.refresh())

      return () => {
        splits.forEach((s) => s.revert())
        root.classList.remove("motion-ready")
      }
    })

    /* ---------- Parallax (desktop uniquement) ---------- */
    mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
      q('[data-parallax]').forEach((el) => {
        const amount = Number(el.dataset.parallax)
        gsap.fromTo(
          el,
          { y: `+=${amount}` },
          {
            y: `-=${amount * 2}`,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        )
      })
    })
  })

  return null
}
