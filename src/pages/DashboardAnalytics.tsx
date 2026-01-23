import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Clock,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const visitData = [
  { name: "Mon", visits: 400, conversions: 24 },
  { name: "Tue", visits: 300, conversions: 18 },
  { name: "Wed", visits: 520, conversions: 32 },
  { name: "Thu", visits: 480, conversions: 28 },
  { name: "Fri", visits: 600, conversions: 38 },
  { name: "Sat", visits: 350, conversions: 22 },
  { name: "Sun", visits: 280, conversions: 16 },
];

const deviceData = [
  { name: "Desktop", value: 55, color: "hsl(191, 100%, 44%)" },
  { name: "Mobile", value: 35, color: "hsl(262, 83%, 58%)" },
  { name: "Tablet", value: 10, color: "hsl(180, 100%, 50%)" },
];

const topPages = [
  { page: "/", views: 12540, bounce: "32%" },
  { page: "/services", views: 8420, bounce: "28%" },
  { page: "/portfolio", views: 6180, bounce: "35%" },
  { page: "/contact", views: 4920, bounce: "25%" },
  { page: "/about", views: 3840, bounce: "40%" },
];

export default function DashboardAnalytics() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-20">
          <div className="container-custom py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-bold">Analytics</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Last 7 Days</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container-custom py-8">
          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Total Visits", value: "45.2K", change: "+12%", icon: Eye },
              { label: "Unique Visitors", value: "28.4K", change: "+8%", icon: Users },
              { label: "AI Conversations", value: "892", change: "+24%", icon: MessageSquare },
              { label: "Avg. Session", value: "4m 32s", change: "+5%", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 rounded-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-primary flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 glass-card p-6 rounded-2xl"
            >
              <h3 className="font-semibold mb-4">Traffic Overview</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={visitData}>
                    <defs>
                      <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(191, 100%, 44%)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(191, 100%, 44%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 10%, 15%)" />
                    <XAxis dataKey="name" stroke="hsl(240, 5%, 60%)" />
                    <YAxis stroke="hsl(240, 5%, 60%)" />
                    <Tooltip 
                      contentStyle={{ 
                        background: "hsl(240, 10%, 8%)", 
                        border: "1px solid hsl(240, 10%, 15%)",
                        borderRadius: "12px"
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="visits" 
                      stroke="hsl(191, 100%, 44%)" 
                      fillOpacity={1} 
                      fill="url(#colorVisits)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Device Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="font-semibold mb-4">Device Breakdown</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {deviceData.map((device) => (
                  <div key={device.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {device.name === "Desktop" && <Monitor className="w-4 h-4" style={{ color: device.color }} />}
                      {device.name === "Mobile" && <Smartphone className="w-4 h-4" style={{ color: device.color }} />}
                      {device.name === "Tablet" && <Globe className="w-4 h-4" style={{ color: device.color }} />}
                      <span>{device.name}</span>
                    </div>
                    <span className="font-medium">{device.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Top Pages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-border/50">
              <h3 className="font-semibold">Top Pages</h3>
            </div>
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Page</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Views</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, index) => (
                  <tr key={page.page} className="border-b border-border/50 last:border-0">
                    <td className="py-3 px-6 font-medium">{page.page}</td>
                    <td className="py-3 px-6 text-muted-foreground">{page.views.toLocaleString()}</td>
                    <td className="py-3 px-6 text-muted-foreground">{page.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
