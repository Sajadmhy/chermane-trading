import { links } from '@/lib/data';
import { Arrow } from './icons';
import SplitHeading, { Eyebrow } from './SplitHeading';

// Faint drifting candles behind the video card: a seeded random walk, drawn twice so the drift loops seamlessly.
const W = 1197;
const candles = (() => {
  let v = 50;
  let seed = 7;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const y = (q: number) => 375 - q * 4;
  return Array.from({ length: 70 }, (_, i) => {
    const x = 10 + i * 17.1;
    const o = v;
    const c = Math.max(15, Math.min(85, o + (rnd() - 0.48) * 14));
    const h = Math.max(o, c) + rnd() * 6;
    const l = Math.min(o, c) - rnd() * 6;
    v = c;
    return { x, y1: y(h), y2: y(l), top: y(Math.max(o, c)), height: Math.max(2, Math.abs(y(o) - y(c))), up: c >= o };
  });
})();

export default function YouTube() {
  return (
    <section className="sec" id="youtube">
      <div className="wrap yt">
        <div>
          <Eyebrow n="05">YouTube</Eyebrow>
          <SplitHeading text="Watch me trade for free." />
          <p className="sub" data-r>
            Get a feel for how I read price action before you join. I post live trading sessions and breakdowns on the
            Nasdaq so you can see the process in real time.
          </p>
          <a className="btn" href={links.youtube} target="_blank" rel="noopener" data-r>
            Subscribe on YouTube <Arrow />
          </a>
        </div>
        <a
          className="video"
          href={links.latestVideo}
          target="_blank"
          rel="noopener"
          data-r
          aria-label="Watch the latest upload on YouTube: Live Day Trading Nasdaq (PERFECT ENTRY!)"
        >
          <svg className="bgc" viewBox={`0 0 ${W * 2} 375`} preserveAspectRatio="none" aria-hidden="true">
            {[0, W].map((dx) => (
              <g key={dx}>
                {candles.map((c, i) => (
                  <g key={i}>
                    <line x1={c.x + dx} x2={c.x + dx} y1={c.y1} y2={c.y2} stroke="#fff" strokeWidth={1.2} />
                    <rect
                      x={c.x + dx - 4.5}
                      y={c.top}
                      width={9}
                      height={c.height}
                      fill={c.up ? 'none' : '#fff'}
                      stroke="#fff"
                      strokeWidth={1.2}
                    />
                  </g>
                ))}
              </g>
            ))}
          </svg>
          <span className="play" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M6 4v16l14-8L6 4Z" />
            </svg>
          </span>
          <span className="vcap">
            <span className="mono">Latest upload · Nov 10, 2026</span>
            <b>Live Day Trading Nasdaq (PERFECT ENTRY!) \ ICT SMART MONEY CONCEPTS</b>
          </span>
        </a>
      </div>
    </section>
  );
}
