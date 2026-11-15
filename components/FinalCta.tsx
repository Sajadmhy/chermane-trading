import { links } from '@/lib/data';
import AlertPill from './AlertPill';
import { Arrow } from './icons';
import { K } from './Melt';

export default function FinalCta() {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="wrap">
        <AlertPill data-r />
        <div>
          <h2 className="cta-title melt" id="cta-h" data-melt="melt1" style={{ filter: 'url(#melt1)' }}>
            <K ch="N" left="18%" l=".3em" t="9s" o="-3s" />e<K ch="x" left="20%" l=".22em" t="8s" o="-6s" />t <K ch="l" l=".36em" w=".048em" t="7.5s" o="-1s" />e<K ch="v" l=".26em" t="10s" o="-5s" />e<K ch="l" l=".3em" t="8.5s" o="-2s" /><span className="red">.</span>
          </h2>
        </div>
        <div className="ctas">
          <a className="btn" href="#pricing">
            Join the Discord <Arrow />
          </a>
          <a className="btn ghost" href={links.youtube} target="_blank" rel="noopener">
            Watch for free first
          </a>
        </div>
      </div>
    </section>
  );
}
