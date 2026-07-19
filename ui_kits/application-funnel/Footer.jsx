function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '40px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ font: '800 18px var(--font-display)', color: 'var(--text-primary)', textTransform: 'uppercase' }}>Sami Yafeai</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {['instagram', 'youtube', 'tiktok'].map((n) => (
            <i key={n} data-lucide={n === 'instagram' ? 'instagram' : n === 'youtube' ? 'youtube' : 'music-2'} style={{ color: 'var(--text-muted)', width: 20, height: 20 }}></i>
          ))}
        </div>
        <div style={{ font: 'var(--text-caption)', color: 'var(--text-muted)' }}>© 2026 Sami Yafeai. All rights reserved.</div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
