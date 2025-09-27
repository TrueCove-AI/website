import Spiral from "./Spiral.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>
            Transform Your Digital Presence with Our Comprehensive Services
          </h1>
          <p className="lead">
            Our software company offers a full range of services including web
            and app design and development, SEO, and content marketing to help
            transform your brand’s digital footprint.
          </p>
          <button className="cta">Our Services</button>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Spiral />
        </div>
      </div>
    </section>
  );
}
