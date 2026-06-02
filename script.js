// Dados (ARRAIA_WEEKS, FORRO_CAJU_STAGES, FESTIVALS) em data.js

let currentFestivalId = "arraia-do-povo";

function getCurrentFestival() { return FESTIVALS[currentFestivalId]; }
function getOtherFestivalsWithMatch(q) {
  return Object.values(FESTIVALS).filter(
    f => f.id !== currentFestivalId && hasMatchInFestival(f, q)
  );
}

// ── Render ──
const today = new Date();
const todayStr = today.toISOString().slice(0, 10);

function dayNum(dateStr) { return parseInt(dateStr.split("-")[2]); }

function renderSkeleton(container) {
  const wrap = document.createElement("div");
  wrap.className = "skeleton-wrap";
  wrap.innerHTML = `
    <p class="skeleton-message">Meus tokens acabaram, me ajude a te ajudar, faça um pixzinho véi: 79999630944</p>
    ${Array.from({ length: 4 }).map(() => `
      <div class="day-card skeleton">
        <div class="day-date">
          <div class="skeleton-line skeleton-num"></div>
          <div class="skeleton-line skeleton-small"></div>
          <div class="skeleton-line skeleton-small"></div>
        </div>
        <div class="day-content">
          <div class="skeleton-line skeleton-tag"></div>
          <div class="skeleton-line skeleton-tag"></div>
          <div class="skeleton-line skeleton-tag short"></div>
        </div>
      </div>
    `).join("")}
  `;
  container.appendChild(wrap);
}

