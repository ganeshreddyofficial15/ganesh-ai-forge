import { motion } from "framer-motion";
import { Trophy, Users, Globe, Cpu, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    value: "500+",
    label: "Projects Completed",
    description: "Successful AI implementations worldwide",
  },
  {
    icon: Users,
    value: "200+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies trust our solutions",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries Served",
    description: "Global reach with local expertise",
  },
  {
    icon: Cpu,
    value: "1B+",
    label: "API Calls Daily",
    description: "Powering millions of interactions",
  },
];

const certifications = [
  "ISO 27001 Certified",
  "SOC 2 Type II Compliant",
  "GDPR Ready",
  "AWS Advanced Partner",
  "Google Cloud Partner",
  "Microsoft Gold Partner",
];

export function Achievements() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

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
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Milestones That{" "}
            <span className="text-gradient">Define Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that reflect our commitment to delivering exceptional AI solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover h-full p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">
                  {achievement.value}
                </div>
                <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Certifications & Partnerships</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50"
              >
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
