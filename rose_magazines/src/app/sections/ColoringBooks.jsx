import Link from "next/link";
import { coloringBooks } from "../data/coloringBooks";
import ColoringBookCard from "../components/ColoringBookCard";

export default function ColoringBooks() {
  return (
    <section className="coloring-books-section" id="coloring-books">
      <div className="container">
        <div className="coloring-books-header">
          <div>
            <p className="eyebrow">Coloring Books</p>

            <h2>
              Stories waiting
              <br />
              <em>for your colors.</em>
            </h2>
          </div>

          <div className="coloring-books-intro">
            <p>
              Explore beautifully designed coloring books made for creativity,
              quiet moments, and bringing every page to life.
            </p>

            <Link href="#contacts" className="text-link">
              Looking for something custom
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="coloring-books-grid">
          {coloringBooks.map((book) => (
            <ColoringBookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="coloring-books-footer">
          <span>05 coloring books</span>

          <Link href="#contacts" className="coloring-books-view-all">
            Explore all books
            <span aria-hidden="true">→</span>
          </Link>

          <span>Pick your favorite</span>
        </div>
      </div>
    </section>
  );
}
