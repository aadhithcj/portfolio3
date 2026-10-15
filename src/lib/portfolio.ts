export const profile = {
  name: "Aadhith C Joseph",
  handle: "aadhithcj",
  location: "Kannur, Kerala",
  email: "aadhithcj9@gmail.com",
  github: "https://github.com/aadhithcj",
  linkedin: "https://linkedin.com/in/aadhithcj",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  repoUrl?: string;
  demoUrl?: string;
  year: string;
  stack: string[];
  tagline: string;
  points: string[];
  researchPaper?: {
    title: string;
    conference: string;
    location: string;
    dates: string;
    description: string;
  };
};

export const projects: Project[] = [
  {
    slug: "retina",
    name: "Retina",
    category: "AI / COMPUTER VISION",
    repoUrl: "https://github.com/aadhithcj/Retina",
    year: "2026",
    stack: ["Kotlin", "Android", "Computer Vision"],
    tagline: "An AI assistive Android system for visually impaired users.",
    points: [
      "Developed an assistive Android application using object detection, OCR, currency recognition and audio feedback.",
      "Developed obstacle detection and navigation functionality using computer vision and machine learning.",
    ],
    researchPaper: {
      title: "Retina: An AI Powered Assistive System for the Visually Impaired",
      conference:
        "ICFISN 2026 (International Conference on Frontiers in Intelligent Systems & Networks)",
      location: "Sree Buddha College of Engineering, Alappuzha",
      dates: "March 24–25, 2026",
      description:
        "Co-authored and presented research detailing the architecture and performance of multiple on-device ML models for accessibility.",
    },
  },
  {
    slug: "devopshub",
    name: "DevOpsHub",
    category: "DEVOPS / CI/CD",
    repoUrl: "https://github.com/aadhithcj/devopshub",
    year: "2026",
    stack: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    tagline:
      "A containerised full-stack app with an automated delivery pipeline.",
    points: [
      "Built and containerised a full-stack Flask, React and PostgreSQL application using Docker Compose.",
      "Implemented Git workflows, automated testing and frontend builds with GitHub Actions.",
      "Configured CI/CD with environment-based configuration and secure secrets management.",
    ],
  },
  {
    slug: "inventory",
    name: "Inventory Management System",
    category: "DESKTOP SOFTWARE",
    repoUrl: "https://github.com/aadhithcj/MotoInvMgmt",
    year: "2026",
    stack: ["Python", "PyQt6", "SQLite", "ReportLab"],
    tagline:
      "Desktop stock and billing software built for an active motor-parts shop.",
    points: [
      "Built for a working motor-parts business and in continuous daily use for stock control, supplier intake, and sales billing.",
      "Engineered atomic SQLite transactions to guarantee inventory consistency across sales, purchases, and voided invoices.",
    ],
  },
  {
    slug: "crop-recommendation",
    name: "Roots",
    category: "AGRITECH / ML",
    repoUrl: "https://github.com/aadhithcj/roots",
    demoUrl: "https://rootssss.netlify.app/",
    year: "2025",
    stack: [
      "Python",
      "Scikit-learn",
      "Flask",
      "React",
      "TypeScript",
      "Open-Meteo",
    ],
    tagline:
      "AI-powered crop recommendation system combining environmental, weather, and soil data.",
    points: [
      "Built an end-to-end crop recommendation platform during a 1-month AI/ML internship at ICT Academy of Kerala.",
      "Trained a Random Forest Classifier on 7 soil and climate parameters, integrating Open-Meteo weather APIs with a React frontend.",
    ],
  },
  {
    slug: "cv-sorting",
    name: "CV Management System",
    category: "HR TECH / FULL-STACK",
    repoUrl: "https://github.com/aadhithcj/cona",
    year: "2024",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "TanStack Query"],
    tagline:
      "Structured candidate information and configurable recruitment workflows.",
    points: [
      "Built an academic B.Tech mini-project featuring multi-attribute candidate scoring and dual applicant-recruiter portals.",
      "Engineered Supabase PostgreSQL data persistence, status management, and TanStack Query state synchronization.",
    ],
  },
];
