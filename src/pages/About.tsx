import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-gradient">InnovoraMind</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 font-medium">
              Advancing Research, Innovation, and Scholarly Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              InnovoraMind is a professionally driven academic and research-focused platform established to support researchers, academicians, scholars, and institutions across multidisciplinary domains. We operate at the intersection of research quality, innovation, and structured academic growth.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our core activities include facilitating high-impact research publications, organizing national and international academic conferences, providing expert thesis and research consultation, and supporting institutions in strengthening their research culture and global academic presence. We emphasize ethical research practices, clarity in scholarly communication, and long-term academic value.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through collaborative networks and structured processes, InnovoraMind aims to simplify complex academic workflows while maintaining rigor, transparency, and international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a reliable, structured, and inclusive academic ecosystem that empowers researchers and professionals to produce high-quality scholarly work, disseminate knowledge responsibly, and achieve meaningful academic recognition at national and global levels.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally trusted academic platform that bridges research, innovation, and professional collaboration—enabling ideas to evolve into impactful contributions that advance science, technology, and society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;