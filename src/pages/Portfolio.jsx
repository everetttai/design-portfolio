import { useState } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import FieldNoteCard from '../components/FieldNoteCard';
import useScrollReveal from '../hooks/useScrollReveal';
import useDocumentTitle from '../hooks/useDocumentTitle';
import aipaHero from '../assets/aipa/avatar_encounter.jpg';
import aspireHero from '../assets/aspire/solution_screens.jpg';
import simreachHero from '../assets/simreach/hero_landing_full.jpg';

const CATEGORIES = ['All', 'Design', 'Research', 'Other'];

// Each project is tagged with the categories it belongs to, so a project
// can show up under more than one filter if that's ever true (e.g. a
// design project with a strong research component).
const PROJECTS = [
  {
    id: 'simreach',
    categories: ['Design'],
    deep: true,
    to: '/work/simreach',
    meta: ['Sept 2025 – Jan 2026', 'DALI Lab', 'Co-designed'],
    title: 'SimReach',
    description: 'A decision-support tool helping hospital administrators optimize oncologist allocation across hub-and-spoke cancer care networks.',
    image: simreachHero,
  },
  {
    id: 'aipa',
    categories: ['Design'],
    deep: true,
    to: '/work/aipa',
    meta: ['Spring 2025 – Jun 2026', 'DALI Lab', 'Co-designed'],
    title: 'AI Patient Actor',
    description: 'Letting medical students practice patient encounters with an AI-simulated patient, with structured feedback built around real clinical rubrics.',
    image: aipaHero,
  },
  {
    id: 'aspire',
    categories: ['Design'],
    deep: false,
    to: '/work/aspire',
    tag: 'Capstone · 3 weeks',
    title: 'Aspire',
    description: "A learn-by-doing hub for career skills, built and led across a 4-person team in three weeks for Dartmouth's Intro to UI/UX course.",
    image: aspireHero,
  },
  {
    id: 'composter',
    categories: ['Other'],
    deep: false,
    to: null,
    tag: 'Other work',
    title: 'Composter',
    description: 'A physical product design project from an intro engineering class — constraint-driven design beyond the screen.',
    image: null,
  },
  // Research projects go here once ready. Tagged 'Research' so the filter
  // picks them up automatically — no structural changes needed later.
];

export default function Portfolio() {
  useDocumentTitle('Everett Tai | Portfolio');
  const [activeCategory, setActiveCategory] = useState('All');
  useScrollReveal(activeCategory);

  const filtered = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.categories.includes(activeCategory)
  );

  const deepProjects = filtered.filter((p) => p.deep);
  const lightProjects = filtered.filter((p) => !p.deep);

  return (
    <div className="wrap" style={{ paddingBottom: '60px' }}>

      <section style={{ padding: '60px 0 30px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '38px',
          marginBottom: '14px',
        }}>
          Portfolio
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--ink-soft)', maxWidth: '540px' }}>
          Design case studies, research, and other projects.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="category-filter-btn"
            data-active={activeCategory === cat}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 500,
              padding: '7px 16px',
              borderRadius: '999px',
              background: activeCategory === cat ? 'var(--ink)' : 'transparent',
              color: activeCategory === cat ? 'var(--bg)' : 'var(--ink-soft)',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {deepProjects.length > 0 && (
        <>
          <div className="section-label">Case studies</div>
          {deepProjects.map((p, i) => (
            <CaseStudyCard
              key={p.id}
              to={p.to}
              meta={p.meta}
              title={p.title}
              description={p.description}
              image={p.image}
              isFirst={i === 0}
            />
          ))}
        </>
      )}

      {lightProjects.length > 0 && (
        <>
          <div className="section-label">Also worth a look</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
            paddingBottom: '40px',
          }}>
            {lightProjects.map((p) => (
              <FieldNoteCard
                key={p.id}
                to={p.to}
                tag={p.tag}
                title={p.title}
                description={p.description}
                image={p.image}
              />
            ))}
          </div>
        </>
      )}

      {filtered.length === 0 && (
        <p style={{ color: 'var(--ink-soft)', padding: '40px 0' }}>
          Nothing here yet for this category — check back soon.
        </p>
      )}

    </div>
  );
}
