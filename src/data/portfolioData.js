/**
 * Portfolio Data for Netravathi Police Patil
 * Second-year B.Tech CSE (AI & ML) - REVA University, Bengaluru
 * Aligned with the Stitch Design System (Cosmic Obsidian Intelligence).
 */

export const personalInfo = {
  name: "Netravathi Police Patil",
  monogram: "NP",
  eyebrow: "AI / ML ENGINEERING • SOFTWARE DEVELOPMENT",
  role: "Aspiring AI/ML Engineer | Python Developer | Web Development Enthusiast",
  headline: "Hi, I'm Netravathi.",
  subheadline: "Engineering Ideas Into Intelligent Experiences.",
  tagline: "Exploring intelligent systems, software development, and practical technology solutions.",
  university: "REVA University, Bengaluru",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  currentYear: "Second Year (2023 – Present)",
  cgpa: "9.19 / 10",
  cgpaFull: "9.19 / 10 CGPA",
  location: "Bengaluru (Bangalore), Karnataka, India • IST (UTC+5:30)",
  locationShort: "Bengaluru, IN",
  email: "netravathipolicepatil931@gmail.com",
  github: "https://github.com/NetravathiPatil",
  linkedin: "https://www.linkedin.com/in/netravathi-p-363467385/",
  avatar: "/assets/aistudio/Neon_Tech_Portfolio_Portrait_b793196b.png",
  bio: "I'm a second-year AI & ML engineering student at REVA University, exploring intelligent systems, software development, and practical technology solutions."
};

export const aboutNarrative = {
  paragraphs: [
    "I am an undergraduate student in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at REVA University, Bengaluru.",
    "My engineering journey is driven by a deep interest in how computational logic, data models, and modern software principles combine to solve practical problems. Rather than treating theory as abstract textbook rules, I focus on turning programmatic concepts into functional digital tools.",
    "Whether building accessible web applications, implementing data structures, or experimenting with foundational machine learning models, I approach every challenge with thorough discipline, curiosity, and continuous improvement."
  ],
  coreValues: [
    {
      title: "Continuous Learning",
      description: "Actively strengthening core algorithms and tracking modern paradigms in applied AI and software engineering.",
      icon: "auto_stories",
      color: "#9B7BFF"
    },
    {
      title: "Creative Problem Solving",
      description: "Approaching messy real-world challenges through clean logic, step-by-step design, and scalable execution.",
      icon: "lightbulb",
      color: "#38BDF8"
    },
    {
      title: "Real-World Solutions",
      description: "Developing practical applications focused on tangible user utility, clean accessibility, and functional value.",
      icon: "construction",
      color: "#EAF1FF"
    }
  ]
};

export const skillsCategories = {
  programmingLanguages: {
    title: "Programming Languages",
    subtitle: "CORE_SYNTAX",
    description: "Core expressive languages for algorithmic implementation, script automation, and AI workflows.",
    skills: [
      { name: "Python (Primary Focus)", primary: true, icon: "code" },
      { name: "C Language", primary: false, icon: "data_object" },
      { name: "JavaScript", primary: false, icon: "javascript" }
    ]
  },
  frontendDevelopment: {
    title: "Frontend Development",
    subtitle: "USER_INTERFACE",
    description: "Crafting responsive, accessible user interfaces with semantic structuring and component workflows.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React" },
      { name: "Responsive Layouts" }
    ]
  },
  developerTools: {
    title: "Developer Tools",
    description: "Version control and development environments for clean project tracking.",
    skills: ["Git", "GitHub", "VS Code"]
  },
  coreConcepts: {
    title: "Core Concepts",
    description: "Foundations that power scalable computational reasoning and structured code.",
    skills: ["Data Structures", "Algorithms", "Problem Solving"]
  },
  areasOfInterest: {
    title: "Areas of Interest",
    description: "Specialized academic trajectories driving my long-term engineering focus.",
    skills: [
      { name: "Artificial Intelligence", highlight: "purple" },
      { name: "Machine Learning", highlight: "cyan" },
      { name: "Data Science", highlight: "neutral" }
    ]
  },
  currentlyExploring: {
    title: "Currently Exploring",
    description: "Active self-study expansion beyond the current curriculum semester.",
    tags: [
      { name: "Backend Development", color: "cyan" },
      { name: "Databases (SQL & DBMS)", color: "neutral" },
      { name: "AI Integration", color: "purple" }
    ]
  }
};

