const testimonials = [
  {
    quote:
      "Rose turned a collection of little moments into something we can actually hold onto. It feels incredibly personal.",
    name: "Sarah M.",
    type: "Custom Magazine",
  },
  {
    quote:
      "The whole process was so thoughtful. I gave them the memories and somehow they turned them into a story that felt completely like us.",
    name: "Daniel K.",
    type: "Wedding Issue",
  },
  {
    quote:
      "It is rare to receive something today that feels made to be kept. The magazine exceeded everything I imagined.",
    name: "Maya T.",
    type: "Memory Collection",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-top">
          <p className="eyebrow">Words worth keeping</p>

          <span className="testimonials-count">03 / 03</span>
        </div>

        <div className="testimonial-feature">
          <span className="quote-mark">“</span>

          <blockquote>
            Words cannot express how amazing this magazine is—I could write a
            whole book! You are truly gifted and brought my dream to life.
            <em>We will cherish this forever.</em>
          </blockquote>

          <div className="testimonial-author">
            <span>Bitaniya.</span>
            <span>Custom Magazine</span>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name}>
              <span className="testimonial-number">0{index + 1}</span>

              <p className="testimonial-quote">"{testimonial.quote}"</p>

              <div className="testimonial-meta">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
