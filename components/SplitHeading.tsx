import { Fragment } from 'react';

/** Section heading split into words for a masked rise. */
export default function SplitHeading({ text, id }: { text: string; id?: string }) {
  return (
    <h2 className="h2" id={id} data-split>
      <span className="sr">{text}</span>
      {text.split(/\s+/).map((w, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="w" aria-hidden="true">
            <span style={{ transitionDelay: `${i * 70}ms` }}>{w}</span>
          </span>
        </Fragment>
      ))}
    </h2>
  );
}

export function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow mono">
      <span className="red">({n})</span> {children}
    </p>
  );
}
