'use client';

import { useEffect, useRef } from 'react';
import { vars } from '@/lib/vars';

// [open, high, low, close]
const D = [
  [60, 63, 55, 57], [57, 59, 52, 53], [53, 56, 50, 55], [55, 57, 49, 50], [50, 52, 45, 46], [46, 49, 44, 48],
  [48, 50, 43, 44], [44, 45, 36, 38], [38, 47, 37, 46], [46, 49, 44, 48], [48, 49, 45, 46], [46, 53, 45, 52],
  [52, 58, 51, 57], [57, 59, 54, 55], [55, 63, 54, 62], [62, 66, 60, 65], [65, 70, 64, 69], [69, 74, 67, 73],
];
const Y = (v: number) => 214 - (v - 32) * 4.3;
const X = (i: number) => 22 + i * 17.2;
const ENTRY = 46, SL = 35, TP = 72, E = 10;
const xe = X(E) - 6, xr = 316;
const INK = '#0a0a0a', RED = '#d71920';

function Tag({ v, text, col = INK, tp }: { v: number; text: string; col?: string; tp?: boolean }) {
  return (
    <g className="lbl">
      <rect className={tp ? 'tp-box' : undefined} x={320} y={Y(v) - 9} width={78} height={18} rx={9} fill="#fff" stroke={col} strokeWidth={1.2} />
      <text
        className={tp ? 'tp-txt' : undefined}
        x={359}
        y={Y(v) + 3.3}
        textAnchor="middle"
        fontSize={9}
        fontWeight={500}
        letterSpacing=".04em"
        fill={col}
        style={{ fontFamily: 'var(--mono)' }}
      >
        {text}
      </text>
    </g>
  );
}

/** Hero signal card: candles print, levels draw, price runs to target, then it loops. */
export default function SignalCard() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const body = document.body;
    const cs = [...card.querySelectorAll('.c')];

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cs.forEach((c) => c.classList.add('on'));
      card.classList.add('lines', 'hit');
      return;
    }

    let timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, t: number) => timers.push(setTimeout(fn, t));
    const run = () => {
      timers.forEach(clearTimeout);
      timers = [];
      card.classList.remove('lines', 'hit', 'fade');
      cs.forEach((c) => c.classList.remove('on'));
      cs.forEach((c, i) => {
        if (i <= E) later(() => c.classList.add('on'), i * 110);
      });
      const b = E * 110 + 250;
      later(() => card.classList.add('lines'), b);
      cs.forEach((c, i) => {
        if (i > E) later(() => c.classList.add('on'), b + 900 + (i - E) * 280);
      });
      const end = b + 900 + (D.length - E) * 280;
      later(() => card.classList.add('hit'), end);
      later(() => card.classList.add('fade'), end + 4200);
      later(run, end + 4900);
    };

    // start once the preloader has revealed the page and the card is on screen
    let io: IntersectionObserver | undefined;
    const startSig = () => {
      io = new IntersectionObserver((es) => {
        if (es[0].isIntersecting) {
          io?.disconnect();
          later(run, 500);
        }
      });
      io.observe(card);
    };
    let mo: MutationObserver | undefined;
    if (body.classList.contains('ready')) startSig();
    else {
      mo = new MutationObserver(() => {
        if (body.classList.contains('ready')) {
          mo?.disconnect();
          startSig();
        }
      });
      mo.observe(body, { attributes: true, attributeFilter: ['class'] });
    }

    return () => {
      timers.forEach(clearTimeout);
      io?.disconnect();
      mo?.disconnect();
    };
  }, []);

  return (
    <figure className="signal" ref={ref} data-h style={vars({ '--d': 420 })}>
      <div className="signal-top mono">
        <span>
          <span className="dot" aria-hidden="true" />
          How an alert looks
        </span>
        <span>Nasdaq futures</span>
      </div>
      <svg
        viewBox="0 0 400 236"
        role="img"
        aria-label="Illustration of a trade alert: price pulls back to the entry, with a stop loss below and a take profit above, then rallies toward the take profit."
      >
        <g>
          <rect className="zone" x={xe} y={Y(TP)} width={xr - xe} height={Y(ENTRY) - Y(TP)} fill="#f1f1f1" />
          <rect className="zone" x={xe} y={Y(ENTRY)} width={xr - xe} height={Y(SL) - Y(ENTRY)} fill="#dedede" />
        </g>
        {/* solid entry line draws itself; dashed target/stop lines fade in */}
        <line className="lbl" x1={xe} x2={xr} y1={Y(TP)} y2={Y(TP)} stroke={INK} strokeWidth={1.3} strokeDasharray="5 4" />
        <line className="lv" x1={xe} x2={xr} y1={Y(ENTRY)} y2={Y(ENTRY)} stroke={INK} strokeWidth={1.3} style={vars({ '--len': xr - xe })} />
        <line className="lbl" x1={xe} x2={xr} y1={Y(SL)} y2={Y(SL)} stroke={RED} strokeWidth={1.3} strokeDasharray="5 4" />
        {D.map(([o, h, l, c], i) => (
          <g className="c" key={i}>
            <line x1={X(i)} x2={X(i)} y1={Y(h)} y2={Y(l)} stroke={INK} strokeWidth={1.3} />
            <rect
              x={X(i) - 4.5}
              y={Y(Math.max(o, c))}
              width={9}
              height={Math.max(1.5, Math.abs(Y(o) - Y(c)))}
              fill={c >= o ? '#fff' : INK}
              stroke={INK}
              strokeWidth={1.3}
            />
          </g>
        ))}
        <Tag v={TP} text="TAKE PROFIT" tp />
        <Tag v={ENTRY} text="ENTRY" />
        <Tag v={SL} text="STOP LOSS" col={RED} />
        <circle className="lbl" cx={X(E)} cy={Y(ENTRY)} r={4} fill={INK} />
      </svg>
      <figcaption>Every signal includes entry, stop loss, and take profit details in real time.</figcaption>
    </figure>
  );
}
