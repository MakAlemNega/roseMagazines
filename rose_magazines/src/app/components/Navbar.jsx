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
          <Link href="#collections">Collections</Link>
          <Link href="#custom">Custom Magazines</Link>
          <Link href="#club">Magazine Club</Link>
          <Link href="#about">About</Link>
        </nav>

        {/* CTA */}
        <Link href="#contact" className="navbar-action">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
