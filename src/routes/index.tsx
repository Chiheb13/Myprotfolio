import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Expertise } from "@/components/portfolio/Expertise";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Yahia Chiheb — Fullstack Dev & BI Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Yahia Chiheb, Tunis-based Fullstack Developer & Business Intelligence specialist. React, Flutter, FastAPI, Deep Learning, Power BI.",
      },
      { property: "og:title", content: "Yahia Chiheb — Fullstack Dev & BI Specialist" },
      {
        property: "og:description",
        content: "Fullstack development, Deep Learning and Business Intelligence projects.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Expertise />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
