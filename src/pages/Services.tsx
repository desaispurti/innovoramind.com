import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
    Search, Layout as LayoutIcon, Code, TrendingUp,
    Image as ImageIcon, Zap, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Search,
        title: 'Website Discovery',
        description: 'Strategic workshops set every project up for success. We dive deep into your goals, audience, and market to build a rock-solid foundation for your digital presence.',
        gradient: 'from-blue-500 to-cyan-400',
        features: ['Enterprise-grade quality'],
    },
    {
        icon: LayoutIcon,
        title: 'Custom WordPress Design',
        description: 'Unlock growth with a custom website design tailored to your brand. We create visually stunning, intuitive interfaces that convert visitors into loyal customers.',
        gradient: 'from-indigo-500 to-purple-500',
        features: ['Scalable architecture'],
    },
    {
        icon: Code,
        title: 'Custom WordPress Development',
        description: 'Custom WordPress solutions built for performance and scalable growth. Clean code, fast load times, and robust security are at the core of every site we build.',
        gradient: 'from-violet-500 to-fuchsia-500',
        features: ['Expert implementation'],
    },
    {
        icon: TrendingUp,
        title: 'B2B SEO Strategy',
        description: 'Boost growth with bottom of funnel SEO strategies that drive quality leads. We focus on visibility that actually impacts your revenue.',
        gradient: 'from-emerald-500 to-teal-400',
        features: ['ROI-focused optimization'],
    },
    {
        icon: ImageIcon,
        title: 'Custom Website Graphics',
        description: 'Bring your brand to life with tailored visual storytelling. From bespoke icons to custom illustrations, we ensure your brand stands out.',
        gradient: 'from-orange-500 to-rose-500',
        features: ['Bespoke brand assets'],
    },
    {
        icon: Zap,
        title: 'Custom Website Animations',
        description: 'Engage users with seamless, on-brand motion design. We use subtle animations to improve user experience and bring life to your digital products.',
        gradient: 'from-amber-400 to-orange-500',
        features: ['Dynamic user engagement'],
    }
];

const Services = () => {
    return (
        <Layout>
            <div className="pt-24 pb-20 overflow-hidden bg-slate-950 text-white min-h-screen">
                {/* Background Accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container-custom relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-secondary text-sm font-bold uppercase tracking-widest mb-6"
                        >
                            Enterprise Capabilities
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary animate-gradient">Services</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            We provide comprehensive digital solutions that empower enterprises to innovate, grow, and lead in the digital era.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                                    {/* Decorative mesh inside card */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-secondary transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Link to="/contact" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                                            Get Started
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Have a specific project in mind?
                            </h2>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Connect with our team of experts for a custom strategy and technical consultation tailored to your business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button asChild size="lg" className="h-14 px-10 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg rounded-xl shadow-lg transition-all group">
                                    <Link to="/contact">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-semibold text-lg rounded-xl backdrop-blur-sm transition-all">
                                    <Link to="/solutions">
                                        View Solutions
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
