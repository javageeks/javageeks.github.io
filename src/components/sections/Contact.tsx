import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { socialLinks } from "@/data/navigation";
import { staggerContainer, fadeUp, scrollRevealViewport } from "@/utils/animations";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  resume: FiDownload,
};

const descriptions: Record<string, string> = {
  github: "Browse open-source frameworks and reference architectures.",
  linkedin: "Connect for engagements, roles, and collaboration.",
  email: "Reach out directly for a conversation.",
  resume: "Download a complete summary of experience.",
};

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about your platform"
      description="Open to enterprise architecture engagements, technical leadership roles, and advisory work."
      tone="raised"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={staggerContainer()}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <motion.a
              key={link.id}
              variants={fadeUp}
              href={link.href}
              target={link.icon === "email" ? undefined : "_blank"}
              rel={link.icon === "email" ? undefined : "noreferrer noopener"}
              download={link.icon === "resume" ? true : undefined}
              className="panel group flex flex-col p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-soft transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-semibold text-ink-100">{link.label}</h3>
              <p className="mt-1 text-sm text-ink-400">{descriptions[link.icon]}</p>
            </motion.a>
          );
        })}
      </motion.div>

      <Card as="div" hoverable={false} className="mt-8 text-center">
        <p className="text-ink-300">
          Prefer email? Reach out at{" "}
          <a
            href="mailto:hussainshaik7913@gmail.com"
            className="font-medium text-accent-soft hover:underline"
          >
            hussainshaik7913@gmail.com
          </a>
          <span className="mx-2 text-ink-500">·</span>
          <span className="text-ink-400">Based in Hyderabad, India</span>
        </p>
      </Card>
    </Section>
  );
}
