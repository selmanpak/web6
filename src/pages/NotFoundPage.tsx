import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main>
      <section className="phero">
        <div className="grid-tex"></div><div className="glow"></div><div className="wedge"></div>
        <div className="wrap">
          <span className="eyebrow">404</span><h1>Page not found</h1><p className="lead">This page is not available yet.</p>
          <div style={{ marginTop: 32 }}><Link className="btn btn-primary" to="/">Back home <span className="circ">→</span></Link></div>
        </div>
      </section>
    </main>
  );
}
