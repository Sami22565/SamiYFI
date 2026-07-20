import React from 'react';

export function Nav({ logo = 'SAMI YAFEAI', links = [], cta }) {
  const words = logo.split(' ');
  const first = words.slice(0, -1).join(' ') || words[0];
  const last = words.length > 1 ? words[words.length - 1] : '';
  const go = (e, l) => {
    if (!l.href) return;
    e.preventDefault();
    document.getElementById(l.href.replace('#', ''))?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
  return (
    <nav className="sy-nav">
      <div className="sy-nav__logo">
        {first}{last && <span style={{ color: 'var(--accent-primary)' }}> {last}</span>}
      </div>
      <div className="sy-nav__links">
        {links.map((l) => {
          const label = typeof l === 'string' ? l : l.label;
          const href = typeof l === 'string' ? '#' : (l.href || '#');
          return (
            <a key={label} className="sy-nav__link" href={href} onClick={(e) => go(e, { href })}>{label}</a>
          );
        })}
        {cta}
      </div>
    </nav>
  );
}
