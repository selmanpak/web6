export default function TrustStripSection() {
  const chips = ['Regulated-first architecture', 'AI-integrated operations', 'Real-world asset focus', 'Vision 2030 alignment'];
  return <section className="trust"><div className="wrap"><div className="label">Built for institutional confidence</div><div className="trust-row">{chips.map((chip) => <div className="chip" key={chip}><span className="d"></span>{chip}</div>)}</div></div></section>;
}
