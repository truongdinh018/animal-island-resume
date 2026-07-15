import {
  Button,
  Card,
  Collapse,
  Divider,
  Footer,
  Progress,
  Tag,
  Tabs,
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

function Sidebar() {
  return (
    <aside className="sidebar">
      <Card color="app-teal" pattern="app-teal" className="sidebar-card">
        <div className="avatar-wrap">
          <img
            className="avatar"
            src={profile.avatar}
            alt={`${profile.name} avatar`}
            width={160}
            height={160}
          />
        </div>
        <p className="eyebrow">{profile.tagline}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <Typewriter speed={28}>
          <p className="hero-summary">{profile.summary}</p>
        </Typewriter>
        <div className="hero-meta">
          <Tag color="app-yellow" variant="solid">
            {profile.location}
          </Tag>
          <Tag color="app-blue" variant="outlined">
            {profile.email}
          </Tag>
        </div>
        <div className="hero-actions">
          <Button
            type="primary"
            size="large"
            block
            onClick={() => window.open(profile.github, '_blank')}
          >
            GitHub
          </Button>
          <Button
            type="default"
            size="large"
            block
            onClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          >
            Email me
          </Button>
        </div>
      </Card>
    </aside>
  );
}

function AboutPanel() {
  return (
    <div className="panel-stack">
      <Card color="app-yellow" pattern="default">
        <Title color="app-yellow" size="middle">
          About
        </Title>
        <p className="body-text">
          I design and ship Odoo modules and AI product surfaces — from RAG chat
          with citations to document ingest and channel bots. I care about
          clear APIs, safe defaults, and UIs that feel approachable.
        </p>
      </Card>
      <Card color="warm-peach-pink" pattern="warm-peach-pink">
        <Title color="warm-peach-pink" size="middle">
          Focus
        </Title>
        <div className="tag-row">
          <Tag color="app-teal">ERP</Tag>
          <Tag color="purple">AI Agents</Tag>
          <Tag color="app-blue">Knowledge Bases</Tag>
          <Tag color="app-green">DX</Tag>
        </div>
      </Card>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="panel-stack">
      {experiences.map((job) => (
        <Card key={job.company} color={job.color} pattern={job.color}>
          <div className="job-head">
            <div>
              <Title color={job.color} size="middle">
                {job.role}
              </Title>
              <p className="job-company">{job.company}</p>
            </div>
            <Tag color={job.color} variant="outlined">
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
    <Card color="app-green" pattern="none">
      <Title color="app-green" size="middle">
        Skills
      </Title>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-row">
            <div className="skill-label">
              <Tag color={skill.color} size="small" variant="solid">
                {skill.name}
              </Tag>
            </div>
            <Progress percent={skill.level} size="small" infoPosition="right" />
          </div>
        ))}
      </div>
    </Card>
  );
}

function ProjectsPanel() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Card
          key={project.name}
          color={project.color}
          pattern={project.color}
          hoverable
        >
          <Title color={project.color} size="small">
            {project.name}
          </Title>
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
          <Title color="app-blue" size="middle">
            {item.school}
          </Title>
          <p className="body-text">{item.degree}</p>
          <Tag color="app-blue" variant="dashed">
            {item.period}
          </Tag>
        </Card>
      ))}
      <Divider />
      <div className="faq-stack">
        {contactFaq.map((item) => (
          <Collapse
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
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
      <div className="page-inner layout">
        <Sidebar />
        <main className="main">
          <Tabs items={tabs} defaultActiveKey="about" leafAnimation shadow />
        </main>
      </div>
      <Footer type="sea" seamless />
    </div>
  );
}

export default App;
