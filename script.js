// Dados (ARRAIA_WEEKS, FORRO_CAJU_STAGES, FESTIVALS) em data.js

const ACTIVE_FESTIVAL_KEY = "sj26_active_festival";
let currentFestivalId = localStorage.getItem(ACTIVE_FESTIVAL_KEY) || "arraia-do-povo";
if (!FESTIVALS[currentFestivalId]) currentFestivalId = "arraia-do-povo";

function getCurrentFestival() { return FESTIVALS[currentFestivalId]; }
function getOtherFestival() {
  const ids = Object.keys(FESTIVALS);
  return FESTIVALS[ids.find(id => id !== currentFestivalId)];
}

// ── Render ──
const today = new Date();
const todayStr = today.toISOString().slice(0, 10);

function dayNum(dateStr) { return parseInt(dateStr.split("-")[2]); }

function formatDatePtBr(iso) {
  const [y, m, d] = iso.split("T")[0].split("-");
  return `${d}/${m}/${y}`;
}

function renderSkeleton(container, festival) {
  const wrap = document.createElement("div");
  wrap.className = "skeleton-wrap";
  wrap.innerHTML = `
    <p class="skeleton-message">Programação em breve · começa em ${formatDatePtBr(festival.startDate)}</p>
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
    renderSkeleton(container, festival);
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
              `<span class="artist-tag${day.highlights && day.highlights.includes(a) ? " star" : ""}${day.worldcupHighlights && day.worldcupHighlights.includes(a) ? " brasil" : ""}">${a}</span>`
            ).join("")}
          </div>
          ${day.p360 ? `
          <div class="palco360">
            <span class="palco360-label">Palco 360°</span>
            <span class="palco360-artist">${day.p360}</span>
          </div>` : ""}
          ${day.location ? `
          <div class="day-location">
            <span class="day-location__pin" aria-hidden="true">📍</span>
            <span class="day-location__text">${day.location}</span>
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

// ── Filter ──
document.getElementById("filterBar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  moveIndicatorToBtn(btn);
  autoHighlightActive = btn.dataset.week === "all";

  const week = btn.dataset.week;
  document.querySelectorAll(".week-section").forEach(s => {
    s.style.display = (week === "all" || s.dataset.week === week) ? "" : "none";
  });
});

// ── Countdown ──
const pad = n => String(n).padStart(2, "0");

