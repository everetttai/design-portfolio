import { useEffect, useState } from 'react';

/* ============================================================
   Shared case-study layout primitives.
   Built for SimReach first; AIPA and Aspire can adopt the same
   pieces later so all three case studies share one visual language
   instead of three one-off layouts.
   ============================================================ */

// ---------- Top matter: title block + metadata sidebar ----------

export function CaseStudyHeader({ kicker, title, dek, meta }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 280px',
      gap: '48px',
      alignItems: 'start',
      marginBottom: '48px',
    }}
    className="case-header-grid"
    >
      <div>
        <div style={{
          fontSize: '13px',
          color: '#9A9B93',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '18px',
        }}>
          {kicker}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 6vw, 64px)',
          lineHeight: 1.04,
          marginBottom: '22px',
        }}>
          {title}
        </h1>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 2vw, 21px)',
          color: 'var(--ink-soft)',
          lineHeight: 1.45,
          maxWidth: '46ch',
        }}>
          {dek}
        </p>
      </div>

      <aside style={{
        background: '#E6E7E2',
        border: '1px solid rgba(26, 29, 31, 0.06)',
        borderRadius: '14px',
        padding: '20px 22px 6px',
      }}>
        {meta.map(({ label, value }, i) => (
          <div key={i} style={{
            paddingBottom: '13px',
            marginBottom: '13px',
            borderBottom: i < meta.length - 1 ? '1px solid rgba(26, 29, 31, 0.08)' : 'none',
          }}>
            <div style={{
              fontSize: '13.5px',
              color: '#9A9B93',
              marginBottom: '3px',
            }}>
              {label}
            </div>
            <div style={{ fontSize: '15.5px', lineHeight: 1.4 }}>
              {value}
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}

// ---------- "At a glance" stat row ----------

export function StatRow({ stats, note }) {
  return (
    <div style={{ margin: '8px 0 56px' }}>
      <div style={{
        fontSize: '13px',
        color: 'var(--ink-soft)',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        marginBottom: '18px',
      }}>
        At a glance
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
      }}
      className="stat-row-grid"
      >
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '20px 18px',
            borderLeft: i > 0 ? '1px solid var(--rule)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              lineHeight: 1,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginTop: '6px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      {note && (
        <div style={{ fontSize: '12.5px', color: 'var(--ink-soft)', marginTop: '10px' }}>
          {note}
        </div>
      )}
    </div>
  );
}

// ---------- Sticky numbered contents nav ----------

