function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 100, background: 'rgba(255,255,255,0.06)' }}>
      <div style={{ height: '100%', width: `${p * 100}%`, background: 'linear-gradient(90deg, var(--gold-500), var(--accent-primary))', transition: 'width 80ms linear' }}></div>
    </div>
  );
}
window.ScrollProgress = ScrollProgress;

function StickyNav({ onApply }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90,
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 320ms var(--ease-standard), background 320ms var(--ease-standard)',
      background: 'rgba(10,10,11,0.72)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ font: '800 18px var(--font-display)', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
          Forge <span style={{ color: 'var(--accent-primary)' }}>Coaching</span>
        </div>
        <div className="sy-sticky-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[{ l: 'Mentorship', h: '#mentorship' }, { l: 'Results', h: '#results' }, { l: 'FAQ', h: '#faq' }].map((x) => (
            <a key={x.l} className="sy-sticky-link" href={x.h} onClick={(e) => { e.preventDefault(); document.getElementById(x.h.slice(1))?.scrollIntoView({ block: 'start', behavior: 'smooth' }); }}
              style={{ font: 'var(--text-label)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', textDecoration: 'none' }}>{x.l}</a>
          ))}
          <button className="sy-btn sy-btn--primary sy-btn--sm" onClick={onApply}>Apply</button>
        </div>
      </div>
    </div>
  );
}
window.StickyNav = StickyNav;
