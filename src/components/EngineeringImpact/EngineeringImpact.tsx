import "./EngineeringImpact.css";

const impacts = [
  {
    value: "12+",
    title: "Years of Enterprise Engineering",
    description:
      "Designing and delivering enterprise applications across e-commerce, manufacturing and healthcare environments.",
  },
  {
    value: "1M+ / Day",
    title: "Records Processed",
    description:
      "Supported high-volume data workflows with asynchronous processing, validation, recovery and monitoring.",
  },
  {
    value: "60%",
    title: "Deployment-Time Reduction",
    description:
      "Reduced deployment overhead through Azure DevOps CI/CD automation and improved release practices.",
  },
  {
    value: "30%",
    title: "API Response-Time Improvement",
    description:
      "Improved API response times through SQL Server optimisation and targeted performance engineering.",
  },
];

const EngineeringImpact = () => {
  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <div className="impact-heading">
          <span className="eyebrow">ENGINEERING IMPACT</span>
          <h2 className="section-title">Evidence from hands-on engineering work.</h2>
          <p className="section-subtitle">
            A small set of measurable outcomes that show how engineering decisions,
            automation and performance work translated into practical improvements.
          </p>
        </div>

        <div className="impact-grid">
          {impacts.map((impact) => (
            <article className="impact-card" key={impact.title}>
              <strong>{impact.value}</strong>
              <h3>{impact.title}</h3>
              <p>{impact.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringImpact;
