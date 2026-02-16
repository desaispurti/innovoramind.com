import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye } from 'lucide-react';
import certificateImg from '@/assets/certificate.png';

import walidaImg from '@/assets/advisors/advisor-1.png';

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
              Advancing Technology, Innovation, and Digital Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Who We Are
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                InnovoraMind LLC was founded with a clear purpose — to bring enterprise‑grade IT solutions, AI‑driven innovation, and digital transformation services to businesses worldwide. In 2026, we officially launched our IT services division, backed by a team of seasoned professionals with years of hands‑on experience across artificial intelligence, cloud architecture, data engineering, and cybersecurity.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                While our IT services are newly launched, the expertise behind them is anything but new. Our founding team has spent years building, deploying, and scaling enterprise systems for organizations across finance, government, healthcare, and technology sectors. Every solution we deliver carries that depth of knowledge and battle‑tested experience.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in New Mexico, USA, InnovoraMind is built on the belief that innovation should be accessible, reliable, and impactful. We combine the agility of a modern startup with the maturity and professionalism of a company that truly understands the landscape — because our team has been shaping it for years.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative group max-w-sm mx-auto"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white p-3 rounded-2xl shadow-2xl border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 pointer-events-none" />
                <img
                  src={certificateImg}
                  alt="Certificate of Organization"
                  className="w-full h-auto rounded-lg shadow-inner group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Certificate Ribbon Seal Element */}
                <div className="absolute bottom-6 right-6 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="absolute inset-0 border-4 border-dotted border-secondary rounded-full animate-[spin_20s_linear_infinite]" />
                </div>
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <p className="text-sm font-semibold text-secondary uppercase tracking-[0.2em]">Verified Entity</p>
                <p className="text-xs text-muted-foreground mt-1 underline decoration-secondary/30">Certificate of Organization • State of New Mexico</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="text-secondary text-gradient">Leadership</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="md:col-span-2 relative group"
              >
                {/* Premium Frame for Photo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary via-accent to-secondary rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-secondary rounded-tl-2xl z-20" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-accent rounded-br-2xl z-20" />

                  <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-500">
                    <img
                      src={walidaImg}
                      alt="Dr. Walida Ounruean"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-3 space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    Dr. Walida Ounruean
                  </h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wider uppercase">
                    Executive Director, InnovoraMind LLC
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Walida Ounruean leads InnovoraMind with a focus on academic excellence and technological innovation. With years of experience in curriculum development and instruction, she bridges the gap between theoretical research and practical industry applications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Under her guidance, InnovoraMind has established itself as a hub for digital transformation, fostering growth through AI-driven strategies and enterprise-grade software solutions while maintaining a commitment to educational and professional advancement.
                </p>

                <div className="pt-4 flex gap-4">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <div className="h-0.5 w-12 bg-accent opacity-50" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card — Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
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
                To become a globally recognized technology leader that shapes the future of digital innovation — where every business, regardless of size or geography, has access to world-class AI, cloud, and IT solutions that unlock limitless growth and societal progress.
              </p>
            </motion.div>

            {/* Mission Card — Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
                To deliver enterprise-grade IT services, AI-powered automation, and scalable digital transformation solutions — built on deep industry expertise, rigorous engineering standards, and a commitment to empowering businesses with technology that is reliable, secure, and future-ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;