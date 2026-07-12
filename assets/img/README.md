# Photo slots

Every image slot on the site is wired to a filename in this folder. The moment a file
with the right name lands here, it automatically replaces the placeholder artwork in
that slot (no code changes needed).

Photography direction (from the design guide): clean, modern, professional, bright,
warm colour temperature, natural light. No thumbs-up cliches, no cold blue corporate
shots. Heroes sit under a left-to-right dark gradient, so keep the subject in the
right two-thirds of the frame.

All images: JPG, at least 1600px wide for heroes and 1000px for the team image.
Keep files under ~400KB (quality ~75).

| File | Where it appears | Shot description / generation prompt |
|---|---|---|
| `hero-home.jpg` | Homepage hero (full-bleed) | Modern home exterior at dusk, warm lights glowing in the windows, premium suburban South African setting, cinematic, photorealistic |
| `hero-board.jpg` | Services page hero | Close-up of a perfectly organised electrical distribution board, colour-coded wiring, warm highlights, photorealistic |
| `hero-night.jpg` | Emergency + Areas page heroes | Suburban house at night with one warm window glowing and a service van outside, deep dusk sky, cinematic |
| `hero-cert.jpg` | COC page hero | Electrical certificate of compliance on a clipboard beside a multimeter, warm side lighting, photorealistic |
| `hero-worker.jpg` | About + Reviews page heroes | Electrician in branded PPE working at an electrical panel, gloved hands, warm natural light, photorealistic |
| `hero-tools.jpg` | Contact page hero | Flat lay of professional electrical tools and multimeter on a dark workbench, warm accents, photorealistic |
| `team.jpg` | Home + About feature image (4:3.4) | Two electricians in hard hats inspecting a neat installation together, authentic working moment, natural light |

The swap is handled by the `[data-photo]` block in `js/main.js`.
