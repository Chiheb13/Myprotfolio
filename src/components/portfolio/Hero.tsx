import { motion } from "framer-motion";
import { ArrowRight, MapPin, Code2, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-data animate-pulse" />
          Available for opportunities
          <span className="mx-2">·</span>
          <MapPin className="w-3 h-3" /> Tunis, Tunisia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Yahia Chiheb.
          <br />
          <span className="gradient-text">Fullstack Dev</span>
          <span className="text-muted-foreground"> × </span>
          <span className="gradient-text">BI Specialist.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          I design data-driven products — from React & Flutter interfaces to
          Deep Learning pipelines and BI dashboards that turn raw data into
          decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
          >
            View projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Dual identity cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Code2,
              title: "Code",
              color: "text-code",
              bar: "bg-code",
              desc: "React · Next.js · Flutter · Node · FastAPI",
              stat: "20+ projects shipped",
            },
            {
              icon: BarChart3,
              title: "Data",
              color: "text-data",
              bar: "bg-data",
              desc: "Python · Power BI · SPSS · Deep Learning · ETL",
              stat: "BI · NLP · Predictive models",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className={`absolute top-0 left-0 h-1 w-full ${c.bar} opacity-60`} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                  <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                    {c.title}
                  </span>
                </div>
                <span className={`text-xs font-mono ${c.color}`}>0{i + 1}</span>
              </div>
              <p className="mt-4 text-lg font-medium">{c.desc}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.stat}</p>
              {/* mini chart */}
              <div className="mt-6 flex items-end gap-1 h-12">
                {Array.from({ length: 16 }).map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ height: 4 }}
                    whileInView={{ height: `${20 + Math.abs(Math.sin(j + i)) * 80}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + j * 0.03 }}
                    className={`flex-1 rounded-sm ${c.bar} opacity-70 group-hover:opacity-100 transition`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
