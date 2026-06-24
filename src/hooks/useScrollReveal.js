import { useEffect } from 'react';

/**
 * Watches all elements with the `.reveal-on-scroll` class and adds
 * `.is-visible` once each one enters the viewport. Runs once per page
 * mount. Falls back gracefully: if IntersectionObserver isn't supported,
 * every element is just marked visible immediately rather than staying
 * hidden forever.
 */
export default function useScrollReveal() {
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

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
