function FAQSection({ Badge, Accordion }) {
  const items = [
    { question: 'Who is Forge Coaching for?', answer: 'Skinny men who want to build muscle, gain confidence, and finally see real change — whether you\'ve trained before or you\'re starting from scratch.' },
    { question: 'Who is this not for?', answer: 'Anyone looking for a quick fix or unwilling to follow a structured 90-day plan. This is real coaching, not a PDF.' },
    { question: 'How long is the mentorship?', answer: 'The Forge Mentorship runs 90 days, transitioning into ongoing group coaching for continued members.' },
    { question: 'Do I need a gym membership?', answer: 'No — your program is built around whatever equipment and schedule you have, gym or home.' },
    { question: 'How is nutrition handled?', answer: 'You get a personalized nutrition plan with calorie and macro targets — no restrictive diets.' },
    { question: 'How often do we talk?', answer: 'Weekly coaching calls plus 24/7 WhatsApp support for day-to-day questions.' },
    { question: 'Will my plan change over time?', answer: 'Yes — your program is reviewed and adjusted every 2–4 weeks based on your progress.' },
    { question: 'What if I\'ve failed at fitness before?', answer: 'Most clients have. That\'s exactly why weekly accountability and a personalized system are built into the program.' },
    { question: 'Do you work with beginners?', answer: 'Yes — most clients start as complete beginners to structured training.' },
    { question: "What's the investment?", answer: 'Pricing is discussed on your 1:1 strategy call after you apply.' },
  ];
  return (
    <section id="faq" style={{ padding: '140px 0' }}>
      <div className="sy-faq-grid" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 56 }}>
        <div className="sy-faq-side" style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          <Badge tone="dark">FAQ</Badge>
          <h2 style={{ font: 'var(--text-display-lg)', fontSize: 'clamp(36px, 4.5vw, 56px)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '20px 0 16px' }}>Common Questions</h2>
          <p style={{ font: 'var(--text-body-md)', color: 'var(--text-secondary)', margin: 0 }}>Still unsure? Apply and ask on your strategy call.</p>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}
window.FAQSection = FAQSection;
