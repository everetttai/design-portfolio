import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

import simreach from '../content/simreach.md?raw';
import aipa from '../content/aipa.md?raw';
import aspire from '../content/aspire.md?raw';

const CONTENT = { simreach, aipa, aspire };

function stripInternalNotes(markdown) {
  return markdown.split(/##\s*REMAINING ITEMS FOR EVERETT/i)[0].trim();
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
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{stripInternalNotes(markdown)}</ReactMarkdown>
      </article>
    </div>
  );
}
