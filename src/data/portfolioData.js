/**
 * Portfolio Data for Netravathi Police Patil
 * B.Tech CSE (AI & ML) - Second Year, REVA University
 * Keep all personal details and project information editable here.
 */

export const personalInfo = {
  name: "Netravathi Police Patil",
  role: "AI & Machine Learning Engineering Student",
  tagline: "Building intuitive web applications, intelligent study tools, and software solutions with engineering precision.",
  university: "REVA University, Bengaluru",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  currentYear: "Second Year",
  cgpa: "9.19 / 10 CGPA",
  location: "Bengaluru, Karnataka, India",
  email: "netravathipolicepatil931@gmail.com",
  github: "https://github.com/NetravathiPatil",
  linkedin: "https://www.linkedin.com/in/netravathi-police-patil/",
  status: "Second Year B.Tech Scholar · Open for Tech Internships & Collaborations",
  avatar: "/assets/aistudio/Professional_Portrait_with_Elegant_Details_977d7d4b.png",
  summary: "Motivated Computer Science & Engineering student specializing in AI & ML at REVA University. Dedicated to turning ideas into real-world applications across web development, software engineering, and practical problem-solving.",
  resumeUrl: "#contact",
};

export const metrics = [
  { label: "Academic CGPA", value: "9.19 / 10" },
  { label: "Engineering Projects", value: "6 Built" },
  { label: "B.Tech Progress", value: "2nd Year" },
  { label: "Core Competencies", value: "React & ML" },
];

export const aboutMe = {
  headline: "Second-Year Engineering Scholar with a Drive for Practical Problem Solving",
  paragraphs: [
    "I am a Second Year B.Tech student in Computer Science and Engineering specializing in Artificial Intelligence and Machine Learning at REVA University, Bengaluru. I maintain an academic standing of 9.19 / 10 CGPA, combining a strong theoretical basis in computer science with active, hands-on development.",
    "My focus centers on developing responsive web applications, exploring intuitive user interfaces, and learning practical software engineering principles. From building productivity tools and management systems to creating intelligent educational solutions, I enjoy the complete problem-to-product journey.",
    "As I progress through my engineering degree, I am continuously broadening my expertise in modern JavaScript frameworks, responsive styling, algorithmic problem solving, and the integration of machine learning concepts into everyday software."
  ],
  pillars: [
    {
      title: "Core Computer Science & Programming",
      description: "Solid grounding in data structures, algorithms, object-oriented concepts, and clean modular code in JavaScript, Python, and C++."
    },
    {
      title: "Interactive Web & UI Engineering",
      description: "Building responsive, accessible web applications using modern React, component architecture, CSS layouts, and intuitive UX design."
    },
    {
      title: "AI & ML Academic Specialization",
      description: "Exploring foundational machine learning workflows, data preprocessing, and intelligent application features at REVA University."
    }
  ]
};

