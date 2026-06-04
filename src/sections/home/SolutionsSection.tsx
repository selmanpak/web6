export default function SolutionsSection() {
  const cards = [
    ['For Asset Owners', ['Unlock new liquidity channels', 'Prepare assets for transparent digital ownership', 'Manage lifecycle and investor reporting']],
    ['For Investors', ['Access asset-backed opportunities', 'Evaluate data-rich opportunities', 'Track performance and ownership records']],
    ['For Partners', ['Integrate tokenization workflows', 'Build on regulated infrastructure', 'Collaborate across Saudi and regional markets']],
  ];
  return <section className="section" id="solutions"><div className="wrap"><span className="eyebrow reveal">Solutions</span><h2 className="reveal">One infrastructure layer, <span className="green">many market roles</span></h2><div className="sol-grid">{cards.map(([title, items]) => <article className="scard reveal" key={title as string}><span className="tag">FirstData</span><h3>{title as string}</h3><ul>{(items as string[]).map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div></div></section>;
}
