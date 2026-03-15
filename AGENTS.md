# AGENTS.md - A&G Roof Steel Builders

## Project Overview

This is a **static website** for a Philippine steel roofing/construction company. Built with pure HTML, CSS, and JavaScript — no build tools, frameworks, or package manager required.

## Structure

```
/home/kurtian/agroofsteelbuilders
├── index.html          # Home page
├── about.html          # About us
├── services.html       # Services
├── products.html       # Product categories grid
├── product.html        # Individual product detail (query param: ?id=xxx)
├── products-*.html     # Category-specific product pages
├── projects.html       # Projects gallery
├── project.html        # Individual project detail
├── css/style.css       # All styles (49KB)
├── js/
│   ├── main.js         # Nav, smooth scroll, animations, contact form
│   ├── product-detail.js   # Product page rendering
│   ├── products-data.js    # Product catalog (JSON-like)
│   ├── project-detail.js   # Project detail page
│   └── projects-data.js    # Projects data
└── partials/           # Reusable HTML fragments
    ├── header.html
    ├── footer.html
    └── utility-bar.html
```

---

## Commands

### Running the Site

```bash
# Using npx serve
npx serve .

# Using Python
python -m http.server 8000
```

Then open http://localhost:8000 (or the port shown).

### No Build/Lint/Test Commands

This is a vanilla static site — **no build tools, linting, or tests exist**. Do not add npm, webpack, eslint, or testing frameworks unless explicitly requested.

---

## Code Style Guidelines

### General Principles

- Keep it simple. This is a static site, not an app.
- Use vanilla JavaScript — no libraries/frameworks.
- Avoid unnecessary dependencies.
- Prioritize readability and maintainability.

### HTML

- Use semantic HTML5 elements (`<section>`, `<nav>`, `<main>`, `<article>`).
- Include `lang="en"`, `meta charset`, `meta viewport` in every page.
- Use 2-space indentation.
- Use double quotes for attributes.
- Keep IDs/classes lowercase with hyphens (e.g., `hero-section`, `btn-primary`).

### CSS

- All styles go in `css/style.css` (single file).
- Use BEM-like naming: `.block`, `.block__element`, `.block--modifier`.
- Use CSS custom properties for colors/spacing when appropriate.
- Mobile-first responsive: write base styles first, then `@media (min-width: 768px)` for desktop.
- Use flexbox and grid for layout; avoid floats.
- Keep selectors simple and avoid deep nesting.

### JavaScript

- Wrap all code in IIFE: `(function () { 'use strict'; ... })();`
- Use `var` (not `let`/`const`) — existing codebase uses ES5 style.
- Use function declarations, not arrow functions.
- Use `forEach` instead of `for` loops where appropriate.
- Always use strict mode (`'use strict';`).
- Check DOM elements exist before operating on them:
  ```javascript
  var el = document.getElementById('myElement');
  if (el) { /* operate */ }
  ```
- Use `addEventListener` instead of inline `onclick`/`onload`.
- Use passive listeners for scroll events: `{ passive: true }`.
- Always use `textContent` instead of `innerHTML` for user data; use `escapeHtml()` for dynamic content in HTML contexts.
- Name functions descriptively: `loadPartials`, `setActiveNav`, `escapeHtml`.

### Naming Conventions

- **Files**: lowercase with hyphens (`product-detail.js`, `products-data.js`)
- **Functions/variables**: camelCase (`loadPartial`, `productContent`)
- **CSS classes**: lowercase with hyphens (`.hero-title`, `.service-card__img`)
- **Constants**: UPPER_SNAKE_CASE if used (e.g., `var DURATION = 2000;`)

### Error Handling

- Never let JS errors break the page silently.
- Use empty catch blocks only when ignoring is intentional: `.catch(function () {});`
- Provide fallback for missing elements: `if (!el) return;`
- Handle missing images gracefully with `onerror`.

### Accessibility

- Always include `alt` attributes on images.
- Use `<button>` for actions, `<a>` for navigation.
- Ensure sufficient color contrast.
- Use proper heading hierarchy (`h1` → `h2` → `h3`).

### Data Files

- `products-data.js` and `projects-data.js` export data via `window.PRODUCTS_DATA` and `window.PROJECTS_DATA`.
- Follow existing structure when adding products/projects.
- Use consistent field names: `id`, `name`, `category`, `description`, `image`, `specs`, `colors`.

---

## Common Tasks

### Adding a New Product

1. Add entry to `js/products-data.js` in the `products` array
2. Add category name to `categories` object if new category
3. Create category page if needed (copy existing `products-*.html`)

### Adding a New Project

1. Add entry to `js/projects-data.js`
2. Project images go in `/img/projects/` (create if needed)

### Modifying the Header/Footer

Edit `partials/header.html` or `partials/footer.html`. Changes will appear on all pages that load partials.

### Adding a New Page

1. Copy an existing HTML file as template
2. Keep the partials placeholder divs (`id="utility-bar-placeholder"`, etc.)
3. Add to navigation in `partials/header.html`

---

## Notes

- Hero and project images use Unsplash URLs — replace with local images in `/img/` if needed.
- Contact form uses `mailto:` — no backend required.
- Update contact email in `js/main.js` (search for `info@agroofsteel.com`) and HTML files.
- The site uses Font Awesome 6.5 via CDN.
