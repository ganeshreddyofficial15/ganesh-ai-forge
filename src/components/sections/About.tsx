import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Pioneering the{" "}
              <span className="text-gradient">AI Revolution</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Ganesh Technologies is a cutting-edge AI solutions company dedicated 
              to transforming how businesses operate. Founded by industry experts with 
              decades of combined experience in artificial intelligence, automation, 
              and enterprise software.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe in the power of intelligent automation to unlock human 
              potential. Our mission is to democratize AI technology, making it 
              accessible and impactful for businesses of all sizes.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Our Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Empower businesses with AI solutions that drive growth and innovation.
                </p>
              </div>
              <div className="glass-card p-5 border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-5 h-5 text-secondary" />
                  <h4 className="font-semibold">Our Vision</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  A world where AI amplifies human capability, not replaces it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main visual container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="glass-card h-full flex flex-col items-center justify-center p-8 relative">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 border border-secondary/20 rounded-full"
                />
                
                {/* Center content */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                    <Award className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Excellence Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    Award-winning solutions trusted by industry leaders
                  </p>
                </div>

                {/* Stats around the circle */}
                <div className="absolute top-8 right-8 glass-card px-4 py-2">
                  <div className="text-2xl font-bold text-gradient">8+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div className="absolute bottom-8 left-8 glass-card px-4 py-2">
                  <div className="text-2xl font-bold text-gradient">150+</div>
                  <div className="text-xs text-muted-foreground">Experts</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
