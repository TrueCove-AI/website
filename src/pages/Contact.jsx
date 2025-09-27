export default function Contact() {
  return (
    <section className="container" style={{ padding: "48px 0 72px" }}>
      <h1>Contact Us</h1>
      <p className="lead">Tell us about your project and timeline.</p>

      <form className="contact" onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "grid", gap: "12px", maxWidth: "620px" }}>
          <input required placeholder="Your name" />
          <input required type="email" placeholder="Email" />
          <input placeholder="Company" />
          <textarea rows="5" placeholder="What can we build together?" />
          <button className="cta" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
