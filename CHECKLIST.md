# ILTAS Website - Final Checklist

## Content & Assets

- [ ] **Social Media URLs** — Replace placeholder links in footer with actual URLs
  - Facebook
  - Instagram
  - LinkedIn
  - YouTube
  - Files: `src/lib/components/layout/Footer.svelte`, `FooterEN.svelte`

- [ ] **Privacy Policy & Terms of Use** — Create pages or provide content
  - Gizlilik Politikasi / Privacy Policy
  - Kullanim Sartlari / Terms of Use
  - Files: `src/lib/components/layout/Footer.svelte`, `FooterEN.svelte`

- [ ] **Project Images** — Replace Unsplash stock photos with real project photos
  - OZGOKTASLAR SHD
  - SADE TARIM
  - PEHLIVANLAR SHD
  - GUNESLER SHD
  - EL-SA SHD
  - BILAL SEZER SHD
  - Files: `src/routes/projeler/+page.svelte`, `src/routes/en/projects/+page.svelte`

- [ ] **Hero Image** — Confirm `/images/hero.jpeg` is final or provide replacement

- [ ] **Favicon & OG Image** — Provide a company logo/image for:
  - Browser favicon
  - Social media sharing previews (og:image)

## Integrations

- [ ] **Contact Form Email Service** — Choose and configure one:
  - Resend
  - SendGrid
  - SMTP
  - Files: `src/routes/iletisim/+page.server.ts`, `src/routes/en/contact/+page.server.ts`

- [ ] **Google Analytics** — Provide GA4 measurement ID (G-XXXXXXXXXX)
  - File: `src/routes/+layout.svelte`

## Domain & SEO

- [ ] **Custom Domain** — When ready, update all references from `iltas-website.vercel.app` to the final domain
  - All 10 page files (canonical, og:url, hreflang)
  - `static/sitemap.xml`
  - `static/robots.txt`

- [ ] **Google Search Console** — Register site and submit sitemap
  - URL: `https://iltas-website.vercel.app/sitemap.xml`
