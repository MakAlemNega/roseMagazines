import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-decoration final-cta-decoration-one">R</div>

      <div className="final-cta-decoration final-cta-decoration-two">R</div>

      <div className="container final-cta-inner">
        <p className="eyebrow">Made to be remembered</p>

        <h2>
          Your story
          <br />
          deserves a <em>place.</em>
        </h2>

        <p className="final-cta-description">
          Turn the photographs, memories, people and moments that matter into
          something beautiful enough to keep forever.
        </p>

        <div className="final-cta-actions">
          <Link href="#contact" className="button final-cta-primary">
            Create your magazine
          </Link>

          <Link href="#templates" className="button final-cta-secondary">
            Explore templates
          </Link>
        </div>
      </div>

      <div className="final-cta-bottom">
        <span>ROSE MAGAZINES</span>
        <span>MADE TO BE KEPT</span>
        <span>EST. 2025</span>
      </div>
    </section>
  );
}
