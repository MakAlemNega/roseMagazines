import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand */}
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-main">Rose</span>
          <span className="navbar-logo-sub">Magazines</span>
        </Link>

        {/* Navigation */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <Link href="#collections">Magazines</Link>

          <Link href="#coloring-books">Coloring Books</Link>

          <Link href="#sudoku">Sudoku</Link>

          <Link href="#custom">Custom Magazines</Link>

          <Link href="#club">Magazine Club</Link>
        </nav>

        {/* CTA */}
        <Link href="#contacts" className="navbar-action">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
