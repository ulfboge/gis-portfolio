# GIS-portfölj

Detta repo innehåller en publik portföljsida för GIS, kartanalys och närliggande data/AI-projekt.
Sajten är byggd som en enkel statisk webbplats i vanilla HTML/CSS/JS för att vara lätt att underhålla och publicera.

## Vad som finns på sidan

Portföljen är kuraterad i tre tydliga delar:

- **Utvalda projekt** - starkaste och mest publikvänliga arbeten
- **Labb / under utveckling** - experiment, prototyper och arbetsspår
- **Konceptarkiv** - tidigare fiktiva eller metodiska konceptcase

Urvalet fokuserar på material som kan visas öppet. Klientkänsliga och interna projekt hålls utanför.

## Teknik och publicering

- **Frontend:** vanilla `HTML`, `CSS`, `JavaScript`
- **Karta:** `MapLibre GL JS` via CDN
- **Byggsteg:** inga (ingen npm, ingen bundler, ingen transpiler)
- **Hosting:** GitHub Pages

## Snabbstart lokalt

Du kan öppna sidan direkt:

1. Öppna `index.html` i webbläsaren

Alternativt via lokal server:

```bash
python -m http.server 8000
```

Öppna sedan `http://localhost:8000`.

## Struktur

- `index.html` - startsida och layoutstruktur
- `style.css` - styling, layout och komponentutseende
- `app.js` - projektdata, filtrering och kartnavigering
- `docs/` + `site/` - tidigare MkDocs-material, bevarat som arkiv

## Uppdatera innehållet

De flesta innehållsändringar görs i `app.js`:

- Lägg till/ta bort projektobjekt
- Justera kategori (`featured`, `lab`, `fictional`)
- Uppdatera länkar, beskrivningar, taggar och koordinater

## GitHub Pages

I GitHub:

1. Gå till **Settings -> Pages**
2. Välj **Deploy from a branch**
3. Välj branch `main` och mapp `/ (root)`

När Pages är aktiverat publiceras `index.html` direkt som startsida.
