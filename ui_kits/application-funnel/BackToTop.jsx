function BackToTop() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const fillPct = progress * 100;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', right: 28, bottom: 28, zIndex: 40,
        width: 52, height: 52, borderRadius: '50%', border: '1px solid var(--border-strong)',
        background: 'var(--bg-card)', color: 'var(--text-primary)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        boxShadow: progress > 0.05 ? 'var(--shadow-md)' : 'none',
        opacity: progress > 0.02 ? 1 : 0, transition: 'opacity 200ms var(--ease-standard), box-shadow 200ms var(--ease-standard)',
        pointerEvents: progress > 0.02 ? 'auto' : 'none',
      }}
    >
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: `${fillPct}%`,
        background: 'var(--accent-primary)', transition: 'height 120ms linear', opacity: 0.55,
      }}>
        <svg viewBox="0 0 120 20" preserveAspectRatio="none" style={{ position: 'absolute', top: -9, left: 0, width: '100%', height: 10, display: fillPct > 1 && fillPct < 100 ? 'block' : 'none' }}>
          <path d="M0 10 Q 15 2 30 10 T 60 10 T 90 10 T 120 10 V20 H0 Z" fill="var(--accent-primary)">
            <animate attributeName="d"
              values="M0 10 Q 15 2 30 10 T 60 10 T 90 10 T 120 10 V20 H0 Z;
                      M0 10 Q 15 18 30 10 T 60 10 T 90 10 T 120 10 V20 H0 Z;
                      M0 10 Q 15 2 30 10 T 60 10 T 90 10 T 120 10 V20 H0 Z"
              dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <i data-lucide="arrow-up" style={{ width: 20, height: 20, position: 'relative', zIndex: 1 }}></i>
    </button>
  );
}
window.BackToTop = BackToTop;
