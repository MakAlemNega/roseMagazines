import Link from "next/link";
import Image from "next/image";

export default function SudokuBooks() {
  return (
    <section className="sudoku-section" id="sudoku">
      <div className="container sudoku-layout">
        <div className="sudoku-visual">
          <div className="sudoku-card-back">
            <span>ROSE</span>
            <span>PUZZLES</span>
          </div>

          <div className="sudoku-card">
            <div className="sudoku-card-image">
              <Image
                src="/images/sudoku/Sudoku_Book.avif"
                alt="Rose Magazines Sudoku book"
                fill
                sizes="(max-width: 900px) 70vw, 420px"
              />
            </div>

            <div className="sudoku-card-content">
              <span>ROSE PUZZLE COLLECTION</span>

              <h3>
                Sudoku
                <br />
                Book
              </h3>

              <p>A little challenge, wherever you go.</p>
            </div>
          </div>

          <div className="sudoku-stamp">
            <span>A6</span>
            <strong>350</strong>
            <span>BIRR</span>
          </div>
        </div>

        <div className="sudoku-copy">
          <div className="sudoku-heading-row">
            <p className="eyebrow">Sudoku Books</p>

            <span className="sudoku-label">Pocket Edition</span>
          </div>

          <h2>
            A little
            <br />
            <em>challenge.</em>
            <br />A lot of fun.
          </h2>

          <p className="sudoku-description">
            Pocket-sized Sudoku books designed for quiet moments, thoughtful
            challenges, and everyday entertainment. Choose your level and enjoy
            a collection of puzzles wherever you go.
          </p>

          <div className="sudoku-details">
            <div className="sudoku-detail">
              <span>01</span>
              <p>A6 pocket size</p>
            </div>

            <div className="sudoku-detail">
              <span>02</span>
              <p>32 Sudoku puzzles</p>
            </div>

            <div className="sudoku-detail">
              <span>03</span>
              <p>Easy · Medium · Hard</p>
            </div>

            <div className="sudoku-detail">
              <span>04</span>
              <p>Answers included</p>
            </div>
          </div>

          <div className="sudoku-price">
            <span>Price</span>
            <strong>350 Birr</strong>
          </div>

          <Link href="#contact" className="button sudoku-button">
            Get your Sudoku book
          </Link>
        </div>
      </div>
    </section>
  );
}
