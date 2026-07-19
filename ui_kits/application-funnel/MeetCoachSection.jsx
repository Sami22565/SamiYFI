function MeetCoachSection({ Badge }) {
  return (
    <section id="meet-coach" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, left: 0, font: '800 340px/1 var(--font-display)', color: 'var(--bg-card)', zIndex: 0, userSelect: 'none', letterSpacing: '-0.04em' }}>01</div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 72, alignItems: 'center' }}>
        <div style={{ position: 'relative', transform: 'rotate(-3deg)' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: '#E4E2DC', border: '1px solid var(--border-strong)', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <image-slot id="coach-photo" shape="rounded" radius="20" src="../../uploads/background.jpg" placeholder="Photo of Sami Yafeai"></image-slot>
          </div>
        </div>
        <div>
          <Badge tone="dark">Meet Your Coach</Badge>
          <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '24px 0 36px' }}>Sami Yafeai</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              "I used to be the skinny guy who hated how he looked.",
              "I lacked confidence. I wasted years following bad fitness advice.",
              "Eventually I discovered what actually builds muscle — and I transformed my physique.",
              "Now I help other skinny men avoid the same mistakes I made.",
            ].map((line, i) => (
              <p key={line} style={{ font: 'var(--text-body-lg)', fontSize: 21, color: 'var(--text-secondary)', margin: 0, padding: '20px 0', borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none' }}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.MeetCoachSection = MeetCoachSection;
