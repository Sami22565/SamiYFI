function Reveal({ children, delay = '0s', style, className = '' }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`sy-reveal${inView ? ' in' : ''} ${className}`} style={{ transitionDelay: delay, ...style }}>
      {children}
    </div>
  );
}
window.Reveal = Reveal;
