function TestimonialsSection({ Badge, TestimonialCard }) {
  const items = [
    { quote: "I finally put on real size — my shirts fit differently now. The accountability kept me consistent for the first time.", name: 'Marcus T.', meta: '90-Day Client', initials: 'MT' },
    { quote: "The nutrition plan removed all the guesswork. I stopped restarting every month and just followed the system.", name: 'Dana R.', meta: '90-Day Client', initials: 'DR' },
    { quote: "I feel confident taking my shirt off for the first time in years. Worth every session.", name: 'Alex P.', meta: '90-Day Client', initials: 'AP' },
    { quote: "Structured, direct, no fluff. Exactly what I needed after years of guessing.", name: 'Ryan K.', meta: '90-Day Client', initials: 'RK' },
  ];
  return (
    <section style={{ padding: '140px 0 140px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto 56px', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <Badge tone="ember">Success Stories</Badge>
          <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(36px, 4.5vw, 56px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '20px 0 0' }}>What Clients Say</h2>
        </div>
        <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: 0 }}>Scroll to see more →</p>
      </div>
      <div style={{ display: 'flex', gap: 24, overflowX: 'auto', padding: '0 32px 12px', scrollSnapType: 'x mandatory' }}>
        {items.map((t) => (
          <div key={t.name} style={{ flex: '0 0 380px', scrollSnapAlign: 'start', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 32 }}>
            <i data-lucide="quote" style={{ width: 28, height: 28, color: 'var(--ember-500)', opacity: 0.5, marginBottom: 16 }}></i>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </section>
  );
}
window.TestimonialsSection = TestimonialsSection;
