// ================= LANGUAGE DATA =================
const translations = {
  en: {
    pageTitle: "TechFix Pro – Mobile Repair & Accessories",

    navHome: "Home",
    navShop: "Shop",
    navServices: "Services",
    navCart: "Cart",

    search: "Search…",

    hero: "Fast & Reliable Mobile Repair",
    heroTitle: "Fast & Reliable Mobile Repair",
    heroSubtitle: "Phones • Tablets • Smartwatches • Accessories",

    services: "Services",
    servicesTitle: "Repair Services",

    srvPhone: "📱 Phone Repair",
    srvPhoneDesc: "Screen, battery & motherboard repair",

    srvTablet: "📲 Tablet Repair",
    srvTabletDesc: "All brands & models supported",

    srvWatch: "⌚ Smartwatch Repair",
    srvWatchDesc: "Display & battery replacement",

    srvWater: "💧 Water Damage",
    srvWaterDesc: "Advanced ultrasonic cleaning",

    catTitle: "Shop by Category",

    featuredTitle: "Featured Products",

    whyTitle: "Why Choose TechFix Pro?",
    why1: "✔ Certified Technicians",
    why2: "✔ Same-Day Repair",
    why3: "✔ Original Quality Parts",
    why4: "✔ Warranty Included",

    addToCart: "Add to Cart",

    newsTitle: "Stay Updated",
    newsDesc: "Get offers & repair tips",
    email: "Your email",
    subscribe: "Subscribe",

    footerDesc: "Professional mobile repair & accessories store in Portugal."
  },

  pt: {
    pageTitle: "TechFix Pro – Reparação e Acessórios",

    navHome: "Início",
    navShop: "Loja",
    navServices: "Serviços",
    navCart: "Carrinho",

    search: "Pesquisar…",

    hero: "Reparação de Telemóveis Rápida e Fiável",
    heroTitle: "Reparação de Telemóveis Rápida e Fiável",
    heroSubtitle: "Telemóveis • Tablets • Smartwatches • Acessórios",

    services: "Serviços",
    servicesTitle: "Serviços de Reparação",

    srvPhone: "📱 Reparação de Telemóveis",
    srvPhoneDesc: "Ecrã, bateria e placa-mãe",

    srvTablet: "📲 Reparação de Tablets",
    srvTabletDesc: "Todas as marcas e modelos",

    srvWatch: "⌚ Reparação de Smartwatches",
    srvWatchDesc: "Substituição de ecrã e bateria",

    srvWater: "💧 Danos por Água",
    srvWaterDesc: "Limpeza ultrassónica avançada",

    catTitle: "Comprar por Categoria",

    featuredTitle: "Produtos em Destaque",

    whyTitle: "Porquê Escolher a TechFix Pro?",
    why1: "✔ Técnicos Certificados",
    why2: "✔ Reparação no Mesmo Dia",
    why3: "✔ Peças Originais",
    why4: "✔ Garantia Incluída",

    addToCart: "Adicionar ao Carrinho",

    newsTitle: "Fique Atualizado",
    newsDesc: "Receba ofertas e dicas de reparação",
    email: "O seu email",
    subscribe: "Subscrever",

    footerDesc: "Loja profissional de reparação móvel e acessórios em Portugal."
  }
};

// ================= APPLY LANGUAGE =================
function applyLanguage(lang) {
  const data = translations[lang];
  if (!data) return;

  // normal text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (data[key]) el.textContent = data[key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (data[key]) el.placeholder = data[key];
  });

  // page title
  if (data.pageTitle) {
    document.title = data.pageTitle;
  }

  localStorage.setItem("lang", lang);
}

// ================= INIT =================
const langSelect = document.getElementById("lang");
const savedLang = localStorage.getItem("lang") || "en";

applyLanguage(savedLang);
if (langSelect) langSelect.value = savedLang;

if (langSelect) {
  langSelect.addEventListener("change", e => {
    applyLanguage(e.target.value);
  });
}
