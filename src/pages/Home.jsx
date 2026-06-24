import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="wrap" style={{ padding: '70px 0 100px', maxWidth: '720px' }}>

      <span style={{
        fontSize: '13px',
        color: 'var(--accent)',
        fontWeight: 500,
        letterSpacing: '0.02em',
        marginBottom: '18px',
        display: 'inline-block',
        borderBottom: '1px solid rgba(194, 73, 20, 0.4)',
        paddingBottom: '5px',
      }}>
        Hi, I'm Everett
      </span>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '44px',
        lineHeight: 1.15,
        letterSpacing: '-0.01em',
        marginBottom: '22px',
      }}>
        Recent Dartmouth grad designing products for healthcare, education, and career tools.
      </h1>

      <p style={{ fontSize: '16px', marginBottom: '18px' }}>
        I'm a recent Dartmouth College graduate with a degree in Economics and Psychology
        and a minor in Human-Centered Design. I currently work full-time as a LAUNCH analyst
        at Hilton, and I design part-time and on the side — which is also what I'm looking
        for more of.
      </p>

      <p style={{ fontSize: '16px', marginBottom: '18px' }}>
        My design background started in a UI/UX class at Dartmouth, which is where Aspire
        (one of the case studies in my work) came from — a full ideation-to-delivery project
        I led across a four-person team. From there I joined Dartmouth's DALI Lab as a UI/UX
        designer, where I worked across two larger, multi-quarter projects: SimReach, a
        decision-support tool for hospital administrators, and AI Patient Actor, a
        simulated-patient practice tool for medical students.
      </p>

      <p style={{ fontSize: '16px', marginBottom: '32px' }}>
        Outside of screens, my Human-Centered Design minor also had me build a portable
        composter from scratch in an intro engineering class — a reminder that the same
        research-and-iterate instincts apply whether the constraint is a Figma frame or a
        sheet of plywood.
      </p>

      <Link to="/portfolio" className="case-link" style={{ fontSize: '16px', marginBottom: '50px', display: 'inline-block' }}>
        See Work →
      </Link>

      <div className="section-label" style={{ marginTop: '20px' }}>Skills</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '28px',
        marginBottom: '40px',
      }}>
        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            marginBottom: '8px',
          }}>
            Design &amp; Prototyping
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
            Figma, user research, prototyping, visual &amp; UI design
          </p>
        </div>

        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            marginBottom: '8px',
          }}>
            Research &amp; Data
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
            R, Python, Stata, Excel, NLTools (fMRI / neuroimaging analysis)
          </p>
        </div>

        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            marginBottom: '8px',
          }}>
            Fabrication
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
            SolidWorks
          </p>
        </div>

        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            marginBottom: '8px',
          }}>
            Communication
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
            PowerPoint
          </p>
        </div>
      </div>

      <div className="note">
        always happy to talk about any of this in more detail — reach out
      </div>

    </div>
  );
}
