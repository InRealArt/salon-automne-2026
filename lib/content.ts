/**
 * Contenu éditorial de la landing « Salon d'Automne 2026 ».
 * Les valeurs entre crochets [ ] sont à compléter avant mise en ligne.
 */

export const IMAGES = {
  concorde: "/images/hero/hero_main.webp",
  accueil: "/images/hero/hero_secondary.webp",
  affiche: "/images/edition/edition.webp",
  allee: "/images/videoTriptych/videoTriptych1.webp",
  standOr: "/images/videoTriptych/videoTriptych2.webp",
  videoPoster: "/images/videoTriptych/video-poster.webp",
  /** Stefan Beiu en pied, devant ses toiles (cadre 4:3 de l'étape 4) */
  stefanBeiu: encodeURI("/images/artists/Stefan Beiu.webp"),
  /** Stefan Beiu en gros plan (médaillons ronds) */
  stefanBeiuPortrait: encodeURI("/images/artists/Stefan Beiu2.webp"),
  contest: "/images/contest/contest.webp",
} as const

/** Cadrage du gros plan dans un médaillon rond : visage centré */
export const STEFAN_PORTRAIT_POSITION = "29% center"

export const VIDEO_SRC = "/images/videoTriptych/video.mp4"

export const NAV_LINKS = [
  { href: "#affiche", label: "L’édition 2026" },
  { href: "#artistes", label: "Artistes" },
  { href: "#parcours", label: "Parcours" },
  { href: "#rencontre", label: "Stefan Beiu" },
  { href: "#faq", label: "FAQ" },
] as const

export const FIGURES = [
  { value: "1903", label: "Année de fondation" },
  { value: "1 000+", label: "Œuvres exposées", count: 1000, suffix: "+" },
  { value: "50", label: "Nationalités représentées", count: 50, suffix: "" },
  { value: "6", label: "Artistes InRealArt présents", count: 6, suffix: "" },
] as const

export const EDITION_FACTS = [
  { label: "Vernissage", value: "27 octobre 2026" },
  { label: "Ouverture au public", value: "28 oct. — 1ᵉʳ nov." },
  { label: "Lieu", value: "Place de la Concorde" },
  { label: "Surface", value: "Plus de 4 000 m²" },
] as const

export type Artist = {
  name: string
  initials: string
  /** Spécialité, d'après le profil inrealart.com (catégorie, style ou biographie) */
  discipline: string
  slug: string
  /** Portrait carré centré sur le visage (recadré depuis la photo du profil inrealart.com) */
  portrait: string
  chief?: boolean
}

export const ARTISTS: readonly Artist[] = [
  { name: "Nadine LePrince", initials: "NL", discipline: "Peinture", slug: "nadine-leprince", portrait: "/images/artists/nadine-leprince-portrait.webp" },
  { name: "Stefan Beiu", initials: "SB", discipline: "Peinture", slug: "stefan-beiu", portrait: "/images/artists/stefan-beiu-portrait.webp", chief: true },
  { name: "Rodica Costianu", initials: "RC", discipline: "Dessin", slug: "rodica-costianu", portrait: "/images/artists/rodica-costianu-portrait.webp" },
  { name: "Dominique Fonteneau", initials: "DF", discipline: "Peinture & sculpture", slug: "dominique-fonteneau", portrait: "/images/artists/dominique-fonteneau-portrait.webp" },
  { name: "Adélaïde Leferme", initials: "AL", discipline: "Peinture & arts plastiques", slug: "adelaide-leferme", portrait: "/images/artists/adelaide-leferme-portrait.webp" },
  { name: "Horéa", initials: "H", discipline: "Peinture contemporaine", slug: "horea", portrait: "/images/artists/horea-portrait.webp" },
]

export const artistUrl = (slug: string) => `https://www.inrealart.com/artists/${slug}`

export type TourStep = {
  n: string
  title: string
  sub: string
  tour: string
  /** Vignette du connecteur menant à l'étape suivante */
  thumb: string | null
  /** Cadrage de la vignette (object-position) */
  thumbPosition?: string
  thumbLabel: string
  photo: string
  alt: string
  position: string
  text: string
}

export const TOUR_STEPS: readonly TourStep[] = [
  {
    n: "01",
    title: "L’accueil",
    sub: "Place de la Concorde",
    tour: "On arrive place de la Concorde, l’obélisque en ligne de mire.",
    thumb: IMAGES.concorde,
    thumbLabel: "Les pavillons",
    photo: IMAGES.accueil,
    alt: "Accueil chaleureux devant l’entrée du Salon",
    position: "center 40%",
    text: "Entrée des pavillons place de la Concorde. Retrait des invitations sur présentation de l’e-mail gagnant, et premier coup d’œil sur l’affiche de l’édition.",
  },
  {
    n: "02",
    title: "Les 18 courants",
    sub: "1 000+ œuvres",
    tour: "Puis on se laisse porter par les allées et les 18 courants.",
    thumb: IMAGES.allee,
    thumbLabel: "Les allées",
    photo: IMAGES.allee,
    alt: "Une allée du Salon pleine de visiteurs",
    position: "center 55%",
    text: "Peinture, sculpture, photographie, gravure, art digital, livres d’artistes : la création actuelle dans toute sa diversité.",
  },
  {
    n: "03",
    title: "Nos artistes",
    sub: "Les talents InRealArt",
    tour: "On s’arrête chez les artistes InRealArt, présents à côté de leurs œuvres.",
    thumb: IMAGES.standOr,
    thumbLabel: "Sur les stands",
    photo: IMAGES.standOr,
    alt: "Visiteurs échangeant devant une grande toile dorée",
    position: "center 45%",
    text: "Arrêt sur les stands de Nadine LePrince, Rodica Costianu, Dominique Fonteneau, Adélaïde Leferme et Horéa, présents en personne pour parler de leur travail.",
  },
  {
    n: "04",
    title: "La section de Stefan Beiu",
    sub: "Visite privée",
    tour: "Moment fort : Stefan Beiu ouvre sa section aux gagnants.",
    thumb: IMAGES.stefanBeiuPortrait,
    thumbPosition: STEFAN_PORTRAIT_POSITION,
    thumbLabel: "Stefan Beiu",
    photo: IMAGES.stefanBeiu,
    alt: "Stefan Beiu devant ses toiles",
    position: "center 12%",
    text: "Visite commentée par le chef de section : choix d’accrochage, regards croisés entre les œuvres, coulisses de la sélection.",
  },
  {
    n: "05",
    title: "L’espace littérature",
    sub: "Parrain : G. Legardinier",
    tour: "On termine par l’espace littérature, autour du parrain Gilles Legardinier.",
    thumb: null,
    thumbLabel: "",
    photo: IMAGES.affiche,
    alt: "Affiche du Salon d’Automne 2026",
    position: "center 30%",
    text: "Autour du parrain 2026, l’écrivain Gilles Legardinier, l’édition met les mots et les livres d’artistes à l’honneur.",
  },
]

