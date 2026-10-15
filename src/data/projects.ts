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
    slug: "paypak-priceoye-new-year",
    client: "Priceoye × PayPak",
    type: "Campaign",
    year: "2026",
    engagement: "Seasonal campaign",
    role: "Campaign planning, creative direction, and rollout",
    title: "PayPak × Priceoye",
    emphasis: "New Year Campaign",
    summary: "Led the campaign from brief to launch, shaping the offer, creative direction, and social rollout around a seasonal shopping moment.",
    tags: ["Campaign strategy", "Creative direction", "Social rollout"],
    outcome: "End-to-end",
    outcomeLabel: "ownership",
    cover: { src: "/projects/content-planning-1.png", width: 1084, height: 601, alt: "Priceoye product performance report", caption: "Supporting Priceoye performance material from the supplied project folder; original PayPak campaign artwork was not included.", fit: "contain" },
    gallery: [
      { src: "/projects/content-planning-2.png", width: 356, height: 371, alt: "Priceoye product performance charts", caption: "Product performance reporting supplied with the Priceoye work samples.", fit: "contain" },
    ],
    overview: "A seasonal partnership campaign for PayPak and Priceoye, managed across planning, creative development, and launch.",
    challenge: "Make a time-bound New Year offer clear and compelling across social channels while keeping the campaign connected to a measurable shopping outcome.",
    objective: "Bring the partnership and New Year offer together in one simple campaign story, then carry that story consistently from the initial brief to launch.",
    strategy: [
      "Start with the audience offer and make the value easy to understand.",
      "Connect the seasonal moment with the PayPak and Priceoye partnership.",
      "Plan the message for social publishing and a coordinated launch window.",
    ],
    execution: [
      "Worked from the campaign brief through offer framing and creative direction.",
      "Prepared the campaign rollout across social content and launch communications.",
      "Coordinated the delivery through publication and post-launch review.",
    ],
    deliverables: ["Campaign concept and offer framing", "Creative direction", "Social rollout planning", "Launch coordination"],
    outcomeDetails: ["End-to-end ownership from campaign brief through launch", "A coordinated seasonal message across social publishing"],
    impact: "The campaign was delivered end to end. The supplied folder contains Priceoye reporting visuals, shown here as supporting work context; they are not presented as the original PayPak campaign artwork.",
  },
  {
    slug: "asli-warranty-challenge",
    client: "Priceoye",
    type: "Influencer & community",
    year: "2026",
    engagement: "UGC and community growth campaign",
    role: "Influencer outreach, content coordination, and management of three Facebook pages",
    title: "“Asli Warranty”",
    emphasis: "Challenge",
    summary: "A user-generated content challenge that turned warranty reassurance into creator stories across three managed Facebook communities.",
    tags: ["UGC", "Influencer outreach", "Community"],
    outcome: "3K+",
    outcomeLabel: "followers gained",
    cover: { src: "/projects/believability-4.png", width: 1366, height: 768, alt: "Facebook community insights showing audience growth", caption: "Community insights supplied with the Asli Warranty campaign materials.", fit: "contain" },
    gallery: [
      { src: "/projects/believability-1.png", width: 1366, height: 768, alt: "Facebook group insights report", caption: "Facebook group insights report.", fit: "contain" },
      { src: "/projects/believability-2.png", width: 1366, height: 768, alt: "Facebook community performance chart", caption: "Facebook community performance chart.", fit: "contain" },
      { src: "/projects/believability-3.png", width: 1366, height: 768, alt: "Facebook group growth analytics", caption: "Facebook group growth analytics.", fit: "contain" },
    ],
    overview: "The Asli Warranty Challenge used real customer and creator voices to make product warranty information more relatable and build trust with online shoppers.",
    challenge: "Warranty claims can feel abstract in a crowded marketplace. The campaign needed to make the promise tangible and encourage people to participate.",
    objective: "Make warranty reassurance feel credible and human by putting customer and creator experiences at the centre of the story.",
    strategy: [
      "Use participant stories and UGC to make the warranty message feel tangible.",
      "Support the campaign with creator outreach and active community publishing.",
      "Keep the message consistent across the three managed Facebook pages.",
    ],
    execution: [
      "Planned an audience-facing UGC challenge around the Asli Warranty idea.",
      "Reached out to influencers and coordinated creator participation.",
      "Managed publishing and conversation across three Facebook communities, then reviewed the available page insights.",
    ],
    deliverables: ["UGC challenge concept", "Influencer outreach", "Creator content coordination", "Three Facebook page activations", "Community performance review"],
    outcomeDetails: ["More than 3,000 followers gained", "Three Facebook pages managed during the campaign", "Creator-led UGC used to support the warranty message"],
    impact: "The campaign contributed to more than 3,000 followers gained. The gallery shows the community insights supplied with the project assets.",
  },
  {
    slug: "tecno-distributor-announcement",
    client: "Priceoye × TECNO",
    type: "PR & media",
    year: "2025",
    engagement: "Distributor announcement and PR outreach",
    role: "Press narrative development and media outreach",
    title: "TECNO",
    emphasis: "Distributor Announcement",
    summary: "Developed the press narrative and media outreach confirming Priceoye as TECNO’s official distributor in Pakistan.",
    tags: ["Public relations", "Media outreach", "Press narrative"],
    outcome: "Official",
    outcomeLabel: "distributor announcement",
    cover: { src: "/projects/content-planning-2.png", width: 356, height: 371, alt: "Priceoye product performance report", caption: "Priceoye reporting material from the supplied folder; the original TECNO announcement artwork was not included.", fit: "contain" },
    gallery: [
      { src: "/projects/content-planning-1.png", width: 1084, height: 601, alt: "Priceoye campaign reporting dashboard", caption: "Priceoye performance report included as supporting context.", fit: "contain" },
    ],
    overview: "A PR initiative announcing Priceoye as TECNO’s official distributor in Pakistan, with messaging designed to communicate the partnership clearly to media and customers.",
    challenge: "A distributor announcement needs to be accurate, easy for media to use, and consistent across the brand and retail channels sharing the news.",
    objective: "Establish a clear, consistent announcement that confirms the official distributor relationship and gives media a useful story to share.",
    strategy: [
      "Lead with the verified distributor relationship and its relevance to customers.",
      "Keep the language clear and factual across press and campaign communication.",
      "Support the announcement with targeted outreach to relevant media contacts.",
    ],
    execution: [
      "Developed the core press narrative for the announcement.",
      "Prepared messaging that could be used consistently across outreach and brand channels.",
      "Coordinated PR outreach to support confirmation of the relationship.",
    ],
    deliverables: ["Press narrative", "Announcement messaging", "Media outreach coordination"],
    outcomeDetails: ["Priceoye confirmed as TECNO’s official distributor", "PR outreach supported the announcement"],
    impact: "The work helped confirm Priceoye as TECNO’s official distributor. The available local project images are Priceoye reporting materials rather than original press release artwork.",
  },
  {
    slug: "fikrfree-jazz-brand-film",
    client: "Jazz Business × Fishbowl Agency",
    type: "Brand film",
    year: "2025",
    engagement: "Digital video concept and production support",
    role: "Creative concepting, copy, storyboarding, and on-set testimonial support",
    title: "FikrFree for Jazz",
    emphasis: "Brand Film",
    summary: "Human-centred DVC concepts for Jazz’s AI insurance platform, from storyboards through on-set testimonial detail.",
    tags: ["DVC", "Storyboarding", "On-set production"],
    outcome: "6",
    outcomeLabel: "Jazz brands",
    cover: { src: "/projects/rox-1.jpg", width: 360, height: 640, alt: "Jazz campaign creative from the supplied project assets", caption: "Related Jazz campaign creative from the supplied project assets; original FikrFree film artwork was not included.", fit: "contain", orientation: "portrait" },
    gallery: [
      { src: "/projects/rox-2.jpg", width: 361, height: 640, alt: "Jazz ROX video still from the supplied campaign assets", caption: "Jazz ROX campaign still from the supplied project folder." },
      { src: "/projects/rox-3.jpg", width: 360, height: 640, alt: "Jazz ROX campaign creative from the supplied project assets", caption: "Jazz ROX campaign creative from the supplied project folder." },
    ],
    overview: "Creative development for FikrFree, Jazz’s AI insurance platform, with a focus on making a new service feel human, understandable, and grounded in real-life needs.",
    challenge: "Explain an emerging insurance offer with a film concept that feels approachable and can be produced authentically.",
    objective: "Translate FikrFree’s AI-powered insurance proposition into a human story, making the benefit understandable without relying on a feature list.",
    strategy: [
      "Begin with a relatable customer concern and build the story around it.",
      "Use testimonial details to make the promise feel specific and believable.",
      "Develop concepts with production realities in mind, from storyboard through filming.",
    ],
    execution: [
      "Created human-centred DVC concepts and supporting copy.",
      "Built storyboards to communicate the narrative and guide production.",
      "Gathered testimonial detail and supported the work on set.",
    ],
    deliverables: ["DVC concepts", "Campaign copy", "Storyboards", "Testimonial detail", "On-set creative support"],
    outcomeDetails: ["Creative work across six Jazz Business brands", "Concept, copy, and testimonial work for FikrFree", "Stories developed with production execution in mind"],
    impact: "The FikrFree work sat within a wider portfolio of assignments across Garaj, ROX, FikrFree, Dealo, SportsX, and Fitflex. Supplied local visuals include related Jazz campaign stills.",
  },
  {
    slug: "saha-climate-platform",
    client: "Saha",
    type: "Research & advocacy",
    year: "2024",
    engagement: "Climate communication and advocacy platform",
    role: "Research-led communication and project support",
    title: "Saha",
    emphasis: "Climate Platform",
    summary: "A climate communication platform connecting research and everyday life, with work supporting the CVF–V20 ahead of COP30.",
    tags: ["Research", "Climate advocacy", "Policy communication"],
    link: { href: "https://sahaclimate.com", label: "sahaclimate.com" },
    outcome: "COP30",
    outcomeLabel: "CVF–V20",
    cover: { src: "/projects/saha-1.png", width: 360, height: 781, alt: "Saha climate platform correspondence about the youth climate communiqué", caption: "Project correspondence around the Youth Climate Communiqué.", fit: "contain", orientation: "portrait" },
    gallery: [
      { src: "/projects/saha-2.png", width: 392, height: 848, alt: "Saha climate platform correspondence and project context", caption: "Additional Saha project correspondence supplied in the local assets.", fit: "contain" },
    ],
    overview: "Saha (sahaclimate.com) works to close the gap between climate research and daily life. The project drew on drought-stress research and the Youth Climate Communiqué through the CVF–V20 ahead of COP30.",
    challenge: "Climate research and policy can be difficult to connect with lived experience. Saha needed a communication approach that could make evidence more accessible and bring youth perspectives into the climate conversation.",
    objective: "Make research and advocacy more understandable to a wider audience, while connecting youth climate perspectives with the CVF–V20 process ahead of COP30.",
    strategy: [
      "Use research as the foundation for the communication, including drought-stress context.",
      "Connect evidence to the everyday realities of communities affected by climate change.",
      "Bring the Youth Climate Communiqué into the wider CVF–V20 advocacy conversation.",
    ],
    execution: [
      "Supported communication for the Saha climate platform.",
      "Worked with research and advocacy material to shape accessible project messaging.",
      "Contributed to work around the Youth Climate Communiqué in the lead-up to COP30.",
    ],
    deliverables: ["Research-led platform messaging", "Climate advocacy communication", "Youth Climate Communiqué support"],
    outcomeDetails: ["Saha platform: sahaclimate.com", "Research and communication around drought stress", "Youth Climate Communiqué work through CVF–V20 ahead of COP30"],
    impact: "The project brought research and advocacy into the same communication effort. Supplied project images show correspondence around the Youth Climate Communiqué.",
  },
];

