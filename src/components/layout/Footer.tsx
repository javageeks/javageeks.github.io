import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { navItems, socialLinks } from "@/data/navigation";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  resume: FiDownload,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-500 bg-base-900">
      <div className="container-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#hero" className="font-mono text-sm font-semibold text-ink-100">
              <span className="text-accent">&gt;</span> tech.lead
            </a>
            <p className="mt-3 max-w-xs text-sm text-ink-400 leading-relaxed">
              Enterprise Technical Lead building scalable platforms with AI-enabled software
              engineering.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-sm text-ink-400 hover:text-ink-100 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Connect</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel={link.icon === "email" ? undefined : "noreferrer noopener"}
                      className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-100 transition-colors"
                    >
                      <Icon size={15} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-base-500 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Enterprise Technical Lead. All rights reserved.</p>
          <p className="font-mono">Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
