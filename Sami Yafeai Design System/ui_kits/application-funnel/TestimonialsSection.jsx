function TestimonialsSection({ Badge, TestimonialCard }) {
  const items = [
    { quote: 'Went from posting workouts for free to running a full online coaching business in 4 months.', name: 'Marcus T.', meta: 'Online Coach', initials: 'MT' },
    { quote: "Sami's roadmap gave me the structure I was missing — signed my first 10 clients in 6 weeks.", name: 'Dana R.', meta: 'Personal Trainer', initials: 'DR' },
    { quote: 'The accountability alone was worth it. My business finally has a system.', name: 'Alex P.', meta: 'Fitness Creator', initials: 'AP' },
  ];
  return (
    <section style={{ padding: '96px 0', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <Badge tone="ember">Results</Badge>
        <h2 style={{ font: 'var(--text-display-lg)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '16px 0 48px' }}>What Clients Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  );
}
window.TestimonialsSection = TestimonialsSection;
