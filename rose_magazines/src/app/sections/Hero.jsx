import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" aria-hidden="true">
        <div className="hero-image-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-topline">
          <span>Rose Magazines</span>
          <span>Est. 2026</span>
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">
            Custom magazines · Keepsakes · Memories
          </p>

          <h1>
            Where memories
            <br />
            <em>become stories.</em>
          </h1>

          <p className="hero-description">
            Beautifully crafted magazines made to preserve the people, places,
            celebrations, and little moments that deserve to be remembered.
          </p>

          <div className="hero-actions">
            <Link href="#collections" className="button">
              Explore the collection
            </Link>

            <Link href="#custom" className="button button-light">
              Create your magazine
            </Link>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Issue No. 01</span>

          <span className="hero-scroll">
            Scroll to explore
            <span className="hero-scroll-line" />
          </span>

          <span>Made to be kept</span>
        </div>
      </div>
    </section>
  );
}
