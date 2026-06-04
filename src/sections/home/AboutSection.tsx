export default function AboutSection() {
  const pillars = [
    ['Tokenization', 'Digitize real-world ownership rights with transparent records.'],
    ['AI Intelligence', 'Support valuation, monitoring and decision workflows.'],
    ['Compliance', 'Operate with governance, reporting and access controls.'],
    ['Market Access', 'Connect asset owners, investors and partners.'],
  ];
  return <section className="section" id="about"><div className="wrap"><span className="eyebrow reveal">What FirstData builds</span><h2 className="reveal">Infrastructure for <span className="green">asset-backed markets</span></h2><p className="lead reveal d1">FirstData combines data, AI and regulated digital-asset infrastructure to transform how assets are owned, traded and managed.</p><div className="pillars-grid">{pillars.map(([title, text], i) => <article className="pcard reveal" key={title}><div className="ic">0{i + 1}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
