import { vars } from '@/lib/vars';
import SplitHeading, { Eyebrow } from './SplitHeading';

const features = [
  {
    title: 'Live trade signals',
    text: 'Alerts Monday–Friday from 10am–12pm EST with entry, stop loss, and take profit — in real time.',
    icon: <polyline points="2 12 6.5 12 9.5 5 14 19 17 12 22 12" />,
  },
  {
    title: '5 trading models',
    text: 'Learn the simple models members use daily and pick the style that fits you.',
    icon: (
      <>
        <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
        <path d="m2.5 12.5 9.5 5 9.5-5" />
        <path d="m2.5 17 9.5 5 9.5-5" />
      </>
    ),
  },
  {
    title: 'Daily reviews',
    text: 'Trade breakdowns, educational videos, and market reviews.',
    icon: (
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
        <path d="M10 9v6l5-3-5-3Z" />
      </>
    ),
  },
  {
    title: 'Weekly homework',
    text: 'Sharpen your skills with assignments sent out every week.',
    icon: (
      <>
        <path d="M10 6h11M10 12h11M10 18h11" />
        <path d="m3 6 1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section className="sec" id="features">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow n="01">What&apos;s inside</Eyebrow>
            <SplitHeading text="Everything you need to trade with confidence." />
          </div>
        </div>
        <div className="feats">
          {features.map((f, i) => (
            <article className="f" key={f.title} data-r style={vars({ '--i': i })}>
              <span className="n mono">{String(i + 1).padStart(2, '0')}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {f.icon}
              </svg>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
