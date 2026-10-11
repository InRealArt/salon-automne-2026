"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { TOUR_STEPS } from "@/lib/content"

const STEP_MS = 3800
const LAST = TOUR_STEPS.length - 1

/** Parcours guidé en cinq étapes (template), lecture automatique optionnelle. */
export function Tour() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const detail = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => {
      if (step >= LAST) setPlaying(false)
      else setStep(step + 1)
    }, STEP_MS)
    return () => clearTimeout(t)
  }, [playing, step])

  // Transition GSAP du détail à chaque changement d'étape
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-tour-photo]",
          { clipPath: "inset(0% 0% 0% 100%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.out" },
        )
        gsap.fromTo(
          "[data-tour-text] > *",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power3.out" },
        )
      })
    },
    { scope: detail, dependencies: [step], revertOnUpdate: true },
  )

  const go = (i: number) => {
    setPlaying(false)
    setStep(Math.min(LAST, Math.max(0, i)))
  }

  const togglePlay = () => {
    if (playing) {
      setPlaying(false)
    } else {
      setStep(0)
      setPlaying(true)
    }
  }

  const cur = TOUR_STEPS[step] ?? TOUR_STEPS[0]!

  return (
    <>
      <div className="mt-10 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-[22px] gap-y-3 border-y border-line-strong py-3 max-tpl:grid-cols-1">
        <button
          type="button"
          onClick={togglePlay}
          aria-pressed={playing}
          className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-gold bg-white py-0 pr-[18px] pl-1.5 text-[15px] font-medium whitespace-nowrap text-ink"
        >
          <span aria-hidden="true" className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-white">
            {playing ? (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <rect x="2" y="1" width="3" height="10" fill="currentColor" />
                <rect x="7" y="1" width="3" height="10" fill="currentColor" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M3 1 L11 6 L3 11 Z" fill="currentColor" />
              </svg>
            )}
          </span>
          {playing ? "Pause" : "Lancer la visite"}
        </button>
        <p aria-live="polite" className="font-display m-0 text-[clamp(17px,1.7vw,22px)] leading-[1.3] text-gold italic">
          {playing ? cur.tour : "Une visite guidée en cinq étapes."}
        </p>
        <ol aria-hidden="true" className="m-0 flex list-none gap-1.5 p-0">
          {TOUR_STEPS.map((s, i) => (
            <li
              key={s.n}
              className={`h-0.5 w-[26px] transition-colors duration-[400ms] ${i <= step ? "bg-gold" : "bg-line-strong"}`}
            />
          ))}
        </ol>
      </div>

      <ol className="mt-12 flex list-none items-center p-0 max-tpl:flex-col max-tpl:items-stretch">
        {TOUR_STEPS.map((s, i) => {
          const active = i === step
          const passed = i < step
          const pillar = i === 3
          return (
            <li key={s.n} className="contents">
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={active ? "step" : undefined}
                className={`m-0 min-w-0 flex-1 cursor-pointer rounded-[2px] border px-4 pt-3.5 pb-4 text-left transition-[background-color,color,border-color,opacity] duration-[350ms] ${
                  active ? "border-ink bg-ink text-white" : `bg-white text-ink ${passed || pillar ? "border-gold" : "border-line-strong"}`
                } ${pillar ? "shadow-[0_0_0_3px_#f6f7f2,0_0_0_4px_#cdb47a]" : ""} ${i > step + 1 ? "opacity-60" : "opacity-100"}`}
              >
                <span className={`font-display block text-[15px] italic ${active ? "text-honey" : "text-gold"}`}>{s.n}</span>
                <span className="font-display mt-1 block text-[clamp(16px,1.45vw,19px)] leading-[1.15] font-medium">{s.title}</span>
                <span className={`mt-1.5 block text-[13px] leading-[1.35] ${active ? "text-white/80" : "text-muted"}`}>{s.sub}</span>
              </button>

              {i < LAST ? (
                <div className="relative flex min-h-32 flex-[0_0_92px] items-center justify-center max-tpl:min-h-0 max-tpl:flex-[0_0_104px]">
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-1/2 -translate-y-1/2 transition-colors duration-[400ms] max-tpl:inset-x-auto max-tpl:inset-y-0 max-tpl:left-1/2 max-tpl:top-0 max-tpl:w-0.5 max-tpl:-translate-x-1/2 max-tpl:translate-y-0 ${
                      passed ? "h-0.5 bg-gold" : "h-px bg-line-strong"
                    }`}
                  />
                  <figure
                    className={`relative z-[1] m-0 flex size-[68px] items-center justify-center overflow-hidden rounded-full bg-ink transition-[opacity,transform,filter,box-shadow] duration-500 ${
                      passed
                        ? "scale-[1.08] opacity-100 shadow-[0_0_0_3px_#f6f7f2,0_0_0_4px_#9a7121]"
                        : "scale-[0.82] opacity-45 grayscale shadow-[0_0_0_3px_#f6f7f2,0_0_0_4px_#b3bdb4]"
                    }`}
                  >
                    {s.thumb ? (
                      <Image src={s.thumb} alt={s.thumbLabel} fill sizes="68px" className="object-cover" style={{ objectPosition: s.thumbPosition }} />
                    ) : (
                      <span role="img" aria-label={s.thumbLabel} className="font-display text-[22px] text-honey italic">
                        SB
                      </span>
                    )}
                  </figure>
                  <span
                    className={`font-display absolute top-[calc(50%+44px)] left-1/2 w-[120px] -translate-x-1/2 text-center text-xs leading-[1.25] text-muted italic transition-opacity duration-500 max-tpl:top-1/2 max-tpl:left-[calc(50%+46px)] max-tpl:translate-x-0 max-tpl:-translate-y-1/2 max-tpl:text-left ${
                      passed ? "opacity-100" : "opacity-45"
                    }`}
                  >
                    {s.thumbLabel}
                  </span>
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>

      <div ref={detail} className="mt-16 grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-12 max-tpl:grid-cols-1">
        <figure className="m-0 bg-white p-3 shadow-[0_0_0_1px_#cdb47a,0_40px_60px_-36px_rgba(20,39,30,0.45)]">
          <div data-tour-photo className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={cur.photo}
              alt={cur.alt}
              fill
              sizes="(min-width: 861px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: cur.position }}
            />
          </div>
        </figure>
        <div data-tour-text>
          <p className="font-display m-0 text-xl text-gold italic">Étape {cur.n}</p>
          <h3 className="font-display m-0 mt-2 text-[clamp(30px,3.2vw,44px)] leading-[1.05] font-medium">{cur.title}</h3>
          <p className="m-0 mt-[18px] max-w-[44ch] text-[17px] leading-[1.7] text-body">{cur.text}</p>
          <div className="mt-7 flex gap-2.5">
            <button
              type="button"
              onClick={() => go(step - 1)}
              aria-label="Étape précédente"
              className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-white text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M15 5 L8 12 L15 19" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(step + 1)}
              aria-label="Étape suivante"
              className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-ink bg-ink text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M9 5 L16 12 L9 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
