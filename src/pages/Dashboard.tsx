import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart3, 
  MessageSquare,
  Settings,
  ArrowLeft,
  TrendingUp,
  Eye,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Leads", value: "1,234", change: "+12%", icon: Users, color: "from-primary to-cyan-400" },
  { label: "Page Views", value: "45.2K", change: "+8%", icon: Eye, color: "from-secondary to-pink-400" },
  { label: "Conversations", value: "892", change: "+24%", icon: MessageSquare, color: "from-green-500 to-emerald-400" },
  { label: "Avg. Response", value: "1.2s", change: "-15%", icon: Clock, color: "from-orange-500 to-amber-400" },
];

const quickLinks = [
  { name: "Manage Leads", href: "/dashboard/leads", icon: Users, description: "View and manage customer leads" },
  { name: "Content CMS", href: "/dashboard/content", icon: FileText, description: "Edit website content and media" },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3, description: "View detailed analytics and insights" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-20">
          <div className="container-custom py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Site
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
            </div>
            <Link to="/dashboard/settings">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container-custom py-8">
          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className={`w-4 h-4 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`} />
                      <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-muted-foreground">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={link.name} to={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass-card-hover p-6 rounded-2xl cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                      <link.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="glass-card rounded-2xl p-6">
              <div className="space-y-4">
                {[
                  { action: "New lead submitted", time: "2 minutes ago", type: "lead" },
                  { action: "Chat conversation completed", time: "15 minutes ago", type: "chat" },
                  { action: "Portfolio item viewed", time: "1 hour ago", type: "view" },
                  { action: "Contact form submission", time: "3 hours ago", type: "contact" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{activity.action}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
