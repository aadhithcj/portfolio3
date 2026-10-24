import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { PageBackdrop } from "@/components/fx/PageBackdrop";
import { HandNote } from "@/components/fx/HandNote";
import { useTheme } from "@/hooks/use-theme";
import { useKeralaTime } from "@/hooks/use-kerala-time";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import {
  Send,
  ArrowUpRight,
  FileText,
  Mail,
  Instagram,
  Copy,
  Check,
  RotateCcw,
  Github,
  Linkedin,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Aadhith C J" },
      {
        name: "description",
        content:
          "Email, GitHub, LinkedIn and direct contact for Aadhith C Joseph.",
      },
      { property: "og:title", content: "Contact - Aadhith C J" },
      {
        property: "og:description",
        content:
          "Get in touch with Aadhith C Joseph: full-stack, DevOps and applied AI.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://aadhithcj.site/contact" }],
  }),
  component: Contact,
});

// localStorage key for the unsent message draft (this browser only)
const DRAFT_KEY = "contact-draft";

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
      className="absolute -top-10 left-0 z-40 flex items-center gap-2 border-2 border-border bg-[#FF3C38] text-white px-2.5 py-1 font-mono text-[11px] font-bold shadow-[3px_3px_0px_0px_var(--shadow-color)] rounded-none animate-in fade-in slide-in-from-bottom-2 duration-150 max-w-[calc(100vw-64px)] sm:whitespace-nowrap select-none"
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Who the confirmation card thanks; null while the form is showing
  const [sent, setSent] = useState<{ name: string; email: string } | null>(
    null
  );
  // True for the moment between success and the card: the send button plays its takeoff
  const [launching, setLaunching] = useState(false);
  const isSent = sent !== null || launching;
  const keralaTime = useKeralaTime();
  const [copied, setCopied] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);
  const hcaptchaSiteKey =
    import.meta.env["VITE_HCAPTCHA_SITEKEY"] ||
    "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

  const [errorTarget, setErrorTarget] = useState<{
    field: "name" | "email" | "message" | "captcha";
    message: string;
  } | null>(null);

  const [activeChannel, setActiveChannel] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Restore an unsent draft from this browser
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) setFormData((d) => ({ ...d, ...JSON.parse(saved) }));
    } catch {
      // storage unavailable or corrupt; start empty
    }
  }, []);

  // Keep the draft in this browser so a refresh doesn't lose a long message
  useEffect(() => {
    if (!mounted) return;
    try {
      const hasText = Object.values(formData).some((v) => v.trim() !== "");
      if (hasText) localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
      else localStorage.removeItem(DRAFT_KEY);
    } catch {
      // storage unavailable; drafts just won't persist
    }
  }, [formData, mounted]);

  const copyEmail = () => {
    navigator.clipboard
      .writeText(profile.email)
      .then(() => {
        setCopied(true);
        toast.success("Email address copied");
        window.setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => toast.error(`Couldn't copy. It's ${profile.email}`));
  };

  const isReady =
    formData.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.message.trim() !== "" &&
    Boolean(captchaToken);

  // Auto-dismiss field toast after 5 seconds
  useEffect(() => {
    if (!errorTarget) return;
    const timer = window.setTimeout(() => setErrorTarget(null), 5000);
    return () => window.clearTimeout(timer);
  }, [errorTarget]);

  // Opens the visitor's own mail app with their message filled in
  const mailtoDraftUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || "Project Collaboration / Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Aadhith,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    if (!captchaToken) {
      setErrorTarget({
        field: "captcha",
        message: "Please complete the security check.",
      });
      document.getElementById("hcaptcha-container")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      toast.error("Please complete the hCaptcha verification before sending.");
      return;
    }

    setErrorTarget(null);
    setIsSubmitting(true);

    const accessKey = import.meta.env["VITE_WEB3FORMS_KEY"];

    // Without a form key the message goes through the visitor's mail app instead
    if (!accessKey) {
      setIsSubmitting(false);
      toast("Opening your email app with your message filled in.");
      window.location.href = mailtoDraftUrl;
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject:
            formData.subject.trim() ||
            `Portfolio inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: `${formData.name.trim()} (Portfolio)`,
          replyto: formData.email.trim(),
          "h-captcha-response": captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        const who = {
          name: formData.name.trim(),
          email: formData.email.trim(),
        };
        // Let the paper plane take off before the confirmation card replaces the form
        setLaunching(true);
        window.setTimeout(() => {
          setSent(who);
          setLaunching(false);
        }, 1100);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        toast.error(
          result.message ||
            "Failed to send message. Please try again or email directly."
        );
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch {
      toast.error(
        "Network error. Please check your connection or email directly."
      );
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      index: "01",
      name: "Resume",
      subtitle: "One page: experience, projects, education",
      href: "/resume.pdf",
      external: true,
      icon: FileText,
      markerColor: "bg-[#FF7700] text-black",
      color: "#FF7700",
      quip: "one page. promise.",
    },
    {
      index: "02",
      name: "Email",
      subtitle: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
      icon: Mail,
      markerColor: "bg-[#FF3C38] text-white",
      color: "#FF3C38",
      quip: "I read every one",
    },
    {
      index: "03",
      name: "GitHub",
      subtitle: "github.com/aadhithcj",
      href: profile.github,
      external: true,
      icon: Github,
      markerColor: "bg-[#F1BE05] text-black",
      color: "#F1BE05",
      quip: "commit history doesn't lie",
    },
    {
      index: "04",
      name: "LinkedIn",
      subtitle: "linkedin.com/in/aadhithcj",
      href: profile.linkedin,
      external: true,
      icon: Linkedin,
      markerColor: "bg-[#42BFDD] text-black",
      color: "#42BFDD",
      quip: "yes, I'll accept",
    },
    {
      index: "05",
      name: "Instagram",
      subtitle: `${profile.instagramHandle}: edits and photos`,
      href: profile.instagram,
      external: true,
      icon: Instagram,
      markerColor: "bg-[#CE4760] text-white",
      color: "#CE4760",
      quip: "the fun stuff",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      <PageBackdrop accent={contactItems[activeChannel]?.color ?? "#F1BE05"} />

      <SiteHeader />

      {/* Main Container: exactly matching Projects and Skills dimensions, padding & split grid */}
      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative z-10 w-full min-w-0">
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
            <em className="text-lime not-italic font-normal">something</em>.
          </h1>

          {/* Subtitle - matching text size and mono styling as Projects and Skills */}
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            Have a role, project, or interesting engineering challenge in mind?
            Drop a message below or reach out directly.
          </p>

          {/* Handwritten note aimed at the form, disappears when a field is focused */}
          <AnimatePresence>
            {!formTouched && (
              <motion.div
                exit={{ opacity: 0, y: -10 }}
                className="hidden lg:block absolute right-0 top-0"
              >
                <HandNote>no really, say hi</HandNote>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Numbered Editorial Contact Channels List (matching Projects and Skills row structure) */}
          <div
            className="mt-10 sm:mt-12 flex flex-col border-t-2 border-border w-full min-w-0"
            role="list"
          >
            {contactItems.map((item, i) => {
              const isSelected = activeChannel === i;
              const isEmail = item.name === "Email";
              return (
                <div key={item.name} role="listitem" className="relative">
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    data-crosshair-target
                    onMouseEnter={() => setActiveChannel(i)}
                    onFocus={() => setActiveChannel(i)}
                    className={`group relative py-3.5 sm:py-5 px-3 sm:px-4 transition-all duration-150 block cursor-pointer w-full min-w-0 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                      isSelected
                        ? "bg-[#F1BE05] text-black border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] my-1 -translate-y-0.5 z-10"
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
                          className={`size-9 sm:size-11 grid place-items-center border-2 border-border shadow-[2px_2px_0px_0px_var(--shadow-color)] shrink-0 transition-transform ${item.markerColor}`}
                        >
                          <item.icon className="size-4 sm:size-5" />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                          <span
                            className={`font-display text-xl sm:text-3xl lg:text-4xl transition-all truncate block ${
                              isSelected
                                ? "font-bold text-black"
                                : "font-normal text-foreground group-hover:font-bold"
                            }`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`mt-0.5 sm:mt-1 font-mono text-[10px] sm:text-xs tracking-wider truncate block transition-colors ${
                              isSelected
                                ? "text-black font-bold"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 pl-1">
                        <ArrowUpRight
                          className={`size-4 sm:size-5 transition-transform shrink-0 ${
                            isSelected
                              ? "text-black translate-x-0.5 -translate-y-0.5"
                              : "text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          }`}
                        />
                      </div>
                    </div>
                  </a>
                  {isEmail && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      data-crosshair-target
                      aria-label="Copy email address"
                      onMouseEnter={() => setActiveChannel(i)}
                      className="absolute right-10 sm:right-14 top-1/2 z-20 -translate-y-1/2 inline-flex items-center gap-1.5 border-2 border-border bg-card px-2 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)] transition-all hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_var(--shadow-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                    >
                      {copied ? (
                        <Check className="size-3" aria-hidden="true" />
                      ) : (
                        <Copy className="size-3" aria-hidden="true" />
                      )}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Hand-written line under the channel list that changes as you hover each channel */}
          <motion.p
            key={activeChannel}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-hand text-xl text-muted-foreground"
          >
            ↑ {contactItems[activeChannel]?.quip}
          </motion.p>
        </div>

        {/* Right Column: Featured Neo-Brutalist Transmission Console Card */}
        <div className="w-full min-w-0 border-2 border-border bg-card p-4 sm:p-7 shadow-[5px_5px_0px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_0px_var(--shadow-color)] relative flex flex-col overflow-hidden">
          {/* Card Top Header with Live Status Indicator */}
          <div className="flex items-center justify-between border-b-2 border-border pb-4">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              TRANSMISSION // 01
            </span>
            <div className="flex items-center gap-2">
              <span
                className={`size-2 rounded-full ${
                  isSubmitting
                    ? "bg-[#F1BE05]"
                    : isSent || isReady
                      ? "bg-[#22C55E]"
                      : !captchaToken &&
                          formData.name.trim() &&
                          formData.message.trim()
                        ? "bg-[#F1BE05] animate-pulse"
                        : "bg-muted-foreground/40"
                }`}
              />
              <span className="font-mono text-[10px] font-bold uppercase text-foreground/80 tracking-wider">
                {isSubmitting
                  ? "DISPATCHING..."
                  : isSent
                    ? "TRANSMITTED"
                    : isReady
                      ? "READY TO DISPATCH"
                      : !captchaToken &&
                          formData.name.trim() &&
                          formData.message.trim()
                        ? "CAPTCHA PENDING"
                        : "WAITING FOR YOU"}
              </span>
            </div>
          </div>

          {/* Terminal / Info Strip */}
          <div className="mt-4 border-2 border-border bg-surface-secondary/70 p-3 font-mono text-[11px] text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-2 overflow-hidden w-full min-w-0">
            <div className="min-w-0 break-all truncate">
              <span className="text-foreground font-bold">RECIPIENT: </span>
              <span className="text-foreground/90">{profile.email}</span>
            </div>
            <div className="text-[10px] font-bold text-foreground uppercase border border-border px-1.5 py-0.5 bg-card shrink-0 tabular-nums">
              {keralaTime ? `${keralaTime} in Kerala (IST)` : "Kerala (IST)"}
            </div>
          </div>

          {sent ? (
            <div
              role="status"
              className="mt-5 flex flex-col items-start gap-4 border-2 border-border bg-surface-secondary/60 p-5 sm:p-6"
            >
              <span className="inline-flex -rotate-2 items-center gap-2 border-2 border-border bg-[#22C55E] px-2.5 py-1 font-mono text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_var(--shadow-color)]">
                <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                Message sent
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground">
                Thanks, {sent.name}.
              </h2>
              <p className="max-w-sm font-mono text-sm leading-relaxed text-muted-foreground">
                It's in my inbox. I'll reply to{" "}
                <span className="font-bold text-foreground">{sent.email}</span>,
                usually within a day.
              </p>
              <button
                type="button"
                onClick={() => setSent(null)}
                data-crosshair-target
                className="mt-1 inline-flex items-center gap-2 border-2 border-border bg-card px-4 py-2 font-mono text-xs font-black uppercase tracking-wider text-foreground shadow-[3px_3px_0px_0px_var(--shadow-color)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--shadow-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <RotateCcw className="size-3.5" aria-hidden="true" />
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              onFocus={() => setFormTouched(true)}
              noValidate
              className="mt-5 space-y-4 w-full min-w-0"
            >
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
                      "w-full border-2 bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--shadow-color)] focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--shadow-color)] focus:ring-1 transition-all",
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
                      "w-full border-2 bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--shadow-color)] focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--shadow-color)] focus:ring-1 transition-all",
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
                  SUBJECT{" "}
                  <span className="text-muted-foreground font-normal text-[9px]">
                    (OPTIONAL)
                  </span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software engineering role / Project collaboration"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full border-2 border-border bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--shadow-color)] focus:outline-none focus:border-foreground focus:shadow-[3px_3px_0px_0px_var(--shadow-color)] focus:ring-1 focus:ring-foreground transition-all"
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
                    "w-full resize-none border-2 bg-background px-3 py-2 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 shadow-[2px_2px_0px_0px_var(--shadow-color)] focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--shadow-color)] focus:ring-1 transition-all",
                    errorTarget?.field === "message"
                      ? "border-[#FF3C38] focus:border-[#FF3C38] focus:ring-[#FF3C38]"
                      : "border-border focus:border-foreground focus:ring-foreground"
                  )}
                />
              </div>

              {/* Neo-Brutalist hCaptcha Security Verification Module */}
              <div
                id="hcaptcha-container"
                className={cn(
                  "relative border-2 bg-surface-secondary/40 p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all",
                  errorTarget?.field === "captcha"
                    ? "border-[#FF3C38] ring-1 ring-[#FF3C38]"
                    : captchaToken
                      ? "border-[#22C55E]"
                      : "border-border"
                )}
              >
                {errorTarget?.field === "captcha" && (
                  <FieldToast
                    message={errorTarget.message}
                    onClose={() => setErrorTarget(null)}
                  />
                )}

                {/* Security Strip Header */}
                <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={cn(
                        "size-6 grid place-items-center border-2 border-border shadow-[1px_1px_0px_0px_var(--shadow-color)] shrink-0",
                        captchaToken
                          ? "bg-[#22C55E] text-black"
                          : "bg-[#F1BE05] text-black"
                      )}
                    >
                      <ShieldCheck className="size-3.5" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-foreground truncate">
                      SECURITY PROTOCOL // ANTI-SPAM
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        captchaToken
                          ? "bg-[#22C55E]"
                          : "bg-[#F1BE05] animate-pulse"
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 border border-border",
                        captchaToken
                          ? "bg-[#22C55E] text-black border-[#22C55E]"
                          : "bg-background text-foreground"
                      )}
                    >
                      {captchaToken ? "VERIFIED ✓" : "REQUIRED"}
                    </span>
                  </div>
                </div>

                {/* hCaptcha Widget Container */}
                <div className="flex justify-center items-center min-h-19.5 overflow-x-auto py-1">
                  {!mounted ? (
                    <div className="h-19.5 w-full flex items-center justify-center font-mono text-[11px] text-muted-foreground/80 border-2 border-dashed border-border/60 bg-background/50">
                      [ INITIALIZING SECURITY VERIFICATION... ]
                    </div>
                  ) : (
                    <HCaptcha
                      key={isDark ? "dark" : "light"}
                      ref={captchaRef}
                      sitekey={hcaptchaSiteKey}
                      reCaptchaCompat={false}
                      theme={isDark ? "dark" : "light"}
                      onVerify={(token) => {
                        setCaptchaToken(token);
                        if (errorTarget?.field === "captcha")
                          setErrorTarget(null);
                      }}
                      onExpire={() => setCaptchaToken(null)}
                      onError={() => {
                        setCaptchaToken(null);
                        toast.error(
                          "Captcha verification error. Please retry the checkbox."
                        );
                      }}
                    />
                  )}
                </div>

                {/* Metadata Footer */}
                <div className="mt-2.5 pt-2 border-t border-border/40 flex items-center justify-between font-mono text-[9px] text-muted-foreground tracking-wider">
                  <span>PROTECTED BY HCAPTCHA</span>
                </div>
              </div>

              {/* Botcheck honeypot field */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Action Button: interactive plane takeoff animation on sent */}
              <button
                type="submit"
                disabled={isSubmitting || isSent}
                data-crosshair-target
                className={cn(
                  "relative w-full flex items-center justify-center gap-2.5 border-2 border-border py-3 px-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground overflow-hidden select-none",
                  isSent
                    ? "bg-[#22C55E] text-black shadow-[2px_2px_0px_0px_var(--shadow-color)] translate-x-0.5 translate-y-0.5 cursor-default"
                    : "bg-[#F1BE05] text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none",
                  isSubmitting && "opacity-80 cursor-wait"
                )}
              >
                {/* Button Status Text (no tickmark) */}
                <span className="relative z-10 font-mono font-black tracking-wider">
                  {isSubmitting
                    ? "SENDING MESSAGE..."
                    : isSent
                      ? "MESSAGE SENT"
                      : "SEND MESSAGE"}
                </span>

                {/* Plane Flight Animation Container */}
                <div className="relative size-4 flex items-center justify-center shrink-0">
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          rotate: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                        className="size-4 grid place-items-center"
                      >
                        <Send className="size-3.5" />
                      </motion.div>
                    ) : isSent ? (
                      <div key="sent-takeoff" className="relative size-4">
                        {/* Wind flight trails */}
                        <motion.span
                          initial={{ opacity: 0, scaleX: 0, x: 0 }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scaleX: [0, 1.4, 0.3],
                            x: [-12, -4, 6],
                          }}
                          transition={{ duration: 0.65, ease: "easeOut" }}
                          className="absolute top-2 -left-3 h-0.5 w-4 bg-black/70 origin-left"
                        />
                        <motion.span
                          initial={{ opacity: 0, scaleX: 0, x: 0 }}
                          animate={{
                            opacity: [0, 0.6, 0],
                            scaleX: [0, 1, 0.2],
                            x: [-10, -2, 8],
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.08,
                            ease: "easeOut",
                          }}
                          className="absolute top-3 -left-2 h-[1.5px] w-3 bg-black/50 origin-left"
                        />

                        {/* Paper plane leaving: wind up, bank, and zoom off diagonally */}
                        <motion.div
                          initial={{
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 1,
                            opacity: 1,
                          }}
                          animate={{
                            x: [0, -5, 22, 70],
                            y: [0, 2, -20, -55],
                            rotate: [0, -15, 32, 45],
                            scale: [1, 0.9, 1.2, 0.4],
                            opacity: [1, 1, 0.9, 0],
                          }}
                          transition={{
                            duration: 0.9,
                            times: [0, 0.15, 0.5, 1],
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="size-4 flex items-center justify-center"
                        >
                          <Send className="size-4 text-black" />
                        </motion.div>
                      </div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="size-4 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <Send className="size-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>

              <p className="font-mono text-[10px] text-muted-foreground text-center">
                Goes straight to my inbox. I usually reply within a day. Your
                draft is kept in this browser until it's sent.
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
