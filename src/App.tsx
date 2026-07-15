import {
  Button,
  Card,
  Collapse,
  Cursor,
  Divider,
  Footer,
  Icon,
  Progress,
  Tag,
  Tabs,
  Time,
  Title,
  Typewriter,
} from 'animal-island-ui';
import { PrintResume } from './PrintResume';
import { PrefsProvider, usePrefs } from './prefs/PrefsContext';
import './App.css';
import './print.css';

const focusMeta = [
  { color: 'app-teal' as const, icon: 'icon-diy' as const },
  { color: 'purple' as const, icon: 'icon-chat' as const },
  { color: 'app-blue' as const, icon: 'icon-critterpedia' as const },
  { color: 'app-green' as const, icon: 'icon-design' as const },
];

const projectIcons = ['icon-chat', 'icon-helicopter', 'icon-map'] as const;

function PrefsControls() {
  const { lang, theme, setLang, toggleTheme, t } = usePrefs();

  return (
    <div className="prefs-bar no-print" role="group" aria-label="Language and theme">
      <div className="pref-group" role="group" aria-label="Language">
        <button
          type="button"
          className={`pref-btn${lang === 'en' ? ' is-active' : ''}`}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >
          {t.langEn}
        </button>
        <button
          type="button"
          className={`pref-btn${lang === 'vi' ? ' is-active' : ''}`}
          onClick={() => setLang('vi')}
          aria-pressed={lang === 'vi'}
        >
          {t.langVi}
        </button>
      </div>
      <div className="pref-group" role="group" aria-label="Theme">
        <button
          type="button"
          className={`pref-btn pref-btn-icon${theme === 'light' ? ' is-active' : ''}`}
          onClick={() => theme !== 'light' && toggleTheme()}
          aria-pressed={theme === 'light'}
          title={t.themeLight}
        >
          ☀️
        </button>
        <button
          type="button"
          className={`pref-btn pref-btn-icon${theme === 'dark' ? ' is-active' : ''}`}
          onClick={() => theme !== 'dark' && toggleTheme()}
          aria-pressed={theme === 'dark'}
          title={t.themeDark}
        >
          🌙
        </button>
      </div>
    </div>
  );
}

function Sidebar() {
  const { t, resume } = usePrefs();
  const { profile } = resume;

  return (
    <aside className="sidebar fade-in">
      <Card color="app-teal" pattern="app-teal" className="sidebar-card">
        <div className="avatar-stage">
          <span className="avatar-ring" aria-hidden />
          <span className="avatar-ring delay" aria-hidden />
          <div className="avatar-wrap">
            <img
              className="avatar"
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              width={176}
              height={176}
            />
          </div>
          <span className="status-pill">{t.online}</span>
        </div>

        <p className="eyebrow">
          <Icon name="icon-map" size={22} bounce />
          <span>{profile.tagline}</span>
        </p>

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>

        <Typewriter key={profile.summary} speed={22}>
          <p className="hero-summary">{profile.summary}</p>
        </Typewriter>

        <div className="time-chip no-print">
          <Time />
        </div>

        <div className="hero-meta">
          <Tag color="app-yellow" variant="solid">
            {profile.location}
          </Tag>
          <Tag color="app-blue" variant="outlined">
            @{profile.githubLabel}
          </Tag>
        </div>

        <div className="hero-actions">
          <Button
            type="primary"
            size="large"
            block
            onClick={() => window.open(profile.github, '_blank')}
          >
            {t.visitGithub}
          </Button>
          <Button
            type="default"
            size="large"
            block
            onClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          >
            {profile.email}
          </Button>
        </div>
      </Card>
    </aside>
  );
}

