import { motion } from 'framer-motion';
import {
  Code, Lightbulb, BookOpen, GraduationCap, Calendar,
  Briefcase, Cpu, Share2, Globe
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Information Technology & Software Solutions',
    description: 'Enterprise software development, cloud platforms, SaaS, AI/ML systems, cybersecurity, automation, ERP, CRM, and digital transformation services.',
    items: [],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Research & Innovation Enablement',
    description: 'Advanced research design, AI-based research tools, interdisciplinary consultancy, analytics, modeling, validation, and innovation support.',
    items: [],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: BookOpen,
    title: 'Academic Publishing & Intellectual Content',
    description: 'Journals, books, conference proceedings, digital repositories, editorial systems, peer-review platforms, and scholarly dissemination.',
    items: [],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: GraduationCap,
    title: 'Education, Training & Skill Development',
    description: 'Professional education programs, e-learning platforms, LMS development, technical training, FDPs, workshops, and certifications.',
    items: [],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Calendar,
    title: 'Conferences & Knowledge Platforms',
    description: 'Global conferences, workshops, FDPs, symposiums, hybrid events, and technology-driven academic networking platforms.',
    items: [],
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Briefcase,
    title: 'Consultancy & Advisory Services',
    description: 'IT, academic, institutional, startup, industry, project, thesis, and multidisciplinary consultancy across domains.',
    items: [],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Cpu,
    title: 'Engineering & Emerging Technologies',
    description: 'Solutions in computer science, electronics, AI, data science, automation, healthcare technologies, and innovation-led products.',
    items: [],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Share2,
    title: 'Digital Branding & Knowledge Visibility',
    description: 'Academic branding, digital presence, research portals, databases, digital libraries, and content management platforms.',
    items: [],
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Collaboration & Licensing',
    description: 'International collaborations, technology transfer, licensing, franchising, outsourcing, and global consulting services.',
    items: [],
    gradient: 'from-green-500 to-emerald-500',
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Expertise Ecosystem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};