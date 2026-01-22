import { motion } from "framer-motion";
import { 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Zap, 
  Clock, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We leverage the latest AI breakthroughs and emerging technologies to keep you ahead of the curve.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Our architectures grow with your business, from startup to enterprise without missing a beat.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, compliance-ready infrastructure, and rigorous security protocols.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized for speed and efficiency, our solutions deliver lightning-fast results at scale.",
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description:
      "Always-on systems with 99.9% uptime guarantee and round-the-clock monitoring.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description:
      "Dedicated team of AI specialists ready to help you maximize ROI on every solution.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Built for the{" "}
              <span className="text-gradient">Future of Business</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just build AI solutions—we engineer competitive advantages. 
              Our team combines deep technical expertise with business acumen to 
              deliver transformative results.
            </p>

            {/* Highlight Card */}
            <div className="glass-card p-6 border-l-4 border-primary">
              <div className="text-4xl font-bold text-gradient mb-2">10x</div>
              <p className="text-muted-foreground">
                Average productivity increase reported by our enterprise clients
              </p>
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
