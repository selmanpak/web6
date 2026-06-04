type PlaceholderPageProps = { eyebrow: string; title: string; description: string; };

export default function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <main>
      <section className="phero">
        <div className="grid-tex"></div><div className="glow"></div><div className="wedge"></div>
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p className="lead">{description}</p>
        </div>
      </section>
    </main>
  );
}
