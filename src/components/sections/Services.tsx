import { motion } from "framer-motion";
import { 
  Bot, 
  Workflow, 
  MessageSquare, 
  Cog, 
  Code2, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Workflow,
    title: "Automation Web Services",
    description:
      "End-to-end workflow automation that eliminates manual tasks and supercharges your productivity by 10x.",
    features: ["Custom Workflows", "API Integrations", "Real-time Sync"],
  },
  {
    icon: Bot,
    title: "AI Voice Agent Development",
    description:
      "Human-like voice agents that handle calls, qualify leads, and provide 24/7 customer support.",
    features: ["Natural Speech", "Multi-language", "CRM Integration"],
  },
  {
    icon: MessageSquare,
    title: "Custom AI Chatbots",
    description:
      "Intelligent conversational AI that understands context, handles complex queries, and drives conversions.",
    features: ["GPT-4 Powered", "Knowledge Base", "Lead Capture"],
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description:
      "Streamline operations with intelligent automation that adapts to your unique business needs.",
    features: ["Process Mining", "Predictive AI", "Smart Routing"],
  },
  {
    icon: Code2,
    title: "AI SaaS & API Integrations",
    description:
      "Seamlessly connect your tools with custom AI-powered APIs and SaaS platform integrations.",
    features: ["RESTful APIs", "Webhooks", "OAuth 2.0"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            AI Solutions That{" "}
            <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intelligent automation to human-like AI agents, we deliver 
            cutting-edge solutions tailored to your business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover h-full p-8 flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button variant="futuristic" size="lg">
            Explore All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
