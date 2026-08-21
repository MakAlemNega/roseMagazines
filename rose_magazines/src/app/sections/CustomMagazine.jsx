import Link from "next/link";
import Image from "next/image";

export default function CustomMagazine() {
  return (
    <section className="custom-section" id="custom">
      <div className="container custom-layout">
        <div className="custom-visual">
          <div className="custom-image-main">
            <Image
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1200&q=85"
              alt="Open magazine displaying memories"
              fill
              sizes="(max-width: 900px) 90vw, 55vw"
            />
          </div>

          <div className="custom-image-small">
            <Image
              src="/images/customMagazines/Custom_Mag_Small02.avif"
              alt="Magazine detail"
              fill
              sizes="220px"
            />
          </div>

          <div className="custom-stamp">
            <span>Made</span>
            <span>For</span>
            <strong>You</strong>
          </div>
        </div>

        <div className="custom-copy">
          <p className="eyebrow">Your story, your way</p>

          <h2>
            Custom
            <br />
            <em>magazines.</em>
          </h2>

          <p className="custom-description">
            Birthdays, weddings, travels, friendships, family, milestones, or
            simply a year worth remembering. Bring us your memories and we'll
            turn them into a magazine that feels completely yours.
          </p>

          <div className="custom-features">
            <div>
              <span>01</span>
              <p>Choose your format</p>
            </div>

            <div>
              <span>02</span>
              <p>Share your memories</p>
            </div>

            <div>
              <span>03</span>
              <p>We create the story</p>
            </div>
          </div>

          <Link href="#contact" className="button custom-button">
            Start your magazine
          </Link>
        </div>
      </div>
    </section>
  );
}
