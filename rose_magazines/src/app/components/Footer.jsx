import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              Rose
              <span>Magazines</span>
            </Link>

            <p>
              Beautifully crafted magazines and keepsakes
              made for the moments you never want to forget.
            </p>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Explore</p>

            <Link href="#templates">
              Collections
            </Link>

            <Link href="#custom">
              Custom Magazines
            </Link>

            <Link href="#club">
              Magazine Club
            </Link>

            <Link href="#about">
              About Rose
            </Link>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Connect</p>

            <Link href="#instagram">
              Instagram
            </Link>

            <Link href="#pinterest">
              Pinterest
            </Link>

            <Link href="#tiktok">
              TikTok
            </Link>

            <Link href="#contact">
              Contact
            </Link>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Start a story</p>

            <Link href="#contact" className="footer-contact-link">
              Get in touch
              <span>↗</span>
            </Link>

            <p className="footer-small">
              Have an idea for a magazine?
              We'd love to hear it.
            </p>
          </div>

        </div>

        <div className="footer-rule" />

        <div className="footer-bottom">

          <span>
            © 2026 Rose Magazines
          </span>

          <span>
            Made with intention.
          </span>

          <div>
            <Link href="#privacy">
              Privacy
            </Link>

            <Link href="#terms">
              Terms
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}