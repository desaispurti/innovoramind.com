import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Scale, CreditCard, Shield, AlertTriangle, Users, Gavel, Globe2, Mail, CheckCircle, XCircle } from 'lucide-react';

const TermsOfService = () => {
    const sections = [
        {
            icon: FileText,
            title: "Acceptance of Terms",
            content: "By accessing and using InnovoraMind LLC services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Users,
            title: "User Accounts & Registration",
            content: "Create and maintain your account responsibly with accurate information.",
            color: "from-purple-500 to-pink-500",
            details: [
                "Provide accurate, current, and complete information",
                "Maintain and update your information as needed",
                "Keep your password secure and confidential",
                "Notify us immediately of unauthorized access",
                "Be responsible for all activities under your account"
            ]
        },
        {
            icon: Scale,
            title: "Intellectual Property Rights",
            content: "All content is protected by copyright and trademark laws.",
            color: "from-emerald-500 to-teal-500",
            details: [
                "Website content is property of InnovoraMind LLC",
                "Authors retain copyright to submitted research",
                "We receive license to publish submitted content",
                "Respect all intellectual property rights"
            ]
        },
        {
            icon: CreditCard,
            title: "Payment & Refund Policy",
            content: "Clear and fair payment terms for all our services.",
            color: "from-orange-500 to-amber-500",
            details: [
                "Services: Refunds available before project kickoff (10% fee applies)",
                "Software Licenses: Non-refundable after deployment begins",
                "Consulting: Per individual service agreements",
                "All fees stated in USD, paid in advance"
            ]
        },
        {
            icon: AlertTriangle,
            title: "Prohibited Activities",
            content: "Activities that are strictly forbidden on our platform.",
            color: "from-red-500 to-rose-500",
            prohibited: [
                "Violating laws or regulations",
                "Infringing intellectual property rights",
                "Submitting false or fraudulent information",
                "Engaging in plagiarism or academic dishonesty",
                "Transmitting viruses or malware",
                "Unauthorized system access attempts",
                "Harassment or abuse of other users",
                "Spam or unsolicited marketing"
            ]
        },
        {
            icon: Shield,
            title: "Limitation of Liability",
            content: "Understanding the scope and limits of our liability.",
            color: "from-indigo-500 to-purple-500",
            details: [
                "Services provided 'as is' and 'as available'",
                "No guarantee of uninterrupted service",
                "Limited liability for indirect damages",
                "Total liability capped at 12-month fees paid"
            ]
        },
        {
            icon: Gavel,
            title: "Dispute Resolution",
            content: "Fair and transparent process for resolving disagreements.",
            color: "from-cyan-500 to-blue-500",
            details: [
                "Governed by New Mexico state laws",
                "Good-faith negotiation first",
                "Binding arbitration if unresolved",
                "Venue: New Mexico, United States"
            ]
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                {/* Hero Section */}
                <section className="relative overflow-hidden hero-gradient py-32 lg:py-40">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
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
                                <Scale className="w-12 h-12 text-white" />
                            </motion.div>

                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                                Terms of Service
                            </h1>
                            <p className="text-xl text-white/80 mb-4">
                                Clear guidelines for using our services
                            </p>
                            <p className="text-sm text-white/60">
                                Last Updated: February 13, 2026
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Overview */}
                <section className="relative -mt-16 z-10">
                    <div className="container-custom max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">Fair & Transparent</h3>
                                    <p className="text-sm text-muted-foreground">Clear terms with no hidden clauses</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">Your Rights Protected</h3>
                                    <p className="text-sm text-muted-foreground">Balanced rights and responsibilities</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                                        <Globe2 className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">Legally Compliant</h3>
                                    <p className="text-sm text-muted-foreground">Adheres to international standards</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="section-padding">
                    <div className="container-custom max-w-6xl">
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
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
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-foreground/80">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {section.prohibited && (
                                                <ul className="space-y-3">
                                                    {section.prohibited.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-foreground/80">{item}</span>
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
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Legal Questions?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Our legal team is available to clarify any terms or answer your questions.
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

                        {/* Acknowledgment */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-800"
                        >
                            <div className="flex items-start gap-4">
                                <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-foreground mb-2">Acknowledgment</h4>
                                    <p className="text-sm text-muted-foreground">
                                        By using InnovoraMind LLC services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and InnovoraMind LLC.
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

export default TermsOfService;
