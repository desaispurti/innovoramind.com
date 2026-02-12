import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
    GraduationCap,
    BookOpen,
    FileText,
    Lightbulb,
    Presentation,
    Users,
    ArrowRight,
    Target,
    Award,
    Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mentorshipServices = [
    {
        icon: GraduationCap,
        title: 'Thesis & Dissertation Guidance',
        description: 'End-to-end personal support for thesis structure, research methodology, literature review, data analysis, and academic writing.',
        color: 'bg-blue-500/10 text-blue-600',
        delay: 0.1
    },
    {
        icon: BookOpen,
        title: 'Publication Mentorship',
        description: 'Guidance on journal selection, manuscript editing, formatting, plagiarism reduction, and improving acceptance probability.',
        color: 'bg-emerald-500/10 text-emerald-600',
        delay: 0.2
    },
    {
        icon: FileText,
        title: 'Research Proposal/Grant Support',
        description: 'Support for writing high-quality proposals for PhD admission, funding grants, research projects, and institutional collaborations.',
        color: 'bg-violet-500/10 text-violet-600',
        delay: 0.3
    },
    {
        icon: Lightbulb,
        title: 'Interview & Viva Preparation',
        description: 'Personalized training for thesis viva, defense preparation, interview skills, and expert panel presentation readiness.',
        color: 'bg-amber-500/10 text-amber-600',
        delay: 0.4
    },
    {
        icon: Presentation,
        title: 'Workshops & Training',
        description: 'Hands-on workshops on research methodology, AI tools, data science, scholarly writing, and academic communication.',
        color: 'bg-rose-500/10 text-rose-600',
        delay: 0.5
    },
    {
        icon: Users,
        title: '1-on-1 Mentoring Sessions',
        description: 'Book personal sessions with experts to review your work, improve research strategy, and fast-track your academic career.',
        color: 'bg-indigo-500/10 text-indigo-600',
        delay: 0.6
    }
];

const Mentorship = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative hero-gradient py-24 lg:py-32 overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-8 backdrop-blur-md border border-white/20"
                        >
                            <Target className="w-4 h-4 text-accent" />
                            Academic Excellence Program
                        </motion.div>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            Empowering Scholars Through <span className="text-secondary">Expert Guidance</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed mb-10">
                            InnovoraMind offers structured mentorship for Master's students, PhD researchers, academicians, and professionals.
                            Our programs are designed to elevate research quality, enhance academic writing, strengthen methodology, and accelerate publication success.
                        </p>
                        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-10 h-16 shadow-xl shadow-primary/20 transform hover:scale-105 transition-all group">
                            <Link to="/contact">
                                Get Research Guidance
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-background relative">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentorshipServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: service.delay }}
                                className="group relative p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="pt-4 border-t border-border/50 flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    Join Program <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto rounded-[40px] bg-white border border-border/50 p-12 md:p-20 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                            <Sparkles className="w-64 h-64 text-primary" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                                    Why Choose Our Mentorship?
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { icon: Award, title: 'Expert Mentors', desc: 'Guidance from published researchers and PhD holders.' },
                                        { icon: Target, title: 'Personalized Path', desc: 'Custom roadmaps tailored to your research goals.' },
                                        { icon: Users, title: 'Collaborative Learning', desc: 'Access to a global network of academic professionals.' }
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <blockquote className="text-xl italic text-foreground/80 leading-relaxed mb-6">
                                    "The publication mentorship program was instrumental in getting my research accepted into a top-tier IEEE journal. The feedback was precise and professional."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20" />
                                    <div>
                                        <div className="font-bold text-foreground">Dr. Robert Smith</div>
                                        <div className="text-sm text-muted-foreground">Post-doctoral Researcher</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding">
                <div className="container-custom text-center">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
                        Start Your Academic Success Journey Today
                    </h2>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                            <Link to="/contact">Schedule a Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Mentorship;
