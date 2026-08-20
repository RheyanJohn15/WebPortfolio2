"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { site } from "@/data/site";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending message...");

    if (!name || !email || !message) {
      toast.update(toastId, {
        render: "All fields are required.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      toast.update(toastId, {
        render: "Please enter a valid email address.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed");

      toast.update(toastId, {
        render: "Message sent successfully.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.update(toastId, {
        render: "Failed to send message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    setLoading(false);
  };

  const contacts = [
    {
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: site.contact.phone,
      href: `tel:${site.contact.phone}`,
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rheyan-john-blanco",
      href: site.contact.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/RheyanJohn15",
      href: site.contact.github,
      icon: Github,
    },
  ];

  return (
    <footer id="contact" className="relative border-t border-border bg-noise">
      <div className="section-shell pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono-label mb-3">05 — Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Open to engineering leadership, full-stack roles, and consulting on
            SaaS and cloud systems.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 rounded border border-border bg-card p-2 text-accent">
                  <item.icon size={16} />
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground transition-colors group-hover:text-accent">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}

            <a
              href={site.resumePath}
              download
              className="mt-4 inline-flex rounded-md border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent/20"
            >
              Download CV
            </a>
          </div>

          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={5}
              className="resize-none rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
      <ToastContainer
        theme="dark"
        position="bottom-right"
        toastStyle={{
          background: "hsl(222 22% 9%)",
          border: "1px solid hsl(220 14% 18%)",
          color: "hsl(210 20% 96%)",
          fontFamily: "var(--font-sans)",
        }}
      />
    </footer>
  );
}
