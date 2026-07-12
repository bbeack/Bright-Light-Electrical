# Bright Light Electrical — Website

A modern, fully responsive marketing website for **Bright Light Electrical**, a 24/7 electrical
and solar/inverter business serving Somerset West, Strand, Gordon's Bay and the greater
Helderberg (Cape Town, South Africa).

Built as a fast, dependency-free static site — no build step, no framework. Just open
`index.html` or host the folder anywhere (GitHub Pages, Netlify, Cloudflare Pages, any web host).

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Full-bleed hero with 24/7 call CTA, stats, feature tiles, work showcase, reviews |
| Services | `services.html` | Full service catalogue (DB boards, solar, faults, wiring, geysers…) |
| Emergency Call-Out | `emergency.html` | High-intent 24/7 emergency page with FAQ |
| COC Certificates | `coc.html` | Certificate of Compliance — process, uses, FAQ |
| Service Areas | `service-areas.html` | Local-SEO pages for Somerset West, Strand, Gordon's Bay, Helderberg |
| About | `about.html` | Story, commitments, differentiators |
| Reviews | `reviews.html` | 4.6★ Google rating and testimonial highlights |
| Contact | `contact.html` | Enquiry form, click-to-call, WhatsApp, map, hours |

## Design system

Photo-led, deep-navy direction:

- **Colours:** deep navy `#0d1830` / `#0a1425` grounds, card navy `#122142`/`#16294a`,
  lemon gold `#f7d31e` as the single accent, cool blue-grey text `#a8b3c7` on navy,
  blue-tinted light ground `#f4f6f9`, live green `#37c46d` for the "available now" pulse.
- **Type:** Manrope (600–800) for headings and UI, Inter for body (Google Fonts, with
  system fallbacks). Two-tone headlines: white/navy first line, gold second line.
- **Logo:** bolt monogram in `assets/logo.svg` + uppercase BRIGHT**LIGHT** wordmark
  (LIGHT in gold). Also the favicon (`assets/favicon.svg`).
- **Imagery:** cinematic duotone SVG scenes (electrician at a glowing panel, DB board
  close-up, solar array at dusk, night call-out, tools, COC certificate) sit in every
  photo slot. They're deliberate art direction *and* drop-in replaceable: swap any
  scene block for a real `<img>` of the business's neat wiring, solar installs and
  branded PPE when photos are available.

## Signature layout patterns

- Full-bleed dark heroes with layered navy overlays and big two-tone headlines
- Yellow-ringed "Call us 24/7" phone cluster in the header and heroes
- 4-up navy feature tiles with gold line icons
- Layered about block: main scene + inset scene + floating gold badge (24/7 / 4.6★)
- Project cards with navy gradient overlays and gold titles
- Animated hero stat counters, scroll reveals, pulsing availability dot —
  all respecting `prefers-reduced-motion`

## Features

- Fully responsive (mobile nav, fluid grids, fluid type)
- Click-to-call buttons (`tel:+27825101840`) and WhatsApp deep links throughout,
  plus a floating WhatsApp button on every page
- **Enquiry form** (contact page) opens WhatsApp with the enquiry pre-filled — no
  backend needed, messages land straight on the business's 24/7 WhatsApp line
- Embedded Google Map of the business location
- SEO: unique titles/descriptions per page, semantic HTML, local-intent copy

## Switching the form to email

The form currently submits via WhatsApp (see `js/main.js`). To deliver enquiries by
email instead, point the form at a form backend such as [FormSubmit](https://formsubmit.co)
or [Formspree](https://formspree.io):

```html
<form action="https://formsubmit.co/you@example.com" method="POST">
```

and remove the `submit` handler in `js/main.js`.

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Regenerating pages

Pages share a common shell (header/footer/scenes). The generator script used during
development lives in the session scratchpad; the checked-in HTML is the source of truth.
