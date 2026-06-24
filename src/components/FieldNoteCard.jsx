import { Link } from 'react-router-dom';

export default function FieldNoteCard({ to, tag, title, description, image }) {
  const content = (
    <div className="field-card reveal-on-scroll" style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--rule)',
      borderRadius: '3px',
      overflow: 'hidden',
      height: '100%',
    }}>
      {image && (
        <div style={{ aspectRatio: '16 / 9', overflow: 'hidden' }}>
          <img
            src={image}
            alt={`${title} preview`}
            className="case-thumb-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        </div>
      )}
      <div style={{ padding: '22px 24px' }}>
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
        <h4 className="case-study-title" style={{
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
    </div>
  );

  if (!to) return content;

  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </Link>
  );
}
