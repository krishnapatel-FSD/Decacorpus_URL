# Master content datasets matching prototype JS arrays verbatim

SERVICES_DATA = [
    {
        "id": 0,
        "name": "Web Development",
        "short_line": "Modern websites engineered for performance, conversion and scale.",
        "chip_label": "Website",
        "overview": "Web development as an end-to-end process of designing, building and maintaining sites and web apps, with a focus on business goals, high-performance architecture and good user experience.",
        "list_1_title": "Core areas",
        "list_1_items": [
            "Front-end: HTML, CSS, JavaScript, React, Next.js, Tailwind.",
            "Back-end: servers, databases and APIs with Node.js, Python, PostgreSQL, MongoDB.",
            "Full-stack: CI/CD, automated testing, observability."
        ],
        "list_2_title": "Trends",
        "list_2_items": [
            "Headless architecture",
            "UI/UX tied to conversion and accessibility",
            "Core Web Vitals, SEO and mobile-first work",
            "Progressive Web Apps"
        ],
        "pull_quote": "The digital front door for brand trust, engagement and ROI.",
        "key_features": ["High Performance", "SEO Optimized", "Responsive Design", "Dynamic Content"],
        "technologies": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"]
    },
    {
        "id": 1,
        "name": "Software Development",
        "short_line": "Custom software systems designed around your unique business processes.",
        "chip_label": "Software",
        "overview": "Scalable, secure, maintainable systems that solve complex business problems, fitted to existing operations.",
        "list_1_title": "Core areas",
        "list_1_items": [
            "Enterprise architecture: backends that handle high transaction volumes.",
            "System integration: connecting legacy software and third-party APIs.",
            "Custom workflows: logic built around your business rules."
        ],
        "list_2_title": "Principles",
        "list_2_items": [
            "Scalability first: clean, modular code",
            "Security by design: encryption, access control at every layer",
            "Agile delivery in iterative cycles"
        ],
        "pull_quote": "From internal management tools to operational systems, a foundation to scale on.",
        "key_features": ["Custom Architecture", "API Integration", "Enterprise Security", "Modular Codebase"],
        "technologies": ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"]
    },
    {
        "id": 2,
        "name": "SaaS Systems",
        "short_line": "From MVP to scalable SaaS infrastructure.",
        "chip_label": "SaaS product",
        "overview": "SaaS needs multi-tenant architecture, subscription billing, and a strong focus on onboarding and retention.",
        "list_1_title": "Lifecycle",
        "list_1_items": [
            "MVP development: core value first, validated with real users.",
            "Multi-tenant architecture: isolated customer data on one codebase.",
            "Billing: Stripe or Paddle for recurring, usage-based and tiered plans."
        ],
        "list_2_title": "Components",
        "list_2_items": [
            "Onboarding flows that lower churn",
            "Cloud-native auto-scaling infrastructure",
            "Admin dashboards for system health, users and revenue"
        ],
        "pull_quote": "Aimed at new products and at companies moving from on-premise to cloud.",
        "key_features": ["Multi-tenant Architecture", "Subscription Billing", "Admin Dashboards", "Analytics"],
        "technologies": ["Next.js", "Node.js", "Stripe", "PostgreSQL", "AWS"]
    },
    {
        "id": 3,
        "name": "CRM Systems",
        "short_line": "Intelligent pipelines and operational networks.",
        "chip_label": "CRM",
        "overview": "CRMs as the “central nervous system” of sales and support. A custom CRM is an alternative when Salesforce or HubSpot are too rigid or expensive.",
        "list_1_title": "Why custom",
        "list_1_items": [
            "Perfect fit: matches your pipeline without bloat.",
            "Data ownership: no vendor lock-in.",
            "Cost efficiency: no per-user licence fees as teams grow."
        ],
        "list_2_title": "Features",
        "list_2_items": [
            "Automated lead routing, stage progression and forecasting",
            "Communication hubs for Gmail/Outlook, VoIP and SMS",
            "Custom reporting dashboards"
        ],
        "pull_quote": "A CRM that drives sales and retention by removing admin work.",
        "key_features": ["Custom Pipelines", "Email/VoIP Integration", "Automated Workflows", "Custom Analytics"],
        "technologies": ["React", "Node.js", "GraphQL", "PostgreSQL", "SendGrid/Twilio"]
    },
    {
        "id": 4,
        "name": "AI & Automation",
        "short_line": "Intelligent workflows that reduce repetitive work.",
        "chip_label": "AI or automation",
        "overview": "AI as a practical tool for operational efficiency: models and automation logic that replace repetitive tasks.",
        "list_1_title": "Capabilities",
        "list_1_items": [
            "LLMs: GPT-4, Claude and open-source models for chatbots, document analysis and content tools.",
            "Workflow automation: API integrations and webhooks.",
            "Predictive analytics: forecasting trends, inventory and customer behaviour."
        ],
        "list_2_title": "Applications",
        "list_2_items": [
            "Automated customer support from a proprietary knowledge base",
            "Data extraction from invoices, receipts and forms",
            "Personalisation engines"
        ],
        "pull_quote": "Teams stop doing robotic tasks and focus on creative problem-solving.",
        "key_features": ["LLM Integration", "Workflow Automation", "Predictive Modeling", "OCR"],
        "technologies": ["Python", "OpenAI API", "LangChain", "TensorFlow", "Node.js"]
    },
    {
        "id": 5,
        "name": "Mobile Experiences",
        "short_line": "Native and cross-platform mobile architecture.",
        "chip_label": "Mobile app",
        "overview": "Native-feeling apps for iOS and Android that combine design with solid performance.",
        "list_1_title": "Approaches",
        "list_1_items": [
            "Cross-platform: mainly React Native, one codebase for both platforms.",
            "PWAs: installable from the browser with no app store."
        ],
        "list_2_title": "Capabilities",
        "list_2_items": [
            "Offline support with automatic sync",
            "Camera, GPS, FaceID/TouchID and push notifications",
            "Memory management, 60fps animation and low battery use"
        ],
        "pull_quote": "Mobile experiences that users love to keep on their home screens.",
        "key_features": ["Cross-Platform", "Offline Support", "Push Notifications", "Biometrics"],
        "technologies": ["React Native", "Expo", "iOS/Swift", "Android/Kotlin", "Firebase"]
    },
    {
        "id": 6,
        "name": "Digital Products",
        "short_line": "End-to-end product design and engineering.",
        "chip_label": "Digital product",
        "overview": "Partnering with ambitious brands and funded startups to launch new digital products, from strategy to deployment.",
        "list_1_title": "Lifecycle",
        "list_1_items": [
            "Strategy and scoping: vision, MVP priorities, technical roadmap.",
            "UI/UX design: wireframes, prototypes, design systems.",
            "Full-cycle engineering: frontend, backend and cloud."
        ],
        "list_2_title": "Why partner",
        "list_2_items": [
            "Design and engineering stay in sync with no handoff friction",
            "Fast time to market",
            "Foundations that scale so the MVP is not thrown away"
        ],
        "pull_quote": "From consumer apps to enterprise tools, bold ideas turned into engineered products.",
        "key_features": ["Product Strategy", "UI/UX Design", "Prototyping", "Full-Stack Engineering"],
        "technologies": ["Figma", "React", "Next.js", "Node.js", "Cloud Infrastructure"]
    }
]

