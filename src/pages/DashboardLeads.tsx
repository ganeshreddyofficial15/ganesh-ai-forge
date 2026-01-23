import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Users, 
  Search, 
  Filter, 
  MoreVertical,
  Mail,
  Phone,
  Building,
  Calendar,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockLeads = [
  { id: 1, name: "John Smith", email: "john@techcorp.com", company: "TechCorp Inc", status: "hot", source: "Website", date: "2024-01-22", score: 95 },
  { id: 2, name: "Sarah Johnson", email: "sarah@innovate.io", company: "Innovate.io", status: "warm", source: "AI Chat", date: "2024-01-21", score: 78 },
  { id: 3, name: "Michael Chen", email: "m.chen@startup.co", company: "StartUp Co", status: "hot", source: "Contact Form", date: "2024-01-20", score: 88 },
  { id: 4, name: "Emily Davis", email: "emily@enterprise.com", company: "Enterprise Ltd", status: "cold", source: "Website", date: "2024-01-19", score: 45 },
  { id: 5, name: "David Wilson", email: "david@global.tech", company: "Global Tech", status: "warm", source: "AI Chat", date: "2024-01-18", score: 72 },
];

export default function DashboardLeads() {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "warm": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "cold": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredLeads = mockLeads.filter(lead => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <Users className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-bold">Lead Management</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container-custom py-8">
          {/* Search and Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border/50"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Export Leads
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          >
            {[
              { label: "Total Leads", value: "1,234" },
              { label: "Hot Leads", value: "156" },
              { label: "Warm Leads", value: "423" },
              { label: "Conversion Rate", value: "18%" },
            ].map((stat, index) => (
              <div key={stat.label} className="glass-card p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Leads Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Lead</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Company</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Source</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Score</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, index) => (
                    <motion.tr 
                      key={lead.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium">{lead.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-muted-foreground" />
                          {lead.company}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={`${getStatusColor(lead.status)} border capitalize`}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-sm text-muted-foreground">{lead.source}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Star className={`w-4 h-4 ${lead.score >= 80 ? 'text-yellow-500' : 'text-muted-foreground'}`} />
                          <span className={lead.score >= 80 ? 'text-yellow-500 font-medium' : ''}>{lead.score}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {lead.date}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
