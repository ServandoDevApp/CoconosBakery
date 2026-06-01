/* ============================================================
   Coconos Bakery — datos + i18n
   ============================================================ */

// ---- Productos (nombres se mantienen; categorías/etiquetas traducibles) ----
window.MENU = [
  {
    id: "galletas",
    es: { name: "Galletas", note: "Horneadas del día · 100% artesanal" },
    en: { name: "Cookies", note: "Baked fresh daily · 100% artisan" },
    items: [
      { id: "g-chispas",  name: "Chispas de chocolate", en: "Chocolate Chip", star: true, img: "galleta_chispas.jpg" },
      { id: "g-kinder",   name: "Kinder Bueno",          en: "Kinder Bueno", star: true, img: "galleta_kinder.jpg" },
      { id: "g-ferrero",  name: "Ferrero",               en: "Ferrero", img: "galleta_ferrero.jpg" },
      { id: "g-redvelvet",name: "Red Velvet",            en: "Red Velvet", img: "galleta_redvelvet.jpg" },
      { id: "g-pistache", name: "Pistache",              en: "Pistachio", img: "galleta_pistache.jpg" },
      { id: "g-gloria",   name: "Gloria",                en: "Gloria", img: "galleta_gloria.png" },
      { id: "g-oreo",     name: "Oreo",                  en: "Oreo", img: "galleta_oreo.jpg" },
    ],
  },
  {
    id: "roles",
    es: { name: "Roles", note: "Masa suave fermentada con rellenos de autor" },
    en: { name: "Rolls", note: "Soft fermented dough with artisan fillings" },
    items: [
      { id: "r-sticky",    name: "Rol Sticky",       en: "Sticky Roll", star: true, img: "rol_lotus.jpg" },
      { id: "r-blueberry", name: "Rol de Blueberry", en: "Blueberry Roll", img: "rol_blueberry.png" },
      { id: "r-canela",    name: "Rol de Canela",    en: "Cinnamon Roll", star: true, img: "rol_canela.png" },
      { id: "r-kinder",    name: "Rol de Kinder Bueno", en: "Kinder Bueno Roll", img: "rol_kinder.png" },
      { id: "r-pistache",  name: "Rol de Pistache",  en: "Pistachio Roll", img: "rol_pistache.png" },
      { id: "r-galleta",   name: "Rol de Galleta",   en: "Cookie Roll", img: "rol_galleta.png" },
    ],
  },
  {
    id: "laminado",
    es: { name: "Pan laminado", note: "Hojaldre lento de 24 horas · capa a capa" },
    en: { name: "Laminated pastry", note: "Slow 24-hour lamination · layer by layer" },
    items: [
      { id: "l-platano",   name: "Laminado de plátano",              en: "Banana Laminated", star: true, img: "laminado_platano.jpg" },
      { id: "l-pistache",  name: "Laminado de pistache con frambuesa", en: "Pistachio & Raspberry Laminated", star: true, img: "laminado_pistache.jpg" },
      { id: "l-guayaba",   name: "Laminado de guayaba",              en: "Guava Laminated", img: "laminado_guayaba.jpg" },
      { id: "l-flan",      name: "Laminado con flan",                en: "Flan Laminated", img: "laminado_flan.jpg" },
      { id: "l-rol",       name: "Rol laminado",                    en: "Laminated Roll", star: true, img: "rol_laminado.jpg" },
    ],
  },
  {
    id: "panaderia",
    es: { name: "Panadería", note: "Pan artesanal horneado del día" },
    en: { name: "Bakery bread", note: "Artisan bread baked fresh daily" },
    items: [
      { id: "pan-concha",  name: "Concha de Vainilla", en: "Vanilla Concha", star: true, img: "concha_vainilla.png" },
    ],
  },
  {
    id: "postres",
    es: { name: "Postres fríos & dulces", note: "De la vitrina, listos para llevar" },
    en: { name: "Cold Desserts & Sweets", note: "From the case, ready to go" },
    items: [
      { id: "p-tiramisu",   name: "Tiramisú",          en: "Tiramisu", star: true, img: "tiramisu.png" },
      { id: "p-dubai",      name: "Brownie Dubái",     en: "Dubai Brownie", star: true, img: "brownie_dubai.jpg" },
      { id: "p-vasco",      name: "Cheesecake Vasco",  en: "Basque Cheesecake", img: "cheesecake_vazco.jpg" },
    ],
  },
];

