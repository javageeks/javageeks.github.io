import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/navigation";
import { useIsHydrated } from "@/hooks/useIsHydrated";

const buildSteps = [
  { label: "architecture.review", status: "passed" },
  { label: "distributed-systems.design", status: "passed" },
  { label: "ai-engineering.integrate", status: "passed" },
  { label: "delivery.ship", status: "running" },
];

export function Hero() {
  const github = socialLinks.find((l) => l.id === "github");
  const linkedin = socialLinks.find((l) => l.id === "linkedin");
  const resume = socialLinks.find((l) => l.id === "resume");
  const hydrated = useIsHydrated();

  // Only hide-then-reveal once the client has hydrated. On the server (and on
  // the first client render that must match it) we render the final visible
  // state so pre-rendered HTML is actually visible to crawlers / link previews.
  const revealFrom = (fromY: number) =>
    hydrated ? { opacity: 0, y: fromY } : { opacity: 1, y: 0 };
  const revealFromX = (fromX: number) =>
    hydrated ? { opacity: 0, x: fromX } : { opacity: 1, x: 0 };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      {/* Ambient grid + glow background */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-shell relative grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.span
            initial={revealFrom(10)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal-green animate-blink" />
            Open to Technical Lead &amp; AI Engineering roles
          </motion.span>

          <motion.h1
            initial={revealFrom(16)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl"
          >
            Shaik Khaja Hussain
          </motion.h1>

          <motion.p
            initial={revealFrom(12)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 text-lg font-medium text-accent-soft"
          >
            Enterprise Technical Lead — Enterprise Java, Distributed Systems &amp; AI Engineering
          </motion.p>

          <motion.p
            initial={revealFrom(16)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-400"
          >
            Nearly 15 years leading Enterprise Java platforms, distributed systems, and cloud
            architecture across telecom, banking, and financial services — now integrating
            AI-enabled software engineering into enterprise delivery with Claude Code, MCP, and
            Spring AI.
          </motion.p>

          <motion.div
            initial={revealFrom(16)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {resume && (
              <Button as="a" href={resume.href} download variant="primary" icon={<FiDownload size={16} />}>
                Download Resume
              </Button>
            )}
            {github && (
              <Button
                as="a"
                href={github.href}
                target="_blank"
                rel="noreferrer noopener"
                variant="secondary"
                icon={<FiGithub size={16} />}
              >
                View GitHub
              </Button>
            )}
            {linkedin && (
              <Button
                as="a"
                href={linkedin.href}
                target="_blank"
                rel="noreferrer noopener"
                variant="ghost"
                icon={<FiLinkedin size={16} />}
              >
                LinkedIn
              </Button>
            )}
          </motion.div>
        </div>

        {/* Signature element: a decorative terminal-style panel — not a live status readout */}
        <motion.div
          initial={revealFrom(20)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="panel overflow-hidden"
          role="img"
          aria-label="Decorative console panel listing focus areas: architecture, distributed systems, AI engineering, and delivery"
        >
          <div className="flex items-center gap-2 border-b border-base-500 bg-base-800/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5665A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-green" />
            <span className="ml-3 font-mono text-xs text-ink-500">focus-areas.log &nbsp;·&nbsp; decorative</span>
          </div>
          <div className="space-y-3 px-5 py-6 font-mono text-sm">
            {buildSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={revealFromX(-8)}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                className="flex items-center justify-between"
              >
                <span className="text-ink-300">{step.label}</span>
                <span
                  className={
                    step.status === "passed"
                      ? "text-signal-green"
                      : "text-signal-amber animate-blink"
                  }
                >
                  {step.status === "passed" ? "✓ focus" : "● current"}
                </span>
              </motion.div>
            ))}
            <div className="mt-4 border-t border-base-500 pt-4 text-ink-500">
              <span className="text-accent-soft">#</span> an illustrative panel — not a live status
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-ink-200 transition-colors"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
