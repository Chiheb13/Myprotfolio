import { motion } from "framer-motion";

const exp = [
  {
    period: "Jul 2025 — Oct 2025",
    role: "Software Developer (Part-time)",
    company: "Solid Wall Consulting",
    desc: "Continued building the AI recruitment platform: scaled mobile/web stack and added advanced AI features.",
  },
  {
    period: "Feb 2025 — Jun 2025",
    role: "End-of-studies Internship (PFE)",
    company: "Solid Wall Consulting",
    desc: "Built a full AI-powered recruitment app: Flutter candidate app, React recruiter dashboard, FastAPI ML service with Gemini.",
  },
  {
    period: "Jan 2024",
    role: "Junior Software Developer",
    company: "Solid Wall Consulting",
    desc: "Developed the “Player of the Month” Laravel web app — voting system, rankings and clean UX.",
  },
  {
    period: "Jan 2023",
    role: "Mobile Developer Intern",
    company: "Solid Wall Consulting",
    desc: "Full immersion in mobile development with Agile Scrum, contributing to design through deployment.",
  },
];

export function Experience() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ▍ Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">A timeline of building.</h2>
        </motion.div>

        <div className="relative pl-6 md:pl-8">
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-border" />
          {exp.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[18px] md:-left-[22px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-code to-data ring-4 ring-background" />
              <div className="text-xs font-mono text-muted-foreground">{e.period}</div>
              <div className="mt-1 font-semibold">{e.role}</div>
              <div className="text-sm text-muted-foreground">{e.company}</div>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
