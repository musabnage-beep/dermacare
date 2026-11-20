# Image assets

All photography is sourced from **Pexels** (free for commercial use, no
attribution required). Every image was visually checked to be free of
competitor branding and readable third-party labels.

**These are stock photos, not the brand's own work.** Replace them with real
Derma Care Beauty photography using the same filenames — no code change is
needed.

## Aspect contract

Exports **must** match these ratios, otherwise `object-fit: cover` silently
crops the subject.

| File                      | Ratio | Width | Pexels ID | Used by |
| ------------------------- | ----- | ----- | --------- | ------- |
| `hero.webp`               | 4:5   | 1120  | 4735904   | `Hero` |
| `brand-intro.webp`        | 4:5   | 920   | 8533216   | `BrandIntro` |
| `product-cleanser.webp`   | 1:1   | 720   | 8015462   | `Products` |
| `product-toner.webp`      | 1:1   | 720   | 16378448  | `Products` |
| `product-serum.webp`      | 1:1   | 720   | 8101673   | `Products` |
| `product-moisturizer.webp`| 1:1   | 720   | 7796499   | `Products` |
| `product-sunscreen.webp`  | 1:1   | 720   | 11464383  | `Products` |
| `product-bodycare.webp`   | 1:1   | 720   | 6690845   | `Products` |
| `experience-main.webp`    | 3:2   | 1120  | 17150052  | `Experience` |
| `experience-detail.webp`  | 1:1   | 560   | 8102139   | `Experience` |
| `experience-care.webp`    | 1:1   | 560   | 6167442   | `Experience` |
| `about.webp`              | 3:4   | 880   | 8533219   | `About` |
| `og-cover.jpg`            | 1200×630 | —  | 4735904   | Open Graph / Twitter card |

Source page for any photo: `https://www.pexels.com/photo/<id>/`

## Export settings

WEBP, quality 82, `method=6`, saturation ×0.94 so the cool daylight stock sits
inside the ivory/turquoise palette. Keep each file under ~190 KB.

## Brand logo

The original logo is **not** stored here. Place it in `public/brand/` and point
`business.logo.src` in `src/config/business.ts` at it. Until then the header and
footer render a typographic wordmark instead of inventing a logo mark.
