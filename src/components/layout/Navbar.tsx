import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { navItems, socialLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { scrolled } = useScrollDirection();

  const github = socialLinks.find((link) => link.id === "github");
  const linkedin = socialLinks.find((link) => link.id === "linkedin");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base-900/85 backdrop-blur-md border-b border-base-500" : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#hero" className="font-mono text-sm font-semibold text-ink-100 tracking-tight">
          <span className="text-accent">&gt;</span> khaja.hussain
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  activeId === item.id
                    ? "text-ink-100 bg-base-700"
                    : "text-ink-400 hover:text-ink-100 hover:bg-base-700/60"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={github.label}
              className="text-ink-400 hover:text-ink-100 transition-colors"
            >
              <FiGithub size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={linkedin.label}
              className="text-ink-400 hover:text-ink-100 transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="text-ink-100 lg:hidden"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-base-500 bg-base-900/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-shell flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-ink-300 hover:bg-base-700 hover:text-ink-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
