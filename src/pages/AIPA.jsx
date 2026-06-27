import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  CaseStudyHeader,
  StatRow,
  ContentsNav,
  Section,
  PersonaGrid,
  PullQuote,
  ImagePlaceholder,
  LimitationList,
  CaseStudyFooter,
} from '../components/case-study/CaseStudyParts';

import modeSelector from '../assets/aipa/mode_selector.png';
import cameraOptional from '../assets/aipa/camera_optional.png';
import testOrdering from '../assets/aipa/test_ordering.png';
import reportsTab from '../assets/aipa/reports_tab.jpg';
import practiceGapDiagram from '../assets/aipa/practice_gap_diagram.svg';

const SECTIONS = [
  { id: 'problem', label: 'The problem' },
  { id: 'research', label: 'Research' },
  { id: 'design-problems', label: 'Research → design problems' },
  { id: 'sketches', label: 'Sketches to structure' },
  { id: 'shipped', label: 'What shipped' },
  { id: 'limitations', label: 'Known limitations' },
  { id: 'reflection', label: 'Reflection' },
];

export default function AIPA() {
  useDocumentTitle('Everett Tai | AI Patient Actor');
  return (
    <div className="wrap" style={{ padding: '60px 0 100px' }}>
      <Link className="case-link" to="/portfolio" style={{ marginBottom: '40px', display: 'inline-block' }}>
        ← Back to all work
      </Link>

      <CaseStudyHeader
        kicker="Case study · DALI Lab"
        title="AI Patient Actor"
        dek="Giving medical students unlimited reps at the hardest part of becoming a doctor — talking to patients."
        meta={[
          { label: 'Role', value: 'UI/UX design · full project' },
          { label: 'Team', value: 'DALI Lab × Geisel School of Medicine · with Cinay Dilibal' },
        ]}
      />

      <StatRow
        stats={[
          { value: '4', label: 'user interviews' },
          { value: '3', label: 'personas' },
          { value: '3', label: 'conversation modes' },
        ]}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '60px', marginTop: '48px' }}>
        <ContentsNav items={SECTIONS} />

        <div>
          <Section id="problem" number="01" title="The problem">
            <p style={{ marginBottom: '20px' }}>
              Medical students get remarkably little practice actually talking to patients before
              they're expected to do it for real. Standardized-patient sessions — hiring trained
              actors to simulate clinical encounters — are the gold standard, but they're
              expensive, scheduled rarely, and over almost as soon as they start. Everything else
              is reading and lectures. There's a real gap between knowing the material and being
              able to sit across from a nervous, scared, or evasive patient and get a usable
              history out of them.
            </p>
            <ImagePlaceholder label="The practice gap" aspect="1350 / 630" src={practiceGapDiagram} fit="contain" />
            <p style={{ margin: '20px 0' }}>
              AI Patient Actor (AIPA) is a DALI Lab project built with Dr. Thomas Thesen at
              Geisel School of Medicine to close that gap: an AI-simulated patient students can
              practice on as many times as they want, with structured feedback after each
              encounter, plus an educator side for instructors managing a whole class of students
              and cases at once.
            </p>
            <p>
              I worked on this in close collaboration with Cinay Dilibal (Design Mentor) across
              the full term — research, sketching, wireframes, and final UI together, with both
              of us contributing across feature areas rather than splitting ownership by section.
            </p>
          </Section>

          <Section id="research" number="02" title="Understanding who we were designing for">
            <p style={{ marginBottom: '20px' }}>
              Before sketching anything, we ran four user interviews with med students across
              different years to understand what made existing practice — or the lack of it —
              frustrating. That research converged into three personas, each representing a
              different point in a med student's training:
            </p>

            <PersonaGrid
              personas={[
                { name: '1st-year', role: 'New to patient interaction', quote: 'I just need low-stakes reps to get comfortable thinking on the fly before rotations start.' },
                { name: '3rd-year', role: 'On rotations, post-STEP 1', quote: 'I need to apply exam knowledge to real interaction, under actual time pressure.' },
                { name: '2nd/3rd-year', role: 'Buried in STEP 2/3 content', quote: 'I need practice that builds confidence without adding to an already overwhelming load.' },
              ]}
            />

            <p style={{ margin: '24px 0 20px' }}>
              We built one of these out in more depth — Mac, a detail-oriented 3rd-year — through
              an empathy map and a journey map of someone testing AIPA for the first time. The
              journey map is where the real insight showed up: a visible emotional dip mid-session,
              right at the point where the student got confused navigating settings and received
              inconsistent feedback on diagnosis effectiveness, before recovering toward
              satisfaction once they understood the tool. That dip told us the first AI patient
              encounter someone has is fragile — confusing UI in that window doesn't just cost a
              session, it costs trust in the whole tool.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Mac's persona also surfaced the line that ended up shaping a real design decision
              later in the term:
            </p>
            <PullQuote>
              Showing empathy comes naturally in person, but typing it out over and over can get
              laborious.
            </PullQuote>
            <p>
              That's a researcher's quote, not a designer's hunch — and it's a big part of why
              voice and avatar modes weren't a "nice to have" add-on. Text-only practice was
              measurably missing something that mattered to the people actually using it.
            </p>
          </Section>

          <Section id="design-problems" number="03" title="From research to design problems">
            <p style={{ marginBottom: '20px' }}>
              Partway through the term, we sat down with Dr. Thesen to translate the interview
              findings into specific design problems rather than general impressions. Two problems
              came out of that session especially clearly.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '10px' }}>
              Feedback was a wall of text nobody read.
            </p>
            <PullQuote>
              My first inclination when I see a wall of text like this is to not read it.
            </PullQuote>
            <p style={{ marginBottom: '24px' }}>
              The fix wasn't "write shorter feedback" — it was structural: large bold section
              headers, collapsible sections to cut cognitive load, skimmable bullet-point
              language, and a comment-and-suggestion model for the transcript itself, so feedback
              could live in context next to the moment it was about, instead of as one dense
              summary block at the end.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '10px' }}>
              Diagnostic testing felt like a vending machine, not a clinical decision.
            </p>
            <PullQuote>
              Right now you can click "diagnostic tests" and it gives you everything.
            </PullQuote>
            <p style={{ marginBottom: '20px' }}>
              That's a problem for a training tool specifically — if ordering every test costs
              nothing, students never practice the actual skill of deciding what's appropriate. We
              scoped this as: let students choose specific tests rather than broad categories,
              give feedback that explains why a test choice was or wasn't appropriate, and
              longer-term, design cases that simulate real tradeoffs like time constraints and
              patient comfort.
            </p>

            <p>
              We also wrote down team priorities at this point, in order: get the existing
              prototype solid first, then educator/student accounts and class functionality, then
              emotional voices and personalities, then broader functionality. That ordering
              mattered later — it's the reason voice/avatar work didn't start until the foundation
              was actually working for real students.
            </p>
          </Section>

          <Section id="sketches" number="04" title="From sketches to structure">
            <p style={{ marginBottom: '18px' }}>
              Once we had problems to design against, we ran a Crazy 8s sprint exploring three
              different shapes for the core encounter flow: a forward flow ("which tests, then
              feedback"), a reversed flow that front-loaded urgency as a framing device to
              motivate careful diagnosis, and a version built explicitly around the feel of
              conversing with a bot rather than filling out a form.
            </p>
            <p style={{ marginBottom: '18px' }}>
              That divergence converged into a paper wireframe board — log-in, case selection, two
              rounds of chat UI, and two rounds of the feedback rubric screen — annotated and
              walked through together before anything touched Figma. Working at this resolution
              let us argue about flow logic with a marker instead of a mouse, which is a lot
              cheaper to throw away.
            </p>
            <p>
              A separate set of notebook sketches from earlier in the process shows the same ideas
              in a rawer form — sign-in, a case/rubric setup panel, a chat interface with patient
              demographics on the side, and a documents/test-ordering panel with options for
              physical exam, vitals, reflexes, and blood tests. The diagnostic-testing problem from
              section 3 is already being worked out here, well before it became a written design
              problem: test types listed individually rather than bundled into one omniscient
              button.
            </p>
          </Section>

          <Section id="shipped" number="05" title="What shipped">
            <p style={{ marginBottom: '32px' }}>
              By the end of the term, the core flow worked end-to-end, and several features that
              started as "later" items had become real.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>
              Three conversation modes, not one.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Students choose between Text, Speech, and Avatar mode for both how they speak to the
              patient and how the patient responds to them — a direct response to the
              empathy-in-text problem from research. Avatar mode (built on Tavus) gives students a
              patient who looks at them, speaks, and reacts, which is as close as the tool gets to
              replicating an actual standardized-patient encounter.
            </p>
            <ImagePlaceholder label="Choosing a conversation mode" aspect="961 / 800" src={modeSelector} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              Camera as opt-in, not a gate.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Early in the term, camera access was an all-or-nothing requirement before a session
              could start — fine until you actually watch someone fail a webcam permission check
              and get stuck. We redesigned this around explicit choice: a device-check flow that
              confirms camera and microphone are ready, frames expectations clearly, and never
              forces a student to be on camera to practice.
            </p>
            <ImagePlaceholder label="Device check before an encounter" aspect="1346 / 889" src={cameraOptional} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              Diagnostic testing, broken into real categories.
            </p>
            <p style={{ marginBottom: '18px' }}>
              This is the direct payoff of the "vending machine" problem from section 3. Instead
              of one button that orders everything, students choose from named, grouped test
              categories — vital signs, physical exams, cardiovascular and neuromuscular workups,
              and more — alongside the live conversation with the patient. Ordering a test is now
              a decision, not a freebie.
            </p>
            <ImagePlaceholder label="Ordering tests during a live encounter" aspect="3024 / 1537" src={testOrdering} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              An educator side that's more than a gradebook.
            </p>
            <p>
              Educators get a Cases library, encounter configuration (including which conversation
              modes are available per case), and a Reports tab built around an AI assistant that
              can answer questions like "summarize this week's encounters" using live course data,
              with one-click quick reports for things like at-risk students and diagnosis accuracy
              trends.
            </p>
            {/* aspect is a placeholder guess — reports_tab.jpg isn't in this sandbox, so I couldn't measure it. Adjust if the image looks stretched. */}
            <ImagePlaceholder label="Educator Reports with the AI assistant" aspect="16 / 9" src={reportsTab} />
          </Section>

          <Section id="limitations" number="06" title="Known limitations">
            <p style={{ marginBottom: '20px' }}>
              A few things worth naming rather than glossing over:
            </p>
            <LimitationList
              items={[
                {
                  title: 'Structured feedback isn\'t reliably working yet',
                  body: 'The skill-breakdown feedback screen — the direct design response to the "wall of text" research finding — isn\'t stable in the current live build. The design intent (named skill categories instead of one dense paragraph) was scoped and built, but it\'s not something I can point to as a working feature today.',
                },
                {
                  title: '[Placeholder — second limitation]',
                  body: '[Let me know what else is worth flagging here — e.g. avatar mode reliability, accessibility, or the educator/student split — and I\'ll write it in your voice.]',
                },
              ]}
            />
          </Section>

          <Section id="reflection" number="07" title="Reflection">
            <p style={{ marginBottom: '20px' }}>
              [Placeholder — your reflection goes here in first person. A few prompts: What's the
              one decision from this project you'd defend hardest if someone pushed back on it?
              What would you do differently if you started the research phase over? Did working
              across two product audiences at once — students and educators — change how you
              thought about any individual screen?]
            </p>
            <p>
              The other thing that stuck with me was designing for two genuinely different
              audiences inside one product. Students needed a space that felt low-stakes and
              private enough to be bad at something in front of — that's where the camera opt-in
              and the practice-vs-submit distinction came from. Educators needed the opposite:
              visibility, structure, and tools to manage a whole cohort at once, which is why the
              Reports tab and AI Educator Assistant exist as their own surface entirely. The hard
              part wasn't designing either side — it was making sure both sides still felt like
              the same product. Same visual language, same interaction patterns, same sense of
              what AIPA actually <em>is</em>, even though a student opening the app and an
              educator opening the app are trying to do almost nothing alike.
            </p>
          </Section>
        </div>
      </div>

      <CaseStudyFooter
        backHref="/portfolio"
        nextHref="/work/aspire"
        nextLabel="Aspire"
      />
    </div>
  );
}
