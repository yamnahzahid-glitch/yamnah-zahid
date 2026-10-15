import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeSkills,
  resumeTools,
} from "@/data/resume";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 9v9M10.5 18v-9m0 4a4 4 0 0 1 8 0v5" /><circle cx="6.5" cy="6.5" r="1" />
    </svg>
  );
}

/**
 * The resume sheet. At rest it reads as a quiet document; on hover (or keyboard
 * focus, or any device without hover) the full content fades in over the
 * placeholder rules. Content mirrors `public/resume.pdf` via `@/data/resume`.
 */
export default function ResumeCard() {
  return (
    <span className="rcard" aria-hidden="true">
      {/* resting state: the document at a glance */}
      <span className="rcard-rest">
        <span className="rcard-rest-head">
          <span className="rcard-rest-name">{resumeProfile.name}</span>
          <span className="rcard-rest-role">{resumeProfile.title}</span>
        </span>
        <span className="rcard-rest-lines">
          {Array.from({ length: 7 }).map((_, i) => <i key={i} />)}
        </span>
      </span>

      {/* hover state: the sheet itself */}
      <span className="rcard-full">
        <span className="rcard-top">
          <span className="rcard-identity">
            <span className="rcard-name">{resumeProfile.name}</span>
            <span className="rcard-title">{resumeProfile.title}</span>
            <span className="rcard-rule" />
            <span className="rcard-summary">{resumeProfile.summary}</span>
          </span>
          <span className="rcard-contact">
            <span><i><MailIcon /></i>{resumeProfile.email}</span>
            <span><i><PhoneIcon /></i>{resumeProfile.phone}</span>
            <span><i><PinIcon /></i>{resumeProfile.location}</span>
            <span><i><LinkedInIcon /></i>{resumeProfile.linkedin}</span>
          </span>
        </span>

        <span className="rcard-body">
          <span className="rcard-col">
            <span className="rcard-label">Experience</span>
            {resumeExperience.map((job) => (
              <span className="rcard-entry" key={job.role + job.company}>
                <span className="rcard-period">{job.period}</span>
                <span className="rcard-entry-main">
                  <span className="rcard-role">{job.role}</span>
                  <span className="rcard-company">{job.company}</span>
                  <span className="rcard-points">
                    {job.points.map((point) => <span key={point}>{point}</span>)}
                  </span>
                </span>
              </span>
            ))}

            <span className="rcard-label rcard-label-spaced">Education</span>
            {resumeEducation.map((item) => (
              <span className="rcard-entry" key={item.degree}>
                <span className="rcard-period">{item.period}</span>
                <span className="rcard-entry-main">
                  <span className="rcard-role">{item.degree}</span>
                  <span className="rcard-company">{item.school}</span>
                </span>
              </span>
            ))}
          </span>

          <span className="rcard-col rcard-col-side">
            <span className="rcard-label">Skills</span>
            <span className="rcard-chips">
              {resumeSkills.map((skill) => <span key={skill}>{skill}</span>)}
            </span>
            <span className="rcard-label rcard-label-spaced">Tools</span>
            <span className="rcard-tools">
              {resumeTools.map((tool) => <span key={tool}><i aria-hidden="true" />{tool}</span>)}
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}
