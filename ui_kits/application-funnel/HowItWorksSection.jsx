function HowItWorksSection({ Badge }) {
  const steps = [
    { n: '01', title: 'Apply', body: 'Fill out the short application below — tell us about your goals and current experience.' },
    { n: '02', title: 'Strategy Call', body: 'Get on a 1:1 call to map a personalized plan for your training, nutrition, and lifestyle.' },
    { n: '03', title: 'Personalized Plan', body: 'Receive your custom training and nutrition program, built around your body and schedule.' },
    { n: '04', title: 'Transformation', body: 'Train with weekly accountability and direct support until you see it in the mirror.' },
  ];
  return (
    <section id="how-it-works" style={{ padding: '160px 0 180px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)', clipPath: 'polygon(0 56px, 100% 0, 100% calc(100% - 56px), 0 100%)', zIndex: 0 }}></div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <Badge tone="gold">Process</Badge>
        <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(36px, 4.5vw, 64px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '20px 0 72px' }}>How It Works</h2>
        <div>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={`${i * 0.08}s`} className="sy-step-row" style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 200px' : '200px 1fr', gap: 40, alignItems: 'center',
              padding: '40px 0', borderTop: i === 0 ? '1px solid var(--border-strong)' : '1px solid var(--border-subtle)',
              borderBottom: i === steps.length - 1 ? '1px solid var(--border-strong)' : 'none',
            }}>
              {i % 2 === 0 ? (
                <React.Fragment>
                  <div>
                    <h3 style={{ font: '700 28px var(--font-body)', color: 'var(--text-primary)', margin: '0 0 10px' }}>{s.title}</h3>
                    <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: 0, maxWidth: 560 }}>{s.body}</p>
                  </div>
                  <div className="sy-step-num" style={{ font: '800 96px var(--font-display)', color: 'var(--bg-card)', textAlign: 'right', lineHeight: 1 }}>{s.n}</div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="sy-step-num" style={{ font: '800 96px var(--font-display)', color: 'var(--bg-card)', lineHeight: 1 }}>{s.n}</div>
                  <div>
                    <h3 style={{ font: '700 28px var(--font-body)', color: 'var(--text-primary)', margin: '0 0 10px' }}>{s.title}</h3>
                    <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: 0, maxWidth: 560 }}>{s.body}</p>
                  </div>
                </React.Fragment>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorksSection = HowItWorksSection;
