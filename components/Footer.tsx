import { links, navLinks } from '@/lib/data';
import { Logo } from './icons';

export default function Footer() {
  return (
    <footer className="foot dark">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="logo" href="#top">
              <Logo />
              Chermane Trades
            </a>
            <p>Precise trade signals. Top-tier education. Every week.</p>
          </div>
          <div>
            <h4 className="mono">Site</h4>
            <ul>
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mono">Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${links.email}`}>{links.email}</a>
              </li>
              {[
                ['Instagram', links.instagram],
                ['X', links.x],
                ['YouTube', links.youtube],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="legal">
          <p>
            Trading involves substantial risk and results vary by person. Returns are never guaranteed. Only trade with
            money you can afford to lose.
          </p>
          <span>© {new Date().getFullYear()} Chermane Trades</span>
        </div>
      </div>
    </footer>
  );
}
