const projects = [
  {
    id: "miljogifter-500",
    title: "Miljögifter i svenska sjöar",
    type: "featured",
    summary: "Interaktiv webbkarta med filtrering av PFAS, kvicksilver och andra föroreningar i sjöar.",
    tags: ["MapLibre", "Vanilla JS", "GeoJSON", "Miljöövervakning"],
    repoUrl: "https://github.com/ulfboge/miljogifter-500",
    liveUrl: "",
    docsUrl: "",
    imageUrl: "https://raw.githubusercontent.com/ulfboge/miljogifter-500/main/screenshot.png",
    coordinates: [15.5, 62.2]
  },
  {
    id: "nrm-ringmarkningsdata",
    title: "Ringmärkningsdata Sverige",
    type: "featured",
    summary: "Leaflet-karta över publika GBIF-observationer med statistik, arter och geografisk översikt.",
    tags: ["Leaflet", "GBIF API", "Biodiversitet", "GitHub Pages"],
    repoUrl: "https://github.com/ulfboge/nrm-ringmarkningsdata",
    liveUrl: "https://ulfboge.github.io/nrm-ringmarkningsdata/",
    docsUrl: "",
    coordinates: [16.5, 62.8]
  },
  {
    id: "skogsmonitor-gee-demo",
    title: "Skogsmonitor GEE Demo",
    type: "featured",
    summary: "Demo för NDVI-förändringsanalys i skog med Earth Engine, periodjämförelser och areaestimat.",
    tags: ["Google Earth Engine", "Sentinel-2", "NDVI", "Förändringsdetektion"],
    repoUrl: "https://github.com/ulfboge/skogsmonitor-gee-demo",
    liveUrl: "",
    docsUrl: "",
    coordinates: [15.8, 61.4]
  },
  {
    id: "soil-carbon-modeling",
    title: "Soil Carbon Modeling",
    type: "featured",
    summary: "Arbetsflöde för kolmodellering med GEE, klimat- och jorddata samt export till notebook-baserad analys.",
    tags: ["GEE", "Jupyter", "Raster", "Kolprojekt"],
    repoUrl: "https://github.com/ulfboge/soil-carbon-modeling",
    liveUrl: "",
    docsUrl: "",
    coordinates: [18.3, 59.3]
  },
  {
    id: "movement-ecology",
    title: "Movement Ecology (SDM)",
    type: "featured",
    summary: "Artutbredningsmodellering för lemurer i Madagaskar med satellitembeddings och klassiska prediktorer.",
    tags: ["R", "SDM", "AlphaEarth", "WorldClim"],
    repoUrl: "https://github.com/ulfboge/movement_ecology",
    liveUrl: "",
    docsUrl: "",
    coordinates: [46.9, -19.5]
  },
  {
    id: "mgis-downloader",
    title: "MGIS-Downloader",
    type: "featured",
    summary: "Webbapp för nedladdning och paketering av geodata från svenska datakällor via karta.",
    tags: ["Node.js", "Leaflet", "STAC", "Geodataflöden"],
    repoUrl: "https://github.com/ulfboge/MGIS-downloader",
    liveUrl: "",
    docsUrl: "",
    coordinates: [16.2, 60.9]
  },
  {
    id: "maps-portfolio",
    title: "Maps Portfolio",
    type: "featured",
    summary: "Samling av biodiversitetskartor i QGIS med både statiska kartblad och webbpublicering.",
    tags: ["QGIS", "Kartdesign", "Biodiversitet", "GitHub Pages"],
    repoUrl: "https://github.com/ulfboge/maps-portfolio",
    liveUrl: "",
    docsUrl: "",
    coordinates: [39.8, -6.8]
  },
  {
    id: "halmstad-stadsnvi-project",
    title: "Halmstad StadsNVI (desktop)",
    type: "featured",
    summary: "Praktiskt desktopprojekt för NVI med QGIS, kartproduktion och metodiskt QA/QC-upplägg.",
    tags: ["NVI", "QGIS", "Desktop GIS", "Planeringsunderlag"],
    repoUrl: "https://github.com/ulfboge/halmstad-stadsnvi-project",
    liveUrl: "",
    docsUrl: "",
    coordinates: [12.86, 56.67]
  },
  {
    id: "enterprise-web-gis",
    title: "Enterprise Web GIS Starter",
    type: "featured",
    summary: "Prototyp för öppen web-GIS-plattform med PostGIS, pg_tileserv, STAC, FastAPI och MapLibre.",
    tags: ["PostGIS", "FastAPI", "STAC", "MapLibre"],
    repoUrl: "https://github.com/ulfboge/enterprise",
    liveUrl: "",
    docsUrl: "",
    coordinates: [15.0, 58.8]
  },
  {
    id: "qgis-mcp",
    title: "QGIS MCP",
    type: "featured",
    summary: "Integration mellan QGIS och MCP för promptstyrd lagerhantering, analys och PyQGIS-körning.",
    tags: ["QGIS", "MCP", "PyQGIS", "Automation"],
    repoUrl: "https://github.com/ulfboge/qgis_mcp",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "galago-audio-project",
    title: "Galago Acoustic Classifier",
    type: "featured",
    summary: "CNN-baserad artklassificering av galago-läten med mel-spektrogram och osäkerhetshantering.",
    tags: ["Python", "Deep Learning", "Akustik", "Biodiversitet"],
    repoUrl: "https://github.com/ulfboge/galago_audio_project",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "gold-standard",
    title: "Gold Standard MRV Pipeline",
    type: "lab",
    summary: "MRV-prototyp för GS4GG A/R med validering av fältdata, schemaregler och rapportstöd.",
    tags: ["MRV", "Gold Standard", "QGIS", "Datavalidering"],
    repoUrl: "https://github.com/ulfboge/gold-standard",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "forest-compliance-offers",
    title: "Forest Compliance Offers",
    type: "lab",
    summary: "Modulärt ramverk för EUDR, certifieringsförberedelser och monitorering med fokus på dokumentation.",
    tags: ["EUDR", "Dokumentation", "Arbetsflödesdesign", "ESG"],
    repoUrl: "https://github.com/ulfboge/forest-compliance-offers",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "galagos-db",
    title: "Galagos Database",
    type: "lab",
    summary: "PostgreSQL/PostGIS-baserad databas för observationer, analys och QGIS-integration.",
    tags: ["PostGIS", "QGIS", "SQL", "Biologidata"],
    repoUrl: "https://github.com/ulfboge/galagos",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "morast-qgis",
    title: "Morast QGIS (TWI)",
    type: "lab",
    summary: "Skript för beräkning av Topographic Wetness Index med QGIS Processing och SAGA-flöden.",
    tags: ["QGIS", "TWI", "Hydrologi", "Python"],
    repoUrl: "https://github.com/ulfboge/Morast_QGIS",
    liveUrl: "",
    docsUrl: "",
    coordinates: [13.4, 55.9]
  },
  {
    id: "agb-comparison",
    title: "AGB jämförelse (mini-case)",
    type: "lab",
    summary: "Lättviktsanalys för jämförelse mellan modell och referensdata för above-ground biomass.",
    tags: ["Biomassa", "Python", "Statistik"],
    repoUrl: "https://github.com/ulfboge/agb",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "wildlands-league-ecosystem",
    title: "Wildlands League Ecosystem",
    type: "lab",
    summary: "Projektstruktur för skogs- och ekosystemanalys med fokus på metodik och rapportproduktion.",
    tags: ["Ecosystem Services", "Skogsanalys", "Rapportering"],
    repoUrl: "https://github.com/ulfboge/wildlands-league-ecosystem",
    liveUrl: "",
    docsUrl: "",
    coordinates: [-79.8, 45.5]
  },
  {
    id: "fiction-vatmarkwatch",
    title: "VåtmarkWatch (koncept)",
    type: "fictional",
    summary: "Tidigare konceptcase för Sentinel-baserad våtmarksmonitorering i svensk förvaltningskontext.",
    tags: ["Koncept", "GIS", "Fjärranalys"],
    repoUrl: "",
    liveUrl: "site/projects/nv-vatmarkwatch/index.html",
    docsUrl: "docs/projects/nv-vatmarkwatch.md",
    coordinates: [14.6, 58.3]
  },
  {
    id: "fiction-kommunnvi",
    title: "KommunNVI-Suite (koncept)",
    type: "fictional",
    summary: "Tidigare koncept med NVI, konnektivitet och planunderlag för kommunal planering.",
    tags: ["Koncept", "NVI", "Planering"],
    repoUrl: "",
    liveUrl: "site/projects/ulricehamn-kommunnvi-suite/index.html",
    docsUrl: "docs/projects/ulricehamn-kommunnvi-suite.md",
    coordinates: [13.4, 57.8]
  },
  {
    id: "fiction-halmstad",
    title: "StadsNVI (koncept)",
    type: "fictional",
    summary: "Tidigare koncept för snabb desktop-NVI i detaljplaneprocess.",
    tags: ["Koncept", "NVI", "QGIS"],
    repoUrl: "",
    liveUrl: "site/projects/halmstad-stadsnvi/index.html",
    docsUrl: "docs/projects/halmstad-stadsnvi.md",
    coordinates: [12.86, 56.67]
  },
  {
    id: "fiction-dp-nvi-light",
    title: "DP-NVI Light (koncept)",
    type: "fictional",
    summary: "Tidigare koncept med översiktlig naturvårdsklassning för mindre uppdrag.",
    tags: ["Koncept", "NVI"],
    repoUrl: "",
    liveUrl: "site/projects/bastad-dp-nvi-light/index.html",
    docsUrl: "docs/projects/bastad-dp-nvi-light.md",
    coordinates: [12.84, 56.42]
  },
  {
    id: "fiction-campusnvi",
    title: "CampusNVI (koncept)",
    type: "fictional",
    summary: "Tidigare koncept för campusmiljö med naturvårds- och artfyndsunderlag.",
    tags: ["Koncept", "NVI"],
    repoUrl: "",
    liveUrl: "site/projects/akademiska-campusnvi/index.html",
    docsUrl: "docs/projects/akademiska-campusnvi.md",
    coordinates: [17.64, 59.86]
  },
  {
    id: "fiction-havsdata",
    title: "Havsdata 360 (koncept)",
    type: "fictional",
    summary: "Tidigare koncept för datakatalog och tematiska kartlager inom havsmiljö.",
    tags: ["Koncept", "Geodata"],
    repoUrl: "",
    liveUrl: "site/projects/hav-havsdata-360/index.html",
    docsUrl: "docs/projects/hav-havsdata-360.md",
    coordinates: [17.7, 59.3]
  },
  {
    id: "fiction-reservat",
    title: "ReservatsUnderlag Pro (koncept)",
    type: "fictional",
    summary: "Tidigare koncept för standardiserat GIS-underlag till reservatsarbete.",
    tags: ["Koncept", "Skyddad natur"],
    repoUrl: "",
    liveUrl: "site/projects/lst-gavleborg-reservatsunderlag-pro/index.html",
    docsUrl: "docs/projects/lst-gavleborg-reservatsunderlag-pro.md",
    coordinates: [16.7, 61.3]
  },
  {
    id: "fiction-restaurering",
    title: "RestaureringsKontroll (koncept)",
    type: "fictional",
    summary: "Tidigare koncept med före-efter-analys av åtgärder i nordliga våtmarker.",
    tags: ["Koncept", "Restaurering"],
    repoUrl: "",
    liveUrl: "site/projects/lst-norrbotten-restaureringskontroll/index.html",
    docsUrl: "docs/projects/lst-norrbotten-restaureringskontroll.md",
    coordinates: [20.2, 66.0]
  }
];

