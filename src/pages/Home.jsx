import CaseStudyCard from '../components/CaseStudyCard';
import FieldNoteCard from '../components/FieldNoteCard';
import useScrollReveal from '../hooks/useScrollReveal';
import aipaHero from '../assets/aipa/avatar_encounter.jpg';
import aspireHero from '../assets/aspire/solution_screens.jpg';

export default function Home() {
  useScrollReveal();

  return (
    <div className="wrap">

      <section style={{ padding: '90px 0 70px', maxWidth: '720px' }}>
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
          Product &amp; UX design
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '50px',
          lineHeight: 1.12,
          letterSpacing: '-0.01em',
          marginBottom: '22px',
        }}>
          {/* TODO: Everett — replace with your own framing, this is a placeholder */}
          Designing the parts of a system that only show up once you've talked to the people using it.
        </h1>
        <p style={{ fontSize: '17px', color: 'var(--ink-soft)', maxWidth: '540px' }}>
          I'm Everett — an economics and psychology grad who designs for healthcare, education,
          and career tools. Currently building a part-time design practice alongside full-time
          work at Hilton.
        </p>
        <div className="note">most of these projects started with a sticky note, not a Figma file</div>
      </section>

      <div className="section-label">Case studies</div>

      <CaseStudyCard
        to="/work/simreach"
        meta={['Sept 2025 – Jan 2026', 'DALI Lab', 'Co-designed']}
        title="SimReach"
        description="A decision-support tool helping hospital administrators optimize oncologist allocation across hub-and-spoke cancer care networks."
        isFirst
      />

      <CaseStudyCard
        to="/work/aipa"
        meta={['Spring 2025 – Jun 2026', 'DALI Lab', 'Co-designed']}
        title="AI Patient Actor"
        description="Letting medical students practice patient encounters with an AI-simulated patient, with structured feedback built around real clinical rubrics."
        image={aipaHero}
      />

      <div className="section-label">Also worth a look</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '28px',
        paddingBottom: '60px',
      }}>
        <FieldNoteCard
          to="/work/aspire"
          tag="Capstone · 3 weeks"
          title="Aspire"
          description="A learn-by-doing hub for career skills, built and led across a 4-person team in three weeks for Dartmouth's Intro to UI/UX course."
          image={aspireHero}
        />
        <FieldNoteCard
          tag="Other work"
          title="Composter"
          description="A physical product design project from an intro engineering class — constraint-driven design beyond the screen."
        />
      </div>

    </div>
  );
}
