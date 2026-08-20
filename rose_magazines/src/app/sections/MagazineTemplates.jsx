import Link from "next/link";
import { templates } from "../data/templates";
import TemplateCard from "../components/TemplateCard";

export default function MagazineTemplates() {
  return (
    <section className="templates-section" id="templates">
      <div className="container">
        <div className="templates-header">
          <div>
            <p className="eyebrow">Magazine Templates</p>

            <h2>
              A story for
              <br />
              <em>every moment.</em>
            </h2>
          </div>

          <div className="templates-intro">
            <p>
              Start with one of our thoughtfully designed templates, then make
              it completely yours.
            </p>

            <Link href="#contact" className="text-link">
              Need something custom
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="templates-grid">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        <div className="templates-footer">
          <span>05 templates</span>

          <Link href="#contact" className="templates-view-all">
            View all templates
            <span>→</span>
          </Link>

          <span>Choose your story</span>
        </div>
      </div>
    </section>
  );
}
