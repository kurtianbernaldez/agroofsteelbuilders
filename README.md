# A&G Roof Steel Builders — Static Site

Pure **HTML, CSS, and JavaScript** — no WordPress, PHP, or build tools.

## Structure

- **index.html** — Home (hero, services, products, about, projects, contact)
- **about.html** — About us, mission, vision, team, certifications
- **services.html** — Services overview and CTA
- **products.html** — Product categories and product grid
- **projects.html** — Projects gallery
- **css/style.css** — All styles
- **js/main.js** — Mobile nav toggle and smooth scroll

## How to run

Serve this folder so the shared header and footer partials can load:

```bash
npx serve .
# or
python -m http.server 8000
```

## Notes

- Project images are stored in `img/projects/`.
- Contact inquiries open a prepared message in the visitor's email application.
- `robots.txt` and `sitemap.xml` currently use the GitHub Pages URL inferred from this repository. Update them if a custom production domain is used.