function updateCountdown() {
  const festival = getCurrentFestival();
  const now = new Date();
  const diff = new Date(festival.startDate) - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      `<p style="color:var(--accent);font-weight:700;font-size:1rem;padding:0.5rem 0">O ${festival.name} começou! 🎉</p>`;
    document.getElementById("countdown-compact").textContent = "Acontecendo agora!";
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById("cd-d").textContent = pad(d);
  document.getElementById("cd-h").textContent = pad(h);
  document.getElementById("cd-m").textContent = pad(m);
  document.getElementById("cd-s").textContent = pad(s);
  document.getElementById("countdown-compact").textContent =
    `${pad(d)}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

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

setInterval(updateCountdown, 1000);

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

// ── Contador de visitas + toggle Instagram ──
const visitBubble = document.getElementById("visit-bubble");
const IG_CACHE = "sj26_ig_count";
const isDev = ["localhost", "127.0.0.1", ""].includes(location.hostname);
let visitText = "";
let igMode = false;
let igCount = parseInt(localStorage.getItem(IG_CACHE)) || 0;

if (!isDev) {
  fetch("https://api.counterapi.dev/v1/sj26/visits/up")
    .then(r => r.json())
    .then(({ count }) => {
      if (count == null) return;
      visitText = count > 9999 ? "9k+" : count.toLocaleString("pt-BR");
      visitBubble.textContent = visitText;
      visitBubble.title = "clique em mim";
      visitBubble.style.opacity = "0.75";
      visitBubble.style.pointerEvents = "auto";
    })
    .catch(() => {});
} else {
  visitText = "DEV";
  visitBubble.textContent = visitText;
  visitBubble.title = "clique em mim";
  visitBubble.style.opacity = "0.75";
  visitBubble.style.pointerEvents = "auto";
}

visitBubble.addEventListener("click", () => {
  visitBubble.classList.add("flip-out");
  setTimeout(() => {
    igMode = !igMode;
    if (igMode) {
      visitBubble.classList.add("instagram-mode");
      visitBubble.title = "@ ·";
      visitBubble.textContent = igCount.toLocaleString("pt-BR");
    } else {
      visitBubble.classList.remove("instagram-mode");
      visitBubble.title = "clique em mim";
      visitBubble.textContent = visitText;
    }
    visitBubble.classList.remove("flip-out");
  }, 200);
});

// ── Contador oculto (consultado sob demanda via API) ──
if (!isDev) {
  fetch("https://abacus.jasoncameron.dev/hit/sj26/pageviews", { keepalive: true }).catch(() => {});
}

// ── Rastrear cliques no Instagram (apenas cliques reais) ──
function trackInstagramClick() {
  if (isDev) return;
  fetch("https://api.counterapi.dev/v1/sj26/instagram/up", { keepalive: true })
    .then(r => r.json())
    .then(({ count }) => {
      if (count == null) return;
      igCount = count;
      localStorage.setItem(IG_CACHE, igCount);
      if (igMode) visitBubble.textContent = igCount.toLocaleString("pt-BR");
    })
    .catch(() => {});
}

// Todos os links <a> do Instagram (popup, header, rodapé)
document.querySelectorAll('a[href*="instagram.com/marcosjrgm"]').forEach(link => {
  link.addEventListener("click", trackInstagramClick);
});

// ── Bolinha de contato ──
const contactBubble = document.getElementById("contact-bubble");
contactBubble.textContent = "📞";
contactBubble.addEventListener("click", () => {
  trackInstagramClick();
  window.open("https://www.instagram.com/marcosjrgm/", "_blank", "noopener,noreferrer");
});
setTimeout(() => contactBubble.classList.add("visible"), 400);

// ── Festival toggle ──
const festivalToggle = document.getElementById("festival-toggle");
const festivalCurtain = document.getElementById("festival-curtain");
const festivalBonfire = document.getElementById("festival-bonfire");
const bonfireSparks = festivalBonfire.querySelector(".bonfire-sparks");
const curtainFlagsContainer = festivalCurtain.querySelector(".curtain-flags");

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

const festivalPopup = document.getElementById("festival-popup");
const festivalPopupName = document.getElementById("festival-popup-name");
const festivalPopupClose = document.getElementById("festival-popup-close");

function applyFestivalToDOM() {
  const festival = getCurrentFestival();
  const other = getOtherFestival();

  document.body.classList.remove(...Object.values(FESTIVALS).map(f => f.theme));
  document.body.classList.add(festival.theme);

  festivalTitleEl.textContent = festival.name;
  festivalSubtitleEl.textContent = festival.subtitle;
  document.title = `${festival.name} — Programação`;

  festivalToggle.innerHTML = other.icon;
  festivalToggle.title = `Ir para ${other.name}`;
  festivalToggle.setAttribute("aria-label", `Ir para ${other.name}`);
  festivalPopupName.textContent = other.name;

  filterBarEl.classList.toggle("is-hidden", festival.weeks.length === 0);

  renderFilterButtons();
  renderSchedule();
  observeCurrentWeekSections();
  applyRevealToCurrentDOM();
  updateCountdown();

  const allBtn = weekBtns["all"];
  if (allBtn) {
    allBtn.classList.add("active");
    autoHighlightActive = true;
    requestAnimationFrame(() => moveIndicatorToBtn(allBtn));
  }
}

let switching = false;

function runCurtainTransition(swapFn) {
  festivalCurtain.classList.add("dropping");
  setTimeout(() => {
    swapFn();
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
    swapFn();
    festivalBonfire.classList.remove("igniting");
    festivalBonfire.classList.add("fading");
    setTimeout(() => {
      festivalBonfire.classList.remove("fading");
      switching = false;
    }, 700);
  }, 800);
}

function switchFestival() {
  if (switching) return;
  switching = true;

  const goingToForroCaju = currentFestivalId === "arraia-do-povo";

  const swap = () => {
    currentFestivalId = getOtherFestival().id;
    localStorage.setItem(ACTIVE_FESTIVAL_KEY, currentFestivalId);
    applyFestivalToDOM();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  if (goingToForroCaju) {
    runCurtainTransition(swap);
  } else {
    runBonfireTransition(swap);
  }
}

function hideFestivalPopup() {
  festivalPopup.classList.remove("visible");
  festivalPopup.classList.add("collapsing");
}

festivalToggle.addEventListener("click", () => {
  hideFestivalPopup();
  switchFestival();
});
festivalToggle.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hideFestivalPopup();
    switchFestival();
  }
});
festivalPopupClose.addEventListener("click", hideFestivalPopup);

applyFestivalToDOM();

// Auto-scroll to today
const todayCard = document.querySelector(".day-card.today");
if (todayCard) {
  setTimeout(() => todayCard.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
}

setTimeout(() => festivalToggle.classList.add("visible"), 400);
setTimeout(() => festivalPopup.classList.add("visible"), 1000);
