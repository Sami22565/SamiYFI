function HeroSection({ Nav, Button, Badge, onApply }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: '#E4E2DC' }}>
          <image-slot id="hero-video" shape="rect" placeholder="Full-bleed intro video still / photo"></image-slot>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 1000px 600px at 50% 0%, rgba(255,75,43,0.14), transparent 60%), rgba(10,10,11,0.97)' }}></div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '28px 32px 0' }}>
        <Nav logo="FORGE COACHING" links={['Mentorship', 'Results', 'FAQ']} cta={<Button size="sm" onClick={onApply}>Apply</Button>} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '140px 32px 180px', pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto', display: 'inline-block' }}><Badge tone="ember">Applications Open — Limited Spots</Badge></div>
        <h1 style={{ font: '800 1 var(--font-display)', fontSize: 'clamp(64px, 9vw, 148px)', lineHeight: 0.92, color: 'var(--text-primary)', textTransform: 'uppercase', margin: '28px 0 0', letterSpacing: '-0.015em', maxWidth: 1100, textShadow: '0 4px 32px rgba(0,0,0,0.6)' }}>
            Build The <span style={{ color: 'var(--accent-primary)' }}>Physique</span> You Never Thought Possible
        </h1>
        <div style={{ pointerEvents: 'auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'flex-end', marginTop: 44, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 32 }}>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: 480, margin: 0 }}>
            Personalized coaching designed to help skinny men build muscle, gain confidence, and become the strongest version of themselves.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onApply}>Apply Now</Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('meet-coach')?.scrollIntoView({ block: 'start' })}>
              <i data-lucide="play" style={{ width: 16, height: 16 }}></i>&nbsp;Watch My Story
            </Button>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-page)', overflow: 'hidden', padding: '20px 0' }}>
        <div style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap', animation: 'sy-marquee 22s linear infinite', width: 'max-content' }}>
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {['THE FORGE MENTORSHIP', 'BY SAMI YAFEAI', '90-DAY TRANSFORMATION', 'BUILT FOR SKINNY MEN'].map((t) => (
                <span key={t} style={{ font: '800 20px var(--font-display)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 48 }}>
                  {t}<span style={{ color: 'var(--accent-primary)' }}>◆</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
window.HeroSection = HeroSection;
