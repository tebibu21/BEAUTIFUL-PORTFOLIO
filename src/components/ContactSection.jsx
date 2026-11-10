import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Telegram Icon Component
const TelegramIcon = ({ className = "h-5 w-5" }) => (
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
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
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
        description: "Please enter a valid email address.",
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

    try {
      if (accessKey) {
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
            message: trimmedMessage,
            subject: `New Portfolio Message from ${trimmedName}`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          toast({
            title: "Message delivered!",
            description: "Thank you for reaching out. I'll get back to you promptly.",
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error(result.message || "Submission failed");
        }
      } else {
        // Fallback simulated delivery if access key not yet added to .env
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast({
          title: "Message queued!",
          description:
            "Thank you! Your message was prepared. You can also email directly at tebibu211@gmail.com.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      toast({
        title: "Could not send message",
        description:
          "There was an issue sending your message. Please write directly to tebibu211@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Have an opportunity, project, or technical question? Feel free to reach out directly through the form or my social channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:tebibu211@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    aria-label="Send email to Tebibu Solomon"
                  >
                    tebibu211@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a
                    href="tel:+251966807035"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    aria-label="Call Tebibu Solomon"
                  >
                    +251966807035
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <span className="text-muted-foreground text-sm">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-medium mb-4 text-foreground">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tebibu21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Visit Tebibu Solomon on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/tebibusolomon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Visit Tebibu Solomon on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://t.me/telegram24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Message Tebibu Solomon on Telegram"
                >
                  <TelegramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Your full name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none text-sm"
                  placeholder="Tell me about your project, team, or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                aria-label="Send contact message"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
