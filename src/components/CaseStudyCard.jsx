import { Link } from 'react-router-dom';

export default function CaseStudyCard({ to, meta, title, description, isFirst }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: '48px',
      padding: '36px 0',
      borderTop: isFirst ? '1px solid var(--rule)' : 'none',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'start',
    }}
    className="case-study-row"
    >
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--rule)',
        borderRadius: '3px',
        aspectRatio: '4 / 3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-soft)',
        fontSize: '13px',
        position: 'relative',
      }}>
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--accent)',
          opacity: 0.55,
        }} />
        {title} hero image
      </div>
      <div>
        <div style={{
          fontSize: '13px',
          color: 'var(--ink-soft)',
          marginBottom: '10px',
          display: 'flex',
          gap: '10px',
        }}>
          {meta.map((item, i) => (
            <span key={item}>
              {item}
              {i < meta.length - 1 && <span style={{ marginLeft: '10px', opacity: 0.5 }}>·</span>}
            </span>
          ))}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '28px',
          marginBottom: '10px',
        }}>
          {title}
        </h3>
        <p style={{
          color: 'var(--ink-soft)',
          fontSize: '15px',
          marginBottom: '16px',
          maxWidth: '440px',
        }}>
          {description}
        </p>
        <Link className="case-link" to={to}>Read the case study →</Link>
      </div>
    </div>
  );
}
