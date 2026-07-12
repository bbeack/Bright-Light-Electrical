# Photo slots

Every image slot on the site is wired to a filename in this folder. The moment a file
with the right name lands here, it automatically replaces the placeholder artwork in
that slot (no code changes needed). Until then, the artwork stays.

Use real photos of the business where possible (neat DB boards, solar installs, branded
PPE). Where you generate or license stock images instead, the prompts below are ready to
paste into any image generator, or use the description as a stock-library search.

All images: JPG, landscape unless noted, at least 1600px wide for heroes and 800px for
cards. Dark, moody shots work best — every slot sits under a navy overlay.

| File | Where it appears | Shot description / generation prompt |
|---|---|---|
| `hero-home.jpg` | Homepage hero (full-bleed) | Professional electrician in dark navy workwear and safety glasses working on a neatly wired distribution board, dramatic low-key lighting, dark blue industrial background, shallow depth of field, photorealistic |
| `hero-board.jpg` | Services page hero | Close-up of a perfectly organised electrical distribution board, colour-coded wiring, moody dark lighting with warm highlights, photorealistic |
| `hero-night.jpg` | Emergency + Areas page heroes | Suburban South African house at night with warm lights glowing in the windows, service van parked outside, deep blue night sky, cinematic |
| `hero-cert.jpg` | COC page hero | Electrical certificate of compliance document on a clipboard beside a multimeter, dark desk, dramatic side lighting, photorealistic |
| `hero-worker.jpg` | About + Reviews page heroes | Electrician team in branded PPE and hard hats reviewing work at an electrical panel, dark industrial setting, confident poses, photorealistic |
| `hero-tools.jpg` | Contact page hero | Flat lay of professional electrical tools and multimeter on dark surface, moody lighting, yellow accents, photorealistic |
| `db-closeup.jpg` | Home glass card + About inset | Macro shot of labelled circuit breakers in a tidy DB board, warm indicator lights, dark background |
| `team.jpg` | Home + About layered image (portrait, 4:4.4) | Two electricians in hard hats and branded workwear inspecting wiring together, natural light, authentic working moment |
| `tools.jpg` | Home layered inset (4:3) | Multimeter reading 230V on a dark workbench with coiled cable, shallow depth of field |
| `work-db.jpg` | Home project card | Finished DB board installation, cover off, immaculate wiring, labelled breakers |
| `work-solar.jpg` | Home project card | Rooftop solar panel array at golden hour / dusk, Helderberg mountains in background |
| `work-coc.jpg` | Home project card | Signed compliance certificate with an approval stamp, professional documentation setting |
| `night-callout.jpg` | Home emergency section (4:3) | Electrician's van arriving at a dark house at night, headlights on, one window glowing |
| `cta.jpg` | Call-to-action band (all pages, wide) | Electrician silhouette at a glowing panel, wide crop, heavy dark areas on the left for text overlay |

Notes
- Heroes sit under a navy gradient overlay, so faces and detail should sit in the
  right two-thirds of the frame; the left side is covered by headline text.
- Keep files under ~400KB each (compress at quality ~75) so the site stays fast.
- The swap is handled by the `[data-photo]` block in `js/main.js`.
