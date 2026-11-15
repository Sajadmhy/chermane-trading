import { reviews } from '@/lib/data';
import SplitHeading, { Eyebrow } from './SplitHeading';

export default function Reviews() {
  return (
    <section className="sec" id="reviews" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow n="03">Discord reviews</Eyebrow>
            <SplitHeading text="Hear from real members." />
          </div>
          <p className="sub">Hover to pause.</p>
        </div>
      </div>
      <div className="rv" data-r>
        <div className="rv-track">
          {/* the set is rendered twice for a seamless marquee loop */}
          {[false, true].map((dup) =>
            reviews.map((r) => (
              <figure className={'card' + (dup ? ' dup' : '')} key={r.name + dup} aria-hidden={dup || undefined}>
                <blockquote>{r.quote}</blockquote>
                <figcaption className="who">
                  <span className="av" aria-hidden="true">
                    {r.name[0]}
                  </span>
                  <span>
                    <b>{r.name}</b>
                    <span className="mono">Member since {r.since}</span>
                  </span>
                </figcaption>
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
