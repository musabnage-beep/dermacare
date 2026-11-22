/*
  Image paths are authored from the site root (`/images/…`). Vite rewrites such
  paths in HTML and CSS but NOT in string literals, so they must be resolved
  against `BASE_URL` by hand or they 404 when the site is served from a
  sub-path (e.g. GitHub Pages).
*/
export function withBase(src: string): string {
  if (!src.startsWith('/')) return src
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${src}`
}
