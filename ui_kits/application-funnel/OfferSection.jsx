function OfferSection({ Badge }) {
  const items = [
    { n: '01', icon: 'dumbbell', title: 'Custom Training Program', body: 'Fully tailored to your lifestyle, schedule, and goals.' },
    { n: '02', icon: 'utensils', title: 'Personalized Nutrition', body: 'Calorie and macro targets built around your life — no restrictive diets.' },
    { n: '03', icon: 'phone-call', title: 'Weekly Coaching Calls', body: 'Direct 1:1 time to review progress and refine your plan.' },
    { n: '04', icon: 'message-circle', title: '24/7 WhatsApp Support', body: 'Real answers, in real time, whenever you need them.' },
    { n: '05', icon: 'line-chart', title: 'Progress Tracking', body: 'Your program is adjusted every 2–4 weeks based on real data.' },
    { n: '06', icon: 'flag', title: '90-Day Mentorship', body: 'A complete coaching experience — not just a workout plan.' },
  ];
  return (
    <section style={{ padding: '140px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'flex-end', marginBottom: 72 }}>
          <div>
            <Badge tone="ember">The Forge Mentorship — by Sami Yafeai</Badge>
            <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '24px 0 0' }}>
              The Premium 90-Day Program
            </h2>
          </div>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: 0, borderLeft: '2px solid var(--accent-primary)', paddingLeft: 24 }}>
            For skinny men ready to build their dream physique. Far more than a workout plan — a complete coaching experience.
          </p>
        </div>
        <div>
          {items.map((item, i) => (
            <div key={item.n} style={{ display: 'grid', gridTemplateColumns: '80px 48px 1fr', gap: 24, alignItems: 'center', padding: '32px 0', borderTop: i === 0 ? '1px solid var(--border-strong)' : '1px solid var(--border-subtle)', borderBottom: i === items.length - 1 ? '1px solid var(--border-strong)' : 'none' }}>
              <span style={{ font: '800 40px var(--font-display)', color: 'var(--border-strong)' }}>{item.n}</span>
              <i data-lucide={item.icon} style={{ width: 26, height: 26, color: 'var(--accent-primary)' }}></i>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 24, alignItems: 'baseline' }}>
                <h3 style={{ font: '700 22px var(--font-body)', color: 'var(--text-primary)', margin: 0 }}>{item.title}</h3>
                <p style={{ font: 'var(--text-body-md)', color: 'var(--text-secondary)', margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.OfferSection = OfferSection;