PROCESS_STEPS = [
    {"step": "01", "name": "Idea", "description": "Define the problem, the opportunity and what success should mean."},
    {"step": "02", "name": "Structure", "description": "Map business logic, user journeys and the system architecture."},
    {"step": "03", "name": "Design", "description": "Make complexity understandable through considered interfaces."},
    {"step": "04", "name": "Build", "description": "Engineer, integrate and test the product as one connected system."},
    {"step": "05", "name": "Launch", "description": "Prepare the release, refine the details and support the handover."},
    {"step": "06", "name": "Evolve", "description": "Learn from use and improve the system as the business changes."}
]

ARTICLES_DATA = [
    {
        "id": 0,
        "title": "Why Business Software Is Changing",
        "meta": "AI / 5 min",
        "excerpt": "From rigid tools to adaptive systems: how AI can reshape the way business software understands context and supports decisions.",
        "filter_key": "ai",
        "card_label": "Intelligence / in context",
        "image_url": "/assets/images/insight-card-1-ai.jpg"
    },
    {
        "id": 1,
        "title": "The Death of the Dashboard",
        "meta": "Design / 8 min",
        "excerpt": "More charts do not always mean more clarity. A look at interfaces that help people act, rather than simply watch.",
        "filter_key": "design",
        "card_label": "Less noise / more signal",
        "image_url": "/assets/images/insight-card-2-design.jpg"
    }
]