export const projects = [
  {
    id: "studymate-ai",
    title: "StudyMate AI",
    category: "AI & EdTech",
    filterKey: "ai-edtech",
    badgeText: "Education Technology",
    isFeatured: true,
    fileMockup: "studymate_core.py",
    mockupModule: "MODULE: ACTIVE",
    mockupQuery: '> query: "Generate concise summary of Neural Network activation functions"',
    mockupResults: [
      "• Structured summary generated across ReLU, Sigmoid, and Softmax.",
      "• Organized revision cards prepared."
    ],
    mockupFooter: "MODE: INTERACTIVE · STATUS: READY",
    tags: ["Education Technology", "AI Concepts", "Web Development"],
    shortDescription: "A study-assistance project exploring ways to make learning more organized and engaging through digital study tools, intelligent note organization, and structured prompt flows.",
    stage: "CONCEPT & PROTOTYPE",
    technologies: ["JavaScript", "Web Development", "AI Concepts"],
    details: {
      problem: "Students frequently struggle to consolidate fragmented notes across coursework and extract quick revision cards before exams.",
      solution: "StudyMate AI explores interactive study structuring where learners can generate concise conceptual summaries, organized flashcards, and prompt flows.",
      features: [
        "Topic-based revision card generation",
        "Structured summaries for algorithmic and AI concepts",
        "Clean, focused study interface designed for minimal distraction"
      ]
    },
    githubUrl: "https://github.com/NetravathiPatil",
    demoUrl: null
  },
  {
    id: "online-grocery-store",
    title: "Online Grocery Store",
    category: "Web Apps",
    filterKey: "web-apps",
    badgeText: "Web Development",
    isFeatured: true,
    fileMockup: "grocery_store_app.js",
    mockupModule: "CART_ITEMS: 03",
    mockupItems: [
      { name: "Fresh Fruit Box", price: "₹ 120" },
      { name: "Organic Milk", price: "₹ 65" }
    ],
    mockupFooter: "STATE: RESPONSIVE DOM · CHECKOUT READY",
    tags: ["Web Development", "JavaScript", "UI/UX"],
    shortDescription: "A web application concept for exploring products, managing a shopping cart, and creating a convenient online grocery shopping experience.",
    stage: "FULL PROTOTYPE",
    technologies: ["React", "JavaScript", "CSS"],
    details: {
      problem: "Customers need an intuitive, responsive interface to browse everyday grocery staples and track cart totals seamlessly.",
      solution: "Engineered a responsive web store with item catalogs, live quantity updates, price computation, and cart management.",
      features: [
        "Categorized grocery catalog with search and filter",
        "Real-time cart state with item counter and subtotal calculation",
        "Accessible checkout layout built with responsive CSS"
      ]
    },
    githubUrl: "https://github.com/NetravathiPatil",
    demoUrl: null
  },
  {
    id: "milk-dairy-management",
    title: "Milk Dairy Management System",
    category: "Management",
    filterKey: "management",
    icon: "inventory_2",
    tags: ["Web Application", "Data Management"],
    shortDescription: "A management application designed around organizing dairy-related records and operational workflows.",
    stage: "OPERATIONAL TOOL",
    technologies: ["React", "JavaScript", "Web Development"],
    details: {
      problem: "Manual record-keeping in local dairy operations leads to tallying errors and slow accounting reconciliation.",
      solution: "Created an operational dashboard to track daily milk collection, farmer and customer entries, and record summaries.",
      features: [
        "Daily milk collection intake logs",
        "Customer and supplier profile records",
        "Automated summary calculations for operational oversight"
      ]
    },
    githubUrl: "https://github.com/NetravathiPatil",
    demoUrl: null
  },
  {
    id: "ipl-ticket-booking",
    title: "IPL Ticket Booking System",
    category: "Web Apps",
    filterKey: "web-apps",
    icon: "confirmation_number",
    tags: ["Web Development", "UI Design"],
    shortDescription: "A ticket-booking interface project focused on browsing matches and creating an intuitive booking experience.",
    stage: "SPORTS UI",
    technologies: ["React", "JavaScript", "CSS"],
    details: {
      problem: "Sports fans require a straightforward and engaging way to check match schedules and select ticket tiers.",
      solution: "Designed a cricket match fixture and seating tier selection interface with responsive booking flow.",
      features: [
        "Match fixture schedule with venue details",
        "Interactive seating stand selection",
        "Dynamic ticket counter and pricing checkout preview"
      ]
    },
    githubUrl: "https://github.com/NetravathiPatil",
    demoUrl: null
  },
  {
    id: "my-todo-list",
    title: "My To-Do List",
    category: "Productivity",
    filterKey: "productivity",
    icon: "checklist",
    tags: ["HTML", "CSS", "JavaScript"],
    shortDescription: "A lightweight productivity application for organizing daily tasks and tracking completed activities.",
    stage: "PRODUCTIVITY",
    technologies: ["HTML", "CSS", "JavaScript"],
    details: {
      problem: "Daily study and programming tasks can quickly pile up without a fast, lightweight organization tool.",
      solution: "Constructed a straightforward task management website supporting instant creation, deletion, and status toggles.",
      features: [
        "Quick task entry and completion toggles",
        "Status filters (All, Active, Completed)",
        "Local browser persistence for reliable task retention"
      ]
    },
    githubUrl: "https://github.com/NetravathiPatil",
    demoUrl: null
  },
  {
    id: "personal-e-portfolio",
    title: "Personal E-Portfolio",
    category: "Web Apps",
    filterKey: "web-apps",
    icon: "web",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    shortDescription: "A responsive personal portfolio presenting my technical skills, engineering journey, and projects.",
    stage: "ACTIVE BUILD",
    technologies: ["React", "CSS", "JavaScript"],
    details: {
      problem: "Students need a professional, unified digital presence to showcase academic credentials, projects, and contact channels.",
      solution: "Designed and built this responsive portfolio following the Cosmic Obsidian Stitch design system.",
      features: [
        "Responsive bento grid and glassmorphism UI",
        "Interactive category project filtering and modal inspection",
        "Verified academic credentials with 9.19 / 10 CGPA"
      ]
    },
    githubUrl: "https://github.com/NetravathiPatil",
    demoUrl: "#home"
  }
];

