import Link from "next/link";
import Image from "next/image";

export default function MagazineClub() {
  return (
    <section className="club-section" id="club">
      <div className="container club-layout">
        <div className="club-copy">
          <div className="club-heading-row">
            <p className="eyebrow">The Rose Magazine Club</p>

            <span className="club-member-number">Coming Soon</span>
          </div>

          <h2>
            More stories.
            <br />
            <em>More memories.</em>
            <br />
            More to keep.
          </h2>

          <p className="club-description">
            We're creating something special for people who believe the moments
            worth remembering deserve a place of their own. The Rose Magazine
            Club is coming soon.
          </p>

          <div className="club-benefits">
            <div className="club-benefit">
              <span>01</span>
              <p>Exclusive magazine collections</p>
            </div>

            <div className="club-benefit">
              <span>02</span>
              <p>Special designs and editions</p>
            </div>

            <div className="club-benefit">
              <span>03</span>
              <p>More ways to preserve your stories</p>
            </div>
          </div>

          <Link href="#contacts" className="button club-button">
            Stay Tuned
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
                src="/images/memoryKeeping/Birthday_Mag02.avif"
                alt="Preview of a future Rose Magazine Club edition"
                fill
                sizes="(max-width: 800px) 70vw, 420px"
              />
            </div>

            <div className="club-card-content">
              <span>THE ROSE CLUB</span>

              <h3>
                Coming
                <br />
                Soon
              </h3>

              <p>Something special is on the way.</p>
            </div>
          </div>

          <div className="club-stamp">
            <span>ROSE</span>
            <strong>CLUB</strong>
            <span>COMING SOON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
