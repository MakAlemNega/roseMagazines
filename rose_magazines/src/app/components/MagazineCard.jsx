import Image from "next/image";

export default function MagazineCard({ magazine }) {
  return (
    <article className="magazine-card">
      <div className="magazine-card-image">
        <Image
          src={magazine.image}
          alt={magazine.title}
          fill
          sizes="(max-width: 768px) 70vw, 25vw"
        />

        <div className="magazine-card-overlay">
          <span>View magazine</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>

      <div className="magazine-card-info">
        <div>
          <p className="magazine-card-category">{magazine.category}</p>

          <h3>{magazine.title}</h3>
        </div>

        <span className="magazine-card-number">0{magazine.id}</span>
      </div>

      <p className="magazine-card-description">{magazine.description}</p>
    </article>
  );
}
