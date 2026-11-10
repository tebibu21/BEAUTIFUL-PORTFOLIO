export const projects = [
  {
    id: "a-mesob-reporting",
    title: "A-Mesob Multi-Office Reporting & Approval System",
    subtitle: "Enterprise Workflow & Multi-Tier Approval Platform",
    problem:
      "Managing distributed operational reports across multiple administrative branches created synchronization bottlenecks and approval delays.",
    whatIBuilt:
      "A role-gated web platform featuring dedicated workflows for data entry, supervisor review, and administrative dashboards with custom Ethiopian calendar integration backed by ISO-standard date storage.",
    role: "Full-Stack Developer within an agile team, collaborating closely from architecture and system design to implementation.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    challenge:
      "Architecting bidirectional conversion between the Ethiopian calendar system and ISO UTC timestamps to ensure chronological integrity across international databases.",
    image: "/projects/project1.png",
    demoUrl: null,
    githubUrl: null,
    isCaseStudy: true,
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Cross-Platform Chat Application",
    subtitle: "Mobile Messaging Architecture with Instant Synchronization",
    problem:
      "Delivering low-latency messaging on mobile devices with predictable state synchronization, offline resilience, and authentication.",
    whatIBuilt:
      "A cross-platform mobile messaging app built with React Native and Expo SDK 54, integrating Firebase Authentication and Firestore for instant message streams and channel discussions.",
    role: "Lead Mobile Developer responsible for UI implementation, navigation architecture, and Firebase backend integration.",
    stack: ["React Native", "Expo SDK 54", "Firebase", "Firestore", "JavaScript"],
    challenge:
      "Overcoming Firebase Storage plan quota limits during the submission milestone by gracefully gating media uploads to prioritize core messaging performance and real-time socket reliability.",
    image: "/projects/project2.png",
    demoUrl: null,
    githubUrl: null,
    isCaseStudy: true,
  },
  {
    id: "cbetech-network",
    title: "CBETECH Enterprise Multi-Site Network Infrastructure",
    subtitle: "Redundant Wide Area Network Architecture",
    problem:
      "Interconnecting four geographically distributed banking branches with high availability, isolated departmental traffic, and strict perimeter access policies.",
    whatIBuilt:
      "A comprehensive multi-site topology simulated in Cisco Packet Tracer linking Addis Ababa, Adama, Hawassa, and Mekelle through redundant routing protocols, segmented VLANs, and centralized services.",
    role: "Network Designer & Systems Engineer responsible for topology design, IP addressing schemes, routing protocols, and access control policies.",
    stack: ["Cisco Packet Tracer", "OSPF", "BGP", "GRE Tunnels", "VLANs", "DHCP", "NAT/PAT", "ACLs"],
    challenge:
      "Configuring GRE over IPsec tunneling combined with multi-area OSPF redistribution and restrictive ACL rules without introducing routing loops or packet drop on inter-branch traffic.",
    image: "/projects/project3.png",
    demoUrl: null,
    githubUrl: null,
    isCaseStudy: true,
  },
  {
    id: "question-forum",
    title: "Question-Forum Community Platform",
    subtitle: "Full-Stack Collaborative Q&A System",
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
    isCaseStudy: false,
  },
  {
    id: "netflix-clone",
    title: "Netflix Streaming Interface Clone",
    subtitle: "Dynamic Media Catalog & Trailer Experience",
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
    isCaseStudy: false,
  },
];

