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

      <div className="note">
        always happy to talk about any of this in more detail — reach out
      </div>
    </div>
  );
}
