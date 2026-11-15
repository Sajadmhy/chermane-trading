import { socials } from '@/lib/data';
import { vars } from '@/lib/vars';
import { Arrow } from './icons';
import SplitHeading, { Eyebrow } from './SplitHeading';

export default function Socials() {
  return (
    <section className="sec" id="socials" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow n="06">Socials</Eyebrow>
            <SplitHeading text="Follow along." />
          </div>
          <p className="sub">Market thoughts and behind-the-scenes content across every platform.</p>
        </div>
        <div className="soc">
          {socials.map((s, i) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener" data-r style={vars({ '--i': i })}>
              <span className="nm">{s.name}</span>
              <span className="hd mono">{s.handle}</span>
              <Arrow plain />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
