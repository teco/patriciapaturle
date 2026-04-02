# Deployment Guide

This repository has a **dual-deployment structure** with both a React app and standalone landing pages.

## Repository Structure

### Main Branch (Development)
- **Purpose:** React app source code
- **Stack:** React 19 + TypeScript + Vite + TailwindCSS
- **Build Output:** `dist/` folder (not committed)

### gh-pages Branch (Production)
- **Purpose:** Deployed production site
- **Contents:**
  - Root (`/`) - Compiled React app from `main` branch
  - `landing/` - Standalone HTML pages (protected from build)
  - `embed/` - Embedded video pages (protected from build)

## Branch Structure

```
main/                                 gh-pages/
├── src/ (React components)          ├── index.html (React app - compiled)
├── package.json                     ├── assets/ (React bundles)
├── vite.config.ts                   ├── landing/
└── index.html (entry point)         │   ├── inscricao.html
                                     │   ├── aula.html
                                     │   └── README.md
                                     └── embed/
                                         └── bloqueio-anestesico-labial/
```

## Deployment Workflows

### 1. Deploying the React App (from main branch)

**When to use:** After making changes to React components, styles, or app functionality.

```bash
# On main branch
npm run build    # Compiles React app → dist/
npm run deploy   # Deploys dist/ to gh-pages

# The --add flag preserves landing/ and embed/ folders
```

**What happens:**
1. Vite builds the React app into `dist/`
2. `gh-pages` package pushes `dist/` contents to `gh-pages` branch
3. **IMPORTANT:** The `--add` flag preserves existing files not in `dist/`
4. `landing/` and `embed/` folders remain untouched ✅

### 2. Deploying Landing Pages (edit gh-pages directly)

**When to use:** After editing `inscricao.html`, `aula.html`, or other landing pages.

```bash
# Switch to gh-pages branch
git checkout gh-pages

# Edit the landing pages
nano landing/inscricao.html
nano landing/aula.html

# Commit and push
git add landing/
git commit -m "Update landing page content"
git push origin gh-pages
```

**What happens:**
- Changes are immediately live (no build process needed)
- React app deployment won't overwrite these changes

### 3. Adding New Landing Pages

To add new standalone pages:

```bash
git checkout gh-pages
cd landing/

# Create new page
nano new-page.html

# Add, commit, push
git add new-page.html
git commit -m "Add new landing page"
git push origin gh-pages
```

## Live URLs

After deployment, pages are available at:

| Page | URL |
|------|-----|
| **Main React App** | `https://patriciapaturle.com.br/` |
| **Registration Form** | `https://patriciapaturle.com.br/landing/inscricao.html` |
| **Video Access** | `https://patriciapaturle.com.br/landing/aula.html` |
| **Embed Video** | `https://patriciapaturle.com.br/embed/bloqueio-anestesico-labial/` |

## Important Notes

### ✅ DO:
- Edit React components on `main` branch
- Edit landing pages directly on `gh-pages` branch
- Use `npm run deploy` for React app updates
- Commit landing pages directly to `gh-pages`

### ❌ DON'T:
- Never edit the compiled React files on `gh-pages` (they'll be overwritten)
- Don't remove the `--add` flag from package.json deploy script
- Don't put landing pages in `main` branch's `dist/` folder
- Don't manually copy files between branches (use the proper workflow)

## Troubleshooting

### Issue: Landing pages deleted after React deployment

**Cause:** Missing `--add` flag in package.json deploy script

**Fix:**
```json
// package.json
"deploy": "gh-pages -d dist -r https://github.com/teco/patriciapaturle.git --add"
```

### Issue: React app not updating

**Cause:** Browser cache or deployment didn't complete

**Fix:**
1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Check GitHub Pages settings are pointing to `gh-pages` branch
3. Verify deployment completed: `git log origin/gh-pages`

### Issue: 404 on landing pages

**Cause:** Pages not pushed to `gh-pages` or incorrect URL

**Fix:**
1. Verify files exist: `git checkout gh-pages && ls landing/`
2. Use full URL: `https://patriciapaturle.com.br/landing/inscricao.html`
3. Wait 1-2 minutes for GitHub Pages to rebuild

## Development Workflow

### For React App Changes:

```bash
# 1. Checkout main
git checkout main

# 2. Make changes
# Edit src/components/...

# 3. Test locally
npm run dev

# 4. Build and deploy
npm run build
npm run deploy

# 5. Verify at patriciapaturle.com.br
```

### For Landing Page Changes:

```bash
# 1. Checkout gh-pages
git checkout gh-pages

# 2. Make changes
# Edit landing/inscricao.html

# 3. Test locally
# Open file in browser

# 4. Commit and push
git add landing/
git commit -m "Update landing page"
git push origin gh-pages

# 5. Verify at patriciapaturle.com.br/landing/inscricao.html
```

## Questions?

- React app not working? Check `main` branch
- Landing pages not working? Check `gh-pages` branch
- Something deleted? Check if `--add` flag is in package.json
- Need help? See `landing/README.md` for landing page specifics
