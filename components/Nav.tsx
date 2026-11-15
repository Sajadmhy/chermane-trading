'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/data';
import { Logo } from './icons';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 20);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Chermane Trades, back to top">
          <Logo />
          Chermane Trades
        </a>
        <nav className="links" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn sm" href="#pricing">
          Join
        </a>
      </div>
    </header>
  );
}
