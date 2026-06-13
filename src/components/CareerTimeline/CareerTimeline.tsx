import "./CareerTimeline.css";

const timeline = [
  {
    year: "2017-2025",
    title: "Technology Lead To transitioning to Technology Architect",
    description:
      "Managed cross-functional teams, architecture decisions, cloud modernization and delivery governance. Driving enterprise architecture, cloud transformation, AI adoption and technology strategy.",
  },
  {
    year: "2012-2017",
    title: "Software Engineer To Senior Software Engineer",
    description:
      "Started career building enterprise web applications using .NET technologies, SQL Server and frontend frameworks. Led development of scalable APIs, performance optimization initiatives and enterprise integrations.",
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
