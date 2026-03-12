import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects, researchPapers} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// ─── Project Modal ─────────────────────────────────────────────────────────────
function ProjectModal({project, isDark, onClose}) {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={isDark ? "modal-card dark-mode" : "modal-card"}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          {project.image && (
            <img src={project.image} alt={project.projectName} className="modal-logo" />
          )}
          <div>
            <h2 className="modal-title">{project.projectName}</h2>
            {project.tagline && (
              <p className="modal-tagline">{project.tagline}</p>
            )}
            <div className="modal-tech-row">
              {project.techStack && project.techStack.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="modal-desc">{project.projectDesc}</p>

        {project.stats && (
          <div className="modal-stats">
            {project.stats.map(s => (
              <div key={s.label} className="stat-box">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {project.highlights && (
          <div className="modal-highlights">
            <h3 className="modal-section-title">Key Highlights</h3>
            <ul>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-footer">
          {project.footerLink && project.footerLink.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={link.name === "Live Demo" ? "modal-btn modal-btn--demo" : "modal-btn"}
            >
              {link.name === "GitHub" ? "⌥ GitHub" : link.name === "Live Demo" ? "🚀 Live Demo" : link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Research Paper Modal ──────────────────────────────────────────────────────
function PaperModal({paper, isDark, onClose}) {
  if (!paper) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={isDark ? "modal-card modal-card--research dark-mode" : "modal-card modal-card--research"}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="paper-modal-header">
          <span className="paper-badge">📄 Research Paper</span>
          <span className="paper-venue">{paper.venue}</span>
        </div>

        <h2 className="modal-title modal-title--paper">{paper.title}</h2>
        <p className="paper-authors">{paper.authors}</p>
        <p className="paper-institution">{paper.institution}</p>

        <p className="modal-desc" style={{marginTop: "1rem"}}>
          <strong>Abstract: </strong>{paper.abstract}
        </p>

        {paper.stats && (
          <div className="modal-stats">
            {paper.stats.map(s => (
              <div key={s.label} className="stat-box stat-box--green">
                <span className="stat-value stat-value--green">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {paper.highlights && (
          <div className="modal-highlights">
            <h3 className="modal-section-title modal-section-title--green">Key Contributions</h3>
            <ul>
              {paper.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-tech-row" style={{margin: "1rem 0"}}>
          {paper.tags && paper.tags.map(t => (
            <span key={t} className="tech-badge tech-badge--green">{t}</span>
          ))}
        </div>

        {paper.pdfLink && (
          <div className="modal-footer">
            <a
              href={paper.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn modal-btn--green"
            >
              📄 View Research Paper
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Featured Card ─────────────────────────────────────────────────────────────
function FeaturedCard({project, isDark, onClick}) {
  return (
    <div className={isDark ? "featured-card dark-mode" : "featured-card"} onClick={onClick}>
      <div className="featured-card__badge">⭐ Featured Project</div>
      <div className="featured-card__inner">

        {/* Left */}
        <div className="featured-card__left">
          <div className="featured-card__img-wrap">
            {project.image && (
              <img src={project.image} alt={project.projectName} className="featured-card__img" />
            )}
            <div className="featured-card__img-overlay">
              <span>Click to view details</span>
            </div>
          </div>
          <h3 className="featured-card__title">{project.projectName}</h3>
          <p className="featured-card__desc">{project.projectDesc}</p>
          <div className="featured-card__tech">
            {project.techStack && project.techStack.slice(0, 5).map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
            {project.techStack && project.techStack.length > 5 && (
              <span className="tech-badge tech-badge--more">+{project.techStack.length - 5} more</span>
            )}
          </div>
          <div className="featured-card__actions">
            <button className="sp-card-btn" onClick={onClick}>View Full Details →</button>
            {project.footerLink && project.footerLink.find(l => l.name === "Live Demo") && (
              <a
                href={project.footerLink.find(l => l.name === "Live Demo").url}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-card-btn sp-card-btn--demo"
                onClick={e => e.stopPropagation()}
              >
                🚀 Live Demo
              </a>
            )}
            {project.footerLink && project.footerLink.find(l => l.name === "GitHub") && (
              <a
                href={project.footerLink.find(l => l.name === "GitHub").url}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-card-btn sp-card-btn--outline"
                onClick={e => e.stopPropagation()}
              >
                ⌥ GitHub
              </a>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="featured-card__right">
          {project.stats && project.stats.map(s => (
            <div key={s.label} className="featured-stat">
              <span className="featured-stat__value">{s.value}</span>
              <span className="featured-stat__label">{s.label}</span>
            </div>
          ))}
          <div className="featured-card__highlights-preview">
            {project.highlights && project.highlights.slice(0, 3).map((h, i) => (
              <div key={i} className="highlight-pill">✓ {h}</div>
            ))}
            {project.highlights && project.highlights.length > 3 && (
              <div className="highlight-pill highlight-pill--more">
                + {project.highlights.length - 3} more highlights
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Standard Project Card (image-first, minimal) ─────────────────────────────
function ProjectCard({project, isDark, onClick}) {
  const demoLink = project.footerLink && project.footerLink.find(l => l.name === "Live Demo");
  const githubLink = project.footerLink && project.footerLink.find(l => l.name === "GitHub");

  return (
    <div className={isDark ? "sp-card dark-mode" : "sp-card"}>
      {/* Image with click-to-detail overlay */}
      <div className="sp-card__img-wrap" onClick={onClick}>
        {project.image && (
          <img src={project.image} alt={project.projectName} className="sp-card__img" />
        )}
        <div className="sp-card__img-overlay">
          <span>View Details</span>
        </div>
      </div>

      <div className="sp-card__body">
        {project.tagline && <p className="sp-card__tagline">{project.tagline}</p>}
        <h3 className="sp-card__title">{project.projectName}</h3>
        <p className="sp-card__desc">{project.projectDesc}</p>
        <div className="sp-card__tech">
          {project.techStack && project.techStack.slice(0, 4).map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="sp-card__actions">
          <button className="sp-card-btn sp-card-btn--outline" onClick={onClick}>
            Details →
          </button>
          {demoLink && (
            <a
              href={demoLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-card-btn sp-card-btn--demo"
            >
              🚀 Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-card-btn sp-card-btn--ghost"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Research Paper Card (video plays on hover) ───────────────────────────────
function PaperCard({paper, isDark, onClick}) {
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={isDark ? "paper-card dark-mode" : "paper-card"}>
      <div
        className="paper-card__img-wrap"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {paper.video ? (
          <>
            {/* Static poster shown before hover */}
            {paper.image && (
              <img
                src={paper.image}
                alt="preview"
                className="paper-card__img paper-card__poster"
              />
            )}
            {!paper.image && (
              <div className="paper-card__img-placeholder">
                <span className="paper-card__placeholder-icon">📄</span>
                <span className="paper-card__placeholder-label">Research Paper</span>
              </div>
            )}
            <video
              ref={videoRef}
              src={paper.video}
              className="paper-card__video"
              muted
              loop
              playsInline
              preload="metadata"
            />
          </>
        ) : paper.image ? (
          <img src={paper.image} alt="Research Paper" className="paper-card__img" />
        ) : (
          <div className="paper-card__img-placeholder">
            <span className="paper-card__placeholder-icon">📄</span>
            <span className="paper-card__placeholder-label">Research Paper</span>
          </div>
        )}
        <div className="paper-card__img-overlay">
          <span>View Details</span>
        </div>
      </div>

      <div className="paper-card__body">
        <div className="paper-card__meta">
          <span className="paper-badge">Research</span>
          <span className="paper-card__venue">{paper.venue}</span>
        </div>
        <h3 className="paper-card__title">{paper.title}</h3>
        <p className="paper-card__authors">{paper.authors}</p>

        <div className="paper-card__stats">
          {paper.stats && paper.stats.slice(0, 2).map(s => (
            <div key={s.label} className="paper-stat">
              <strong>{s.value}</strong> {s.label}
            </div>
          ))}
        </div>

        <div className="sp-card__actions">
          <button className="sp-card-btn sp-card-btn--outline-green" onClick={onClick}>
            Details →
          </button>
          {paper.pdfLink && (
            <a
              href={paper.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-card-btn sp-card-btn--green"
            >
              📄 View Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);

  if (!bigProjects.display) return null;

  const featured = bigProjects.projects.find(p => p.featured);
  const regular = bigProjects.projects.filter(p => !p.featured);

  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={isDark ? "dark-mode subTitle project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          {featured && (
            <FeaturedCard project={featured} isDark={isDark} onClick={() => setSelectedProject(featured)} />
          )}

          <div className="sp-grid">
            {regular.map((project, i) => (
              <ProjectCard key={i} project={project} isDark={isDark} onClick={() => setSelectedProject(project)} />
            ))}
            {researchPapers && researchPapers.display && researchPapers.papers.map((paper, i) => (
              <PaperCard key={i} paper={paper} isDark={isDark} onClick={() => setSelectedPaper(paper)} />
            ))}
          </div>
        </div>
      </Fade>

      {selectedProject && (
        <ProjectModal project={selectedProject} isDark={isDark} onClose={() => setSelectedProject(null)} />
      )}
      {selectedPaper && (
        <PaperModal paper={selectedPaper} isDark={isDark} onClose={() => setSelectedPaper(null)} />
      )}
    </>
  );
}