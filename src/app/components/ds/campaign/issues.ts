/* ─────────────────────────────────────────────────────────────────────
   THE EIGHT-WEEK CAMPAIGN — copy

   Audience: referral partners (brokers, accountants, lawyers). Not
   borrowers. See 03-audience-and-icp/icp-referral-partners.md.

   Every issue follows the newsletter playbook's five-part shape —
   observation, position, reasoning, qualification, close — and is
   written against these files, in this order of authority:

     07-market-and-compliance/compliance-guardrails.md   (overrides all)
     04-voice-and-messaging/banned-language.md
     04-voice-and-messaging/brand-voice.md
     04-voice-and-messaging/messaging-pillars.md
     08-outreach-and-campaigns/newsletter-playbook.md
     07-market-and-compliance/lending-benchmarks.md      (any figure)

   Rules honoured throughout: no approval / pre-approved / guarantee /
   qualify / offer / we advise. No tailored / bespoke / boutique /
   specialist / solutions / fast / "when the bank says no" / panel-size
   claims. No competitor named. No exclamation marks, no emojis. Sentence
   case. Australian English. Every figure is a market benchmark carrying
   "indicative" in the same visual block, never a Capital Unique price.

   The source flyer's own labels — "FAST SETTLEMENT", "Competitive
   Rates", "Solutions", "up to 75% LVR" — are each prohibited by one of
   the files above. The topics survive; the labels do not. See the
   mapping table rendered above the issues in the design system.
───────────────────────────────────────────────────────────────────── */

export interface Figure {
  value: string;
  label: string;
  /* Attribution + "indicative" must sit in the same visual block as the
     number. Compliance guardrails, "applying this to marketing". */
  note: string;
}

export interface Issue {
  week: number;
  id: string;
  subject: string;      /* 4–8 words, sentence case, no number, no question mark */
  preheader: string;    /* 40–90 chars */
  eyebrow: string;      /* the messaging pillar, uppercased in render */
  pillar: string;
  headline: string;     /* the position, in one line */
  observation: string[];
  position: string[];
  reasoning: string[];
  figure?: Figure;
  qualification: string[];
  close: string[];
  ask?: string;         /* zero or one. Usually zero */
  next?: string;        /* footer teaser for the following issue */
  sources: string[];    /* database provenance — review only, never shipped */
  topic: string;        /* which of the client's original flyer topics this carries */
}