export const educationData = [
  {
    id: "btech-reva",
    title: "Bachelor of Technology in Computer Science and Engineering",
    specialization: "Specialization: Artificial Intelligence and Machine Learning",
    institution: "REVA UNIVERSITY, BENGALURU",
    period: "Second Year (2023 – Present)",
    distinction: "Academic Distinction: CGPA 9.19 / 10",
    description: "Developing a rigorous foundation in algorithms, system architecture, probability, and intelligent model principles through laboratory experiments and semester coursework.",
    coursework: [
      "Data Structures & Algorithms",
      "Foundations of AI & ML",
      "Discrete Mathematics",
      "Object Oriented Programming",
      "Python & C Laboratory"
    ]
  },
  {
    id: "puc-science",
    title: "Pre-University (PCMB / Science Track)",
    specialization: "Higher Secondary Education",
    institution: "Karnataka, India",
    period: "Completed",
    distinction: null,
    description: "Built rigorous analytical competence across advanced mathematics, physics, chemistry, and computational logic."
  }
];

export const certificationsData = [
  {
    id: "cert-wadhwani",
    title: "Innovation and Entrepreneurship",
    issuer: "Wadhwani Foundation",
    credentialTag: "CREDENTIAL: WF-IE",
    icon: "workspace_premium",
    color: "#9B7BFF",
    description: "Developed practical methodologies for opportunity discovery, creative problem solving, risk assessment, and entrepreneurial product thinking."
  },
  {
    id: "cert-ibm",
    title: "Data Science and Data Analysis Using Python",
    issuer: "IBM",
    credentialTag: "ISSUER: IBM COGNITIVE",
    icon: "query_stats",
    color: "#38BDF8",
    description: "Hands-on data exploration, statistical analysis, visualization workflows, and structured Python libraries for scientific analytics."
  },
  {
    id: "cert-python-dsa",
    title: "Programming, Data Structures and Algorithms Using Python",
    issuer: "Foundational Certification",
    credentialTag: "DOMAIN: DSA PYTHON",
    icon: "account_tree",
    color: "#9B7BFF",
    description: "Rigorous analysis of asymptotic complexity, sorting/searching efficiency, memory structures, and algorithmic formulation in Python."
  }
];

export const roadmapMilestones = [
  {
    num: "01",
    title: "Strengthen Python and Algorithms",
    description: "Consistently solving algorithmic challenges with optimal time and space tradeoffs.",
    icon: "terminal",
    color: "#9B7BFF"
  },
  {
    num: "02",
    title: "Explore Advanced AI/ML Concepts",
    description: "Deepening comprehension of neural models, loss functions, optimization, and evaluation frameworks.",
    icon: "neurology",
    color: "#38BDF8"
  },
  {
    num: "03",
    title: "Build Scalable Applications",
    description: "Architecting responsive web applications with robust component patterns and clean UX.",
    icon: "web",
    color: "#9B7BFF"
  },
  {
    num: "04",
    title: "Learn Backend Engineering & Databases",
    description: "Mastering relational schemas, SQL queries, RESTful architecture, and asynchronous server workflows.",
    icon: "database",
    color: "#38BDF8"
  },
  {
    num: "05",
    title: "Develop Practical AI-Powered Projects",
    description: "Deploying applied machine learning solutions that solve real community and productivity needs.",
    icon: "psychology",
    color: "#9B7BFF"
  },
  {
    num: "06",
    title: "Collaborate Through Hackathons",
    description: "Partnering in collaborative developer events, collegiate challenges, and open-source contributions.",
    icon: "groups",
    color: "#38BDF8"
  }
];