export function ContentsNav({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    // A "current section" line near the top of the viewport. Whichever
    // section's top has most recently scrolled past this line is active.
    // This works correctly for sections taller than the viewport, unlike a
    // narrow IntersectionObserver band, which can lose every section at
    // once mid-scroll and freeze on a stale value.
    const LINE = 140;

    let raf = 0;
    const updateActive = () => {
      raf = 0;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= LINE) {
          current = section;
        } else {
          break;
        }
      }
      setActiveId(current.id);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <nav style={{ position: 'sticky', top: '110px', alignSelf: 'start' }} aria-label="Case study sections">
      <div style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: 'var(--ink-soft)',
        marginBottom: '14px',
      }}>
        Contents
      </div>
      <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        {items.map(({ id, label }, i) => {
          const active = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  display: 'flex',
                  gap: '8px',
                  fontSize: '13.5px',
                  textDecoration: 'none',
                  color: active ? 'var(--ink)' : 'var(--ink-soft)',
                  borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
                  paddingLeft: '10px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-soft)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ---------- Section wrapper with numbered heading ----------

export function Section({ id, number, title, children, maxWidth }) {
  return (
    <section id={id} style={{ padding: '64px 0', maxWidth: maxWidth || 'none', scrollMarginTop: '100px' }}>
      <h2 style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '14px',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(26px, 3vw, 32px)',
        marginBottom: '26px',
      }}>
        <span style={{ color: 'var(--accent)', fontSize: '16px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
          {number}
        </span>
        {title}
      </h2>
      <div style={{ fontSize: '16.5px', lineHeight: 1.65, color: 'var(--ink)' }}>
        {children}
      </div>
    </section>
  );
}

// ---------- Persona card grid ----------

export function PersonaGrid({ personas }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${personas.length}, 1fr)`,
      gap: '18px',
      margin: '28px 0',
    }}
    className="persona-grid"
    >
      {personas.map((p, i) => (
        <div key={i} style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--rule)',
          borderRadius: '12px',
          padding: '20px',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '17px', marginBottom: '2px' }}>
            {p.name}
          </div>
          <div style={{ fontSize: '12.5px', color: 'var(--ink-soft)', marginBottom: '12px' }}>
            {p.role}
          </div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '14.5px',
            lineHeight: 1.5,
            color: 'var(--ink)',
          }}>
            “{p.quote}”
          </p>
        </div>
      ))}
    </div>
  );
}

// ---------- Before / after pair ----------

export function BeforeAfter({ before, after }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      margin: '32px 0',
    }}
    className="before-after-grid"
    >
      {[{ tag: 'Before', ...before }, { tag: 'After', ...after }].map((item, i) => (
        <div key={i}>
          <div style={{
            display: 'inline-block',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: item.tag === 'After' ? 'var(--accent)' : 'var(--ink-soft)',
            border: `1px solid ${item.tag === 'After' ? 'var(--accent)' : 'var(--rule)'}`,
            borderRadius: '999px',
            padding: '3px 11px',
            marginBottom: '12px',
          }}>
            {item.tag}
          </div>
          <ImagePlaceholder label={item.label} aspect={item.aspect || '4 / 3'} assetKey={item.assetKey} src={item.src} />
          {item.caption && (
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginTop: '10px' }}>
              {item.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ---------- Image placeholder (used until real screenshots are dropped in) ----------

export function ImagePlaceholder({ label, aspect = '16 / 10', assetKey, src, fit = 'cover', background }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        style={{
          width: '100%',
          aspectRatio: aspect,
          objectFit: fit,
          borderRadius: '10px',
          border: '1px solid var(--rule)',
          background: background || (fit === 'contain' ? 'var(--bg-card)' : undefined),
          display: 'block',
        }}
      />
    );
  }
  return (
    <div style={{
      width: '100%',
      aspectRatio: aspect,
      borderRadius: '10px',
      border: '1px dashed var(--rule)',
      background: 'repeating-linear-gradient(45deg, var(--bg-card) 0px, var(--bg-card) 10px, var(--bg) 10px, var(--bg) 20px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      color: 'var(--ink-soft)',
      fontSize: '13px',
      textAlign: 'center',
      padding: '20px',
    }}>
      <span style={{ fontWeight: 500 }}>{label}</span>
      {assetKey && (
        <span style={{ fontSize: '11px', fontFamily: 'monospace', opacity: 0.7 }}>
          [{assetKey}]
        </span>
      )}
    </div>
  );
}

// ---------- Limitation callout ----------

export function LimitationList({ items, note }) {
  return (
    <div style={{ margin: '8px 0' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '16px',
          padding: '20px 0',
          borderTop: i > 0 ? '1px solid var(--rule)' : 'none',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '18px',
            color: 'var(--accent)',
            flexShrink: 0,
          }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '15.5px', marginBottom: '6px' }}>
              {item.title}
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              {item.body}
            </p>
          </div>
        </div>
      ))}
      {note && (
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '14.5px',
          color: 'var(--accent)',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid var(--rule)',
        }}>
          {note}
        </p>
      )}
    </div>
  );
}

// ---------- Footer: next-project nav ----------

export function CaseStudyFooter({ prevHref, prevLabel, nextHref, nextLabel, backHref }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
      marginTop: '40px',
      paddingTop: '32px',
      borderTop: '1px solid var(--rule)',
      fontSize: '14px',
    }}>
      <a href={backHref} className="case-link" style={{ borderBottomColor: 'var(--rule)' }}>
        ← All work
      </a>
      {nextHref && (
        <a href={nextHref} className="case-link">
          Next: {nextLabel} →
        </a>
      )}
    </div>
  );
}