function renderSchedule() {
  const festival = getCurrentFestival();
  const container = document.getElementById("schedule");
  container.innerHTML = "";

  if (!festival.weeks.length) {
    renderSkeleton(container);
    return;
  }

  festival.weeks.forEach(week => {
    const section = document.createElement("section");
    section.className = "week-section";
    section.dataset.week = week.id;

    const title = document.createElement("p");
    title.className = "week-title";
    title.innerHTML = `<span>${week.title.split("·")[0]}</span>·${week.title.split("·").slice(1).join("·")}`;
    section.appendChild(title);

    week.days.forEach(day => {
      const isToday = day.date === todayStr;

      const card = document.createElement("div");
      card.className = "day-card" +
        (isToday ? " today" : "") +
        (day.special ? " special" : "");
      card.dataset.week = week.id;

      card.dataset.date = day.date;
      card.innerHTML = `
        <div class="day-date">
          <div class="day-num">${dayNum(day.date)}</div>
          <div class="day-month">${day.month}</div>
          <div class="day-weekday">${day.weekday}</div>
        </div>
        <div class="day-content">
          ${isToday ? '<span class="today-badge">● Hoje</span>' : ""}
          ${day.special ? `<span class="day-badge">${day.special}</span>` : ""}
          <div class="day-artists">
            ${day.artists.map((a, i) =>
              `<span class="artist-tag${day.highlights && day.highlights.includes(a) ? " star" : ""}${day.worldcupHighlights && day.worldcupHighlights.includes(a) ? " brasil" : ""}" data-artist="${a.replace(/"/g, '&quot;')}">${a}</span>`
            ).join("")}
          </div>
          ${day.p360 ? `
          <div class="palco360">
            <span class="palco360-label">Palco 360°</span>
            <span class="palco360-artist" data-artist="${day.p360.replace(/"/g, '&quot;')}">${day.p360}</span>
          </div>` : ""}
          ${day.location ? `
          <div class="day-location">
            <span class="day-location__pin" aria-hidden="true">📍</span>
            <span class="day-location__text" data-location="${day.location.replace(/"/g, '&quot;')}">${day.location}</span>
          </div>` : ""}
        </div>
      `;

      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

// ── Shared state: indicator, progress bar, auto-highlight ──
let autoHighlightActive = true;
let indicatorEl = null;
let progressBarEl = null;
let weekBtns = {};

function moveIndicatorToBtn(btn) {
  if (!indicatorEl || !btn) return;
  indicatorEl.style.left   = btn.offsetLeft + "px";
  indicatorEl.style.top    = btn.offsetTop + "px";
  indicatorEl.style.width  = btn.offsetWidth + "px";
  indicatorEl.style.height = btn.offsetHeight + "px";
}

function renderFilterButtons() {
  const festival = getCurrentFestival();
  const filterBar = document.getElementById("filterBar");

  filterBar.querySelectorAll(".filter-btn").forEach(b => b.remove());

  const allBtn = document.createElement("button");
  allBtn.className = "filter-btn active";
  allBtn.dataset.week = "all";
  allBtn.textContent = "Tudo";
  filterBar.appendChild(allBtn);

  festival.weeks.forEach(week => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.week = week.id;
    btn.textContent = week.filterLabel || week.title;
    filterBar.appendChild(btn);
  });

  weekBtns = {};
  filterBar.querySelectorAll(".filter-btn").forEach(b => { weekBtns[b.dataset.week] = b; });
}

// ── Search state ──
let currentSearchQuery = "";
let pendingSearchAfterSwitch = null;
const searchBarEl = document.getElementById("searchBar");
const searchInputEl = document.getElementById("searchInput");
const searchClearEl = document.getElementById("searchClear");

function normalizeText(str) {
  return (str || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function dayMatchesQuery(day, q) {
  if (!q) return true;
  if (day.artists && day.artists.some(a => normalizeText(a).includes(q))) return true;
  if (day.p360 && normalizeText(day.p360).includes(q)) return true;
  if (day.location && normalizeText(day.location).includes(q)) return true;
  return false;
}

function hasMatchInFestival(festival, q) {
  if (!q || !festival || !festival.weeks) return false;
  return festival.weeks.some(week => week.days.some(d => dayMatchesQuery(d, q)));
}

function clearSearchState({ refocus = false } = {}) {
  if (searchInputEl.value === "" && currentSearchQuery === "") return;
  searchInputEl.value = "";
  currentSearchQuery = "";
  searchBarEl.classList.remove("has-query");
  applySearch();
  if (refocus) searchInputEl.focus();
}

function renderSearchEmpty(container, q, originalQuery) {
  const others = getOtherFestivalsWithMatch(q);
  const safeQuery = originalQuery.replace(/[<>&"']/g, c => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;"
  }[c]));

  let hint;
  if (others.length === 1) hint = `Mas tem resultado no ${others[0].name}.`;
  else if (others.length > 1) hint = `Mas tem resultado em: ${others.map(f => f.name).join(", ")}.`;
  else hint = "Tente outro nome ou confira a programação completa.";

  const switchButtons = others
    .map(f => `<button type="button" class="search-empty__btn primary" data-action="switch" data-festival="${f.id}">Ver no ${f.name}</button>`)
    .join("");

  const empty = document.createElement("div");
  empty.className = "search-empty";
  empty.innerHTML = `
    <p class="search-empty__title">Nenhum artista encontrado para <strong>"${safeQuery}"</strong></p>
    <p class="search-empty__hint">${hint}</p>
    <div class="search-empty__actions">
      <button type="button" class="search-empty__btn" data-action="clear">Limpar busca</button>
      ${switchButtons}
    </div>
  `;
  container.appendChild(empty);

  empty.querySelector('[data-action="clear"]').addEventListener("click", () => {
    clearSearchState({ refocus: true });
  });
  empty.querySelectorAll('[data-action="switch"]').forEach(btn => {
    btn.addEventListener("click", () => {
      pendingSearchAfterSwitch = searchInputEl.value;
      switchFestival(btn.dataset.festival);
    });
  });
}

function applySearch() {
  const q = currentSearchQuery;
  const container = document.getElementById("schedule");
  const existingEmpty = container.querySelector(".search-empty");
  if (existingEmpty) existingEmpty.remove();

  // Limpa destaques antigos
  container.querySelectorAll(".search-match").forEach(el => el.classList.remove("search-match"));

  if (!q) {
    container.querySelectorAll(".day-card.search-hidden").forEach(el => el.classList.remove("search-hidden"));
    container.querySelectorAll(".week-section.search-hidden").forEach(el => el.classList.remove("search-hidden"));
    return;
  }

  // Acessa dados do festival ativo
  const festival = getCurrentFestival();
  const dayByDate = new Map();
  festival.weeks.forEach(w => w.days.forEach(d => dayByDate.set(d.date, d)));

  let totalVisible = 0;

  container.querySelectorAll(".week-section").forEach(section => {
    let weekHasMatch = false;
    section.querySelectorAll(".day-card").forEach(card => {
      const day = dayByDate.get(card.dataset.date);
      const matches = day && dayMatchesQuery(day, q);
      card.classList.toggle("search-hidden", !matches);
      if (!matches) return;
      weekHasMatch = true;
      totalVisible++;
      // Destaca campos que casaram
      card.querySelectorAll(".artist-tag[data-artist]").forEach(tag => {
        if (normalizeText(tag.dataset.artist).includes(q)) tag.classList.add("search-match");
      });
      const p360El = card.querySelector(".palco360-artist[data-artist]");
      if (p360El && normalizeText(p360El.dataset.artist).includes(q)) p360El.classList.add("search-match");
      const locEl = card.querySelector(".day-location__text[data-location]");
      if (locEl && normalizeText(locEl.dataset.location).includes(q)) locEl.classList.add("search-match");
    });
    section.classList.toggle("search-hidden", !weekHasMatch);
  });

  if (totalVisible === 0) {
    renderSearchEmpty(container, q, searchInputEl.value.trim());
  }
}

// ── Filter ──
document.getElementById("filterBar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  // Clique manual em filtro de semana limpa busca ativa
  if (currentSearchQuery) {
    searchInputEl.value = "";
    currentSearchQuery = "";
    searchBarEl.classList.remove("has-query");
    applySearch();
  }

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  moveIndicatorToBtn(btn);
  autoHighlightActive = btn.dataset.week === "all";

  const week = btn.dataset.week;
  document.querySelectorAll(".week-section").forEach(s => {
    s.style.display = (week === "all" || s.dataset.week === week) ? "" : "none";
  });
});

// ── Search input listeners ──
searchInputEl.addEventListener("input", () => {
  const raw = searchInputEl.value;
  currentSearchQuery = normalizeText(raw);
  searchBarEl.classList.toggle("has-query", raw.length > 0);

  if (currentSearchQuery) {
    // Volta filtro de semana para "Tudo" sem disparar o handler de clique
    const allBtn = weekBtns["all"];
    if (allBtn && !allBtn.classList.contains("active")) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      allBtn.classList.add("active");
      moveIndicatorToBtn(allBtn);
    }
    document.querySelectorAll(".week-section").forEach(s => { s.style.display = ""; });
    autoHighlightActive = false;
  } else {
    autoHighlightActive = true;
  }

  applySearch();
});

searchClearEl.addEventListener("click", () => clearSearchState({ refocus: true }));

searchInputEl.addEventListener("keydown", e => {
  if (e.key === "Escape" && searchInputEl.value) {
    e.preventDefault();
    clearSearchState({ refocus: true });
  }
});

// ── Progress bar ──
progressBarEl = document.createElement("div");
progressBarEl.id = "scroll-progress";
document.getElementById("site-header").appendChild(progressBarEl);

// ── Filter sliding indicator ──
const filterBarEl = document.getElementById("filterBar");
indicatorEl = document.createElement("div");
indicatorEl.className = "filter-indicator";
filterBarEl.prepend(indicatorEl);
indicatorEl.style.transition = "none";
requestAnimationFrame(() => { indicatorEl.style.transition = ""; });

// ── Auto-highlight weeks by scroll ──
const sectionHighlightObserver = new IntersectionObserver(entries => {
  if (!autoHighlightActive) return;
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const btn = weekBtns[entry.target.dataset.week];
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    moveIndicatorToBtn(btn);
    filterBarEl.scrollTo({
      left: btn.offsetLeft - filterBarEl.offsetWidth / 2 + btn.offsetWidth / 2,
      behavior: "smooth"
    });
  });
}, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

function observeCurrentWeekSections() {
  document.querySelectorAll(".week-section").forEach(s => sectionHighlightObserver.observe(s));
}

// ── Bandeirinhas ──
const flagsContainer = document.getElementById("header-flags");
for (let i = 0; i < 20; i++) {
  const span = document.createElement("span");
  span.className = "flag";
  flagsContainer.appendChild(span);
}

// ── Header scroll collapse ──
const siteHeader = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 72) {
    siteHeader.classList.add("scrolled");
  } else if (scrollY < 10) {
    siteHeader.classList.remove("scrolled");
  }

  // Progress bar
  if (progressBarEl) {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBarEl.style.width = total > 0 ? (scrollY / total * 100) + "%" : "0%";
  }

  // Reset active filter to "Todos" quando voltar ao topo
  if (scrollY < 100 && autoHighlightActive) {
    const allBtn = weekBtns["all"];
    if (allBtn && !allBtn.classList.contains("active")) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      allBtn.classList.add("active");
      moveIndicatorToBtn(allBtn);
    }
  }
}, { passive: true });

// ── Esconder crédito quando footer estiver visível ──
const footerEl = document.querySelector("footer");
new IntersectionObserver(entries => {
  siteHeader.classList.toggle("footer-visible", entries[0].isIntersecting);
}, { threshold: 0 }).observe(footerEl);

// ── Scroll-reveal animations ──
const revealed = new WeakSet();
let revealObserver = null;

function revealEl(el) {
  if (revealed.has(el)) return;
  revealed.add(el);
  el.classList.remove("reveal-ready");
  el.classList.add("revealed");
}

function applyRevealToCurrentDOM() {
  const weekTitles = document.querySelectorAll(".week-title");
  const dayCards   = document.querySelectorAll(".day-card");

  document.querySelectorAll(".week-section").forEach(section => {
    section.querySelectorAll(".day-card").forEach((card, i) => {
      const delay = card.classList.contains("today") ? 0 : Math.min(i * 60, 300);
      card.style.setProperty("--reveal-delay", delay + "ms");
    });
  });

  weekTitles.forEach(el => el.classList.add("reveal-ready"));
  dayCards.forEach(el => el.classList.add("reveal-ready"));

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealEl(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  }

  weekTitles.forEach(el => revealObserver.observe(el));
  dayCards.forEach(el => revealObserver.observe(el));

  const todayCardEl = document.querySelector(".day-card.today");
  if (todayCardEl) setTimeout(() => revealEl(todayCardEl), 350);
}

document.getElementById("filterBar").addEventListener("click", () => {
  requestAnimationFrame(() => {
    document.querySelectorAll(".day-card:not(.hidden), .week-title").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !revealed.has(el)) {
        revealEl(el);
      }
    });
  });
});

// ── Contadores ocultos (consultados sob demanda via API) ──
const isDev = ["localhost", "127.0.0.1", ""].includes(location.hostname);

if (!isDev) {
  fetch("https://api.counterapi.dev/v1/sj26/visits/up", { keepalive: true }).catch(() => {});
  fetch("https://abacus.jasoncameron.dev/hit/sj26/pageviews", { keepalive: true }).catch(() => {});
}

// ── Rastrear cliques no Instagram (apenas cliques reais) ──
function trackInstagramClick() {
  if (isDev) return;
  fetch("https://api.counterapi.dev/v1/sj26/instagram/up", { keepalive: true }).catch(() => {});
}

// Todos os links <a> do Instagram (popup, header, rodapé)
document.querySelectorAll('a[href*="instagram.com/marcosjrgm"]').forEach(link => {
  link.addEventListener("click", trackInstagramClick);
});

// ── Toggle de tema (claro/escuro) ──
const THEME_MODE_KEY = "sj26_theme_mode";
const themeToggle = document.getElementById("theme-toggle");

function applyThemeMode(mode) {
  document.documentElement.classList.remove("pre-light");
  document.body.classList.toggle("light-mode", mode === "light");
  themeToggle.setAttribute("aria-pressed", mode === "light" ? "true" : "false");
}

const savedThemeMode = localStorage.getItem(THEME_MODE_KEY) === "light" ? "light" : "dark";
applyThemeMode(savedThemeMode);

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem(THEME_MODE_KEY, next);
  applyThemeMode(next);
});
themeToggle.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    themeToggle.click();
  }
});

setTimeout(() => themeToggle.classList.add("visible"), 400);

// ── Festival buttons (um por festival, divididos em dois grupos) ──
const FESTIVAL_GROUPS = [
  { containerId: "festival-buttons-main",      ids: ["arraia-do-povo", "forro-caju"] },
  { containerId: "festival-buttons-secondary", ids: ["areia-branca", "caminhoneiros-itabaiana", "sao-pedro-capela"] },
];
const festivalButtonsContainers = FESTIVAL_GROUPS
  .map(g => document.getElementById(g.containerId))
  .filter(Boolean);
const festivalCurtain = document.getElementById("festival-curtain");
const festivalBonfire = document.getElementById("festival-bonfire");
const festivalStamp = document.getElementById("festival-stamp");
const bonfireSparks = festivalBonfire.querySelector(".bonfire-sparks");
const curtainFlagsContainer = festivalCurtain.querySelector(".curtain-flags");

const festivalBtns = {};

function renderFestivalButtons() {
  FESTIVAL_GROUPS.forEach(group => {
    const container = document.getElementById(group.containerId);
    if (!container) return;
    container.innerHTML = "";

    group.ids.forEach((id, idx) => {
      const f = FESTIVALS[id];
      if (!f) return;
      const btn = document.createElement("div");
      btn.className = "festival-btn";
      btn.dataset.festivalId = id;
      btn.style.setProperty("--idx", idx);
      btn.setAttribute("role", "button");
      btn.setAttribute("tabindex", "0");
      btn.setAttribute("aria-label", `Ir para ${f.name}`);
      btn.title = f.name;
      btn.innerHTML = f.icon;

      btn.addEventListener("click", () => switchFestival(id));
      btn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchFestival(id);
        }
      });

      container.appendChild(btn);
      festivalBtns[id] = btn;
    });
  });
}

function updateActiveFestivalButton() {
  Object.entries(festivalBtns).forEach(([id, btn]) => {
    btn.classList.toggle("is-active", id === currentFestivalId);
  });
}

for (let i = 0; i < 18; i++) {
  const s = document.createElement("span");
  s.className = "spark";
  s.style.setProperty("--sx", (Math.random() * 100).toFixed(1) + "%");
  s.style.setProperty("--sd", (0.8 + Math.random() * 0.8).toFixed(2) + "s");
  s.style.setProperty("--sdelay", (Math.random() * 0.5).toFixed(2) + "s");
  bonfireSparks.appendChild(s);
}
const festivalTitleEl = document.getElementById("festival-title");
const festivalSubtitleEl = document.getElementById("festival-subtitle");

const CURTAIN_FLAG_COUNT = 22;
for (let i = 0; i < CURTAIN_FLAG_COUNT; i++) {
  const f = document.createElement("span");
  f.className = "curtain-flag";
  f.style.setProperty("--i", i);
  curtainFlagsContainer.appendChild(f);
}

function applyFestivalToDOM() {
  const festival = getCurrentFestival();

  document.body.classList.remove(...Object.values(FESTIVALS).map(f => f.theme));
  document.body.classList.add(festival.theme);

  festivalTitleEl.textContent = festival.name;
  festivalSubtitleEl.textContent = festival.subtitle;
  document.title = `${festival.name} — Programação`;

  updateActiveFestivalButton();

  filterBarEl.classList.toggle("is-hidden", festival.weeks.length === 0);

  renderFilterButtons();
  renderSchedule();
  observeCurrentWeekSections();
  applyRevealToCurrentDOM();

  const allBtn = weekBtns["all"];
  if (allBtn) {
    allBtn.classList.add("active");
    autoHighlightActive = true;
    requestAnimationFrame(() => moveIndicatorToBtn(allBtn));
  }

  // Reaplica busca preservada (vindo de "Ver no outro festival") ou limpa estado
  if (pendingSearchAfterSwitch != null) {
    const raw = pendingSearchAfterSwitch;
    pendingSearchAfterSwitch = null;
    if (searchInputEl) {
      searchInputEl.value = raw;
      currentSearchQuery = normalizeText(raw);
      searchBarEl.classList.toggle("has-query", raw.length > 0);
      if (currentSearchQuery) {
        autoHighlightActive = false;
        applySearch();
      }
    }
  } else if (searchInputEl && (searchInputEl.value || currentSearchQuery)) {
    searchInputEl.value = "";
    currentSearchQuery = "";
    searchBarEl.classList.remove("has-query");
  }
}

let switching = false;

function runCurtainTransition(swapFn) {
  festivalCurtain.classList.add("dropping");
  setTimeout(() => {
    try { swapFn(); } catch (err) { console.error(err); }
    festivalCurtain.classList.remove("dropping");
    festivalCurtain.classList.add("rising");
    setTimeout(() => {
      festivalCurtain.classList.remove("rising");
      switching = false;
    }, 700);
  }, 700);
}

function runBonfireTransition(swapFn) {
  festivalBonfire.classList.add("igniting");
  setTimeout(() => {
    try { swapFn(); } catch (err) { console.error(err); }
    festivalBonfire.classList.remove("igniting");
    festivalBonfire.classList.add("fading");
    setTimeout(() => {
      festivalBonfire.classList.remove("fading");
      switching = false;
    }, 700);
  }, 800);
}

function runStampTransition(swapFn) {
  festivalStamp.classList.add("stamping");
  setTimeout(() => {
    try { swapFn(); } catch (err) { console.error(err); }
    festivalStamp.classList.remove("stamping");
    festivalStamp.classList.add("fading");
    setTimeout(() => {
      festivalStamp.classList.remove("fading");
      switching = false;
    }, 500);
  }, 650);
}

const FESTIVAL_TRANSITIONS = {
  curtain: runCurtainTransition,
  bonfire: runBonfireTransition,
  stamp: runStampTransition,
};

function switchFestival(targetId) {
  if (switching) return;
  if (!targetId || !FESTIVALS[targetId] || targetId === currentFestivalId) return;
  switching = true;

  const swap = () => {
    currentFestivalId = targetId;
    applyFestivalToDOM();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  const runTransition = FESTIVAL_TRANSITIONS[FESTIVALS[targetId].transition] || runBonfireTransition;
  runTransition(swap);
}

renderFestivalButtons();
applyFestivalToDOM();

// Auto-scroll to today
const todayCard = document.querySelector(".day-card.today");
if (todayCard) {
  setTimeout(() => todayCard.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
}

setTimeout(() => {
  festivalButtonsContainers.forEach(c => c.classList.add("visible"));
}, 400);
