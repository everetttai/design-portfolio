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

import avatarEncounter from '../assets/aipa/avatar_encounter.jpg';
import modeSelector from '../assets/aipa/mode_selector.jpg';
import cameraOptional from '../assets/aipa/camera_optional.jpg';
import feedbackBreakdown from '../assets/aipa/feedback_breakdown.jpg';
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
          { label: 'Role', value: 'Design, in close collaboration with Cinay Dilibal' },
          { label: 'Team', value: 'Dartmouth DALI Lab · with Cinay Dilibal (Design Mentor)' },
          { label: 'Timeline', value: 'Spring 2025 – June 2026' },
          { label: 'Tools', value: 'Figma' },
          {
            label: 'Live',
            value: <a href="https://patient-actor.dartmouth.edu/" target="_blank" rel="noreferrer" style={{ color: '#B36E4D' }}>patient-actor.dartmouth.edu ↗</a>,
          },
        ]}
      />

      {/* Hero — avatar mode mid-encounter, the clearest available shot of the
          product's most distinctive feature actually running. */}
      <ImagePlaceholder
        label="Avatar mode mid-encounter with an AI-simulated patient"
        aspect="1400 / 796"
        src={avatarEncounter}
      />
      <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 50px' }}>
        Avatar mode mid-encounter — the AI-simulated patient responds in real time over video, voice, or text.
      </p>

      <StatRow
        stats={[
          { value: '4', label: 'student interviews' },
          { value: '3', label: 'personas synthesized' },
          { value: '3', label: 'conversation modes shipped' },
        ]}
        note="Process figures from research and the shipped product — not outcome metrics, since AIPA hasn't run a formal usage study yet."
      />

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
              Becoming a good doctor isn't just knowing medicine — it's knowing how to talk to a
              scared, sick, or grieving person and get the information you need without losing
              their trust. Medical schools teach this through standardized-patient programs:
              trained actors who play patients so students can practice real encounters before
              they touch real ones.
            </p>
            <p style={{ marginBottom: '24px' }}>
              It works, but it doesn't scale. Live actors are expensive, scheduling is hard, and a
              student might get a handful of practice encounters across an entire term — nowhere
              near enough repetition to build real comfort with something as high-stakes as
              telling a patient their diagnosis.
            </p>

            <ImagePlaceholder
              label="A few scheduled standardized-patient sessions vs. unlimited on-demand AIPA reps"
              aspect="1350 / 630"
              src={practiceGapDiagram}
            />
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 28px' }}>
              The practice gap AIPA was built to close — a handful of scheduled sessions vs. practice whenever a student actually has time.
            </p>

            <p>
              Our partner, Thomas Thesen at Geisel School of Medicine, wanted an AI-simulated
              patient students could talk to anytime — by text or by voice — that would behave
              like a real patient, then give them structured feedback afterward. Cinay and I
              joined in Spring 2025, our first quarter on the project together, and the goal that
              quarter was deliberately narrow:
            </p>
            <PullQuote attribution="From the team's project brief, Spring 2025">
              We are a first-term project team, and our primary objective is to deliver a
              minimally functional product that fulfills the core requirements outlined by our
              partners — a simulated patient interview available in both text-to-text and
              speech-to-speech formats, and a feedback system that evaluates performance based on
              established rubrics currently used in the field.
            </PullQuote>
            <p>
              Everything else — avatars, educator tooling, AI-generated reports — came later,
              across the quarters that followed, once that foundation actually worked.
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

          <Section id="design-problems" number="03" title="Turning research into design problems">
            <p style={{ marginBottom: '20px' }}>
              A few weeks into the term, we sat down specifically to translate raw interview
              takeaways into problems the team could actually design against — not just
              "students want better feedback," but a specific articulation of why the current
              feedback failed and what a fix would need to do. Two problems came out of that
              session especially clearly.
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
            <ImagePlaceholder
              label="Choosing between Avatar, Voice, and Chat mode before starting an encounter"
              aspect="1032 / 756"
              src={modeSelector}
            />
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 36px' }}>
              Choosing between Avatar, Voice, and Chat mode before starting an encounter.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>
              Camera as opt-in, not a gate.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Early in the term, camera access was an all-or-nothing requirement before a session
              could start — fine until you actually watch someone fail a webcam permission check
              and get stuck. We redesigned this around explicit choice: a setup flow that explains
              what's recorded and why, what an "acceptable" framing looks like, and a clean
              fallback to practicing without a camera — so a broken camera or a student who isn't
              comfortable being recorded never blocks practice.
            </p>
            <ImagePlaceholder
              label="The camera setup modal, framed as optional for practice rather than a gate"
              aspect="756 / 684"
              src={cameraOptional}
            />
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 36px' }}>
              The camera setup modal, framed as optional for practice rather than a gate.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>
              Feedback redesigned around the actual research problem.
            </p>
            <p style={{ marginBottom: '18px' }}>
              The results screen breaks performance into named skill categories — Empathy &
              Rapport, Communication Clarity, Protocol Adherence, Active Listening, and
              Professionalism — each with its own score bar, plus separate Strengths and Areas for
              Improvement panels. It's the structural fix the "wall of text" research called for,
              not just a visual cleanup of the same dense paragraph.
            </p>
            <ImagePlaceholder
              label="The feedback breakdown screen, with named skill categories instead of a wall of text"
              aspect="720 / 740"
              src={feedbackBreakdown}
            />
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 36px' }}>
              The feedback breakdown screen, with named skill categories instead of a wall of text.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>
              Practice vs. submitted, made explicit.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Not every encounter should count. Students can end a session as a private practice
              run, submit it as a real, gradable encounter, or discard it entirely — so
              exploratory test runs don't clutter an educator's view of actual student progress.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>
              An educator side that's more than a gradebook.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Educators get a Cases library, encounter configuration, and a Reports tab built
              around an AI assistant that can answer questions like "summarize this week's
              encounters" using live course data, with one-click quick reports for things like
              at-risk students and diagnosis accuracy trends.
            </p>
            <ImagePlaceholder
              label="The educator Reports tab, with the AI assistant mid-conversation"
              aspect="1400 / 794"
              src={reportsTab}
            />
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '10px 0 0' }}>
              The educator Reports tab, with the AI assistant mid-conversation.
            </p>
          </Section>

          <Section id="limitations" number="06" title="Known limitations">
            <p style={{ marginBottom: '24px' }}>
              Two things worth naming rather than glossing over:
            </p>
            <LimitationList
              items={[
                {
                  title: 'Timestamp precision across recording providers was never fully solved.',
                  body: 'Hume and Tavus expose conversation events differently, and the team made a deliberate call to ship "usefully aligned" playback rather than pretend at false precision the underlying APIs didn\'t support. That\'s the right call, but it\'s a real limitation a future team will need to revisit.',
                },
                {
                  title: 'The educator AI reporting feature leaned more on Anthropic\'s managed infrastructure than the original plan called for.',
                  body: 'It started as a custom MCP-server concept and ended up built on Claude Managed Agents instead — more capable, but also more dependent on a third-party platform than the team initially wanted. Worth knowing if you\'re evaluating how "custom" the system really is.',
                },
              ]}
            />
          </Section>

          <Section id="reflection" number="07" title="Reflection" maxWidth="62ch">
            <p style={{ marginBottom: '18px' }}>
              This project felt different from other work I'd done, mainly because of how
              AI-forward our actual process was — not just the product we were building, but how
              we built it. We used AI tools throughout design, the same way the dev team leaned on
              Claude-generated UI directions for parts of the frontend. That made iteration
              genuinely faster: we could go from a sketch to a workable screen, react to it, and
              throw it away again in a fraction of the time a fully manual pass would take.
            </p>
            <p style={{ marginBottom: '18px' }}>
              But it felt strange, too. Designing with AI tools while designing a product whose
              entire premise is an AI standing in for a human patient is a strange kind of
              recursive experience — you're constantly making judgment calls about where AI
              assistance helps and where it gets in the way, both in your tools and in the thing
              you're building. I don't think I fully resolved that tension by the end of the
              project, and I'm not sure it's the kind of thing that resolves cleanly. What I took
              from it is that speed isn't the same as confidence — moving faster meant we could
              test more ideas, but it also meant double-checking more often that what we shipped
              actually reflected a real decision, not just whatever came out first.
            </p>
            <p>
              The other thing that stuck with me was designing for two genuinely different
              audiences inside one product. Students needed a space that felt low-stakes and
              private enough to be bad at something in front of — that's where the camera opt-in
              and the practice-vs-submit distinction came from. Educators needed the opposite:
              visibility, structure, and tools to manage a whole cohort at once, which is why the
              Reports tab exists as its own surface entirely. The hard part wasn't designing either
              side — it was making sure both sides still felt like the same product.
            </p>
          </Section>
        </div>
      </div>

      <CaseStudyFooter
        backHref="/portfolio"
        prevHref="/work/simreach"
        prevLabel="SimReach"
        nextHref="/work/aspire"
        nextLabel="Aspire"
      />
    </div>
  );
}
