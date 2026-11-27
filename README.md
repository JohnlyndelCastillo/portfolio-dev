# Johnlyn del Castillo — Portfolio

A personal portfolio for Johnlyn del Castillo, a Junior Software QA Engineer at Sun Asterisk Philippines. The site presents QA practice, experience, selected projects, awards, and a print-ready resume.

Live site: [johnlyndc.vercel.app](https://johnlyndc.vercel.app)

## Stack

- Vue 3 with `<script setup>`
- Vue Router
- Tailwind CSS
- Vite
- EmailJS and Cloudflare Turnstile for the contact form

## Sections

- Hero and profile
- About
- QA craft — test design, regression auditing, workflow automation, and agentic QA
- Experience and awards
- Selected work
- Skills
- Contact
- Resume (`/resume`), with a print stylesheet for a one-page PDF

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Environment variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key
```

The contact form uses these values through Vite's `import.meta.env`. Do not commit the `.env` file.

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build for production
npm run preview  # Preview the production build
```

## Resume PDF

Open `/resume` and use **Print / Save as PDF**. The print layout is tuned for a single-page Letter PDF with 11 mm vertical margins.

## Deployment

The site is deployed on Vercel. `vercel.json` rewrites `/resume` to the SPA entry point so the route works on direct visits. `public/robots.txt` and `public/sitemap.xml` are included for search engines.
