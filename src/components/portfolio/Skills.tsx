import { motion } from "framer-motion";

const groups = [
  {
    title: "Frameworks",
    accent: "code",
    items: ["React", "Next.js", "Node.js", "Flutter", "FastAPI", "Express", "Laravel"],
  },
  {
    title: "Data Science",
    accent: "data",
    items: ["Python", "Pandas", "NumPy", "R", "SPSS", "Deep Learning", "NLP"],
  },
  {
    title: "Business Intelligence",
    accent: "data",
    items: ["Power BI", "SQL Server", "SSAS", "ETL", "Data Warehousing"],
  },
  {
    title: "Databases",
    accent: "code",
    items: ["PostgreSQL", "MongoDB", "SQL Server", "Prisma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ▍ Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Technical skills.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{g.title}</h3>
                <span
                  className={`w-2 h-2 rounded-full ${g.accent === "code" ? "bg-code" : "bg-data"}`}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-muted text-foreground/80 hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
