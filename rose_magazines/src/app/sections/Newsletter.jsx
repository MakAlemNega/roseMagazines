export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-layout">
        <div className="newsletter-copy">
          <p className="eyebrow">Stay in the loop</p>

          <h2>
            New stories.
            <br />
            <em>New drops.</em>
          </h2>

          <p>
            Be the first to hear about new collections, magazine templates, club
            issues and things we're making in the studio.
          </p>
        </div>

        <form className="newsletter-form">
          <label htmlFor="newsletter-email">Your email address</label>

          <div className="newsletter-input-row">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <button type="submit">
              Subscribe
              <span>↗</span>
            </button>
          </div>

          <p className="newsletter-note">No noise. Just the good stuff.</p>
        </form>
      </div>
    </section>
  );
}