function AboutPanel() {
  const { t, resume } = usePrefs();
  const { profile } = resume;

  return (
    <div className="panel-stack">
      <Card color="app-yellow" pattern="default" className="story-card">
        <div className="section-title">
          <Title color="app-yellow" size="middle">
            {t.aboutMe}
          </Title>
        </div>
        {profile.about.map((line, index) => (
          <p key={line} className={index === 0 ? 'body-text lead' : 'body-text'}>
            {line}
          </p>
        ))}
      </Card>

      <div className="focus-grid">
        {profile.focus.map((label, index) => {
          const meta = focusMeta[index % focusMeta.length];
          return (
            <Card
              key={label}
              color={meta.color}
              pattern={meta.color}
              hoverable
              className="focus-card"
            >
              <Icon name={meta.icon} size={40} bounce />
              <Tag color={meta.color} variant="solid" size="medium">
                {label}
              </Tag>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  const { resume } = usePrefs();

  return (
    <div className="panel-stack">
      {resume.experiences.map((job) => (
        <Card key={job.company} color={job.color} pattern={job.color} className="job-card">
          <div className="section-title">
            <Title color={job.color} size="middle">
              {job.role}
            </Title>
          </div>
          <div className="job-head">
            <div className="job-head-left">
              <Icon name="icon-diy" size={32} />
              <p className="job-company">{job.company}</p>
            </div>
            <Tag color={job.color} variant="solid">
              {job.period}
            </Tag>
          </div>
          <ul className="bullet-list">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}

function SkillsPanel() {
  const { t, resume } = usePrefs();

  return (
    <div className="panel-stack">
      <Card pattern="app-green" className="skills-card">
        <div className="section-title">
          <Title color="app-green" size="middle">
            {t.skillsTitle}
          </Title>
        </div>
        <p className="body-text soft">{t.skillsBlurb}</p>
        <div className="skills-grid">
          {resume.skills.map((skill) => (
            <div key={skill.name} className="skill-row">
              <div className="skill-label">
                <Tag color={skill.color} size="small" variant="solid">
                  {skill.name}
                </Tag>
              </div>
              <Progress percent={skill.level} size="middle" infoPosition="right" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ProjectsPanel() {
  const { resume } = usePrefs();

  return (
    <div className="projects-grid">
      {resume.projects.map((project, index) => (
        <Card
          key={project.name}
          color={project.color}
          pattern={project.color}
          hoverable
          className="project-card"
        >
          <div className="project-icon">
            <Icon name={projectIcons[index % projectIcons.length]} size={40} bounce />
          </div>
          <div className="section-title">
            <Title color={project.color} size="small">
              {project.name}
            </Title>
          </div>
          <p className="body-text">{project.blurb}</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <Tag key={tag} color={project.color} size="small" variant="outlined">
                {tag}
              </Tag>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function EducationPanel() {
  const { t, resume } = usePrefs();

  return (
    <div className="panel-stack">
      {resume.education.map((item) => (
        <Card key={item.school} color="app-blue" pattern="app-blue">
          <div className="section-title">
            <Title color="app-blue" size="middle">
              {item.school}
            </Title>
          </div>
          <div className="job-head-left">
            <Icon name="icon-critterpedia" size={32} />
            <div>
              <p className="body-text">{item.degree}</p>
              <Tag color="app-blue" variant="dashed">
                {item.period}
              </Tag>
            </div>
          </div>
        </Card>
      ))}
      <Divider />
      <Card color="warm-peach-pink" pattern="warm-peach-pink">
        <div className="section-title">
          <Title color="warm-peach-pink" size="middle">
            {t.faq}
          </Title>
        </div>
        <div className="faq-stack">
          {resume.contactFaq.map((item) => (
            <Collapse
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

function AppShell() {
  const { t, resume, lang } = usePrefs();
  const { profile } = resume;

  const printResume = () => {
    document.title = `${profile.name} — Resume`;
    window.print();
  };

  const tabs = [
    { key: 'about', label: t.tabs.about, children: <AboutPanel /> },
    { key: 'work', label: t.tabs.work, children: <ExperiencePanel /> },
    { key: 'skills', label: t.tabs.skills, children: <SkillsPanel /> },
    { key: 'projects', label: t.tabs.projects, children: <ProjectsPanel /> },
    { key: 'more', label: t.tabs.more, children: <EducationPanel /> },
  ];

  return (
    <>
      <Cursor>
        <div className="page screen-only">
          <div className="sky" aria-hidden>
            <span className="cloud c1" />
            <span className="cloud c2" />
            <span className="cloud c3" />
            <span className="orb o1" />
            <span className="orb o2" />
            <span className="orb o3" />
          </div>

          <div className="page-inner">
            <header className="top-banner fade-in">
              <div className="banner-mark">
                <Icon name="icon-miles" size={28} bounce />
                <span>{t.brand}</span>
              </div>
              <div className="banner-right">
                <PrefsControls />
              </div>
            </header>

            <div className="layout">
              <Sidebar />
              <main className="main fade-in delay-1">
                <div className="main-intro">
                  <div className="section-title">
                    <Title color="app-teal" size="middle">
                      {t.explorerLog}
                    </Title>
                  </div>
                  <p className="main-intro-text">{t.explorerBlurb}</p>
                </div>
                <div className="tabs-shell">
                  <Tabs
                    key={lang}
                    items={tabs}
                    defaultActiveKey="about"
                    leafAnimation
                    shadow
                  />
                </div>
              </main>
            </div>
          </div>

          <Footer type="sea" seamless />

          <button
            type="button"
            className="print-fab no-print"
            onClick={printResume}
            title={t.printTitle}
            aria-label={t.printTitle}
          >
            <span className="print-fab-icon" aria-hidden>
              🖨️
            </span>
            <span className="print-fab-label">{t.print}</span>
          </button>
        </div>
      </Cursor>
      <PrintResume />
    </>
  );
}

function App() {
  return (
    <PrefsProvider>
      <AppShell />
    </PrefsProvider>
  );
}

export default App;
