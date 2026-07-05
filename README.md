# Abhay Rawat — portfolio site

Personal portfolio in a retro light style: five projects across mobile apps and
data analytics. Plain HTML, CSS and JavaScript — no frameworks, no build step.

**Live site:** https://licherover9000.github.io

## Files

| File | What it is |
|---|---|
| `index.html` | All content — hero, projects, skills, about, contact |
| `styles.css` | Retro design tokens (cream paper, ink borders, hard shadows) and all styling |
| `script.js` | Mobile menu, footer year, scroll reveal, scrollspy |
| `GUIDE.pdf` | Step-by-step guide to how everything works (local only, not deployed) |

## Preview locally

No build step — open `index.html` directly in a browser, or serve the folder:

```powershell
npx serve .
# or
python -m http.server 8000
```

## Deploy / update

Hosted free on **GitHub Pages** from this repo (`licherover9000.github.io`).
Publishing an update is just a push:

```powershell
git add -A
git commit -m "Update site"
git push
```

GitHub rebuilds the site automatically within a minute or two.

## TODOs before sharing widely

Search `index.html` for `TODO(Abhay)`:

- [ ] Add a background/education line to the About section
