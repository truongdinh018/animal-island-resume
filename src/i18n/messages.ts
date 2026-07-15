export type Lang = 'en' | 'vi';
export type Theme = 'light' | 'dark';

type Messages = {
  brand: string;
  online: string;
  visitGithub: string;
  print: string;
  printTitle: string;
  explorerLog: string;
  explorerBlurb: string;
  tabs: {
    about: string;
    work: string;
    skills: string;
    projects: string;
    more: string;
  };
  aboutMe: string;
  skillsTitle: string;
  skillsBlurb: string;
  faq: string;
  focus: string;
  summary: string;
  experience: string;
  skills: string;
  projects: string;
  education: string;
  themeLight: string;
  themeDark: string;
  langEn: string;
  langVi: string;
};

export const ui: Record<Lang, Messages> = {
  en: {
    brand: 'Island Resume',
    online: 'Online',
    visitGithub: 'Visit GitHub',
    print: 'Print',
    printTitle: 'Print or save as PDF',
    explorerLog: 'Explorer log',
    explorerBlurb: 'Peek around the island — work, skills, and little projects.',
    tabs: {
      about: 'About',
      work: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      more: 'More',
    },
    aboutMe: 'About me',
    skillsTitle: 'Skills',
    skillsBlurb: 'How I spend most of my builder hours.',
    faq: 'FAQ',
    focus: 'Focus',
    summary: 'Summary',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    themeLight: 'Light',
    themeDark: 'Dark',
    langEn: 'EN',
    langVi: 'VI',
  },
  vi: {
    brand: 'Hồ sơ đảo',
    online: 'Trực tuyến',
    visitGithub: 'Xem GitHub',
    print: 'In',
    printTitle: 'In hoặc lưu PDF',
    explorerLog: 'Nhật ký khám phá',
    explorerBlurb: 'Dạo quanh đảo — công việc, kỹ năng và vài dự án nhỏ.',
    tabs: {
      about: 'Giới thiệu',
      work: 'Kinh nghiệm',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      more: 'Thêm',
    },
    aboutMe: 'Về tôi',
    skillsTitle: 'Kỹ năng',
    skillsBlurb: 'Phần lớn thời gian tôi dành để xây dựng những thứ này.',
    faq: 'Hỏi đáp',
    focus: 'Trọng tâm',
    summary: 'Tóm tắt',
    experience: 'Kinh nghiệm',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    education: 'Học vấn',
    themeLight: 'Sáng',
    themeDark: 'Tối',
    langEn: 'EN',
    langVi: 'VI',
  },
};
