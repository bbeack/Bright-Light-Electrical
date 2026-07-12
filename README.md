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

Built from the brand design guide (charcoal-dominant, single gold accent):

- **Colours:** charcoal `#1F2329` / ink `#15141B` grounds, electrical gold `#F5B327`
  as the only accent (CTAs, highlighted headline word, stats, active states),
  warm white `#FAFAFB`, light grey `#EBEBEB` borders, steel grey `#70757D` secondary
  text, safety orange `#FF8C2B` reserved for the 24/7 emergency context only.
- **Type:** Manrope 600/700/800 for display (uppercase headlines, eyebrows, buttons),
  Inter 400/500/600 for body. Fluid clamp-based scale; one gold word per headline.
- **Logo:** three-bulb mark (centre bulb lit gold) with the BRIGHT LIGHT / ELECTRICAL
  wordmark (`assets/logo.svg`, favicon in `assets/favicon.svg`).
- **Components:** trust bar under the hero, 4-up service cards (white, grey border,
  gold hover), gold-ruled stats block, gold circular checklists, full-width gold CTA
  band, charcoal footer with outline social icons.
- **Imagery:** charcoal duotone placeholder scenes sit in every photo slot and are
  swapped automatically for real photos dropped into `assets/img/` (see the manifest
  there). Photography direction: clean, modern, warm; dusk exteriors with lights on.
- **Motion:** restrained. 16px fade-up reveals (400ms, 60ms stagger), 1px button
  lifts, one ambient glow pulse on the logo bulb; `prefers-reduced-motion` honoured.

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
