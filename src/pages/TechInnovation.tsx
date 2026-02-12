import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
    Cpu,
    Code2,
    Database,
    Globe,
    ArrowRight,
    Zap,
    ShieldCheck,
    Binary,
    Microchip,
    Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const techDomains = [
    {
        icon: Cpu,
        title: 'Artificial Intelligence',
        description: 'Specialized tracks in Machine Learning, Deep Learning, and Neural Networks. We bring together global experts to discuss AI Ethics, Generative AI, and Autonomous Systems.',
        color: 'from-blue-500 to-cyan-400',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop'
    },
    {
        icon: Database,
        title: 'Information Technology',
        description: 'Focusing on Cloud Computing, Big Data Analytics, and enterprise-scale IT infrastructure. Our conferences cover the backbone of modern digital organizations.',
        color: 'from-purple-500 to-pink-400',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
    },
    {
        icon: Code2,
        title: 'Software Engineering',
        description: 'DevOps, Agile methodologies, and full-stack development trends. Explore the latest in programming languages, architecture, and software quality assurance.',
        color: 'from-amber-500 to-orange-400',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop'
    }
];

const features = [
    {
        icon: ShieldCheck,
        title: 'Cybersecurity',
        description: 'Discussing the latest in threat detection, zero-trust architecture, and data privacy.'
    },
    {
        icon: Network,
        title: 'Internet of Things',
        description: 'Smart cities, industrial IoT, and edge computing innovations.'
    },
    {
        icon: Binary,
        title: 'Blockchain & Web3',
        description: 'Decentralized systems, smart contracts, and the future of digital assets.'
    },
    {
        icon: Microchip,
        title: 'Quantum Computing',
        description: 'Exploring the boundary of computational science and its real-world apps.'
    }
];

const TechInnovation = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden hero-gradient py-24 lg:py-32">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-md">
                            Cutting-Edge Technology & Innovation
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
                            Pioneering the <span className="text-secondary">Digital Frontier</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            InnovoraMind is at the forefront of the technological revolution. We curate world-class conferences that bridge the gap between academic research and industrial application in AI, IT, and Software.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-8 h-14">
                                <Link to="/upcoming-conferences">
                                    Browse Tech Conferences
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 backdrop-blur-sm">
                                <Link to="/proceedings">View Research Papers</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
            </section>

            {/* Main Domains */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Our Core Technology Domains
                        </h2>
                        <p className="text-muted-foreground text-lg italic">
                            Empowering the world through curated knowledge exchange in the most impactful fields of the 21st century.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {techDomains.map((domain, index) => (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={domain.image}
                                        alt={domain.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${domain.color} opacity-20`} />
                                    <div className="absolute top-6 right-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                                            <domain.icon className="w-6 h-6 text-foreground" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">{domain.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {domain.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats/Highlights */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-20 text-center border border-white/20 shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">
                                Be Part of the <span className="text-gradient">Tech Evolution</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
                                "We don't just host events; we spark the collaborations that define the future of information technology."
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-16 shadow-xl shadow-primary/20 transform hover:scale-105 transition-all">
                                    <Link to="/upcoming-conferences">View All Tech Events</Link>
                                </Button>
                                <Button asChild variant="ghost" size="lg" className="text-foreground font-bold hover:bg-muted rounded-full px-10 h-16 underline decoration-primary underline-offset-8">
                                    <Link to="/registrations">Join as a Participant</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TechInnovation;
