import { Link } from 'react-router-dom';
import {
  CaseStudyHeader,
  StatRow,
  ContentsNav,
  Section,
  PersonaGrid,
  BeforeAfter,
  ImagePlaceholder,
  LimitationList,
  CaseStudyFooter,
} from '../components/case-study/CaseStudyParts';

const SECTIONS = [
  { id: 'problem', label: 'The problem' },
  { id: 'research', label: 'Research' },
  { id: 'model-to-interface', label: 'Model → interface' },
  { id: 'data-hub', label: 'The Data Hub' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'reflection', label: 'Reflection' },
];

export default function SimReach() {
  return (
    <div className="wrap" style={{ padding: '60px 0 100px' }}>
      <Link className="case-link" to="/" style={{ marginBottom: '40px', display: 'inline-block' }}>
        ← Back to all work
      </Link>

      <CaseStudyHeader
        kicker="Case study · DALI Lab"
        title="SimReach"
        dek="Designing decision support for hospital staffing decisions that move patients closer to care."
        meta={[
          { label: 'Role', value: 'UI/UX design · full project' },
          { label: 'Team', value: 'DALI Lab × Moen Lab · with Faith Niyi-Awolesi' },
          { label: 'Timeline', value: 'Sept 2025 – Jan 2026' },
          { label: 'Tools', value: 'Figma' },
          {
            label: 'Live',
            value: <a href="https://simreach-fullstack.fly.dev/" target="_blank" rel="noreferrer" style={{ color: '#B36E4D' }}>simreach-fullstack.fly.dev ↗</a>,
          },
        ]}
      />

      {/* Hero — your strongest finished screen, edge-to-edge. Send me the
          Scenario Results screenshot and I'll drop it in here. */}
      <ImagePlaceholder
        label="Hero — Scenario Results screen (headline-first layout)"
        aspect="16 / 9"
        assetKey="simreach/scenario_results_hero"
      />
      <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 50px' }}>
        The Scenario Results screen, after the headline-first restructure described in section 3.
      </p>

      {/* Stat row intentionally omitted for now — see note in chat about
          real figures vs. invented ones. Drop it back in once you have
          (or decide to drop) real numbers:
      <StatRow
        stats={[
          { value: '—%', label: 'optimal reallocation' },
          { value: '—%', label: 'travel time reduction' },
          { value: '—', label: 'patients impacted' },
          { value: '95%', label: 'confidence interval' },
        ]}
        note="Confidence interval is the only figure confirmed in the project writeup so far — the rest need real simulation output before they can go live."
      />
      */}

      <div style={{
        display: 'grid',
        gridTemplateColumns: '220px minmax(0, 1fr)',
        gap: '56px',
      }}
      className="case-body-grid"
      >
        <ContentsNav items={SECTIONS} />

        <div>
          <Section id="problem" number="01" title="The problem">
            <p style={{ marginBottom: '18px' }}>
              Hospitals that run "hub-and-spoke" cancer care networks — one large hospital plus
              several smaller satellite clinics — face a constant, high-stakes question: how many
              oncologists should we send to each satellite, and how often?
            </p>
            <p style={{ marginBottom: '18px' }}>
              Today, that decision is mostly guesswork. Administrators use simple supply-and-demand
              ratios, daily huddle documents, and tools like QGenda that track where physicians
              are, but nothing that models where they should be. Get it wrong, and patients in
              rural areas drive hours for care that could be closer to home — or a satellite clinic
              sits under-booked while the hub is overwhelmed.
            </p>
            <ImagePlaceholder
              label="Diagram — hub-and-spoke network: one hub, satellite clinics, drive-time arcs"
              aspect="16 / 9"
              assetKey="simreach/hub_spoke_diagram"
            />
            <p style={{ marginTop: '24px', marginBottom: '18px' }}>
              SimReach is a decision-support tool built on top of a real simulation framework
              developed in Dartmouth's Moen Lab, which models thousands of counterfactual scenarios
              to estimate how much patient travel time a hospital could save by reallocating a
              percentage of oncologist visits from a hub to a satellite clinic — and at what point
              that reallocation stops helping and starts hurting.
            </p>
            <p>
              Our job as designers was to take a working statistical model — bootstrapped
              simulations, confidence intervals, grid-search optimization — and turn it into
              something a hospital director with no statistics background could use to make a real
              staffing decision with confidence.
            </p>
          </Section>

          <Section id="research" number="02" title="Who actually makes this decision, and what do they need?">
            <p style={{ marginBottom: '20px' }}>
              We ran stakeholder interviews and synthesized three personas representing the
              different altitudes at which this decision gets made:
            </p>

            <PersonaGrid
              personas={[
                { name: 'Colin', role: 'Sr. Director, Oncology Services', quote: 'How many slots am I going to lose if I move this physician?' },
                { name: 'Dr. Thomas', role: 'Chair, Radiation Oncology', quote: 'Food should taste the same in New Hampshire as it does in California.' },
                { name: 'Deborah', role: 'System VP, Oncology', quote: 'I need evidence strong enough to defend this to leadership.' },
              ]}
            />

            <p style={{ margin: '24px 0 20px' }}>
              These three pulled in different directions — Colin wanted operational specifics, Dr.
              Thomas wanted clinical legitimacy, Deborah wanted boardroom-ready evidence — and a
              single results screen had to satisfy all three without becoming a kitchen sink.
            </p>

            <p style={{ marginBottom: '14px' }}>
              From this research we wrote five needs statements that became our north star for the
              information architecture:
            </p>
            <ol style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <li><em>A system-wide hub unifying provider allocation, site capacity, and patient demand forecasts</em> → became the <strong>Data Hub</strong></li>
              <li><em>Visualize transportation burdens alongside patient savings</em> → became <strong>net travel time savings</strong></li>
              <li><em>Visualize existing patient, provider, and travel data</em> → became the <strong>Scenario Overview</strong></li>
              <li><em>Simulate changes in staffing and patient allocation</em> → became <strong>Run a New Scenario</strong>, with θ (% of visits reallocated) as the core dial</li>
              <li><em>Compare potential future scenarios to recent months' data</em> → became <strong>Compare</strong> in Scenario Results</li>
            </ol>

            <p>
              One theme cut across all three personas: nobody wanted raw output. Research notes
              called explicitly for "decision-support recommendations, not just raw data." That's
              why Scenario Results ends in a plain-language "Decision Support Takeaways" section
              instead of stopping at the chart.
            </p>
          </Section>

          <Section id="model-to-interface" number="03" title="Translating a statistical model into an interface">
            <p style={{ marginBottom: '18px' }}>
              The underlying simulation runs thousands of bootstrapped iterations per scenario,
              outputs results with 95% confidence intervals, and finds an optimal reallocation
              percentage via grid search — the point where patient travel savings are maximized
              before they start declining or reversing.
            </p>
            <p style={{ marginBottom: '28px' }}>
              That's a hard thing to show simply. Our early iterations showed the raw optimization
              curve as the primary view — honest, but it asked the user to interpret a graph before
              getting an answer. Hospital directors aren't data scientists; they came to SimReach
              with a question, not a curiosity about confidence bands.
            </p>

            <BeforeAfter
              before={{ label: 'Raw curve as the primary view', caption: 'The version that didn\u2019t work — honest, but asks for interpretation before delivering an answer.', assetKey: 'simreach/before_curve' }}
              after={{ label: 'Answer-first: metric cards on top, curve below', caption: 'Shipped — the answer in the first five seconds; the curve still there for anyone who wants to verify.', assetKey: 'simreach/after_metric_cards' }}
            />

            <p style={{ marginTop: '8px', marginBottom: '12px' }}>
              We restructured Scenario Results around a headline-first hierarchy:
            </p>
            <ul style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><strong>Top:</strong> the answer — optimal % reallocation, travel reduction, patients impacted — as scannable metric cards</li>
              <li><strong>Middle:</strong> the curve, with the optimal point marked, not just plotted</li>
              <li><strong>Bottom:</strong> plain-language takeaways, each pushable to a Notebook to-do in one click</li>
            </ul>
          </Section>

          <Section id="data-hub" number="04" title="Designing for messy, real-world data — the Data Hub">
            <p style={{ marginBottom: '20px' }}>
              Of everything in SimReach, the Data Hub setup flow carried the most inherent
              complexity, simply because of how much real-world data has to pass through it before
              a single simulation can run. The flow needed to hold up against:
            </p>
            <ul style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              <li><strong>Partial uploads.</strong> The review screen auto-expands locations with missing or unmatched columns and collapses ones that validated cleanly.</li>
              <li><strong>Flexible file structure.</strong> An "assign file to location" step lets either a single combined CSV or one file per site work, without forcing a format upfront.</li>
              <li><strong>Delegation.</strong> An assign-to-collaborator flow — search-or-invite by email, pending-request tracking, reminder emails — hands the setup burden to whoever owns the data, without losing visibility.</li>
            </ul>

            <ImagePlaceholder
              label="Upload → validation flow (two stitched screens, or a short looping clip)"
              aspect="16 / 9"
              assetKey="simreach/data_hub_upload_validation"
            />

            <p style={{ marginTop: '24px' }}>
              This was also the flow where I felt the limits of my own context most acutely. Early
              on, I was designing individual upload screens without full visibility into how messy
              the underlying hospital data actually was, or why certain validation rules existed —
              which sometimes meant solving the screen in front of me without fully understanding
              the constraint behind it. That gap closed over the course of the project as I got
              closer to the research and to our partner conversations, but it's worth naming
              honestly rather than implying a tidier process than what happened.
            </p>
          </Section>

          <Section id="limitations" number="05" title="Known limitations (and why I'm naming them)">
            <p style={{ marginBottom: '24px' }}>
              Two things in the shipped product are explicitly not finished, and I think that's
              worth saying outright rather than hiding:
            </p>
            <LimitationList
              items={[
                {
                  title: 'Generic recommendations',
                  body: 'Today, "Decision Support Takeaways" surfaces the same four recommendation types for every scenario — the location names swap in, but the substance doesn\u2019t yet adapt to what the simulation actually found. The next iteration should generate takeaways unique to each scenario\u2019s results.',
                },
                {
                  title: 'Quantitative data quality scores',
                  body: 'The Data Hub\u2019s "94% data quality" score is a placeholder. A more honest version would use qualitative tiers grounded in concrete rules rather than implying false precision.',
                },
              ]}
              note="I'd rather show that I can recognize the gap between shipped and finished than pretend the v1 is the final word."
            />
          </Section>

          <Section id="reflection" number="06" title="Reflection" maxWidth="62ch">
            <p style={{ marginBottom: '18px' }}>
              This was my first project at DALI, and a lot of what I took from it had nothing to do
              with pixels. I learned how a hospital system actually operates day to day — huddle
              documents, QGenda scheduling, the gap between how administrators talk about "supply
              and demand" and what that means for an individual patient's drive time — and I
              learned what it actually takes to design for large, sporadic, inconsistently-formatted
              datasets rather than a clean Figma-friendly dataset I'd invented myself. I also got my
              first real experience working inside a cross-functional team with a PM, full-stack
              engineers, and other designers, instead of running a solo class project end to end.
            </p>
            <p>
              If I could change one thing, I'd ask for more scope and context earlier. In the first
              term especially, I was sometimes handed a flow to design without a clear enough
              picture of the research behind it or the data constraints driving it. That's a normal
              growing pain on a first lab project, but it's also the clearest lesson I'm carrying
              forward: ask for the why up front, even when it feels like it might slow things down,
              because designing without it costs more time later.
            </p>
          </Section>
        </div>
      </div>

      <CaseStudyFooter
        backHref="/"
        nextHref="/work/aipa"
        nextLabel="AI Patient Actor"
      />
    </div>
  );
}