export const TIMELINE = [
  {
    year: "1903",
    title: "Une naissance au Petit Palais",
    text: "Frantz Jourdain, entouré d’artistes et d’écrivains, fonde le Salon. La première exposition ouvre le 31 octobre 1903 : un salon ouvert et pluridisciplinaire.",
  },
  {
    year: "1905",
    title: "La « cage aux fauves »",
    text: "Matisse, Derain, Vlaminck exposent des toiles aux couleurs pures et intenses. La critique les surnomme les Fauves : le fauvisme est né ici.",
  },
  {
    year: "1907",
    title: "L’hommage à Cézanne",
    text: "Après Gauguin, le Salon consacre une rétrospective à Paul Cézanne. Toute une génération de peintres y trouve son point de départ.",
  },
  {
    year: "1911",
    title: "Le cubisme fait débat",
    text: "Les toiles cubistes déchaînent la critique. L’année suivante, Kupka y présente parmi les premières œuvres abstraites montrées au public.",
  },
  {
    year: "1920",
    title: "Reconnu d’utilité publique",
    text: "La Société du Salon d’Automne devient une institution, sans renoncer à son esprit : une association d’artistes au service de la création.",
  },
  {
    year: "2026",
    title: "La 123ᵉ édition à la Concorde",
    text: "Plus de 1 000 œuvres, 18 courants et 50 nationalités, à deux pas du Grand Palais où tout a commencé.",
  },
] as const

export const VISIT_DAYS = [
  { value: "2026-10-28", label: "Mercredi 28 octobre" },
  { value: "2026-10-29", label: "Jeudi 29 octobre" },
  { value: "2026-10-30", label: "Vendredi 30 octobre" },
  { value: "2026-10-31", label: "Samedi 31 octobre" },
  { value: "2026-11-01", label: "Dimanche 1ᵉʳ novembre" },
] as const

export const PRACTICAL_INFO = [
  { label: "Lieu", value: "Place de la Concorde, 75008 Paris", note: "Métro Concorde (1, 8, 12)" },
  { label: "Dates", value: "28 octobre — 1ᵉʳ novembre 2026", note: "Vernissage le 27 octobre" },
  { label: "Horaires", value: "11h — 20h", note: "Vendredi jusqu’à 21h · Dimanche jusqu’à 18h" },
  { label: "Parrain 2026", value: "Gilles Legardinier", note: "La littérature à l’honneur" },
] as const

export const FAQ = [
  {
    q: "Comment participer au jeu-concours ?",
    a: "Remplissez le formulaire avec vos coordonnées et acceptez le règlement. Une seule participation par personne.",
  },
  {
    q: "Combien d’invitations sont à gagner ?",
    a: "[NOMBRE] invitations valables pour deux personnes, tirées au sort parmi les participations valides.",
  },
  {
    q: "Quand a lieu le tirage au sort ?",
    a: "Le [DATE DU TIRAGE]. Les gagnants sont prévenus par e-mail et confirment leur présence sous 48 heures.",
  },
  {
    q: "Quels jours les invitations sont-elles valables ?",
    a: "Pendant toute la durée du Salon, du mercredi 28 octobre au dimanche 1ᵉʳ novembre 2026, aux horaires d’ouverture.",
  },
  {
    q: "Quand a lieu la rencontre avec Stefan Beiu ?",
    a: "[DATE ET HEURE DE LA RENCONTRE]. Elle est réservée aux gagnants et à leur accompagnant, dans l’espace de sa section.",
  },
  {
    q: "Peut-on acheter les œuvres exposées ?",
    a: "Oui, les artistes sont présents sur le Salon : vous pouvez échanger directement avec eux au sujet de leurs œuvres. Les œuvres des artistes InRealArt sont aussi visibles sur inrealart.com.",
  },
  {
    q: "Comment venir ?",
    a: "Place de la Concorde, Paris 8ᵉ. Métro Concorde, lignes 1, 8 et 12. Bus 42, 45, 72, 73, 84 et 94.",
  },
  {
    q: "Que deviennent mes données ?",
    a: "Elles servent uniquement au tirage au sort et, si vous l’acceptez, à l’envoi de nos actualités. Désinscription possible à tout moment.",
  },
] as const
