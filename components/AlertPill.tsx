'use client';

import type { CSSProperties } from 'react';
import { useCountdown } from './useCountdown';

export default function AlertPill({ style, ...rest }: { style?: CSSProperties; 'data-h'?: boolean; 'data-r'?: boolean }) {
  const { label, time } = useCountdown();
  return (
    <p className="alert mono" style={style} {...rest}>
      <span className="dot" aria-hidden="true" />
      <span>{label}</span> <strong>{time}</strong>
    </p>
  );
}
