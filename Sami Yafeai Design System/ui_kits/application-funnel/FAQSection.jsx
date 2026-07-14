function FAQSection({ Badge, Accordion }) {
  const items = [
    { question: 'Who is this mentorship for?', answer: 'Trainers, coaches, and fitness creators — whether you have 500 followers or 500K.' },
    { question: 'How long is the mentorship?', answer: 'Core program runs 12 weeks, with ongoing access for continued members.' },
    { question: 'Do I need an existing audience?', answer: "No — we'll help you build one, or grow what you already have." },
    { question: "What's the investment?", answer: 'Pricing is discussed on your 1:1 strategy call after you apply.' },
  ];
  return (
    <section style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <Badge tone="dark">FAQ</Badge>
        <h2 style={{ font: 'var(--text-display-lg)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '16px 0 32px' }}>Common Questions</h2>
        <Accordion items={items} />
      </div>
    </section>
  );
}
window.FAQSection = FAQSection;