// ---- Textos de la interfaz ----
window.I18N = {
  es: {
    promo: { tag: "De temporada", text: "Pan de elote & roles de calabaza en especias", cta: "Ver el menú" },
    nav: { menu: "Menú", about: "Nosotros", gallery: "Galería", locations: "Ubicaciones", wholesale: "Mayoreo", contact: "Contacto", order: "Hacer pedido" },
    hero: {
      eyebrow: "Recién horneado",
      title1: "Alta repostería,",
      title2: "hecha a mano",
      lead: "Galletas, pan laminado, roles y postres fríos horneados cada mañana con amor, ingredientes de verdad y mucha paciencia. Coconos es tu panadería de barrio, elevada.",
      ctaPrimary: "Ver el menú",
      ctaGhost: "Vender Coconos",
      stats: [
        { n: "17+", l: "recetas de la casa" },
        { n: "24h", l: "de laminado lento" },
        { n: "100%", l: "hecho a mano" },
      ],
      badgeTitle: "Del horno",
      badgeSub: "a tu mesa, hoy",
    },
    strip: ["Galletas", "Roles", "Pan laminado", "Postres fríos", "Hecho a mano", "Recién horneado"],
    menu: {
      eyebrow: "Nuestro menú",
      title: "Lo que sale del horno",
      sub: "Una vitrina que cambia con la temporada. Estos son los clásicos que siempre encontrarás.",
      all: "Todo",
      count: (n) => `${n} variedades`,
      fav: "favorito",
    },
    about: {
      eyebrow: "Nuestra historia",
      title: "Empezó con un horno y un antojo",
      p1: "Coconos nació en una cocina pequeña, con la idea simple de hornear el tipo de pan que nos gustaría comer todos los días: rico, dorado y honesto.",
      p2: "Hoy seguimos amasando a mano, fermentando lento y horneando en tandas chicas. Sin atajos, sin conservadores — solo ingredientes buenos y mucho cariño.",
      sign: "— El equipo Coconos",
      values: [
        { t: "Masa madre", d: "Fermentos lentos para más sabor y mejor digestión." },
        { t: "Tandas chicas", d: "Horneamos varias veces al día para que llegue fresco." },
        { t: "Sin atajos", d: "Mantequilla real, vainilla de verdad, cero polvos raros." },
      ],
    },
    gallery: { eyebrow: "Galería", title: "Un vistazo a la vitrina", sub: "Arrastra aquí tus mejores fotos del mostrador, el horno y los productos." },
    locations: {
      eyebrow: "Dónde estamos",
      title: "Visita nuestras sucursales",
      sub: "Dos panaderías, el mismo pan recién horneado. Te esperamos.",
      hoursLabel: "Horario",
      hours: "Mar–Dom · 8:00 – 20:00",
      directions: "Cómo llegar",
      photoPh: "Foto de la fachada",
    },
    wholesale: {
      eyebrow: "Para tu negocio",
      kicker: "Mayoreo · Restaurantes & Cafeterías",
      title: "Vende Coconos en tu cafetería",
      lead: "¿Tienes un restaurante o cafetería? Surtimos pan, galletas y postres frescos para que los vendas con tu marca. Cuéntanos qué necesitas y te contactamos.",
      points: [
        "Pedidos recurrentes con entrega programada",
        "Precios especiales por volumen",
        "Producto fresco, empaque listo para vitrina",
      ],
      formTitle: "Solicita mayoreo",
      formSub: "Déjanos tus datos y te escribimos en menos de 24 horas.",
      fName: "Nombre",
      fNamePh: "Tu nombre o el de tu negocio",
      fPhone: "Teléfono",
      fPhonePh: "Ej. 55 1234 5678",
      fSubject: "Asunto",
      fSubjectPh: "¿Qué te interesa surtir?",
      submit: "Enviar solicitud",
      note: "Al enviar abrirás nuestro formulario seguro de Google con tus datos listos.",
    },
    footer: {
      blurb: "Panadería de alta repostería. Galletas, pan laminado, roles y postres fríos, hechos a mano cada día.",
      explore: "Explorar",
      visit: "Visítanos",
      hoursLabel: "Horario",
      hours: "Mar–Dom · 8:00 – 20:00",
      addr: "Tu dirección aquí, Ciudad",
      follow: "Síguenos",
      orderTitle: "Antojo ahora",
      orderText: "Escríbenos por redes para pedidos del día.",
      rights: "Todos los derechos reservados.",
      made: "Hecho con amor · 100% mexicano",
    },
  },
  en: {
    promo: { tag: "In season", text: "Sweet corn bread & spiced pumpkin rolls", cta: "See the menu" },
    nav: { menu: "Menu", about: "About", gallery: "Gallery", locations: "Locations", wholesale: "Wholesale", contact: "Contact", order: "Order now" },
    hero: {
      eyebrow: "Freshly baked",
      title1: "Fine pastry,",
      title2: "made by hand",
      lead: "Cookies, laminated pastry, rolls and cold desserts baked every morning with love, real ingredients and a lot of patience. Coconos is your neighborhood bakery, elevated.",
      ctaPrimary: "See the menu",
      ctaGhost: "Sell Coconos",
      stats: [
        { n: "17+", l: "house recipes" },
        { n: "24h", l: "slow lamination" },
        { n: "100%", l: "handmade" },
      ],
      badgeTitle: "From the oven",
      badgeSub: "to your table, today",
    },
    strip: ["Cookies", "Rolls", "Laminated pastry", "Cold desserts", "Handmade", "Freshly baked"],
    menu: {
      eyebrow: "Our menu",
      title: "Straight from the oven",
      sub: "A case that changes with the season. These are the classics you'll always find.",
      all: "All",
      count: (n) => `${n} varieties`,
      fav: "favorite",
    },
    about: {
      eyebrow: "Our story",
      title: "It started with an oven and a craving",
      p1: "Coconos began in a small kitchen with a simple idea: to bake the kind of bread we'd want to eat every day — rich, golden and honest.",
      p2: "We still knead by hand, ferment slowly and bake in small batches. No shortcuts, no preservatives — just good ingredients and a lot of care.",
      sign: "— The Coconos team",
      values: [
        { t: "Sourdough", d: "Slow ferments for more flavor and easier digestion." },
        { t: "Small batches", d: "We bake several times a day so it arrives fresh." },
        { t: "No shortcuts", d: "Real butter, real vanilla, zero strange powders." },
      ],
    },
    gallery: { eyebrow: "Gallery", title: "A peek at the case", sub: "Drop in your best shots of the counter, the oven and the goods." },
    locations: {
      eyebrow: "Where to find us",
      title: "Visit our bakeries",
      sub: "Two locations, the same fresh-baked bread. Come say hi.",
      hoursLabel: "Hours",
      hours: "Tue–Sun · 8:00 – 20:00",
      directions: "Get directions",
      photoPh: "Storefront photo",
    },
    wholesale: {
      eyebrow: "For your business",
      kicker: "Wholesale · Restaurants & Cafés",
      title: "Sell Coconos at your café",
      lead: "Run a restaurant or café? We supply fresh bread, cookies and desserts for you to sell under your own brand. Tell us what you need and we'll reach out.",
      points: [
        "Recurring orders with scheduled delivery",
        "Special volume pricing",
        "Fresh product, case-ready packaging",
      ],
      formTitle: "Request wholesale",
      formSub: "Leave your details and we'll write back within 24 hours.",
      fName: "Name",
      fNamePh: "Your name or your business",
      fPhone: "Phone",
      fPhonePh: "e.g. 55 1234 5678",
      fSubject: "Subject",
      fSubjectPh: "What would you like to stock?",
      submit: "Send request",
      note: "Submitting opens our secure Google form with your details prefilled.",
    },
    footer: {
      blurb: "A fine-pastry bakery. Cookies, laminated pastry, rolls and cold desserts, handmade every day.",
      explore: "Explore",
      visit: "Visit us",
      hoursLabel: "Hours",
      hours: "Tue–Sun · 8:00 – 20:00",
      addr: "Your address here, City",
      follow: "Follow",
      orderTitle: "Craving now?",
      orderText: "Message us on social for same-day orders.",
      rights: "All rights reserved.",
      made: "Made with love · 100% Mexican",
    },
  },
};