export const ISSUES: Issue[] = [
  /* ── 01 ─────────────────────────────────────────────────────────── */
  {
    week: 1,
    id: "CU-W01",
    subject: "what a decline actually tells you",
    preheader: "The file did not fail. The structure did.",
    eyebrow: "Structure over policy",
    pillar: "Pillar 1",
    topic: "Banks and lenders letting brokers down",
    headline: "Being declined is information, not a verdict",
    observation: [
      "A scenario came through recently that two banks had already turned away. The client had been told to come back in twelve months with cleaner figures. Nobody had looked at how the facility was put together in the first place.",
    ],
    position: [
      "A decline is a statement about fit with one lender's policy. It is not a statement about the borrower, and it is not a verdict on the deal.",
      "Banks assess whether a scenario fits their lending policy. That is a different question from whether the scenario can be structured so it works — and the second question usually goes unasked, because the person who would ask it is not in the room.",
    ],
    reasoning: [
      "Take an engagement of about $1.9M. A corporate facility had expired and fallen into default. Exit fees and a default rate were both running. The principal was overseas on a family matter, and a previous broker had not been able to move it.",
      "None of that was a policy question. The structure ran in two steps — a temporary facility to discharge the outgoing lender, then a long-term refinance once the position was stable, at a materially lower rate than the default the client had been sitting on.",
      "The borrower's credit position on the day of the decline and on the day of the refinance was the same. What changed was the sequence.",
      "There is a structural reason these scenarios are becoming more common rather than less. Major bank exposure to commercial real estate has roughly halved since 2009. That capital did not stop being needed — it moved, and the borrowers moved with it. A decline in 2026 often reflects where a balance sheet has retreated from, not what the borrower did.",
    ],
    qualification: [
      "Sometimes the decline is right. If a project does not stack on its own numbers, more expensive capital makes the problem worse rather than later. Rate-driven enquiries, speculative ideas before anything is executed, and anything consumer or residential sit outside what we do. In those cases a decline is information the borrower should act on rather than route around. The distinction worth holding is between a scenario that does not work and a scenario that has not been structured. The first is a verdict. The second is only a starting position, and telling them apart is most of the judgement.",
    ],
    close: [
      "A decline tells you one lender's policy did not fit. It does not tell you the scenario cannot be structured. Those are different findings, and only one of them is worth passing to a client as final.",
    ],
    next: "Next week — why time-to-decision is the wrong thing to compare.",
    sources: ["08/proof-and-evidence-bank.md — Business case study", "04/messaging-pillars.md — Pillar 1", "03/disqualifiers.md"],
  },

  /* ── 02 ─────────────────────────────────────────────────────────── */
  {
    week: 2,
    id: "CU-W02",
    subject: "speed is not the constraint",
    preheader: "Platforms are quick where credit is templated.",
    eyebrow: "Judgement over committees",
    pillar: "Pillar 3",
    topic: "Fast settlement",
    headline: "Speed is not the constraint. Judgement is.",
    observation: [
      "Every capital provider now advertises on time-to-decision. Hours, not weeks. Same-day indications. It has become the default claim in the category, which is a reasonable sign that it has stopped meaning much. When every provider competes on the same axis, that axis has stopped discriminating between them.",
    ],
    position: [
      "Time-to-decision is only meaningful where the credit decision is templated. On a scenario that has to be negotiated, the binding constraint is judgement, not processing.",
      "A quick decline is still a decline. Measured properly, the clock that matters runs from the first conversation to capital actually deployed — not to the first answer.",
    ],
    reasoning: [
      "Platforms built for volume are quick where a scenario fits the template and slow exactly where it stops fitting. That is not a criticism of them; it is what a volume model is for. It does mean the comparison most borrowers make is the wrong one.",
      "A building team had fully drawn their construction facility with works still in progress. The lender would not review or extend to finish them, despite a valuation showing clear headroom in the end value. Roughly $900K of additional construction funding was structured against that verified end value.",
      "No amount of processing speed would have produced that answer. Somebody had to be willing to look at the end value rather than the drawn balance.",
      "What actually consumes the calendar on a complex scenario is not the decision. It is establishing what the deal really is — reading the existing facility, understanding the security position, working out what the incumbent lender will and will not do, and sizing the structure the way a credit team will rather than the way the borrower hopes. Four steps: listen, assess, confirm, move. Only the last of those is administrative.",
      "A provider quoting a decision time is quoting the length of step four. On a templated deal, that is most of the work. On a negotiated one, it is almost none of it.",
    ],
    figure: {
      value: "One to four weeks",
      label: "First conversation to capital deployed",
      note: "Indicative only, and dependent on complexity. Not a commitment or a term.",
    },
    qualification: [
      "If the scenario genuinely is templated — standard security, clean serviceability, no timing pressure — a volume platform will be quicker and cheaper than we will, and that is where it should go. The advantage described here only exists where the credit decision has to be argued.",
    ],
    close: [
      "Timing over process. The question worth asking a provider is not how quickly they answer, but what happens to the file when the answer is not obvious. That second question is rarely addressed on a marketing page.",
    ],
    next: "Next week — the facility that expired while nobody was watching.",
    sources: ["08/proof-and-evidence-bank.md — Construction case study", "00/quick-facts.md — indicative timeline", "04/messaging-pillars.md — Pillar 3"],
  },

  /* ── 03 ─────────────────────────────────────────────────────────── */
  {
    week: 3,
    id: "CU-W03",
    subject: "the facility that quietly expired",
    preheader: "Nobody was watching the expiry date. It ran for months.",
    eyebrow: "Structure over policy",
    pillar: "Pillar 1",
    topic: "Immediate finance",
    headline: "The default that ran for four months",
    observation: [
      "A working-capital facility on a rural operation expired. It was poorly structured to begin with, and when it lapsed it fell into default quietly — no call, no letter that anyone acted on. A steep default rate ran for months before anybody looked. The engagement came to us through the owners' legal advisers, not the owners.",
    ],
    position: [
      "Expiring facilities are almost never discovered by the borrower. They are discovered by whoever reads the file next — and by then the cost is compounding rather than pending.",
      "This is the argument for advisers being the early-warning system rather than the last resort. Urgency is usually manufactured by delay, not by the deal.",
    ],
    reasoning: [
      "There are three places an expiry surfaces before it becomes a crisis. The management accounts, where interest suddenly moves without explanation. The ATO position, where a business starts funding tax out of a facility meant for stock. And the year-end review, where a twelve-month expiry is visible a full year before it bites.",
      "The rural engagement was about $400K. It was restructured through a family-office relationship around a succession plan, which cleared the way for a sale and the owners' retirement. The capital was not the difficult part. Noticing was.",
      "For an adviser the practical version is a short list of triggers. A year-end review showing a facility expiring inside twelve months. A client whose bank has gone quiet rather than said no. ATO debt being carried on a facility that was never meant to carry it. A succession or shareholder conversation that assumes finance will simply continue. A development running over budget with a fixed drawdown schedule. Each of those is visible to the adviser months before it is visible to a lender.",
      "None of them require a call to us. They require somebody to write the expiry date down.",
    ],
    qualification: [
      "Not every expiry is a crisis. If the incumbent lender will extend on reasonable terms, that is almost always the cheapest path and worth exhausting first. The scenarios worth a call are the ones where the incumbent has gone quiet, or where the extension arrives with terms that assume the borrower has nowhere to go and no time to find one.",
    ],
    close: [
      "If a client's facility expires within the next twelve months, that is visible in this year's figures. It is considerably cheaper to see it there than in a default notice, and the work of seeing it costs nothing beyond reading the expiry date.",
    ],
    next: "Next week — why the lower headline rate is often the dearer facility.",
    sources: ["08/proof-and-evidence-bank.md — Agriculture case study", "03/icp-referral-partners.md — trigger moments", "04/messaging-pillars.md — Pillar 1"],
  },

  /* ── 04 ─────────────────────────────────────────────────────────── */
  {
    week: 4,
    id: "CU-W04",
    subject: "a headline rate is not a price",
    preheader: "Two facilities, same rate, different cost entirely.",
    eyebrow: "Structure over policy",
    pillar: "Pillar 1",
    topic: "Competitive rates",
    headline: "A headline rate is not a price",
    observation: [
      "A client comparing two facilities will almost always rank them by the rate on the front page. It is the one number both providers present in the same format, which makes it feel comparable. It frequently is not.",
    ],
    position: [
      "The headline rate is one input into the cost of capital. The establishment fee, the term, and whether interest is capitalised or serviced are the others — and on short facilities they routinely invert the ranking of two options.",
      "We design the structure before discussing price, and this is the arithmetic reason why, not a stylistic preference.",
    ],
    reasoning: [
      "Published deal economics across a set of Australian commercial facilities put establishment fees in a band of roughly 0.75% to 1.75%, rising as the term shortens and the risk concentrates. That fee is not spread across the life of a long loan. On a short facility it lands almost entirely inside the period.",
      "Work it through. A facility at 8.75% with a 1.75% establishment fee, drawn for six months, carries that fee over half a year — an effective cost in the order of 12.25% annualised. A facility at 9.90% with a 0.75% fee over the same six months lands nearer 11.40%. The higher headline rate is the cheaper facility, by close to a point.",
      "Stretch both to twenty-four months and the ranking flips back. Which is the point: the rate did not decide it. The term did.",
      "Then there is how the interest is paid. A capitalised facility adds interest to the balance, so the borrower pays interest on interest and the effective cost drifts above the quoted rate over the term. A serviced facility does not, but it demands cash flow the project may not have during construction. Two facilities can carry the same headline rate and the same fee and still cost materially different amounts depending on which of those applies.",
      "None of this is exotic. It is arithmetic that takes about ten minutes and almost never gets done, because the rate is on the front page and the fee is on page four.",
    ],
    figure: {
      value: "0.75% – 1.75%",
      label: "Establishment fee band, Australian commercial facilities",
      note: "Indicative ranges drawn from publicly available 2026 market commentary. Not an offer or a guarantee of terms.",
    },
    qualification: [
      "Where two facilities run the same term, the same drawdown profile and the same fee structure, the headline rate is the comparison and there is nothing clever to add. The arithmetic above only matters when the terms differ — which, on complex scenarios, they almost always do.",
    ],
    close: [
      "A lower headline rate with heavier fees often costs more than a higher one. The only honest comparison is the total cost over the actual term.",
    ],
    ask: "Run the true cost of capital",
    next: "Next week — why the working-capital gap is rarely a cash problem.",
    sources: ["07/lending-benchmarks.md — LINK CM published deal economics", "02/calculators.md — True Cost of Capital", "04/messaging-pillars.md — Pillar 1"],
  },

  /* ── 05 ─────────────────────────────────────────────────────────── */
  {
    week: 5,
    id: "CU-W05",
    subject: "working capital and the wrong instrument",
    preheader: "The overdraft extension was never the right tool.",
    eyebrow: "Capital across the balance sheet",
    pillar: "Pillar 5",
    topic: "Working capital",
    headline: "Working capital is a structure question, not a cash question",
    observation: [
      "A business with a cash-flow gap reaches for whatever facility is nearest. An overdraft extension. A short unsecured line. A second mortgage behind a senior that nobody has re-examined in four years.",
    ],
    position: [
      "A working-capital shortfall is usually a symptom of a mismatch between how a business earns and how its facilities are shaped. Treating the symptom with the nearest instrument is what makes it expensive.",
      "The cheapest layer in a capital structure is the one that was never needed.",
    ],
    reasoning: [
      "The arithmetic is unforgiving. Market commentary puts non-bank second mortgages from around 14% and properly-sized non-bank senior debt in the region of 8.95% to 9.90% on the same asset. A borrower sitting behind their own first mortgage because nobody re-cut it is paying in the order of five percentage points more than they need to.",
      "Seasonal operations show the mismatch most clearly. Serviceability templates built around monthly income do not describe a business that earns twice a year. Rural facilities are conventionally written as twelve-month revolving seasonal credit for exactly this reason, and a business assessed on the wrong template will look like a credit problem when it is a calendar problem.",
      "The same mismatch appears away from agriculture. A business with ninety-day debtor terms and thirty-day creditor terms has a structural funding gap that no amount of trading well will close. Invoice and debtor facilities conventionally advance somewhere in the region of 70% to 90% of invoice value for precisely that shape of business. Funding that gap with a term facility secured against property is solving a receivables problem with a real-estate instrument.",
      "The question worth asking is not how much the gap is. It is how often it has appeared, and whether it has been funded a different way each time. A gap that recurs annually is a structure. A gap that has been funded three different ways in three years is a structure nobody has looked at.",
    ],
    figure: {
      value: "~5 points",
      label: "Second mortgage versus properly-sized senior, same asset",
      note: "Indicative ranges drawn from publicly available 2026 market commentary. Not an offer or a guarantee of terms.",
    },
    qualification: [
      "If the gap is genuinely short and genuinely temporary, a simple facility is the right answer. Nobody should restructure a balance sheet around a six-week timing difference. The restructure earns its keep when the gap recurs — when it has appeared in three consecutive years and been funded three different ways.",
    ],
    close: [
      "Before pricing the gap, it is worth asking why the gap exists. The answer usually sits in the structure rather than the cash, and structure is the cheaper of the two things to change.",
    ],
    next: "Next week — releasing capital without breaking the senior.",
    sources: ["07/lending-benchmarks.md — 1st/2nd mortgage pricing, agricultural terms", "04/messaging-pillars.md — Pillar 5"],
  },

  /* ── 06 ─────────────────────────────────────────────────────────── */
  {
    week: 6,
    id: "CU-W06",
    subject: "cash out without breaking the senior",
    preheader: "Equity release is a covenant question first.",
    eyebrow: "Structure over policy",
    pillar: "Pillar 1",
    topic: "Cash-out",
    headline: "Releasing capital is a covenant problem before it is a valuation problem",
    observation: [
      "An owner with real equity in an asset wants to release some of it. For the next acquisition, to clear a tax position, to fund a shareholder exit. The valuation supports it comfortably. The release still does not happen.",
    ],
    position: [
      "Cash-out is rarely constrained by the value in the asset. It is constrained by what the existing facility permits, and by whether the released capital can be serviced or capitalised without breaching something already agreed.",
      "The valuation is the easy part. The covenants are the deal.",
    ],
    reasoning: [
      "There are two routes and they price very differently. Re-cut the senior, where market commentary puts non-bank senior debt in the 60% to 75% LVR region, with private mortgage convention often cited nearer 65%. Or sit behind it with a second mortgage, available to similar leverage but from around 14%.",
      "Re-cutting is usually the cheaper route for the same reason set out last week — roughly five percentage points on the same asset. But it is not automatic. A corporate group that came through 2020 with damaged credit files needed about $1.23M across two securities to discharge both mortgages and finalise an administration, then a short bridge through the restructure. Re-cutting was possible only because the sequence was designed before anything was drawn.",
      "The covenants that decide it are rarely dramatic. A negative pledge preventing further encumbrance without consent. A loan-to-value covenant tested on a valuation the lender commissions rather than the owner does. An interest-cover ratio stress-tested at an assessed rate well above the current one — which is standard, and which is why a release that services comfortably at today's rate can still fail the test. A distribution restriction that treats a cash-out as a distribution.",
      "Any one of those will stop a release that the valuation supports comfortably. They are all readable in the existing facility documents before anybody orders a valuation.",
    ],
    qualification: [
      "Where the existing senior is priced well below anything currently available and has a long term left to run, breaking it can cost more than sitting behind it. Break costs, discharge fees and the loss of a favourable margin all belong in the arithmetic. There are scenarios where the second mortgage at a higher rate is genuinely the right instrument — they are just fewer than the number of times it gets used.",
    ],
    close: [
      "Before valuing the equity, read the facility that sits over it. The release is decided there, in documents the owner already holds.",
    ],
    next: "Next week — what a credit team re-tests in a feasibility.",
    sources: ["07/lending-benchmarks.md — LVR bands, 2nd mortgage pricing", "08/proof-and-evidence-bank.md — Private Capital case study"],
  },

  /* ── 07 ─────────────────────────────────────────────────────────── */
  {
    week: 7,
    id: "CU-W07",
    subject: "what a credit team re-tests",
    preheader: "The feasibility is not the problem. The assumptions are.",
    eyebrow: "Clarity, before the conversation",
    pillar: "Pillar 2",
    topic: "Construction and development",
    headline: "A credit team does not read a feasibility. It re-runs it.",
    observation: [
      "A developer sends through a feasibility. It stacks — on the developer's assumptions about end value, on the developer's contingency, and on a programme that has nothing going wrong in it.",
    ],
    position: [
      "A credit team does not read a feasibility to see whether it works. It re-runs it to find where it breaks. Those are different exercises, and only one of them decides the facility.",
      "Everything a credit team re-tests can be re-tested by the borrower first, which is the whole argument for doing it before the conversation rather than during it.",
    ],
    reasoning: [
      "Four figures get re-run. End value against comparable evidence, where development lending conventionally tops out around 65% to 70% of gross realisable value. Total development cost with holding costs and contingency included, where non-bank development typically expects an equity contribution near 25% to 30%. Project margin, where market commentary cites 20% of total development cost as the threshold below which a project stops being financeable. And the exit — presales, or a refinance that has to be credible on completion rather than hoped for.",
      "The pattern is that projects rarely fail on the headline numbers. They fail on the second-order ones: contingency set at 3% instead of 7%, holding costs modelled to practical completion rather than to settlement, a GRV built from asking prices rather than settled comparables.",
      "A construction engagement of about $900K turned on precisely this. The lender was looking at a fully drawn facility. The headroom was in the verified end value, which is the figure a credit team re-tests first and the borrower quotes last.",
      "The exit deserves its own attention, because it is where feasibilities are most often optimistic. A presale requirement is not a market test — it is a covenant, and it is protecting the lender against absorption risk rather than proving the project sells. A refinance exit has to be credible on the completion-date balance sheet, not on the one in the model. Where neither is firm, the structure has to carry the uncertainty, and that is what moves pricing far more than the headline leverage does.",
    ],
    figure: {
      value: "65 – 70% GRV",
      label: "Conventional development lending ceiling",
      note: "Indicative ranges drawn from publicly available 2026 market commentary. Not an offer or a guarantee of terms.",
    },
    qualification: [
      "None of this is meaningful on an early-stage site. Without a DA, a QS report or a fixed-price building contract there is nothing stable to re-test, and running the exercise anyway produces false confidence. At that stage the question is whether the site works, not whether the feasibility does.",
    ],
    close: [
      "The weak points in a feasibility are findable before a credit team finds them. It is a considerably better conversation when the developer has already found them.",
    ],
    ask: "Run the feasibility sanity-check",
    next: "Next week — the last one. What we do not do, and why that is useful to you.",
    sources: ["07/lending-benchmarks.md — GRV, TDC, margin thresholds", "05/tools/feasibility-sanity-check.md", "08/proof-and-evidence-bank.md — Construction case study"],
  },

  /* ── 08 ─────────────────────────────────────────────────────────── */
  {
    week: 8,
    id: "CU-W08",
    subject: "our scope, stated plainly",
    preheader: "What to send us, and what not to. Mostly the second.",
    eyebrow: "We tell you what we will not do",
    pillar: "Pillar 4",
    topic: "Scope and referral filter",
    headline: "Knowing when not to call is worth more than knowing when to",
    observation: [
      "Over seven issues this series has argued a set of positions about structure, timing and cost. The most useful thing left to hand over is not another position. It is the boundary.",
    ],
    position: [
      "A published scope lets an adviser filter without ringing first. That is worth more to a busy practice than any capability claim, and almost nobody in this market publishes one.",
      "Scope is a credential. What a firm declines describes it more accurately than what it accepts.",
    ],
    reasoning: [
      "What we structure: commercial, business-purpose and wholesale scenarios across business, commercial property, property development, construction, agriculture and private capital. From approximately A$1M. Complexity matters more than dollar size.",
      "What we do not: consumer or residential credit, rate-driven enquiries where price is the only question, and speculative ideas before anything has been executed. Capital Unique holds no Australian Credit Licence and no Australian Financial Services Licence — the work sits outside both regimes deliberately, because it is limited to commercial, business-purpose and wholesale scenarios. If a scenario is straightforward retail finance, a traditional lender or broker will serve it better.",
      "And the part that matters most to a practice: the client comes back. We have no product to sell and no lender paying us, so there is no commercial reason for us to retain a relationship that arrived through somebody else.",
      "The process is four steps and it is the same every time. Listen, to establish what the scenario actually is. Assess, and size it the way a credit team will rather than the way anyone hopes. Confirm, in writing, before anything is committed. Then move. One principal is accountable across all four, which is the practical meaning of principal-led: no hand-off, no committee, and nobody a client has to re-explain their situation to.",
      "What we ask for at the start is deliberately small — brief context, the timing, and what the capital is for. There is no cost and no obligation to that conversation, and fees are agreed in writing before any formal engagement.",
    ],
    qualification: [
      "The A$1M figure is a guide rather than a gate. A $700K scenario with genuine structural complexity is more interesting than a $5M one that any lender on the street would write. If it is borderline, the boundary is worth testing in a conversation rather than assumed.",
    ],
    close: [
      "That is the series. If one thing survives it, make it this: the scenarios worth a call are the ones where the structure is the problem, not the price.",
    ],
    ask: "Start a conversation",
    sources: ["03/icp-referral-partners.md", "04/messaging-pillars.md — Pillar 4", "03/disqualifiers.md", "00/quick-facts.md — scope, minimum, licensing"],
  },
];

