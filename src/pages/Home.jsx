import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useDocumentTitle from '../hooks/useDocumentTitle';
import everettPhoto from '../assets/about/everett_about.jpg';

// Static half of the headline rises in word-by-word, same as before.
const STATIC_HEADLINE = ['Designing', 'solutions', 'that', 'help', 'people'];

// Second line cycles through these, one at a time, on a continuous loop.
const CYCLE_WORDS = ['learn.', 'work.', 'connect.', 'decide.', 'grow.', 'heal.'];

// Timing for the static words: word i rises in at STATIC_BASE_DELAY + i * STATIC_STEP,
// animation itself takes 0.7s (see .hero__word in tokens.css). The cycling word's
// first appearance is timed to begin right as the static line finishes, so the two
// halves read as one continuous motion rather than two separate animations.
const STATIC_BASE_DELAY = 0.18;
const STATIC_STEP = 0.06;
const CYCLE_INITIAL_DELAY_MS = Math.round(
  (STATIC_BASE_DELAY + (STATIC_HEADLINE.length - 1) * STATIC_STEP + 0.7) * 1000
);
const CYCLE_DURATION_MS = 2200;

function CyclingWord({ words, initialDelayMs, cycleMs }) {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  // Tracks whether the first (delayed) entrance has already played. Using a
  // ref rather than checking index === 0 matters: without it, every time the
  // loop wraps back around to word #0, it would incorrectly replay the long
  // page-load startup delay instead of continuing the cycle smoothly.
  const startedRef = useRef(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Advancing on the animation's own 'animationend' event (rather than a
  // separately-scheduled setTimeout) keeps the cycle perfectly in sync —
  // no drift between JS timing and CSS timing to cause a stutter.
  const handleAnimationEnd = () => {
    startedRef.current = true;
    setIndex((i) => (i + 1) % words.length);
  };

  if (reduced) {
    return <span className="hero__cycle-word hero__cycle-word--static">{words[0]}</span>;
  }

  return (
    <span
      key={index}
      className="hero__cycle-word"
      style={{
        animationDelay: startedRef.current ? '0ms' : `${initialDelayMs}ms`,
        animationDuration: `${cycleMs}ms`,
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      {words[index]}
    </span>
  );
}

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
  useDocumentTitle('Everett Tai | Home');
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
            lineHeight: 1.6,
            marginBottom: '26px',
            animationDelay: '0.05s',
          }}>
            Everett Tai
            <br />
            Product Design • Strategy • Research
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
            {STATIC_HEADLINE.map((word, i) => (
              <span
                key={i}
                className="hero__word"
                style={{ animationDelay: `${STATIC_BASE_DELAY + i * STATIC_STEP}s` }}
              >
                {word}
                {i < STATIC_HEADLINE.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
            <br />
            <CyclingWord
              words={CYCLE_WORDS}
              initialDelayMs={CYCLE_INITIAL_DELAY_MS}
              cycleMs={CYCLE_DURATION_MS}
            />
          </h1>

          <p className="hero__fade" style={{
            fontSize: 'clamp(16px, 1.5vw, 19px)',
            color: 'var(--ink-soft)',
            maxWidth: '48ch',
            lineHeight: 1.5,
            margin: 0,
            animationDelay: '0.78s',
          }}>
            Dartmouth graduate with backgrounds in human-centered design, psychology,
            economics, and technology. Passionate about creating thoughtful products and
            solving complex problems through research, design, and strategy.
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
      <section id="about" className="wrap" style={{ maxWidth: '900px', padding: '0 0 30px' }}>
        <div className="section-label reveal-on-scroll">About</div>

        <div
          className="about-grid reveal-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px minmax(0, 1fr)',
            gap: '44px',
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(26, 29, 31, 0.08), 0 12px 28px rgba(26, 29, 31, 0.12)',
            }}
          >
            <img
              src={everettPhoto}
              alt="Everett Tai"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '360px',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'var(--accent)',
              }}
            />
          </div>

          <div>
            <p style={{ fontSize: '17px', marginBottom: '18px' }}>
              Hi, I'm Everett!
            </p>

            <p style={{ fontSize: '17px', marginBottom: '18px' }}>
              I've always been fascinated by people—how we make decisions, what motivates us,
              and why some experiences feel effortless while others create friction. That
              curiosity led me to study economics and psychology at Dartmouth, where I discovered
              human-centered design as a way to turn questions about people into products that
              solve real problems.
            </p>

            <p style={{ fontSize: '17px', marginBottom: '18px' }}>
              Today, I work as a LAUNCH Analyst at Hilton, where I help tackle business and
              technology challenges while continuing to grow as a designer. Whether I'm
              conducting research, mapping user journeys, prototyping interfaces, or thinking
              through product strategy, I enjoy bringing together analytical thinking and
              creativity to make complex ideas feel intuitive.
            </p>

            <p style={{ fontSize: '17px', marginBottom: '18px' }}>
              What I enjoy most about design is beyond the interface itself—it's the process of
              understanding people. Every project is an opportunity to learn how someone thinks,
              uncover what's getting in their way, and create something that genuinely improves
              their experience. That's what continues to draw me toward product, design, and
              innovation work.
            </p>

            <p style={{ fontSize: '17px', margin: 0 }}>
              Outside of work, you'll usually find me trying new recipes, staying active,
              traveling, or finding excuses to explore somewhere new. As a former Division I
              student-athlete at Dartmouth, I still carry the mindset that years of diving
              instilled in me: curiosity, discipline, and a belief that meaningful progress comes
              through continual iteration. I try to bring that same perspective into every
              project I work on.
            </p>
          </div>
        </div>
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
