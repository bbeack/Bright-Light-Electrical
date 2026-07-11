# Bright Light Electrical — Website

A modern, fully responsive marketing website for **Bright Light Electrical**, a 24/7 electrical
and solar/inverter business serving Somerset West, Strand, Gordon's Bay and the greater
Helderberg (Cape Town, South Africa).

Built as a fast, dependency-free static site — no build step, no framework. Just open
`index.html` or host the folder anywhere (GitHub Pages, Netlify, Cloudflare Pages, any web host).

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero with 24/7 call CTA, trust badges, top services, reviews, areas |
| Services | `services.html` | Full service catalogue (DB boards, solar, faults, wiring, geysers…) |
| Emergency Call-Out | `emergency.html` | High-intent 24/7 emergency page with FAQ |
| COC Certificates | `coc.html` | Certificate of Compliance — process, uses, FAQ |
| Service Areas | `service-areas.html` | Local-SEO pages for Somerset West, Strand, Gordon's Bay, Helderberg |
| About | `about.html` | Story, commitments, differentiators |
| Reviews | `reviews.html` | 4.6★ Google rating and testimonial highlights |
| Contact | `contact.html` | Enquiry form, click-to-call, WhatsApp, map, hours |

## Design system

Per the brand direction:

- **Colours:** charcoal `#1c1f24`, electric yellow-gold `#ffc021` (single accent),
  off-white `#f7f7f5`, live green `#2fb457` for "available now" / compliance ticks.
- **Type:** Space Grotesk for headings, Inter for body (Google Fonts, with system fallbacks).
- **Logo:** bolt-through-letterform mark in `assets/logo.svg` — works in single colour for
  stamps and vehicle magnets. Also used as the favicon (`assets/favicon.svg`).
- **Imagery:** custom inline SVG illustrations (neat DB board, night-time call-out scene)
  — zero image downloads, crisp at any resolution. Swap in real photos of neat wiring,
  solar installs and branded PPE when available; neatness is the sell.

## Features

- Fully responsive (mobile nav, fluid grids, fluid type).
- Scroll-reveal animations, animated stat counters, floating hero art, pulsing
  "available now" indicator — all respecting `prefers-reduced-motion`.
- Click-to-call buttons (`tel:+27825101840`) and WhatsApp deep links throughout,
  plus a floating WhatsApp button on every page.
- **Enquiry form** (contact page) opens WhatsApp with the enquiry pre-filled — no
  backend needed, messages land straight on the business's 24/7 WhatsApp line.
- Embedded Google Map of the business location.
- SEO: unique titles/descriptions per page, semantic HTML, local-intent copy.

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
