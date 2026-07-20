function StatsSection({ StatBlock }) {
  const stats = [
    { icon: 'dumbbell', value: 'Custom', label: 'Training Program' },
    { icon: 'utensils', value: 'Custom', label: 'Nutrition Plan' },
    { icon: 'calendar-check', value: 'Weekly', label: 'Accountability Calls' },
    { icon: 'message-circle', value: '24/7', label: 'Direct Support' },
  ];
  return (
    <section style={{ padding: '64px 0' }}>
      <Reveal style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="sy-hover-lift" style={{ flex: '1 1 220px', display: 'flex', gap: 16, alignItems: 'center', padding: '20px 28px', borderLeft: i > 0 ? '1px solid var(--border-subtle)' : 'none', borderRadius: 'var(--radius-md)' }}>
            <i data-lucide={s.icon} style={{ width: 28, height: 28, color: 'var(--accent-primary)', flex: 'none' }}></i>
            <div>
              <div style={{ font: 'var(--text-display-md)', fontSize: 24, color: 'var(--text-primary)' }}>{s.value}</div>
              <div style={{ font: 'var(--text-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
window.StatsSection = StatsSection;
