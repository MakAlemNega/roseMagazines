export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-layout">
        <div className="newsletter-copy">
          <div className="newsletter-heading-row">
            <p className="eyebrow">Coming Soon</p>

            <span className="newsletter-status">
              Something special is coming
            </span>
          </div>

          <h2>
            More stories.
            <br />
            <em>More to discover.</em>
          </h2>

          <p>
            We're preparing something new for the Rose community. A place to
            discover new collections, special releases, creative ideas, and
            stories worth keeping.
          </p>

          <div className="newsletter-features">
            <div className="newsletter-feature">
              <span>01</span>
              <p>New collections</p>
            </div>

            <div className="newsletter-feature">
              <span>02</span>
              <p>Special releases</p>
            </div>

            <div className="newsletter-feature">
              <span>03</span>
              <p>News from Rose</p>
            </div>
          </div>

          <div className="newsletter-coming-soon">
            <span>Coming soon</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>

        <div className="newsletter-visual">
          <div className="newsletter-card-back">
            <span>ROSE</span>
            <span>MAGAZINES</span>
          </div>

          <div className="newsletter-card">
            <div className="newsletter-card-content">
              <span>ROSE MAGAZINES</span>

              <h3>
                Something
                <br />
                new is
                <br />
                coming.
              </h3>

              <p>Made to be discovered.</p>
            </div>
          </div>

          <div className="newsletter-stamp">
            <span>COMING</span>
            <strong>SOON</strong>
            <span>EST. 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
