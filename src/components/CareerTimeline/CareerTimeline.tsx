import "./CareerTimeline.css";

const timeline = [
  {
    period: "2012 – 2017",
    title: "Software Engineer → Senior Software Engineer",
    highlights: [
      "Enterprise Web Applications",
      ".NET Development",
      "REST API Development",
      "SQL Performance Optimization",
    ],
  },
  {
    period: "2017 – 2025",
    title: "Technology Lead → Technology Architect",
    highlights: [
      "Cloud Modernization",
      "Azure Architecture",
      "AI & OpenAI Solutions",
      "Technical Leadership",
    ],
  },
];

const CareerTimeline = () => {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <h2 className="section-title">Career Journey</h2>

        <p className="section-subtitle">
          Professional growth from software engineering to enterprise
          architecture, cloud transformation and technology leadership.
        </p>

        <div className="career-path">
          {timeline.map((item, index) => (
            <div key={item.period} className="career-card">
              <span className="career-period">{item.period}</span>

              <h3>{item.title}</h3>

              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {index < timeline.length - 1 && (
                <div className="career-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
