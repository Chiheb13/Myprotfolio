import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, BarChart3, ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Mode = "code" | "data";

const projects = {
  code: [
    {
      title: "AI Recruitment Platform",
      tag: "Deep Learning · NLP",
      desc: "Full-stack hiring platform with automated CV parsing, semantic matching with embeddings, and AI-generated QCM tests powered by Gemini. Flutter app for candidates, React dashboard for recruiters, FastAPI service for ML.",
      stack: ["Flutter", "React", "FastAPI", "PostgreSQL", "NLP"],
      accent: "code",
      repo: "https://github.com/Chiheb13/dashboardRecruiter",
      detailLink: "/projects/recruitment-app",
    },
    {
      title: "Food Delivery System",
      tag: "Mobile · Realtime",
      desc: "Cross-platform delivery app with real-time order tracking, restaurant analytics dashboard and a Node/Express + PostgreSQL backend.",
      stack: ["Flutter", "React", "Express", "PostgreSQL"],
      accent: "code",
      repo: "https://github.com/Chiheb13/Food-delivery-app",
      detailLink: "/projects/food-delivery",
    },
    {
      title: "Service Linker",
      tag: "Web · Marketplace",
      desc: "Web platform connecting users with service providers, with Clerk auth, Laravel backend and a typed React/TS frontend.",
      stack: ["React", "TypeScript", "Laravel", "Clerk"],
      accent: "code",
      repo: "https://github.com/Chiheb13/ServiceLinker",
    },
  ],
  data: [
    {
      title: "AI Recruitment — NLP Engine",
      tag: "Deep Learning · NLP",
      desc: "Designed the ML core: CV parsing pipeline, transformer embeddings for candidate–offer matching, and an automated QCM generator. Reduced manual screening time by ~70%.",
      stack: ["Python", "FastAPI", "Transformers", "Pandas"],
      accent: "data",
      detailLink: "/projects/recruitment-app",
    },
    {
      title: "Sales BI Dashboard",
      tag: "Big Data · ETL · Analytics",
      desc: "Enterprise data warehouse with incremental CDC, SQL Server cubes, and Power BI analytics. Data cleaning, staging layer, dimensional modeling, and SSAS for real-time BI.",
      stack: ["SQL Server", "SSAS", "Power BI", "ETL", "CDC"],
      accent: "data",
      detailLink: "/projects/sales-bi-dashboard",
    },
    {
      title: "Statistical Study — SPSS",
      tag: "SPSS · R",
      desc: "Academic study: cleaned, modeled and analyzed survey data with SPSS & R — descriptive stats, ANOVA and regression models with publishable visuals.",
      stack: ["SPSS", "R", "Statistics"],
      accent: "data",
    },
  ],
};

export function Projects() {
  const [mode, setMode] = useState<Mode>("code");
  const list = projects[mode];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              ▍ Selected work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Projects across the <span className="gradient-text">stack</span>.
            </h2>
          </div>

          <div className="relative inline-flex p-1 rounded-full border border-border bg-card">
            {(["code", "data"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="relative z-10 px-5 py-2 text-sm font-medium flex items-center gap-2"
              >
                {m === "code" ? <Code2 className="w-4 h-4" /> : <BarChart3 className="w-4 h-4" />}
                <span className={mode === m ? "text-background" : "text-muted-foreground"}>
                  {m === "code" ? "Code" : "Data"}
                </span>
              </button>
            ))}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute top-1 bottom-1 w-1/2 rounded-full bg-foreground"
              style={{ left: mode === "code" ? 4 : "calc(50% - 0px)" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {list.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 rounded-2xl border border-border bg-card overflow-hidden hover:border-${p.accent}/50 transition-colors`}
              >
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20 ${
                    p.accent === "code" ? "bg-code" : "bg-data"
                  }`}
                />
                <span
                  className={`text-[11px] font-mono uppercase tracking-widest ${
                    p.accent === "code" ? "text-code" : "text-data"
                  }`}
                >
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs">
                  {("detailLink" in p && p.detailLink) && (
                    <Link to={p.detailLink as string} className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      View details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {"repo" in p && p.repo ? (
                    <a href={p.repo as string} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 opacity-60 text-muted-foreground">
                      <ExternalLink className="w-3.5 h-3.5" /> Case study
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
