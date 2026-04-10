const WEEKS = [
  {
    id: 1,
    title: "Semana 1 · Final de Maio",
    days: [
      { date: "2026-05-29", weekday: "Sex", month: "Maio", special: null,
        artists: ["Fogo na Saia", "Seu Desejo", 'Calcinha Preta "Atemporal"'],
        highlights: ['Calcinha Preta "Atemporal"'],
        p360: "Chirlys Trindade" },
      { date: "2026-05-30", weekday: "Sáb", month: "Maio", special: null,
        artists: ["Forró Brasil", "Adelmário Coelho", "Kátia e Aduílio", "Joelma"],
        highlights: ["Joelma"],
        p360: "Forró 10" },
      { date: "2026-05-31", weekday: "Dom", month: "Maio", special: null,
        artists: ["Cintura Fina", "Baby Som", "Henry Freitas"],
        highlights: ["Henry Freitas"],
        p360: "Zé Tramela" },
    ]
  },
  {
    id: 2,
    title: "Semana 2 · Início de Junho",
    days: [
      { date: "2026-06-02", weekday: "Ter", month: "Jun", special: null,
        artists: ["Leonne o Nobre", "Thiago Aquino", "Natanzinho Lima"],
        highlights: ["Natanzinho Lima"],
        p360: "Ittauan" },
      { date: "2026-06-03", weekday: "Qua", month: "Jun", special: null,
        artists: ["As Patricinhas", "Cavalo de Pau", "Gustavo Mioto"],
        highlights: [],
        p360: "Jan Vaqueiro" },
      { date: "2026-06-04", weekday: "Qui", month: "Jun", special: null,
        artists: ["Jeanny Lins", "Walkyria Santos", "Ana Castela"],
        highlights: ["Ana Castela"],
        p360: "Alê Ferraz" },
      { date: "2026-06-05", weekday: "Sex", month: "Jun", special: null,
        artists: ["Geninho Batalha", "Jonas Esticado", "Iguinho e Lulinha", "Ávine Vinny"],
        highlights: ["Iguinho e Lulinha", "Jonas Esticado"],
        p360: "André Novaes" },
      { date: "2026-06-06", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Zueirões do Forró", "Guilherme Dantas", "Duas Paixões", "Tarcísio do Acordeon"],
        highlights: ["Tarcísio do Acordeon"],
        p360: "Dudu Moral" },
      { date: "2026-06-07", weekday: "Dom", month: "Jun", special: null,
        artists: ["Flor de Maracujá", "Dorgival Dantas", "Magníficos"],
        highlights: ["Dorgival Dantas"],
        p360: "Elton Motta" },
    ]
  },
  {
    id: 3,
    title: "Semana 3 · Dia dos Namorados & Santo Antônio",
    days: [
      { date: "2026-06-09", weekday: "Ter", month: "Jun", special: null,
        artists: ["Unha Pintada", "Devinho Novaes", "Mikael Santos"],
        highlights: ["Mikael Santos"],
        p360: "Eve Sandes" },
      { date: "2026-06-10", weekday: "Qua", month: "Jun", special: null,
        artists: ["Igor Ativado", "João Gomes", "Nattan"],
        highlights: ["João Gomes", "Nattan"],
        p360: "Alisson Lima" },
      { date: "2026-06-11", weekday: "Qui", month: "Jun", special: null,
        artists: ["Nineia Oliveira", "Samyra Show", "Simone Mendes"],
        highlights: ["Samyra Show", "Simone Mendes"],
        p360: "Larissa Costa" },
      { date: "2026-06-12", weekday: "Sex", month: "Jun", special: "Dia dos Namorados",
        artists: ["Quarto de Milha", "Falamansa", "Zé Vaqueiro", "Gil Mendes"],
        highlights: ["Falamansa", "Zé Vaqueiro"],
        p360: "Netto Ventura" },
      { date: "2026-06-13", weekday: "Sáb", month: "Jun", special: "Santo Antônio",
        artists: ["Transmissão Jogo do Brasil", "Mastruz com Leite", "Raí Saia Rodada", "Nuzio Medeiros"],
        highlights: ["Raí Saia Rodada"],
        worldcupHighlights: ["Transmissão Jogo do Brasil"],
        p360: "Cartas de Tarô" },
      { date: "2026-06-14", weekday: "Dom", month: "Jun", special: null,
        artists: ["Erivaldo de Carira", "Batista Lima", "Zé Cantor"],
        highlights: [],
        p360: "Raio da Silibrina" },
    ]
  },
  {
    id: 4,
    title: "Semana 4 · Reta Final e São João",
    days: [
      { date: "2026-06-16", weekday: "Ter", month: "Jun", special: null,
        artists: ["Nadson o Ferinha", "Silvanno Salles", "Heitor Costa"],
        highlights: ["Nadson o Ferinha", "Heitor Costa"],
        p360: "Heitor Santos" },
      { date: "2026-06-17", weekday: "Qua", month: "Jun", special: null,
        artists: ["Ranniery Gomes", "Cavaleiros do Forró", "Limão com Mel"],
        highlights: ["Cavaleiros do Forró", "Limão com Mel"],
        p360: "Vannessa Porto" },
      { date: "2026-06-18", weekday: "Qui", month: "Jun", special: null,
        artists: ["Ju Marques", "Solange Almeida", "Fernandinha"],
        highlights: ["Solange Almeida"],
        p360: "Bia Brasil" },
      { date: "2026-06-19", weekday: "Sex", month: "Jun", special: null,
        artists: ["Luan Estilizado", "Transmissão Jogo do Brasil", "Luan Santana", "João Bosco e Vinícius"],
        highlights: ["Luan Santana"],
        worldcupHighlights: ["Transmissão Jogo do Brasil"],
        p360: "Ygor Raniere" },
      { date: "2026-06-20", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Maraisa Cantora", "Brasas do Forró", "Yasmin Sensação", "Filho do Piseiro"],
        highlights: ["Yasmin Sensação", "Filho do Piseiro"],
        p360: "Lucas Castro" },
      { date: "2026-06-21", weekday: "Dom", month: "Jun", special: null,
        artists: ["Marcelo Balla", "Claudio Ney e Juliana", "Gusttavo Lima"],
        highlights: ["Gusttavo Lima"],
        p360: "Franquinho Vaqueiro" },
    ]
  },
  {
    id: 5,
    title: "Semana 5 · São João & São Pedro",
    days: [
      { date: "2026-06-23", weekday: "Ter", month: "Jun", special: "Véspera de São João",
        artists: ["Luanzinho Moraes", "Fabiano Guimarães", "Rey Vaqueiro", "Painel de Controle"],
        highlights: ["Rey Vaqueiro"],
        p360: "Marcelinho" },
      { date: "2026-06-24", weekday: "Qua", month: "Jun", special: "Dia de São João",
        artists: ["Transmissão Jogo do Brasil", "Alcymar Monteiro", "Geraldo Azevedo", "Matheus e Kauan"],
        highlights: ["Matheus e Kauan"],
        worldcupHighlights: ["Transmissão Jogo do Brasil"],
        p360: "Danielzinho Jr." },
      { date: "2026-06-25", weekday: "Qui", month: "Jun", special: null,
        artists: ["Liene Show", "Taty Girl", "Lauana Prado"],
        highlights: ["Liene Show", "Taty Girl"],
        p360: "Tatah Santana" },
      { date: "2026-06-26", weekday: "Sex", month: "Jun", special: null,
        artists: ["Danielzinho o Kaceteiro", "Eline Martins", "Diego e Victor Hugo", "Vitor Fernandes"],
        highlights: [],
        p360: "Brenno Mattos" },
      { date: "2026-06-27", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Cuscuz com Leite", "Zezo", "Bruno e Marrone", "Klessinha"],
        highlights: ["Zezo", "Bruno e Marrone"],
        p360: "Gardênia Mel" },
      { date: "2026-06-28", weekday: "Dom", month: "Jun", special: null,
        artists: ["Pedro Lua", "Elba Ramalho", "Flávio José", "Mestrinho"],
        highlights: [],
        p360: "Forró Cana com Limão" },
    ]
  }
];

