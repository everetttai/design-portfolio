import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const EMAIL = 'everetthtai@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/everett-tai-2a0524251';

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? 'var(--ink)' : 'var(--ink-soft)',
  textDecoration: 'none',
  fontSize: '14px',
});

const plainNavStyle = {
  color: 'var(--ink-soft)',
  textDecoration: 'none',
  fontSize: '14px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
  fontFamily: 'inherit',
};

const iconLinkStyle = {
  color: 'var(--ink-soft)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  transition: 'color 0.2s ease, background-color 0.2s ease',
};

function IconLink({ href, label, icon, external }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      style={iconLinkStyle}
      className="icon-link"
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <use href={`/icons.svg#${icon}`} />
      </svg>
    </a>
  );
}

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // About and Contact are sections of the home page, not their own routes.
  // From home we smooth-scroll in place; from any other page we route home
  // first, then let Home pick up the hash and scroll. URL stays shareable
  // (e.g. /#contact).
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        window.history.replaceState(null, '', `/#${id}`);
      }
    } else {
      navigate({ pathname: '/', hash: `#${id}` });
    }
  };

  return (
    <>
      <header style={{
        padding: '28px 0 24px',
        borderBottom: '1px solid var(--rule)',
      }}>
        <div className="wrap" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '20px',
            textDecoration: 'none',
            color: 'var(--ink)',
          }}>
            Everett Tai
          </Link>
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'baseline' }}>
            <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
            <a href="/#about" onClick={scrollToSection('about')} style={plainNavStyle}>About</a>
            <NavLink to="/portfolio" style={navLinkStyle}>Work</NavLink>
            <a href="/resume/Everett-Tai-Resume.pdf" target="_blank" rel="noreferrer" style={plainNavStyle}>
              Resume
            </a>
            <a href="/#contact" onClick={scrollToSection('contact')} style={plainNavStyle}>Contact</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer style={{
        borderTop: '1px solid var(--rule)',
        padding: '30px 0 50px',
      }}>
        <div className="wrap" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--ink-soft)',
        }}>
          <span>© 2026 Everett Tai</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>
              {EMAIL}
            </a>
            <div style={{ display: 'flex', gap: '6px' }}>
              <IconLink href={`mailto:${EMAIL}`} label="Email Everett" icon="mail-icon" />
              <IconLink href={LINKEDIN_URL} label="Everett on LinkedIn" icon="linkedin-icon" external />
              <IconLink href="/resume/Everett-Tai-Resume.pdf" label="View resume PDF" icon="document-icon" external />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
