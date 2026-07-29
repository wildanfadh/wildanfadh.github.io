export const profile = {
  name: "Wildan Fadhlulloh",
  title: "Full Stack Engineer",
  tagline: "React, React Native & TypeScript Specialist",
  description: "Building robust information systems with a balance of maintainable architecture, practical UI, and delivery speed. My work spans full-stack web platforms, mobile apps, desktop applications, and AI agent tooling.",
  email: "fadhdeveloper@gmail.com",
  phone: "+62 851-1712-6189",
  location: "Mojokerto, Jawa Timur, Indonesia",
  website: "wildanfadh.github.io",
  specialization: "TypeScript, React, React Native, Node.js, Rust, Go",
  social: {
    github: "https://github.com/wildanfadh",
    linkedin: "https://linkedin.com/in/wildan-fadhlulloh",
    twitter: "https://twitter.com/wildanfadh",
  },
};

export const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "18+", label: "Applications Shipped" },
  { value: "6+", label: "Languages" },
  { value: "29", label: "GitHub Repos" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React 19", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS v4", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Redux / Saga", level: 85 },
      { name: "Zustand", level: 80 },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", level: 85 },
      { name: "NativeBase", level: 80 },
      { name: "React Navigation", level: 85 },
      { name: "Firebase FCM", level: 70 },
    ],
  },
  {
    category: "Desktop / Systems",
    items: [
      { name: "Tauri 2", level: 80 },
      { name: "Rust", level: 70 },
      { name: "Linux / systemd", level: 75 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", level: 85 },
      { name: "Laravel / PHP", level: 85 },
      { name: "Go / Echo", level: 65 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    category: "AI / Agent",
    items: [
      { name: "LLM Integration", level: 75 },
      { name: "Vercel AI SDK", level: 70 },
      { name: "Agent Tooling", level: 80 },
      { name: "Bun", level: 70 },
    ],
  },
];

export const experience = [
  {
    type: "work",
    title: "FullStack Developer",
    organization: "CV. Prima Group",
    location: "Mojokerto, Jawa Timur",
    period: "2020 — Current",
    description: "Delivering enterprise information systems for government institutions. Building web platforms, mobile apps, and operational dashboards using React, React Native, Laravel, and CodeIgniter.",
  },
  {
    type: "work",
    title: "IT Support Technician",
    organization: "BLKK Wahid Hasyim",
    location: "Depok, Jawa Barat",
    period: "2019 — 2020",
    description: "Provided technical support, network maintenance, and system administration for training operations.",
  },
  {
    type: "education",
    title: "Bachelor's Degree — Informatics",
    organization: "Hasyim Asy'ari University",
    location: "Jombang, Jawa Timur",
    period: "2020 — 2024",
  },
  {
    type: "education",
    title: "Diploma Course — Software Engineering",
    organization: "Magistra Utama Surabaya",
    location: "Surabaya, Jawa Timur",
    period: "2018 — 2019",
  },
  {
    type: "education",
    title: "Senior High School — Software Engineering",
    organization: "SMK Roudlotun Nasyiin",
    location: "Mojokerto, Jawa Timur",
    period: "2015 — 2018",
  },
];

export const projects = [
  {
    title: "lampd",
    description: "Linux desktop app for managing development services (Apache, Nginx, MySQL, PostgreSQL, Docker) via GUI dashboard. Built with Tauri 2 + React 19 + Rust.",
    tech: ["Tauri 2", "React 19", "Rust", "Tailwind v4", "Zustand"],
    repo: "https://github.com/wildanfadh/lampd",
    highlight: true,
  },
  {
    title: "mysql-control",
    description: "Minimalist Tauri desktop app for controlling MySQL systemd service on Linux. Start/stop/restart/enable/disable with status display.",
    tech: ["Tauri 2", "React 18", "Rust", "TypeScript"],
    repo: "https://github.com/wildanfadh/mysql-control",
    highlight: true,
  },
  {
    title: "EasyShop",
    description: "E-commerce frontend application with auth, product carousel, responsive design. Built with React, Redux, Tailwind CSS, and DaisyUI.",
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS", "DaisyUI"],
    repo: "https://github.com/wildanfadh/EasyShop",
    highlight: true,
  },
  {
    title: "anggor",
    description: "CLI-based AI coding agent — fast, local-first, provider-agnostic. Context-aware project scanner, autonomous file manipulation, LLM-powered ReAct loop.",
    tech: ["TypeScript", "Vercel AI SDK", "Bun", "OpenAI", "Anthropic"],
    repo: "https://github.com/wildanfadh/anggor",
    highlight: true,
  },
  {
    title: "SimpleNewsApp",
    description: "Mobile news application with category browsing, article detail, search, bookmarks, and bottom tab navigation.",
    tech: ["React Native", "TypeScript", "NativeBase", "React Navigation"],
    repo: "https://github.com/wildanfadh/SimpleNewsApp",
  },
  {
    title: "EPasar",
    description: "React Native mobile marketplace app with Redux Saga for async flow control and NativeBase for UI.",
    tech: ["React Native", "Redux Saga", "NativeBase", "TypeScript"],
    repo: "https://github.com/wildanfadh/EPasar",
  },
  {
    title: "golang_crud_api",
    description: "Go CRUD API for electronics store with MongoDB backend. Clean architecture with Echo framework.",
    tech: ["Go", "Echo", "MongoDB"],
    repo: "https://github.com/wildanfadh/golang_crud_api",
  },
  {
    title: "JDIH Mojokerto",
    description: "Legal Documentation and Information Network Management System for Mojokerto City.",
    tech: ["CodeIgniter", "jQuery", "Bootstrap", "MySQL"],
    link: "https://jdih.mojokertokota.go.id",
  },
  {
    title: "Sipandu",
    description: "Integrated Poverty Alleviation Information System with geospatial data visualization.",
    tech: ["Laravel", "Leaflet", "REST API", "PostgreSQL"],
  },
  {
    title: "PintarMoker",
    description: "Publicly accessible Spatial Planning Information System for urban planning and land use.",
    tech: ["Laravel", "Leaflet", "MySQL"],
  },
  {
    title: "Dikupasi Mobile",
    description: "Data Collection Information System for Small & Medium Enterprises, Trade, and Cooperatives.",
    tech: ["React Native", "TypeScript", "Android"],
  },
  {
    title: "Simoneva",
    description: "Monitoring and Evaluation Information System for Bappedalitbang Mojokerto City.",
    tech: ["Angular", "CoreUI", "MySQL"],
  },
];

export const focusAreas = [
  "Enterprise Apps",
  "Public Service Platforms",
  "Mobile Delivery",
  "Desktop Applications",
  "AI Agent Tooling",
  "System Integration",
];
