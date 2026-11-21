export const projects = [
  {
    id: "a-mesob-reporting",
    title: "A-Mesob Multi-Office Reporting & Approval System",
    subtitle: "Enterprise Workflow & Multi-Tier Approval Platform",
    category: "Full Stack",
    problem:
      "Field branches previously faced synchronization bottlenecks and approval delays when transmitting periodic operational reports to central management.",
    whatIBuilt:
      "A role-gated web platform featuring dedicated office-specific reporting workflows, supervisor review pipelines, and Head Office analytical dashboards with custom Ethiopian calendar integration.",
    role: "Full-Stack Developer in an agile team collaborating on schema design, Express APIs, and role-based frontend views.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    challenge:
      "Architecting bidirectional conversion between the Ethiopian calendar system and ISO UTC timestamps to ensure chronological integrity across international databases.",
    image: "/projects/A-Mesob Multi-Office Reporting System.png",
    demoUrl: null,
    githubUrl: null,
    caseStudyUrl: "/projects/a-mesob",
    isCaseStudy: true,
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Cross-Platform Chat Application",
    subtitle: "Mobile Messaging Architecture with Instant Synchronization",
    category: "Mobile",
    problem:
      "Delivering low-latency messaging on mobile devices with predictable state synchronization, offline resilience, and authentication.",
    whatIBuilt:
      "A cross-platform mobile messaging application built with React Native and Expo SDK 54, integrating Firebase Authentication and Firestore for instant channel discussions.",
    role: "Lead Mobile Developer responsible for UI implementation, navigation architecture, and Firebase backend integration.",
    stack: ["React Native", "Expo SDK 54", "Firebase", "Firestore", "JavaScript"],
    challenge:
      "Overcoming Firebase Storage plan quota limits during the submission milestone by gracefully gating media uploads to prioritize core messaging performance and real-time socket reliability.",
    image: "/projects/Real-Time Chat App Showcase.png",
    demoUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    isCaseStudy: true,
  },
  {
    id: "cbetech-network",
    title: "CBETECH Enterprise Multi-Site Network Infrastructure",
    subtitle: "Redundant Wide Area Network Architecture",
    category: "Networking",
    problem:
      "Interconnecting four geographically distributed banking branches with high availability, isolated departmental traffic, and strict perimeter access policies.",
    whatIBuilt:
      "A comprehensive multi-site topology simulated in Cisco Packet Tracer linking Addis Ababa, Adama, Hawassa, and Mekelle through redundant routing protocols, segmented VLANs, and centralized services.",
    role: "Network Designer & Systems Engineer responsible for topology design, IP addressing schemes, routing protocols, and access control policies.",
    stack: ["Cisco Packet Tracer", "OSPF", "BGP", "GRE Tunnels", "VLANs", "DHCP", "NAT/PAT", "ACLs"],
    challenge:
      "Configuring GRE over IPsec tunneling combined with multi-area OSPF redistribution and restrictive ACL rules without introducing routing loops or packet drop on inter-branch traffic.",
    image: "/projects/CBE Networking Project Infographic.png",
    demoUrl: null,
    githubUrl: null,
    caseStudyUrl: null,
    isCaseStudy: true,
  },
  {
    id: "amazon-clone",
    title: "Amazon E-Commerce Platform Clone",
    subtitle: "Full-Featured Storefront with Cart & Stripe Checkout",
    category: "Full Stack",
    problem:
      "Building a complete modern e-commerce checkout flow with real-time shopping cart state, user authentication, and secure payment processing.",
    whatIBuilt:
      "A full-featured e-commerce web platform integrating Firebase user authentication, responsive product catalog, cart item persistence, and Stripe payment processing.",
    role: "Full-Stack Developer managing component state, Firebase auth integration, and Stripe checkout logic.",
    stack: ["React", "Firebase", "Stripe", "Next.js", "JavaScript"],
    challenge:
      "Securely processing checkout sessions with Stripe webhooks while keeping cart state in sync across authentication state transitions.",
    image: "/projects/project2.png",
    demoUrl: null,
    githubUrl: "https://github.com/tebibu21/Amazon-Clone/",
    caseStudyUrl: null,
    isCaseStudy: false,
  },
  {
    id: "question-forum",
    title: "Question-Forum Community Platform",
    subtitle: "Full-Stack Collaborative Q&A System",
    category: "Full Stack",
    problem:
      "Creating an interactive knowledge-sharing space where users can post technical questions, contribute answers, and engage in community discussions.",
    whatIBuilt:
      "A full-stack MERN application featuring JWT-based user authentication, thread creation, answer submission, and organized community categories.",
    role: "Full-Stack Developer designing database schemas, Express REST endpoints, and responsive React frontend components.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    challenge:
      "Implementing efficient nested relational lookups in MongoDB for question-answer threads while keeping response latency minimal.",
    image: "/projects/project3.png",
    demoUrl: null,
    githubUrl: "https://github.com/tebibu21/Question-Forum/",
    caseStudyUrl: null,
    isCaseStudy: false,
  },
  {
    id: "netflix-clone",
    title: "Netflix Streaming Interface Clone",
    subtitle: "Dynamic Media Catalog & Trailer Experience",
    category: "Frontend",
    problem:
      "Replicating modern streaming user experiences with responsive category carousels, asynchronous movie data fetching, and embedded video previews.",
    whatIBuilt:
      "A responsive web client consuming TMDB REST APIs with category filtering, real-time search, responsive backdrop banners, and YouTube trailer playback integration.",
    role: "Frontend Developer focusing on state management, responsive grid architecture, and external API consumption.",
    stack: ["React", "JavaScript", "TMDB API", "Axios", "CSS3"],
    challenge:
      "Managing complex asynchronous video modal states and handling cross-origin trailer playback failures gracefully across device viewports.",
    image: "/projects/project1.png",
    demoUrl: null,
    githubUrl: "https://github.com/tebibu21/netflix-clone",
    caseStudyUrl: null,
    isCaseStudy: false,
  },
];
