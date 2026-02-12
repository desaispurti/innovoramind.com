import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Globe, User, Users, ArrowRight, CheckCircle } from 'lucide-react';

// import nadiaAdnan from '@/assets/speakers/nadia-adnan.png';
// import ranaElKhawand from '@/assets/speakers/rana-el-khawand.png';
import walidaOunruean from '@/assets/advisors/advisor-1.png';
// import tianshengYang from '@/assets/speakers/tiansheng-yang.png';

const speakers = [
    {
        name: 'Dr. Nadia Adnan',
        role: 'Assistant Professor & Research Scientist',
        department: 'Management and Marketing',
        institution: 'Prince Mohammad Bin Fahd University, Saudi Arabia',
        image: '/speakers/nadia.png'
    },
    {
        name: 'Dr. Ranà El Khawand',
        role: 'Technical Expert',
        department: 'Saida Risk Mapping Project',
        institution: '(UN-Habitat)',
        image: '/speakers/Dr. Ranà El Khawand.png'
    },
    {
        name: 'Dr. Walida Ounruean',
        role: 'Assistant Professor',
        department: 'Faculty of Education',
        institution: 'Uttaradit Rajabhat University, Thailand',
        image: walidaOunruean
    },
    {
        name: 'Dr. Tiansheng Yang',
        role: 'Senior Lecturer',
        department: 'School of Computing and Mathematics',
        institution: 'University of South Wales, United Kingdom',
        image: '/speakers/Dr. Tiansheng Yang.png'
    }
];

const importantDates = [
    { label: 'Abstract Submission', date: 'Dec 10, 2025' },
    { label: 'Full Paper Submission', date: 'Dec 25, 2025' },
    { label: 'Acceptance Notification', date: 'Jan 5, 2026' },
    { label: 'Registration Deadline', date: 'Jan 20, 2026' },
    { label: 'Conference Date', date: 'Feb 22, 2026' }
];

const ICDMS26 = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                        alt="Conference Background"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                <div className="container-custom relative z-10 text-center text-primary-foreground pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary font-semibold mb-6">
                            Hybrid Mode
                        </span>
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                            ICDMS-26
                        </h1>
                        <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 font-medium mb-8">
                            International Conference on <span className="text-gradient">Digital Management & Social Innovation</span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-primary-foreground/70 mb-10">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-accent" />
                                Singapore
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-accent" />
                                February 22, 2026
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-accent" />
                                Hybrid Mode
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent text-white font-semibold px-8 py-6 text-lg hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                                <a href="#about">
                                    Explore Conference
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
                                <Link to="/registrations">
                                    Register Now
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-8 text-sm text-primary-foreground/50">
                            Organized by <span className="font-bold text-white">InnovoraMind</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-3xl rounded-full translate-x-1/2" />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                                About ICDMS-26
                            </h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent rounded-full mb-8" />
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                ICDMS-26 is a globally recognized forum bringing together academicians, industry leaders, policymakers, and innovators to explore cutting-edge research in digital management, social innovation, sustainability, and global transformation.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The conference serves as a catalyst for exchanging ideas, fostering collaboration, and shaping the future of digital and social ecosystems.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                                    alt="Conference Discussion"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Networking</p>
                                        <p className="font-bold text-foreground">Global Community</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="font-display text-4xl font-bold text-foreground mb-4">Keynote Speakers</h2>
                        <p className="text-muted-foreground">International thought leaders contributing to ICDMS-26</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card hover:bg-card/50 p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
                            >
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-secondary/10 flex-shrink-0 bg-muted flex items-center justify-center relative">
                                    {speaker.image ? (
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <User className="w-12 h-12 text-muted-foreground/50" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{speaker.name}</h3>
                                    <div className="space-y-1 text-sm text-muted-foreground">
                                        <p className="font-medium text-secondary">{speaker.role}</p>
                                        {speaker.department && <p>{speaker.department}</p>}
                                        <p>{speaker.institution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Dates Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl font-bold text-foreground mb-4">Important Dates</h2>
                        <p className="text-muted-foreground">Mark your calendar for these key deadlines</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {importantDates.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:border-secondary/50 hover:shadow-md transition-all w-full sm:w-64 text-center group"
                            >
                                <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform" />
                                <h4 className="text-muted-foreground text-sm font-medium mb-2">{item.label}</h4>
                                <p className="font-display text-xl font-bold text-foreground">{item.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary/5 border-t border-border">
                <div className="container-custom text-center">
                    <h2 className="font-display text-3xl font-bold mb-6">Ready to Participate?</h2>
                    <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 px-10 py-6 text-lg shadow-xl">
                        <Link to="/registrations">
                            Register for ICDMS-26
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default ICDMS26;
