import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ShieldCheck, Activity, Brain, Server } from 'lucide-react';

const Projects = () => {
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
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 font-medium">
              Discover our latest technological innovations and solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI-SOC Project Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase mb-4">
              Featured Project
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              AI-SOC
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Autonomous Security Operations Center: Next-Generation Threat Detection & Response Architecture
            </p>
          </motion.div>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border/50 shadow-xl"
            >
              <img src="/images/project/foyer.png" alt="AI-SOC Overview" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-border/50 shadow-xl"
            >
              <img src="/images/project/dash.png" alt="AI-SOC Dashboard" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">The Vision & Mission</h3>
                  <p className="mb-4">
                    <strong className="text-foreground">The Vision:</strong> Revolutionize security operations by transitioning from manual triage to AI-driven autonomy.
                  </p>
                  <p className="mb-4">
                    <strong className="text-foreground">The Mission:</strong> Drastically reduce Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR).
                  </p>
                  <p>
                    <strong className="text-foreground">The Approach:</strong> A highly scalable, event-driven architecture paired with a Multi-Agent LLM orchestration engine to automate threat hunting, analysis, and remediation. This allows human analysts to focus on strategic decisions (Human-in-the-Loop) while AI handles alert fatigue and correlation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">The Problem: Traditional SOC Limitations</h3>
                  <ul className="space-y-3">
                    <li><strong className="text-foreground">Alert Fatigue:</strong> Tier 1 analysts are overwhelmed by massive volumes of false positives and noisy telemetry.</li>
                    <li><strong className="text-foreground">Manual Triage Bottlenecks:</strong> Correlating logs across disparate systems manually leads to unacceptable response delays.</li>
                    <li><strong className="text-foreground">Cognitive Overload & Burnout:</strong> High turnover rates due to repetitive, low-level investigative tasks.</li>
                    <li><strong className="text-foreground">Fragmented Tooling:</strong> Lack of unified platforms that seamlessly connect detection to automated remediation playbooks.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-display">Core Pillars of AI-SOC</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Real-Time Telemetry", desc: "High-throughput ingestion of system and network events.", icon: Activity },
                  { title: "AI-Powered Analysis", desc: "Multi-agent orchestration for context enrichment and threat validation.", icon: Brain },
                  { title: "Automated Playbooks", desc: "Dynamic remediation strategies aligned with industry frameworks.", icon: ShieldCheck },
                  { title: "Command & Control", desc: "A modern, low-latency 'Single Pane of Glass' dashboard for security leadership.", icon: Server }
                ].map((pillar, idx) => (
                  <div key={idx} className="bg-card/50 p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-display">High-Level System Architecture</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li><strong className="text-foreground">Frontend (Presentation):</strong> Next.js 15 (App Router), React, Tailwind CSS.</li>
                    <li><strong className="text-foreground">Backend (Core Engine):</strong> Python 3.11+, FastAPI, Pydantic v2. Built for asynchronous, high-concurrency API performance.</li>
                    <li><strong className="text-foreground">Data Persistence:</strong> PostgreSQL & TimescaleDB. Optimized for high-volume time-series event data and relational state.</li>
                    <li><strong className="text-foreground">Orchestration (AI):</strong> LangGraph. Stateful, multi-actor LLM workflows.</li>
                    <li><strong className="text-foreground">Sensors (Edge):</strong> Native Windows Event Tailers and Network Packet Sniffers.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Deep Dive: Multi-Agent Orchestration</h3>
                  <p className="text-muted-foreground mb-4">The "Brain" of the AI-SOC, utilizing LangGraph for stateful AI workflows:</p>
                  <ul className="space-y-4 text-muted-foreground">
                    <li><strong className="text-foreground">Triage Agent:</strong> Ingests raw telemetry, normalizes data, and filters out known noise.</li>
                    <li><strong className="text-foreground">Context Agent:</strong> Queries historical databases and external Threat Intel feeds to enrich the alert.</li>
                    <li><strong className="text-foreground">Response Agent:</strong> Maps the validated threat to MITRE ATT&CK TTPs and drafts a remediation playbook.</li>
                    <li><strong className="text-foreground">Human-in-the-Loop Gateway:</strong> High-impact remediations pause the AI, awaiting explicit analyst approval via the dashboard.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
