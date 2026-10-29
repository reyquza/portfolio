/*
 * Portfolio content
 * -----------------
 * Update this file when experience, projects, courses, or skills change.
 * Layout is defined in index.html and styling is defined in css/style.css.
 */
window.portfolioContent = {
  profileLinks: {
    github: "https://github.com/reyquza?tab=repositories",
    // Paste the full LinkedIn profile URL here to show it in the header and hero.
    linkedin: "https://www.linkedin.com/in/ray-ichinose-1371473ba/",
  },

  experience: [
    {
      role: "Student Researcher",
      organization: "LLMATCH, Matsuo-Iwasawa Laboratory, The University of Tokyo",
      period: "Oct 2026 — Present",
      points: [
        "Researching inference optimization for vision-language-action agents that play Minecraft through screen input and computer use.",
        "Built a lightweight local VLM agent on a 6 GB RTX 3050 Laptop GPU using QLoRA fine-tuning and 8-bit quantization.",
      ],
    },
    {
      role: "AI / Full-Stack Engineering Intern",
      organization: "2WINS Inc.",
      period: "Sep 2026 — Present",
      points: [
        "Build client AI systems end to end across frontend, backend, databases, AI models, and deployment.",
        "Developing a construction DX system that reads design drawings to automate cost estimates; responsible for AWS deployment.",
      ],
    },
    {
      role: "Research Intern (Data Science)",
      organization: "Goda Laboratory, Department of Chemistry, The University of Tokyo",
      period: "Sep 2026 — Present",
      points: [
        "Developing AI to detect Parkinson's disease from fruit-fly movement as an alternative to mice.",
        "Built the pipeline from raw laboratory video as AI lead using PyTorch, YOLO, and SLEAP; work in English in an international team.",
      ],
    },
    {
      role: "Commissioned Software Development",
      organization: "Independent project",
      period: "Aug 2026 — Present",
      points: [
        "Implementing monetization features for a user-generated content platform.",
      ],
    },
  ],

  projects: [
    {
      type: "Physical AI Research",
      title: "Minecraft VLA Agent",
      description: "A lightweight vision-language agent that runs locally on a 6 GB NVIDIA GPU. Fine-tuned Qwen3.5-2B with QLoRA and quantized it to 8-bit for real-time decisions.",
      metrics: "Decision time: ~0.6 s locally vs. 9–21 s with cloud VLMs. Action accuracy: 10.1% → 94.2%.",
      technologies: ["Python", "PyTorch", "Hugging Face", "QLoRA", "Quantization"],
      privateReason: "Research code is not publicly shared.",
    },
    {
      type: "AI Learning Application",
      title: "NextLearn",
      description: "Built in one month so my sister could use AI-assisted learning without an expensive service. Includes question registration, scheduling, explanations, and automatic grading.",
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "LLM API"],
      video: {
        src: "./assets/nextlearn-demo.mp4",
        label: "NextLearn application demonstration",
      },
      privateReason: "Project code is not publicly shared.",
    },
    {
      type: "Computer Architecture",
      title: "4-bit CPU from Scratch",
      description: "Designed a CPU from Boolean algebra up in one week, including a custom instruction set and assembly language. Wired logic-gate ICs on breadboards with six instructions and a 16-instruction ROM.",
      technologies: ["Logic Circuits", "Instruction Set Design", "Digital Electronics"],
      privateReason: "Hardware project; source is not publicly shared.",
    },
    {
      type: "Web Application",
      title: "Real-time Chat App",
      description: "A LINE-style one-to-one chat application with access control, duplicate DM prevention, and REST + WebSocket communication.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite", "WebSocket"],
      links: [
        { label: "GitHub ↗", url: "https://github.com/reyquza/2WIS_skill_test" },
      ],
    },
    {
      type: "Scientific Computing · Course Project",
      title: "Evolutionary Dynamics Simulations",
      description: "Numerical simulations and analysis of evolutionary phenomena including neutral evolution and sexual reproduction.",
      note: "Course grade: A+",
      technologies: ["Python", "NumPy", "Matplotlib"],
      images: [
        {
          src: "./assets/3.png",
          alt: "Simulation comparing rare trait frequency in a large population and a population bottleneck",
        },
        {
          src: "./assets/normal.png",
          alt: "Host-parasite spatial patterns and population dynamics from a numerical simulation",
        },
      ],
      privateReason: "Course code is not publicly shared.",
    },
    {
      type: "Data Analysis · Course Project",
      title: "Ocean Data Analysis",
      description: "Analyzed approximately 20 GB of ocean data and combined derived tropical cyclone heat potential with storm-track data for intensity prediction, reaching roughly 70% accuracy.",
      technologies: ["Python", "xarray", "dask", "scikit-learn"],
      image: {
        src: "./assets/KHANUN.png",
        alt: "Map showing typhoon heat potential and the path of Typhoon Khanun",
      },
      privateReason: "Course code is not publicly shared.",
    },
  ],

  education: [
    {
      title: "B.Eng., Information and Communication Engineering",
      organization: "The University of Tokyo",
      period: "Apr 2025 — Mar 2029 (expected)",
      details: [
        "Coursework spans AI, computing systems, electronics, and quantum mechanics.",
        "Second year: all courses A or above, with an average above 90/100.",
      ],
    },
    {
      title: "Large Language Model Course I",
      organization: "Matsuo-Iwasawa Laboratory",
      period: "Completed Sep 2026",
      status: "Completed",
    },
    {
      title: "AI Quant Trading Course",
      organization: "Matsuo-Iwasawa Laboratory",
      period: "Ongoing",
      status: "In progress",
    },
  ],

  recognition: [
    {
      title: "Keyence Foundation Scholarship",
      description: "Selected at university entrance",
      date: "Apr 2025",
    },
    {
      title: "LLMATCH Student Researcher",
      description: "Selected by the Matsuo-Iwasawa Laboratory",
      date: "Oct 2026",
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python", "TypeScript", "JavaScript", "C", "SQL"],
    },
    {
      category: "Web / Cloud",
      items: ["Next.js", "FastAPI", "PostgreSQL", "AWS", "Docker", "Linux", "Git"],
    },
    {
      category: "AI / ML",
      items: ["PyTorch", "Hugging Face", "LoRA / QLoRA", "YOLO", "SLEAP", "scikit-learn"],
    },
  ],
};
