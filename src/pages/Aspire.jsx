import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  CaseStudyHeader,
  StatRow,
  ContentsNav,
  Section,
  ImagePlaceholder,
  LimitationList,
  CaseStudyFooter,
} from '../components/case-study/CaseStudyParts';

import sketchesGrayscales from '../assets/aspire/sketches_grayscales.png';
import homePath from '../assets/aspire/home_path.png';
import exercisesGrid from '../assets/aspire/exercises.png';
import dailyQuestionsFeedback from '../assets/aspire/daily_questions_feedback.png';
import aceFramework from '../assets/aspire/resume_ace_framework.png';
import myLibrary from '../assets/aspire/my_library.png';
import professionalsFind from '../assets/aspire/professionals_find.png';

const SECTIONS = [
  { id: 'problem', label: 'The problem' },
  { id: 'research', label: 'Research → principles' },
  { id: 'sketches', label: 'From sketches to structure' },
  { id: 'shipped', label: 'What shipped' },
  { id: 'limitations', label: 'Known limitations' },
  { id: 'reflection', label: 'Reflection' },
];

export default function Aspire() {
  useDocumentTitle('Everett Tai | Aspire');
  return (
    <div className="wrap" style={{ padding: '60px 0 100px' }}>
      <Link className="case-link" to="/portfolio" style={{ marginBottom: '40px', display: 'inline-block' }}>
        ← Back to all work
      </Link>

      <CaseStudyHeader
        kicker="Case study · Dartmouth Intro to UI/UX capstone"
        title="Aspire"
        dek="A learn-by-doing hub for the professional skills school doesn't teach."
        meta={[
          { label: 'Role', value: 'Project Lead, Research, UX, and Visual Design — directed the 4-person team through ideation, prototyping, and execution, while also contributing hands-on across research, UX, and visual design' },
          { label: 'Team', value: '4 product designers (capstone team project for Dartmouth\u2019s Intro to UI/UX course) — I led the team through the project' },
          { label: 'Timeline', value: '3 weeks' },
          { label: 'Deliverable', value: 'Figma prototype' },
        ]}
      />

      <StatRow
        stats={[
          { value: '3', label: 'weeks' },
          { value: '4', label: 'designers' },
          { value: '5–30%', label: 'passive-learning retention' },
          { value: '75–90%', label: 'active-practice retention' },
        ]}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '60px', marginTop: '48px' }}>
        <ContentsNav items={SECTIONS} />

        <div>
          <Section id="problem" number="01" title="The problem">
            <p style={{ marginBottom: '20px' }}>
              Most career-prep resources tell you <em>what</em> to do — how to write a resume,
              how to answer a behavioral question — but never give you anywhere to actually
              practice doing it. Reading advice about interviews and being interviewed are not
              the same skill.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Our user interviews surfaced three consistent frustrations among college students
              trying to build professional skills on their own:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Wasting time finding the right resources.</strong> Advice is scattered
                across blog posts, YouTube videos, and career-center PDFs, with no single place
                to go.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Lack of feedback while learning.</strong> Reading about what makes a good
                elevator pitch doesn't tell you whether <em>your</em> elevator pitch is any good.
              </li>
              <li>
                <strong>Lack of long-term motivation and structure.</strong> Without a system
                tracking progress, practice fizzles out after a session or two.
              </li>
            </ul>
            <p style={{ marginBottom: '20px' }}>
              That gap between passive learning and actual readiness shows up in the research on
              retention, too — passive methods like reading and watching videos top out around
              5–30% retention, while active methods like practicing and teaching others reach
              75–90%. Career prep is almost entirely taught the passive way.
            </p>
            <p>
              We framed the opportunity as a single How Might We:
              <br />
              <em>How might we provide an easy way for people to learn and practice life skills?</em>
            </p>
          </Section>

          <Section id="research" number="02" title="Research → principles">
            <p style={{ marginBottom: '20px' }}>
              Synthesizing the interviews into a user journey map surfaced a clear emotional arc:
              people discover a new skill they want to build, feel motivated initially, then hit
              friction almost immediately — confusion about where to start, trial-and-error with
              no expert to ask, and eventually burnout from a lack of feedback or community.
            </p>
            <p style={{ marginBottom: '20px' }}>
              We used that arc to define three principles that every idea after this point had to
              answer to:
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Convenient</strong> — people waste real time hunting for the right
                resource. We wanted them spending that time practicing instead.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Accessible</strong> — the tool needed to work for someone regardless of
                where they were starting from, not just students who already had a head start.
              </li>
              <li>
                <strong>Motivating</strong> — learning is a process full of failure. Without
                something pushing people through the discouraging middle, they stop.
              </li>
            </ul>
            <p>
              From there we moved into a group brainstorm — sticky notes covering ideas ranging
              from mock interview bots to resume-building wizards to networking trackers — and
              dot-voted toward the strongest directions. That converged on the idea of a single
              interactive hub rather than another static resource library: one place to learn a
              skill, practice it, and get told honestly whether it worked.
            </p>
          </Section>

          <Section id="sketches" number="03" title="From sketches to structure">
            <p style={{ marginBottom: '18px' }}>
              With three weeks and four people, we moved fast from paper to screen. Early
              low-fidelity sketches worked out the core navigation and page structure — a home
              screen built around a Duolingo-style skill path, a dedicated exercises hub, and a
              library to hold everything a user produced along the way. Those sketches got
              walked through together and converted directly into grayscale wireframes before
              any color or type treatment was decided, so we could argue about flow and
              hierarchy without getting distracted by visual polish.
            </p>
            <ImagePlaceholder
              label="User interviews, sketches, and grayscale wireframes"
              aspect="2400 / 376"
              src={sketchesGrayscales}
              fit="contain"
            />
            <p style={{ margin: '18px 0' }}>
              Because four of us were building in parallel, we split ownership by feature area
              early — one person on the resume/ACE flow, one on exercises and daily questions,
              one on the library and professionals booking, and me moving across all three as
              project lead to keep the pieces consistent with each other. That division let us
              cover a lot of ground in three weeks, but it's also the direct source of some of
              the polish gaps called out below.
            </p>
          </Section>

          <Section id="shipped" number="04" title="What shipped">
            <p style={{ marginBottom: '32px' }}>
              By the end of the three weeks, the prototype covered the full loop we'd set out to
              build: discover a skill, practice it, get feedback, and track progress over time.
            </p>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>
              A skill path, not a menu.
            </p>
            <p style={{ marginBottom: '18px' }}>
              The home screen frames progress as a path of unlockable units — résumé revamp,
              writing exercises, "tell me about yourself" — alongside a Daily Questions streak
              and upcoming networking events. This was a direct response to the motivation
              problem from research: progress needed to be visible, not just implied.
            </p>
            <ImagePlaceholder label="Home screen skill path" aspect="650 / 422" src={homePath} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              Daily Questions, with real feedback.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Users record a video or audio response to a behavioral or technical interview
              question and get specific, actionable feedback back — not a generic score, but
              notes like which filler words to cut or where an answer needs a sharper takeaway.
              This is the clearest answer to the "lack of feedback while learning" problem: the
              tool tells you what to fix, not just that something's wrong.
            </p>
            <ImagePlaceholder label="Daily Questions feedback screen" aspect="909 / 599" src={dailyQuestionsFeedback} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              An exercises hub, not one flow.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Realtime interview prep, formal email writing, résumé building, CV crafting,
              elevator pitches, and a "random practice" option for anyone who can't decide —
              each exercise type lives in its own card so a user can go straight to the skill
              they actually need instead of one linear course.
            </p>
            <ImagePlaceholder label="Exercises hub" aspect="3596 / 4113" src={exercisesGrid} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              The ACE framework for résumé bullets.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Rather than a blank text box, the résumé builder walks users through a guided
              framework — Action verb, Context, End result — one field at a time, then assembles
              the pieces into a finished, ATS-friendly bullet point. This was the team's answer
              to the "reading advice isn't the same as doing the thing" problem: instead of
              telling someone what a strong bullet looks like, it makes them build one.
            </p>
            <ImagePlaceholder label="The ACE resume-bullet framework" aspect="839 / 556" src={aceFramework} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              My Library, to hold the record.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Every résumé, cover letter, interview response, and practiced answer a user
              produces gets saved into one searchable library, organized into starred items and
              folders by document type. It's the piece that turns one-off practice sessions into
              an accumulating body of work someone can actually point to.
            </p>
            <ImagePlaceholder label="My Library" aspect="650 / 1158" src={myLibrary} />

            <p style={{ fontWeight: 600, margin: '32px 0 12px' }}>
              Talking to real professionals.
            </p>
            <p>
              Beyond AI-generated feedback, users can search and book time with actual industry
              professionals by field and experience level, submitting a resume or cover letter
              in advance for targeted comments. This was scoped in directly to answer a
              motivation gap AI feedback alone can't close — hearing from someone who's actually
              done the job.
            </p>
            <ImagePlaceholder label="Finding and booking a professional" aspect="1552 / 1298" src={professionalsFind} />
          </Section>

          <Section id="limitations" number="05" title="Known limitations">
            <p style={{ marginBottom: '20px' }}>
              A few things worth naming rather than glossing over:
            </p>
            <LimitationList
              items={[
                {
                  title: 'Fidelity is inconsistent across the prototype',
                  body: 'Because four of us split ownership by feature area under a tight three-week deadline, some screens — the exercises hub, résumé builder, and library — reached a polished, fully-illustrated state, while others still read closer to an early wireframe. It looks like four different people built it, because four different people did, without enough time at the end to unify everything to one standard.',
                },
                {
                  title: 'Spacing and sizing were never fully reconciled',
                  body: 'This was my first large project in Figma, and it shows in the details — some sizing ratios and color choices between screens don\u2019t quite line up. Nothing is broken, but a careful look reveals the seams between sections built by different hands at different levels of Figma fluency.',
                },
                {
                  title: 'The prototype isn\u2019t fully connected end-to-end',
                  body: 'Not every screen links to every other screen the way a shipped product would. A handful of flows work well as a guided walkthrough but would need real interaction-design passes to hold up as a genuinely clickable, edge-case-proof prototype.',
                },
              ]}
            />
          </Section>

          <Section id="reflection" number="06" title="Reflection">
            <p style={{ marginBottom: '20px' }}>
              For this project, I took on the role of project manager in addition to designing. I
              directed our team of four through ideation, prototyping, and execution — which
              meant the biggest things I learned weren't really about UI at all. I learned how to
              delegate tasks across a team, how to keep people motivated through a tight
              three-week sprint, and how to push the group toward deadlines without things
              stalling out. That's a different muscle than designing a screen, and it's one I
              hadn't really had to use before this.
            </p>
            <p style={{ marginBottom: '20px' }}>
              This was also my first big project in Figma, and a lot of the learning was just
              mechanical: how to actually unify spacing, keep a consistent style across dozens of
              screens built by four different people, and make a file feel like one product
              instead of four people's individual work stitched together.
            </p>
            <p>
              I'll say plainly that this was a starter project, and it looks it — some of it is
              rudimentary and incomplete. If I went back, I'd fix some of the sizing ratios and
              color choices that never got fully resolved in the three weeks we had. I'm
              including it in my portfolio anyway because the things I actually learned here —
              leading a team under a real deadline, and getting comfortable in Figma at a level I
              hadn't been before — mattered more to how I design now than the polish of any
              individual screen.
            </p>
          </Section>
        </div>
      </div>

      <CaseStudyFooter
        backHref="/portfolio"
        nextHref="/work/simreach"
        nextLabel="SimReach"
      />
    </div>
  );
}
