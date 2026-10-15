import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import {
  FileText,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import {
  Button as StatefulButton,
  type ButtonStatus,
} from "@/components/ui/stateful-button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Email, GitHub, LinkedIn and direct contact for Aadhith C Joseph.",
      },
      { property: "og:title", content: "Contact — Aadhith C Joseph" },
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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<ButtonStatus>("idle");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(formData.subject || "Project Collaboration / Inquiry")}&body=${encodeURIComponent(
    `Hi Aadhith,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  const validate = () => {
    if (!formData.name.trim()) {
      return { valid: false, message: "Please fill out your name." };
    }
    const email = formData.email.trim();
    if (!email) {
      return { valid: false, message: "Please fill out your email address." };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        valid: false,
        message: "Please enter a valid email address (e.g. alex@domain.com).",
      };
    }
    if (!formData.message.trim()) {
      return {
        valid: false,
        message: "Please write a message before sending.",
      };
    }
    return { valid: true, message: "" };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "loading") return;

    const resetFeedback = (delay: number) => {
      window.setTimeout(() => {
        setStatus("idle");
        setFeedback(null);
      }, delay);
    };

    const validation = validate();

    if (!validation.valid) {
      setStatus("error");
      setFeedback({
        type: "error",
        message: validation.message,
      });

      resetFeedback(2400);
      return;
    }

    // Open the tab during the user's submit action to avoid popup blockers.
    const composeWindow = window.open("about:blank", "_blank");

    if (!composeWindow) {
      setStatus("error");
      setFeedback({
        type: "error",
        message: "Pop-up blocked. Allow pop-ups or use the direct Gmail link.",
      });

      resetFeedback(3000);
      return;
    }

    composeWindow.opener = null;
    composeWindow.location.href = gmailComposeUrl;

    setStatus("success");
    setFeedback({
      type: "success",
      message: "Gmail opened. Review your message and press Send.",
    });

    resetFeedback(3000);
  };

  const directGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=Hello%20Aadhith`;

  const links = [
    {
      label: "gmail",
      value: profile.email,
      href: directGmailLink,
      note: "opens gmail compose",
      isMail: true,
    },
    {
      label: "github",
      value: "github.com/aadhithcj",
      href: profile.github,
      note: "code & repositories",
      isMail: false,
    },
    {
      label: "linkedin",
      value: "linkedin.com/in/aadhithcj",
      href: profile.linkedin,
      note: "career & networking",
      isMail: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-6 pb-24 pt-12">
        <p className="label-mono">
          <DecryptedText
            text={`contact / ${profile.location}`}
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </p>

        <h1 className="mt-4 font-display text-6xl leading-[1.05] sm:text-7xl md:text-9xl">
          Let's build <em className="italic text-lime not-italic">something</em>
          .
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
          Available for software engineering roles, DevOps automation,
          full-stack systems, or consulting. Drop a message below or reach out
          directly.
        </p>

        {/* Resume Card */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-lg border border-line bg-background/80 text-lime">
              <FileText className="size-6" />
            </div>
            <div>
              <p className="font-display text-xl sm:text-2xl">Resume</p>
              <p className="font-mono text-xs text-muted-foreground">
                PDF document · Education, experience, and full stack repertoire
              </p>
            </div>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-lime/60 bg-lime/10 px-5 py-2.5 font-mono text-xs text-lime transition-all hover:bg-lime hover:text-black hover:shadow-lg sm:text-sm"
          >
            <span>View Resume (PDF)</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Two-column layout: Direct Links & Send Message Form */}
        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2">
          {/* Direct channels - styled to match right section height */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <h2 className="label-mono text-xs tracking-wider">
                <DecryptedText
                  text="# DIRECT CHANNELS"
                  speed={25}
                  sequential
                  animateOn="view"
                  encryptedClassName="text-lime"
                />
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground/70">
                ACTIVE / MONITORED
              </span>
            </div>
            <ul className="flex flex-1 flex-col justify-between divide-y divide-line">
              {links.map((link) => (
                <li
                  key={link.label}
                  className="flex-1 flex flex-col justify-center"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-crosshair-target
                    className="group flex flex-col rounded-md py-4 transition-colors hover:border-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
                  >
                    <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="label-mono">{link.label}</span>
                      <span className="break-words font-display text-xl leading-tight transition-colors group-hover:italic group-hover:text-lime sm:text-2xl md:text-3xl">
                        {link.value} ↗
                      </span>
                    </div>
                    <span className="mt-0.5 font-mono text-xs text-muted-foreground/70">
                      {link.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Message Box - sized to match left channels */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 animate-pulse rounded-full bg-lime" />
                <h3 className="label-mono text-xs">SEND A DIRECT MESSAGE</h3>
              </div>
              <Mail className="size-4 text-muted-foreground" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="label-mono mb-1 block text-[10px]"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="Alex"
                    data-crosshair-target
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="label-mono mb-1 block text-[10px]"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    placeholder="alex@domain.com"
                    data-crosshair-target
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="label-mono mb-1 block text-[10px]"
                >
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software engineering role / Project"
                  data-crosshair-target
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="label-mono mb-1 block text-[10px]"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={2}
                  required
                  aria-required="true"
                  placeholder="Write your note or idea here..."
                  data-crosshair-target
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
                />
              </div>

              <div className="relative">
                {/* Floating toast hovering on top of the button */}
                {feedback && (
                  <div
                    role={feedback.type === "error" ? "alert" : "status"}
                    aria-live={
                      feedback.type === "error" ? "assertive" : "polite"
                    }
                    className={cn(
                      "pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3.5 py-1 font-mono text-[11px] font-medium shadow-2xl backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 zoom-in-95 z-30 flex items-center gap-1.5",
                      feedback.type === "error"
                        ? "border-red-500/60 bg-surface/95 text-red-400 dark:bg-zinc-950/95"
                        : "border-lime/60 bg-surface/95 text-lime dark:bg-zinc-950/95"
                    )}
                  >
                    {feedback.type === "error" ? (
                      <span className="font-bold text-red-500">✕</span>
                    ) : (
                      <span className="font-bold text-lime">✓</span>
                    )}
                    <span>{feedback.message}</span>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 border-r border-b",
                        feedback.type === "error"
                          ? "border-red-500/60 bg-surface dark:bg-zinc-950"
                          : "border-lime/60 bg-surface dark:bg-zinc-950"
                      )}
                    />
                  </div>
                )}

                <StatefulButton
                  type="submit"
                  status={status}
                  data-crosshair-target
                  icon={
                    <Send className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  }
                  className="w-full rounded-md bg-lime px-3 font-mono text-xs font-semibold text-black transition-all hover:bg-lime/90 hover:shadow-md"
                >
                  <span>SEND MESSAGE VIA GMAIL</span>
                </StatefulButton>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
