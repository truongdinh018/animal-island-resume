import {
  Button,
  Card,
  Collapse,
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
import {
  contactFaq,
  education,
  experiences,
  profile,
  projects,
  skills,
} from './data/resume';
import './App.css';

const focusAreas = [
  { label: 'ERP', color: 'app-teal' as const, icon: 'icon-diy' as const },
  { label: 'AI Agents', color: 'purple' as const, icon: 'icon-chat' as const },
  { label: 'Knowledge', color: 'app-blue' as const, icon: 'icon-critterpedia' as const },
  { label: 'DX', color: 'app-green' as const, icon: 'icon-design' as const },
];

const projectIcons = ['icon-chat', 'icon-helicopter', 'icon-map'] as const;

function Sidebar() {
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
          <span className="status-pill">Online</span>
        </div>

        <p className="eyebrow">
          <Icon name="icon-map" size={22} bounce />
          <span>{profile.tagline}</span>
        </p>

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>

        <Typewriter speed={22}>
          <p className="hero-summary">{profile.summary}</p>
        </Typewriter>

        <div className="time-chip">
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
            Visit GitHub
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
  return (
    <div className="panel-stack">
      <Card color="app-yellow" pattern="default" className="story-card">
        <Title color="app-yellow" size="large">
          About me
        </Title>
        <p className="body-text lead">
          I design and ship Odoo modules and AI product surfaces — from RAG chat
          with citations to document ingest and channel bots.
        </p>
        <p className="body-text">
          I care about clear APIs, safe defaults, and UIs that feel approachable
          — the kind of tools teammates actually enjoy opening every day.
        </p>
      </Card>

      <div className="focus-grid">
        {focusAreas.map((item) => (
          <Card
            key={item.label}
            color={item.color}
            pattern={item.color}
            hoverable
            className="focus-card"
          >
            <Icon name={item.icon} size={40} bounce />
            <Tag color={item.color} variant="solid" size="medium">
              {item.label}
            </Tag>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="panel-stack">
      {experiences.map((job) => (
        <Card key={job.company} color={job.color} pattern={job.color} className="job-card">
          <div className="job-head">
            <div className="job-head-left">
              <Icon name="icon-diy" size={36} />
              <div>
                <Title color={job.color} size="middle">
                  {job.role}
                </Title>
                <p className="job-company">{job.company}</p>
              </div>
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
  return (
    <div className="panel-stack">
      <Card color="app-green" pattern="none" className="skills-card">
        <Title color="app-green" size="large">
          Skill orchard
        </Title>
        <p className="body-text soft">How I spend most of my builder hours.</p>
        <div className="skills-grid">
          {skills.map((skill) => (
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
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Card
          key={project.name}
          color={project.color}
          pattern={project.color}
          hoverable
          className="project-card"
        >
          <div className="project-top">
            <Icon name={projectIcons[index % projectIcons.length]} size={42} bounce />
            <Title color={project.color} size="middle">
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
  return (
    <div className="panel-stack">
      {education.map((item) => (
        <Card key={item.school} color="app-blue" pattern="app-blue">
          <div className="job-head-left">
            <Icon name="icon-critterpedia" size={36} />
            <div>
              <Title color="app-blue" size="middle">
                {item.school}
              </Title>
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
        <Title color="warm-peach-pink" size="middle">
          Ask me anything
        </Title>
        <div className="faq-stack">
          {contactFaq.map((item) => (
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

function App() {
  const tabs = [
    { key: 'about', label: 'About', children: <AboutPanel /> },
    { key: 'work', label: 'Experience', children: <ExperiencePanel /> },
    { key: 'skills', label: 'Skills', children: <SkillsPanel /> },
    { key: 'projects', label: 'Projects', children: <ProjectsPanel /> },
    { key: 'more', label: 'More', children: <EducationPanel /> },
  ];

  return (
    <div className="page">
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
            <span>Island Resume</span>
          </div>
          <p className="banner-note">Built with animal-island-ui · Non-commercial</p>
        </header>

        <div className="layout">
          <Sidebar />
          <main className="main fade-in delay-1">
            <div className="main-intro">
              <Title color="app-teal" size="middle">
                Explorer log
              </Title>
              <p className="main-intro-text">
                Peek around the island — work, skills, and little projects.
              </p>
            </div>
            <Tabs items={tabs} defaultActiveKey="about" leafAnimation shadow />
          </main>
        </div>
      </div>

      <Footer type="sea" seamless />
    </div>
  );
}

export default App;
