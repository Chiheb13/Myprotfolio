import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Smartphone, Truck, BarChart3, MapPin, Clock, TrendingUp } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";

export const Route = createFileRoute("/projects/food-delivery")({
  component: FoodDeliveryPage,
  head: () => ({
    meta: [
      { title: "Food Delivery System — Yahia Chiheb" },
      {
        name: "description",
        content: "Complete food delivery platform with client & delivery apps, real-time tracking, and admin analytics dashboard.",
      },
    ],
  }),
});

function FoodDeliveryPage() {
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
                    Mobile · Realtime · Analytics
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
                    Food Delivery <span className="gradient-text">System</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                    A comprehensive food delivery platform with separate apps for customers and delivery partners, real-time order tracking, and a powerful admin dashboard with analytics and business intelligence.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {["Flutter", "React", "Express.js", "PostgreSQL", "Real-time Tracking", "Analytics"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-code/10 text-code font-mono text-sm border border-code/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-10">
                    <a href="https://github.com/Chiheb13/Food-delivery-app" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                      View Code
                    </a>
                  </div>
                </div>

                <div className="relative h-96 lg:h-full rounded-2xl bg-gradient-to-br from-code/20 to-transparent border border-code/20 flex items-center justify-center">
                  <div className="text-center">
                    <Truck className="w-24 h-24 mx-auto text-code opacity-50 mb-4" />
                    <p className="text-muted-foreground">Real-time Delivery Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Architecture */}
          <section className="py-24 bg-card/50 border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Platform Architecture</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-xl bg-background border-2 border-code/30">
                  <Smartphone className="w-10 h-10 text-code mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Customer App</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Flutter mobile application for customers to browse restaurants, place orders, track delivery in real-time, and manage their account.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Real-time order tracking</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Restaurant search & filtering</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Payment integration</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Order history & ratings</p>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-background border-2 border-code/30">
                  <Truck className="w-10 h-10 text-code mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Delivery App</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dedicated Flutter app for delivery partners to accept orders, get real-time directions, and update delivery status.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Order assignment system</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> GPS-based navigation</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Route optimization</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Earnings tracking</p>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-background border-2 border-code/30">
                  <BarChart3 className="w-10 h-10 text-code mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Admin Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    React-based analytics dashboard for admins to monitor platform metrics, user behavior, and business performance.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Live order monitoring</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Revenue analytics</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> User insights & reports</p>
                    <p className="flex items-center gap-2"><span className="text-code">→</span> Business KPIs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Steps */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12">Development Phases</h2>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Backend Infrastructure",
                    desc: "Built Node.js + Express API with PostgreSQL for managing users, restaurants, orders, and deliveries. Implemented real-time updates using WebSockets.",
                    techs: ["Express.js", "PostgreSQL", "WebSocket", "JWT", "Bcrypt"],
                  },
                  {
                    step: 2,
                    title: "Customer Application",
                    desc: "Developed Flutter app with restaurant discovery, menu browsing, order placement, and real-time tracking with Google Maps integration.",
                    techs: ["Flutter", "Dart", "Provider", "Google Maps API", "Socket.io"],
                  },
                  {
                    step: 3,
                    title: "Delivery Partner App",
                    desc: "Created Flutter app for delivery agents with order assignment, GPS tracking, navigation, and real-time status updates to customers.",
                    techs: ["Flutter", "Geolocation", "Maps SDK", "Local Notifications", "Sensors"],
                  },
                  {
                    step: 4,
                    title: "Real-time Order Management",
                    desc: "Implemented real-time order tracking system with WebSocket connections, location updates, and push notifications for all parties.",
                    techs: ["WebSocket", "Socket.io", "Redis (caching)", "Push Notifications", "Event Streaming"],
                  },
                  {
                    step: 5,
                    title: "Admin Analytics Dashboard",
                    desc: "Built React dashboard with charts, KPI tracking, order history filtering, and business insights using Recharts and Tanstack.",
                    techs: ["React", "TypeScript", "Recharts", "Tanstack Query", "Tailwind CSS"],
                  },
                  {
                    step: 6,
                    title: "Payments & Monetization",
                    desc: "Integrated payment gateway for customer transactions and commission tracking for delivery partners and restaurants.",
                    techs: ["Payment Gateway", "Stripe API", "Transaction Management", "Reconciliation"],
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
              <h2 className="text-3xl font-bold mb-12">Core Features</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: MapPin,
                    title: "Real-time GPS Tracking",
                    desc: "Live location updates for delivery partners with precise tracking on customer and admin dashboards.",
                  },
                  {
                    icon: Clock,
                    title: "Order Status Timeline",
                    desc: "Detailed order progression from placement, confirmation, preparation, pickup, to delivery with timestamps.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Advanced Analytics",
                    desc: "Comprehensive dashboards tracking revenue, order trends, delivery times, ratings, and user behavior.",
                  },
                  {
                    icon: Smartphone,
                    title: "Multi-app Ecosystem",
                    desc: "Seamless experience across customer, delivery, and admin apps with synchronized data and real-time updates.",
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
                  { category: "Mobile (Customer & Delivery)", techs: ["Flutter", "Dart", "Provider", "SQLite", "Google Maps", "Location Services"] },
                  { category: "Backend & APIs", techs: ["Express.js", "Node.js", "PostgreSQL", "WebSocket", "Redis", "JWT"] },
                  { category: "Frontend (Dashboard)", techs: ["React", "TypeScript", "Recharts", "Tanstack Query", "Tailwind CSS"] },
                  { category: "Infrastructure", techs: ["Payments API", "Push Notifications", "Cloud Storage", "Maps API", "SMS/Email"] },
                ].map((stack) => (
                  <div key={stack.category} className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold mb-4 text-code text-sm">{stack.category}</h3>
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
