import { usePrefs } from './prefs/PrefsContext';

/** Clean A4-style resume — visible only when printing / Save as PDF. */
export function PrintResume() {
  const { t, resume } = usePrefs();
  const { profile, experiences, skills, projects, education } = resume;

  return (
    <article className="print-resume">
      <header className="print-header">
        <img
          className="print-avatar"
          src={profile.avatar}
          alt=""
          width={72}
          height={72}
        />
        <div>
          <h1>{profile.name}</h1>
          <p className="print-role">{profile.title}</p>
          <p className="print-contact">
            {profile.location} · {profile.email} · github.com/{profile.githubLabel}
          </p>
        </div>
      </header>

      <section>
        <h2>{t.summary}</h2>
        <p>{profile.summary}</p>
        {profile.about.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="print-focus">
          <strong>{t.focus}:</strong> {profile.focus.join(' · ')}
        </p>
      </section>

      <section>
        <h2>{t.experience}</h2>
        {experiences.map((job) => (
          <div key={job.company} className="print-job">
            <div className="print-job-head">
              <strong>
                {job.role} · {job.company}
              </strong>
              <span>{job.period}</span>
            </div>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>{t.skills}</h2>
        <ul className="print-skills">
          {skills.map((skill) => (
            <li key={skill.name}>
              {skill.name} — {skill.level}%
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t.projects}</h2>
        {projects.map((project) => (
          <div key={project.name} className="print-project">
            <strong>{project.name}</strong>
            <span className="print-tags"> ({project.tags.join(', ')})</span>
            <p>{project.blurb}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{t.education}</h2>
        {education.map((item) => (
          <div key={item.school} className="print-job">
            <div className="print-job-head">
              <strong>{item.school}</strong>
              <span>{item.period}</span>
            </div>
            <p>{item.degree}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
