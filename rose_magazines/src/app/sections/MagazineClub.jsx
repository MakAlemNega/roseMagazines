import Link from "next/link";
import Image from "next/image";

export default function MagazineClub() {
  return (
    <section className="club-section" id="club">
      <div className="container club-layout">

        <div className="club-copy">
          <div className="club-heading-row">
            <p className="eyebrow">The Rose Magazine Club</p>

            <span className="club-member-number">
              Member 01
            </span>
          </div>

          <h2>
            More stories.
            <br />
            <em>More memories.</em>
            <br />
            More to keep.
          </h2>

          <p className="club-description">
            A little something special for people who believe
            the moments worth remembering deserve a place
            of their own.
          </p>

          <div className="club-benefits">
            <div className="club-benefit">
              <span>01</span>
              <p>New issue every season</p>
            </div>

            <div className="club-benefit">
              <span>02</span>
              <p>Members-only designs</p>
            </div>

            <div className="club-benefit">
              <span>03</span>
              <p>Early access to new collections</p>
            </div>
          </div>

          <Link
            href="#contact"
            className="button club-button"
          >
            Join the club
          </Link>
        </div>

        <div className="club-visual">
          <div className="club-card-back">
            <span>ROSE</span>
            <span>MAGAZINES</span>
          </div>

          <div className="club-card">
            <div className="club-card-image">
              <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85"
                alt="Rose Magazine Club issue"
                fill
                sizes="(max-width: 800px) 70vw, 420px"
              />
            </div>

            <div className="club-card-content">
              <span>THE ROSE CLUB</span>

              <h3>
                Issue
                <br />
                No. 01
              </h3>

              <p>Made to be kept.</p>
            </div>
          </div>

          <div className="club-stamp">
            <span>ROSE</span>
            <strong>CLUB</strong>
            <span>EST. 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}