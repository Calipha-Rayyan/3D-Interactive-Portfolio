// ============================================================
// ALL personal content lives here. Components only read from it.
// ============================================================

export const profile = {
  name: 'Muhammad Rayyan Bhatti',
  monogram: 'MRB',
  tagline: 'Computer Science Student | Aspiring Front-End Developer | AI & Web Enthusiast',
  intro:
    'I am a BS Computer Science student at Quaid-i-Azam University, Islamabad, interested in building responsive web applications and exploring artificial intelligence. I enjoy learning through practical projects and turning ideas into useful digital experiences.',
  interests: [
    'Front-end development',
    'React',
    'Modern UI design',
    'Artificial intelligence',
    'Machine learning',
    'Robotics',
    'Full-stack web development',
  ],
  primaryCta: { label: 'Explore My Work', href: '#projects' },
  secondaryCta: { label: "Let's Connect", href: '#contact' },
};

export const about = {
  paragraphs: [
    'I am pursuing a BS in Computer Science, and I learn best by building. Each project is a chance to practise the full cycle of an idea: planning, designing, coding, testing, and explaining what I built.',
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
    period: 'Started 2023',
    status: 'Currently pursuing',
  },
];

// Only skills the owner has confirmed. No ratings, no years of experience.
export const skillGroups = [
  {
    category: 'Front-End Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'SQL'],
  },
  {
    category: 'Databases & Tools',
    items: ['MongoDB', 'Git', 'GitHub'],
  },
  {
    category: 'AI & Technical Interests',
    items: ['Machine learning', 'Artificial intelligence', 'Robotics'],
    note: 'Areas I am studying and exploring. These are interests, not claimed proficiencies.',
  },
];

// Projects taken from the owner's public GitHub account (Calipha-Rayyan).
// Repository links were checked. No live demo was found, so demoUrl stays null.
export const projects = [
  {
    title: 'Quill: MCP Blog Platform',
    initials: 'Q',
    category: 'AI & Full-Stack',
    preview: 'blog',
    description:
      'A blogging platform that AI agents can manage through MCP tools. It has a React dashboard, a public blog, analytics, and SQLite storage, and it can be deployed with Docker.',
    technologies: ['React', 'MCP', 'SQLite', 'Docker'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Quill-MCP-Blog-Platform',
    demoUrl: null,
  },
  {
    title: 'Personal Knowledge Base (MCP)',
    initials: 'K',
    category: 'AI & Full-Stack',
    preview: 'knowledge',
    description:
      'A multi-user document search app. Users upload files and search them by meaning with vector search, and an MCP server exposes the same search to AI clients.',
    technologies: ['React', 'FastAPI', 'Qdrant', 'FastMCP'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Personal-Knowledge-Base-MCP',
    demoUrl: null,
  },
  {
    title: 'FORESIGHT Nexus',
    initials: 'F',
    category: 'Data & Analytics',
    preview: 'analytics',
    description:
      'A demand and inventory analytics dashboard. It loads sales data, forecasts demand with several models, and recommends reorder points and quantities.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'scikit-learn', 'Plotly'],
    repoUrl: 'https://github.com/Calipha-Rayyan/Foresight-Nexus',
    demoUrl: null,
  },
  {
    title: 'NourishAI Pakistan',
    initials: 'N',
    category: 'AI Application',
    preview: 'planner',
    description:
      'An AI meal planner that builds a personalized 7-day plan from dietary needs, allergies, goals, and budget. It supports user accounts and saved plans.',
    technologies: ['Python', 'Streamlit', 'Groq API'],
    repoUrl: 'https://github.com/Calipha-Rayyan/NourishAI-Pakistan',
    demoUrl: null,
  },
];

export const contact = {
  linkedin: 'https://www.linkedin.com/in/calipha-rayyan',
  github: 'https://github.com/Calipha-Rayyan',
  whatsapp: {
    // International format without the leading 0: 03120551052 -> 923120551052
    number: '923120551052',
    message: 'Assalam-o-Alaikum Rayyan, I visited your portfolio and would like to connect.',
  },
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];