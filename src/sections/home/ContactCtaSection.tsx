import { Link } from 'react-router-dom';

export default function ContactCtaSection() {
  return <section className="section cta" id="contact"><div className="glow"></div><div className="wrap"><h2 className="reveal">Ready to shape the next generation of asset ownership?</h2><p className="reveal d1">Connect with FirstData to explore tokenization, AI-integrated infrastructure and regulated real-world asset opportunities.</p><Link className="btn btn-primary reveal d2" to="/contact">Talk to us <span className="circ">→</span></Link></div></section>;
}