window.SOCIALS = {
  instagram: "https://www.instagram.com/coconosbakery/?hl=es",
  tiktok: "https://www.tiktok.com/@coconosbakery",
  facebook: "https://www.facebook.com/coconosbakery/?locale=es_LA",
};

window.GOOGLE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSc2kYIWd9Wp9rMYk-pato8DYF1L1fC0EYdxwD5koKk4N1KtfA/viewform?usp=publish-editor";

window.LOCATIONS = [
  {
    id: "san-nicolas",
    name: "Sucursal San Nicolás",
    area: { es: "San Nicolás de los Garza, N.L.", en: "San Nicolás de los Garza, N.L." },
    map: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiAs5nLzOSUAxUAAAAAHQAAAAAQDA..i&pvq=Cg0vZy8xMXludzduY3B3IhQKDmNvY29ub3MgYmFrZXJ5EAIYAw&lqi=Cg5jb2Nvbm9zIGJha2VyeUi73eiz072AgAhaIBAAEAEYABgBIg5jb2Nvbm9zIGJha2VyeSoGCAIQABABkgEGYmFrZXJ5&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&ftid=0x8662ebbc4b6111f9:0xd34a7b45ea083c09",
  },
  {
    id: "revolucion",
    name: "Sucursal Revolución",
    area: { es: "Av. Revolución, Monterrey, N.L.", en: "Av. Revolución, Monterrey, N.L." },
    map: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiAs5nLzOSUAxUAAAAAHQAAAAAQFg..i&pvq=Cg0vZy8xMWx2N3l4bl94IhQKDmNvY29ub3MgYmFrZXJ5EAIYAw&lqi=Cg5jb2Nvbm9zIGJha2VyeUj8p_n-6LKAgAhaIBAAEAEYABgBIg5jb2Nvbm9zIGJha2VyeSoGCAIQABABkgEGYmFrZXJ5&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&ftid=0x8662bf003ca1fdad:0x2f2cbc9e502a2134",
  },
];
