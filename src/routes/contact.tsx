import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Send, ArrowUpRight, FileText, Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ACJ_" },
      {
        name: "description",
        content:
          "Email, GitHub, LinkedIn and direct contact for Aadhith C Joseph.",
      },
      { property: "og:title", content: "Contact — ACJ_" },
      {
        property: "og:description",
        content:
          "Get in touch with Aadhith C Joseph: full-stack, DevOps and applied AI.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Contact,
});

function FieldToast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div
      role="alert"
      className="absolute -top-10 left-0 z-40 flex items-center gap-2 border-2 border-border bg-[#FF3C38] text-white px-2.5 py-1 font-mono text-[11px] font-bold shadow-[3px_3px_0px_0px_var(--border)] rounded-none animate-in fade-in slide-in-from-bottom-2 duration-150 max-w-[calc(100vw-64px)] sm:whitespace-nowrap select-none"
    >
      <span className="size-3.5 grid place-items-center bg-black text-white text-[9px] font-black border border-white/40 shrink-0">
        !
      </span>
      <span>{message}</span>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss error"
        className="ml-1 text-white hover:opacity-75 font-black text-xs cursor-pointer shrink-0 leading-none"
      >
        ✕
      </button>
      {/* Downward pointing triangle indicator */}
      <span className="absolute -bottom-1.5 left-4 size-2.5 bg-[#FF3C38] border-r-2 border-b-2 border-border rotate-45 pointer-events-none" />
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorTarget, setErrorTarget] = useState<{
    field: "name" | "email" | "message";
    message: string;
  } | null>(null);

  const [activeChannel, setActiveChannel] = useState(0);

  // Auto-dismiss field toast after 5 seconds
  useEffect(() => {
    if (!errorTarget) return;
    const timer = window.setTimeout(() => setErrorTarget(null), 5000);
    return () => window.clearTimeout(timer);
  }, [errorTarget]);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent(
    formData.subject || "Project Collaboration / Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Aadhith,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name.trim()) {
      setErrorTarget({ field: "name", message: "Please fill out your name." });
      document.getElementById("contact-name")?.focus();
      return;
    }

    const email = formData.email.trim();
    if (!email) {
      setErrorTarget({
        field: "email",
        message: "Please fill out your email address.",
      });
      document.getElementById("contact-email")?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorTarget({
        field: "email",
        message: "Please enter a valid email address.",
      });
      document.getElementById("contact-email")?.focus();
      return;
    }

    if (!formData.message.trim()) {
      setErrorTarget({
        field: "message",
        message: "Please write a message before sending.",
      });
      document.getElementById("contact-message")?.focus();
      return;
    }

    setErrorTarget(null);
    setIsSubmitting(true);

    // Open compose window in user gesture to avoid pop-up blockers
    const composeWindow = window.open("about:blank", "_blank");

    if (!composeWindow) {
      setIsSubmitting(false);
      toast.error("Pop-up blocked. Allow pop-ups or use the direct Gmail channel.");
      return;
    }

    composeWindow.opener = null;
    composeWindow.location.href = gmailComposeUrl;

    setIsSubmitting(false);
    toast.success("Gmail opened. Review your prefilled message and press Send.");
  };

  const directGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=Hello%20Aadhith`;

  const contactItems = [
    {
      index: "01",
      name: "Resume",
      badge: "PDF • VERIFIED",
      subtitle: "FULL-STACK, DEVOPS & SYSTEMS EXPERIENCE ↗",
      href: "/resume.pdf",
      icon: FileText,
      markerColor: "bg-[#FF7700] text-black",
    },
    {
      index: "02",
      name: "Gmail",
      badge: "EMAIL • MONITORED",
      subtitle: `${profile.email} — DIRECT COMPOSE ↗`,
      href: directGmailLink,
      icon: Mail,
      markerColor: "bg-[#FF3C38] text-white",
    },
    {
      index: "03",
      name: "GitHub",
      badge: "DEV • OPEN SOURCE",
      subtitle: "github.com/aadhithcj — REPOSITORIES & SOURCE ↗",
      href: profile.github,
      icon: Github,
      markerColor: "bg-[#F1BE05] text-black",
    },
    {
      index: "04",
      name: "LinkedIn",
      badge: "CAREER • CONNECT",
      subtitle: "linkedin.com/in/aadhithcj — PROFESSIONAL NETWORK ↗",
      href: profile.linkedin,
      icon: Linkedin,
      markerColor: "bg-[#42BFDD] text-black",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <SiteHeader />

      {/* Main Container: exactly matching Projects and Skills dimensions, padding & split grid */}
      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative w-full min-w-0">
        {/* Left Column: Heading and Editorial Channels Index */}
        <div className="flex flex-col relative w-full min-w-0">
          {/* Eyebrow Label */}
          <p className="label-mono">
            <DecryptedText
              text={`# CONTACT // ${profile.location.toUpperCase()}`}
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          {/* Heading - exact matching scale as Projects and Skills */}
          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Let's build{" "}
            <em className="italic text-lime not-italic font-normal">something</em>.
          </h1>

          {/* Subtitle - matching text size and mono styling as Projects and Skills */}
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            Have a role, project, or interesting engineering challenge in mind? Drop a message below or reach out directly.
          </p>

          {/* Floating Playful Accent Top-Right (matching Projects and Skills) */}
          <div className="hidden sm:flex absolute right-4 top-2 select-none pointer-events-none items-center gap-3">
            <div className="text-right font-mono text-[9px] uppercase font-bold text-muted-foreground/80 leading-tight">
              DIRECT<br />
              CHANNELS<br />
              OPEN TO<br />
              ROLES
            </div>
            <svg
              className="size-7 text-muted-foreground/60 -rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="size-11 xl:size-12 border-2 border-border bg-[#FF3C38] shadow-[3px_3px_0px_0px_var(--border)] -rotate-6" />
          </div>

          {/* Numbered Editorial Contact Channels List (matching Projects and Skills row structure) */}
          <div className="mt-10 sm:mt-12 flex flex-col border-t-2 border-border w-full min-w-0" role="list">
            {contactItems.map((item, i) => {
              const isSelected = activeChannel === i;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  data-crosshair-target
                  onMouseEnter={() => setActiveChannel(i)}
                  onFocus={() => setActiveChannel(i)}
                  className={`group relative py-3.5 sm:py-5 px-3 sm:px-4 transition-all duration-150 block cursor-pointer w-full min-w-0 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                    isSelected
                      ? "bg-[#F1BE05] text-black border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] my-1 -translate-y-0.5 z-10"
                      : "border-b border-border/40 hover:bg-[#F1BE05]/15 hover:border-border/60 hover:-translate-y-0.5 text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 sm:gap-4 w-full min-w-0">
                    <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1 overflow-hidden">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors shrink-0 ${
                          isSelected ? "text-black" : "text-lime"
                        }`}
                      >
                        {item.index}
                      </span>
                      {/* Square Icon Badge matching Skills page */}
                      <div
                        className={`size-9 sm:size-11 grid place-items-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] shrink-0 transition-transform ${item.markerColor}`}
                      >
                        <item.icon className="size-4 sm:size-5" />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <span
                          className={`font-display text-xl sm:text-3xl lg:text-4xl transition-all truncate block ${
                            isSelected
                              ? "font-bold text-black"
                              : "font-normal text-foreground group-hover:font-bold group-hover:text-black"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`mt-0.5 sm:mt-1 font-mono text-[9px] sm:text-xs uppercase tracking-wider truncate block transition-colors ${
                            isSelected
                              ? "text-black font-bold"
                              : "text-muted-foreground group-hover:text-black/80 group-hover:font-medium"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 pl-1">
                      <span
                        className={`hidden md:inline-block font-mono text-[10px] uppercase font-bold tracking-wider border px-2 py-0.5 transition-colors ${
                          isSelected
                            ? "text-black border-black/80 bg-black/10 font-black"
                            : "text-muted-foreground border-border/60 bg-background/50 group-hover:text-black group-hover:border-black group-hover:bg-black/10"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <ArrowUpRight
                        className={`size-4 sm:size-5 transition-transform shrink-0 ${
                          isSelected
                            ? "text-black translate-x-0.5 -translate-y-0.5"
                            : "text-muted-foreground group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Featured Neo-Brutalist Transmission Console Card */}
        <div className="w-full min-w-0 border-2 border-border bg-card p-4 sm:p-7 shadow-[5px_5px_0px_0px_var(--border)] sm:shadow-[8px_8px_0px_0px_var(--border)] relative flex flex-col overflow-hidden">
          {/* Card Top Header with Live Status Indicator */}
          <div className="flex items-center justify-between border-b-2 border-border pb-4">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              TRANSMISSION // 01
            </span>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase text-foreground/80 tracking-wider">
                MESSAGE READY
              </span>
            </div>
          </div>

          {/* Terminal / Info Strip */}
          <div className="mt-4 border-2 border-border bg-surface-secondary/70 p-3 font-mono text-[11px] text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-2 overflow-hidden w-full min-w-0">
            <div className="min-w-0 break-all truncate">
              <span className="text-foreground font-bold">RECIPIENT: </span>
              <span className="text-foreground/90">{profile.email}</span>
            </div>
            <div className="text-[10px] font-bold text-foreground uppercase border border-border px-1.5 py-0.5 bg-card shrink-0">
              AVG RESPONSE &lt; 24H
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4 w-full min-w-0">
            {/* Name & Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                {errorTarget?.field === "name" && (
                  <FieldToast
                    message={errorTarget.message}
                    onClose={() => setErrorTarget(null)}
                  />
                )}
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[10px] font-black uppercase tracking-wider text-foreground mb-1.5"
                >
                  YOUR NAME <span className="text-[#FF3C38]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  aria-required="true"
                  placeholder="Alex"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errorTarget?.field === "name") setErrorTarget(null);
                  }}
                  className={cn(
                    "w-full border-2 bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--border)] focus:ring-1 transition-all",
                    errorTarget?.field === "name"
                      ? "border-[#FF3C38] focus:border-[#FF3C38] focus:ring-[#FF3C38]"
                      : "border-border focus:border-foreground focus:ring-foreground"
                  )}
                />
              </div>

              <div className="relative">
                {errorTarget?.field === "email" && (
                  <FieldToast
                    message={errorTarget.message}
                    onClose={() => setErrorTarget(null)}
                  />
                )}
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[10px] font-black uppercase tracking-wider text-foreground mb-1.5"
                >
                  YOUR EMAIL <span className="text-[#FF3C38]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  aria-required="true"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errorTarget?.field === "email") setErrorTarget(null);
                  }}
                  className={cn(
                    "w-full border-2 bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--border)] focus:ring-1 transition-all",
                    errorTarget?.field === "email"
                      ? "border-[#FF3C38] focus:border-[#FF3C38] focus:ring-[#FF3C38]"
                      : "border-border focus:border-foreground focus:ring-foreground"
                  )}
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block font-mono text-[10px] font-black uppercase tracking-wider text-foreground mb-1.5"
              >
                SUBJECT <span className="text-muted-foreground font-normal text-[9px]">(OPTIONAL)</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Software engineering role / Project collaboration"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full border-2 border-border bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:border-foreground focus:shadow-[3px_3px_0px_0px_var(--border)] focus:ring-1 focus:ring-foreground transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              {errorTarget?.field === "message" && (
                <FieldToast
                  message={errorTarget.message}
                  onClose={() => setErrorTarget(null)}
                />
              )}
              <label
                htmlFor="contact-message"
                className="block font-mono text-[10px] font-black uppercase tracking-wider text-foreground mb-1.5"
              >
                MESSAGE <span className="text-[#FF3C38]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                aria-required="true"
                placeholder="What's on your mind? Share details about your timeline, role, or project..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errorTarget?.field === "message") setErrorTarget(null);
                }}
                className={cn(
                  "w-full resize-none border-2 bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--border)] focus:ring-1 transition-all",
                  errorTarget?.field === "message"
                    ? "border-[#FF3C38] focus:border-[#FF3C38] focus:ring-[#FF3C38]"
                    : "border-border focus:border-foreground focus:ring-foreground"
                )}
              />
            </div>

            {/* Action Button: only the paper airplane icon arrow */}
            <button
              type="submit"
              disabled={isSubmitting}
              data-crosshair-target
              className="w-full flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] text-black py-3 font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <span>SEND MESSAGE</span>
              <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <p className="font-mono text-[10px] text-muted-foreground text-center">
              Pre-fills a message in Gmail so you can review before dispatching.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
