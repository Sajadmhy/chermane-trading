'use client';

import { useEffect, useRef } from 'react';

const IDS = ['melt0', 'melt1'];

/** Hidden SVG holding one goo filter per melting title, sized to the title's font. */
export default function MeltFilters() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const size = () =>
      IDS.forEach((id) => {
        const el = document.querySelector<HTMLElement>(`[data-melt="${id}"]`);
        const f = svg.querySelector(`#${id}`);
        if (!el || !f) return;
        const fs = parseFloat(getComputedStyle(el).fontSize);
        f.querySelector('feGaussianBlur')?.setAttribute('stdDeviation', (fs * 0.026).toFixed(2));
        f.querySelector('feDisplacementMap')?.setAttribute('scale', (fs * 0.048).toFixed(1));
      });
    size();
    addEventListener('resize', size);
    return () => removeEventListener('resize', size);
  }, []);

  return (
    <svg ref={ref} width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        {IDS.map((id) => (
          <filter key={id} id={id} x="-5%" y="-10%" width="110%" height="130%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.0048 0.0081" numOctaves={1} seed={3} result="n" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="n"
              scale={10}
              xChannelSelector="R"
              yChannelSelector="G"
              result="w"
              suppressHydrationWarning
            />
            <feGaussianBlur in="w" stdDeviation={5} result="b" suppressHydrationWarning />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
