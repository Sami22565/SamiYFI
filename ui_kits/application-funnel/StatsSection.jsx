function StatsSection({ StatBlock }) {
  const stats = [
    { value: '500+', label: 'Clients coached' },
    { value: '$2.4M', label: 'Client revenue generated' },
    { value: '4.9/5', label: 'Average rating' },
    { value: '30+', label: 'Countries reached' },
  ];
  return (
    <section style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '40px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {stats.map((s) => <StatBlock key={s.label} value={s.value} label={s.label} />)}
      </div>
    </section>
  );
}
window.StatsSection = StatsSection;
