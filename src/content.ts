// Edit platform copy here. Components render directly from these structures.
export const navItems = [
  { label: "Principles", href: "#principles" },
  { label: "Corps", href: "#corps" },
  { label: "Platform", href: "#platform" },
  { label: "Tax", href: "#tax" },
  { label: "Housing", href: "#housing" },
  { label: "Technology", href: "#technology" },
  { label: "Immigration", href: "#immigration" },
  { label: "Fiscal", href: "#fiscal" },
  { label: "Is / Is Not", href: "#is-not" },
  { label: "Act", href: "#act" },
];

export const principles = [
  {
    title: "Abundance",
    body: "More housing, energy, infrastructure, food production, and opportunity.",
  },
  {
    title: "Productivity",
    body: "Use technology, AI, automation, and better systems to make society wealthier and more capable.",
  },
  {
    title: "Reward Work",
    body: "Reduce the tax burden on labor, especially low and middle income earners, while keeping broad civic participation.",
  },
  {
    title: "Capital Circulation",
    body: "Large fortunes should remain legal, growable, and inheritable, but should periodically participate in markets and the tax system rather than defer indefinitely.",
  },
  {
    title: "Local Resilience",
    body: "Support walkable communities, local food, small businesses, ADUs, and multi-generational living.",
  },
  {
    title: "Practical Governance",
    body: "Favor systems that work: faster permitting, documented immigration, enforceable taxes, simpler administration, clear incentives, and public capacity to review, approve, and execute good projects quickly.",
  },
];

export const corpsCapabilities = [
  {
    title: "Housing Acceleration",
    body: "Review site plans, utilities, stormwater, traffic, sewer, and environmental impacts so compliant housing projects can move from years-long delays to predictable timelines.",
  },
  {
    title: "Infrastructure Support",
    body: "Help towns and cities plan water systems, sewer expansion, roads, bridges, broadband, grid upgrades, and public facilities.",
  },
  {
    title: "Environmental Review Capacity",
    body: "Maintain strong environmental standards while eliminating artificial delays caused by understaffed review offices.",
  },
  {
    title: "Standardized Designs",
    body: "Create reusable templates for common projects: small water treatment plants, road improvements, neighborhood sewer extensions, rural broadband, ADU plans, and missing-middle housing infrastructure.",
  },
  {
    title: "Rural & Small-Town Support",
    body: "Give small communities access to engineering and planning talent they could never afford to hire permanently.",
  },
  {
    title: "Deadline-Based Review",
    body: "If a project meets published standards and submits complete plans, review must be completed within a fixed timeline such as 60, 90, or 120 days.",
  },
];

export const oldModelPoints = [
  "Local offices understaffed",
  "Reviews take years",
  "Standards unclear",
  "Projects die in process",
  "Environmental protection becomes delay by default",
];

export const prosperityModelPoints = [
  "More engineers and reviewers",
  "Clear standards",
  "Faster approvals",
  "Environmental protection preserved",
  "Housing and infrastructure actually get built",
];

