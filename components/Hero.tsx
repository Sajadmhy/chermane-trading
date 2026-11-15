import { vars } from '@/lib/vars';
import AlertPill from './AlertPill';
import { Arrow } from './icons';
import { K } from './Melt';
import SignalCard from './SignalCard';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <AlertPill data-h style={vars({ '--d': 0 })} />

        <h1 className="hero-title melt" data-melt="melt0" style={{ filter: 'url(#melt0)' }}>
          <span className="ln" data-h style={vars({ '--d': 80 })}>
            <K ch="T" l=".42em" t="8s" o="-2s" />a<K ch="k" left="22%" l=".3em" t="9.5s" o="-6s" />e your t<K ch="r" left="24%" l=".55em" t="7.5s" o="-1s" />a<K ch="d" left="84%" l=".36em" t="10s" o="-4s" />i<K ch="n" left="86%" l=".48em" t="8.5s" o="-7s" />g
          </span>
          <span className="ln" data-h style={vars({ '--d': 180 })}>
            <K ch="t" left="58%" l=".38em" t="9s" o="-3s" />o t<K ch="h" left="16%" l=".5em" t="8s" o="-5s" />e <K ch="n" left="14%" l=".3em" t="10s" o="-1s" />ext <K ch="l" l=".62em" w=".05em" t="7s" o="-4s" />e<K ch="v" l=".34em" t="9.5s" o="-8s" />e<K ch="l" l=".44em" t="8.5s" o="-2.5s" /><span className="red">.</span>
          </span>
        </h1>

        <div className="hero-row">
          <div>
            <p className="lede" data-h style={vars({ '--d': 320 })}>
              Precise trade signals. Top-tier education. Every week.
            </p>
            <div className="ctas" data-h style={vars({ '--d': 400 })}>
              <a className="btn" href="#pricing">
                Join the Discord <Arrow />
              </a>
              <a className="btn ghost" href="#features">
                See what&apos;s inside
              </a>
            </div>
            <dl className="facts" data-h style={vars({ '--d': 480 })}>
              <div>
                <dt className="mono">Signal hours</dt>
                <dd>10am–12pm EST</dd>
              </div>
              <div>
                <dt className="mono">Trading days</dt>
                <dd>Mon–Fri</dd>
              </div>
              <div>
                <dt className="mono">Market</dt>
                <dd>Nasdaq futures</dd>
              </div>
            </dl>
          </div>

          <SignalCard />
        </div>
      </div>
    </section>
  );
}
