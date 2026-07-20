function LearnVsSection({ Badge }) {
  const learn = ['Build muscle faster', 'Gain strength naturally', 'Build confidence', 'Eat correctly without restrictive diets', 'Build habits that last', 'Stay accountable'];
  const noMore = ['Guessing workouts', 'Restrictive diets', 'Endless cardio', 'Wasting time', 'Feeling stuck'];
  return (
    <section style={{ padding: '140px 0 120px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Badge tone="gold">The Shift</Badge>
          <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(36px, 4.5vw, 56px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '20px 0 0' }}>From Stuck To Structured</h2>
        </div>
        <Reveal className="sy-split-cols" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className="sy-split-left" style={{ paddingRight: 56 }}>
            <div style={{ font: '800 15px var(--font-body)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', marginBottom: 24 }}>No More</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {noMore.map((n) => (
                <div key={n} style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'flex-end', textAlign: 'right' }}>
                  <span style={{ font: 'var(--text-body-lg)', color: 'var(--text-muted)', textDecoration: 'line-through', textDecorationColor: 'var(--border-strong)' }}>{n}</span>
                  <i data-lucide="x" style={{ width: 18, height: 18, color: 'var(--text-muted)', flex: 'none' }}></i>
                </div>
              ))}
            </div>
          </div>
          <div className="sy-split-divider" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--border-strong)' }}></div>
          <div className="sy-split-badge" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-glow-ember)', zIndex: 2 }}>
            <i data-lucide="arrow-right" style={{ width: 26, height: 26, color: 'var(--text-on-accent)' }}></i>
          </div>
          <div className="sy-split-right" style={{ paddingLeft: 56 }}>
            <div style={{ font: '800 15px var(--font-body)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', marginBottom: 24 }}>What You'll Learn</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {learn.map((l) => (
                <div key={l} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <i data-lucide="check" style={{ width: 18, height: 18, color: 'var(--accent-primary)', flex: 'none' }}></i>
                  <span style={{ font: 'var(--text-body-lg)', color: 'var(--text-primary)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.LearnVsSection = LearnVsSection;
