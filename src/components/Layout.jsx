import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

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

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // "About" is a section of the home page, not its own route. From home we
  // smooth-scroll in place; from any other page we route home first, then let
  // Home pick up the #about hash and scroll. URL stays shareable as /#about.
  const handleAbout = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('about');
      if (el) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        window.history.replaceState(null, '', '/#about');
      }
    } else {
      navigate({ pathname: '/', hash: '#about' });
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
          <nav style={{ display: 'flex', gap: '28px' }}>
            <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
            <a href="/#about" onClick={handleAbout} style={plainNavStyle}>About</a>
            <NavLink to="/portfolio" style={navLinkStyle}>Work</NavLink>
            <a href="mailto:everett.tai@dali.dartmouth.edu" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: '14px' }}>
              Contact
            </a>
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
          fontSize: '13px',
          color: 'var(--ink-soft)',
        }}>
          <span>© 2026 Everett Tai</span>
          <a href="mailto:everett.tai@dali.dartmouth.edu" style={{ color: 'var(--ink)' }}>
            everett.tai@dali.dartmouth.edu
          </a>
        </div>
      </footer>
    </>
  );
}
