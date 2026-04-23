export const site = {
  name: "Subith",
  role: "Full Stack Developer",
  tagline: "MERN stack · React · TypeScript · NestJS",
  /** Hero background — place your photo at `public/me-4.jpg` (or change the path). */
  portraitSrc: "/Me.png",
  contactEmail: "subithpallikkal17@gmail.com",
};

export const about =
  "Hi, I’m Subith — a Full Stack Developer specializing in the MERN stack and modern web technologies. I build scalable, high-performance web applications with a strong focus on clean architecture and user experience. On the frontend, I work extensively with React and TypeScript to create dynamic, responsive interfaces, while on the backend I use Node.js, Express, and also NestJS with Prisma and SQL/PostgreSQL for robust, maintainable systems.\n\nI have hands-on experience developing real-world products including eCommerce platforms, HRMS, POS, and other business management systems in a product-based environment. Alongside development, I bring UX/UI skills using Figma, Photoshop, and Adobe XD to design intuitive, user-centered interfaces.\n\nI’m passionate about delivering seamless digital experiences that not only meet technical requirements but also align with user needs and business goals. I enjoy turning ideas into practical, efficient solutions—and I’m always open to collaborating on impactful projects.";

export const skills = [
  "Javascript",
  "C",
  "Typescript",
  "HTML5",
  "React Js",
  "NextJs",
  "NestJS",
  "Prisma",
  "CSS",
  "TailwindCss",
  "IIS",
  "Bootstrap",
  "Figma",
  "AdobeXD",
  "MaterialUI",
  "Ejs",
  "Node.Js",
  "Express.Js",
  "MongoDB",
  "Git",
  "Git-hub",
  "Postman",
  "PostgreSql",
  "Swagger",
  "Ngrok",
  "Multer",
  "MVC(Model View Controller)",
  "SQL",
  "JWT",
  "Canva",
  "Photoshop",
  "Stripe",
  "Winscp",
  "Render",
  "Vercel",
  "Netilify",
] as const;

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "iKeySoftwaresolutions LLP",
    period: "04/2025 – Present",
    location: "Hymod Workspace, Calicut",
    description:
      "Worked as a Full Stack Developer in a product-based company, building scalable web applications using React.js with TypeScript for the frontend and NestJS with TypeScript for the backend. Utilized Prisma ORM with SQL/PostgreSQL for database management. Contributed to the development of multiple business products including E-commerce platforms, Insurance Broking Management Systems (IBMS), HRMS, and related systems.",
  },
  {
    title: "MERN Stack Developer (Intern)",
    company: "LevelX",
    period: "01/2024 – 02/2025",
    location: "Hilite Business Park, Calicut",
    description:
      "Developed and maintained full-stack web applications using HTML, CSS, Node.js, and Express.js. Designed and implemented databases using MongoDB, leveraging its document-oriented data model for efficient data storage.",
    highlights: [
      "Built and maintained full-stack features across the MERN stack",
      "Modeled and queried MongoDB for scalable document storage",
    ],
  },
];

export type ProjectItem = {
  title: string;
  subtitle: string;
  /** Live site or repo URL — omit until you have a public link */
  url?: string;
  bullets: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Al-Mango",
    subtitle: "Food Menu Web App",
    bullets: [
      "Enhanced user experience, resulting in increased order efficiency through an intuitive POS interface design.",
      "Increased sales by streamlining menu access and enhancing upselling opportunities.",
      "Modernized the café ordering process while aligning with goals for customer engagement and profitability.",
    ],
  },
  {
    title: "Go-miles",
    subtitle: "Travel agency website",
    bullets: [
      "Crafted an intuitive, visually appealing frontend for a dynamic travel agency.",
      "Focused on simplifying travel bookings and helping users explore destinations with clarity and confidence.",
    ],
  },
  {
    title: "Walksus",
    subtitle: "E-commerce experience",
    bullets: [
      "Product listing, wishlist, cart, and secure checkout",
      "User profiles and order tracking",
      "Size charts and product variations",
      "Comprehensive admin tools for users, categories, products, and inventory",
    ],
  },
];
