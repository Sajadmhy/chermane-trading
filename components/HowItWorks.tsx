import { steps } from '@/lib/data';
import { vars } from '@/lib/vars';
import SplitHeading, { Eyebrow } from './SplitHeading';

export default function HowItWorks() {
  return (
    <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="how-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow n="02">How it works</Eyebrow>
            <SplitHeading id="how-h" text="From checkout to your first alert." />
          </div>
          <p className="sub">Three steps. Access arrives right after payment, so you can catch the next session.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title} data-r style={vars({ '--i': i })}>
              <span className="bar" aria-hidden="true" />
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
