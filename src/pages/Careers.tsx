import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Globe2,
    Cpu,
    Code,
    Lightbulb,
    Users,
    ShieldCheck,
    Rocket,
    Mail,
    Search,
    BookOpen,
    GraduationCap,
    ShieldAlert,
    ChevronRight,
    TrendingUp,
    BrainCircuit
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <Layout>
            {/* Hero Section - Horizon Style Planet */}
            <section className="relative min-h-[85vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
                {/* Celestial Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#1e3a8a_0%,#020617_60%)] opacity-60" />
                    {/* Stars */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                </div>

                <div className="container-custom relative z-20 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Innovate your next
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Navigate your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Future.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Empowering the next generation of technologists to build, innovate, and lead the global digital transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button asChild size="lg" className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all group">
                                <a href="#opportunities">
                                    Explore Roles
                                    <Search className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Horizon Planet Animation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] md:w-[120%] lg:w-[110%] aspect-square translate-y-[65%]">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
                        className="w-full h-full rounded-full relative"
                    >
                        {/* The Planet Body */}
                        <div className="absolute inset-0 rounded-full bg-slate-950 border border-blue-500/20 shadow-[0_-20px_100px_rgba(37,99,235,0.3)] overflow-hidden">
                            {/* Texture/Atmosphere Layer */}
                            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-slate-950" />
                        </div>

                        {/* Glow Rim */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-blue-400/30 to-transparent blur-md pointer-events-none" />
                    </motion.div>

                    {/* Horizon Atmosphere Glow */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl -translate-y-1/2" />
                </div>
            </section>

            {/* Opportunities Section - Experienced vs Graduates */}
            <section id="opportunities" className="section-padding bg-slate-950 relative border-t border-white/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Experienced Professionals */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <TrendingUp className="w-32 h-32 text-blue-400" />
                            </div>
                            <div className="relative z-10">
                                <Search className="w-12 h-12 text-blue-500 mb-6" />
                                <h2 className="text-3xl font-bold text-white mb-4 italic">Experienced Professionals</h2>
                                <p className="text-slate-400 mb-8 max-w-sm">
                                    Take your career to the next level. Lead high-impact projects in AI, cloud modernization, and enterprise architecture.
                                </p>
                                <Button asChild variant="link" className="text-blue-400 p-0 text-lg group-hover:gap-4 transition-all">
                                    <Link to="/contact">Find your next challenge <ChevronRight className="w-5 h-5" /></Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Graduates & Students */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GraduationCap className="w-32 h-32 text-purple-400" />
                            </div>
                            <div className="relative z-10">
                                <GraduationCap className="w-12 h-12 text-purple-500 mb-6" />
                                <h2 className="text-3xl font-bold text-white mb-4 italic">Students & Graduates</h2>
                                <p className="text-slate-400 mb-8 max-w-sm">
                                    Start your journey with purpose. Join our mentorship programs and work on real-world engineering challenges.
                                </p>
                                <Button asChild variant="link" className="text-purple-400 p-0 text-lg group-hover:gap-4 transition-all">
                                    <Link to="/contact">Start your journey <ChevronRight className="w-5 h-5" /></Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Culture & Purpose - Interactive Data Visualization feel */}
            <section className="section-padding bg-slate-950 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Life at <span className="text-gradient">InnovoraMind</span>
                        </h2>
                        <p className="text-slate-400 text-lg italic">
                            Where creativity meets enterprise logic. We are a community of researchers and builders.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: BrainCircuit,
                                title: 'Continuous Learning',
                                desc: 'Access to top-tier research journals, AI labs, and internal technology bootcamps to stay ahead of the curve.'
                            },
                            {
                                icon: Globe2,
                                title: 'Inclusion at Core',
                                desc: 'Diverse perspectives fuel innovation. We operate as a global collective across multiple time zones and cultures.'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Idea Meritocracy',
                                desc: 'The best idea wins, regardless of hierarchy. We encourage bold experimentation and feedback at every level.'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all duration-500 group-hover:rotate-6">
                                    <item.icon className="w-10 h-10 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed italic">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment Fraud Alert - Standard Enterprise professionalism */}
            <section className="py-12 bg-blue-950/20 border-y border-blue-900/40">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-between p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                <ShieldAlert className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">Recruitment Fraud Alert</h3>
                                <p className="text-sm text-slate-400 max-w-xl italic">
                                    InnovoraMind LLC never requests any fee during any stage of the recruitment process. All official communication will only come from @innovoramind.com domains.
                                </p>
                            </div>
                        </div>
                        <Button asChild variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-full h-12 px-8">
                            <a href="mailto:operations@innovoramind.com">Report suspicious activity</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="section-padding bg-slate-950 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The Hiring Journey</h2>
                        <p className="text-slate-400">Our evaluation process is designed to be transparent, thorough, and collaborative.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { step: '01', title: 'Apply', desc: 'Sumbit your profile and showcase your core expertise.' },
                            { step: '02', title: 'Evaluate', desc: 'Technical assessments and domain expertise review.' },
                            { step: '03', title: 'Connect', desc: 'Interaction with our engineering and innovation leads.' },
                            { step: '04', title: 'Join Us', desc: 'Onboarding and integration into our global workforce.' }
                        ].map((item, i) => (
                            <div key={i} className="relative p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all group">
                                <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors absolute top-6 right-6">{item.step}</span>
                                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h4>
                                <p className="text-slate-400 text-sm italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-slate-950">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 shadow-[0_0_100px_rgba(37,99,235,0.2)]"
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.1] mix-blend-overlay" />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">Be part of the next big thing.</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10 italic">
                            Your skills can help us solve tomorrow's problems today. Let's build something extraordinary together.
                        </p>
                        <Button asChild size="lg" className="h-16 px-12 bg-white text-blue-900 hover:bg-slate-100 font-black text-xl rounded-2xl shadow-2xl transition-all hover:-translate-y-1 relative z-10">
                            <Link to="/contact">Join the Talent Network</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Careers;
