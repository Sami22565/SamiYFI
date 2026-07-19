function ApplyModal({ open, onClose, Input, Select, Textarea, Checkbox, Button }) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', budget: '', goal: '', agree: false });

  if (!open) return null;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const steps = [
    {
      title: 'Your Info',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="Full name" placeholder="Jane Doe" value={form.name} onChange={update('name')} />
          <Input label="Email" type="email" placeholder="jane@email.com" value={form.email} onChange={update('email')} />
          <Input label="Phone" type="tel" placeholder="(555) 555-5555" value={form.phone} onChange={update('phone')} />
        </div>
      ),
    },
    {
      title: 'Your Goals',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Monthly budget" value={form.budget} onChange={update('budget')} options={['$500 - $1,000', '$1,000 - $2,500', '$2,500+']} />
          <Textarea label="What's your #1 goal right now?" placeholder="e.g. sign my first 10 coaching clients" value={form.goal} onChange={update('goal')} rows={3} />
        </div>
      ),
    },
    {
      title: 'Confirm',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Checkbox label="I agree to be contacted about coaching" checked={form.agree} onChange={update('agree')} />
        </div>
      ),
    },
  ];

  const isLast = step === steps.length - 1;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }} onClick={onClose}>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 40, width: 440, maxWidth: '90vw', boxShadow: 'var(--shadow-lg)' }} onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ font: 'var(--text-display-md)', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>You're In</div>
            <p style={{ font: 'var(--text-body-md)', color: 'var(--text-secondary)', marginTop: 12 }}>We'll reach out within 24 hours to schedule your strategy call.</p>
            <Button variant="outline" size="md" onClick={onClose} style={{ marginTop: 24 }}>Close</Button>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <span style={{ font: 'var(--text-label)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)' }}>Step {step + 1} of {steps.length}</span>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <i data-lucide="x" style={{ width: 20, height: 20 }}></i>
              </button>
            </div>
            <h3 style={{ font: 'var(--text-display-md)', color: 'var(--text-primary)', textTransform: 'uppercase', margin: '0 0 24px' }}>{steps[step].title}</h3>
            {steps[step].body}
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              {step > 0 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
              <Button variant="primary" onClick={() => (isLast ? setSubmitted(true) : setStep(step + 1))} disabled={isLast && !form.agree}>
                {isLast ? 'Submit Application' : 'Continue'}
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
window.ApplyModal = ApplyModal;
