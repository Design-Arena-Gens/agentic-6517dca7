export default function Home() {
  const heroStats = [
    {
      label: "Launch timeline",
      value: "90 days",
      detail: "Phase-gated build with supplier onboarding in week 6",
    },
    {
      label: "Target gross margin",
      value: "48-55%",
      detail: "Blend of private label SKUs and curated marketplace items",
    },
    {
      label: "Capital requirement",
      value: "₹25-30L",
      detail: "Inventory, marketing launch pad, and working capital buffer",
    },
  ];

  const nicheIdeas = [
    {
      name: "Ayurvedic Wellness Ritual Kits",
      summary:
        "Subscription-ready bundles combining trusted Ayurvedic formulations with contemporary accessories for Gen Z and Millennial wellness seekers.",
      whyIndia:
        "Domestic Ayurvedic market growing >15% CAGR; post-COVID focus on immunity and preventive health; low competition in curated ritual bundles.",
      differentiation: [
        "Partner with certified Ayurvedic practitioners for credible formulations.",
        "Offer tiered ritual kits (Detox, Immunity, Sleep) with QR-linked guided routines.",
        "Leverage Make in India incentives and D2C influencer collaborations.",
      ],
      unitEconomics: {
        asp: "₹2,750",
        cogs: "₹1,400",
        contributionMargin: "49%",
        reorderRate: "38% within 60 days",
      },
    },
    {
      name: "Sustainable Home Office Essentials",
      summary:
        "Eco-friendly ergonomic furniture, accessories, and productivity kits tailored for hybrid professionals in Tier 1 & 2 cities.",
      whyIndia:
        "Hybrid work adoption, rising ergonomic health awareness, and demand for premium eco-conscious products; import-heavy segment ripe for domestic brands.",
      differentiation: [
        "Modular desks and accessories manufactured with FSC-certified bamboo and recycled plastics.",
        "Design lab co-creates SKUs with physiotherapists to reduce WFH fatigue.",
        "Membership model with quarterly workspace refresh add-ons.",
      ],
      unitEconomics: {
        asp: "₹9,800",
        cogs: "₹5,200",
        contributionMargin: "47%",
        reorderRate: "24% via accessory add-ons",
      },
    },
    {
      name: "Specialty Regional Snack Boxes",
      summary:
        "Curated boxes that spotlight micro-entrepreneurs supplying preservative-free snacks from specific Indian regions, delivered nation-wide.",
      whyIndia:
        "Rising nostalgia commerce and gifting market; urban professionals want authentic regional flavours; government incentives for ODOP (One District One Product).",
      differentiation: [
        "Exclusive supply contracts with FSSAI-compliant artisan kitchens.",
        "Limited-edition storytelling content and AR-enabled origin experiences.",
        "Corporate gifting program with white-label branding options.",
      ],
      unitEconomics: {
        asp: "₹1,650",
        cogs: "₹820",
        contributionMargin: "50%",
        reorderRate: "42% driven by subscription cadence",
      },
    },
  ];

  const growthPlan = [
    {
      phase: "Phase 0 · Discovery (Weeks 1-2)",
      objectives: [
        "Validate demand via landing page tests (₹25k ad spend across Meta & Google).",
        "Supplier shortlisting with compliance checks (FSSAI/GST/MSME).",
        "Define customer personas, willingness-to-pay, and target KPIs.",
      ],
    },
    {
      phase: "Phase 1 · Build (Weeks 3-6)",
      objectives: [
        "Finalize brand identity, value proposition, and packaging system.",
        "Sign supplier MOUs with QC/QA SLAs and minimum order terms.",
        "Launch Shopify/Next.js storefront with Razorpay & Shiprocket integrations.",
        "Implement CRM stack (HubSpot starter) and analytics (GA4 + PostHog).",
      ],
    },
    {
      phase: "Phase 2 · Launch (Weeks 7-10)",
      objectives: [
        "Kick off influencer and creator seeding (micro + nano, 6% conversion target).",
        "Deploy performance marketing funnels with ₹4 L launch budget split 60/30/10 across Meta/Google/Affiliate.",
        "Run pre-order campaign with limited founder circle discounts (target 500 pre-orders).",
      ],
    },
    {
      phase: "Phase 3 · Scale (Months 4-12)",
      objectives: [
        "Introduce subscription and loyalty layers (₹999 annual membership).",
        "Expand into Amazon/Flipkart marketplaces while protecting pricing parity.",
        "Optimize retention via RFM segmentation, WhatsApp journeys, and referral loops.",
      ],
    },
  ];

  const operatingBlueprint = [
    {
      title: "Supply & Fulfilment",
      bullets: [
        "Use multi-supplier strategy with 70% private label, 30% curated sellers to balance margin and assortment.",
        "Centralize inventory in NCR 3PL (e.g., Delhivery, Shiprocket Fulfilment) for 2-day nationwide delivery.",
        "Implement QA checkpoints: inbound QC, random batch lab testing, and customer feedback loops.",
      ],
    },
    {
      title: "Technology Stack",
      bullets: [
        "Headless storefront on Next.js + Shopify Hydrogen/Storefront API for speed and SEO.",
        "Razorpay for payments, Cashfree Payouts for vendor settlements, and Simpl/Lazypay for BNPL.",
        "ERP-lite with EasyEcom or Unicommerce for omnichannel inventory sync and GST invoicing.",
      ],
    },
    {
      title: "Customer Experience",
      bullets: [
        "4-channel support: WhatsApp, email, IVR, and self-service knowledge base with 2-hour SLA.",
        "Proactive post-purchase journeys: unboxing tutorials, usage nudges, and review automation.",
        "NPS tracking with thematic analysis to feed product development roadmap.",
      ],
    },
  ];

  const financials = [
    {
      metric: "Month 1",
      revenue: "₹22L",
      orders: "1,150",
      cac: "₹420",
      marketing: "₹4.8L",
      notes: "Launch spike driven by pre-orders and influencer partnerships.",
    },
    {
      metric: "Month 3",
      revenue: "₹38L",
      orders: "1,980",
      cac: "₹380",
      marketing: "₹5.2L",
      notes: "Repeat customers reach 28%; operations stabilize to <2% returns.",
    },
    {
      metric: "Month 6",
      revenue: "₹58L",
      orders: "2,850",
      cac: "₹340",
      marketing: "₹6.5L",
      notes: "Subscriptions contribute 18% revenue; gross margin at 52%.",
    },
    {
      metric: "Month 12",
      revenue: "₹1.05Cr",
      orders: "4,900",
      cac: "₹320",
      marketing: "₹9.5L",
      notes: "Marketplace channels add 22% incremental sales; EBITDA positive.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_top,_#1e3a8a33,_transparent_55%)] text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10 lg:px-20">
        <header className="flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            India D2C Blueprint
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
            Launch a resilient e-commerce brand in India with a 12-month path to profitability and niche opportunities ready for execution.
          </h1>
          <p className="max-w-3xl text-pretty text-lg text-slate-300 sm:text-xl">
            This blueprint aligns Indian regulatory realities, supply chain readiness, and customer acquisition economics so you can deploy capital confidently. It blends rapid validation, omni-channel delivery, and intelligent retention mechanics to protect margin from day one.
          </p>
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40"
              >
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">
                  {item.value}
                </p>
                <p className="mt-3 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50">
              Profitable Niches to Target
            </h2>
            <p className="max-w-3xl text-base text-slate-300">
              Each opportunity is grounded in India-specific demand trends, supply chain feasibility, and differentiated value propositions that protect margin while building brand equity.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {nicheIdeas.map((idea) => (
              <article
                key={idea.name}
                className="flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {idea.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{idea.summary}</p>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-200">Why India now</p>
                    <p className="text-slate-400">{idea.whyIndia}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Differentiation levers</p>
                    <ul className="mt-2 space-y-2 text-slate-400">
                      {idea.differentiation.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-left"
                        >
                          <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Unit Economics Snapshot
                  </p>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                    <div>
                      <dt className="text-slate-400">ASP</dt>
                      <dd className="font-semibold text-slate-100">
                        {idea.unitEconomics.asp}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">COGS</dt>
                      <dd className="font-semibold text-slate-100">
                        {idea.unitEconomics.cogs}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Contribution margin</dt>
                      <dd className="font-semibold text-slate-100">
                        {idea.unitEconomics.contributionMargin}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Reorder rate</dt>
                      <dd className="font-semibold text-slate-100">
                        {idea.unitEconomics.reorderRate}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50">
              12-Month Execution Roadmap
            </h2>
            <p className="max-w-3xl text-base text-slate-300">
              Move from concept to profitable scale with disciplined sprints that derisk demand, operations, and capital deployment.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {growthPlan.map((item) => (
              <div
                key={item.phase}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                  {item.phase}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {item.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="flex items-start gap-2 text-left"
                    >
                      <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50">
              Operating Blueprint
            </h2>
            <p className="max-w-3xl text-base text-slate-300">
              Build defensible operations that balance speed with regulatory compliance and customer trust.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {operatingBlueprint.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-100">
                  {item.title}
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-left leading-relaxed"
                    >
                      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50">
              Financial Trajectory (Illustrative)
            </h2>
            <p className="max-w-3xl text-base text-slate-300">
              Model assumes blended 50% gross margin, disciplined paid media, and subscription expansion after month four.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
            <div className="grid grid-cols-[1.2fr_repeat(4,1fr)_1.5fr] bg-slate-900/80 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span>Milestone</span>
              <span>Revenue</span>
              <span>Orders</span>
              <span>CAC</span>
              <span>Marketing burn</span>
              <span>Key insight</span>
            </div>
            <div className="divide-y divide-slate-800">
              {financials.map((item) => (
                <div
                  key={item.metric}
                  className="grid grid-cols-[1.2fr_repeat(4,1fr)_1.5fr] gap-3 px-6 py-5 text-sm text-slate-300"
                >
                  <span className="font-semibold text-slate-100">
                    {item.metric}
                  </span>
                  <span>{item.revenue}</span>
                  <span>{item.orders}</span>
                  <span>{item.cac}</span>
                  <span>{item.marketing}</span>
                  <span className="text-slate-400">{item.notes}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50">
              Risk Mitigation & Compliance Checklist
            </h2>
            <p className="max-w-3xl text-base text-slate-300">
              Stay audit-ready and maintain consumer trust with proactive controls across finance, legal, and customer operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">
                Regulatory must-haves
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Register for GST, Professional Tax (if applicable), and secure IEC for export-ready roadmap.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Ensure FSSAI licenses for consumables; maintain batch-level traceability and lab reports.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Draft clear Terms, Privacy Policy (DPDP-compliant), and return/refund policy aligned with Consumer Protection Act.
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-200">
                Risk levers & controls
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                  <span>
                    Hedge supply risk with minimum 2 vendors per hero SKU and 21-day safety stock in 3PL.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                  <span>
                    Implement automated RTO prevention via address validation, COD confirmation calls, and delivery partner scorecards.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                  <span>
                    Maintain weekly cash flow dashboard covering burn, payables, receivables, and marketing returns.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-10 text-sm text-slate-400">
          <p>
            Built as an actionable launch manual—adapt metrics to your capital structure and validate assumptions with real customer data within the first two sprints.
          </p>
        </footer>
      </main>
    </div>
  );
}
