import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  FileText, 
  Plus,
  Edit3,
  Trash2,
  Eye,
  Image,
  Type,
  Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockContent = [
  { id: 1, title: "Hero Section", type: "section", status: "published", lastUpdated: "2024-01-22", author: "Admin" },
  { id: 2, title: "AI Voice Agent Service", type: "service", status: "published", lastUpdated: "2024-01-21", author: "Admin" },
  { id: 3, title: "Customer Testimonial - TechCorp", type: "testimonial", status: "draft", lastUpdated: "2024-01-20", author: "Admin" },
  { id: 4, title: "Portfolio - E-commerce Bot", type: "portfolio", status: "published", lastUpdated: "2024-01-19", author: "Admin" },
  { id: 5, title: "About Us Page", type: "page", status: "published", lastUpdated: "2024-01-18", author: "Admin" },
];

const contentTypes = [
  { name: "Pages", count: 6, icon: Layout },
  { name: "Services", count: 8, icon: FileText },
  { name: "Portfolio", count: 12, icon: Image },
  { name: "Testimonials", count: 15, icon: Type },
];

export default function DashboardContent() {
  const [selectedType, setSelectedType] = useState("all");

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
                <FileText className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-bold">Content Management</h1>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary gap-2">
              <Plus className="w-4 h-4" />
              Add Content
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container-custom py-8">
          {/* Content Type Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-xl cursor-pointer hover:border-primary/30 transition-all"
                onClick={() => setSelectedType(type.name.toLowerCase())}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <type.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold text-gradient">{type.count}</span>
                </div>
                <p className="font-medium">{type.name}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-border/50">
              <h2 className="font-semibold">All Content</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Title</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Last Updated</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockContent.map((item, index) => (
                    <motion.tr 
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium">{item.title}</td>
                      <td className="py-4 px-6">
                        <Badge variant="secondary" className="capitalize">{item.type}</Badge>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={item.status === 'published' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-sm text-muted-foreground">{item.lastUpdated}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="hover:text-primary">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:text-primary">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
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
