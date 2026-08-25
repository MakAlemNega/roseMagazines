import Image from "next/image";

export default function ColoringBookCard({ book }) {
  return (
    <article className="coloring-book-card">
      <div className="coloring-book-image">
        <Image
          src={book.image}
          alt={`${book.title} coloring book`}
          fill
          sizes="(max-width: 650px) 70vw, (max-width: 1000px) 30vw, 20vw"
        />

        <div className="coloring-book-overlay">
          {/* <span>Explore this book</span>
          <span aria-hidden="true">↗</span> */}
        </div>

        <span className="coloring-book-issue">{book.issue}</span>
      </div>

      <div className="coloring-book-info">
        <div>
          <p>{book.category}</p>
          <h3>{book.title}</h3>
        </div>

        <span className="coloring-book-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </article>
  );
}
