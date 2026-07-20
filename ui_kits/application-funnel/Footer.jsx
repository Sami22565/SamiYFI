function Footer() {
  return (
    <React.Fragment>
      <section style={{ padding: '160px 0 120px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 50% 100%, rgba(255,75,43,0.30), transparent 70%)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', font: '800 clamp(80px, 14vw, 220px)/1 var(--font-display)', color: 'var(--bg-card)', textTransform: 'uppercase', whiteSpace: 'nowrap', zIndex: 0, userSelect: 'none' }}>FORGE</div>
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', padding: '0 32px', zIndex: 1 }}>
          <Reveal>
          <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(44px, 6vw, 84px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '0 0 40px' }}>Your Transformation Starts Today</h2>
          <button className="sy-btn sy-btn--primary sy-btn--lg" onClick={() => window.open('https://form.typeform.com/to/Wadzu0Jp', '_blank')}>Apply For Coaching</button>
          </Reveal>
        </div>
      </section>
      <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ font: '800 18px var(--font-display)', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
            Forge Coaching <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: 12, textTransform: 'none', fontFamily: 'var(--font-body)' }}>by Sami Yafeai</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="https://www.instagram.com/notsamiyafeai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
              <i data-lucide="instagram" style={{ width: 20, height: 20 }}></i>
            </a>
          </div>
          <div style={{ font: 'var(--text-caption)', color: 'var(--text-muted)' }}>© 2026 Forge Coaching. All rights reserved.</div>
        </div>
      </footer>
    </React.Fragment>
  );
}
window.Footer = Footer;
