import React, {useContext, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
// import SvgLogo from "../../components/logo/SvgLogo";

const IconMail = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconPhone = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
  </svg>
);
const IconPin = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconBag = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("sending");
    const sub = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:${contactInfo.email_address}?subject=${sub}&body=${body}`,
      "_blank"
    );
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    }, 400);
  }

  const allFilled = name.trim() && email.trim() && message.trim();
  const ic = base => (isDark ? `dark-mode ${base}` : base);
  const inp = `cfb-input${isDark ? " cfb-input--dark" : ""}`;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <div className="contact-section">
          {/* ══ LEFT ══ */}
          <div className="contact-left">
            {/* Big heading — same scale as "Reach Out to me!" */}
            <h1 className={ic("contact-heading")}>{contactInfo.title}</h1>

            {/* Subtitle — uppercase, letter-spaced, small caps style */}
            <p className={ic("contact-sub")}>{contactInfo.subtitle}</p>

            {/* Info rows */}
            <div className="contact-info-block">
              <div className={ic("contact-row")}>
                <IconMail />
                <a
                  href={`mailto:${contactInfo.email_address}`}
                  className={ic("contact-row__link")}
                >
                  {contactInfo.email_address}
                </a>
              </div>
              {contactInfo.number && (
                <div className={ic("contact-row")}>
                  <IconPhone />
                  <a
                    href={`tel:${contactInfo.number}`}
                    className={ic("contact-row__link")}
                  >
                    {contactInfo.number}
                  </a>
                </div>
              )}
              <div className={ic("contact-row")}>
                <IconPin />
                <span>RGIPT, Jais · Amethi, Uttar Pradesh</span>
              </div>
              <div className={ic("contact-row")}>
                <IconBag />
                <span>
                  Open for opportunities:{" "}
                  <span
                    className={contactInfo.isHireable ? "hire-yes" : "hire-no"}
                  >
                    {contactInfo.isHireable ? "Yes" : "No"}
                  </span>
                </span>
              </div>
            </div>

            <SocialMedia />

            {/* ── Form — constrained width so inputs don't stretch ── */}
            <div className="cfb">
              <div className="cfb-fields">
                {/* Name + email side by side, each ~half */}
                <div className="cfb-duo">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    className={inp}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email"
                    className={inp}
                  />
                </div>
                {/* Message box — compact, not giant */}
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Hi Aditya, I came across your portfolio and would love to connect..."
                  className={`${inp} cfb-textarea`}
                  rows={4}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!allFilled || status === "sending"}
                className="cfb-btn"
                type="button"
              >
                {status === "sending" ? "Opening…" : "Send Message →"}
              </button>

              {status === "sent" && (
                <p className="cfb-ok">
                  ✓ Mail client opened — see you in the inbox!
                </p>
              )}
            </div>
          </div>

          {/* ══ RIGHT — avatar + signature ══ */}
          <div className="contact-right">
            <div className="contact-avatar-ring">
              <img
                src={contactInfo.profileImage}
                alt={contactInfo.profileName || "Aditya Kumar"}
                className="contact-avatar"
              />
            </div>

            {/* Auto-generated logo from your name — same one used on the splash screen */}
            {/* <div className={ic("contact-signature")}>
              <SvgLogo />
            </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
