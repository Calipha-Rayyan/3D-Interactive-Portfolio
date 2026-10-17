// ============================================================
// ALL personal content lives here. Components only read from it.
// Verified records for Muhammad Rayyan Bhatti (Calipha-Rayyan-9)
// ============================================================

export const profile = {
  name: 'Muhammad Rayyan Bhatti',
  monogram: 'MRB',
  role: 'Front-End Developer & CS Student',
  tagline: 'BS Computer Science Student | Aspiring Front-End Developer | AI & Web Enthusiast',
  intro:
    'I am a BS Computer Science student at Quaid-i-Azam University, Islamabad (2023–present), passionate about engineering responsive, accessible web applications and exploring artificial intelligence. I learn by building practical software—from interactive front-ends to MCP-native agent platforms and RAG pipelines.',
  location: 'Islamabad, Pakistan',
  status: 'Open to internships & frontend collaborations',
  interests: [
    'Front-End Development',
    'React & Modern JavaScript',
    'Interactive UI / 3D Experiences',
    'Model Context Protocol (MCP)',
    'RAG & Vector Search',
    'Machine Learning Pipelines',
    'Full-Stack Architecture',
  ],
  primaryCta: { label: 'Explore My Work', href: '#projects' },
  secondaryCta: { label: "Let's Connect", href: '#contact' },
};

export const about = {
  paragraphs: [
    'I am currently pursuing a BS in Computer Science at Quaid-i-Azam University, Islamabad (started 2023). My approach to computer science is driven by hands-on engineering: taking an idea through architecture, user interface design, implementation, testing, and real-world deployment.',
    'Through competitive fellowships such as the Zeppelin Labs AI Fellowship and hackathons like the Pak Angels Generative AI Hackathon, I have led developer teams to build AI-powered solutions, MCP-native interfaces, and data-driven web applications.',
  ],
  strengths: [
    'Building modular, responsive, accessible React interfaces',
    'Designing intuitive user experiences with modern CSS and subtle spatial depth',
    'Integrating AI capabilities (MCP tools, vector search, RAG, LLM APIs) into real products',
    'Leading collaborative projects with clear Git workflows, testing, and documentation',
  ],
  learningGoals: [
    'Deepen advanced React architecture, performance profiling, and state management',
    'Master creative front-end engineering, WebGL, and fluid spatial interactions',
    'Engineer production-ready AI interfaces where agents act as conversational UI layers',
  ],
};

export const education = [
  {
    degree: 'BS Computer Science',
    institution: 'Quaid-i-Azam University, Islamabad',
    period: '2023 – Present',
    status: 'Currently Pursuing (Undergraduate)',
    focus: 'Data Structures, Algorithms, Software Engineering, OOP, Web Technologies & Database Systems',
  },
];

export const experienceHighlights = [
  {
    role: 'Capstone Team Lead — Zeppelin Labs AI Fellowship',
    organization: 'Zeppelin Labs',
    badge: 'AI & Generative AI Fellowship',
    description:
      'Led the architecture and delivery of Quill, an MCP-native blogging platform connecting AI agents (Claude.ai) to a secure CMS backend, and built an end-to-end RAG-based AI Study Companion using Qdrant vector retrieval.',
  },
  {
    role: 'Team Leader — Generative AI Training & Hackathon',
    organization: 'Pak Angels',
    badge: 'Hackathon Leadership',
    description:
      'Coordinated the team to conceptualize, develop, test, and deploy NourishAI Pakistan—a personalized, budget-aware 7-day AI nutrition and meal planning platform.',
  },
];

// Confirmed skill categorizations. No arbitrary proficiency percentages or fake meters.
export const skillGroups = [
  {
    category: 'Front-End Development',
    accent: 'cyan',
    summary: 'Core technologies for building accessible, responsive, high-performance web interfaces.',
    items: [
      'React',
      'JavaScript (ES6+)',
      'HTML5 & Semantic Markup',
      'CSS3 & Modern CSS',
      'Tailwind CSS',
      'Responsive Web Design',
      'Accessibility (WCAG)',
      'Vite & Tooling',
    ],
  },
  {
    category: 'Programming Languages',
    accent: 'mint',
    summary: 'Languages used across university coursework, algorithmic problem solving, and projects.',
    items: ['Python', 'C++', 'SQL', 'JavaScript', 'Dart'],
  },
  {
    category: 'Backend, Databases & AI Tooling',
    accent: 'indigo',
    summary: 'Server frameworks, vector databases, and protocols used to build full-stack AI products.',
    items: [
      'FastAPI',
      'Node.js',
      'Model Context Protocol (MCP)',
      'FastMCP',
      'Qdrant Vector DB',
      'SQLite',
      'MongoDB',
      'Docker',
      'Git & GitHub',
      'REST APIs',
    ],
  },
  {
    category: 'Applied Technical Interests',
    accent: 'violet',
    summary: 'Active exploration areas grounded in university studies and practical projects.',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'Machine Learning Workflows',
      'AI Agent Architectures',
      'Predictive Analytics',
      'Streamlit Applications',
    ],
    note: 'These represent verified areas of project application and continuous learning.',
  },
];

