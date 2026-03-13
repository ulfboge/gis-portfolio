# GIS-portfölj

Portföljen är nu uppdaterad till en fristående webbsida i vanilla HTML/CSS/JS.
Målet är att sidan ska kunna publiceras enkelt via GitHub Pages utan byggsteg.

## Snabbstart

1. Öppna `index.html` direkt i webbläsaren
2. Eller publicera GitHub-repot till GitHub Pages (`root/index.html`)

Ingen npm-installation, ingen Python-miljö och ingen byggpipeline krävs.

## Struktur

- `index.html` - huvudsida
- `style.css` - layout och visuellt tema
- `app.js` - projektdata, filtrering och kartnavigering
- `docs/` + `site/` - tidigare MkDocs-material (bevarat som arkiv, inkl. konceptprojekt)

## Om kartan

Sidan använder MapLibre via CDN och inbäddad projektdata i `app.js`.
Det betyder att portfolioinnehållet visas utan att läsa lokal GeoJSON via `fetch()`,
vilket gör den robust för enkel publicering.
