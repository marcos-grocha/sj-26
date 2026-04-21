// ── Arraiá do Povo (Orla) ──
const ARRAIA_WEEKS = [
  {
    id: 1,
    title: "Semana 1 · Final de Maio",
    filterLabel: "Semana: 1 · Final de Maio",
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
    filterLabel: "Semana: 2 · Início de Junho",
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
    filterLabel: "Semana: 3 · Namorados & St. Antônio",
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
    filterLabel: "Semana: 4 · Reta Final",
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
    filterLabel: "Semana: 5 · São João & São Pedro",
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

// ── Forró Caju (mesma nomenclatura de semanas do Arraiá, começa na Semana 2) ──
// Cada dia tem `location` (bairro/local), que substitui o "Palco 360°" do Arraiá.
const FORRO_CAJU_WEEKS = [
  {
    id: 2,
    title: "Semana 2 · Início de Junho",
    filterLabel: "Semana: 2 · Início de Junho",
    days: [
      { date: "2026-06-04", weekday: "Qui", month: "Jun", special: null,
        artists: ["Casaca de Couro", "Trio Nordestino", "Fulô de Mandacaru", "Alceu Valença", "João da Passárada"],
        highlights: ["Alceu Valença"],
        location: "Augusto Franco" },
      { date: "2026-06-05", weekday: "Sex", month: "Jun", special: null,
        artists: ["Sergival", "Sérgio Lucas", "Flávio José", "Adelmário Coelho", "Targino Gondim"],
        highlights: ["Flávio José", "Adelmário Coelho"],
        location: "Augusto Franco" },
      { date: "2026-06-06", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Héloa", "Santanna o Cantador", "Elba Ramalho", "Geraldo Azevedo", "Pedro Lua"],
        highlights: ["Elba Ramalho", "Geraldo Azevedo"],
        location: "Augusto Franco" },
    ]
  },
  {
    id: 3,
    title: "Semana 3 · Dia dos Namorados & Santo Antônio",
    filterLabel: "Semana: 3 · Namorados & St. Antônio",
    days: [
      { date: "2026-06-12", weekday: "Sex", month: "Jun", special: "Dia dos Namorados",
        artists: ["Lara Amélia", "Anastácia", "Waldonys", "Xotebaião", "Thaís Nogueira"],
        highlights: [],
        location: "Santos Dumont" },
      { date: "2026-06-13", weekday: "Sáb", month: "Jun", special: "Santo Antônio",
        artists: ["Transmissão Jogo do Brasil", "Flávio Leandro", "Del Feliz", "Jorge de Altinho", "Luiz Fontineli", "Mimi do Acordeon"],
        highlights: [],
        worldcupHighlights: ["Transmissão Jogo do Brasil"],
        location: "Santos Dumont" },
    ]
  },
  {
    id: 4,
    title: "Semana 4 · Reta Final e São João",
    filterLabel: "Semana: 4 · Reta Final",
    days: [
      { date: "2026-06-20", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Lourinho do Acordeon", "Taty Girl", "Joelma", "Matheus Fernandes", "Tatah Santana"],
        highlights: ["Taty Girl", "Joelma"],
        location: "Praça dos Mercados" },
      { date: "2026-06-21", weekday: "Dom", month: "Jun", special: null,
        artists: ["Ygor Raniere", "Léo Foguete", "Mikael Santos", "Yasmin Sensação"],
        highlights: ["Léo Foguete", "Yasmin Sensação"],
        location: "Praça dos Mercados" },
    ]
  },
  {
    id: 5,
    title: "Semana 5 · São João & São Pedro",
    filterLabel: "Semana: 5 · São João & São Pedro",
    days: [
      { date: "2026-06-22", weekday: "Seg", month: "Jun", special: null,
        artists: ["Mariana Fagundes", "Fernandinha", "Diego e Victor Hugo", "Cidade dos Anjos"],
        highlights: [],
        location: "Praça dos Mercados" },
      { date: "2026-06-23", weekday: "Ter", month: "Jun", special: "Véspera de São João",
        artists: ["Baú das Antigas", "Duas Paixões: Silvânia e Berg", "Panda", "Simone Mendes", "Xande e Nanda"],
        highlights: ["Simone Mendes"],
        location: "Praça dos Mercados" },
      { date: "2026-06-24", weekday: "Qua", month: "Jun", special: "Dia de São João",
        artists: ["Transmissão Jogo do Brasil", "Zé Vaqueiro", "Seu Desejo", "Natanzinho Lima", "Gil Mendes"],
        highlights: ["Zé Vaqueiro", "Natanzinho Lima"],
        worldcupHighlights: ["Transmissão Jogo do Brasil"],
        location: "Praça dos Mercados" },
      { date: "2026-06-25", weekday: "Qui", month: "Jun", special: null,
        artists: ["Erivaldo de Carira", "Mestrinho", "Pablo", "Calcinha Preta"],
        highlights: ["Calcinha Preta", "Pablo"],
        location: "Praça dos Mercados" },
      { date: "2026-06-26", weekday: "Sex", month: "Jun", special: null,
        artists: ["Dedé Brasil", "Dorgival Dantas", "Murilo Huff", "Magníficos"],
        highlights: ["Dorgival Dantas"],
        location: "Praça dos Mercados" },
      { date: "2026-06-27", weekday: "Sáb", month: "Jun", special: null,
        artists: ["Luciene Melo", "Eric Land", "Wesley Safadão", "Mastruz com Leite", "Alisson Lima"],
        highlights: ["Wesley Safadão", "Eric Land"],
        location: "Praça dos Mercados" },
      { date: "2026-06-28", weekday: "Dom", month: "Jun", special: null,
        artists: ["Antônio Carlos Du Aracaju", "Limão com Mel", "Solange Almeida", "Danielzinho Junior"],
        highlights: ["Solange Almeida", "Limão com Mel"],
        location: "Praça dos Mercados" },
    ]
  },
];

// ── Ícones (SVG inline) ──
const ARRAIA_ICON = `<svg class="orla-icon" viewBox="0 0 96 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path fill="#1e3a7a" fill-rule="evenodd" d="
    M 0 48 L 0 20 Q 0 12 10 12 Q 20 12 20 20 L 20 48 Z
    M 4 48 L 4 22 Q 4 16 10 16 Q 16 16 16 22 L 16 48 Z

    M 20 48 L 20 14 Q 20 2 34 2 Q 48 2 48 14 L 48 48 Z
    M 24 48 L 24 16 Q 24 6 34 6 Q 44 6 44 16 L 44 48 Z

    M 48 48 L 48 14 Q 48 2 62 2 Q 76 2 76 14 L 76 48 Z
    M 52 48 L 52 16 Q 52 6 62 6 Q 72 6 72 16 L 72 48 Z

    M 76 48 L 76 20 Q 76 12 86 12 Q 96 12 96 20 L 96 48 Z
    M 80 48 L 80 22 Q 80 16 86 16 Q 92 16 92 22 L 92 48 Z
  "/>
</svg>`;

const CAJU_ICON = `<svg class="caju-icon" viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="cajuFruit" cx="38%" cy="28%" r="72%">
      <stop offset="0%"  stop-color="#fff2a8"/>
      <stop offset="35%" stop-color="#ffc634"/>
      <stop offset="75%" stop-color="#f26a16"/>
      <stop offset="100%" stop-color="#a82208"/>
    </radialGradient>
    <radialGradient id="cajuNut" cx="35%" cy="30%" r="70%">
      <stop offset="0%"  stop-color="#d4b07a"/>
      <stop offset="55%" stop-color="#8f6230"/>
      <stop offset="100%" stop-color="#3f2a12"/>
    </radialGradient>
    <linearGradient id="cajuLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#4caf50"/>
      <stop offset="100%" stop-color="#1b5e20"/>
    </linearGradient>
  </defs>

  <!-- folha e pedúnculo -->
  <path d="M30 3 Q42 -2 46 7 Q38 14 30 9 Z" fill="url(#cajuLeaf)"/>
  <path d="M30 3 L30 13" stroke="#1b5e20" stroke-width="2" stroke-linecap="round" fill="none"/>

  <!-- fruta (pseudofruto): pêra invertida, ombros largos, afina no fundo -->
  <path d="M30 12
           C 14 12, 6 24, 8 38
           C 9 48, 16 54, 24 55
           C 28 55, 30 52, 32 52
           C 34 52, 36 55, 40 55
           C 48 54, 55 48, 56 38
           C 58 24, 46 12, 30 12 Z"
        fill="url(#cajuFruit)"/>
  <!-- brilho na fruta -->
  <ellipse cx="22" cy="24" rx="6" ry="9" fill="#ffffff" opacity="0.38"/>
  <ellipse cx="24" cy="22" rx="2.5" ry="4" fill="#ffffff" opacity="0.7"/>

  <!-- castanha: formato de rim/vírgula saindo da base da fruta, curvando pra direita -->
  <path d="M28 52
           C 22 54, 18 60, 24 66
           C 32 72, 48 68, 50 58
           C 51 52, 46 49, 41 52
           C 37 54, 33 51, 28 52 Z"
        fill="url(#cajuNut)"/>
  <!-- brilho na castanha -->
  <ellipse cx="30" cy="58" rx="3" ry="1.6" fill="#ffe7b5" opacity="0.55" transform="rotate(-18 30 58)"/>
</svg>`;

// ── Festivais ──
const FESTIVALS = {
  "arraia-do-povo": {
    id: "arraia-do-povo",
    name: "Arraiá do Povo",
    subtitle: "Aracaju · Programação Oficial",
    startDate: "2026-05-29T18:00:00",
    icon: ARRAIA_ICON,
    theme: "theme-arraia",
    weeks: ARRAIA_WEEKS,
  },
  "forro-caju": {
    id: "forro-caju",
    name: "Forró Caju",
    subtitle: "Aracaju · Programação Oficial",
    startDate: "2026-06-04T18:00:00",
    icon: CAJU_ICON,
    theme: "theme-forro-caju",
    weeks: FORRO_CAJU_WEEKS,
  },
};
