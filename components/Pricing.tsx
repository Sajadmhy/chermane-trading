import { assurances, plans } from '@/lib/data';
import { vars } from '@/lib/vars';
import { Arrow, Check } from './icons';
import SplitHeading, { Eyebrow } from './SplitHeading';

export default function Pricing() {
  return (
    <section className="sec pricing" id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow n="04">Pricing</Eyebrow>
            <SplitHeading text="Join our community." />
          </div>
          <p className="sub">Secure checkout through Whop. Instant access to the Discord after payment.</p>
        </div>
        <div className="plans">
          {plans.map((p, i) => (
            <article className={'plan' + (p.hot ? ' hot' : '')} key={p.name} data-r style={vars({ '--i': i })}>
              <div className="plan-top">
                <h3>{p.name}</h3>
                <span className="tag mono">{p.tag}</span>
              </div>
              <p className="note">{p.note}</p>
              <div className="price">
                {p.was && (
                  <span className="was" aria-label={`was ${p.was}`}>
                    {p.was}
                  </span>
                )}
                {p.price}
                <span className="per">{p.per}</span>
              </div>
              {p.equiv && <p className="equiv">{p.equiv}</p>}
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${p.hot ? 'inv' : 'ghost'} full`} href={p.href} target="_blank" rel="noopener">
                Get access<span className="sr"> to {p.name}</span>
                {p.hot && <Arrow />}
              </a>
            </article>
          ))}
        </div>
        <ul className="assure" data-r>
          {assurances.map((a) => (
            <li key={a}>
              <Check />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
