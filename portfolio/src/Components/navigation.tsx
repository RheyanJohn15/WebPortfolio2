"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/" && href.includes("contact");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>
          {site.name.split(" ")[0].toLowerCase()}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                isActive(link.href)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.resumePath}
            download
            className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent/20"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-mono text-sm uppercase tracking-[0.14em]",
                  isActive(link.href) ? "text-accent" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.resumePath}
              download
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.14em] text-accent"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
