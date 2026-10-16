// ============================================================
// ALL personal content lives here. Components only read from it.
// Items marked PENDING must be verified by the owner before
// they are shown as final.
// ============================================================

export const profile = {
  name: 'Muhammad Rayyan Bhatti',
  monogram: 'MRB',
  tagline:
    'Computer Science Student | Aspiring Front-End Developer | AI & Web Enthusiast',
  intro:
    'I am a BS Computer Science student at Quaid-i-Azam University, Islamabad, interested in building responsive web applications and exploring artificial intelligence. I enjoy learning through practical projects, solving technical problems, and turning ideas into useful digital experiences. My goal is to strengthen my front-end development skills and build projects that demonstrate both creativity and functionality.',
  interests: [
    'Front-end development',
    'React',
    'Modern UI design',
    'Artificial intelligence',
    'Machine learning',
    'Robotics',
    'Full-stack web development',
  ],
  primaryCta: { label: 'View projects', href: '#projects' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
};

export const about = {
  paragraphs: [
    'I am currently pursuing a BS in Computer Science, and I learn best by building. Each project is a chance to practise the full cycle of an idea: planning, designing, coding, testing, and explaining what I built.',
  ],
  strengths: [
    'Learning through practical projects',
    'Solving technical problems step by step',
    'Turning ideas into useful digital experiences',
  ],
  learningGoals: [
    'Deepen React and modern front-end architecture',
    'Build accessible, responsive interfaces',
    'Apply machine learning to real web products',
  ],
};

export const education = [
  {
    degree: 'BS Computer Science',
    institution: 'Quaid-i-Azam University, Islamabad',
    period: 'February 2023 – Present',
  },
];

// Only skills the owner has confirmed. No ratings, no years of experience.
export const skillGroups = [
  {
    category: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'Front-end',
    items: ['React', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Tools',
    items: ['MongoDB', 'Git', 'GitHub'],
  },
];

// Projects selected from the owner's public GitHub account (Calipha-Rayyan).
// Repository links were checked against the public repositories. No live demo
// was found in any README, so demoUrl stays null until the owner verifies one.
export const projects = [
  {
    title: 'Quill: MCP Blog Platform',
    description:
      'A blogging platform that AI agents can manage through MCP tools. It has a React dashboard, a public blog, analytics, and SQLite storage, and it can be deployed with Docker.',
    technologies: ['React', 'MCP', 'SQLite', 'Docker'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Quill-MCP-Blog-Platform',
    demoUrl: null,
    status: 'Repository verified',
  },
  {
    title: 'Personal Knowledge Base (MCP)',
    description:
      'A multi-user document search app. Users upload files and search them by meaning using vector search, and an MCP server exposes the same search to AI clients.',
    technologies: ['React', 'FastAPI', 'Qdrant', 'FastMCP'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Personal-Knowledge-Base-MCP',
    demoUrl: null,
    status: 'Repository verified',
  },
  {
    title: 'FORESIGHT Nexus',
    description:
      'A demand and inventory analytics dashboard. It loads sales data, forecasts demand with several models, and recommends reorder points and quantities.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'scikit-learn', 'Plotly'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Foresight-Nexus',
    demoUrl: null,
    status: 'Repository verified',
  },
  {
    title: 'NourishAI Pakistan',
    description:
      'An AI meal planner that builds a personalized 7-day plan from dietary needs, allergies, goals, and budget. It supports user accounts and saved plans.',
    technologies: ['Python', 'Streamlit', 'Groq API'],
    repoUrl: 'https://github.com/Calipha-Rayyan/NourishAI-Pakistan',
    demoUrl: null,
    status: 'Repository verified',
  },
];

export const contact = {
  linkedin: 'https://www.linkedin.com/in/calipha-rayyan',
  github: 'https://github.com/Calipha-Rayyan',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
