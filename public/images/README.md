# Image assets

Two separate sets live here.

**`products/*.webp` — the brand's own photography.** Supplied by the clinic and
cropped from the original photos of the real packaging. Do **not** replace these
with stock.

**Everything else is stock** sourced from **Pexels** (free for commercial use, no
attribution required), visually checked to be free of competitor branding and
readable third-party labels. These are not the brand's own work — replace them
with real Dermacare Beauty Clinic photography using the same filenames, and no
code change is needed.

## Aspect contract

Exports **must** match these ratios, otherwise `object-fit: cover` silently
crops the subject.

| File                              | Ratio    | Width | Source     | Used by |
| --------------------------------- | -------- | ----- | ---------- | ------- |
| `hero.webp`                       | 4:5      | 1120  | Pexels 4735904  | `Hero` |
| `brand-intro.webp`                | 4:5      | 920   | Pexels 8533216  | `BrandIntro` |
| `products/vitamin-c.webp`         | 1:1      | 720   | brand's own     | `Products` |
| `products/pigmentation.webp`      | 1:1      | 720   | brand's own     | `Products` |
| `products/caffeine-gel.webp`      | 1:1      | 720   | brand's own     | `Products` |
| `products/mango-exfoliant.webp`   | 1:1      | 720   | brand's own     | `Products` |
| `products/body-exfoliant.webp`    | 1:1      | 720   | brand's own     | `Products` |
| `experience-main.webp`            | 3:2      | 1120  | Pexels 17150052 | `Experience` |
| `experience-detail.webp`          | 1:1      | 560   | Pexels 8102139  | `Experience` |
| `experience-care.webp`            | 1:1      | 560   | Pexels 6167442  | `Experience` |
| `about.webp`                      | 3:4      | 880   | Pexels 8533219  | `About` |
| `og-cover.jpg`                    | 1200×630 | —     | Pexels 4735904  | Open Graph / Twitter card |

Source page for any Pexels photo: `https://www.pexels.com/photo/<id>/`

## Export settings

WEBP, quality 82, `method=6`. Keep each file under ~190 KB.

Stock images also get saturation ×0.94 so the cool daylight stock sits inside
the ivory/turquoise palette. The brand's own product shots are **not** graded —
they are cropped to a centred square and resized only.

The product crops deliberately exclude the marketing overlays, arrows, social
icons and partial phone numbers present in some of the original photos.

## Brand logo

The original logo is **not** stored here. Place it in `public/brand/` and point
`business.logo.src` in `src/config/business.ts` at it. Until then the header and
footer render a typographic wordmark instead of inventing a logo mark.
