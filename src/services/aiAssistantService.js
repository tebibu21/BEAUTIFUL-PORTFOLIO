import { portfolioKnowledge, systemPrompt } from "@/data/assistantKnowledge";

/**
 * Intelligent offline response engine based on intent matching and structured knowledge.
 */
function getOfflineResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  // 1. Projects intent
  if (
    query.includes("project") ||
    query.includes("work") ||
    query.includes("portfolio") ||
    query.includes("build") ||
    query.includes("built") ||
    query.includes("case study") ||
    query.includes("mesob") ||
    query.includes("chat app") ||
    query.includes("cbetech")
  ) {
    return {
      text: `Tebibu has engineered several impressive full-stack, mobile, and systems projects:

1. **A-Mesob Reporting & Approval System:** An enterprise platform with role-gated pages (\`/login\`, \`/entry\`, \`/review\`, \`/dashboard\`) and dual Ethiopian calendar integration with ISO-standard date storage.
2. **Real-Time Mobile Chat App:** Cross-platform messaging built with React Native (Expo SDK 54) and Firebase Firestore for instant synchronization.
3. **CBETECH Network Infrastructure:** A simulated 4-site enterprise network (Addis Ababa, Adama, Hawassa, Mekelle) using Cisco Packet Tracer with OSPF, BGP, GRE tunnels, and security ACLs.
4. **Question-Forum:** A MERN-stack collaborative Q&A platform with JWT authentication.
5. **Netflix Clone:** A responsive frontend client integrating the TMDB API.`,
      actions: [
        { label: "View Projects Section", action: "scroll-projects" },
        { label: "Explore GitHub", action: "link-github", href: portfolioKnowledge.contact.github },
      ],
    };
  }

  // 2. Skills & Tech Stack intent
  if (
    query.includes("skill") ||
    query.includes("stack") ||
    query.includes("tech") ||
    query.includes("react") ||
    query.includes("node") ||
    query.includes("flutter") ||
    query.includes("database") ||
    query.includes("language") ||
    query.includes("tool")
  ) {
    return {
      text: `Tebibu works across the full development stack:

• **Web Development:** React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, MySQL, PHP, and Tailwind CSS.
• **Mobile Development:** Flutter, React Native, Expo (SDK 54), and Firebase (Auth & Firestore).
• **Systems & Networking:** Linux administration, Apache, LVM, SELinux, Firewalls, and Cisco Packet Tracer routing (OSPF, BGP, GRE).
• **Developer Tools:** Git, GitHub, VS Code, Postman, Vite.`,
      actions: [
        { label: "View Skills Section", action: "scroll-skills" },
      ],
    };
  }

  // 3. Contact & Hire / Availability intent
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("hire") ||
    query.includes("job") ||
    query.includes("intern") ||
    query.includes("phone") ||
    query.includes("reach") ||
    query.includes("available") ||
    query.includes("telegram") ||
    query.includes("linkedin")
  ) {
    return {
      text: `Tebibu is currently **available for software development opportunities, internships, and collaborative engineering projects**!

Here is how you can get in touch directly:
• **Email:** [${portfolioKnowledge.contact.email}](mailto:${portfolioKnowledge.contact.email})
• **Phone:** [${portfolioKnowledge.contact.phone}](tel:${portfolioKnowledge.contact.phone})
• **Location:** ${portfolioKnowledge.contact.location}
• **Telegram:** [@telegram24](https://t.me/telegram24)
• **LinkedIn:** [Tebibu Solomon](https://www.linkedin.com/in/tebibusolomon/)`,
      actions: [
        { label: "Open Contact Form", action: "scroll-contact" },
        { label: "Message on Telegram", action: "link-telegram", href: "https://t.me/telegram24" },
      ],
    };
  }

  // 4. Resume / CV intent
  if (
    query.includes("cv") ||
    query.includes("resume") ||
    query.includes("download") ||
    query.includes("pdf")
  ) {
    return {
      text: `You can download Tebibu Solomon's latest Curriculum Vitae directly. It details his project history, technical competencies, and academic background.`,
      actions: [
        { label: "Download CV (PDF)", action: "download-cv", href: "/cv.pdf" },
      ],
    };
  }

  // 5. About / Background / Education intent
  if (
    query.includes("who") ||
    query.includes("about") ||
    query.includes("background") ||
    query.includes("student") ||
    query.includes("university") ||
    query.includes("education") ||
    query.includes("experience")
  ) {
    return {
      text: `Tebibu Solomon is a **Full-Stack & Mobile Software Developer** and Information Technology student at Addis Ababa University. 

He focuses on building scalable, reliable, and user-friendly applications. He has hands-on experience through software internships at the Commercial Bank of Ethiopia (CBE), developing the A-Mesob multi-office reporting platform, and creating full-stack MERN and React Native apps.`,
      actions: [
        { label: "Read About Section", action: "scroll-about" },
        { label: "Download CV", action: "download-cv", href: "/cv.pdf" },
      ],
    };
  }

  // 6. Default / Helpful Greeting
  return {
    text: `Hello! I'm Tebibu's AI Portfolio Assistant. I can tell you about:

• **Projects:** A-Mesob Reporting System, React Native Chat App, CBETECH Network, and more.
• **Technical Skills:** React, Node.js, React Native, Flutter, Firebase, Databases & Linux.
• **Background & Experience:** CBE internship, AAU IT studies, full-stack development.
• **Contact & Hiring:** Direct email, phone, Telegram, and downloadable CV.

What would you like to explore?`,
    actions: [
      { label: "Top Projects", action: "scroll-projects" },
      { label: "Tech Stack", action: "scroll-skills" },
      { label: "Contact Tebibu", action: "scroll-contact" },
    ],
  };
}

/**
 * Main query function: Attempts live Gemini API if key is present, otherwise uses smart offline engine.
 */
export async function sendChatMessage(messages) {
  const lastUserMessage = messages[messages.length - 1]?.text || "";
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (apiKey) {
    try {
      // Call Google Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `${systemPrompt}\n\nKnowledge base:\n${JSON.stringify(
                      portfolioKnowledge
                    )}\n\nUser Question:\n${lastUserMessage}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const candidateText =
          data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText) {
          return {
            text: candidateText,
            actions: [
              { label: "View Projects", action: "scroll-projects" },
              { label: "Contact Tebibu", action: "scroll-contact" },
            ],
          };
        }
      }
    } catch {
      // Gracefully fall through to smart offline engine if API call fails
    }
  }

  // Offline Engine fallback
  return getOfflineResponse(lastUserMessage);
}

