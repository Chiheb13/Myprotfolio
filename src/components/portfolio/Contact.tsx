import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 bg-card"
        >
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-widest text-data">
              ▍ Let's talk
            </span>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              Have a project in mind?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Open to fullstack, data engineering and BI opportunities. I usually
              reply within 24 hours.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl">
              {[
                { icon: Mail, label: "yahyachiheb8@gmail.com", href: "mailto:yahyachiheb8@gmail.com" },
                { icon: Phone, label: "+216 92 701 708", href: "tel:+21692701708" },
                { icon: Linkedin, label: "linkedin.com/in/chihebyahyadev", href: "https://www.linkedin.com/in/chihebyahyadev" },
                { icon: Github, label: "github.com/Chiheb13", href: "https://github.com/Chiheb13" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-background hover:border-foreground/40 transition"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <c.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
                    {c.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Yahia Chiheb · Built with React + Framer Motion</p>
          <p className="font-mono">Tunis · Tunisia</p>
        </footer>
      </div>
    </section>
  );
}
