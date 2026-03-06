export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Schedule", link: "#schedule" },
  { name: "Skills", link: "#skills" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building Scalable Solutions with Next.js, Node.js, Python & Golang",
    description:
      "Full-stack development expertise across modern web technologies",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Building RAG Bots & AI Workflow Apps",
    description: "LLM-powered solutions with advanced AI integration",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Constantly expanding and improving my skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Learning New Libraries & AI Stacks",
    description: "Always exploring cutting-edge technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "AI Trading Bot | 75% Win Rate & 0.93 Accuracy",
    description: "Advanced algorithmic trading with machine learning",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Connect & Build Something Amazing",
    description: "Ready for new opportunities and collaborations",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Printify MCP Server",
    des: "Built an MCP server exposing 59 tools for the full Printify API — product CRUD, order management, AI design generation (Gemini + Replicate), image pipeline, Etsy keyword research, and webhook management.",
    keywords: ["MCP", "Claude", "AI Agents", "Printify API", "TypeScript"],
    link: "https://github.com/Shubham996633",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "SecretEcho Plugin Generator",
    des: "AI-powered platform for generating custom WooCommerce plugins via chat. Real-time WebSocket streaming, Monaco code editor, credits system, and admin panel. Live on Vercel + Render.",
    keywords: ["Next.js", "WebSocket", "AI Code Gen", "WooCommerce", "MongoDB", "Redis"],
    link: "https://www.youtube.com/watch?v=pgkpgvwFMKg",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Kuber WebStore",
    des: "Kubernetes-native platform that auto-provisions isolated WooCommerce stores via React dashboard. Namespace-per-store isolation with RBAC, NetworkPolicies, ResourceQuotas, and crash recovery. Helm charts for local (k3d) and production (k3s).",
    keywords: ["Kubernetes", "Helm", "Docker", "Multi-Tenant", "System Design"],
    link: "https://github.com/Shubham996633",
    category: "DevOps",
  },
  {
    id: 4,
    title: "Trading Bot",
    des: "Full-stack trading system for gold with live trading, backtesting (60% win rate), simulation engine, multi-timeframe analysis, sentiment analysis (Gemini AI), and Kelly Criterion position sizing. Deployed on Azure.",
    keywords: ["Python", "FastAPI", "ML", "Supabase", "Next.js", "Azure"],
    link: "https://github.com/Shubham996633",
    category: "AI/ML",
  },
  {
    id: 5,
    title: "CRM Chrome Extension",
    des: "Chrome extension to extract contacts, deals, and tasks from ActiveCampaign CRM with real-time sync, search/filter, sortable tables, pagination, and CSV/JSON export.",
    keywords: ["Chrome Extension", "TypeScript", "Data Extraction", "ActiveCampaign"],
    link: "https://github.com/Shubham996633",
    category: "Tools",
  },
  {
    id: 6,
    title: "n8n Automation Workflows",
    des: "Created 7 ready-to-use n8n workflow templates: invoice generator, Instagram/LinkedIn auto-poster, WhatsApp AI responder, Google review alerts, uptime monitor, and lead capture pipeline.",
    keywords: ["n8n", "Automation", "AI", "Google Sheets", "Telegram"],
    link: "https://github.com/Shubham996633",
    category: "Automation",
  },
  {
    id: 7,
    title: "IndiaExplorer",
    des: "Full-featured travel booking platform with Razorpay payments, email notifications (Resend), loyalty rewards, cart/wishlist, and admin dashboard. Built with Next.js 14 + Supabase + TypeScript.",
    keywords: ["Next.js", "Razorpay", "Supabase", "Full-Stack", "E-Commerce"],
    link: "https://github.com/Shubham996633",
    category: "Full Stack",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack & AI/LLM Backend Engineer (Lead)",
    company: "CareerCraft360",
    duration: "Sep 2024 - Present",
    desc: "Single-handedly built entire AI-powered career coaching platform. Implemented GPT-4o, Claude-3, vector DB for resume analysis and real-time mock interviews. Built Stripe payment system and FastAPI + PostgreSQL + Redis microservices on Google Cloud Run.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    skills: ["Next.js", "FastAPI", "GCP", "LLM/RAG", "Stripe", "WebSockets"],
  },
  {
    id: 2,
    title: "Software Developer Engineer Intern",
    company: "Xoidlabs",
    duration: "Jan 2026 - Present",
    desc: "Developed full-stack website for Trukoder (client project). Built Zapier automation workflows for CRMs and data pipelines. Contributing to core product Recapi.ai on frontend, backend, and API integrations.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    skills: ["Next.js", "Zapier", "Full Stack", "API Integrations"],
  },
  {
    id: 3,
    title: "Full-Stack & Automation Lead",
    company: "ArkaHub",
    duration: "Jun 2025 - Jan 2026",
    desc: "Built complete Zoho Bigin & Analytics lead automation pipeline. Developed responsive portal with Next.js + Supabase. Engineered Python-based real-time roof extraction system. Configured CircleCI + Docker + Vercel/AWS pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    skills: ["Zoho Bigin", "Next.js", "Supabase", "Python", "Docker", "CircleCI"],
  },
  {
    id: 4,
    title: "Backend & DevOps Engineer Intern",
    company: "GoPool",
    duration: "Jun 2025 - Aug 2025",
    desc: "Built scalable GoLang services with FastAPI WebSocket for real-time AI gym analytics. Orchestrated zero-downtime deployments on Azure using Docker + CircleCI.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    skills: ["Go", "FastAPI", "Azure", "Docker", "CI/CD"],
  },
  {
    id: 5,
    title: "Full-Stack Developer Intern",
    company: "Monkey Science",
    duration: "Nov 2023 - Jun 2025",
    desc: "Designed 8 scalable FastAPI microservices with Zoho Books invoicing automation. Built centralized admin dashboard improving backend efficiency by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    skills: ["FastAPI", "Microservices", "Zoho Books", "Admin Dashboard"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shubham996633",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Shubham99663333",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shubham996633/",
  },
  {
    id: 4,
    img: "/wha.svg",
    link: "https://wa.me/916393309346",
  },
  {
    id: 5,
    img: "/telegram.svg",
    link: "https://t.me/shubham996633",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/shubham996633/responsive-web-design",
    description:
      "Completed 300-hour course mastering responsive design principles",
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/shubham996633/javascript-algorithms-and-data-structures",
    description: "Finished 300-hour certification, building 20+ projects",
  },
  {
    id: 3,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/shubham996633/front-end-development-libraries",
    description:
      "Earned 300-hour certification focusing on React and Bootstrap",
  },
  {
    id: 4,
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/shubham996633/data-analysis-with-python-v7",
    description:
      "Completed 300-hour course analyzing datasets with Pandas and NumPy",
  },
];
