import { vars } from '@/lib/vars';

/** A letter with a drip hanging off it. Lengths are in em so drips scale with the title. */
export function K({
  ch,
  l,
  t,
  o,
  left,
  w,
}: {
  ch: string;
  l: string;
  t: string;
  o: string;
  left?: string;
  w?: string;
}) {
  return (
    <span className="k">
      {ch}
      <i className="d" aria-hidden="true" style={{ left, ...vars({ '--l': l, '--t': t, '--o': o, '--w': w }) }} />
    </span>
  );
}
