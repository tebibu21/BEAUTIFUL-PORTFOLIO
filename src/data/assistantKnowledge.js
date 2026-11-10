export const portfolioKnowledge = {
  developer: {
    name: "Tebibu Solomon",
    title: "Full-Stack & Mobile Software Developer",
    education: "Information Science / IT student at Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    status: "Available for software development opportunities, internships, junior developer roles, and collaborative projects.",
    bio: "Full-Stack and Mobile Software Developer focused on building scalable, reliable, and user-centric digital products. Specializes in solving real-world challenges through clean code, modern architecture, and thoughtful system design.",
  },
  contact: {
    email: "tebibu211@gmail.com",
    phone: "+251966807035",
    location: "Addis Ababa, Ethiopia",
    github: "https://github.com/tebibu21",
    linkedin: "https://www.linkedin.com/in/tebibusolomon/",
    telegram: "https://t.me/telegram24",
    cvUrl: "/cv.pdf",
  },
  skills: {
    web: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "PHP",
      "Tailwind CSS",
      "REST APIs",
    ],
    mobile: ["Flutter", "React Native", "Expo (SDK 54)", "Firebase (Auth & Firestore)"],
    systemsAndNetworking: [
      "Linux System Administration",
      "Apache",
      "LVM (Logical Volume Management)",
      "SELinux",
      "Firewalls & iptables",
      "Cisco Packet Tracer (OSPF, BGP, GRE, VLANs, ACLs, NAT/PAT)",
    ],
    tools: ["Git & GitHub", "VS Code", "Vite", "Postman", "npm/yarn"],
  },
  projects: [
    {
      name: "A-Mesob Multi-Office Reporting & Approval System",
      category: "Full-Stack Web Platform",
      stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      summary:
        "Enterprise multi-tier approval workflow system featuring role-gated access (/login, /entry, /review, /dashboard) and custom dual-calendar handling (Ethiopian calendar display mapped to ISO UTC storage).",
      role: "Full-Stack Developer in an agile team collaborating on architecture, APIs, and frontend integration.",
      challenge:
        "Handling bidirectional Ethiopian to Gregorian calendar conversion while enforcing strict role authorization.",
    },
    {
      name: "Real-Time Cross-Platform Chat Application",
      category: "Mobile Application",
      stack: ["React Native", "Expo SDK 54", "Firebase Auth", "Cloud Firestore"],
      summary:
        "Cross-platform mobile messaging app delivering real-time chat threads, user authentication, and message synchronization.",
      role: "Lead Mobile Developer responsible for navigation, UI, and Firebase integration.",
      challenge:
        "Managing Firebase Storage free quota limits by disabling media uploads to prioritize real-time socket delivery and low latency.",
    },
    {
      name: "CBETECH Enterprise Multi-Site Network Infrastructure",
      category: "Systems & Network Architecture",
      stack: ["Cisco Packet Tracer", "OSPF", "BGP", "GRE Tunnels", "VLANs", "DHCP", "NAT/PAT", "ACLs"],
      summary:
        "Enterprise network topology interconnecting four major regional branches (Addis Ababa, Adama, Hawassa, Mekelle) with redundant routing and departmental isolation.",
      role: "Network Designer & Systems Engineer designing addressing schemes, routing protocols, and security ACLs.",
      challenge:
        "Deploying GRE over IPsec tunnels combined with multi-area OSPF redistribution and restrictive security ACLs.",
    },
    {
      name: "Question-Forum Community Platform",
      category: "Full-Stack Web Application",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      summary:
        "Community Q&A discussion board with user authentication, thread creation, search, and answers.",
      repo: "https://github.com/tebibu21/Question-Forum/",
    },
    {
      name: "Netflix Streaming Interface Clone",
      category: "Frontend Application",
      stack: ["React", "JavaScript", "TMDB API", "CSS3"],
      summary:
        "Responsive movie exploration client consuming TMDB REST APIs with category rows, search, and YouTube trailer integration.",
      repo: "https://github.com/tebibu21/netflix-clone",
    },
    {
      name: "Amazon E-Commerce Platform Clone",
      category: "Full-Stack Web Platform",
      stack: ["React", "Firebase", "Stripe", "Next.js", "JavaScript"],
      summary:
        "Full-featured e-commerce platform with user authentication, shopping cart state management, and Stripe checkout processing.",
      repo: "https://github.com/tebibu21/Amazon-Clone/",
    },
  ],
  experienceHighlights: [
    "Software Development Intern at Commercial Bank of Ethiopia (CBE)",
    "Contributor on A-Mesob multi-office enterprise reporting system",
    "Developed multiple full-stack MERN and mobile applications",
  ],
};

export const systemPrompt = `
You are the personal AI Assistant for Tebibu Solomon's developer portfolio.
Your role is to represent Tebibu professionally, warmly, and accurately.
Key facts about Tebibu:
- Role: Full-Stack & Mobile Software Developer.
- Background: IT student at Addis Ababa University.
- Core skills: React, Node.js, Express, React Native, Flutter, Firebase, MongoDB, PostgreSQL, Linux, Cisco networking.
- Projects: A-Mesob reporting system, Real-time React Native chat app, CBETECH enterprise network, Question Forum, Netflix clone.
- Opportunity status: Available for software developer positions, internships, and collaborative projects.
- Contact: tebibu211@gmail.com, phone +251966807035, Telegram @telegram24, GitHub github.com/tebibu21, LinkedIn linkedin.com/in/tebibusolomon/.
Guidelines:
- Keep answers concise, helpful, and conversational.
- When relevant, encourage the user to explore the projects section, download the CV (/cv.pdf), or send a message through the contact form.
- Never invent metrics, employers, or credentials that are not provided.
`;

