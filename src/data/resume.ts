import type { Lang } from '../i18n/messages';

export type TagColor =
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

type LocalizedResume = {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    github: string;
    githubLabel: string;
    avatar: string;
    summary: string;
    tagline: string;
    about: string[];
    focus: string[];
  };
  skills: { name: string; level: number; color: TagColor }[];
  experiences: {
    company: string;
    role: string;
    period: string;
    color: TagColor;
    points: string[];
  }[];
  projects: {
    name: string;
    blurb: string;
    tags: string[];
    color: TagColor;
  }[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
  contactFaq: {
    question: string;
    answer: string;
  }[];
};

const shared = {
  name: 'Truong Dinh',
  email: 'truongdinh@xboss.com',
  github: 'https://github.com/truongdinh018',
  githubLabel: 'truongdinh018',
  avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
  skills: [
    { name: 'Python', level: 90, color: 'app-teal' as const },
    { name: 'Odoo 17', level: 88, color: 'app-blue' as const },
    { name: 'TypeScript / React', level: 75, color: 'purple' as const },
    { name: 'RAG / LLM', level: 82, color: 'app-green' as const },
    { name: 'PostgreSQL', level: 80, color: 'app-orange' as const },
    { name: 'Docker / DevOps', level: 70, color: 'app-yellow' as const },
  ],
};

const resumes: Record<Lang, LocalizedResume> = {
  en: {
    profile: {
      ...shared,
      title: 'Software Engineer · Odoo & AI',
      location: 'Vietnam',
      summary:
        'Build ERP and AI systems on Odoo — RAG chat, document parsing, and agent tooling that make product teams ship faster.',
      tagline: 'Welcome to my island! 🏝️',
      about: [
        'I design and ship Odoo modules and AI product surfaces — from RAG chat with citations to document ingest and channel bots.',
        'I care about clear APIs, safe defaults, and UIs that feel approachable — the kind of tools teammates actually enjoy opening every day.',
      ],
      focus: ['ERP', 'AI Agents', 'Knowledge Bases', 'DX'],
    },
    skills: shared.skills,
    experiences: [
      {
        company: 'XBoss',
        role: 'Software Engineer',
        period: 'Present',
        color: 'app-teal',
        points: [
          'Ship AI features on Odoo 17: RAG chat, citations, quota policy, document ingest ACL.',
          'Integrate parsing pipelines (e.g. MinerU) and channel bots for internal knowledge.',
          'Own end-to-end delivery from module design to production config.',
        ],
      },
    ],
    projects: [
      {
        name: 'AI RAG Core',
        blurb:
          'Chat UI with citations, knowledge ingest, and policy controls inside Odoo.',
        tags: ['Odoo', 'RAG', 'OWL'],
        color: 'app-blue',
      },
      {
        name: 'AI Channels',
        blurb: 'Multi-channel AI assistants with quota and routing policies.',
        tags: ['Python', 'Bots', 'Policy'],
        color: 'app-green',
      },
      {
        name: 'Document Parse Extend',
        blurb:
          'ACL-aware document parsing pipeline for enterprise knowledge bases.',
        tags: ['Ingest', 'ACL', 'PDF'],
        color: 'app-orange',
      },
    ],
    education: [
      {
        school: 'Your University',
        degree: 'Your Degree — edit in src/data/resume.ts',
        period: 'YYYY – YYYY',
      },
    ],
    contactFaq: [
      {
        question: 'What kind of work are you looking for?',
        answer:
          'Odoo customization, AI/RAG product features, and full-stack tooling around ERP + LLMs.',
      },
      {
        question: 'How can I reach you?',
        answer: `Email ${shared.email} or open an issue / DM via GitHub @${shared.githubLabel}.`,
      },
    ],
  },
  vi: {
    profile: {
      ...shared,
      title: 'Kỹ sư phần mềm · Odoo & AI',
      location: 'Việt Nam',
      summary:
        'Xây hệ thống ERP và AI trên Odoo — chat RAG, phân tích tài liệu và công cụ agent giúp team giao hàng nhanh hơn.',
      tagline: 'Chào mừng đến đảo của mình! 🏝️',
      about: [
        'Tôi thiết kế và phát triển module Odoo cùng sản phẩm AI — từ chat RAG có trích dẫn đến ingest tài liệu và bot kênh.',
        'Tôi chú trọng API rõ ràng, mặc định an toàn và giao diện dễ dùng — loại công cụ đồng nghiệp thực sự muốn mở mỗi ngày.',
      ],
      focus: ['ERP', 'AI Agents', 'Kho tri thức', 'DX'],
    },
    skills: shared.skills,
    experiences: [
      {
        company: 'XBoss',
        role: 'Kỹ sư phần mềm',
        period: 'Hiện tại',
        color: 'app-teal',
        points: [
          'Phát triển tính năng AI trên Odoo 17: chat RAG, citations, chính sách quota, ACL ingest tài liệu.',
          'Tích hợp pipeline parse (ví dụ MinerU) và bot kênh cho tri thức nội bộ.',
          'Làm chủ vòng đời từ thiết kế module đến cấu hình production.',
        ],
      },
    ],
    projects: [
      {
        name: 'AI RAG Core',
        blurb:
          'Giao diện chat có citations, ingest tri thức và kiểm soát policy trong Odoo.',
        tags: ['Odoo', 'RAG', 'OWL'],
        color: 'app-blue',
      },
      {
        name: 'AI Channels',
        blurb: 'Trợ lý AI đa kênh với định tuyến và chính sách quota.',
        tags: ['Python', 'Bots', 'Policy'],
        color: 'app-green',
      },
      {
        name: 'Document Parse Extend',
        blurb:
          'Pipeline parse tài liệu có ACL cho kho tri thức doanh nghiệp.',
        tags: ['Ingest', 'ACL', 'PDF'],
        color: 'app-orange',
      },
    ],
    education: [
      {
        school: 'Trường đại học của bạn',
        degree: 'Bằng cấp — sửa trong src/data/resume.ts',
        period: 'YYYY – YYYY',
      },
    ],
    contactFaq: [
      {
        question: 'Bạn đang hướng tới công việc như thế nào?',
        answer:
          'Tùy biến Odoo, tính năng AI/RAG và tooling full-stack quanh ERP + LLM.',
      },
      {
        question: 'Liên hệ với bạn thế nào?',
        answer: `Email ${shared.email} hoặc nhắn qua GitHub @${shared.githubLabel}.`,
      },
    ],
  },
};

export function getResume(lang: Lang) {
  return resumes[lang];
}

/** @deprecated use getResume(lang) — kept for import paths during migrate */
export const profile = resumes.en.profile;
export const skills = resumes.en.skills;
export const experiences = resumes.en.experiences;
export const projects = resumes.en.projects;
export const education = resumes.en.education;
export const contactFaq = resumes.en.contactFaq;