export const skillsCategories = [
  {
    category: "Languages & Core",
    description: "Core programming and scripting languages used in coursework and projects.",
    skills: [
      { name: "JavaScript", level: "Proficient", icon: "FileCode" },
      { name: "Python", level: "Proficient", icon: "Code2" },
      { name: "C++", level: "Intermediate", icon: "Cpu" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" },
      { name: "SQL", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    category: "Web & Frontend Frameworks",
    description: "Modern tools and libraries for crafting responsive web interfaces.",
    skills: [
      { name: "React.js", level: "Proficient", icon: "Boxes" },
      { name: "Tailwind CSS", level: "Proficient", icon: "Palette" },
      { name: "Responsive UI/UX", level: "Advanced", icon: "Monitor" },
      { name: "DOM & Web APIs", level: "Advanced", icon: "Globe" },
      { name: "Component Architecture", level: "Proficient", icon: "Layers" }
    ]
  },
  {
    category: "AI & Machine Learning Foundations",
    description: "Academic coursework and foundational concepts in AI & ML.",
    skills: [
      { name: "Machine Learning Concepts", level: "Intermediate", icon: "Brain" },
      { name: "Data Preprocessing", level: "Intermediate", icon: "Sliders" },
      { name: "Algorithm Analysis", level: "Intermediate", icon: "Binary" },
      { name: "Prompting & AI Integration", level: "Proficient", icon: "Sparkles" }
    ]
  },
  {
    category: "Developer Tools & Environment",
    description: "Essential workflow tools for version control and development.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", icon: "GitBranch" },
      { name: "VS Code", level: "Advanced", icon: "Terminal" },
      { name: "Chrome DevTools", level: "Proficient", icon: "Search" },
      { name: "Vite", level: "Proficient", icon: "Zap" }
    ]
  }
];

export const projects = [
  {
    id: "studymate-ai",
    title: "StudyMate AI",
    category: "AI & EdTech",
    filterCategory: "AI & EdTech",
    isFeatured: true,
    shortDescription: "An intelligent study assistance project designed to help students organize learning materials, generate study resources, and improve their learning experience.",
    technologies: ["JavaScript", "Web Development", "AI Concepts"],
    badge: "Featured EdTech",
    accentColor: "from-blue-500/20 via-violet-500/20 to-cyan-500/10",
    themeGlow: "rgba(99, 102, 241, 0.2)",
    icon: "Brain",
    details: {
      problem: "Students often struggle to synthesize scattered lecture notes, track syllabi, and produce targeted revision summaries prior to exams.",
      solution: "StudyMate AI provides an interactive workspace where learners can organize study units, structure notes logically, and generate helpful conceptual study cards and revision prompts.",
      keyFeatures: [
        "Structured topic and chapter notebook organization",
        "Interactive study card generator with conceptual prompts",
        "Clean, distraction-free study timer and progress tracker",
        "Responsive interface tailored for desktop and mobile study sessions"
      ],
      technicalApproach: "Built with modular vanilla JavaScript and modern DOM manipulation, featuring structured client-side storage and responsive CSS styling for optimal student accessibility."
    },
    githubUrl: "https://github.com/NetravathiPatil",
    liveDemoUrl: null
  },
  {
    id: "online-grocery-store",
    title: "Online Grocery Store",
    category: "Full-Stack Web Development",
    filterCategory: "Web Applications",
    isFeatured: true,
    shortDescription: "An online grocery shopping application featuring product browsing, shopping cart functionality, and a user-friendly shopping experience.",
    technologies: ["React", "JavaScript", "CSS"],
    badge: "Featured Web App",
    accentColor: "from-emerald-500/20 via-teal-500/20 to-blue-500/10",
    themeGlow: "rgba(20, 184, 166, 0.2)",
    icon: "ShoppingCart",
    details: {
      problem: "Shoppers need an intuitive, fast, and responsive digital storefront that makes finding daily essentials effortless across devices.",
      solution: "Engineered a dynamic React-based grocery web store featuring categorised catalogs, price filtering, instant cart state updates, and checkout summary calculation.",
      keyFeatures: [
        "Categorized item catalog (Fresh Produce, Dairy, Staples, Beverages)",
        "Real-time cart state management with quantity adjustment and subtotal calculation",
        "Interactive search and category filtering for swift discovery",
        "Clean, responsive card grid with persistent local shopping state"
      ],
      technicalApproach: "Implemented using React functional components, useState and useEffect hooks for cart persistence, and modular CSS for smooth card transitions."
    },
    githubUrl: "https://github.com/NetravathiPatil",
    liveDemoUrl: null
  },
  {
    id: "milk-dairy-management",
    title: "Milk Dairy Management System",
    category: "Management System",
    filterCategory: "Management Systems",
    isFeatured: false,
    shortDescription: "A digital management application designed to organize dairy operations, including milk collection, customer records, and related management workflows.",
    technologies: ["React", "JavaScript", "Web Development"],
    badge: "Management Tool",
    accentColor: "from-cyan-500/20 via-blue-500/20 to-indigo-500/10",
    themeGlow: "rgba(6, 182, 212, 0.2)",
    icon: "ClipboardList",
    details: {
      problem: "Local dairy cooperatives frequently rely on manual paper logbooks for recording daily milk collection volumes, fat content, and supplier payments, leading to errors and delays.",
      solution: "Created a unified digital dashboard for logging daily milk intake, managing customer and farmer profiles, and calculating automated billing records.",
      keyFeatures: [
        "Daily milk collection intake log with volume and date tracking",
        "Customer and farmer account management directory",
        "Automated summary calculations for payment reconciliation",
        "Searchable transaction records with clean status tags"
      ],
      technicalApproach: "Crafted with React component state handling, validation logic for volumetric entries, and an intuitive tabular layout for quick data verification."
    },
    githubUrl: "https://github.com/NetravathiPatil",
    liveDemoUrl: null
  },
  {
    id: "ipl-ticket-booking",
    title: "IPL Ticket Booking System",
    category: "Web Application",
    filterCategory: "Web Applications",
    isFeatured: false,
    shortDescription: "A responsive cricket ticket booking application featuring match browsing, booking interfaces, and an intuitive user experience.",
    technologies: ["React", "JavaScript", "CSS"],
    badge: "Sports & Events",
    accentColor: "from-amber-500/20 via-orange-500/20 to-red-500/10",
    themeGlow: "rgba(245, 158, 11, 0.2)",
    icon: "Ticket",
    details: {
      problem: "Cricket enthusiasts need a straightforward and engaging way to browse upcoming tournament fixtures and preview ticket availability.",
      solution: "Developed an energetic and responsive cricket ticketing web application featuring match schedules, team matchups, stand selection, and an intuitive booking checkout flow.",
      keyFeatures: [
        "Upcoming match fixture schedule with team logos and venue information",
        "Interactive seating category selector (Pavilion, Club, General Stands)",
        "Instant ticket quantity counter and dynamic pricing calculator",
        "Confirmation summary modal with simulated digital booking pass"
      ],
      technicalApproach: "Utilized React state hooks to coordinate fixture filtering and tiered seat pricing, wrapped in high-contrast sports-inspired styling."
    },
    githubUrl: "https://github.com/NetravathiPatil",
    liveDemoUrl: null
  },
  {
    id: "my-todo-list",
    title: "My To-Do List",
    category: "Productivity Application",
    filterCategory: "Productivity",
    isFeatured: false,
    shortDescription: "A lightweight task management website that helps users create, organize, and track their daily activities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    badge: "Productivity Tool",
    accentColor: "from-violet-500/20 via-purple-500/20 to-pink-500/10",
    themeGlow: "rgba(168, 85, 247, 0.2)",
    icon: "CheckSquare",
    details: {
      problem: "Busy students and professionals need a clean, distraction-free tool to jot down, prioritize, and check off day-to-day responsibilities.",
      solution: "Built a fast and focused task manager that lets users add tasks, toggle completion states, delete items, and filter by status (All, Active, Completed).",
      keyFeatures: [
        "Quick task entry with priority markers and timestamps",
        "One-click completion toggles with smooth visual strike-through",
        "Filtered views: All, Pending, and Completed tasks",
        "Persistent browser storage ensuring tasks remain saved across sessions"
      ],
      technicalApproach: "Crafted with lightweight vanilla JavaScript, LocalStorage API persistence, and accessible keyboard-friendly input controls."
    },
    githubUrl: "https://github.com/NetravathiPatil",
    liveDemoUrl: null
  },
  {
    id: "personal-e-portfolio",
    title: "Personal E-Portfolio",
    category: "Portfolio & UI/UX",
    filterCategory: "Web Applications",
    isFeatured: false,
    shortDescription: "A responsive personal portfolio website showcasing technical skills, projects, education, certifications, and engineering interests.",
    technologies: ["React", "CSS", "JavaScript"],
    badge: "Portfolio & UX",
    accentColor: "from-cyan-500/20 via-blue-500/20 to-violet-500/10",
    themeGlow: "rgba(56, 189, 248, 0.2)",
    icon: "Layout",
    details: {
      problem: "Engineering students need a polished, modern platform to present academic milestones, genuine projects, and professional contact channels to recruiters.",
      solution: "Designed and engineered this modern dark-themed web portfolio featuring responsive navigation, interactive project filtering, accessible modals, and smooth animations.",
      keyFeatures: [
        "Tailored responsive layout built for mobile, tablet, and widescreen viewports",
        "Interactive project showcase with category filtering and deep architecture modal",
        "Academic timeline highlighting REVA University B.Tech achievements and 9.19 CGPA",
        "Accessible contact channels including direct one-click email copy"
      ],
      technicalApproach: "Built on React and Vite with Tailwind CSS, lucide-react icons, and hardware-accelerated Motion animations."
    },
    githubUrl: "https://github.com/NetravathiPatil",
    liveDemoUrl: null
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "REVA University, Bengaluru",
    currentYear: "Second Year",
    period: "2022 - 2026",
    cgpa: "9.19 / 10 CGPA",
    sectionLabel: "04 / ACADEMIC FOUNDATIONS",
    heading: "Engineering Knowledge. Real-World Ambition.",
    description: "My academic journey combines foundational computer science principles, practical programming, and an expanding interest in Artificial Intelligence and Machine Learning.",
    keyHighlights: [
      "Consistent academic excellence with an outstanding 9.19 / 10 CGPA",
      "Actively developing practical projects in web engineering and software design",
      "Engaged in core computer science subjects, algorithms, and AI/ML fundamentals at REVA University"
    ]
  }
];

export const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    instructor: "Andrew Ng",
    date: "2024",
    skills: ["Neural Networks", "Convolutional Networks", "Sequence Models", "Hyperparameter Tuning"],
    verified: true
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online & DeepLearning.AI",
    instructor: "Andrew Ng",
    date: "2023",
    skills: ["Supervised Learning", "Unsupervised Learning", "Algorithms", "Optimization"],
    verified: true
  },
  {
    title: "TensorFlow Developer Certificate Program",
    issuer: "Google / TensorFlow",
    instructor: "Coursera",
    date: "2024",
    skills: ["TensorFlow 2.x", "Model Building", "Computer Vision Basics", "NLP Concepts"],
    verified: true
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute (DLI)",
    instructor: "NVIDIA",
    date: "2024",
    skills: ["GPU Computing", "CUDA Basics", "Pre-trained Models", "Inference"],
    verified: true
  }
];