// Real projects verified against public GitHub repositories and public LinkedIn project posts.
export const projects = [
  {
    id: 'quill-mcp-blog',
    title: 'Quill: MCP-Native Blogging Platform',
    shortTitle: 'Quill MCP Platform',
    category: 'AI & Full-Stack / MCP',
    previewType: 'screenshot',
    image: '/images/projects/quill-mcp-blog.jpg',
    imageAlt: 'Quill MCP-Native Blogging Platform modern dashboard showing post management and Claude AI integration',
    description:
      'An MCP-native blogging platform designed for AI agents (such as Claude) to manage blog posts, publishing, scheduling, SEO, and analytics through natural-language commands. Built as the Zeppelin Labs Fellowship Capstone Project featuring a React dashboard, PKCE OAuth authentication, and a unified SQLite backend.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MCP', 'OAuth / PKCE', 'SQLite', 'Docker'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Quill-MCP-Blog-Platform',
    demoUrl: null,
    highlights: [
      '10 custom MCP tools for autonomous AI blog management',
      'PKCE-based OAuth flow and user ownership isolation',
      'Tested end-to-end with Claude.ai connector over Cloudflare HTTPS tunnels',
    ],
    accent: 'cyan',
    sourceNote: 'Verified via public LinkedIn post & Zeppelin Labs Capstone repository.',
  },
  {
    id: 'personal-knowledge-base',
    title: 'Personal Knowledge Base (MCP)',
    shortTitle: 'Knowledge Base MCP',
    category: 'AI & Full-Stack / Vector Search',
    previewType: 'screenshot',
    image: '/images/projects/personal-knowledge-base-mcp.jpg',
    imageAlt: 'Personal Knowledge Base MCP sign-in and document search user interface',
    description:
      'A multi-user personal knowledge base powered by semantic search, Qdrant vector retrieval, FastAPI, and FastMCP. Users can securely upload documents and search them by semantic meaning, while an integrated FastMCP server allows AI assistants to query the stored knowledge base.',
    technologies: ['React', 'FastAPI', 'Qdrant Vector DB', 'FastMCP', 'Python', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Personal-Knowledge-Base-MCP',
    demoUrl: null,
    highlights: [
      'Natural-language semantic vector retrieval with Qdrant',
      'FastMCP tools enabling AI clients to perform document searches',
      'Protected routes, document processing feedback, and isolated user accounts',
    ],
    accent: 'mint',
    sourceNote: 'Verified via public LinkedIn post & GitHub repository.',
  },
  {
    id: 'nourish-ai',
    title: 'NourishAI Pakistan',
    shortTitle: 'NourishAI',
    category: 'Generative AI / Nutrition Tech',
    previewType: 'screenshot',
    image: '/images/projects/nourish-ai-pakistan.jpg',
    imageAlt: 'NourishAI Pakistan live web application showing account login and personalized meal planning',
    description:
      'An AI-powered personalized nutrition and meal-planning solution built for the Pak Angels Generative AI Hackathon. Generates realistic, tailored 7-day meal plans considering Pakistani cultural dietary habits, allergies, health conditions, fitness goals, and PKR budget constraints.',
    technologies: ['Python', 'Streamlit', 'Groq API', 'Llama 3', 'Generative AI'],
    repoUrl: 'https://github.com/Calipha-Rayyan/NourishAI-Pakistan',
    demoUrl: 'https://nourishai-studio.streamlit.app/',
    highlights: [
      'Verified live interactive Streamlit web application',
      'PKR budget-aware and Pakistani cuisine-specific nutritional logic',
      'Plan saving, download options, and flexible 1-day to 1-month planning',
    ],
    accent: 'mint',
    sourceNote: 'Verified via public LinkedIn post, GitHub repository, and live Streamlit deployment.',
  },
  {
    id: 'ai-study-companion',
    title: 'AI Study Companion',
    shortTitle: 'AI Study Companion',
    category: 'EdTech / RAG Architecture',
    previewType: 'screenshot',
    image: '/images/projects/ai-study-companion.jpg',
    imageAlt: 'AI Study Companion interface displaying structured study plan generation from uploaded notes',
    description:
      'An AI-assisted study planner that transforms uploaded lecture notes or syllabus documents into structured, exam-oriented study schedules using Retrieval-Augmented Generation (RAG). Built during the Zeppelin Labs AI & Generative AI Fellowship.',
    technologies: ['Python', 'FastAPI', 'Sentence Transformers', 'Qdrant Cloud', 'RAG', 'JavaScript'],
    repoUrl: 'https://github.com/Calipha-Rayyan/AI-Study-Companion',
    demoUrl: null,
    highlights: [
      'Document chunking, Sentence Transformers embeddings, and Qdrant Cloud storage',
      'Retrieval-Augmented Generation (RAG) producing grounded study schedules',
      'Interactive web interface for document uploads and plan visualization',
    ],
    accent: 'indigo',
    sourceNote: 'Verified via public LinkedIn post & Zeppelin Labs fellowship repository.',
  },
  {
    id: 'flight-delay-predictor',
    title: 'Airline Flight Delay Predictor',
    shortTitle: 'Flight Delay Predictor',
    category: 'Machine Learning & Data Science',
    previewType: 'screenshot',
    image: '/images/projects/flight-delay-predictor.jpg',
    imageAlt: 'Airline Flight Delay Predictor interactive Streamlit web application with modern dark theme',
    description:
      'An end-to-end machine learning project predicting airline departure delays (15+ min) using pre-flight data. Features extensive data cleaning, feature engineering, model benchmarking (Logistic Regression, Random Forest, HistGradientBoosting), and an interactive dark-themed Streamlit application with delay probability estimates.',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Plotly', 'ML'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Airline-Flight-Delay-Analysis',
    demoUrl: null,
    highlights: [
      'Trained on 2015 US DOT flight records with rigorous pre-flight feature engineering',
      'Model comparison and hyperparameter tuning across ensemble classifiers',
      'Interactive UI providing flight delay risk estimates and flight summaries',
    ],
    accent: 'violet',
    sourceNote: 'Verified via public LinkedIn post & GitHub repository.',
  },
  {
    id: 'foresight-nexus',
    title: 'FORESIGHT Nexus',
    shortTitle: 'FORESIGHT Nexus',
    category: 'Predictive Analytics & Inventory Intelligence',
    previewType: 'designed-preview',
    image: '/images/projects/foresight-nexus.svg',
    imageAlt: 'FORESIGHT Nexus demand forecasting and inventory intelligence preview showing forecast studio and charts',
    description:
      'An AI-powered demand forecasting and inventory intelligence platform engineered for predictive analytics, stockout risk detection, and automated replenishment recommendations. Combines time-series models (ARIMA), machine learning classifiers, and DuckDB analytics within a Streamlit command center.',
    technologies: ['Python', 'Streamlit', 'DuckDB', 'scikit-learn', 'ARIMA', 'Plotly'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Foresight-Nexus',
    demoUrl: null,
    highlights: [
      'Dual-model ensemble demand forecasting (ARIMA + Random Forest)',
      'Predictive stockout risk detection and automated reorder point calculation',
      'Modular command center architecture with DuckDB & SQLite persistence',
    ],
    accent: 'cyan',
    sourceNote: 'Verified via public GitHub repository (Calipha-Rayyan/Foresight-Nexus). Visual asset is a designed UI preview based on repo architecture and SVG branding.',
  },
];

export const contact = {
  name: 'Muhammad Rayyan Bhatti',
  whatsapp: {
    number: '923120551052',
    displayNumber: '03120551052',
    internationalDisplay: '+92 312 0551052',
    message: 'Assalam-o-Alaikum Rayyan, I visited your portfolio and would like to connect.',
    url: 'https://wa.me/923120551052?text=Assalam-o-Alaikum%20Rayyan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
  },
  linkedin: {
    label: 'LinkedIn Profile',
    username: 'calipha-rayyan',
    url: 'https://www.linkedin.com/in/calipha-rayyan',
  },
  github: {
    label: 'GitHub Profile',
    username: 'Calipha-Rayyan',
    url: 'https://github.com/Calipha-Rayyan',
  },
  location: 'Islamabad, Pakistan',
  availability: 'Available for front-end roles, internships, and project collaborations',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];