function HowItWorksSection({ Badge }) {
  const steps = [
    { n: '01', title: 'Apply', body: 'Fill out the short application below — tell us about your goals and experience.' },
    { n: '02', title: 'Strategy Call', body: 'Get on a 1:1 call to map a personalized roadmap for training and business.' },
    { n: '03', title: 'Start Coaching', body: 'Begin the mentorship with direct access, weekly check-ins, and real accountability.' },
  ];
  return (
    <section id="how-it-works" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <Badge tone="gold">Process</Badge>
        <h2 style={{ font: 'var(--text-display-lg)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '16px 0 48px' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {steps.map((s) => (
            <div key={s.n}>
              <div style={{ font: 'var(--text-display-md)', color: 'var(--accent-primary)' }}>{s.n}</div>
              <h3 style={{ font: '700 20px var(--font-body)', color: 'var(--text-primary)', margin: '12px 0 8px' }}>{s.title}</h3>
              <p style={{ font: 'var(--text-body-md)', color: 'var(--text-secondary)', margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorksSection = HowItWorksSection;
