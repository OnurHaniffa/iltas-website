# ILTAS Website - Project Notes

## Overview
Website for ILTAS, a fruit and vegetable sorting/grading systems company based in Isparta, Turkey.

**Live URL:** https://www.iltasmakine.com

## Tech Stack
- **Framework:** SvelteKit 2 with Svelte 5
- **Hosting:** Vercel
- **Email:** Resend (noreply@iltasmakine.com → info@iltasmakine.com)
- **Domain:** Natro.com (Turkish registrar)

## Features
- Bilingual (Turkish & English)
- Contact form with email notifications
- Form validation (name, email, phone, message)
- SEO optimized (meta tags, OG image, sitemap)
- Responsive design

## Pages
| Turkish | English |
|---------|---------|
| / | /en |
| /hakkimizda | /en/about |
| /hizmetlerimiz | /en/services |
| /projeler | /en/projects |
| /iletisim | /en/contact |

## Environment Variables (Vercel)
- `RESEND_API_KEY` - For contact form emails

## Important Files
- `static/sitemap.xml` - Submitted to Google Search Console
- `static/robots.txt` - Search engine rules
- `static/images/og-image.jpeg` - Social sharing image (1200x630)
- `src/lib/server/email.ts` - Email template and sending logic

## Social Links
- Instagram: https://www.instagram.com/iltasendustriyel/
- WhatsApp: https://wa.me/905545504450
- Email: info@iltasmakine.com
- Phone: +90 554 550 4450

## Pending Tasks
- [ ] Get 3 project photos from client (GUNESLER, EL-SA, BILAL SEZER)
- [ ] Get Google Analytics GA4 ID from client
- [ ] Confirm working hours with client ("Hafta sonu kapali")
- [ ] Set up domain redirects at Natro (iltas.com, iltas.tr → www.iltasmakine.com)
- [ ] Test contact form on live site
- [ ] Refresh Facebook cache at developers.facebook.com/tools/debug

## Domains (all should redirect to www.iltasmakine.com)
- iltasmakine.com (main)
- www.iltasmakine.com (primary)
- iltas.com
- www.iltas.com
- iltas.tr
- iltasmakine.tr
- iltasmakine.com.tr

---
*Last updated: February 2026*
