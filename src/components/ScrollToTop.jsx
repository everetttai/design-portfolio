import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation by default, so
// clicking a link while scrolled down a page (e.g. "See Work" near the
// bottom of Home) lands on the new page still scrolled to that same pixel
// offset. This resets to the top on every path change.
//
// Hash navigation (e.g. /#about, /#contact) is intentionally left alone —
// those already scroll to a specific section via their own logic in
// Home.jsx / Layout.jsx, and this would otherwise fight with that.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
