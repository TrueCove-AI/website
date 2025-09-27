export default function Services() {
  return (
    <section className="container" style={{ padding: "48px 0 72px" }}>
      <h1>Our Services</h1>
      <p className="lead">
        From product strategy to launch, we design, build, and grow modern web &
        mobile apps.
      </p>

      <ul>
        <li id="web">
          <strong>Web Design & Development</strong> — marketing sites, web apps,
          e-commerce.
        </li>
        <li id="mobile">
          <strong>Mobile App Development</strong> — React Native & Expo.
        </li>
        <li id="seo">
          <strong>SEO</strong> — audits, technical fixes, content plans.
        </li>
        <li id="smm">
          <strong>Social Media Marketing</strong> — campaigns, creative,
          analytics.
        </li>
        <li>
          <strong>Content</strong> — blog/landing copy, video scripts, brand
          voice.
        </li>
      </ul>
    </section>
  );
}
