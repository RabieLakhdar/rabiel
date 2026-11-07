export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  x: string;
  xHandle: string;
  email: string;
  mailto: string;
}

export interface ProofItem {
  value: string;
  label: string;
  fullText: string;
}

export interface EngineeringPillar {
  id: string;
  title: string;
  description: string;
  iconKey: 'mobile' | 'fullstack' | 'security' | 'leadership';
  tags: string[];
}

export interface SkillGroup {
  id: 'mobile' | 'frontend' | 'backend' | 'leadership';
  category: string;
  skills: string[];
}

export interface TShapedDimension {
  id: string;
  axisLabel: string;
  title: string;
  description: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface CaseStudy {
  id: string;
  indexLabel: string;
  title: string;
  context: string;
  confidentialityBadge?: string;
  challenge: string;
  architectureOwnership: string;
  stack: string[];
  externalLink?: {
    label: string;
    url: string;
  };
}

export interface InsightSectionPoint {
  heading: string;
  detail: string;
}

export interface EngineeringInsight {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  topics: string[];
  breakdown: InsightSectionPoint[];
  keyTakeaway: string;
}

export interface Testimonial {
  id: string;
  initials: string;
  quote: string;
  authorName: string;
  authorRole: string;
  highlightTag: string;
  linkedinUrl: string;
}

export interface RecruiterQuickFact {
  id: 'roles' | 'arrangement' | 'location' | 'languages';
  label: string;
  value: string;
}

export const resumeConfig = {
  /**
   * Flip `hasStaticResumePdf` to `true` once a valid PDF file is placed at `public/resume.pdf`.
   * - `true`: "Download CV" / "Resume" buttons download `/resume.pdf` directly as
   *   `Rabie_Lakhdar_Senior_React_Native_FullStack_CV.pdf`.
   * - `false`: Buttons open the print-optimized Resume Preview Modal ("Print / Save as PDF")
   *   so visitors never encounter a broken or truncated PDF download.
   */
  hasStaticResumePdf: false,
  staticPdfPath: '/resume.pdf',
  downloadFileName: 'Rabie_Lakhdar_Senior_React_Native_FullStack_CV.pdf',
} as const;

export const portfolioData = {
  site: {
    domain: 'rabiel.dev',
    url: 'https://rabiel.dev',
    copyrightText: '© 2026 Rabie Lakhdar • rabiel.dev',
  },

  profile: {
    name: 'Rabie Lakhdar',
    monogram: 'RL',
    title: 'Senior React Native & Full-Stack TypeScript Engineer',
    schemaJobTitle: 'Senior React Native & Full-Stack Engineer',
    currentRole: 'Senior Consultant',
    currentCompany: 'Maltem Africa',
    yearsOfExperience: '10+',
    shippedProductsCount: '15+',
    locationCity: 'Casablanca, Morocco',
    timezone: 'GMT',
    timezoneDetail:
      'Casablanca, Morocco (GMT — full workday overlap with UK & Europe, morning overlap with US East)',
    targetRegions: 'Europe, the UK, and North America',
    targetRolesSummary:
      'Senior React Native Engineer • Lead Mobile Developer • Senior Full-Stack Engineer (TypeScript / React / Node.js)',
    workArrangement:
      '100% Remote Worldwide (Full-Time via EOR such as Deel / Remote.com, or Long-Term B2B Contractor)',
    spokenLanguages: [
      { language: 'English', proficiency: 'Full Professional' },
      { language: 'French', proficiency: 'Bilingual' },
      { language: 'Arabic', proficiency: 'Native' },
    ],
    languagesSummary: 'English (Full Professional) • French (Bilingual) • Arabic (Native)',
    shortBio:
      'T-shaped Senior React Native & Full-Stack TypeScript Engineer with 10+ years of experience delivering secure, high-availability Mobile (iOS & Android) and Web applications across Banking, FinTech, Insurance, and SaaS.',
  },

  socials: {
    github: 'https://github.com/RabieLakhdar',
    linkedin: 'https://www.linkedin.com/in/rabie-lakhdar',
    x: 'https://x.com/rabiel_dev',
    xHandle: '@rabiel_dev',
    email: 'hello@rabiel.dev',
    mailto: 'mailto:hello@rabiel.dev',
  } satisfies SocialLinks,

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  footerNavigation: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  hero: {
    availabilityBadge:
      'Available for International Remote Roles • GMT (Full UK & EU Overlap)',
    eyebrow: 'Rabie Lakhdar • Senior Consultant at Maltem Africa',
    headline: 'Senior React Native & Full-Stack TypeScript Engineer',
    subheadline:
      '10+ years architecting and shipping high-trust Mobile (iOS & Android) and Full-Stack Web applications for Banking, Insurance, and SaaS teams.',
    ctas: {
      primary: {
        label: 'View Case Studies',
        href: '#work',
      },
      secondary: {
        label: 'Get in Touch',
        href: '#contact',
      },
      resume: {
        labelWhenPreview: 'View / Download CV',
        labelWhenStaticPdf: 'Download CV',
      },
    },
    proofStrip: [
      {
        value: '10+ Years',
        label: 'Experience',
        fullText: '10+ Years Experience',
      },
      {
        value: '15+ Production',
        label: 'Products',
        fullText: '15+ Production Products',
      },
      {
        value: 'iOS, Android & Web',
        label: 'Cross-Platform Delivery',
        fullText: 'iOS, Android & Web',
      },
      {
        value: 'GMT',
        label: 'Casablanca Timezone',
        fullText: 'GMT Timezone',
      },
    ] satisfies ProofItem[],
  },

  pillars: [
    {
      id: 'mobile-architecture',
      title: 'Cross-Platform Mobile Architecture',
      description:
        'React Native, TypeScript, New Architecture (JSI, Fabric, TurboModules), Expo, Native iOS/Android, App Store & Google Play CI/CD.',
      iconKey: 'mobile',
      tags: [
        'React Native',
        'TypeScript',
        'JSI / Fabric / TurboModules',
        'Expo',
        'Native iOS & Android',
        'Store CI/CD',
      ],
    },
    {
      id: 'fullstack-web-apis',
      title: 'Full-Stack Web & APIs',
      description:
        'React.js, Next.js, Vue.js, Atomic Design systems, Node.js, Express, GraphQL, REST APIs, MongoDB, Elasticsearch, AWS.',
      iconKey: 'fullstack',
      tags: [
        'React.js & Next.js',
        'Vue.js',
        'Atomic Design',
        'Node.js & Express',
        'GraphQL & REST',
        'MongoDB • Elasticsearch • AWS',
      ],
    },
    {
      id: 'regulated-delivery',
      title: 'Regulated Banking & Insurance Delivery',
      description:
        'Security-first mobile & web flows, resilient authentication & fallback UX (e-KYC / OTP / NFC), high availability.',
      iconKey: 'security',
      tags: [
        'Banking & FinTech',
        'Insurance Workflows',
        'e-KYC / OTP / NFC',
        'Resilient Auth & Fallbacks',
        'High Availability',
      ],
    },
    {
      id: 'technical-leadership',
      title: 'Technical Leadership & Velocity',
      description:
        'Clean Architecture, performance tuning, code reviews, and mentoring developers in Agile/Scrum squads.',
      iconKey: 'leadership',
      tags: [
        'Clean Architecture',
        'Performance Tuning',
        'Code Reviews',
        'Developer Mentoring',
        'Agile / Scrum Squads',
      ],
    },
  ] satisfies EngineeringPillar[],

  /**
   * Selected Work & Case Studies (#work)
   * Formatted around Challenge -> Architecture & Ownership -> Tech Stack.
   * Zero invented metrics; confidential enterprise client names omitted per NDA.
   */
  work: {
    eyebrow: 'Selected Work & Case Studies',
    heading: 'Architecture & Ownership Across Regulated & Real-Time Products',
    subheading:
      'NDA-safe engineering breakdowns highlighting technical challenges, system architecture, and end-to-end delivery across 15+ shipped mobile and web applications.',
  },

  caseStudies: [
    {
      id: 'enterprise-banking-insurance',
      indexLabel: '01',
      title: 'Enterprise Banking & Insurance Mobile Platforms',
      context: 'Consulting via Maltem Africa',
      confidentialityBadge: 'NDA-Safe Regulated Summary',
      challenge:
        'Delivering modern customer mobile and web journeys under strict financial/insurance security, compliance, and device-compatibility requirements.',
      architectureOwnership:
        'Cross-platform React Native & TypeScript architecture, resilient authentication and fallback UX flows, reusable Atomic Design UI systems, and GraphQL/REST integration across iOS and Android.',
      // [TODO: Optionally add non-confidential verified metrics here later, e.g. crash-free session rate or release cadence]
      stack: [
        'React Native',
        'TypeScript',
        'React.js',
        'Node.js',
        'GraphQL',
        'Mobile Security',
        'iOS & Android',
      ],
    },
    {
      id: 'fullstack-saas-enterprise',
      indexLabel: '02',
      title: 'Full-Stack SaaS & Internal Enterprise Platforms',
      context: 'End-to-End Web, API & Cloud Delivery',
      confidentialityBadge: 'Production Multi-Role Systems',
      challenge:
        'Designing and scaling multi-role web applications and backend services from initial architecture to production release.',
      architectureOwnership:
        'End-to-end delivery across React/Next.js frontends and Node.js/Express APIs, search and data modeling with MongoDB & Elasticsearch, AWS cloud deployment, and developer mentorship.',
      // [TODO: Optionally add verified API throughput, search latency, or squad size metrics here later]
      stack: [
        'TypeScript',
        'Next.js',
        'React.js',
        'Node.js',
        'Express',
        'MongoDB',
        'Elasticsearch',
        'AWS',
      ],
    },
    {
      id: 'huna-pilgrim-safety-app',
      indexLabel: '03',
      title: 'Huna — Smart Pilgrim Tracking & Safety Mobile App',
      context: 'Hajj Hackathon, Jeddah — Guinness World Record Event',
      challenge:
        'Real-time geolocation tracking, navigation, and group safety coordination for pilgrims in ultra-high-density environments.',
      architectureOwnership:
        'Built complex real-time React Native mobile interfaces and mapping flows in 36 hours alongside engineers from 100+ countries.',
      externalLink: {
        label: 'View Project on Devpost',
        url: 'https://devpost.com/software/huna',
      },
      stack: ['React Native', 'Geolocation', 'Real-Time Mobile UX', 'iOS & Android'],
    },
  ] satisfies CaseStudy[],

  /**
   * About & Technical Stack (#about) — T-Shaped Senior Engineering Narrative
   */
  about: {
    badge: 'About & Technical Stack',
    heading: 'T-Shaped Senior Engineering: Mobile Depth Meets Full-Stack Execution',
    lead: 'Over 10+ years shipping 15+ production products—currently as a Senior Consultant at Maltem Africa—I combine deep specialist mastery in React Native mobile engineering with pragmatic full-stack TypeScript execution across web, APIs, and cloud infrastructure.',
    body: 'That T-shaped profile lets me own critical features end-to-end without handoff friction: from native iOS/Android runtime nuances and resilient e-KYC/NFC flows, up through React/Next.js design systems, Node.js/GraphQL backends, and AWS CI/CD pipelines. Based in Casablanca (GMT) and fluent in English, French, and Arabic, I partner seamlessly with product and engineering squads across Europe, the UK, and North America.',
    tShapedDimensions: [
      {
        id: 'vertical-depth',
        axisLabel: 'Vertical Depth • Mobile Core',
        title: 'Deep React Native & Native Runtime Mastery',
        description:
          'Complex gesture/real-time UIs, New Architecture (JSI, Fabric, TurboModules), Xcode & Android Studio native debugging, and end-to-end App Store & Google Play release ownership.',
      },
      {
        id: 'horizontal-breadth',
        axisLabel: 'Horizontal Breadth • Full-Stack TypeScript',
        title: 'Web Frontends, APIs & Search Infrastructure',
        description:
          'Shared TypeScript contracts across React.js, Next.js, and Vue.js frontends paired with Node.js, Express, GraphQL/REST services, MongoDB, Elasticsearch, Docker, and AWS.',
      },
      {
        id: 'product-judgment',
        axisLabel: 'Domain & Squad Impact • Regulated Delivery',
        title: 'Banking, Insurance & SaaS Product Judgment',
        description:
          'Security-conscious architecture, graceful degradation for real-world devices, actionable code reviews, and hands-on mentorship inside Agile/Scrum squads.',
      },
    ] satisfies TShapedDimension[],
  },

  /**
   * Recruiter-scannable Technical Stack Categories
   */
  skills: [
    {
      id: 'mobile',
      category: 'Mobile',
      skills: [
        'React Native',
        'TypeScript',
        'JavaScript (ES6+)',
        'Expo',
        'JSI / Fabric / TurboModules',
        'iOS (Xcode)',
        'Android Studio',
        'App Store & Google Play Releases',
      ],
    },
    {
      id: 'frontend',
      category: 'Frontend',
      skills: [
        'React.js',
        'Next.js',
        'Vue.js',
        'Redux / React Query',
        'Tailwind CSS',
        'Design Systems',
      ],
    },
    {
      id: 'backend',
      category: 'Backend & Cloud',
      skills: [
        'Node.js',
        'Express.js',
        'GraphQL',
        'REST APIs',
        'MongoDB',
        'Elasticsearch',
        'AWS',
        'Docker',
        'CI/CD',
      ],
    },
    {
      id: 'leadership',
      category: 'Leadership',
      skills: [
        'Mobile & System Architecture',
        'Technical Mentorship',
        'Code Reviews',
        'Performance Optimization',
        'Agile / Scrum',
      ],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      id: 'maltem-africa',
      role: 'Senior Consultant — React Native & Full-Stack TypeScript Engineer',
      company: 'Maltem Africa',
      // [TODO: Add exact start year/month at Maltem Africa, e.g. "2022 – Present"]
      period: 'Current • Senior Consulting',
      location: 'Casablanca, Morocco • GMT',
      summary:
        'Leading mobile and full-stack TypeScript delivery for regulated Banking, Insurance, and enterprise SaaS engagements across distributed Agile/Scrum squads.',
      highlights: [
        'Architected and shipped React Native (iOS & Android) and React/Next.js applications with security-first authentication and resilient fallback journeys (e-KYC, OTP, NFC).',
        'Established Clean Architecture boundaries, shared Atomic Design component libraries, and automated App Store / Google Play CI/CD pipelines.',
        'Conducted architectural reviews, performance profiling, and hands-on mentoring for mid-level and junior engineers.',
        // [TODO: Optionally add verified engagement metric, e.g. crash-free rate or release cadence]
      ],
      stack: [
        'React Native',
        'TypeScript',
        'React.js',
        'Next.js',
        'Node.js',
        'GraphQL',
        'REST APIs',
      ],
    },
    {
      id: 'prior-mobile-fullstack',
      role: 'Full-Stack JavaScript & Mobile Engineer',
      company: 'Banking, Insurance & SaaS Product Deliveries',
      // [TODO: Replace with exact prior employer names and dates from your CV when ready]
      period: '10+ Years Total Career Progression',
      location: 'Mobile (iOS & Android) & Full-Stack Web',
      summary:
        'Delivered 15+ production mobile and web products end-to-end across financial services, insurance workflows, and commercial SaaS platforms.',
      highlights: [
        'Built full-stack web applications and APIs with React.js, Next.js, Vue.js, Node.js, Express.js, GraphQL, MongoDB, Elasticsearch, Docker, and AWS.',
        'Delivered cross-platform mobile apps from initial architecture through Xcode / Android Studio native configuration, store submission, and iterative production releases.',
        // [TODO: Optionally add verified latency, search indexing, or onboarding metrics]
      ],
      stack: [
        'React Native',
        'React.js',
        'Vue.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Elasticsearch',
        'AWS',
      ],
    },
  ] satisfies ExperienceEntry[],

  /**
   * Engineering Insights (#insights) — Expandable Senior Architectural Notes
   */
  insightsSection: {
    eyebrow: 'Engineering Insights',
    heading: 'Architectural Notes from Real-World Mobile Production',
    subheading:
      'Field lessons from shipping regulated authentication journeys and high-performance React Native runtimes across diverse iOS and Android fleets.',
    discussCtaLabel: 'Discuss on LinkedIn',
  },

  insights: [
    {
      id: 'hardware-bound-auth-fallbacks',
      category: 'Regulated Mobile Architecture & Release Resilience',
      title: 'Why Hardware-Bound Mobile Auth (NFC / e-ID) Fails Without Graceful OTP Fallbacks',
      subtitle:
        'Lessons from enterprise & public-sector apps on device fragmentation, phased rollouts, rollback strategies, and protecting App Store ratings.',
      topics: [
        'NFC / e-ID',
        'OTP Fallback UX',
        'Device Fragmentation',
        'Phased Rollouts',
        'Store Rating Protection',
      ],
      breakdown: [
        {
          heading: '1. Device Fragmentation Breaks Lab Assumptions',
          detail:
            'In enterprise banking and public-sector rollouts, NFC chip reading depends on varying OEM antenna placements, protective phone cases, OS background tag-reading quirks, and physical wear on national e-ID cards. Treating hardware-bound verification as the sole happy path locks legitimate users out on edge-case Android and older iOS devices.',
        },
        {
          heading: '2. Explicit State Machines & Zero-Dead-End Fallback UX',
          detail:
            'Resilient onboarding models authentication as a deterministic state machine: capability pre-check -> bounded NFC scan attempt with clear visual positioning cues -> automatic transition to verified OTP / alternative step-up verification after threshold timeouts or hardware errors, preserving user progress without restarting the session.',
        },
        {
          heading: '3. Phased Rollouts, Remote Kill-Switches & Store Rating Defense',
          detail:
            'Hardware-dependent releases require remote feature flags, staged percentage rollouts on Google Play and App Store Connect, and privacy-safe step-funnel telemetry. When an OS update or specific handset family spikes NFC failure rates, decoupling fallback routing via server-driven config enables instant mitigation without waiting on mobile store review cycles.',
        },
      ],
      keyTakeaway:
        'Security and conversion are not opposites: pairing strict cryptographic hardware checks with deterministic, audited OTP fallback paths protects both compliance posture and App Store ratings.',
    },
    {
      id: 'react-native-new-architecture-practice',
      category: 'React Native Runtime & Performance Engineering',
      title: "React Native's New Architecture in Practice: JSI, Fabric & TurboModules",
      subtitle:
        'How direct JS-to-native runtime communication eliminates legacy bridge bottlenecks for high-performance mobile apps.',
      topics: [
        'JSI (JavaScript Interface)',
        'Fabric Renderer',
        'TurboModules',
        'Codegen & TypeScript',
        '60/120fps Mobile UX',
      ],
      breakdown: [
        {
          heading: '1. Eliminating Legacy Bridge Serialization Overhead',
          detail:
            'Under the legacy architecture, every JS-to-native interaction serialized JSON payloads asynchronously across a queued bridge—creating contention during high-frequency scroll events, complex gesture animations, or synchronous cryptographic/biometric checks. JSI replaces that bottleneck with C++ Host Objects, allowing JavaScript to hold direct references to native methods and invoke them synchronously or asynchronously without JSON marshaling.',
        },
        {
          heading: '2. Unified Rendering with Fabric & Lazy Startup via TurboModules',
          detail:
            'Fabric moves shadow-tree management into shared C++ core layers, enabling synchronous layout measurement, concurrent React rendering features, and smoother cross-platform UI parity. Meanwhile, TurboModules shift native module initialization from eager app-launch loading to lazy on-demand instantiation—directly reducing cold-start overhead on mid-tier Android devices.',
        },
        {
          heading: '3. Pragmatic Adoption Strategy in Production Squads',
          detail:
            'Migrating live enterprise apps succeeds incrementally: enforce strict TypeScript specs with Codegen for custom native bindings, audit third-party native libraries for New Architecture compatibility in isolated Xcode and Android Studio builds, and benchmark startup and frame-timing metrics before enabling across production release tracks.',
        },
      ],
      keyTakeaway:
        'The New Architecture turns React Native from a bridged wrapper into a first-class direct-runtime platform—rewarding engineers who understand both TypeScript abstractions and native iOS/Android internals.',
    },
  ] satisfies EngineeringInsight[],

  /**
   * Verified LinkedIn Recommendations ("What Colleagues Say")
   */
  testimonialsSection: {
    eyebrow: 'Verified LinkedIn Recommendations',
    heading: 'What Colleagues Say',
    subheading:
      'Feedback from engineers and collaborators across enterprise consulting at Maltem Africa and international mobile hackathons.',
    verifyLabel: 'View Recommendations on LinkedIn',
  },

  testimonials: [
    {
      id: 'ismail-ghallou',
      initials: 'IG',
      quote:
        'I had the pleasure of working with Rabie at Maltem Africa on an internal product. Rabie impressed me with his ability to handle both the backend and frontend aspects of the project seamlessly... His ability to juggle multiple tasks and meet deadlines while maintaining the quality of his work was truly remarkable.',
      authorName: 'Ismail Ghallou',
      authorRole: 'Colleague at Maltem Africa',
      highlightTag: 'Full-Stack Delivery & Reliability',
      linkedinUrl: 'https://www.linkedin.com/in/rabie-lakhdar',
    },
    {
      id: 'ayoub-ouaantar',
      initials: 'AO',
      quote:
        "We collaborated on several projects and attended the Hajj Hackathon together. I was impressed by Rabie's ability to deal with the toughest interfaces fluently—interfaces that often take days to develop in React Native came effortlessly to him.",
      authorName: 'Ayoub Ouaantar',
      authorRole: 'Software Engineer & Hackathon Collaborator',
      highlightTag: 'React Native UI Mastery & Speed',
      linkedinUrl: 'https://www.linkedin.com/in/rabie-lakhdar',
    },
  ] satisfies Testimonial[],

  /**
   * Contact & Recruiter Quick-Facts Hub (#contact)
   */
  contact: {
    badge: 'Recruiter Hub & Direct Contact',
    heading: 'Hiring Logistics & Direct Inquiry',
    subheading:
      'Everything international recruiters, hiring managers, and CTOs need upfront—paired with direct email or instant message delivery.',
    quickFactsHeading: 'Recruiter & Hiring Quick-Facts',
    quickFactsBadge: 'Immediate Screening Answers',
    quickFacts: [
      {
        id: 'roles',
        label: 'Target Roles',
        value:
          'Senior React Native Engineer • Lead Mobile Developer • Senior Full-Stack Engineer (TypeScript / React / Node.js)',
      },
      {
        id: 'arrangement',
        label: 'Work Arrangement',
        value:
          '100% Remote Worldwide (Full-Time via EOR such as Deel / Remote.com, or Long-Term B2B Contractor)',
      },
      {
        id: 'location',
        label: 'Location & Timezone',
        value:
          'Casablanca, Morocco (GMT — full workday overlap with UK & Europe, morning overlap with US East)',
      },
      {
        id: 'languages',
        label: 'Languages',
        value: 'English (Full Professional) • French (Bilingual) • Arabic (Native)',
      },
    ] satisfies RecruiterQuickFact[],
  },
} as const;
