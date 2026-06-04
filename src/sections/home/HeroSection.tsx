import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg"><div className="grid-tex"></div><div className="glow g1"></div><div className="glow g2"></div><div className="wedge"></div></div>
      <div className="wrap hero-grid">
        <div className="hero-copy reveal in">
          <span className="eyebrow">FirstData Group</span>
          <h1>The future of asset ownership, <span className="green">tokenized.</span></h1>
          <p>Regulated, AI-integrated infrastructure for tokenizing real-world assets — unlocking liquidity, transparency and access, aligned with Saudi Vision 2030.</p>
          <div className="hero-actions"><Link className="btn btn-primary" to="/contact">Start a conversation <span className="circ">→</span></Link><Link className="btn btn-ghost" to="/platform">Explore platform <span className="circ">→</span></Link></div>
        </div>
        <div className="hero-cards reveal d2">
          <div className="asset-card main"><span>Tokenized real assets</span><b>AI + Compliance + Liquidity</b><p>From onboarding and valuation to ownership records, investor access and reporting.</p></div>
          <div className="mini-row"><div className="mini-card"><b>RWA</b><span>Real-world assets</span></div><div className="mini-card"><b>AI</b><span>Decision intelligence</span></div></div>
        </div>
      </div>
    </section>
  );
}
