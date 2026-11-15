export const Arrow = ({ plain }: { plain?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...(plain
      ? {}
      : { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const Logo = () => (
  <svg viewBox="0 0 22 18" aria-hidden="true">
    <rect x="0" y="10" width="5" height="8" fill="currentColor" />
    <rect x="8.5" y="5" width="5" height="13" fill="currentColor" />
    <rect x="17" y="0" width="5" height="18" fill="currentColor" />
  </svg>
);
