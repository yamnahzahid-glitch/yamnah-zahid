export type ProjectCaseStudy = {
  slug: string;
  client: string;
  type: string;
  year: string;
  engagement: string;
  role: string;
  title: string;
  emphasis: string;
  summary: string;
  tags: string[];
  outcome: string;
  outcomeLabel: string;
  cover: { src: string; alt: string; width: number; height: number; caption?: string; fit?: "cover" | "contain"; orientation?: "landscape" | "portrait" };
  gallery: { src: string; alt: string; width: number; height: number; caption?: string; fit?: "cover" | "contain" }[];
  overview: string;
  challenge: string;
  objective: string;
  strategy: string[];
  execution: string[];
  deliverables: string[];
  outcomeDetails: string[];
  impact: string;
  link?: { href: string; label: string };
};

export const projectCases: ProjectCaseStudy[] = [
  {
    slug: "ai-product-content-initiative",
    client: "PriceOye",
    type: "Behaviour & growth systems",
    year: "2026",
    engagement: "AI product content initiative",
    role: "Marketing Specialist — led a team of 3",
    title: "Prompting for Conversion,",
    emphasis: "Not Just for Pretty",
    summary: "The product was good; the first impression wasn’t doing enough. A prompt-to-publish system that made 200 listings easier to imagine owning — and lifted daily orders 21%.",
    tags: ["AI content system", "Prompt engineering", "Conversion"],
    outcome: "+21%",
    outcomeLabel: "lift in daily orders",
    cover: { src: "/projects/meta-smartwatches.jpg", width: 901, height: 643, alt: "Meta Ads results for the Smartwatches campaign", caption: "Smartwatches · 1,753 purchases · CPA Rs80.61 in July 2026, 87% below the peer median.", fit: "contain" },
    gallery: [
      { src: "/projects/meta-hair-straightener.jpg", width: 902, height: 634, alt: "Meta Ads results for the Hair Straightener retargeting campaign", caption: "Hair Straightener (retargeting) · 1,756 purchases · CPA Rs69.72, 88% below the peer median.", fit: "contain" },
      { src: "/projects/meta-trimmers.jpg", width: 914, height: 611, alt: "Meta Ads results for the Trimmers and Shavers campaign", caption: "Trimmers & Shavers · 1,380 purchases · CPA Rs88.45, 85% below the peer median.", fit: "contain" },
      { src: "/projects/meta-smart-watches.jpg", width: 899, height: 596, alt: "Meta Ads results for the Smart Watches campaign", caption: "Smart Watches · 1,411 purchases · CPA Rs79.33, 86% below the peer median.", fit: "contain" },
      { src: "/projects/meta-catalog.jpg", width: 915, height: 603, alt: "Meta Ads results for a ten-category product catalog", caption: "Ten-category catalog · 2,514 purchases · CPA Rs74.01, across tablets, power banks, trimmers and more.", fit: "contain" },
      { src: "/projects/content-planning-1.png", width: 1084, height: 601, alt: "PriceOye product performance report", caption: "Product performance reporting used to review the rebuilt listings.", fit: "contain" },
    ],
    overview: "On an e-commerce screen a product doesn’t get the luxury of explanation. Before a customer reads the specifications, compares the price or scrolls the description, they see an image. So the objective was never prettier product photography — it was making the product easier to imagine owning.",
    challenge: "Traditional product imagery answers “what does this look like?” but not “what would this look like in my world?” E-commerce removes the physical cues — scale, context, use, atmosphere — that normally help someone evaluate a purchase.",
    objective: "Improve how products were communicated online without turning every listing into a costly production exercise, moving the content from “here is the product” to “here is the product in a world you recognise”.",
    strategy: [
      "Treat the visual as part of the conversion journey rather than a decorative layer: more contextual visuals → stronger comprehension → greater confidence → less friction in the purchase.",
      "Scope a controlled pilot — accessories and personal care first, rather than transforming every category at once.",
      "Ask the system question early: how do you move from one successful prompt to a workflow another person can reproduce? A good output is useful once; a good system is useful repeatedly.",
    ],
    execution: [
      "Built a seven-stage workflow in ImagineArt and ChatGPT: understand → contextualise → prompt → generate → critique → refine → standardise.",
      "Led a team of three through category-by-category production across personal care, hair dryers, epilators, chargers, adapters, straighteners and laptops.",
      "Critiqued every output against the brief rather than on looks: is the product still the hero, does the image communicate use, is it commercially usable?",
      "Rewrote product descriptions in parallel for the same categories, improving clarity and SEO so the visual upgrade wasn’t carrying the conversion story alone.",
    ],
    deliverables: ["Structured prompt workflows", "200 live product images", "Rewritten product copy", "Shared review checkpoints", "A repeatable in-house process"],
    outcomeDetails: [
      "200 product images published live on PriceOye’s website",
      "21% lift in daily orders, 26.0 → 31.36 per day",
      "1% conversion rate",
      "Five July 2026 Meta campaigns at CPAs 85–88% below the peer median",
    ],
    impact: "The first good image was never the breakthrough — consistency was. The harder question was how to make AI output behave like a brand system rather than a collection of good images, which turned the work into shared prompt structures, review checkpoints and a documented process. I didn’t approach AI as a replacement for creativity, but as a way to make creativity testable. Next: connect the system to performance data — CTR → engagement → conversion → orders — and formalise the in-house workflow so production never depends on one person’s prompting.",
  },
  {
    slug: "asli-warranty-challenge",
    client: "PriceOye",
    type: "Behaviour & growth systems",
    year: "2026",
    engagement: "Trust campaign built through earned media",
    role: "Campaign strategy & influencer outreach lead",
    title: "The Real Product Was",
    emphasis: "Believability",
    summary: "The phone wasn’t the problem. “Can I trust where I’m buying it from?” was. 250+ creators, tiered and budgeted, turned a warranty claim into something other people said.",
    tags: ["Trust architecture", "Creator ecosystem", "UGC"],
    outcome: "250+",
    outcomeLabel: "influencers reached",
    cover: { src: "/projects/believability-4.png", width: 1366, height: 768, alt: "Facebook community insights showing audience growth", caption: "Community insights from the owned pages that carried the Asli Warranty narrative.", fit: "contain" },
    gallery: [
      { src: "/projects/believability-1.png", width: 1366, height: 768, alt: "Facebook group insights report", caption: "Facebook group insights report.", fit: "contain" },
      { src: "/projects/believability-2.png", width: 1366, height: 768, alt: "Facebook community performance chart", caption: "Facebook community performance chart.", fit: "contain" },
      { src: "/projects/believability-3.png", width: 1366, height: 768, alt: "Facebook group growth analytics", caption: "Facebook group growth analytics.", fit: "contain" },
    ],
    overview: "For an e-commerce business selling high-consideration products, trust is not a nice-to-have. A customer can want the phone, like the price and compare the specifications — and still leave, because underneath the decision sits a quieter question: what happens if something goes wrong?",
    challenge: "A brand saying “trust us” isn’t proof. If the hesitation is “I don’t know whether I believe you”, repeating the claim louder doesn’t solve it.",
    objective: "Build awareness around the Asli Warranty proposition and strengthen its trust narrative — moving the communication from brand → customer to brand → creators → communities → customer.",
    strategy: [
      "Use creators as social proof rather than distribution alone: nano for closer communities, micro for niche credibility, macro for reach and cultural visibility.",
      "Treat the budget as part of the creative problem — where does each rupee create the most useful kind of trust? — balancing reach, relevance, credibility and content output rather than follower count.",
      "Give creators a narrative, not a personality: one central idea — confidence after the purchase, not just a promise before it — carried in their own voices.",
    ],
    execution: [
      "Ran outreach as an operational funnel: reach out → evaluate → negotiate and budget → onboard → brief → produce → review → publish.",
      "Contacted 250+ influencers across nano, micro and macro tiers, and formally onboarded 30 to produce UGC — the format that reads as testimony rather than advertising.",
      "Managed three Facebook pages so the narrative had a consistent home while creator content rolled out on its own timelines: repetition without redundancy.",
      "When retailers were threatened with legal notices over pricing, contacted 3 agencies and 20 legal-content creators to build a public record backing their right to price competitively.",
    ],
    deliverables: ["Tiered outreach plan", "Budget allocation across tiers", "Creator onboarding & briefs", "UGC production pipeline", "Three managed social pages"],
    outcomeDetails: [
      "250+ influencers reached across nano, micro and macro",
      "30 creators onboarded for UGC",
      "3 social pages carrying the narrative",
      "Media outreach and stakeholder-driven content grew as a direct result",
    ],
    impact: "None of the 20 legal creators replied inside two weeks, and the reason was structural rather than indifference: outreach had no verified access to official brand channels, and legal creators won’t engage a claim they can’t cross-check. The fix was a hard follow-up window and a second channel on LinkedIn, where legal professionals already verify who they are talking to. Most campaigns protect the brand; this one protected the people the brand was leaning on.",
  },
  {
    slug: "rox-more-than-a-network",
    client: "Jazz × Fishbowl Agency",
    type: "Culture & creative systems",
    year: "2025",
    engagement: "Social and campaign creative for ROX",
    role: "Creative Executive — ideation, copy and storyboards",
    title: "More Than a Network",
    emphasis: "Wasn’t a Tagline",
    summary: "Everyone has data, calls and packages. The creative problem was making connectivity matter to an audience that organises life around interests, not telecom categories.",
    tags: ["Positioning", "Social creative", "Copywriting"],
    outcome: "8",
    outcomeLabel: "Jazz verticals",
    cover: { src: "/projects/rox-1.jpg", width: 360, height: 640, alt: "ROX campaign creative", caption: "ROX campaign creative from the Jazz Business portfolio.", fit: "contain", orientation: "portrait" },
    gallery: [
      { src: "/projects/rox-2.jpg", width: 361, height: 640, alt: "ROX campaign still", caption: "ROX campaign still.", fit: "contain" },
      { src: "/projects/rox-3.jpg", width: 360, height: 640, alt: "ROX campaign creative", caption: "ROX campaign creative.", fit: "contain" },
      { src: "/projects/fikrfree-2.jpg", width: 360, height: 640, alt: "ROX social creative built around a cultural conversation", caption: "A ROX social idea built from a conversation the audience was already having.", fit: "contain" },
    ],
    overview: "Telecom advertising has an obvious problem: everyone has data, everyone has calls, everyone has packages. Saying “we have better connectivity” doesn’t give a younger audience a reason to care — so the brief wasn’t really how to sell another network, but what if connectivity became a gateway to the things young people actually care about.",
    challenge: "Create a distinct identity for ROX inside an extremely crowded category, and make “more than a network” feel like something people could experience rather than something they were told.",
    objective: "Reverse the logic. Start with the culture — music, gaming, sport, food, fashion, friends, events — then make connectivity the thing that enables it.",
    strategy: [
      "Don’t sell the network; sell what being connected unlocks.",
      "Source weekly social ideas from what was already happening in the audience’s world rather than forcing every trend into the brand.",
      "Find the moments where the brand could participate without interrupting the conversation — strategically correct without looking strategically correct.",
    ],
    execution: [
      "Developed weekly social concepts at the intersection of what people were talking about, what ROX stands for and what could be made genuinely interesting.",
      "Wrote copy as the idea itself rather than decoration under it: the difference between “ROX gives you more” and “more than a network” is positioning, not wording.",
      "Carried concepts through the full agency chain — brief → insight → concept → copy → storyboard → client → production — so an idea was finished only when another team could make it real.",
      "Contributed to the conceptual and creative development of a series of six short-form digital films.",
    ],
    deliverables: ["Weekly social concepts", "Campaign copy", "Storyboards", "Short-film creative development"],
    outcomeDetails: [
      "Creative across eight Jazz verticals, including ROX, GameNow, SportsX, Dealo and Garaj",
      "“More than a network” extended from a line into an ecosystem of deals, experiences and lifestyle access",
    ],
    impact: "A brand doesn’t become culturally relevant by talking about culture — it becomes relevant by finding a legitimate reason to participate in it. The question that followed me out of this work: not “what can the brand say today?” but “what is already happening in people’s world, and what can the brand meaningfully add?”",
  },
  {
    slug: "fikrfree-jazz-brand-film",
    client: "Jazz × Fishbowl Agency",
    type: "Culture & creative systems",
    year: "2025",
    engagement: "Human-centred storytelling for a digital insurance platform",
    role: "Creative Executive — concept, copy, storyboards, on-set testimonial work",
    title: "Making an Invisible",
    emphasis: "Product Feel Real",
    summary: "Nobody wakes up wanting insurance. The job was to make protection feel relevant before the moment that makes its value obvious.",
    tags: ["Human-centred storytelling", "Storyboarding", "Testimonials"],
    outcome: "Story",
    outcomeLabel: "before product",
    cover: { src: "/projects/fikrfree-1.jpg", width: 360, height: 640, alt: "Creative from the Jazz Business vertical portfolio", caption: "Creative from the same Jazz vertical portfolio (GameNow); original FikrFree film artwork was not supplied.", fit: "contain", orientation: "portrait" },
    gallery: [
      { src: "/projects/rox-2.jpg", width: 361, height: 640, alt: "Jazz Business campaign still", caption: "Jazz Business campaign still from the same body of agency work.", fit: "contain" },
    ],
    overview: "FikrFree is Jazz’s AI-powered digital insurance and healthcare platform, covering insurance, healthcare access and claims. Insurance is fundamentally about an event that hasn’t happened yet: you can’t show peace of mind in a product shot, or photograph financial protection.",
    challenge: "Communicate a complex category without making it feel clinical — and without reaching for fear, which is the obvious shortcut in insurance advertising and isn’t the same thing as trust.",
    objective: "Stop explaining the product and start showing why it exists: people → moments → uncertainty → reassurance, before features → benefits → product copy.",
    strategy: [
      "Reach people through situations they already recognise — a phone breaks, someone in the family gets sick, an unexpected cost appears — rather than an insurance lecture.",
      "Choose a warmer emotional territory: preparedness instead of panic, reassurance instead of fear, access instead of complexity.",
      "Build each idea as a sequence, not a statement: what is happening, why should we care, what changes, where does the brand enter, what should the audience feel when it ends.",
    ],
    execution: [
      "Developed concepts and copy that led with the human entry point rather than the product feature.",
      "Storyboarded ideas into five-frame sequences so they could survive the journey from meeting to shoot.",
      "Was present during production and helped collect testimonials, asking for the detail — what actually happened, what were you worried about, what changed — that turns a statement into a story.",
    ],
    deliverables: ["Film concepts", "Campaign copy", "Five-frame storyboards", "On-set creative support", "Testimonial direction"],
    outcomeDetails: [
      "Concepts grounded in recognisable situations rather than product features",
      "Testimonials directed for specific truth rather than generic praise",
    ],
    impact: "The strongest testimonial isn’t the one with the best sentence — it’s the one with the most specific truth. People rarely connect with a product category; they connect with a situation, and the creative job is to build the bridge between the two.",
  },
  {
    slug: "paypak-priceoye-new-year",
    client: "PriceOye × PayPak",
    type: "Campaign",
    year: "2026",
    engagement: "Seasonal campaign",
    role: "Campaign planning, creative direction, and rollout",
    title: "PayPak × PriceOye",
    emphasis: "New Year Campaign",
    summary: "Led the campaign from brief to launch, shaping the offer, creative direction, and social rollout around a seasonal shopping moment.",
    tags: ["Campaign strategy", "Creative direction", "Social rollout"],
    outcome: "End-to-end",
    outcomeLabel: "ownership",
    cover: { src: "/projects/content-planning-1.png", width: 1084, height: 601, alt: "PriceOye product performance report", caption: "Supporting PriceOye performance material from the supplied project folder; original PayPak campaign artwork was not included.", fit: "contain" },
    gallery: [
      { src: "/projects/content-planning-2.png", width: 356, height: 371, alt: "PriceOye product performance charts", caption: "Product performance reporting supplied with the PriceOye work samples.", fit: "contain" },
    ],
    overview: "A seasonal partnership campaign for PayPak and PriceOye, managed across planning, creative development, and launch.",
    challenge: "Make a time-bound New Year offer clear and compelling across social channels while keeping the campaign connected to a measurable shopping outcome.",
    objective: "Bring the partnership and New Year offer together in one simple campaign story, then carry that story consistently from the initial brief to launch.",
    strategy: [
      "Start with the audience offer and make the value easy to understand.",
      "Connect the seasonal moment with the PayPak and PriceOye partnership.",
      "Plan the message for social publishing and a coordinated launch window.",
    ],
    execution: [
      "Worked from the campaign brief through offer framing and creative direction.",
      "Prepared the campaign rollout across social content and launch communications.",
      "Coordinated the delivery through publication and post-launch review.",
    ],
    deliverables: ["Campaign concept and offer framing", "Creative direction", "Social rollout planning", "Launch coordination"],
    outcomeDetails: ["End-to-end ownership from campaign brief through launch", "A coordinated seasonal message across social publishing"],
    impact: "The campaign was delivered end to end. The supplied folder contains PriceOye reporting visuals, shown here as supporting work context; they are not presented as the original PayPak campaign artwork.",
  },
  {
    slug: "saha-climate-platform",
    client: "Saha",
    type: "Climate communications",
    year: "2025",
    engagement: "Personal initiative · research-led advocacy",
    role: "Founder — research, communication and advocacy",
    title: "Climate, Made",
    emphasis: "Personal",
    summary: "From drought-stress research on lentils to the Youth Climate Communiqué carried toward COP30 — and Saha, built to turn climate intelligence into something people can act on at home.",
    tags: ["Climate advocacy", "Youth Communiqué", "Product"],
    outcome: "COP30",
    outcomeLabel: "CVF–V20 Communiqué",
    link: { href: "https://www.sahaclimate.com/", label: "sahaclimate.com" },
    cover: { src: "/projects/saha-1.png", width: 360, height: 781, alt: "CVF–V20 correspondence inviting feedback on the Youth Communiqué", caption: "CVF–V20 correspondence on the Youth Communiqué ahead of COP30.", fit: "contain", orientation: "portrait" },
    gallery: [
      { src: "/projects/saha-2.png", width: 392, height: 848, alt: "Further Saha project correspondence", caption: "Further correspondence from the consultation process.", fit: "contain" },
    ],
    overview: "My interest in climate change began in science, but it didn’t stay in the laboratory. During undergraduate research on drought stress in lentils, climate change stopped being an abstract global crisis and became something that directly affects food, livelihoods, water and the resilience of communities.",
    challenge: "Climate policy cannot exist only in reports, conferences and technical institutions. It has to connect with the people who experience floods, heat, drought, food insecurity and water stress first.",
    objective: "Make climate knowledge meaningful and actionable for ordinary people — close enough to everyday life that someone can see themselves in the problem and respond to it.",
    strategy: [
      "Carry the question out of research and into public dialogue, where the priorities are set.",
      "Bring youth perspectives into the formal process rather than commenting on it from outside.",
      "Translate climate intelligence into the scale people actually live at: a home, a routine, a community.",
    ],
    execution: [
      "Participated in the Youth Roundtable on Climate Non-Negotiables: From Floods to COP30 in September 2025, organised by the Climate Vulnerable Forum and V20 with the Institute of Regional Studies, Islamabad.",
      "Contributed to the consultation process that informed the Youth Climate Communiqué, helping shape the priorities consolidated into the document presented through the CVF–V20 engagement ahead of COP30 in Belém, Brazil.",
      "Built Saha to translate climate intelligence into everyday life: how a changing climate affects homes, routines and communities, and what people can do about it.",
    ],
    deliverables: ["Youth Communiqué consultation input", "Climate-risk communication", "Saha — sahaclimate.com"],
    outcomeDetails: [
      "Youth Roundtable participant, September 2025 · CVF–V20 with the Institute of Regional Studies",
      "Contributor to the Youth Climate Communiqué carried toward COP30 in Belém",
      "Saha: climate intelligence translated for homes and communities",
    ],
    impact: "Climate awareness becomes meaningful when people can see themselves in the problem, understand it, and feel empowered to respond. From studying drought resilience in plants, to the consultation shaping Pakistan’s youth climate agenda, to building a climate-focused product, the work keeps moving toward that one idea.",
  },
];
