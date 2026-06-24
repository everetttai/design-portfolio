import { Link } from 'react-router-dom';

export default function CaseStudyCard({ to, meta, title, description, isFirst, image }) {
  const ThumbWrapper = to ? Link : 'div';
  const thumbProps = to ? { to } : {};

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
    className="case-study-row reveal-on-scroll"
    >
      <ThumbWrapper {...thumbProps} className="case-thumb-link" style={{
        background: 'var(--bg-card)',
        borderRadius: '3px',
        aspectRatio: '4 / 3',
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
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
          zIndex: 1,
        }} />
        {image && (
          <img
            src={image}
            alt={`${title} preview`}
            className="case-thumb-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        )}
        {!image && (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-soft)',
            fontSize: '13px',
          }}>
            {title}
          </div>
        )}
      </ThumbWrapper>
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
        <h3 className="case-study-title" style={{
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
        {to ? (
          <Link className="case-link" to={to}>Read the case study →</Link>
        ) : (
          <span style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>Write-up coming soon</span>
        )}
      </div>
    </div>
  );
}
