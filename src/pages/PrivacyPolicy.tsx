import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Globe, Mail, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: FileText,
            title: "Introduction",
            content: "InnovoraMind LLC ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Database,
            title: "Information We Collect",
            content: "We collect personal information that you voluntarily provide and automatically collected data to improve our services.",
            color: "from-purple-500 to-pink-500",
            details: [
                "Name and contact information (email, phone, address)",
                "Professional information (company, job title, research interests)",
                "Professional credentials and specializations",
                "Payment information (processed securely)",
                "IP address, browser type, and device information",
                "Pages visited and interaction data"
            ]
        },
        {
            icon: Eye,
            title: "How We Use Your Information",
            content: "Your information helps us provide better services and improve your experience.",
            color: "from-emerald-500 to-teal-500",
            details: [
                "Provide and maintain our services",
                "Process registrations and payments",
                "Send updates about services and solutions",
                "Respond to inquiries and provide support",
                "Improve our website and services",
                "Comply with legal obligations"
            ]
        },
        {
            icon: Lock,
            title: "Data Security",
            content: "We implement robust security measures to protect your personal information.",
            color: "from-orange-500 to-red-500",
            details: [
                "SSL/TLS encryption for data transmission",
                "Secure servers and databases",
                "Regular security audits and updates",
                "Access controls and authentication",
                "ISO/IEC 27001:2022 compliance"
            ]
        },
        {
            icon: UserCheck,
            title: "Your Rights and Choices",
            content: "You have control over your personal information and how we use it.",
            color: "from-indigo-500 to-purple-500",
            details: [
                "Access: Request access to your personal information",
                "Correction: Request correction of inaccurate data",
                "Deletion: Request deletion of your information",
                "Opt-Out: Unsubscribe from marketing communications",
                "Data Portability: Request a copy in portable format",
                "Restriction: Request restriction of processing"
            ]
        },
        {
            icon: Globe,
            title: "International Data Transfers",
            content: "Your information may be transferred to and processed in countries other than your own, with appropriate safeguards in place.",
            color: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                {/* Hero Section */}
                <section className="relative overflow-hidden hero-gradient py-32 lg:py-40">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
                    </div>

                    <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md mb-8"
                            >
                                <Shield className="w-12 h-12 text-white" />
                            </motion.div>

                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                                Privacy Policy
                            </h1>
                            <p className="text-xl text-white/80 mb-4">
                                Your privacy is our priority
                            </p>
                            <p className="text-sm text-white/60">
                                Last Updated: February 13, 2026
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="relative -mt-16 z-10">
                    <div className="container-custom max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Shield, label: "ISO 27001 Certified", value: "Security" },
                                { icon: Lock, label: "256-bit Encryption", value: "Protected" },
                                { icon: CheckCircle, label: "GDPR & CCPA", value: "Compliant" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                                            <p className="text-lg font-bold text-foreground">{stat.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="section-padding">
                    <div className="container-custom max-w-6xl">
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                            <section.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                                {section.content}
                                            </p>
                                            {section.details && (
                                                <ul className="space-y-3">
                                                    {section.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                                            <span className="text-foreground/80">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-12 bg-gradient-to-br from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5 rounded-3xl p-8 md:p-12 border border-secondary/20"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 shadow-xl">
                                    <Mail className="w-10 h-10 text-white" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Questions About Your Privacy?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Our privacy team is here to help. Contact us for any questions or concerns.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <a href="mailto:operations@innovoramind.com" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-colors">
                                            <Mail className="w-4 h-4" />
                                            operations@innovoramind.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Compliance Notice */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-800"
                        >
                            <div className="flex items-start gap-4">
                                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-foreground mb-2">Compliance Statement</h4>
                                    <p className="text-sm text-muted-foreground">
                                        This Privacy Policy is designed to comply with applicable data protection laws, including GDPR, CCPA, and other relevant regulations. InnovoraMind LLC operates in accordance with ISO 9001:2015 and ISO/IEC 27001:2022 standards.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
