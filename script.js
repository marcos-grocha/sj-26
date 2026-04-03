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
        highlights: ["Gustavo Mioto"],
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
        highlights: ["Zé Vaqueiro"],
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
        highlights: ["Heitor Costa"],
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
        highlights: ["Geraldo Azevedo", "Matheus e Kauan"],
        worldcupHighlights: ["Transmissão Jogo do Brasil"],
        p360: "Danielzinho Jr." },
      { date: "2026-06-25", weekday: "Qui", month: "Jun", special: null,
        artists: ["Liene Show", "Taty Girl", "Lauana Prado"],
        highlights: ["Lauana Prado"],
        p360: "Tatah Santana" },
      { date: "2026-06-26", weekday: "Sex", month: "Jun", special: null,
        artists: ["Danielzinho o Kaceteiro", "Eline Martins", "Diego e Victor Hugo", "Vitor Fernandes"],
        highlights: ["Vitor Fernandes"],
        p360: "Brenno Mattos" },
      { date: "2026-06-27", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Cuscuz com Leite", "Zezo", "Bruno e Marrone", "Klessinha"],
        highlights: ["Bruno e Marrone"],
        p360: "Gardênia Mel" },
      { date: "2026-06-28", weekday: "Dom", month: "Jun", special: null,
        artists: ["Pedro Lua", "Elba Ramalho", "Flávio José", "Mestrinho"],
        highlights: ["Elba Ramalho", "Flávio José"],
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
  siteHeader.classList.toggle("scrolled", window.scrollY > 72);
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
