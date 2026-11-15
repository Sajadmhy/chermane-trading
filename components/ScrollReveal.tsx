'use client';

import { useEffect } from 'react';

/** Adds the "in" class to [data-r] and [data-split] elements as they scroll into view. */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    );
    document.querySelectorAll('[data-r],[data-split]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
