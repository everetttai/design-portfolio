export default function About() {
  return (
    <div className="wrap" style={{ padding: '70px 0 100px', maxWidth: '680px' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '38px',
        marginBottom: '24px',
      }}>
        About
      </h1>

      <p style={{ fontSize: '16px', marginBottom: '18px' }}>
        I'm Everett Tai, a recent Dartmouth College graduate with a degree in Economics and
        Psychology and a minor in Human-Centered Design. I currently work full-time as a LAUNCH
        analyst at Hilton, and I design part-time and on the side — which is also what I'm looking
        for more of.
      </p>

      <p style={{ fontSize: '16px', marginBottom: '18px' }}>
        My design background started in a UI/UX class at Dartmouth, which is where Aspire (the
        case study on this site) came from — a full ideation-to-delivery project I led across a
        four-person team. From there I joined Dartmouth's DALI Lab as a UI/UX designer, where I
        worked across two larger, multi-quarter projects: SimReach, a decision-support tool for
        hospital administrators, and AI Patient Actor, a simulated-patient practice tool for
        medical students.
      </p>

      <p style={{ fontSize: '16px', marginBottom: '18px' }}>
        Outside of screens, my Human-Centered Design minor also had me build a portable composter
        from scratch in an intro engineering class — a reminder that the same research-and-iterate
        instincts apply whether the constraint is a Figma frame or a sheet of plywood.
      </p>

      <div style={{
        marginTop: '44px',
        paddingTop: '28px',
        borderTop: '1px solid var(--rule)',
      }}>
        <div style={{
          fontSize: '12.5px',
          color: 'var(--ink-soft)',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          marginBottom: '16px',
        }}>
          Also, some academic writing
        </div>
        <p style={{ fontSize: '14.5px', color: 'var(--ink-soft)', marginBottom: '20px', maxWidth: '58ch' }}>
          The Econ/Psych degree wasn't just a line on a resume — a few papers from it, for anyone curious:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <li>
            <a href="/papers/psyc11-instagram-priming.pdf" target="_blank" rel="noopener noreferrer" className="case-link" style={{ fontSize: '14.5px', fontWeight: 600 }}>
              Priming with Instagram
            </a>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginTop: '4px' }}>
              Tested whether thinking about friends vs. solo activities changed how looking at
              Instagram affected people's self-esteem and sense of loneliness.
            </p>
          </li>
          <li>
            <a href="/papers/econ66-chinese-earnings.pdf" target="_blank" rel="noopener noreferrer" className="case-link" style={{ fontSize: '14.5px', fontWeight: 600 }}>
              Do US Markets Discount Earnings from Chinese Firms?
            </a>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginTop: '4px' }}>
              Tested whether investors started paying less attention to earnings news from
              Chinese companies after US-China tensions rose during COVID.
            </p>
          </li>
          <li>
            <a href="/papers/econ20-minimum-wage.pdf" target="_blank" rel="noopener noreferrer" className="case-link" style={{ fontSize: '14.5px', fontWeight: 600 }}>
              Minimum Wage Increase on Wages and Income
            </a>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', marginTop: '4px' }}>
              Compared young workers' pay in Nebraska, which raised its minimum wage, against
              neighboring Oklahoma, which didn't — found the increase didn't produce the wage
              gains basic theory would predict.
            </p>
          </li>
        </ul>
      </div>

      <div className="note" style={{ marginTop: '32px' }}>
        always happy to talk about any of this in more detail — reach out
      </div>
    </div>
  );
}
