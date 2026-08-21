import Link from "next/link";
import { coloringBooks } from "../data/coloringBooks";
import TemplateCard from "../components/TemplateCard";

export default function ColoringBooks() {
  return (
    <section className="templates-section" id="coloring-books">
      <div className="container">
        <div className="templates-header">
          <div>
            <p className="eyebrow">Coloring Books</p>

            <h2>
              Stories waiting
              <br />
              <em>for your colors.</em>
            </h2>
          </div>

          <div className="templates-intro">
            <p>
              Explore beautifully designed coloring books made for creativity,
              quiet moments, and bringing every page to life.
            </p>

            <Link href="#contact" className="text-link">
              Looking for something custom
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="templates-grid">
          {coloringBooks.map((book) => (
            <TemplateCard key={book.id} template={book} />
          ))}
        </div>

        <div className="templates-footer">
          <span>05 coloring books</span>

          <Link href="#contact" className="templates-view-all">
            Explore all books
            <span>→</span>
          </Link>

          <span>Pick your favorite</span>
        </div>
      </div>
    </section>
  );
}
