import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye } from 'lucide-react';
import certificateImg from '@/assets/certificate.png';

import walidaImg from '@/assets/advisors/advisor-1.png';
import ezinneImg from '@/assets/advisors/advisor-6.jpeg';
import firasImg from '@/assets/advisors/Dr firas.jpeg';
import tianshengImg from '@/assets/advisors/tiansheng.png';


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

      {/* Leadership & Advisory Section */}
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
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The visionaries and strategic minds driving InnovoraMind's global mission forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">

            {/* Card: Dr. Walida Ounruean */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm flex flex-col items-center text-center gap-5 bg-card rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6 group"
            >
              <div className="relative w-full">
                <div className="absolute -inset-2 bg-gradient-to-tr from-secondary via-accent to-secondary rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-secondary rounded-tl-xl z-20" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-xl z-20" />
                  <div className="relative rounded-[1.75rem] overflow-hidden border-4 border-white shadow-xl skew-y-1 group-hover:skew-y-0 transition-transform duration-500">
                    <img
                      src={walidaImg}
                      alt="Dr. Walida Ounruean"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <h3 className="font-display text-xl font-bold text-foreground">Dr. Walida Ounruean</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-[11px] tracking-widest uppercase">
                  Executive Director
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1 text-left">
                  Dr. Walida Ounruean leads InnovoraMind with a focus on academic excellence and technological innovation. She bridges the gap between theoretical research and practical industry applications, fostering AI-driven growth and enterprise-grade digital solutions.
                </p>
              </div>
            </motion.div>

            {/* Card: Ezinne Esther Arisa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full max-w-sm flex flex-col items-center text-center gap-5 bg-card rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6 group"
            >
              <div className="relative w-full">
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent via-secondary to-accent rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-xl z-20" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-secondary rounded-br-xl z-20" />
                  <div className="relative rounded-[1.75rem] overflow-hidden border-4 border-white shadow-xl -skew-y-1 group-hover:skew-y-0 transition-transform duration-500">
                    <img
                      src={ezinneImg}
                      alt="Ezinne Esther Arisa"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <h3 className="font-display text-xl font-bold text-foreground">Ezinne Esther Arisa</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[11px] tracking-widest uppercase">
                  Independent Director
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1 text-left">
                  Ezinne Esther Arisa brings strategic leadership and governance expertise as an Independent Director. Her visionary approach guides InnovoraMind's long-term objectives and shapes the company's global strategy for digital excellence and societal impact.
                </p>
              </div>
            </motion.div>

            {/* Card: Dr. Firas Zeidan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-sm flex flex-col items-center text-center gap-5 bg-card rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6 group"
            >

              <div className="relative w-full">
                <div className="absolute -inset-2 bg-gradient-to-tr from-secondary via-accent to-secondary rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-secondary rounded-tl-xl z-20" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-xl z-20" />
                  <div className="relative rounded-[1.75rem] overflow-hidden border-4 border-white shadow-xl skew-y-1 group-hover:skew-y-0 transition-transform duration-500">
                    <img
                      src={firasImg}
                      alt="Dr. Firas Zeidan"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <h3 className="font-display text-xl font-bold text-foreground">Dr. Firas Zeidan</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-[11px] tracking-widest uppercase">
                  Advisory Board Member
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1 text-left">
                  Dr. Firas Zeidan brings a wealth of expertise in technology leadership, strategic innovation, and academic research. He provides critical guidance on InnovoraMind's research agenda, industry partnerships, and long-term growth strategy.
                </p>
              </div>
            </motion.div>

            {/* Card: Dr. Tiansheng Yang */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="w-full max-w-sm flex flex-col items-center text-center gap-5 bg-card rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6 group lg:col-span-1 md:mx-auto"
            >
              <div className="relative w-full">
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent via-secondary to-accent rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-xl z-20" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-secondary rounded-br-xl z-20" />
                  <div className="relative rounded-[1.75rem] overflow-hidden border-4 border-white shadow-xl -skew-y-1 group-hover:skew-y-0 transition-transform duration-500">
                    <img
                      src={tianshengImg}
                      alt="Dr. Tiansheng Yang"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <h3 className="font-display text-xl font-bold text-foreground">Dr. Tiansheng Yang</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[11px] tracking-widest uppercase">
                  Advisory Board Member
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1 text-left">
                  Dr. Tiansheng Yang is an esteemed Faculty Member at the University of South Wales, United Kingdom. He brings extensive academic insight and research leadership to InnovoraMind, specializing in digital transformation and educational innovation.
                </p>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Leadership Perspectives Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold tracking-[0.25em] uppercase text-secondary mb-4">
              Leadership Perspectives
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Voices of <span className="text-gradient">Innovation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Dr. Walida Ounruean Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-4xl text-secondary/20 font-serif leading-none select-none mb-4">&#8220;</p>
                <p className="text-lg font-medium text-foreground leading-relaxed italic mb-8">
                  Technology is most powerful when it is rooted in academic excellence and practical purpose. We are not just building software; we are cultivating an ecosystem of sustainable innovation that bridges the gap between today's challenges and tomorrow's possibilities.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary shadow-md shrink-0">
                  <img src={walidaImg} alt="Dr. Walida Ounruean" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Dr. Walida Ounruean</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Executive Director</p>
                </div>
              </div>
            </motion.div>

            {/* Ezinne Esther Arisa Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-4xl text-accent/20 font-serif leading-none select-none mb-4">&#8220;</p>
                <p className="text-lg font-medium text-foreground leading-relaxed italic mb-8">
                  True digital transformation requires more than just high-end tools — it demands strategic vision and ethical governance. Our goal is to empower organizations with technology that is not only cutting-edge but also responsible, inclusive, and fundamentally impactful.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent shadow-md shrink-0">
                  <img src={ezinneImg} alt="Ezinne Esther Arisa" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Ezinne Esther Arisa</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Independent Director</p>
                </div>
              </div>
            </motion.div>

            {/* Dr. Firas Zeidan Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-4xl text-secondary/20 font-serif leading-none select-none mb-4">&#8220;</p>
                <p className="text-lg font-medium text-foreground leading-relaxed italic mb-8">
                  Innovation is not just about technology — it is about people, purpose, and perseverance. I am proud to partner with InnovoraMind in its mission to democratize access to world-class AI and digital solutions, and to help shape a future where technology truly serves humanity.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary shadow-md shrink-0">
                  <img src={firasImg} alt="Dr. Firas Zeidan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Dr. Firas Zeidan</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Advisory Board Member</p>
                </div>
              </div>
            </motion.div>

            {/* Dr. Tiansheng Yang Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-xl flex flex-col justify-between lg:mt-0"
            >
              <div>
                <p className="text-4xl text-accent/20 font-serif leading-none select-none mb-4">&#8220;</p>
                <p className="text-lg font-medium text-foreground leading-relaxed italic mb-8">
                  Digital transformation is not merely a technical shift, but a profound evolution in how we learn, innovate, and create value. At InnovoraMind, we are shaping this future through rigorous academic standards and visionary technological leadership.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent shadow-md shrink-0">
                  <img src={tianshengImg} alt="Dr. Tiansheng Yang" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Dr. Tiansheng Yang</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Advisory Board Member</p>
                </div>
              </div>
            </motion.div>
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