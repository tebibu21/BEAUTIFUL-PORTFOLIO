import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Telegram Icon
const TelegramIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.926z" />
  </svg>
);

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      toast({
        title: "Name required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast({
        title: "Invalid email",
        description: "Please provide a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!trimmedSubject) {
      toast({
        title: "Subject required",
        description: "Please specify the topic or opportunity.",
        variant: "destructive",
      });
      return;
    }

    if (trimmedMessage.length < 10) {
      toast({
        title: "Message too short",
        description: "Please write at least 10 characters.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: trimmedName,
            email: trimmedEmail,
            subject: `[Portfolio Contact] ${trimmedSubject}`,
            message: trimmedMessage,
          }),
        });

        const data = await response.json();

        if (data.success) {
          toast({
            title: "Message Delivered!",
            description: "Thank you for reaching out. I will get back to you promptly.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error(data.message || "Submission failed");
        }
      } catch {
        toast({
          title: "Service Unavailable",
          description: "Could not send via web service. Opening direct email client...",
          variant: "destructive",
        });
        openDirectEmail(trimmedSubject, trimmedMessage, trimmedName);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Honest, transparent fallback: Opens visitor's default email client with all inputs prefilled
      setIsSubmitting(false);
      toast({
        title: "Opening Email Client",
        description: "Preparing your message directly to tebibu211@gmail.com...",
      });
      openDirectEmail(trimmedSubject, trimmedMessage, trimmedName);
    }
  };

  const openDirectEmail = (subject, body, senderName) => {
    const mailtoUrl = `mailto:tebibu211@gmail.com?subject=${encodeURIComponent(
      subject || "Inquiry from Portfolio"
    )}&body=${encodeURIComponent(
      `Hello Tebibu,\n\n${body}\n\nFrom,\n${senderName}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/20 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-primary">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
            Let's Build Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Available for software engineering roles, internships, and technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left">
          {/* Contact Details Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-foreground">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Email</span>
                    <a
                      href="mailto:tebibu211@gmail.com"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                      aria-label="Email Tebibu Solomon"
                    >
                      tebibu211@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Phone</span>
                    <a
                      href="tel:+251966807035"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                      aria-label="Call Tebibu Solomon"
                    >
                      +251966807035
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Location</span>
                    <span className="font-semibold text-foreground">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-border/80">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-3">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/tebibu21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label="Visit Tebibu Solomon's GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tebibusolomon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label="Visit Tebibu Solomon's LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href="https://t.me/telegram24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label="Contact Tebibu Solomon on Telegram"
                  >
                    <TelegramIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="md:col-span-7">
            <div className="p-7 rounded-2xl bg-card border border-border shadow-xs">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-foreground mb-1.5"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Abebe Bikila"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-foreground mb-1.5"
                    >
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-foreground mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Software Engineering Opportunity / Project Inquiry"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Detail the technical role, team, or problem you would like to discuss..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primary-button w-full cursor-pointer disabled:opacity-50"
                  aria-label="Send Message"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
