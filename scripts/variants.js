/**
 * variants.js — dynamic resume scoping.
 * Loads BETWEEN data.js and main.js. Reads ?v=<scope> from the URL and merges
 * the matching variant over the base RESUME_DATA before main.js renders it.
 * No ?v= (or unknown scope) => base resume (public default). Every scope, base included, gets the spoken-languages skills line.
 *
 * Add a new scope = add one entry to RESUME_VARIANTS. No DOM edits, no commenting.
 * Work bullets are keyed by start_date (unique per role) to avoid company-name collisions.
 *
 * Scopes: fde · fullstack · ai-platform · fintech-regtech
 */
(function () {
  const KETCHUP = 'October 2025';
  const BYTEDANCE = 'December 2023';
  const PIXIUM = 'March 2021';
  const INTERN = 'September 2020';

  const RESUME_VARIANTS = {
    // ---------------------------------------------------------------- AI-Native Full-Stack (design + AI-agent execution, product/full-stack roles)
    'ai-native': {
      title: 'Senior Full-Stack Engineer | AI-Native Delivery, React & Distributed Systems',
      headline: 'Designs the system, orchestrates AI coding agents to build it, and owns quality through review and verification',
      summary: 'Full-stack engineer with 5+ years building cloud-native SaaS and platform products, working <b>AI-native</b>: I design the system, orchestrate AI coding agents to build it, and own quality through <b>AI code review, test generation, and verification gates</b>. At <b>Ketchup AI</b> I own the <b>React/Next.js</b> frontend and the integration layer behind the AI agents of an LLM-powered compliance SaaS, taken from zero to presales-ready with pilot agreements in the contract pipeline at <b>Tier-1 Singapore banks</b>. At <b>ByteDance</b> I built event-driven backend services and reusable frameworks on an internal PaaS for <b>180,000+ employees</b>, cutting latency over <b>50%</b> at <b>99.95% uptime</b>, and mentored engineers as the cross-functional liaison between business and engineering. Certified in <b>Data Science and Machine Learning (MIT-IDSS)</b>, reading a <b>part-time BIT at NUS</b>.',
      skills: [
        { category: 'AI-Native Delivery', skills: ['Claude Code', 'Agent orchestration', 'AI code review', 'AI test generation', 'Generative AI', 'LLM agents', 'RAG'] },
        { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'SQL', 'Bash'] },
        { category: 'Frameworks & Backend', skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Event-driven services', 'Message queues'] },
        { category: 'Cloud & Data', skills: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'PostgreSQL', 'MySQL', 'NoSQL (Redis, Firebase)'] },
        { category: 'Testing & Observability', skills: ['Vitest', 'Playwright', 'Jest', 'Grafana'] },
        { category: 'Delivery & Collaboration', skills: ['Cross-functional delivery', 'Stakeholder management', 'Requirements analysis', 'Pre-sales demos', 'Agile / Scrum'] },
      ],
      work_bullets: {
        [KETCHUP]: [
          '<b>Took an LLM-powered compliance SaaS from zero to presales-ready</b>, owning the <b>React/Next.js</b> frontend and the integration layer behind its AI agents; product quality advanced pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks and a regional insurer</b>',
          '<b>Ran AI-native delivery</b>: designed each feature and owned review and verification while AI coding agents (Claude Code) built it, using custom skills, hooks, and quality gates for <b>AI code review, test generation, and root-cause diagnosis</b>',
          'Built <b>AI voice-to-form auto-fill</b> on LLM agents and designed a <b>compliance-detection engine</b> with sentence-level traceability to audio transcripts, automating mis-selling detection with severity triage and human-in-the-loop review',
          'Shipped <b>enterprise OAuth</b> (Microsoft, Google, LinkedIn, Apple via PKCE) and a <b>multi-region</b> rollout across Singapore, Taiwan, and Malaysia with locale propagation to backend AI agents',
        ],
        [BYTEDANCE]: [
          'Built <b>event-driven backend services</b> on the internal <b>Feishu App Engine PaaS</b> (serverless functions in Node.js, Go, and Java, message queues, Redis caching), cutting latency over <b>50%</b> at <b>99.95% uptime</b> for large-scale transactional workloads',
          '<b>Architected enterprise platforms</b> for HR, finance, insurance, and legal serving <b>180,000+ global employees</b>, at nearly <b>67% lower cost</b> than traditional development and saving <b>600-800 man-hours monthly per project</b>',
          '<b>Built reusable low-code frameworks and self-service modules</b> for faster feature rollout and integration, cutting project delivery timelines <b>40-50%</b>',
          '<b>Drove requirements and solution design</b> as the cross-functional liaison between business stakeholders and engineering, with adoption above <b>75%</b>, and <b>mentored engineers</b> on system design, lifting delivery speed up to <b>30%</b>',
        ],
        [PIXIUM]: [
          '<b>Led full-stack delivery</b> in <b>JavaScript/TypeScript/React</b>, Elixir/Phoenix, and PHP/Yii2, hitting <b>100% on-time delivery</b> across client engagements',
          '<b>Optimised PostgreSQL/MySQL schemas and queries</b>, lifting analytics dashboard performance <b>62.5%</b>',
          '<b>Automated deployments (CI/CD) with Terraform and Docker</b>, speeding environment setup and releases <b>80%</b> and cutting downtime <b>70%</b>',
          '<b>Mentored junior engineers</b> through code review on architecture and coding practices, reducing bugs by nearly <b>30%</b>',
        ],
      },
    },

    // ---------------------------------------------------------------- Tomoro: Senior Applied AI Solution Engineer (Python + GenAI, senior/consultancy)
    tomoro: {
      title: 'Senior Applied AI Engineer | Python, LLM Agents & GenAI',
      headline: 'Builds production GenAI in Python: LLM agents, RAG, and evaluation, shipped 0-to-1 with enterprise clients',
      summary: '<b>Applied AI engineer building production GenAI in Python</b>, with 5+ years shipping enterprise software. At <b>Ketchup AI</b> I ship <b>LLM agents, RAG, and evaluation</b> in <b>Python and TypeScript</b>, powering voice-to-form extraction and a compliance-detection engine that I took 0-to-1 to presales with <b>Tier-1 Singapore banks</b> and a regional insurer. I design the <b>distributed backends and microservices</b> behind the agents, and at <b>ByteDance</b> I architected platforms for <b>180,000+ users</b> and led requirements, delivery, and engineer mentoring as the cross-functional liaison between business and engineering. Comfortable owning solutions end to end and communicating with senior clients; bilingual in English and Mandarin for APAC delivery.',
      skills: [
        { category: 'AI & LLM', skills: ['LLM agents', 'RAG', 'Prompt engineering', 'Evaluation / evals', 'Fine-tuning', 'Function calling', 'Voice-to-form extraction'] },
        { category: 'Languages', skills: ['Python', 'TypeScript', 'Go', 'Node.js', 'Java', 'Bash'] },
        { category: 'Distributed & Backend', skills: ['Microservices', 'Distributed systems', 'Message queues', 'Redis caching', 'PostgreSQL', 'REST APIs'] },
        { category: 'Cloud & Infrastructure', skills: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Nginx'] },
        { category: 'Delivery & Leadership', skills: ['0-to-1 delivery', 'Client & stakeholder communication', 'Team mentoring', 'Code review', 'End-to-end ownership'] },
      ],
      work_bullets: {
        [KETCHUP]: [
          '<b>Took an LLM-powered compliance platform from prototype to presales-ready</b> and ran demos directly with customers, advancing pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks and a regional insurer</b>: owned discovery, build, and rollout end to end',
          'Built <b>AI voice-to-form agents</b> (Python and TypeScript) for multi-page financial compliance forms: advisors record client conversations and agents extract and populate structured data in real time, replacing hours of manual entry',
          'Designed a <b>compliance-detection engine</b> with sentence-level traceability back to audio transcripts, powering automated <b>mis-selling detection</b> with severity triage, batch rectification, and human-in-the-loop review',
          'Engineered the <b>backend and integration layer</b> behind the agents: multi-region locale propagation, <b>enterprise OAuth</b> (Microsoft, Google, LinkedIn, Apple via PKCE), and a production <b>Next.js</b> stack across frontend and backend',
        ],
        [BYTEDANCE]: [
          "<b>Architected and delivered enterprise platform solutions</b> on ByteDance's internal Feishu App Engine in <b>Node.js, Go, and Java</b> for <b>180,000+ global employees</b> across HR, finance, insurance, and legal, at nearly <b>67% lower cost</b> than traditional development",
          'Built <b>high-performance backend services</b> with <b>distributed architecture, message queues, and Redis caching</b>, cutting latency over <b>50%</b> at <b>99.95% uptime</b> for large-scale transactional workloads',
          '<b>Owned requirements discovery and solution design as the cross-functional liaison between business stakeholders and engineering</b>, translating ambiguous needs into shipped solutions with adoption consistently above <b>75%</b>',
          '<b>Led internal training and mentored engineers</b> on system design and best practices, raising team delivery speed by up to <b>30%</b>, and pioneered reusable frameworks that cut delivery timelines <b>40-50%</b>',
        ],
        [PIXIUM]: [
          '<b>Led full-stack client engagements end to end</b> in <b>Elixir/Phoenix, TypeScript/React, and PHP/Yii2</b>, hitting <b>100% on-time delivery</b> across multiple client deployments',
          '<b>Optimised PostgreSQL and MySQL queries</b> to boost analytics dashboard performance by <b>62.5%</b>, working directly against real customer data',
          '<b>Automated deployments with Terraform</b> and managed <b>Docker-based PHP/Nginx/PostgreSQL</b> environments, accelerating setup by <b>80%</b> and reducing downtime by <b>70%</b>',
          '<b>Mentored junior engineers</b> through code review on architecture and coding practices, reducing bugs by nearly <b>30%</b>',
        ],
      },
    },

    // ---------------------------------------------------------------- FDE / AI Solutions / Voice
    fde: {
      title: 'Forward Deployed Engineer | AI Solutions & Customer Delivery',
      headline: 'LLM-powered product engineer who ships 0-to-1, from customer conversation to production deployment',
      summary: 'Software engineer with 5+ years delivering production systems across enterprise platforms, consultancy engagements, and 0-to-1 AI products. Currently at <b>Ketchup AI</b>, I build an <b>LLM-powered regulatory compliance platform</b>, owning discovery, build and rollout end to end, and running customer-facing pre-sales demos that advanced pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks</b> and a regional insurer. I ship production code across frontend and backend in <b>TypeScript, JavaScript, and Python</b>, and I have built AI voice-to-form and compliance-detection engines on top of <b>LLM agents</b>. At <b>ByteDance</b>, I translated complex stakeholder requirements into platforms serving <b>180,000+ users</b>. Bilingual in English and Mandarin for APAC customer-facing work.',
      skills: [
        { category: 'AI & LLM', skills: ['Generative AI', 'LLM agents', 'RAG', 'Prompt engineering', 'Evaluation / evals', 'Function calling', 'Voice-to-form extraction'] },
        { category: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'Elixir', 'PHP', 'SQL', 'Bash'] },
        { category: 'Frameworks & Libraries', skills: ['Next.js', 'React', 'Node.js', 'Phoenix', 'Flutter', 'Tailwind CSS'] },
        { category: 'Cloud, Infrastructure & Databases', skills: ['AWS', 'Docker', 'Terraform', 'Redis', 'PostgreSQL', 'MySQL'] },
        { category: 'Testing, Tools & Practices', skills: ['Vitest', 'Playwright', 'Jest', 'Postman', 'Figma', 'Agile / Scrum'] },
      ],
      work_bullets: {
        [KETCHUP]: [
          '<b>Took an LLM-powered regulatory compliance platform from zero to presales-ready</b> and ran pre-sales demos directly with customers, advancing pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks and a regional insurer</b>: end-to-end ownership of discovery, build, and rollout',
          'Built <b>AI voice-to-form auto-fill on top of LLM agents</b> for multi-page financial compliance forms: advisors record client conversations and agents extract and populate structured data in real time, replacing hours of manual entry',
          'Designed a <b>compliance detection engine</b> with sentence-level traceability back to audio transcripts, enabling automated <b>mis-selling detection</b> with severity triage and batch rectification: model output mapped directly to measurable customer workflow impact',
          'Shipped <b>multi-region deployment</b> across Singapore, Taiwan, and Malaysia with locale propagation to backend AI agents, <b>enterprise OAuth</b> (Microsoft, Google, LinkedIn, Apple via PKCE), and PWA offline support, delivering a production-grade <b>Next.js</b> stack across frontend and backend',
        ],
        [BYTEDANCE]: [
          '<b>Drove requirements discovery and solution design as the cross-functional liaison between business stakeholders and engineering</b>, translating ambiguous needs (HCM, legal workflows, HR automation) into shipped solutions with user adoption consistently above <b>75%</b>',
          "<b>Architected and deployed enterprise solutions</b> on ByteDance's internal Feishu App Engine using <b>Node.js, Go, and Java</b>, supporting mission-critical HR, finance, insurance, and legal applications for <b>180,000+ global employees</b> at nearly <b>67% lower cost</b> than traditional development, saving <b>600-800 man-hours monthly per project</b>",
          'Built <b>high-performance backend services</b> with distributed architecture, message queues, and <b>Redis caching</b>, cutting latency by over <b>50%</b> at <b>99.95% uptime</b> for large-scale transactional workloads',
          '<b>Pioneered reusable low-code modules and frameworks</b> that cut delivery timelines by <b>40-50%</b>, and led internal training that raised team delivery speed by up to <b>30%</b>',
        ],
        [PIXIUM]: [
          '<b>Led full-stack client engagements end to end</b> in <b>Elixir/Phoenix, JavaScript/TypeScript/React, and PHP/Yii2</b>, hitting <b>100% on-time delivery</b> across multiple deployments',
          '<b>Optimised PostgreSQL and MySQL queries</b> to boost analytics dashboard performance by <b>62.5%</b>, working directly against real customer data and workflows',
          '<b>Automated deployments with Terraform</b> and managed <b>Docker-based PHP/Nginx/PostgreSQL</b> environments, accelerating environment setup by <b>80%</b> and reducing downtime by <b>70%</b>',
          '<b>Mentored junior engineers</b> on coding practices and architecture, reducing bugs by nearly <b>30%</b>',
        ],
      },
    },

    // ---------------------------------------------------------------- Senior Full-Stack
    fullstack: {
      title: 'Senior Full-Stack Engineer | TypeScript, React, Node.js',
      headline: 'Owning features end-to-end across frontend, backend, and infrastructure at scale',
      summary: 'Full-stack engineer with 5+ years owning features end-to-end across frontend, backend, and infrastructure. Currently at <b>Ketchup AI</b>, I own the full architecture of an LLM-powered compliance platform, shipping a <b>Next.js / TypeScript PWA</b> from zero to presales-ready. At <b>ByteDance</b>, I built distributed backend services on <b>Node.js and Go</b> for <b>180,000+ users</b>, cutting latency over <b>50%</b> at <b>99.95% uptime</b>. At <b>Pixium Digital</b>, I led full-stack delivery in <b>Elixir, React, and PHP</b>, lifting dashboard performance <b>62.5%</b> and automating deploys <b>80%</b> with Terraform and Docker. MIT-certified in ML, pursuing a part-time BIT at NUS.',
      skills: [
        { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Java', 'Elixir', 'PHP', 'SQL', 'Bash'] },
        { category: 'Frameworks & Libraries', skills: ['React', 'Next.js', 'Node.js', 'Phoenix', 'LiveView', 'Vue', 'Flutter', 'Tailwind CSS'] },
        { category: 'Cloud, Infrastructure & Databases', skills: ['AWS', 'Docker', 'Terraform', 'PostgreSQL', 'Redis', 'MySQL', 'Nginx', 'Firebase'] },
        { category: 'Testing, Tools & Practices', skills: ['Vitest', 'Playwright', 'Jest', 'MSW', 'Postman', 'Figma', 'Agile / Scrum'] },
      ],
      work_bullets: {
        [KETCHUP]: [
          '<b>Owned the full-stack architecture end-to-end</b> for an AI-powered regulatory compliance platform, shipping a <b>Next.js / TypeScript PWA</b> from zero to presales-ready; product quality advanced pilot agreements into the contract pipeline with Tier-1 Singapore banks and a regional insurer',
          'Built <b>AI voice-to-form auto-fill</b> for multi-page financial compliance forms: advisors record client conversations and AI agents extract and populate structured data in real time, replacing hours of manual data entry',
          'Designed a <b>compliance detection engine</b> with sentence-level traceability to audio transcripts, enabling automated <b>mis-selling detection</b> with severity triage and batch rectification workflows',
          'Shipped <b>multi-region i18n</b> (Singapore, Taiwan, Malaysia) with locale propagation to backend services, <b>enterprise OAuth</b> (Microsoft, Google, LinkedIn, Apple with PKCE), and <b>PWA offline support</b> via a custom Service Worker strategy',
        ],
        [BYTEDANCE]: [
          'Designed and deployed <b>high-performance distributed backend services</b> using <b>distributed architecture, message queues, and Redis caching</b>, cutting latency over <b>50%</b> and sustaining <b>99.95% uptime</b> for large-scale transactional operations',
          "<b>Architected and delivered large-scale enterprise solutions</b> on ByteDance's internal Feishu App Engine using <b>Node.js, Go, and Java</b>, supporting mission-critical HR, finance, insurance, and legal applications for over <b>180,000 global employees</b>, achieving nearly <b>67% cost reduction</b> vs traditional development",
          '<b>Pioneered reusable low-code modules and frameworks</b>, enabling rapid feature rollouts and integrations and reducing project development timelines by approximately <b>40-50%</b>',
          '<b>Drove requirements analysis and system design</b> as the cross-functional liaison between business stakeholders and engineering, translating complex requirements (HCM, legal workflows, HR automation) into scalable solutions with user adoption consistently above <b>75%</b>',
          '<b>Mentored junior engineers</b> through training and code review on engineering practices and technical architecture, improving project delivery speed by up to <b>30%</b>',
        ],
        [PIXIUM]: [
          '<b>Led full-stack delivery in Elixir/Phoenix, JavaScript/TypeScript/React, and PHP/Yii2</b>, achieving <b>100% on-time delivery</b> across multiple client engagements',
          '<b>Optimised MySQL/PostgreSQL queries</b>, boosting analytics dashboard performance by <b>62.5%</b>',
          '<b>Automated deployments with Terraform</b>, accelerating environment setup and releases by <b>80%</b>, and managed <b>Docker-based PHP/Nginx/PostgreSQL environments</b>, reducing downtime by <b>70%</b>',
          '<b>Mentored junior engineers</b> on coding practices and architecture through code review, improving code quality and reducing bugs by nearly <b>30%</b>',
        ],
      },
    },

    // ---------------------------------------------------------------- AI/ML Platform & Backend
    'ai-platform': {
      title: 'AI/ML Platform & Backend Engineer | Distributed Systems',
      headline: 'Production backend and AI-agent pipelines at scale: distributed systems, infrastructure-as-code, observability',
      summary: 'Backend engineer with 5+ years building <b>high-performance, distributed systems</b> in Python, Go, and Node.js. At <b>Ketchup AI</b> I engineer production <b>LLM agent pipelines</b>: speech-to-structured-data extraction and a compliance inference engine with sentence-level traceability to source transcripts. At <b>ByteDance</b> I architected aPaaS backends for <b>180,000+ employees</b>, cutting latency over <b>50%</b> at <b>99.95% uptime</b> via distributed architecture, message queues, and Redis caching. Strong in <b>cloud infrastructure-as-code</b> (Terraform, Docker, AWS) and observability (Grafana). Certified in <b>Data Science and Machine Learning (MIT-IDSS)</b>, reading <b>part-time BIT at NUS</b>.',
      skills: [
        { category: 'Languages & Backend', skills: ['Python', 'Go', 'Node.js', 'Java', 'TypeScript', 'SQL', 'Bash'] },
        { category: 'Distributed Systems & Cloud', skills: ['Distributed architecture', 'Message queues', 'Redis caching', 'Docker', 'Terraform', 'AWS', 'Nginx'] },
        { category: 'AI & Data Pipelines', skills: ['Generative AI', 'AI-agent pipelines', 'Model inference', 'RAG', 'Structured extraction', 'PostgreSQL', 'MySQL'] },
        { category: 'Observability & Testing', skills: ['Grafana', 'CI/CD', 'Vitest', 'Playwright', 'Jest'] },
      ],
      work_bullets: {
        [KETCHUP]: [
          'Engineer production <b>AI-agent pipelines</b> for a regulatory compliance platform: advisors record client conversations and AI agents <b>extract and populate structured data in real time</b> across multi-page financial forms, replacing hours of manual entry',
          'Designed a <b>compliance detection (inference) engine</b> with <b>sentence-level traceability</b> back to audio transcripts, powering automated mis-selling detection with severity triage and batch rectification workflows',
          'Built <b>multi-region locale propagation to backend AI agents</b> (Singapore, Taiwan, Malaysia), plus <b>enterprise OAuth</b> (Microsoft, Google, LinkedIn, Apple with PKCE) for a platform that advanced pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks and a regional insurer</b>',
          'Owned end-to-end delivery of a <b>Next.js PWA from zero to presales-ready</b>, including offline support via a custom Service Worker strategy',
        ],
        [BYTEDANCE]: [
          'Designed and deployed <b>high-performance backend services</b> using <b>distributed architecture, message queues, and Redis-based caching</b>, achieving <b>over 50% latency reduction</b> and <b>99.95% uptime</b> for large-scale transactional operations',
          'Architected large-scale enterprise platform solutions on the internal Feishu App Engine in <b>Node.js, Go, and Java</b> for <b>180,000+ global employees</b>, achieving nearly <b>67% cost reduction</b> versus traditional development and saving <b>600-800 man-hours monthly per project</b>',
          '<b>Pioneered reusable platform modules and frameworks</b>, enabling rapid feature rollout and integration and cutting project timelines by <b>40-50%</b>',
          'Drove <b>requirements analysis and system design</b> as the cross-functional liaison between business and engineering across HR, finance, legal, and insurance domains, sustaining adoption above <b>75%</b>',
          '<b>Led internal training and mentoring</b> on system design and engineering best practices, improving delivery speed by up to <b>30%</b>',
        ],
        [PIXIUM]: [
          '<b>Automated cloud deployments with Terraform</b>, accelerating environment provisioning and releases by <b>80%</b>',
          '<b>Optimised MySQL/PostgreSQL queries</b>, boosting analytics dashboard performance by <b>62.5%</b>',
          'Managed <b>Docker-based PHP/Nginx/PostgreSQL environments</b>, improving stability and reducing downtime by <b>70%</b>',
          '<b>Led full-stack delivery</b> in Elixir/Phoenix, TypeScript/React, and PHP/Yii2 with <b>100% on-time delivery</b> across client engagements',
          '<b>Mentored junior engineers</b> on architecture and coding practices, reducing bugs by nearly <b>30%</b>',
        ],
      },
    },

    // ---------------------------------------------------------------- Fintech / Regtech / Compliance AI
    'fintech-regtech': {
      title: 'Full-Stack Engineer | Regtech & Compliance AI',
      headline: 'Building AI-driven financial-crime and regulatory-compliance systems for Tier-1 banks and insurers',
      summary: 'Software engineer with 5+ years building production systems, now shipping an <b>LLM-powered regulatory compliance platform at Ketchup AI</b> that advanced pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks and a regional insurer</b>. I built a <b>compliance detection engine</b> for automated <b>mis-selling detection</b>, with sentence-level traceability to source transcripts for full audit trails, plus severity triage and batch rectification. I own the frontend architecture end to end and ship enterprise OAuth, multi-region i18n, and AI voice-to-form pipelines. Earlier I architected enterprise platforms at <b>ByteDance</b> for 180,000+ users and led full-stack delivery at <b>Pixium Digital</b>.',
      skills: [
        { category: 'Compliance & Regtech AI', skills: ['LLM agents', 'Mis-selling detection', 'Audit trail / traceability', 'Model explainability', 'Human-in-the-loop', 'AI voice-to-form', 'Compliance detection engine'] },
        { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'PHP', 'SQL', 'Bash'] },
        { category: 'Frameworks & Libraries', skills: ['Next.js', 'React', 'Node.js', 'Phoenix', 'Tailwind CSS'] },
        { category: 'Cloud, Infrastructure & Databases', skills: ['AWS', 'Docker', 'Terraform', 'PostgreSQL', 'Redis', 'Enterprise OAuth (PKCE)'] },
        { category: 'Testing & Tools', skills: ['Playwright', 'Vitest', 'Jest', 'Postman', 'Figma'] },
      ],
      work_bullets: {
        [KETCHUP]: [
          '<b>Designed a compliance detection engine</b> for an AI-powered <b>regulatory compliance platform</b>, enabling automated <b>mis-selling detection</b> with <b>severity triage</b>, batch rectification workflows, and <b>sentence-level traceability to source audio transcripts</b> for full audit defensibility and explainability',
          'Built <b>AI voice-to-form auto-fill</b> for multi-page financial compliance forms: advisors record client conversations, AI agents extract and populate structured data in real time, replacing hours of manual data entry while preserving an evidence trail back to the original conversation',
          '<b>Owned all frontend architecture and delivery</b>, shipping a <b>Next.js PWA</b> from zero to presales-ready. Product quality advanced pilot agreements into the contract pipeline with <b>Tier-1 Singapore banks and a regional insurer</b>',
          'Shipped <b>multi-region i18n</b> across Singapore, Taiwan, and Malaysia with locale propagation to backend AI agents, <b>enterprise OAuth</b> (Microsoft, Google, LinkedIn, Apple with PKCE), and PWA offline support via custom Service Worker strategy',
        ],
        [BYTEDANCE]: [
          "<b>Architected and delivered large-scale enterprise solutions</b> spanning <b>finance, legal, and HR workflow automation</b> on ByteDance's internal Feishu App Engine using <b>Node.js, Go, and Java</b>, supporting over <b>180,000 global employees</b> and reducing manual compliance and operational processes by <b>600-800 man-hours monthly per project</b>",
          'Designed and deployed <b>high-performance backend services</b> using <b>distributed architecture, message queues, and Redis-based caching</b>, achieving latency reductions of over <b>50%</b> and <b>99.95% uptime</b> for large-scale transactional operations',
          '<b>Drove requirements analysis and system design</b> as the cross-functional liaison between business stakeholders and engineering, translating complex legal and HR workflow requirements into scalable solutions with user adoption consistently above <b>75%</b>',
          '<b>Pioneered reusable low-code modules and frameworks</b>, reducing project delivery timelines by approximately <b>40-50%</b>, and mentored junior engineers, improving delivery speed by up to <b>30%</b>',
        ],
        [PIXIUM]: [
          '<b>Led full-stack projects in Elixir/Phoenix, JavaScript/TypeScript/React, and PHP/Yii2</b>, achieving <b>100% on-time delivery</b> across multiple client engagements',
          '<b>Optimised MySQL/PostgreSQL queries</b>, boosting analytics dashboard performance by <b>62.5%</b> for data-heavy reporting views',
          'Managed <b>Docker-based PHP/Nginx/PostgreSQL environments</b> and <b>automated deployments with Terraform</b>, reducing downtime by <b>70%</b> and accelerating releases by <b>80%</b>',
          '<b>Mentored junior engineers</b> on coding practices and architecture, improving code quality and reducing bugs by nearly <b>30%</b>',
        ],
      },
    },
  };

  // ---- merge selected variant over base RESUME_DATA (mutates the object, const-safe) ----
  function applyVariant(data, v) {
    if (v.title) data.title = v.title;
    if (v.headline) data.headline = v.headline;
    if (v.summary) data.summary = v.summary;
    if (v.skills) data.technical_skills = v.skills;
    if (v.projects) data.projects_achievements = v.projects;
    if (v.work_bullets && Array.isArray(data.work_history)) {
      data.work_history.forEach(job => {
        const bullets = v.work_bullets[job.start_date];
        if (bullets) job.responsibilities = bullets;
      });
    }
  }

  // main.js never renders data.languages, so they join the skills list here, from that one field, for every scope.
  const LANGUAGE_NAMES = { chinese: 'Mandarin Chinese', english: 'English', malay: 'Malay' };
  function addSpokenLanguages(data) {
    if (!data.languages || !Array.isArray(data.technical_skills)) return;
    const skills = Object.entries(data.languages).map(([key, level]) => `${LANGUAGE_NAMES[key] || key} (${level.replace(/\s*Proficiency$/i, '').toLowerCase()})`);
    data.technical_skills = [...data.technical_skills, { category: 'Spoken Languages', skills }];
  }

  try {
    const key = new URLSearchParams(window.location.search).get('v');
    if (key && RESUME_VARIANTS[key] && typeof RESUME_DATA !== 'undefined') {
      applyVariant(RESUME_DATA, RESUME_VARIANTS[key]);
      // Chrome's --print-to-pdf takes the PDF Title from document.title, so each variant PDF names its own role.
      document.title = `Jing Hui Pang - ${RESUME_DATA.title} - Resume`;
      console.log('%c[resume] variant applied: ' + key, 'color:#5eead4');
    }
    if (typeof RESUME_DATA !== 'undefined') addSpokenLanguages(RESUME_DATA);
  } catch (e) {
    console.warn('[resume] variant merge skipped:', e);
  }

  // expose for the build script / debugging
  window.RESUME_VARIANT_KEYS = Object.keys(RESUME_VARIANTS);
})();
