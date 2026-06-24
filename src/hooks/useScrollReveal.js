import { useEffect } from 'react';

/**
 * Watches all elements with the `.reveal-on-scroll` class and adds
 * `.is-visible` once each one enters the viewport.
 *
 * Re-runs whenever `dep` changes (e.g. a filter selection), since the
 * DOM nodes carrying `.reveal-on-scroll` are swapped out when filtered
 * lists re-render — a fresh node mounted after the initial page load
 * was never observed, so the effect must re-attach observers each time
 * the visible content actually changes, not just once on mount.
 *
 * Falls back gracefully: if IntersectionObserver isn't supported, every
 * element is just marked visible immediately rather than staying hidden.
 */
export default function useScrollReveal(dep) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => {
      // An element already marked visible (e.g. re-rendered but not
      // actually replaced) shouldn't be re-hidden or re-observed.
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}
