const projects = [
  {
    id: "miljogifter-500",
    title: "Miljögifter i svenska sjöar",
    type: "real-gis",
    summary: "Interaktiv webbkarta med filtrering av PFAS, kvicksilver och andra föroreningar i sjöar.",
    tags: ["MapLibre", "Vanilla JS", "GeoJSON", "Miljöövervakning"],
    repoUrl: "https://github.com/galag/miljogifter-500",
    liveUrl: "",
    docsUrl: "",
    coordinates: [15.5, 62.2]
  },
  {
    id: "nrm-ringmarkningsdata",
    title: "Ringmärkningsdata Sverige",
    type: "real-gis",
    summary: "Leaflet-karta över publika GBIF-observationer med statistik, arter och geografisk översikt.",
    tags: ["Leaflet", "GBIF API", "Biodiversitet", "GitHub Pages"],
    repoUrl: "https://github.com/galag/nrm-ringmarkningsdata",
    liveUrl: "https://ulfboge.github.io/nrm-ringmarkningsdata/",
    docsUrl: "",
    coordinates: [16.5, 62.8]
  },
  {
    id: "skogsmonitor-gee-demo",
    title: "Skogsmonitor GEE Demo",
    type: "real-gis",
    summary: "Demo för NDVI-förändringsanalys i skog med Earth Engine, periodjämförelser och areaestimat.",
    tags: ["Google Earth Engine", "Sentinel-2", "NDVI", "Förändringsdetektion"],
    repoUrl: "https://github.com/galag/skogsmonitor-gee-demo",
    liveUrl: "",
    docsUrl: "",
    coordinates: [15.8, 61.4]
  },
  {
    id: "soil-carbon-modeling",
    title: "Soil Carbon Modeling",
    type: "real-gis",
    summary: "Arbetsflöde för kolmodellering med GEE, klimat- och jorddata samt export till notebook-baserad analys.",
    tags: ["GEE", "Jupyter", "Raster", "Kolprojekt"],
    repoUrl: "https://github.com/galag/soil-carbon-modeling",
    liveUrl: "",
    docsUrl: "",
    coordinates: [18.3, 59.3]
  },
  {
    id: "movement-ecology",
    title: "Movement Ecology (SDM)",
    type: "real-gis",
    summary: "Artutbredningsmodellering för lemurer i Madagaskar med satellitembeddings och klassiska prediktorer.",
    tags: ["R", "SDM", "AlphaEarth", "WorldClim"],
    repoUrl: "https://github.com/galag/movement_ecology",
    liveUrl: "",
    docsUrl: "",
    coordinates: [46.9, -19.5]
  },
  {
    id: "mgis-downloader",
    title: "MGIS-Downloader",
    type: "real-gis",
    summary: "Webbapp för nedladdning och paketering av geodata från svenska datakällor via karta.",
    tags: ["Node.js", "Leaflet", "STAC", "Geodataflöden"],
    repoUrl: "https://github.com/galag/MGIS-downloader",
    liveUrl: "",
    docsUrl: "",
    coordinates: [16.2, 60.9]
  },
  {
    id: "forest-compliance-offers",
    title: "Forest Compliance Offers",
    type: "real-other",
    summary: "Modulärt ramverk för EUDR, certifieringsförberedelser och monitorering med fokus på dokumentation.",
    tags: ["EUDR", "Dokumentation", "Arbetsflödesdesign", "ESG"],
    repoUrl: "https://github.com/galag/forest-compliance-offers",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "galagos-db",
    title: "Galagos Database",
    type: "real-other",
    summary: "PostgreSQL/PostGIS-baserad databas för observationer, analys och QGIS-integration.",
    tags: ["PostGIS", "QGIS", "SQL", "Biologidata"],
    repoUrl: "https://github.com/galag/galagos",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
  },
  {
    id: "galago-audio-project",
    title: "Galago Acoustic Classifier",
    type: "real-other",
    summary: "CNN-baserad artklassificering av galago-läten med mel-spektrogram och osäkerhetshantering.",
    tags: ["Python", "Deep Learning", "Akustik", "Biodiversitet"],
    repoUrl: "https://github.com/galag/galago_audio_project",
    liveUrl: "",
    docsUrl: "",
    coordinates: null
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
  tab: "all",
  search: "",
  selectedId: null
};

let map;
let popup;

function initMap() {
  map = new maplibregl.Map({
    container: "map",
    style: {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "© OpenStreetMap contributors"
        }
      },
      layers: [{ id: "osm", type: "raster", source: "osm" }]
    },
    center: [15.5, 61.2],
    zoom: 3.7
  });

  popup = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: false,
    maxWidth: "340px"
  });

  map.on("load", () => {
    map.addSource("projects", {
      type: "geojson",
      data: buildGeoJson(getFilteredProjects())
    });

    map.addLayer({
      id: "project-dots",
      type: "circle",
      source: "projects",
      paint: {
        "circle-radius": 8,
        "circle-color": [
          "match",
          ["get", "type"],
          "real-gis",
          "#34d399",
          "real-other",
          "#7f9cff",
          "fictional",
          "#f5cc63",
          "#cccccc"
        ],
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ffffff"
      }
    });

    map.addLayer({
      id: "project-label",
      type: "symbol",
      source: "projects",
      layout: {
        "text-field": ["get", "title"],
        "text-font": ["Open Sans Regular"],
        "text-size": 11,
        "text-offset": [0, 1.3],
        "text-anchor": "top"
      },
      paint: {
        "text-color": "#f3f6fb",
        "text-halo-color": "#132533",
        "text-halo-width": 1.2
      }
    });

    map.on("click", "project-dots", (event) => {
      const feature = event.features && event.features[0];
      if (!feature) return;
      const projectId = feature.properties.id;
      state.selectedId = projectId;
      const project = projects.find((p) => p.id === projectId);
      if (!project) return;

      popup
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<strong>${project.title}</strong><br><span>${project.summary}</span>`
        )
        .addTo(map);

      renderList();
      const card = document.querySelector(`[data-project-id="${projectId}"]`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    map.on("mouseenter", "project-dots", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "project-dots", () => {
      map.getCanvas().style.cursor = "";
    });
  });
}

function buildGeoJson(filtered) {
  return {
    type: "FeatureCollection",
    features: filtered
      .filter((project) => Array.isArray(project.coordinates))
      .map((project) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: project.coordinates
        },
        properties: {
          id: project.id,
          title: project.title,
          type: project.type
        }
      }))
  };
}

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

function renderList() {
  const list = document.getElementById("project-list");
  const resultCount = document.getElementById("result-count");
  const filtered = getFilteredProjects();

  resultCount.textContent = `${filtered.length} projekt matchar filtreringen`;

  if (!filtered.length) {
    list.innerHTML = `<p class="result-count">Inga projekt matchade din sökning.</p>`;
    return;
  }

  list.innerHTML = filtered
    .map((project) => {
      const selectedClass = project.id === state.selectedId ? "is-selected" : "";
      const kindLabel =
        project.type === "real-gis"
          ? "GIS"
          : project.type === "real-other"
            ? "Övrigt"
            : "Koncept";

      const links = [
        project.repoUrl
          ? `<a class="link-btn" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>`
          : "",
        project.liveUrl
          ? `<a class="link-btn" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Sida</a>`
          : "",
        project.docsUrl
          ? `<a class="link-btn" href="${project.docsUrl}" target="_blank" rel="noopener noreferrer">Dokument</a>`
          : ""
      ].join("");

      return `
        <article class="project-card ${selectedClass}" data-project-id="${project.id}">
          <div class="card-top">
            <h3 class="project-title">${project.title}</h3>
            <span class="kind-pill ${project.type}">${kindLabel}</span>
          </div>
          <p class="project-summary">${project.summary}</p>
          <div class="tag-row">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="links">${links}</div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.projectId;
      state.selectedId = id;
      const project = projects.find((p) => p.id === id);
      renderList();
      if (!project || !Array.isArray(project.coordinates) || !map) return;
      map.flyTo({ center: project.coordinates, zoom: 5.5, speed: 1.1 });
      popup
        .setLngLat(project.coordinates)
        .setHTML(`<strong>${project.title}</strong><br><span>${project.summary}</span>`)
        .addTo(map);
    });
  });
}

function updateMapData() {
  if (!map || !map.getSource("projects")) return;
  map.getSource("projects").setData(buildGeoJson(getFilteredProjects()));
}

function bindUi() {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderList();
    updateMapData();
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("is-active"));
      button.classList.add("is-active");
      state.tab = button.dataset.tab;
      state.selectedId = null;
      if (popup) popup.remove();
      renderList();
      updateMapData();
    });
  });
}

function init() {
  bindUi();
  renderList();
  initMap();
}

init();
