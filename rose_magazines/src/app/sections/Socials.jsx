const socialItems = [
  {
    platform: "Instagram",
    handle: "@rosemagazines2590",
    text: "Behind the pages",
    url: "https://www.instagram.com/rosemagazines2590?igsi=a2lxcWw5cmRmdGVv",
    className: "social-card-one",
  },
  {
    platform: "Telegram",
    handle: "Rose Magazines",
    text: "Stories worth saving",
    url: "https://t.me/Rose_2590",
    className: "social-card-two",
  },
  {
    platform: "TikTok",
    handle: "@rose_magazines",
    text: "Making the memories",
    url: "https://www.tiktok.com/@rose_magazines?_r=1&_t=ZS-997d0qqSwFh",
    className: "social-card-three",
  },
];

export default function Socials() {
  return (
    <section className="social-section" id="contacts">
      <div className="container">
        <div className="social-heading">
          <div>
            <p className="eyebrow">Follow the story</p>
            <h2>
              {" "}
              Find Rose <br /> <em>in the wild.</em>{" "}
            </h2>
          </div>
          <p>
            {" "}
            Behind the pages, inside the studio, and everywhere memories are
            being made.{" "}
          </p>
        </div>
        <div className="social-grid">
          {socialItems.map((item) => (
            /* Evaluates item.url properly as a variable reference */
            <a
              href={item.url}
              className={`social-card ${item.className}`}
              key={item.platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-card-top">
                <span>{item.platform}</span>
                <span>↗</span>
              </div>
              <div className="social-card-center">
                <span>{item.text}</span>
              </div>
              <div className="social-card-bottom">{item.handle}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
