# Landing Pages

This folder contains standalone HTML landing pages that are **NOT part of the React app build process**.

## Pages

- **inscricao.html** - Registration form for the masterclass
  - URL: `https://patriciapaturle.com.br/landing/inscricao.html`
  - Collects: Name, Email, Phone, Instagram
  - Uses EmailJS for form submission

- **aula.html** - Video access page for registered users
  - URL: `https://patriciapaturle.com.br/landing/aula.html`
  - Embeds video content
  - Displays masterclass information

## Important Notes

⚠️ **These files are protected from the React build deployment**

When you run `npm run deploy` from the `main` branch:
- The React app is built and deployed to the root of `gh-pages`
- This `landing/` folder is preserved (not deleted)
- The deployment script uses the `--add` flag to keep existing files

## Setup Instructions

See the following documentation files in this folder:
- **SETUP_EMAILJS.md** - How to configure EmailJS for the contact form
- **README_FORMULARIO.md** - Form functionality and customization guide
- **FAVICON-REQUIREMENTS.md** - Adding favicons/icons to the pages

## File Structure

```
landing/
├── README.md                    (this file)
├── inscricao.html              (registration form page)
├── aula.html                   (video access page)
├── README_FORMULARIO.md        (form documentation)
├── SETUP_EMAILJS.md           (EmailJS setup guide)
├── FAVICON-REQUIREMENTS.md    (favicon guide)
├── manifest.json              (PWA manifest)
└── robots.txt                 (SEO robots file)
```

## Deployment Workflow

```bash
# On main branch (React app development)
npm run build    # Build React app → dist/
npm run deploy   # Deploy dist/ to gh-pages (preserves landing/)

# Landing pages are already on gh-pages
# Just edit them directly on gh-pages branch when needed
```

## Editing Landing Pages

To update the landing pages:

1. Switch to `gh-pages` branch
2. Edit `landing/inscricao.html` or `landing/aula.html`
3. Commit and push changes
4. Changes are live immediately (no build process needed)

```bash
git checkout gh-pages
# Edit landing/inscricao.html
git add landing/inscricao.html
git commit -m "Update registration form"
git push origin gh-pages
```
