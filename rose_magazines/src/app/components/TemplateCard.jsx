import Image from "next/image";

export default function TemplateCard({ template }) {
  return (
    <article className="template-card">
      <div className="template-image">
        <Image
          src={template.image}
          alt={template.title}
          fill
          sizes="(max-width: 700px) 72vw, 20vw"
        />

        <div className="template-overlay">
          <span>Use this template</span>
        </div>

        <span className="template-issue">{template.issue}</span>
      </div>

      <div className="template-info">
        <div>
          <p>{template.category}</p>
          <h3>{template.title}</h3>
        </div>

        <span className="template-arrow">↗</span>
      </div>
    </article>
  );
}
