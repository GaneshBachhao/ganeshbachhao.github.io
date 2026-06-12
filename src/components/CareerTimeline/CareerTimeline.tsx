import "./CareerTimeline.css";

const timeline = [
  {
    year: "2014",
    title: "Software Engineer",
    description:
      "Started career building enterprise web applications using .NET technologies, SQL Server and frontend frameworks.",
  },

  {
    year: "2018",
    title: "Senior Software Engineer",
    description:
      "Led development of scalable APIs, performance optimization initiatives and enterprise integrations.",
  },

  {
    year: "2022",
    title: "Technology Lead",
    description:
      "Managed cross-functional teams, architecture decisions, cloud modernization and delivery governance.",
  },

  {
    year: "2026+",
    title: "Solution Architect (Target)",
    description:
      "Driving enterprise architecture, cloud transformation, AI adoption and technology strategy.",
  },
];

const CareerTimeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Career Journey</h2>

        <p className="section-subtitle">
          Evolution from software engineer to technology leadership and solution
          architecture.
        </p>

        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
