import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

import simreach from '../content/simreach.md?raw';
import aipa from '../content/aipa.md?raw';
import aspire from '../content/aspire.md?raw';

import aipaModeSelector from '../assets/aipa/mode_selector.jpg';
import aipaCameraOptional from '../assets/aipa/camera_optional.jpg';
import aipaFeedbackBreakdown from '../assets/aipa/feedback_breakdown.jpg';
import aipaReportsTab from '../assets/aipa/reports_tab.jpg';
import aipaAvatarEncounter from '../assets/aipa/avatar_encounter.jpg';
import aspireResearchProcess from '../assets/aspire/research_process.jpg';
import aspireSolutionScreens from '../assets/aspire/solution_screens.jpg';

const CONTENT = { simreach, aipa, aspire };

// Maps "slug:key" image references used in markdown (e.g. aipa:mode_selector)
// to actual imported image assets.
const IMAGE_MAP = {
  'aipa/mode_selector': aipaModeSelector,
  'aipa/camera_optional': aipaCameraOptional,
  'aipa/feedback_breakdown': aipaFeedbackBreakdown,
  'aipa/reports_tab': aipaReportsTab,
  'aipa/avatar_encounter': aipaAvatarEncounter,
  'aspire/research_process': aspireResearchProcess,
  'aspire/solution_screens': aspireSolutionScreens,
};

function stripInternalNotes(markdown) {
  return markdown.split(/##\s*REMAINING ITEMS FOR EVERETT/i)[0].trim();
}

function CaseStudyImage({ src, alt }) {
  const resolved = IMAGE_MAP[src];

  if (!resolved) {
    // Fail loudly in the UI rather than silently showing a broken image,
    // so a missing reference is obvious during editing.
    return (
      <div style={{
        border: '1px dashed var(--rule)',
        borderRadius: '3px',
        padding: '20px',
        color: 'var(--ink-soft)',
        fontSize: '13px',
        margin: '24px 0',
      }}>
        Missing image: {src}
      </div>
    );
  }

  return (
    <figure style={{ margin: '32px 0' }}>
      <img
        src={resolved}
        alt={alt}
        style={{
          width: '100%',
          borderRadius: '3px',
          border: '1px solid var(--rule)',
          display: 'block',
        }}
      />
      {alt && (
        <figcaption style={{
          fontSize: '13px',
          color: 'var(--ink-soft)',
          marginTop: '10px',
        }}>
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const markdown = CONTENT[slug];

  if (!markdown) {
    return (
      <div className="wrap" style={{ padding: '90px 0' }}>
        <p>Couldn't find that case study.</p>
        <Link className="case-link" to="/">← Back home</Link>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ padding: '60px 0 100px' }}>
      <Link className="case-link" to="/" style={{ marginBottom: '40px', display: 'inline-block' }}>
        ← Back to all work
      </Link>
      <article className="case-study-article">
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{ img: CaseStudyImage }}
        >
          {stripInternalNotes(markdown)}
        </ReactMarkdown>
      </article>
    </div>
  );
}
