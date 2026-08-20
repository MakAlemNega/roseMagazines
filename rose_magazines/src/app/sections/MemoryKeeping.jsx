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
            Beautifully designed magazines created to turn ordinary moments into
            something you'll want to revisit for years to come.
          </p>
        </div>

        <div className="magazine-grid">
          {magazines.map((magazine) => (
            <MagazineCard key={magazine.id} magazine={magazine} />
          ))}
        </div>

        <div className="memory-section-footer">
          <p>A little piece of your story, printed on paper.</p>

          <a href="#custom" className="text-link">
            Create something personal
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
