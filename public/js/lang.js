// ================= LANGUAGE DATA =================
const translations = {
  en: {
    pageTitle: "TechFix Pro – Mobile Repair & Accessories",

    /* NAV */
    navHome: "Home",
    navShop: "Shop",
    navServices: "Services",
    navCart: "Cart",

    /* HEADER */
    search: "Search…",

    /* HERO SLIDES */
    hero1Title: "Fast & Reliable Mobile Repair",
    hero1Sub: "Phones • Tablets • Smartwatches • Accessories",
    hero1Btn1: "Services",
    hero1Btn2: "Shop",

    hero2Title: "Original Parts & Expert Technicians",
    hero2Sub: "Quality repairs • Fast turnaround • Trusted service",
    hero2Btn1: "Get Repair",
    hero2Btn2: "Browse Parts",

    /* SERVICES */
    servicesTitle: "Services",
    srvPhone: "📱 Phone Repair",
    srvPhoneDesc: "Screen, battery & motherboard repair",
    srvTablet: "📲 Tablet Repair",
    srvTabletDesc: "All brands & models supported",
    srvWatch: "⌚ Smartwatch Repair",
    srvWatchDesc: "Display & battery replacement",
    srvWater: "💧 Water Damage",
    srvWaterDesc: "Advanced ultrasonic cleaning",

    /* CATEGORY */
    catTitle: "Shop by Category",

    catSmartphones: "Smartphones",
    catSpeakers: "Speakers",
    catTools: "Tools",
    catEarbuds: "Earbuds",
    catLCD: "Touch + LCD",
    catCases: "Cases",
    catGlasses: "Glasses",
    catToys: "Toys",

    /* HIGH DEMAND */
    hdTitle: "🔥 Customer Favorites",
    hdSub: "Most requested parts & accessories by technicians",
    addToCart: "ADD TO CART",
    outOfStock: "OUT OF STOCK",

    /* WHY */
    whyTitle: "Why Choose TechFix Pro?",
    why1: "✔ Certified Technicians",
    why2: "✔ Fast Same-Day Repair",
    why3: "✔ Original Quality Parts",
    why4: "✔ Warranty Included",

    /* NEWSLETTER */
    newsTitle: "Stay Updated",
    newsDesc: "Get offers & repair tips",
    email: "Your email",
    subscribe: "Subscribe",

    /* FOOTER */
    footerDesc: "Professional mobile repair & accessories store in Portugal.",
    footerServices: "Services",
    footerShop: "Shop",
    footerSupport: "Support",
    footerRights: "© 2026 TechFix Pro. All rights reserved."
  },

  pt: {
    pageTitle: "TechFix Pro – Reparação e Acessórios",

    /* NAV */
    navHome: "Início",
    navShop: "Loja",
    navServices: "Serviços",
    navCart: "Carrinho",

    /* HEADER */
    search: "Pesquisar…",

    /* HERO SLIDES */
    hero1Title: "Reparação de Telemóveis Rápida e Fiável",
    hero1Sub: "Telemóveis • Tablets • Smartwatches • Acessórios",
    hero1Btn1: "Serviços",
    hero1Btn2: "Loja",

    hero2Title: "Peças Originais e Técnicos Especializados",
    hero2Sub: "Reparações de qualidade • Serviço rápido • Confiança",
    hero2Btn1: "Reparar",
    hero2Btn2: "Ver Peças",

    /* SERVICES */
    servicesTitle: "Serviços",
    srvPhone: "📱 Reparação de Telemóveis",
    srvPhoneDesc: "Ecrã, bateria e placa-mãe",
    srvTablet: "📲 Reparação de Tablets",
    srvTabletDesc: "Todas as marcas e modelos",
    srvWatch: "⌚ Reparação de Smartwatches",
    srvWatchDesc: "Substituição de ecrã e bateria",
    srvWater: "💧 Danos por Água",
    srvWaterDesc: "Limpeza ultrassónica avançada",

    /* CATEGORY */
    catTitle: "Comprar por Categoria",

    catSmartphones: "Telemóveis",
    catSpeakers: "Colunas",
    catTools: "Ferramentas",
    catEarbuds: "Auriculares",
    catLCD: "Touch + LCD",
    catCases: "Capas",
    catGlasses: "Vidros",
    catToys: "Brinquedos",

    /* HIGH DEMAND */
    hdTitle: "🔥 Favoritos dos Clientes",
    hdSub: "Peças e acessórios mais procurados",
    addToCart: "ADICIONAR AO CARRINHO",
    outOfStock: "ESGOTADO",

    /* WHY */
    whyTitle: "Porquê Escolher a TechFix Pro?",
    why1: "✔ Técnicos Certificados",
    why2: "✔ Reparação Rápida no Mesmo Dia",
    why3: "✔ Peças de Qualidade Original",
    why4: "✔ Garantia Incluída",

    /* NEWSLETTER */
    newsTitle: "Fique Atualizado",
    newsDesc: "Receba ofertas e dicas de reparação",
    email: "O seu email",
    subscribe: "Subscrever",

    /* FOOTER */
    footerDesc: "Loja profissional de reparação móvel e acessórios em Portugal.",
    footerServices: "Serviços",
    footerShop: "Loja",
    footerSupport: "Suporte",
    footerRights: "© 2026 TechFix Pro. Todos os direitos reservados."
  }
};

// ================= APPLY LANGUAGE =================
function applyLanguage(lang) {
  const data = translations[lang];
  if (!data) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (data[key]) el.textContent = data[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (data[key]) el.placeholder = data[key];
  });

  document.title = data.pageTitle;
  localStorage.setItem("lang", lang);
}

// ================= INIT =================
const langSelect = document.getElementById("lang");
const savedLang = localStorage.getItem("lang") || "en";

applyLanguage(savedLang);

if (langSelect) {
  langSelect.value = savedLang;
  langSelect.addEventListener("change", e => {
    applyLanguage(e.target.value);
  });
}
