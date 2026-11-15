'use client';

import { useEffect, useState } from 'react';

const pad = (v: number) => String(v).padStart(2, '0');
const human = (ms: number) => {
  let s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400);
  s %= 86400;
  const h = Math.floor(s / 3600);
  s %= 3600;
  const m = Math.floor(s / 60);
  s %= 60;
  return (d ? d + 'd ' : '') + pad(h) + 'h ' + pad(m) + 'm ' + pad(s) + 's';
};

const compute = (fmt: Intl.DateTimeFormat) => {
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  const hr = +p.hour % 24;
  const wall = Date.UTC(+p.year, +p.month - 1, +p.day, hr, +p.minute, +p.second);
  const dow = new Date(wall).getUTCDay();
  const weekday = dow >= 1 && dow <= 5;
  if (weekday && hr >= 10 && hr < 12) {
    return {
      label: 'Signals live now · window closes in',
      time: human(Date.UTC(+p.year, +p.month - 1, +p.day, 12) - wall),
    };
  }
  let t = Date.UTC(+p.year, +p.month - 1, +p.day, 10);
  if (!(weekday && wall < t)) {
    do {
      t += 86400000;
    } while ([0, 6].includes(new Date(t).getUTCDay()));
  }
  return { label: 'Next trade alert in', time: human(t - wall) };
};

/** Countdown to the next signal window (Mon–Fri 10am–12pm New York). */
export function useCountdown() {
  const [state, setState] = useState({ label: 'Next trade alert in', time: '--' });

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });
    const update = () => setState(compute(fmt));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