const state = {
  tab: "featured",
  search: ""
};

const groupOrder = ["featured", "lab", "fictional"];
const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
const unavailableRepoIds = new Set([
  "skogsmonitor-gee-demo",
  "movement-ecology",
  "mgis-downloader",
  "halmstad-stadsnvi-project",
  "enterprise-web-gis",
  "qgis-mcp",
  "galago-audio-project",
  "galagos-db",
  "morast-qgis",
  "agb-comparison"
]);

function getFilteredProjects() {
  const needle = state.search.trim().toLowerCase();
  return projects.filter((project) => {
    const tabMatch = state.tab === "all" ? true : project.type === state.tab;
    if (!tabMatch) return false;

    if (!needle) return true;
    const haystack = `${project.title} ${project.summary} ${project.tags.join(" ")}`.toLowerCase();
    return haystack.includes(needle);
  });
}

function renderCard(project) {
  const kindLabel =
    project.type === "featured"
      ? "Utvalt"
      : project.type === "lab"
        ? "Labb"
        : "Koncept";

  const githubLink = project.repoUrl
    ? unavailableRepoIds.has(project.id)
      ? `<span class="link-btn is-disabled" title="Repo ej publikt på GitHub ännu">GitHub (ej tillgänglig)</span>`
      : `<a class="link-btn" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>`
    : "";

  const links = [
    githubLink,
    project.liveUrl
      ? `<a class="link-btn" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Sida</a>`
      : "",
    project.docsUrl
      ? `<a class="link-btn" href="${project.docsUrl}" target="_blank" rel="noopener noreferrer">Dokument</a>`
      : ""
  ].join("");

  return `
    <article class="project-card">
      <div class="card-top">
        <h3 class="project-title">${project.title}</h3>
        <span class="kind-pill ${project.type}">${kindLabel}</span>
      </div>
      <p class="project-summary">${project.summary}</p>
      <div class="tag-row">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="links">${links}</div>
      <div class="card-actions">
        <button class="card-open" type="button" data-open-id="${project.id}">Läs mer</button>
      </div>
    </article>
  `;
}

