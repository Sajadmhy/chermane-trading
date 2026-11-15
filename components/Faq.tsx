import { faqs, links } from '@/lib/data';
import SplitHeading, { Eyebrow } from './SplitHeading';

export default function Faq() {
  return (
    <section className="sec" id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap faq">
        <div>
          <Eyebrow n="07">FAQ</Eyebrow>
          <SplitHeading text="Questions, answered." />
          <p className="sub" style={{ marginTop: 22 }}>
            Still curious? Email <a href={`mailto:${links.email}`}>{links.email}</a>
          </p>
        </div>
        <div className="faq-list" data-r>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="pm" aria-hidden="true" />
              </summary>
              <p className="ans">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