export const platformBlocks = [
  {
    title: "National Engineering & Infrastructure Corps",
    body: "Create a federally supported pool of approved contractors, engineers, planners, reviewers, inspectors, environmental specialists, and project managers who help local and state governments move good projects through clear technical standards.",
    points: ["Faster reviews", "More technical capacity", "Strong standards preserved"],
  },
  {
    title: "Housing Abundance",
    body: "Legalize more homes where standards are met, shorten approval timelines, finance infrastructure before growth hits a wall, and let communities add missing-middle housing without turning every project into a bespoke political fight.",
    points: ["By-right permitting", "Missing-middle homes", "Infrastructure-first growth"],
  },
  {
    title: "Farming and Local Food",
    body: "Treat food resilience as real infrastructure: regional processing, urban and peri-urban farms, greenhouse production, soil health, water efficiency, and procurement systems that help local producers reach local buyers.",
    points: ["Local supply chains", "Agriculture technology", "Regional processing capacity"],
  },
  {
    title: "Energy Abundance",
    body: "Build clean, reliable, affordable energy faster by streamlining transmission, generation, storage, advanced nuclear where viable, and industrial heat solutions that keep production domestic.",
    points: ["Faster siting", "Grid capacity", "Technology-neutral reliability"],
  },
  {
    title: "AI and Workforce Transition",
    body: "Make AI a productivity multiplier while helping workers move into better roles through portable training accounts, apprenticeships, credentialing reform, and public-sector systems that actually use modern tools.",
    points: ["Worker retraining", "AI-enabled services", "Better government systems"],
  },
  {
    title: "Immigration That Works",
    body: "Document everyone, expand legal pathways tied to work authorization, require employer verification, fund faster courts and processing, and pair workable rules with serious enforcement.",
    points: ["Work authorization path", "Employer verification", "Funded administration"],
  },
  {
    title: "Fiscal Responsibility",
    body: "Improve debt sustainability through capital-circulation revenue, estate loophole closure, strategic tariff revenue, gradual carbon pricing, and administrative reforms while offsetting part of the revenue with labor tax cuts.",
    points: ["Debt sustainability", "Labor tax relief", "Revenue that follows accumulated capital"],
  },
  {
    title: "Estate Loophole Closure",
    body: "Close major deferral and basis loopholes that allow large fortunes to move across generations without meaningful realization, while keeping family businesses and farms administrable through clear rules and transition periods.",
    points: ["No indefinite step-up escape", "Clear transition rules", "Administrable exemptions"],
  },
  {
    title: "Strategic Tariffs and Carbon Pricing",
    body: "Use narrow tariffs and border adjustments to protect critical supply chains and account for pollution costs without turning trade policy into blanket protectionism.",
    points: ["Strategic supply chains", "Gradual carbon tax", "Border adjustment logic"],
  },
];

export const forcedRealizationRows = [
  ["<$10M", "0%"],
  ["$10M-$50M", "1.0%"],
  ["$50M-$100M", "1.5%"],
  ["$100M-$1B", "2.0%"],
  ["$1B-$10B", "2.5%"],
  ["$10B+", "3.0%"],
];

export const capitalGainsRows = [
  ["First $10M", "20%"],
  ["$10M-$100M", "40%"],
  ["$100M-$1B", "50%"],
  ["Above $1B", "60%"],
];

export const laborTaxRows = [
  ["<$100k", "Large tax cut"],
  ["$100k-$200k", "Moderate tax cut"],
  ["$200k-$500k", "Small tax cut"],
  ["$500k+", "Little change"],
];

export const comparisonRows = [
  ["Engineer $150k", "Reduced substantially", "$0", "Lower than today"],
  ["Lawyer $400k", "Modestly reduced", "$0", "Lower than today"],
  ["Doctor $750k", "Slightly reduced", "$0", "Similar/lower than today"],
  ["$25M wealth holder", "Existing taxes continue", "Added realization tax", "Higher total"],
  ["$100M wealth holder", "Existing taxes continue", "Added realization tax", "Much higher total"],
  ["$1B+ wealth holder", "Existing taxes continue", "Added realization tax", "Materially higher total"],
];

export const housingPoints = [
  "By-right permitting when standards are met",
  "Missing-middle housing",
  "ADUs",
  "Walkable neighborhoods",
  "Local businesses",
  "Parks and public spaces",
  "Infrastructure-first development",
  "Local farms and food systems",
];

export const technologyPoints = [
  "AI as productivity multiplier",
  "Worker retraining",
  "Technology prizes",
  "Agriculture technology",
  "Housing construction technology",
  "Defense modernization as optional efficiency, not core ideology",
  "Better government systems",
];

export const immigrationPoints = [
  "Everyone documented",
  "Work authorization path",
  "Employer verification",
  "Immigration surcharge to fund courts, processing, enforcement, and administration",
  "Legal pathways paired with serious enforcement",
];

export const fiscalPoints = [
  "Wealth/capital circulation revenue",
  "Estate loophole closure",
  "Strategic tariff revenue",
  "Gradual carbon tax revenue",
  "Immigration surcharge funding immigration administration",
  "Labor tax cuts offset part of this",
  "Optional compromise items like defense efficiency or Social Security age reform are not core pillars",
];

export const isList = [
  "Pro-growth",
  "Pro-housing",
  "Pro-work",
  "Pro-technology",
  "Pro-capital circulation",
  "Pro-community",
  "Fiscally serious",
  "Non-partisan",
];

export const isNotList = [
  "A traditional wealth tax",
  "A punishment for building businesses",
  "A no-growth redistribution plan",
  "A pure austerity platform",
  "A left/right culture-war platform",
  "A third-party campaign site",
];
