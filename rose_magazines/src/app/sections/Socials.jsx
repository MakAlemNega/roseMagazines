import Link from "next/link";

const socialItems = [
  {
    platform: "Instagram",
    handle: "@rose.magazines",
    text: "Behind the pages",
    className: "social-card-one",
  },
  {
    platform: "Pinterest",
    handle: "Rose Magazines",
    text: "Stories worth saving",
    className: "social-card-two",
  },
  {
    platform: "TikTok",
    handle: "@rose.magazines",
    text: "Making the memories",
    className: "social-card-three",
  },
];

export default function Socials() {
  return (
    <section className="social-section">
      <div className="container">
        <div className="social-heading">
          <div>
            <p className="eyebrow">Follow the story</p>

            <h2>
              Find Rose
              <br />
              <em>in the wild.</em>
            </h2>
          </div>

          <p>
            Behind the pages, inside the studio, and everywhere memories are
            being made.
          </p>
        </div>

        <div className="social-grid">
          {socialItems.map((item) => (
            <Link
              href="#"
              className={`social-card ${item.className}`}
              key={item.platform}
            >
              <div className="social-card-top">
                <span>{item.platform}</span>
                <span>↗</span>
              </div>

              <div className="social-card-center">
                <span>{item.text}</span>
              </div>

              <div className="social-card-bottom">{item.handle}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
