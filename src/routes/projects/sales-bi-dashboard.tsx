import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Database, TrendingUp, BarChart3, Layers, Zap } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";

export const Route = createFileRoute("/projects/sales-bi-dashboard")({
  component: SalesBIDashboardPage,
  head: () => ({
    meta: [
      { title: "Sales BI Dashboard — Yahia Chiheb" },
      {
        name: "description",
        content: "Enterprise data warehouse with ETL pipeline, incremental CDC, and Power BI analytics. Big Data, Data Engineering, Business Intelligence.",
      },
    ],
  }),
});

function SalesBIDashboardPage() {
  const router = useRouter();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-20 pb-24">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <button onClick={() => router.history.back()} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to portfolio</span>
              </button>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-data">
                    Big Data · Data Engineering · Business Intelligence
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
                    Sales BI <span className="gradient-text">Dashboard</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                    Enterprise-grade data warehouse platform delivering real-time sales analytics, business intelligence dashboards, and actionable insights for data-driven decision-making.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {["SQL Server", "SSAS", "Power BI", "ETL", "Data Warehouse", "CDC", "Big Data", "Data Analytics"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-data/10 text-data font-mono text-sm border border-data/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-96 lg:h-full rounded-2xl bg-gradient-to-br from-data/20 to-transparent border border-data/20 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 mx-auto text-data opacity-50 mb-4" />
                    <p className="text-muted-foreground">Data Warehouse & Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture Overview */}
          <section className="py-24 bg-card/50 border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Data Pipeline Architecture</h2>

              <div className="relative">
                {/* Flow diagram */}
                <div className="hidden md:grid md:grid-cols-5 gap-4 mb-12">
                  {[
                    { title: "Source Systems", icon: "📊", desc: "Transactional Databases" },
                    { title: "Data Extraction", icon: "🔄", desc: "CDC & ETL Jobs" },
                    { title: "Staging Layer", icon: "📦", desc: "Data Cleansing" },
                    { title: "Data Warehouse", icon: "🏢", desc: "SQL Server DW" },
                    { title: "Analytics", icon: "📈", desc: "Power BI & Reports" },
                  ].map((stage, i) => (
                    <div key={i} className="relative">
                      <div className="p-4 rounded-lg bg-background border border-border text-center">
                        <div className="text-3xl mb-2">{stage.icon}</div>
                        <h4 className="font-semibold text-sm">{stage.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{stage.desc}</p>
                      </div>
                      {i < 4 && (
                        <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-data/50" style={{ transform: "translateX(100%)" }} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-xl bg-background border-2 border-data/30">
                    <Database className="w-10 h-10 text-data mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Data Extraction & Integration</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Change Data Capture (CDC)</strong> implemented for incremental data extraction, capturing only new and changed records.
                      </p>
                      <p>
                        <strong className="text-foreground">SQL Server Change Tracking</strong> enables efficient identification of modified data without full table scans.
                      </p>
                      <p>
                        <strong className="text-foreground">Scheduled ETL pipelines</strong> orchestrate data movement with error handling and retry logic.
                      </p>
                    </div>
                  </div>

                  <div className="p-8 rounded-xl bg-background border-2 border-data/30">
                    <Layers className="w-10 h-10 text-data mb-4" />
                    <h3 className="font-semibold text-lg mb-3">Data Warehouse Design</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Staging Area</strong> for raw data transformation and data quality validation.
                      </p>
                      <p>
                        <strong className="text-foreground">Dimensional Modeling</strong> with fact and dimension tables for business metrics analysis.
                      </p>
                      <p>
                        <strong className="text-foreground">SQL Server Analysis Services (SSAS)</strong> for OLAP cubes and aggregations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Steps */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Project Development Phases</h2>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Data Profiling & Assessment",
                    desc: "Analyzed source systems to understand data structure, quality issues, and business requirements. Identified anomalies and data governance needs.",
                    techs: ["Data Profiling Tools", "SQL Queries", "Documentation", "Stakeholder Analysis"],
                    keyword: "Data Assessment",
                  },
                  {
                    step: 2,
                    title: "Data Cleaning & Preparation",
                    desc: "Implemented data cleansing logic to handle missing values, duplicates, and inconsistencies. Applied transformations to standardize formats.",
                    techs: ["SQL", "ETL Logic", "Pandas", "Data Validation Rules"],
                    keyword: "Data Cleaning",
                  },
                  {
                    step: 3,
                    title: "Staging Layer Development",
                    desc: "Built intermediate staging tables for incremental loads. Implemented CDC-based extraction to capture only changed records efficiently.",
                    techs: ["SQL Server", "Change Data Capture", "T-SQL", "Indexing Strategies"],
                    keyword: "ETL Pipeline",
                  },
                  {
                    step: 4,
                    title: "Data Warehouse Construction",
                    desc: "Designed and built dimensional model with fact tables (sales, transactions) and dimension tables (customers, products, time). Implemented slowly changing dimensions.",
                    techs: ["Dimensional Modeling", "SQL Server", "Schema Design", "Surrogate Keys"],
                    keyword: "Data Warehouse",
                  },
                  {
                    step: 5,
                    title: "ETL Orchestration & CDC Integration",
                    desc: "Implemented automated ETL pipelines using SQL Server Integration Services (SSIS). Integrated incremental CDC for near real-time data refresh with minimal overhead.",
                    techs: ["SSIS", "SQL Server Agent", "Incremental Load", "Error Handling", "Monitoring"],
                    keyword: "Data Operations",
                  },
                  {
                    step: 6,
                    title: "SSAS Cubes & Aggregations",
                    desc: "Built Analysis Services cubes for multidimensional analysis. Created aggregations to optimize query performance for complex analytical queries.",
                    techs: ["SSAS", "MDX", "KPI Design", "Performance Optimization", "Calculations"],
                    keyword: "Analytics",
                  },
                  {
                    step: 7,
                    title: "Power BI Dashboard Development",
                    desc: "Created interactive dashboards and reports visualizing KPIs, sales trends, regional performance, and forecasts. Connected to SSAS for real-time insights.",
                    techs: ["Power BI", "DAX", "Data Visualization", "Interactive Reports", "Mobile Analytics"],
                    keyword: "Business Intelligence",
                  },
                ].map((item) => (
                  <div key={item.step} className="grid md:grid-cols-[80px_1fr] gap-8 pb-8 border-b border-border last:border-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-data/20 flex items-center justify-center border-2 border-data">
                        <span className="text-xl font-bold text-data">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-xs font-mono px-2 py-1 rounded-md bg-data/10 text-data">{item.keyword}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.techs.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="py-24 bg-card/50 border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Key Achievements & Metrics</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: TrendingUp,
                    title: "Incremental CDC Implementation",
                    desc: "Implemented Change Data Capture (CDC) reducing ETL runtime by 75% through incremental loading of only modified records.",
                  },
                  {
                    icon: Zap,
                    title: "Near Real-time Reporting",
                    desc: "Enabled near real-time analytics dashboards with sub-minute latency through optimized incremental refresh strategies.",
                  },
                  {
                    icon: Database,
                    title: "Data Quality Assurance",
                    desc: "Established data validation rules and automated quality checks reducing data inconsistencies by 95%.",
                  },
                  {
                    icon: BarChart3,
                    title: "Executive Analytics",
                    desc: "Delivered 20+ interactive Power BI dashboards covering sales, marketing, operations, and financial performance metrics.",
                  },
                ].map((achievement) => (
                  <div key={achievement.title} className="p-6 rounded-xl bg-background border border-border">
                    <achievement.icon className="w-8 h-8 text-data mb-4" />
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Technology Ecosystem</h2>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    category: "Database & DW",
                    techs: ["SQL Server", "PostgreSQL", "Change Data Capture", "Replication", "Backup & Recovery"],
                  },
                  {
                    category: "ETL & Data Integration",
                    techs: ["SSIS", "SQL Server Agent", "Incremental Loads", "Data Transformations", "Error Logging"],
                  },
                  {
                    category: "Analytics & OLAP",
                    techs: ["SSAS", "MDX", "Cubes", "Aggregations", "KPI Calculations"],
                  },
                  {
                    category: "BI & Visualization",
                    techs: ["Power BI", "DAX", "Interactive Reports", "Mobile Analytics", "Real-time Dashboards"],
                  },
                ].map((stack) => (
                  <div key={stack.category} className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold mb-4 text-data text-sm">{stack.category}</h3>
                    <ul className="space-y-2">
                      {stack.techs.map((tech) => (
                        <li key={tech} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-data" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Keywords Section */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Big Data",
                  "Data Warehouse",
                  "Data Engineer",
                  "Data Analyst",
                  "ETL Pipeline",
                  "Change Data Capture",
                  "Business Intelligence",
                  "Data Operations",
                  "Analytics",
                  "OLAP",
                  "Dimensional Modeling",
                  "Data Governance",
                ].map((keyword) => (
                  <div key={keyword} className="p-4 rounded-lg bg-data/5 border border-data/20 text-center">
                    <span className="font-mono text-sm font-semibold text-data">{keyword}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