// ── Render ──
const today = new Date();
const todayStr = today.toISOString().slice(0, 10);

function dayNum(dateStr) { return parseInt(dateStr.split("-")[2]); }

function renderSchedule() {
  const container = document.getElementById("schedule");
  container.innerHTML = "";

  WEEKS.forEach(week => {
    const section = document.createElement("section");
    section.className = "week-section";
    section.dataset.week = week.id;

    const title = document.createElement("p");
    title.className = "week-title";
    title.innerHTML = `<span>${week.title.split("·")[0]}</span>·${week.title.split("·")[1]}`;
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
          <div class="palco360">
            <span class="palco360-label">Palco 360°</span>
            <span class="palco360-artist">${day.p360}</span>
          </div>
        </div>
      `;

      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

// ── Filter ──
document.getElementById("filterBar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const week = btn.dataset.week;
  document.querySelectorAll(".week-section").forEach(s => {
    s.style.display = (week === "all" || s.dataset.week === week) ? "" : "none";
  });
});

// ── Countdown ──
const EVENT_START = new Date("2026-05-29T18:00:00");
const pad = n => String(n).padStart(2, "0");

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_START - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      '<p style="color:var(--accent);font-weight:700;font-size:1rem;padding:0.5rem 0">O Arraiá do Povo começou! 🎉</p>';
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

renderSchedule();
updateCountdown();
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
  if (window.scrollY > 72) {
    siteHeader.classList.add("scrolled");
  } else if (window.scrollY < 10) {
    siteHeader.classList.remove("scrolled");
  }
}, { passive: true });

// ── Esconder crédito quando footer estiver visível ──
const footerEl = document.querySelector("footer");
new IntersectionObserver(entries => {
  siteHeader.classList.toggle("footer-visible", entries[0].isIntersecting);
}, { threshold: 0 }).observe(footerEl);

// Auto-scroll to today
const todayCard = document.querySelector(".day-card.today");
if (todayCard) {
  setTimeout(() => todayCard.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
}

// ── Scroll-reveal animations ──
(function initRevealObserver() {
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

  const revealed = new WeakSet();

  function revealEl(el) {
    if (revealed.has(el)) return;
    revealed.add(el);
    el.classList.remove("reveal-ready");
    el.classList.add("revealed");
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealEl(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  weekTitles.forEach(el => observer.observe(el));
  dayCards.forEach(el => observer.observe(el));

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

  const todayCardEl = document.querySelector(".day-card.today");
  if (todayCardEl) setTimeout(() => revealEl(todayCardEl), 350);
})();

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

// ── Pop-up de contato ──
const CONTACT_KEY = "sj26_contact_dismissed";
const contactPopup = document.getElementById("contact-popup");
const contactBubble = document.getElementById("contact-bubble");
const contactClose = document.getElementById("contact-popup-close");

contactBubble.textContent = "📞";

contactBubble.addEventListener("click", () => {
  trackInstagramClick();
  window.open("https://www.instagram.com/marcosjrgm/", "_blank", "noopener,noreferrer");
});

function showContactBubble() {
  contactBubble.classList.add("visible");
}

function dismissPopup() {
  contactPopup.classList.remove("visible");
  contactPopup.classList.add("collapsing");
  contactPopup.addEventListener("transitionend", () => {
    contactPopup.style.display = "none";
    showContactBubble();
  }, { once: true });
  localStorage.setItem(CONTACT_KEY, "1");
}

contactClose.addEventListener("click", dismissPopup);

if (localStorage.getItem(CONTACT_KEY)) {
  contactPopup.style.display = "none";
  showContactBubble();
} else {
  setTimeout(() => {
    contactPopup.classList.add("visible");
  }, 1000);
}
