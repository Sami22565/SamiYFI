function ComparisonSection({ Badge }) {
  const forge = ['Fully personalized to your body & goals', 'Weekly accountability & adjustments', 'Direct coach support', 'Nutrition built around your life', 'Built for long-term results'];
  const generic = ['Same plan for everyone', 'No follow-up', 'No support', 'Generic macros', 'Built to sell a PDF'];
  return (
    <section style={{ padding: '140px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <Badge tone="ember">Why Forge Coaching</Badge>
        <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(36px, 4.5vw, 64px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '20px 0 64px' }}>
          Forge Coaching vs. Generic Plans
        </h2>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ paddingRight: 60, paddingTop: 8 }}>
          <div style={{ font: '800 22px var(--font-display)', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: 28 }}>Forge Coaching</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {forge.map((f) => (
              <div key={f} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <i data-lucide="check-circle-2" style={{ width: 20, height: 20, color: 'var(--accent-primary)', flex: 'none', marginTop: 2 }}></i>
                <span style={{ font: 'var(--text-body-md)', color: 'var(--text-primary)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--border-strong)' }}></div>
        <div style={{ position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)', font: '800 22px var(--font-display)', color: 'var(--text-muted)', background: 'var(--bg-surface)', padding: '4px 16px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-pill)', zIndex: 2 }}>VS</div>
        <div style={{ paddingLeft: 60, paddingTop: 8 }}>
          <div style={{ font: '800 22px var(--font-display)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 28 }}>Generic Plans</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {generic.map((g) => (
              <div key={g} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <i data-lucide="x-circle" style={{ width: 20, height: 20, color: 'var(--text-muted)', flex: 'none', marginTop: 2 }}></i>
                <span style={{ font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.ComparisonSection = ComparisonSection;
