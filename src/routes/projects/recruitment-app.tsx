import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Code2, Database, Users, Brain, Zap } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";

export const Route = createFileRoute("/projects/recruitment-app")({
  component: RecruitmentAppPage,
  head: () => ({
    meta: [
      { title: "The Recruitment App — Yahia Chiheb" },
      {
        name: "description",
        content: "AI-powered recruitment platform with CV parsing, semantic matching, and automated testing. Flutter, React, FastAPI, NLP.",
      },
    ],
  }),
});

function RecruitmentAppPage() {
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
                  <span className="font-mono text-xs uppercase tracking-widest text-code">
                    Full-Stack Project
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
                    The Recruitment <span className="gradient-text">App</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                    An intelligent hiring platform powered by AI and NLP that automates candidate screening, matches offers with CVs using semantic embeddings, and generates assessment tests instantly.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {["Flutter", "React", "FastAPI", "PostgreSQL", "Deep Learning", "NLP"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-code/10 text-code font-mono text-sm border border-code/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-10">
                    <a href="https://github.com/Chiheb13/dashboardRecruiter" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                      View Code
                    </a>
                  </div>
                </div>

                <div className="relative h-96 lg:h-full rounded-2xl bg-gradient-to-br from-code/20 to-transparent border border-code/20 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-24 h-24 mx-auto text-code opacity-50 mb-4" />
                    <p className="text-muted-foreground">AI-Powered Hiring</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-24 bg-card/50 border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Project Overview</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-background border border-border">
                  <Users className="w-8 h-8 text-code mb-4" />
                  <h3 className="font-semibold mb-2">For Recruiters</h3>
                  <p className="text-sm text-muted-foreground">
                    Intuitive React dashboard to manage job offers, review candidates, and analyze screening results in real-time.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-background border border-border">
                  <Code2 className="w-8 h-8 text-code mb-4" />
                  <h3 className="font-semibold mb-2">For Candidates</h3>
                  <p className="text-sm text-muted-foreground">
                    Flutter mobile app for candidates to apply to positions, take automated QCM tests, and track their application status.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-background border border-border">
                  <Brain className="w-8 h-8 text-code mb-4" />
                  <h3 className="font-semibold mb-2">AI Core</h3>
                  <p className="text-sm text-muted-foreground">
                    FastAPI microservice running ML models for CV parsing, semantic matching with embeddings, and test generation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Steps */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Implementation Journey</h2>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "CV Parsing & Data Extraction",
                    desc: "Built a Python pipeline to parse CVs in multiple formats (PDF, DOCX, TXT). Extracted structured data: education, experience, skills, languages.",
                    techs: ["Python", "PyPDF2", "Pandas", "Regex"],
                  },
                  {
                    step: 2,
                    title: "Semantic Matching with Embeddings",
                    desc: "Integrated Hugging Face transformers to generate embeddings for CV content and job offers. Used cosine similarity to rank the best matches automatically.",
                    techs: ["Transformers", "FastAPI", "Sklearn", "Numpy"],
                  },
                  {
                    step: 3,
                    title: "Automated QCM Generation",
                    desc: "Integrated Google Gemini API to generate customized multiple-choice questions based on job requirements and candidate profile.",
                    techs: ["Google Gemini API", "Prompt Engineering", "LLM"],
                  },
                  {
                    step: 4,
                    title: "Backend API Development",
                    desc: "Developed a FastAPI service handling CV processing, matching logic, test generation, and results storage. PostgreSQL database for persistence.",
                    techs: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth"],
                  },
                  {
                    step: 5,
                    title: "Recruiter Dashboard",
                    desc: "Built a React dashboard with real-time analytics on candidate matches, test results, filtering, and offer management. Responsive design for mobile.",
                    techs: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
                  },
                  {
                    step: 6,
                    title: "Mobile Candidate App",
                    desc: "Developed Flutter app for candidates to browse offers, apply, take tests, and track application progress with offline support.",
                    techs: ["Flutter", "Dart", "Provider", "SQLite"],
                  },
                ].map((item) => (
                  <div key={item.step} className="grid md:grid-cols-[80px_1fr] gap-8 pb-8 border-b border-border last:border-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-code/20 flex items-center justify-center border-2 border-code">
                        <span className="text-xl font-bold text-code">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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

          {/* Key Features */}
          <section className="py-24 bg-card/50 border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Key Features</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "Intelligent CV Parsing",
                    desc: "Automatically extracts and structures candidate information from uploaded CVs in any format.",
                  },
                  {
                    icon: Zap,
                    title: "Semantic Matching",
                    desc: "Uses transformer-based embeddings to find the best candidate-offer matches based on semantic similarity.",
                  },
                  {
                    icon: Code2,
                    title: "Automated Test Generation",
                    desc: "AI-generated multiple-choice questions customized per candidate and job profile using LLMs.",
                  },
                  {
                    icon: Database,
                    title: "Real-time Analytics",
                    desc: "Live dashboards showing hiring metrics, candidate flow, and assessment performance trends.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="p-6 rounded-xl bg-background border border-border">
                    <feature.icon className="w-8 h-8 text-code mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { category: "Frontend (Web)", techs: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Tanstack Router"] },
                  { category: "Mobile", techs: ["Flutter", "Dart", "Provider", "SQLite", "HTTP Client"] },
                  { category: "Backend", techs: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Uvicorn"] },
                  { category: "ML / AI", techs: ["Transformers", "Hugging Face", "Google Gemini", "Scikit-learn", "Pandas"] },
                ].map((stack) => (
                  <div key={stack.category} className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold mb-4 text-code">{stack.category}</h3>
                    <ul className="space-y-2">
                      {stack.techs.map((tech) => (
                        <li key={tech} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-code" />
                          {tech}
                        </li>
                      ))}
                    </ul>
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
