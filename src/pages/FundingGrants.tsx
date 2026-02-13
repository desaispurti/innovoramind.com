import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
    History,
    Target,
    Users,
    Layers,
    Lightbulb,
    Rocket,
    Briefcase,
    Globe,
    ArrowRight,
    ChevronRight,
    ShieldCheck,
    Cpu,
    Database,
    Search,
    CheckCircle2,
    Mail,
    ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fundingDomains = [
    {
        title: 'Technology & Engineering',
        items: [
            'Artificial Intelligence & Machine Learning',
            'Data Science & Big Data Analytics',
            'Internet of Things (IoT)',
            'Robotics & Automation',
            'Electronics, Communication & Embedded Systems',
            'Cybersecurity & Blockchain',
            'Digital Twins & Smart Systems'
        ],
        icon: Cpu,
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        title: 'Science & Sustainability',
        items: [
            'Environmental Science & Climate Innovation',
            'Renewable Energy & Green Technologies',
            'Sustainable Infrastructure',
            'Smart Cities & Urban Development'
        ],
        icon: Globe,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
    },
    {
        title: 'Healthcare & Life Sciences',
        items: [
            'Digital Health & Health Informatics',
            'Medical Devices & Assistive Technologies',
            'Biomedical Research',
            'Public Health Innovation'
        ],
        icon: ShieldCheck,
        color: 'text-rose-600',
        bg: 'bg-rose-50'
    },
    {
        title: 'Business & Social Sciences',
        items: [
            'Business Innovation & Entrepreneurship',
            'Financial Technology (FinTech)',
            'Marketing, Strategy & Organizational Research',
            'Economics, Policy & Governance Studies'
        ],
        icon: Briefcase,
        color: 'text-amber-600',
        bg: 'bg-amber-50'
    },
    {
        title: 'Education & Skill Development',
        items: [
            'Educational Technology (EdTech)',
            'Curriculum Innovation',
            'Learning Analytics',
            'Workforce Upskilling & Digital Literacy'
        ],
        icon: Lightbulb,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50'
    },
    {
        title: 'Social Impact & Development',
        items: [
            'Community Development Projects',
            'Women & Youth Empowerment',
            'Inclusive Technologies',
            'Social Innovation & Policy Research'
        ],
        icon: Users,
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    }
];

const applicantTypes = [
    'Academic Institutions & Universities',
    'Research Centers and Laboratories',
    'Startups and Early-Stage Companies',
    'Established Corporations',
    'Non-Profit Organizations & NGOs',
    'Government-Affiliated Institutions',
    'Independent Researchers & Innovators',
    'Multidisciplinary Project Teams'
];

const fundingTypes = [
    { title: 'Research & Development Grants', desc: 'Support for fundamental and applied research projects.' },
    { title: 'Seed Funding', desc: 'Capital for early-stage innovative ideas and startups.' },
    { title: 'Pilot Project & PoC', desc: 'Funding for technology validation and proof-of-concept.' },
    { title: 'Prototype Support', desc: 'Assistance in building and testing physical or digital prototypes.' },
    { title: 'Collaborative Grants', desc: 'Funding for multidisciplinary and cross-institutional projects.' },
    { title: 'Industry-Academia Partnership', desc: 'Bridging the gap between research and commercialization.' }
];

const evaluationCriteria = [
    { title: 'Innovation & Originality', desc: 'How novel is the approach?' },
    { title: 'Technical Merit', desc: 'Scientific and technical soundness.' },
    { title: 'Practical Feasibility', desc: 'Can it be realistically executed?' },
    { title: 'Impact Potential', desc: 'Economic, societal, or industrial value.' },
    { title: 'Scalability', desc: 'Potential for future growth and sustainability.' },
    { title: 'Team Expertise', desc: 'Capacity of the team to deliver results.' }
];

