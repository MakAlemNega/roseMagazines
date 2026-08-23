import { magazines } from "../data/magazines";
import MagazineCard from "../components/MagazineCard";

export default function MemoryKeeping() {
  return (
    <section className="memory-section" id="collections">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Memory Keeping</p>

            <h2 className="section-title">
              Made to be
              <br />
              <em>kept.</em>
            </h2>
          </div>

          <p className="section-description">
            Thoughtfully designed magazines that turn birthdays, friendships,
            journeys, and life's most meaningful moments into keepsakes worth
            returning to.
          </p>
        </div>

        <div className="magazine-grid" aria-label="Magazine collections">
          {magazines.map((magazine) => (
            <MagazineCard key={magazine.id} magazine={magazine} />
          ))}
        </div>

        <div className="memory-section-footer">
          <p>
            Your memories deserve more than a moment. Give them a place to stay.
          </p>

          <a href="#custom" className="text-link">
            Create something personal
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
