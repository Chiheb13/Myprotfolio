import { motion } from "framer-motion";
import { Database, Brain, Layers } from "lucide-react";

const items = [
  {
    icon: Database,
    title: "Business Intelligence",
    desc: "Data analysis for decision-making, ETL modeling and Data Warehousing with Power BI, SPSS and SQL Server.",
    metrics: [
      { label: "ETL pipelines", value: "12+" },
      { label: "Dashboards", value: "8" },
    ],
  },
  {
    icon: Brain,
    title: "Deep Learning",
    desc: "Design and deployment of deep algorithms (NLP, embeddings, classification) for predictive analytics.",
    metrics: [
      { label: "Models", value: "6" },
      { label: "Accuracy avg", value: "92%" },
    ],
  },
  {
    icon: Layers,
    title: "Big Data",
    desc: "Manipulation and processing of large data volumes — Pandas, NumPy, distributed pipelines & SQL at scale.",
    metrics: [
      { label: "Records processed", value: "10M+" },
      { label: "Query opt.", value: "3×" },
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-data">
              ▍ Data expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Turning data into <span className="gradient-text">decisions</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            From raw datasets to predictive models and executive dashboards — a
            complete data pipeline, end to end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-data/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-data/10 text-data flex items-center justify-center mb-5">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-3">
                {it.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xl font-bold gradient-text">{m.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
