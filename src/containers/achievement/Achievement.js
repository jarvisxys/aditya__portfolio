import React, {useContext, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [lightbox, setLightbox] = useState(null); // holds the open certificate object

  if (!achievementSection.display) return null;

  const certificates = achievementSection.certificates || [];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        {/* ── Achievements ── */}
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Certificates ── */}
        {certificates.length > 0 && (
          <div className="certificates-section">
            <h2
              className={
                isDark
                  ? "dark-mode heading certificates-heading"
                  : "heading certificates-heading"
              }
            >
              Certificates 📜
            </h2>

            <div className="certificates-grid">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className={`cert-card ${isDark ? "dark-cert-card" : ""}`}
                  onClick={() => setLightbox(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={e => e.key === "Enter" && setLightbox(cert)}
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <div className="cert-thumb-wrapper">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-thumb"
                    />
                    <div className="cert-overlay">
                      <span className="cert-expand-icon">🔍</span>
                    </div>
                  </div>
                  <div className="cert-info">
                    <p className={isDark ? "dark-mode cert-title" : "cert-title"}>
                      {cert.title}
                    </p>
                    {cert.tag && (
                      <span className="cert-tag">{cert.tag}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Lightbox Modal ── */}
        {lightbox && (
          <div
            className="cert-lightbox-backdrop"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <div
              className="cert-lightbox-box"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="cert-lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="cert-lightbox-img"
              />
              <div className="cert-lightbox-footer">
                <p className="cert-lightbox-title">{lightbox.title}</p>
                {lightbox.tag && (
                  <span className="cert-tag">{lightbox.tag}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}