const FundingGrants = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden hero-gradient py-24 lg:py-32">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-8 backdrop-blur-md border border-white/20"
                        >
                            <Target className="w-4 h-4 text-accent" />
                            Empowering Innovation & Research
                        </motion.div>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            Funding & <span className="text-secondary">Grant Proposals</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed mb-10">
                            At InnovoraMind, we are committed to supporting innovative ideas, high-impact research, and transformative projects across multiple disciplines.
                            Submit your proposals for evaluation and potential grant support.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-10 h-16 shadow-xl transform hover:scale-105 transition-all">
                                <Link to="/contact">
                                    Submit Your Funding Proposal
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 h-16 backdrop-blur-sm">
                                <Link to="/contact">Explore Opportunities</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Background Elemets */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
            </section>

            {/* Introduction Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
                            Empowering Impact Across Disciplines
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            "Our funding initiatives are designed to encourage multidisciplinary collaboration, promote applied research, and enable scalable solutions that address real-world challenges at local, national, and global levels."
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="font-display text-2xl font-bold text-foreground">Who Can Apply</h3>
                            <p className="text-muted-foreground">
                                We welcome funding proposals from a wide range of organizations and individuals. Collaborative and cross-institutional proposals are strongly encouraged.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {applicantTypes.map((type, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground/80">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-[40px] bg-primary/5 border border-primary/10 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                                <Layers className="w-64 h-64 text-primary" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-foreground mb-6 relative z-10">Review & Selection Process</h3>
                            <div className="space-y-6 relative z-10">
                                {[
                                    { step: '01', title: 'Initial Screening', desc: 'Basic eligibility and alignment check.' },
                                    { step: '02', title: 'Expert Review', desc: 'Technical evaluation by field experts.' },
                                    { step: '03', title: 'Shortlisting', desc: 'Selection of high-potential proposals.' },
                                    { step: '04', title: 'Final Decision', desc: 'Grant communication and onboarding.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="font-display text-2xl font-black text-primary/10 group-hover:text-primary/30 transition-colors">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Domains Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Funding Domains & Focus Areas
                        </h2>
                        <p className="text-muted-foreground">
                            InnovoraMind supports multidisciplinary and interdisciplinary proposals across these core areas.
                            Novel and high-impact proposals are given priority.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fundingDomains.map((domain, index) => (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${domain.bg} ${domain.color} flex items-center justify-center mb-6`}>
                                    <domain.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-foreground mb-6">{domain.title}</h3>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {domain.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <ChevronRight className={`w-4 h-4 mt-0.5 shrink-0 ${domain.color}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Types & Criteria */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h3 className="font-display text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
                                <Rocket className="w-8 h-8 text-secondary" />
                                Types of Support
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {fundingTypes.map((type, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all">
                                        <h4 className="font-bold text-foreground mb-2">{type.title}</h4>
                                        <p className="text-sm text-muted-foreground">{type.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
                                <Search className="w-8 h-8 text-primary" />
                                Evaluation Criteria
                            </h3>
                            <div className="space-y-4">
                                {evaluationCriteria.map((item, idx) => (
                                    <div key={idx} className="p-5 rounded-2xl border border-border flex items-center justify-between group hover:bg-slate-50 transition-all">
                                        <div>
                                            <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Submission Info */}
            <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[130px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">How to Submit</h2>
                        <p className="text-white/60 text-lg">
                            Applicants are required to submit their proposals through the official online submission portal.
                            Ensure your application is complete to avoid disqualification.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            'Project Title & Abstract',
                            'Problem Statement & Objectives',
                            'Methodology / Technical Approach',
                            'Expected Outcomes & Impact',
                            'Project Timeline & Milestones',
                            'Budget Estimate & Team Profile'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <span className="text-xs font-bold">{i + 1}</span>
                                </div>
                                <span className="text-sm font-medium text-white/80">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-10 rounded-[40px] glass border border-white/10 text-center max-w-3xl mx-auto">
                        <h3 className="font-display text-2xl font-bold mb-4">Start Your Application</h3>
                        <p className="text-white/60 mb-8">Ready to transform your vision into reality? Join InnovoraMind's ecosystem of innovators.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-12 h-14">
                                <Link to="/contact">Start Your Grant Application</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Contact Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-4xl font-bold text-foreground mb-6">Why InnovoraMind?</h2>
                            <ul className="space-y-4">
                                {[
                                    'Multidisciplinary funding approach',
                                    'Transparent and structured evaluation',
                                    'Focus on innovation and real-world impact',
                                    'Support for both academic and industry projects',
                                    'Encouragement of global collaboration'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-muted-foreground">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100">
                            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact & Support</h3>
                            <p className="text-muted-foreground mb-8 text-sm">
                                For queries related to funding proposals or collaborations, please contact our dedicated research support team.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Support</div>
                                        <div className="font-bold text-foreground">Events@innovoramind.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Website</div>
                                        <div className="font-bold text-foreground">innovoramind.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FundingGrants;