function buildOsmEmbedUrl(project) {
  if (!Array.isArray(project.coordinates)) return "";
  const [lon, lat] = project.coordinates;
  const dLon = 0.45;
  const dLat = 0.3;
  const left = lon - dLon;
  const right = lon + dLon;
  const top = lat + dLat;
  const bottom = lat - dLat;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`;
}

function renderProjectDetail(project) {
  const githubLink = project.repoUrl
    ? unavailableRepoIds.has(project.id)
      ? `<span class="link-btn is-disabled" title="Repo ej publikt på GitHub ännu">GitHub (ej tillgänglig)</span>`
      : `<a class="link-btn" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>`
    : "";

  const links = [
    githubLink,
    project.liveUrl
      ? `<a class="link-btn" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Sida</a>`
      : "",
    project.docsUrl
      ? `<a class="link-btn" href="${project.docsUrl}" target="_blank" rel="noopener noreferrer">Dokument</a>`
      : ""
  ].join("");

  let visual = `<p class="detail-empty">Ingen bild tillgänglig ännu.</p>`;
  if (project.imageUrl) {
    visual = `<img src="${project.imageUrl}" alt="Förhandsbild för ${project.title}" loading="lazy" />`;
  } else if (Array.isArray(project.coordinates)) {
    visual = `<iframe title="Kartöversikt för ${project.title}" src="${buildOsmEmbedUrl(project)}"></iframe>`;
  }

  dialogContent.innerHTML = `
    <h3 class="detail-title">${project.title}</h3>
    <p class="detail-summary">${project.summary}</p>
    <div class="detail-grid">
      <div>
        <div class="tag-row">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="links">${links}</div>
      </div>
      <div class="detail-visual">${visual}</div>
    </div>
  `;
}

function bindCardDetailEvents() {
  document.querySelectorAll("[data-open-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.id === button.dataset.openId);
      if (!project) return;
      renderProjectDetail(project);
      dialog.showModal();
    });
  });
}

function renderList() {
  const list = document.getElementById("project-list");
  const resultCount = document.getElementById("result-count");
  const filtered = getFilteredProjects();

  resultCount.textContent = `${filtered.length} projekt matchar filtreringen`;

  if (!filtered.length) {
    list.innerHTML = `<p class="result-count">Inga projekt matchade din sökning.</p>`;
    return;
  }

  if (state.tab !== "all") {
    list.innerHTML = filtered.map(renderCard).join("");
    bindCardDetailEvents();
    return;
  }

  const grouped = groupOrder
    .map((type) => ({ type, items: filtered.filter((project) => project.type === type) }))
    .filter((group) => group.items.length > 0);

  const groupTitle = {
    featured: "Utvalda projekt",
    lab: "Labb / under utveckling",
    fictional: "Konceptarkiv"
  };

  list.innerHTML = grouped
    .map(
      (group) => `
        <section class="group-block">
          <h3 class="group-title">${groupTitle[group.type]}</h3>
          <div class="group-list">
            ${group.items.map(renderCard).join("")}
          </div>
        </section>
      `
    )
    .join("");
  bindCardDetailEvents();
}

function bindUi() {
  const searchInput = document.getElementById("search");
  const closeButton = document.getElementById("dialog-close");

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const card = document.querySelector(".dialog-card");
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const isInside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;
    if (!isInside) dialog.close();
  });

  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderList();
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("is-active"));
      button.classList.add("is-active");
      state.tab = button.dataset.tab;
      renderList();
    });
  });
}

function init() {
  bindUi();
  renderList();
}

init();
