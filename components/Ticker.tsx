import { Fragment } from 'react';
import { tickerItems } from '@/lib/data';

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">
        {[0, 1].map((k) => (
          <span key={k}>
            {tickerItems.map((t) => (
              <Fragment key={t}>
                {t} <i />
              </Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
