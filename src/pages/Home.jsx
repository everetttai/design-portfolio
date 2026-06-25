import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import everettPhoto from '../assets/about/everett_about.jpg';

// Headline is split into words so each can rise into place on load.
// Italic words are the concrete domains — the specificity is the point.
const HEADLINE = ['I', 'design', 'products', 'for', 'healthcare,', 'education,', 'and', 'career', 'tools.'];
const ITALIC = new Set(['healthcare,', 'education,', 'career', 'tools.']);

const EMAIL = 'everetthtai@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/everett-tai-2a0524251';

function PillLink({ href, label, icon, external }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="pill-link"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '9px 18px 9px 14px',
        borderRadius: '999px',
        border: '1px solid var(--rule)',
        color: 'var(--ink)',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
      }}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
        <use href={`/icons.svg#${icon}`} />
      </svg>
      {label}
    </a>
  );
}

function SkillCell({ title, body }) {
  return (
    <div>
      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '16px',
        marginBottom: '8px',
      }}>
        {title}
      </h4>
      <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>{body}</p>
    </div>
  );
}

export default function Home() {
  useScrollReveal();
  const innerRef = useRef(null);
  const location = useLocation();

  // Arriving from another page via the About/Contact nav items lands here
  // with a hash; scroll the matching section into view once mounted.
  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (id !== 'about' && id !== 'contact') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }, 80);
    return () => clearTimeout(t);
  }, [location.key, location.hash]);

  // Parallax + fade the hero copy as the page scrolls toward About, so the
  // landing hands off cinematically. Skipped entirely under reduced-motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = innerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const h = window.innerHeight || 1;
        const p = Math.min(y / h, 1);
        el.style.transform = `translateY(${y * -0.12}px)`;
        el.style.opacity = String(Math.max(1 - p * 1.15, 0));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* ---------- Landing hero ---------- */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__grain" aria-hidden="true" />

        <div className="wrap hero__inner" ref={innerRef}>
          <span className="hero__fade" style={{
            display: 'inline-block',
            fontSize: '13px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 500,
            marginBottom: '26px',
            animationDelay: '0.05s',
          }}>
            Everett Tai — Product &amp; UX Designer
          </span>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(40px, 6.6vw, 84px)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            maxWidth: '760px',
            margin: '0 0 34px',
          }}>
            {HEADLINE.map((word, i) => (
              <span
                key={i}
                className="hero__word"
                style={{
                  fontStyle: ITALIC.has(word) ? 'italic' : 'normal',
                  animationDelay: `${0.18 + i * 0.06}s`,
                }}
              >
                {word}
                {i < HEADLINE.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>

          <p className="hero__fade" style={{
            fontSize: 'clamp(16px, 1.5vw, 19px)',
            color: 'var(--ink-soft)',
            maxWidth: '48ch',
            lineHeight: 1.5,
            margin: 0,
            animationDelay: '0.78s',
          }}>
            Recent Dartmouth grad (Human-Centered Design minor), currently a LAUNCH
            analyst at Hilton — designing on the side, and looking for more of it.
          </p>
        </div>

        <div className="hero__cue-row wrap">
          <a href="#about" className="scroll-cue hero__fade" aria-label="Scroll to About" style={{ animationDelay: '1s' }}>
            <span className="scroll-cue__label">About me</span>
            <span className="scroll-cue__line" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="wrap" style={{ maxWidth: '780px', padding: '0 0 30px' }}>
        <div className="section-label reveal-on-scroll">About</div>

        <div
          className="about-grid reveal-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: '190px minmax(0, 1fr)',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '18px',
          }}
        >
          <img
            src={everettPhoto}
            alt="Everett Tai"
            style={{
              width: '100%',
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '12px',
              border: '1px solid var(--rule)',
              display: 'block',
            }}
          />

          <p style={{ fontSize: '17px', margin: 0 }}>
            I'm Everett Tai, a recent Dartmouth College graduate with a degree in Economics and
            Psychology and a minor in Human-Centered Design. I currently work full-time as a LAUNCH
            analyst at Hilton, and I design part-time and on the side — which is also what I'm
            looking for more of.
          </p>
        </div>

        <p className="reveal-on-scroll" style={{ fontSize: '17px', marginBottom: '18px' }}>
          My design background started in a UI/UX class at Dartmouth, which is where Aspire
          (one of the case studies in my work) came from — a full ideation-to-delivery project
          I led across a four-person team. From there I joined Dartmouth's DALI Lab as a UI/UX
          designer, where I worked across two larger, multi-quarter projects: SimReach, a
          decision-support tool for hospital administrators, and AI Patient Actor, a
          simulated-patient practice tool for medical students.
        </p>

        <p className="reveal-on-scroll" style={{ fontSize: '17px', margin: 0 }}>
          Outside of screens, my Human-Centered Design minor also had me build a portable
          composter from scratch in an intro engineering class — a reminder that the same
          research-and-iterate instincts apply whether the constraint is a Figma frame or a
          sheet of plywood.
        </p>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="wrap" style={{ maxWidth: '720px', padding: '0 0 10px' }}>
        <div className="section-label">Skills</div>
        <div
          className="reveal-on-scroll hero__skills-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}
        >
          <SkillCell title="Design & Prototyping" body="Figma, user research, prototyping, visual & UI design" />
          <SkillCell title="Research & Data" body="R, Python, Stata, Excel, NLTools (fMRI / neuroimaging analysis)" />
          <SkillCell title="Fabrication" body="SolidWorks" />
          <SkillCell title="Communication" body="PowerPoint" />
        </div>
      </section>

      {/* ---------- Work CTA ---------- */}
      <section className="wrap" style={{ maxWidth: '720px', padding: '54px 0 30px' }}>
        <Link to="/portfolio" className="case-link" style={{ fontSize: '16px' }}>
          See Work →
        </Link>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="wrap" style={{ maxWidth: '680px', padding: '40px 0 110px' }}>
        <div className="section-label reveal-on-scroll">Contact</div>

        <h2 className="reveal-on-scroll" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'clamp(26px, 3.4vw, 34px)',
          lineHeight: 1.2,
          marginBottom: '16px',
          maxWidth: '20ch',
        }}>
          Designing part-time, looking for more of it.
        </h2>

        <p className="reveal-on-scroll" style={{ fontSize: '16px', color: 'var(--ink-soft)', marginBottom: '28px', maxWidth: '52ch' }}>
          If you're hiring for a part-time or remote product/UX role — or just want to talk
          through any of the work above — I'd love to hear from you.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="reveal-on-scroll"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(20px, 2.6vw, 26px)',
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '2px solid var(--accent)',
            paddingBottom: '4px',
            display: 'inline-block',
            marginBottom: '24px',
          }}
        >
          {EMAIL}
        </a>

        <div className="reveal-on-scroll" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <PillLink href={LINKEDIN_URL} label="LinkedIn" icon="linkedin-icon" external />
          <PillLink href="/resume/Everett-Tai-Resume.pdf" label="Resume" icon="document-icon" external />
        </div>
      </section>
    </>
  );
}
