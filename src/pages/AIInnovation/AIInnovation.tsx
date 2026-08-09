import "./AIInnovation.css";

const AIInnovation = () => {
  return (
    <section id="ai-innovation" className="section ai-section">
      <div className="container">
        <h2 className="section-title">AI & Innovation</h2>

        <p className="section-subtitle">
          Exploring practical applications of Generative AI, enterprise search,
          intelligent automation and knowledge discovery using Microsoft Azure.
        </p>

        <div className="ai-grid">
          {/* CASE STUDY 1 */}

          <div className="ai-card">
            <span className="ai-badge">Enterprise Knowledge Assistant</span>

            <h3>AI-Powered Document Discovery Platform</h3>

            <div className="ai-section-block">
              <h4>Business Challenge</h4>

              <p>
                Business users spent significant time searching across thousands
                of documents, policies, procedures and operational knowledge
                repositories.
              </p>
            </div>

            <div className="ai-section-block">
              <h4>Solution</h4>

              <p>
                Designed a Retrieval-Augmented Generation (RAG) solution
                combining Azure OpenAI, Azure AI Search and semantic retrieval
                to provide grounded responses from enterprise-approved content.
              </p>
            </div>

            <div className="ai-section-block">
              <h4>Business Outcome</h4>

              <p>
                Improved knowledge accessibility, reduced manual search effort
                and accelerated information discovery across business teams.
              </p>
            </div>

            <div className="ai-tags">
              <span>Azure OpenAI</span>
              <span>RAG</span>
              <span>AI Search</span>
              <span>Semantic Retrieval</span>
            </div>
          </div>

          {/* CASE STUDY 2 */}

          <div className="ai-card">
            <span className="ai-badge">Operational Intelligence</span>

            <h3>AI-Powered Incident Resolution Assistant</h3>

            <div className="ai-section-block">
              <h4>Business Challenge</h4>

              <p>
                Support and operations teams spent considerable time
                investigating production incidents by manually reviewing logs,
                monitoring alerts, historical tickets and system documentation
                before identifying the root cause.
              </p>
            </div>

            <div className="ai-section-block">
              <h4>Solution</h4>

              <p>
                Designed an AI assistant capable of analyzing incident details,
                retrieving similar historical cases, correlating operational
                data and suggesting likely root causes along with recommended
                resolution actions.
              </p>
            </div>

            <div className="ai-section-block">
              <h4>Business Outcome</h4>

              <p>
                Improved knowledge reuse across support teams, reduced
                investigation effort and accelerated incident triage for
                business-critical applications.
              </p>
            </div>

            <div className="ai-tags">
              <span>Azure OpenAI</span>
              <span>Application Insights</span>
              <span>Knowledge Base Search</span>
              <span>Operational Intelligence</span>
              <span>Prompt Engineering</span>
            </div>
          </div>

          {/* CASE STUDY 3 */}

          <div className="ai-card">
            <span className="ai-badge">Agent-Based Automation</span>

            <h3>Agent-Based Process Automation</h3>

            <div className="ai-section-block">
              <h4>Business Challenge</h4>

              <p>
                Repetitive operational activities required manual interaction
                across multiple systems, resulting in inefficiencies and
                increased turnaround times.
              </p>
            </div>

            <div className="ai-section-block">
              <h4>Solution</h4>

              <p>
                Evaluated AI agents, tool-calling patterns and workflow
                automation approaches capable of orchestrating tasks across
                enterprise applications.
              </p>
            </div>

            <div className="ai-section-block">
              <h4>Business Outcome</h4>

              <p>
                Demonstrated opportunities for intelligent automation, reduced
                operational overhead and improved process efficiency.
              </p>
            </div>

            <div className="ai-tags">
              <span>AI Agents</span>
              <span>Tool Calling</span>
              <span>Workflow Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovation;
