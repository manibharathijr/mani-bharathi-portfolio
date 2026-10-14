# Mani Bharathi — Developer Dashboard Portfolio

A responsive Angular portfolio based on the Developer Dashboard design. Includes a dark/light theme toggle, CSS 3D-style dashboard illustration, motion effects, work highlights derived from the resume, resume download, SEO metadata, and an email-draft contact form.

## Requirements
- Node.js 20.19+ (Node 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:4200`.

## Production build
```bash
npm run build
```
Output: `dist/mani-portfolio/browser`.

## Deploy free on Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Import that repository at https://vercel.com/new.
3. Vercel should detect Angular. Use `npm run build` as build command and `dist/mani-portfolio/browser` as output directory (also set in `vercel.json`).
4. Deploy. The free Vercel Hobby plan is suitable for a personal portfolio, subject to Vercel's current plan terms.

## Before publishing
- The resume DOCX is included under `src/assets/Mani-Bharathi-Resume.docx` and the Download CV buttons download it.
- Contact form uses `mailto:` and opens a prefilled email draft; it does not submit to a server. For a true in-page form, connect a form provider or backend and add spam protection.
- Work highlight cards are based on the Appyflo responsibilities in the resume. They are not represented as separate public products and have no invented demo links.
- Replace `YOUR-VERCEL-DOMAIN` in `public/robots.txt` and `public/sitemap.xml` after deployment.
- Confirm that you want your phone number on a public site before adding it. This version intentionally uses email and LinkedIn links only.
- The Google Fonts link is optional; remove it if you prefer zero third-party font requests.

## Personal details used
Name, Angular Developer / Frontend Developer title, Chennai, India, 5+ years, Psibertech Solutions Pvt Ltd, Appyflo, July 2021–Present, listed skills, MCA from St. Joseph's College, Trichy (2019, First Class), and the email/LinkedIn from the supplied resume.
