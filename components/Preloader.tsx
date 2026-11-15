'use client';

import { useEffect, useRef, useState } from 'react';

// thin candlesticks: [open, close, high, low] as a share of the chart height
const C = [
  [0.3, 0.22, 0.36, 0.14],
  [0.22, 0.34, 0.39, 0.18],
  [0.34, 0.29, 0.41, 0.25],
  [0.29, 0.48, 0.53, 0.27],
  [0.48, 0.41, 0.55, 0.37],
  [0.41, 0.62, 0.67, 0.39],
  [0.62, 0.57, 0.71, 0.53],
  [0.57, 0.8, 0.85, 0.55],
  [0.8, 0.95, 1, 0.76],
];
const CH = 80;

/** Counter + candle chart; the candle bodies become columns that wipe up to reveal the page. */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const pre = ref.current;
    const pct = pctRef.current;
    const body = document.body;
    const finish = () => {
      body.classList.remove('loading');
      body.classList.add('ready');
    };
    if (!pre || !pct) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      setDone(true);
      return;
    }

    let alive = true;
    let raf = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(() => alive && fn(), ms));

    const cds = [...pre.querySelectorAll<HTMLElement>('.cd')];
    const bars = cds.map((d) => d.querySelector<HTMLElement>('.bd')!);
    const chart = pre.querySelector<HTMLElement>('.chart')!;
    const fades = [...pre.querySelectorAll<HTMLElement>('.side,.base')];

    let loaded = false;
    let shown = 0;
    Promise.all([
      new Promise<void>((r) =>
        document.readyState === 'complete' ? r() : addEventListener('load', () => r(), { once: true }),
      ),
      document.fonts ? document.fonts.ready : 0,
    ]).then(() => (loaded = true));
    later(() => (loaded = true), 6000);

    const exit = () => {
      const n = bars.length;
      const cols = bars.map((b) => {
        const r = b.getBoundingClientRect();
        const c = document.createElement('div');
        c.className = 'col';
        Object.assign(c.style, {
          left: r.left + 'px',
          top: r.top + 'px',
          width: r.width + 'px',
          height: r.height + 'px',
        });
        pre.appendChild(c);
        return c;
      });
      chart.style.visibility = 'hidden';
      fades.forEach((s) => (s.style.opacity = '0'));
      void pre.offsetWidth;
      raf = requestAnimationFrame(() =>
        cols.forEach((c, i) => {
          const d = `.95s var(--ease) ${i * 0.035}s`;
          c.style.transition = `left ${d}, top ${d}, width ${d}, height ${d}`;
          Object.assign(c.style, {
            left: (i * 100) / n + 'vw',
            width: 100 / n + 0.3 + 'vw',
            top: '0px',
            height: '100vh',
          });
        }),
      );
      later(() => {
        pre.style.background = 'transparent';
        finish();
        cols.forEach((c, i) => {
          c.style.transition = `transform .9s var(--ease) ${i * 0.055}s`;
          c.style.transform = 'translateY(-101%)';
        });
        later(() => setDone(true), 1400);
      }, 1250);
    };

    const start = performance.now();
    const dur = 2300;
    const tick = (now: number) => {
      if (!alive) return;
      const t = Math.min(1, Math.max(0, (now - start) / dur));
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const target = loaded ? e : Math.min(e, 0.92);
      shown += (target - shown) * 0.14;
      if (target === 1 && shown > 0.996) shown = 1;
      pct.textContent = String(Math.round(shown * 100)).padStart(3, '0') + '%';
      cds.forEach((d, i) => {
        const k = Math.min(1, Math.max(0, (shown * cds.length - i) / 1.4));
        d.style.opacity = String(Math.min(1, k * 2));
        d.style.transform = `scaleY(${0.1 + 0.9 * k})`;
      });
      if (shown < 1) raf = requestAnimationFrame(tick);
      else later(exit, 280);
    };
    raf = requestAnimationFrame((now) => {
      pre.classList.add('go');
      tick(now);
    });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      pre.querySelectorAll('.col').forEach((c) => c.remove());
      chart.style.visibility = '';
      fades.forEach((s) => (s.style.opacity = ''));
      pre.style.background = '';
    };
  }, []);

  if (done) return null;

  return (
    <div id="pre" ref={ref} aria-hidden="true">
      <span className="side l mono">Loading...</span>
      <div className="chart">
        {C.map(([o, c, h, l], i) => (
          <span
            key={i}
            className={'cd' + (c >= o ? ' up' : '')}
            style={{ left: i * 11, transformOrigin: `center ${((1 - (o + c) / 2) * CH).toFixed(1)}px` }}
          >
            <i className="wk" style={{ top: (1 - h) * CH, height: (h - l) * CH }} />
            <i className="bd" style={{ top: (1 - Math.max(o, c)) * CH, height: Math.max(2, Math.abs(o - c) * CH) }} />
          </span>
        ))}
      </div>
      <span className="base" />
      <span className="side r mono" ref={pctRef}>
        000%
      </span>
    </div>
  );
}
