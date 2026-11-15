import type { CSSProperties } from 'react';

/** Inline CSS custom properties, e.g. vars({ '--i': 2 }). */
export const vars = (v: Record<string, string | number | undefined>) => v as CSSProperties;
