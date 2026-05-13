import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, Eye, TrendingUp, Globe, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsDashboard,
});

// Mock data - Replace with real Google Analytics API data
const mockVisitorsData = [
  { month: "Jan", visitors: 1200, sessions: 1400, users: 800 },
  { month: "Feb", visitors: 1900, sessions: 2210, users: 1200 },
  { month: "Mar", visitors: 1500, sessions: 2290, users: 1000 },
  { month: "Apr", visitors: 2200, sessions: 2000, users: 1500 },
  { month: "May", visitors: 2800, sessions: 2181, users: 1800 },
  { month: "Jun", visitors: 2390, sessions: 2500, users: 1600 },
];

const mockPageViewsData = [
  { name: "Home", views: 4200, percentage: 35 },
  { name: "Projects", views: 2400, percentage: 20 },
  { name: "About", views: 2100, percentage: 17.5 },
  { name: "Contact", views: 1800, percentage: 15 },
  { name: "Blog", views: 1500, percentage: 12.5 },
];

const mockTrafficSourcesData = [
  { name: "Direct", value: 40, color: "#3b82f6" },
  { name: "Google Search", value: 35, color: "#10b981" },
  { name: "Social Media", value: 15, color: "#f59e0b" },
  { name: "Referral", value: 10, color: "#8b5cf6" },
];

const mockCountriesData = [
  { country: "Tunisia", visitors: 2500, percentage: 25 },
  { country: "France", visitors: 1800, percentage: 18 },
  { country: "United States", visitors: 1600, percentage: 16 },
  { country: "Germany", visitors: 1400, percentage: 14 },
  { country: "United Kingdom", visitors: 900, percentage: 9 },
  { country: "Others", visitors: 1800, percentage: 18 },
];

function AnalyticsDashboard() {
  const totalVisitors = 10000;
  const totalSessions = 12200;
  const avgSessionDuration = "3m 45s";
  const bounceRate = "42.5%";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-slate-400">Track your portfolio performance and visitor insights</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <KPICard icon={Users} label="Total Visitors" value={totalVisitors.toLocaleString()} />
          <KPICard icon={Eye} label="Total Sessions" value={totalSessions.toLocaleString()} />
          <KPICard icon={TrendingUp} label="Avg Session Duration" value={avgSessionDuration} />
          <KPICard icon={Globe} label="Bounce Rate" value={bounceRate} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Over Time */}
          <ChartCard title="Visitor Growth" subtitle="Monthly trends">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockVisitorsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} name="Visitors" />
                <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} name="Sessions" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Traffic Sources */}
          <ChartCard title="Traffic Sources" subtitle="Where your visitors come from">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockTrafficSourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockTrafficSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Page Views */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartCard title="Top Pages" subtitle="Most viewed pages">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockPageViewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Bar dataKey="views" fill="#8b5cf6" name="Views" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Countries */}
          <ChartCard title="Top Countries" subtitle="Visitor distribution by location">
            <div className="space-y-4">
              {mockCountriesData.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium mb-1">{country.country}</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-medium">{country.visitors.toLocaleString()}</p>
                    <p className="text-sm text-slate-400">{country.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Info Box */}
        <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-6">
          <h3 className="font-semibold mb-2">About This Dashboard</h3>
          <p className="text-slate-300 text-sm">
            This dashboard displays real-time analytics from Google Analytics. Connect your Google Analytics account to see live data about your portfolio visitors, their locations, traffic sources, and browsing patterns. Update your Google Analytics ID in the configuration to start tracking your site's performance.
          </p>
        </div>
      </div>
    </div>
  );
}

function KPICard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-slate-800 bg-opacity-50 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-2">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <Icon size={32} className="text-blue-400 opacity-50" />
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800 bg-opacity-50 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-slate-400 text-sm mb-6">{subtitle}</p>
      {children}
    </div>
  );
}
