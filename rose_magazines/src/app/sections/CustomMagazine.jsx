import Link from "next/link";
import Image from "next/image";

export default function CustomMagazine() {
  return (
    <section className="custom-section" id="custom">
      <div className="container custom-layout">
        {/* Visual */}
        <div className="custom-visual">
          {/* Main Video */}
          <div className="custom-image-main">
            <Link
              href="https://vt.tiktok.com/ZSVQFVDgw/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-video-link"
              aria-label="Watch the original magazine video on TikTok"
            >
              <video
                className="custom-magazine-video"
                src="/videos/Custom_Mag_Big01.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Custom magazine preview"
              />

              <div className="custom-video-overlay">
                <span>Watch on TikTok</span>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          </div>

          {/* Small Image */}
          <div className="custom-image-small">
            <Image
              src="/images/customMagazines/Custom_Mag_Small02.avif"
              alt="Magazine detail"
              fill
              sizes="220px"
            />
          </div>

          {/* Stamp */}
          <div className="custom-stamp">
            <span>Made</span>
            <span>For</span>
            <strong>You</strong>
          </div>
        </div>

        {/* Content */}
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

          {/* Features */}
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

          {/* CTA */}
          <Link href="#contacts" className="button custom-button">
            Start your magazine
          </Link>
        </div>
      </div>
    </section>
  );
}
