import Hero from "../components/Hero.jsx";
import ServiceTile from "../components/ServiceTile.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="strip">
        <div className="container">
          <h2>
            Affordable and Effective Digital Solutions for Business Success
          </h2>

          <ServiceTile />

          <div className="link-list">
            <Link className="link-row" to="/services#mobile">
              <span>Mobile App Design & Development</span>
              <span className="arrow">→</span>
            </Link>
            <Link className="link-row" to="/services#seo">
              <span>Search Engine Optimization (SEO)</span>
              <span className="arrow">→</span>
            </Link>
            <Link className="link-row" to="/services#smm">
              <span>Social Media Marketing</span>
              <span className="arrow">→</span>
            </Link>
          </div>

          <div style={{ marginTop: 18 }}>
            <Link to="/services" className="cta" aria-label="All Services">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
