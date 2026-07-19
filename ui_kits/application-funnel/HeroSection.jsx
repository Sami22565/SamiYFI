function HeroSection({ Nav, Button, Badge, onApply }) {
  return (
    <header style={{ padding: '0 0 80px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <Nav links={['Program', 'Results', 'FAQ']} cta={<Button size="sm" onClick={onApply}>Apply</Button>} />
      </div>
      <div style={{ maxWidth: 1120, margin: '56px auto 0', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Badge tone="ember">Applications Open — Limited Spots</Badge>
          <h1 style={{ font: 'var(--text-display-xl)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '20px 0 0' }}>
            Turn Your Fitness Into A Full-Time Career
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: 480, margin: '20px 0 0' }}>
            Apply to work directly with Sami and get a personalized roadmap for training, coaching, and business — whether you're just starting or already coaching clients.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
            <Button variant="primary" size="lg" onClick={onApply}>Apply Now</Button>
            <Button variant="ghost" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ block: 'start' })}>See how it works</Button>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '9/12', maxHeight: 520, background: '#E4E2DC', border: '1px solid var(--border-strong)', borderRadius: 20, overflow: 'hidden' }}>
          <image-slot id="hero-video" shape="rounded" radius="20" placeholder="Drop intro video still / photo"></image-slot>
        </div>
      </div>
    </header>
  );
}
window.HeroSection = HeroSection;
