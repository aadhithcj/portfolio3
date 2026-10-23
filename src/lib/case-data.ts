import type { CaseData } from "@/components/projects/CaseStudy";

export const caseData: Record<string, CaseData> = {
  retina: {
    accent: "#FF3C38",
    eyebrow: "Android · BTech Final Year Project · 2026",
    title: "Retina",
    tagline:
      "An Android app that reads text, money and objects aloud for visually impaired users.",
    summary:
      "Retina runs four models on the phone camera feed and speaks the results. Everything runs on the device. The paper was presented at ICFISN 2026.",
    stack: [
      "Kotlin",
      "CameraX",
      "ML Kit",
      "TensorFlow Lite",
      "YOLOv8n",
      "MiDaS",
    ],
    built: [
      "My contribution: trained the YOLOv8 currency model, built the CameraX real-time frame pipeline, and integrated on-device inference with vibration feedback.",
      "Text reader using ML Kit OCR, for labels, mail and signs.",
      "Currency reader: a YOLOv8n model I trained on 6 Indian note denominations, with a running total.",
      "Object detection with EfficientDet Lite0, announced as left, centre or right.",
      "Obstacle warnings from MiDaS depth estimation, with faster beeps as things get closer.",
      "No on-screen buttons. Swipes and taps control everything, with vibration feedback.",
    ],
    problems: [
      {
        title: "Camera frames arrive faster than the models run",
        problem:
          "Queued frames filled memory and caused freezes, so warnings arrived late.",
        fix: "Used CameraX's keep-only-latest strategy so the model always gets the newest frame.",
        learned: "For live assistance a fresh answer beats a complete one.",
      },
      {
        title: "Too much speech",
        problem:
          "Detections fire every frame, and reading them all out drowned the user in audio.",
        fix: "Skip text that is nearly identical to what was just said (Levenshtein distance). Collision warnings still interrupt.",
      },
    ],
  },

  devopshub: {
    accent: "#42BFDD",
    eyebrow: "DevOps · learning project",
    status: "In progress",
    title: "DevOpsHub",
    tagline:
      "A small Flask app I used to learn CI/CD, Docker and deploying to AWS.",
    summary:
      "Every push to main is tested, built into a Docker image and deployed to an EC2 instance. If the new version fails its health check, the old one is restored.",
    stack: [
      "Flask",
      "PostgreSQL",
      "Docker Compose",
      "GitHub Actions",
      "AWS EC2 + SSM",
    ],
    built: [
      "GitHub Actions workflow: pytest, frontend build and a container smoke test.",
      "Images tagged with the commit SHA and pushed to GitHub Container Registry.",
      "Deploys through AWS Systems Manager, so no SSH keys are stored in GitHub.",
      "A deploy script on the server that pulls the new image, checks /api/health and /api/db-health, and rolls back to the previous SHA if they fail.",
    ],
    problems: [
      {
        title: "Shell quoting broke inside SSM commands",
        problem:
          "Multi-line scripts passed through YAML, JSON and bash kept breaking on nested quotes.",
        fix: "Put deploy.sh on the server. The workflow now runs one short command and passes the SHA.",
        learned: "CI should trigger scripts, not contain them.",
      },
      {
        title: "A failed deploy left the site down",
        problem:
          "The first version stopped the old container before the new one was ready.",
        fix: "Pull the image first, swap containers, health-check, and restore the previous tag on failure.",
      },
    ],
    limits: [
      "Next: Prometheus metrics, CloudWatch logs, Terraform. None of these are built yet.",
    ],
    links: [
      {
        label: "CI run",
        href: "https://github.com/aadhithcj/devopshub/actions/runs/38448430972",
      },
    ],
  },

  inventory: {
    accent: "#FF7700",
    eyebrow: "Desktop app · in daily use",
    status: "In use at a shop",
    title: "Inventory Management System",
    tagline: "Billing and stock software for a motorcycle spare-parts shop.",
    summary:
      "A desktop app for the shop counter: search a part, bill it, print the invoice, track stock. It runs on a local SQLite database. Only the supplier invoice import needs internet.",
    stack: ["Python", "PyQt6", "SQLite", "ReportLab", "Gemini API"],
    built: [
      "Keyboard-first billing screen, so the clerk rarely needs the mouse.",
      "Each sale (bill, line items, stock change) is saved in one SQLite transaction, so it fully succeeds or fully fails.",
      "Stock is checked before a sale, so stock can't go negative.",
      "Voiding a bill puts the items back in stock.",
      "PDF invoices for thermal and A4 printers.",
      "Supplier invoice import: Gemini reads the PDF or photo, and the clerk reviews every line before stock is updated.",
      "One-click zip backup of the database.",
    ],
    problems: [
      {
        title: "Stock counts drifting",
        problem:
          "Paper bills and end-of-day tallying meant counts were often wrong.",
        fix: "Stock changes only happen inside the sale transaction, after a check.",
      },
      {
        title: "Typing in supplier deliveries",
        problem: "Entering a long delivery by hand was slow.",
        fix: "Let Gemini extract the lines, then match them to existing parts and have the clerk confirm.",
        learned:
          "AI extraction is only safe with a human check before it touches stock.",
      },
    ],
  },

  "crop-recommendation": {
    accent: "#22C55E",
    eyebrow: "AI / ML · internship 2025",
    title: "Roots",
    tagline: "A prototype that recommends crops for a location.",
    summary:
      "Pick a place, and Roots combines weather data with soil values to suggest the top three crops. Built during a one-month AI/ML internship at ICT Academy of Kerala.",
    stack: ["React", "TypeScript", "Flask", "scikit-learn", "Open-Meteo"],
    built: [
      "Random forest classifier trained on 7 features: N, P, K, pH, temperature, humidity and rainfall.",
      "Flask API that fetches weather from Open-Meteo, builds the feature vector and returns the top 3 crops with probabilities.",
      "React frontend with location search, browser geolocation and soil sliders.",
      "Input validation, and a rule-based fallback when the weather API or the model can't answer.",
    ],
    problems: [
      {
        title: "Weather APIs only give today's rain",
        problem:
          "'0 mm right now' says nothing about whether a crop will grow.",
        fix: "Used Open-Meteo's climate archive (1991–2020) to get typical annual rainfall, cached per location.",
      },
    ],
    limits: [
      "Soil values are regional estimates, not lab tests. Results are suggestions, not agronomic advice.",
    ],
  },

  "cv-sorting": {
    accent: "#9649CB",
    eyebrow: "Full-stack · BTech mini project",
    title: "CV Management System",
    tagline:
      "A recruitment app where candidates apply and recruiters rank them.",
    summary:
      "Candidates keep one structured profile and apply to jobs. Recruiters see applicants ranked by a score they can adjust. Built by a team of three.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "TanStack Query"],
    built: [
      "My contribution: Supabase schema and PostgreSQL database design, TanStack Query integration, and the configurable weighted scoring algorithm.",
      "Candidate side: CV form, job list, one-click apply and a status tracker.",
      "Recruiter side: post jobs, review a ranked applicant table, move applicants between stages.",
      "Weighted score from skill overlap, experience, role match and bonuses, with recruiter-adjustable weights.",
      "Five related Postgres tables in Supabase with foreign keys and cascading deletes.",
      "TanStack Query keeps lists and counts in sync after a status change.",
    ],
    problems: [
      {
        title: "Ranking without a black box",
        problem: "A hidden score can quietly decide who gets seen.",
        fix: "The score is a plain weighted sum. Everyone stays visible, and the recruiter can see how each factor contributed.",
      },
    ],
    limits: [
      "Matching is keyword-based. Semantic matching (Postgres ≈ SQL) is not built.",
    ],
  },
};
