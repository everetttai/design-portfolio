import { Link } from 'react-router-dom';

export default function FieldNoteCard({ to, tag, title, description }) {
  const content = (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--rule)',
      borderRadius: '3px',
      padding: '22px 24px',
      height: '100%',
    }}>
      <span style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--accent)',
        fontWeight: 600,
        marginBottom: '10px',
        display: 'block',
      }}>
        {tag}
      </span>
      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '19px',
        marginBottom: '8px',
      }}>
        {title}
      </h4>
      <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
        {description}
      </p>
    </div>
  );

  if (!to) return content;

  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </Link>
  );
}
