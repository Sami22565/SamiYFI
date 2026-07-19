import React from 'react';

export function Nav({ logo = 'SAMI YAFEAI', links = [], cta }) {
  const words = logo.split(' ');
  const first = words.slice(0, -1).join(' ') || words[0];
  const last = words.length > 1 ? words[words.length - 1] : '';
  return (
    <nav className="sy-nav">
      <div className="sy-nav__logo">
        {first}{last && <span style={{ color: 'var(--accent-primary)' }}> {last}</span>}
      </div>
      <div className="sy-nav__links">
        {links.map((l) => (
          <a key={l} className="sy-nav__link" href="#">{l}</a>
        ))}
        {cta}
      </div>
    </nav>
  );
}
