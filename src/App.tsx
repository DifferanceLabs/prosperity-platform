import {
  capitalGainsRows,
  comparisonRows,
  corpsCapabilities,
  fiscalPoints,
  forcedRealizationRows,
  housingPoints,
  immigrationPoints,
  isList,
  isNotList,
  laborTaxRows,
  navItems,
  oldModelPoints,
  platformBlocks,
  principles,
  prosperityModelPoints,
  technologyPoints,
} from "./content";

const Table = ({
  headers,
  rows,
  variant = "default",
}: {
  headers: string[];
  rows: string[][];
  variant?: "default" | "comparison";
}) => (
  <div className={`table-wrap ${variant === "comparison" ? "table-wrap-large" : ""}`}>
    <table className={`policy-table ${variant === "comparison" ? "comparison-table" : ""}`}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")}>
            {row.map((cell, index) => (
              <td key={`${cell}-${index}`} data-label={headers[index]}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionHeader = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="section-header">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {children && <p className="section-intro">{children}</p>}
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <ul className="check-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

function App() {
  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Prosperity Platform navigation">
        <a className="brand" href="#hero" aria-label="Prosperity Platform home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Prosperity Platform</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">A practical governing framework</p>
            <h1>Prosperity Platform</h1>
            <p className="hero-subtitle">
              Build more. Reward work. Circulate capital. Strengthen communities.
            </p>
            <p className="hero-intro">
              Prosperity Platform is a practical framework for a country that needs more
              homes, more productive investment, better use of technology, stronger communities,
              and a tax system that rewards work while preventing extreme capital stagnation.
            </p>
            <div className="hero-actions" aria-label="Primary links">
              <a className="button button-primary" href="#platform">
                Explore the Platform
              </a>
              <a className="button button-secondary" href="#tax">
                See the Tax Framework
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Civic abundance illustration">
            <img
              src="/assets/prosperity-civic-hero.png"
              alt="A walkable mixed-use community with homes, transit, local food production, solar energy, and public spaces."
            />
          </div>
        </section>

        <section className="principles section-band" id="principles">
          <SectionHeader
            eyebrow="Core principles"
            title="A platform for abundance, productivity, and shared prosperity."
          >
            The framework starts with practical incentives: build capacity, reward contribution,
            circulate capital, and strengthen the places people actually live.
          </SectionHeader>
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <article className="principle-card" key={principle.title}>
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="corps section-band" id="corps">
          <div className="corps-blueprint" aria-hidden="true">
            <span className="blueprint-node node-one" />
            <span className="blueprint-node node-two" />
            <span className="blueprint-node node-three" />
          </div>
          <div className="corps-layout">
            <div className="corps-lede">
              <p className="eyebrow">National Engineering & Infrastructure Corps</p>
              <h2>Faster reviews, not weaker reviews.</h2>
              <p className="corps-tagline">
                This is not deregulation. It is capacity-building.
              </p>
              <p>
                The United States does not only have a permitting problem. It has a technical
                capacity problem. Local governments, agencies, utilities, and developers often
                wait months or years because there are not enough engineers, reviewers, planners,
                inspectors, environmental specialists, and project managers available to move good
                projects forward.
              </p>
              <p>
                The National Engineering & Infrastructure Corps would create a federal pool of
                approved contractors and technical experts who can help local and state governments
                rapidly review, design, validate, and approve projects that meet clear standards.
              </p>
            </div>

            <aside className="corps-spec-panel">
              <span className="spec-label">Technical capacity</span>
              <strong>Federal pool, local execution</strong>
              <p>
                Approved contractor teams support state and local agencies on housing, utilities,
                energy, farming, environmental review, and infrastructure delivery.
              </p>
              <div className="spec-meter" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </aside>
          </div>

          <div className="corps-card-grid">
            {corpsCapabilities.map((capability, index) => (
              <article className="corps-card" key={capability.title}>
                <span className="schematic-icon" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>

          <div className="model-compare">
            <article className="model-panel old-model">
              <h3>Old model</h3>
              <Checklist items={oldModelPoints} />
            </article>
            <article className="model-panel prosperity-model">
              <h3>Prosperity model</h3>
              <Checklist items={prosperityModelPoints} />
            </article>
          </div>

          <blockquote className="corps-quote">
            Prosperity Platform does not ask America to choose between building fast and building
            responsibly. It says we should build the technical capacity to do both.
          </blockquote>
        </section>

        <section className="platform section-band muted" id="platform">
          <SectionHeader eyebrow="The platform" title="Practical reforms that reinforce each other.">
            These planks are designed as a governing framework, not a slogan list. Each one
            connects capacity, incentives, administration, and long-term resilience.
          </SectionHeader>
          <div className="accordion-grid">
            {platformBlocks.map((block, index) => (
              <details className="platform-card" key={block.title} open={index < 2}>
                <summary>
                  <span>{block.title}</span>
                  <span className="summary-icon" aria-hidden="true">+</span>
                </summary>
                <p>{block.body}</p>
                <div className="mini-tags" aria-label={`${block.title} priorities`}>
                  {block.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="tax section-band" id="tax">
          <SectionHeader eyebrow="Tax and capital circulation" title="Shift pressure off labor and reduce indefinite deferral.">
            This is not a traditional wealth tax and does not tax unrealized gains directly.
            It requires very large fortunes to realize a small percentage annually, then taxes
            those realized gains progressively.
          </SectionHeader>

          <div className="callout">
            <strong>The point is not to punish wealth creation.</strong>
            <span>
              The point is to reduce indefinite deferral, encourage capital velocity, and shift
              more of the tax burden away from labor and toward large accumulated capital.
            </span>
          </div>

          <div className="tax-grid">
            <article className="table-card">
              <h3>Forced realization</h3>
              <Table headers={["Wealth band", "Annual realization"]} rows={forcedRealizationRows} />
            </article>
            <article className="table-card">
              <h3>Capital gains by wealth band</h3>
              <Table headers={["Band", "Rate"]} rows={capitalGainsRows} />
            </article>
            <article className="table-card">
              <h3>Labor tax direction</h3>
              <Table headers={["Income", "Direction"]} rows={laborTaxRows} />
            </article>
          </div>

          <article className="comparison-block">
            <div>
              <p className="eyebrow">Illustrative comparison</p>
              <h3>Who pays less, who pays more</h3>
            </div>
            <Table
              headers={["Group", "Existing taxes", "New forced-realization tax", "Total"]}
              rows={comparisonRows}
              variant="comparison"
            />
          </article>
        </section>

        <section className="split-section section-band muted" id="housing">
          <div>
            <p className="eyebrow">Housing and community</p>
            <h2>Make productive, resilient communities easier to build.</h2>
            <p>
              Housing policy should unlock homes where infrastructure and standards can support
              them, while preserving the local fabric people value: small businesses, public
              spaces, local food systems, and multi-generational options.
            </p>
          </div>
          <Checklist items={housingPoints} />
        </section>

        <section className="split-section section-band" id="technology">
          <div>
            <p className="eyebrow">Technology and productivity</p>
            <h2>Use technology to make society more capable.</h2>
            <p>
              Prosperity Platform treats AI, automation, construction technology, agriculture
              technology, and better public systems as productivity infrastructure. The task is
              to help people adapt while building institutions that can actually absorb useful tools.
            </p>
          </div>
          <Checklist items={technologyPoints} />
        </section>

        <section className="split-section section-band muted" id="immigration">
          <div>
            <p className="eyebrow">Immigration and governance</p>
            <h2>Legal pathways paired with serious administration.</h2>
            <p>
              A workable immigration system must know who is here, let lawful work happen through
              documented channels, verify employers, and fund the courts, processing, enforcement,
              and administration required to make the rules real.
            </p>
          </div>
          <Checklist items={immigrationPoints} />
        </section>

        <section className="fiscal section-band" id="fiscal">
          <SectionHeader eyebrow="Fiscal responsibility" title="Debt sustainability without making austerity the identity.">
            Prosperity Platform is designed to improve debt sustainability, but it is not primarily
            an austerity platform. It pairs new revenue from accumulated capital and externalities
            with tax relief for work and a stronger growth base.
          </SectionHeader>
          <div className="fiscal-layout">
            <Checklist items={fiscalPoints} />
            <aside className="note-card">
              <p className="eyebrow">Core posture</p>
              <h3>Serious about arithmetic, serious about growth.</h3>
              <p>
                The platform assumes fiscal stability depends on productivity, housing supply,
                broad labor participation, administrable taxes, and capital that keeps moving
                through the economy.
              </p>
            </aside>
          </div>
        </section>

        <section className="is-not section-band muted" id="is-not">
          <SectionHeader eyebrow="What this is / is not" title="Clear enough to debate honestly." />
          <div className="contrast-grid">
            <article className="contrast-card positive">
              <h3>This is</h3>
              <Checklist items={isList} />
            </article>
            <article className="contrast-card negative">
              <h3>This is not</h3>
              <Checklist items={isNotList} />
            </article>
          </div>
        </section>

        <section className="cta section-band" id="act">
          <div className="cta-inner">
            <p className="eyebrow">Call to action</p>
            <h2>Prosperity Platform is a starting point, not a finished doctrine.</h2>
            <p>
              The goal is to build a serious framework that can be modeled, debated, improved,
              and adapted.
            </p>
            <a className="button button-primary" href="#principles">
              Review the principles
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>Prosperity Platform</strong>
        <span>Abundance. Productivity. Circulation. Resilience.</span>
      </footer>
    </div>
  );
}

export default App;
