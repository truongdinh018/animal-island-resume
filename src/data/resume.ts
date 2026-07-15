/** Edit this file to update resume content. */

export const profile = {
  name: 'Truong Dinh',
  title: 'Software Engineer · Odoo & AI',
  location: 'Vietnam',
  email: 'truongdinh@xboss.com',
  github: 'https://github.com/truongdinh018',
  githubLabel: 'truongdinh018',
  /** Replace `public/avatar.jpg` with your own photo anytime. */
  avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
  summary:
    'Build ERP and AI systems on Odoo — RAG chat, document parsing, and agent tooling that make product teams ship faster.',
  tagline: 'Welcome to my island! 🏝️',
};

export const skills: { name: string; level: number; color: TagColor }[] = [
  { name: 'Python', level: 90, color: 'app-teal' },
  { name: 'Odoo 17', level: 88, color: 'app-blue' },
  { name: 'TypeScript / React', level: 75, color: 'purple' },
  { name: 'RAG / LLM', level: 82, color: 'app-green' },
  { name: 'PostgreSQL', level: 80, color: 'app-orange' },
  { name: 'Docker / DevOps', level: 70, color: 'app-yellow' },
];

export const experiences = [
  {
    company: 'XBoss',
    role: 'Software Engineer',
    period: 'Present',
    color: 'app-teal' as const,
    points: [
      'Ship AI features on Odoo 17: RAG chat, citations, quota policy, document ingest ACL.',
      'Integrate parsing pipelines (e.g. MinerU) and channel bots for internal knowledge.',
      'Own end-to-end delivery from module design to production config.',
    ],
  },
];

export const projects = [
  {
    name: 'AI RAG Core',
    blurb: 'Chat UI with citations, knowledge ingest, and policy controls inside Odoo.',
    tags: ['Odoo', 'RAG', 'OWL'],
    color: 'app-blue' as const,
  },
  {
    name: 'AI Channels',
    blurb: 'Multi-channel AI assistants with quota and routing policies.',
    tags: ['Python', 'Bots', 'Policy'],
    color: 'app-green' as const,
  },
  {
    name: 'Document Parse Extend',
    blurb: 'ACL-aware document parsing pipeline for enterprise knowledge bases.',
    tags: ['Ingest', 'ACL', 'PDF'],
    color: 'app-orange' as const,
  },
];

export const education = [
  {
    school: 'Your University',
    degree: 'Your Degree — edit in src/data/resume.ts',
    period: 'YYYY – YYYY',
  },
];

export const contactFaq = [
  {
    question: 'What kind of work are you looking for?',
    answer:
      'Odoo customization, AI/RAG product features, and full-stack tooling around ERP + LLMs.',
  },
  {
    question: 'How can I reach you?',
    answer: `Email ${profile.email} or open an issue / DM via GitHub @${profile.githubLabel}.`,
  },
];

type TagColor =
  | 'default'
  | 'app-pink'
  | 'purple'
  | 'app-blue'
  | 'app-yellow'
  | 'app-orange'
  | 'app-teal'
  | 'app-green'
  | 'app-red'
  | 'lime-green'
  | 'yellow-green'
  | 'brown'
  | 'warm-peach-pink';
