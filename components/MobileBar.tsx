'use client';

import { useEffect, useState } from 'react';
import { useCountdown } from './useCountdown';

/** Sticky join bar on small screens, shown between the hero and the final stretch of the page. */
export default function MobileBar() {
  const { label, time } = useCountdown();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setShow(scrollY > innerHeight * 0.9 && innerHeight + scrollY < document.body.scrollHeight - 500);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={'mbar' + (show ? ' show' : '')}>
      <span>
        <span className="mono">{label}</span>
        <strong>{time}</strong>
      </span>
      <a className="btn inv sm" href="#pricing">
        Join
      </a>
    </div>
  );
}
