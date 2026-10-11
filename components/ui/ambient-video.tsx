"use client"

import { useEffect, useRef } from "react"

type Props = { src: string; poster: string; label: string; className?: string }

/** Vidéo en boucle muette : pas d'autoplay si l'utilisateur préfère le mouvement réduit (DA §5.4). */
export function AmbientVideo({ src, poster, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void video.play().catch(() => undefined)
        else video.pause()
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={label}
      className={className}
    />
  )
}