export const careerGoals = [
  {
    title: "Mastering Full-Stack & Modern Web Architecture",
    timeline: "Short-Term Goal",
    description: "Deepen expertise in component-driven frontend architecture, responsive design patterns, and full-stack software development to build production-grade web tools.",
    milestones: [
      "Build comprehensive full-stack applications with robust state management",
      "Refine responsive design and accessible UI engineering practices",
      "Contribute actively to developer communities and collaborative student projects"
    ]
  },
  {
    title: "Practical AI/ML Systems & Applied Engineering",
    timeline: "Mid-Term Goal",
    description: "Bridge computer science fundamentals with applied machine learning, deploying intelligent tools and integrating ML models with web interfaces.",
    milestones: [
      "Apply deep learning frameworks to computer vision and text processing tasks",
      "Develop lightweight intelligent web utilities with client-side AI integration",
      "Participate in engineering hackathons and technical project showcases"
    ]
  },
  {
    title: "Software & AI Engineering Leadership",
    timeline: "Long-Term Vision",
    description: "Grow into a versatile software engineer who builds dependable, human-centered technology solutions that make a positive impact.",
    milestones: [
      "Lead impactful software engineering initiatives from concept to deployment",
      "Champion clean code, continuous learning, and thoughtful system design",
      "Develop solutions addressing real educational and community challenges"
    ]
  }
];

export const contactDetails = {
  email: "netravathipolicepatil931@gmail.com",
  linkedin: "https://www.linkedin.com/in/netravathi-police-patil/",
  github: "https://github.com/NetravathiPatil",
  location: "Bengaluru, Karnataka, India",
  timezone: "IST (UTC +5:30)",
  availability: "Open to tech internships, project collaborations, and junior engineering opportunities."
};
