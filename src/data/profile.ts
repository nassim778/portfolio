export const profile = {
  name: "Nacim Rached",
  title: "Full-stack & mobile developer",
  tagline:
    "Building web and mobile products — from React Native apps to TypeScript frontends and solid backends.",
  degree: "Master’s in Mobile Development Engineering",
  whatsapp: "+21629676787",
  whatsappDisplay: "+216 29 676 787",
  whatsappUrl: "https://wa.me/21629676787",
  location: "Tunisia · Remote",
  stack: [
    "TypeScript",
    "React",
    "React Native",
    "Expo",
    "Android",
    "iOS",
    "Next.js",
    "Node.js",
    "PHP",
    "Laravel",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Stripe",
    "PayPal",
    "MapLibre",
    "C",
  ],
};

export type Project = {
  id: string;
  name: string;
  blurb: string;
  stack: string[];
  live?: string;
  download?: string;
  tryCommand?: string;
  kind: string;
};

export const projects: Project[] = [
  {
    id: "kariaa",
    name: "Kariaa",
    blurb:
      "Map-first rental platform for Tunisia — PostGIS search, price pins on MapLibre, POI radius filters, Next.js monorepo with a mobile app.",
    stack: ["Next.js", "TypeScript", "Supabase", "MapLibre"],
    live: "https://kariaa.onrender.com/",
    kind: "Product",
  },
  {
    id: "piggypower",
    name: "PiggyPower",
    blurb:
      "CHP thermoelectric e-commerce — Next.js storefront with Stripe Payment Element, PayPal checkout, and server-side price validation.",
    stack: ["Next.js", "TypeScript", "Stripe", "PayPal"],
    live: "https://piggypower.vercel.app",
    kind: "E-commerce",
  },
  {
    id: "usemypc",
    name: "UseMyPc",
    blurb:
      "Control your desktop from a phone — remote desktop experience with a TypeScript web layer and native C companion.",
    stack: ["TypeScript", "Web", "C"],
    live: "https://usemyypc.vercel.app",
    kind: "Product",
  },
  {
    id: "abdelmoula-rh",
    name: "Abdelmoula RH",
    blurb:
      "HR management for Abdelmoula Agency — workers, payroll, CNSS, leaves, calendar, and notifications in PHP.",
    stack: ["PHP", "MySQL", "JavaScript"],
    kind: "Client",
  },
  {
    id: "abdelmoula-vehicules",
    name: "Abdelmoula Véhicules",
    blurb:
      "Fleet and vehicle ops dashboard — leasing, mileage, expenses, stock pieces, travel tours, and notifications in PHP.",
    stack: ["PHP", "MySQL", "JavaScript"],
    kind: "Client",
  },
  {
    id: "abdelmoula-camp",
    name: "Abdelmoula Camp",
    blurb:
      "Full desert-camp ops system for a travel agency — multi-role auth, complex reservations (tents, 4x4s, drivers, guides), tariff engine with kids & New Year pricing, boarding, services, payments, schedules, receipts, EN/FR, and PWA install on LAN.",
    stack: ["PHP", "MySQL", "JavaScript", "PWA"],
    kind: "Client",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    blurb:
      "Freelance storefront with a full shopping flow, built end-to-end in TypeScript and shipped on Vercel.",
    stack: ["TypeScript", "React"],
    live: "https://e-commerce-nacims.vercel.app",
    kind: "Freelance",
  },
  {
    id: "gestion-evenement",
    name: "Gestion Événement",
    blurb:
      "Event management platform on Laravel — auth, sessions, Blade UI, and real event workflows.",
    stack: ["Laravel", "Blade", "PHP"],
    kind: "Web app",
  },
  {
    id: "al-assala",
    name: "AL-ASSALA",
    blurb:
      "Graduation e-commerce build — catalog, cart, and commerce flows for a complete PFE deliverable.",
    stack: ["Full-stack", "E-commerce"],
    kind: "PFE",
  },
  {
    id: "talaawin",
    name: "TALAAWIN",
    blurb:
      "GeoGuess Tunisian edition — guess locations across Tunisia. Download the Android APK and play.",
    stack: ["React Native", "Expo", "iOS", "Android", "Maps"],
    download:
      "https://github.com/nassim778/TALAAWIN/releases/download/v1.0.0/TALAAWIN-1.0.0.apk",
    kind: "Game",
  },
  {
    id: "nassinet",
    name: "nassinet",
    blurb:
      "CLI speed tester — latency, download, upload, then a 0–100 connection score. Try it without installing:",
    stack: ["Node.js", "CLI"],
    tryCommand: "npx nassinet",
    kind: "Tool",
  },
];