/* The client's original flyer labels, and what each became. Rendered as a
   table in the design system so the substitutions are reviewable rather
   than silent. */
export const TOPIC_MAP: { flyer: string; issue: string; why: string }[] = [
  {
    flyer: "BANKS/LENDERS LETTING YOU DOWN — TAKING TOO LONG or SAID NO",
    issue: "W01 · Being declined is information, not a verdict",
    why: '"When the bank says no" is owned outright by a competitor, and the caps-and-exclamation register is off-voice. The approved contrast is against the category: banks assess policy, we assess structure.',
  },
  {
    flyer: "FAST SETTLEMENT",
    issue: "W02 · Speed is not the constraint. Judgement is.",
    why: '"Fast", "same day" and "24 hours" are competitor-owned and banned. The replacement line in the database is "Timing over process."',
  },
  {
    flyer: "Immediate Funding",
    issue: "W03 · The default that ran for four months",
    why: "Immediacy implies certainty of funding. Reframed as the real timing argument — the cost of an expiry discovered late.",
  },
  {
    flyer: "Competitive Rates",
    issue: "W04 · A headline rate is not a price",
    why: "A rate claim reads as an offer. The compliant version argues why the headline rate is the wrong comparison, using attributed market fee bands.",
  },
  {
    flyer: "Working Capital (Cash-out) Solutions",
    issue: "W05 · Working capital is a structure question",
    why: '"Solutions" is universal competitor filler and banned. Split into two issues — working capital, then cash-out — because they are different problems.',
  },
  {
    flyer: "Working Capital (Cash-out) Solutions",
    issue: "W06 · Releasing capital is a covenant problem",
    why: "The cash-out half. Covenants, not valuation, are what actually gate a release.",
  },
  {
    flyer: "Construction/Development Loan Solutions",
    issue: "W07 · What a credit team re-tests in a feasibility",
    why: "Kept as a topic, moved from a list of products to a position with arithmetic behind it.",
  },
  {
    flyer: "1st/2nd Mortgage Funding up to 75% LVR",
    issue: "W08 · Our scope, stated plainly",
    why: "An LVR written as an offer is compliance-prohibited outright. Replaced by the published boundary, which the referral audience values more than a leverage claim.",
  },
];
