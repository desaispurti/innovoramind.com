import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, TrendingUp, Target, Globe, Mail, CheckCircle, Info, Shield, Zap, BarChart } from 'lucide-react';

const CookiePolicy = () => {
    const cookieTypes = [
        {
            icon: Shield,
            title: "Essential Cookies",
            description: "Necessary for the website to function properly",
            color: "from-blue-500 to-cyan-500",
            cookies: [
                { name: "session_id", purpose: "Maintains user session", duration: "Session" },
                { name: "csrf_token", purpose: "Security protection", duration: "Session" },
                { name: "cookie_consent", purpose: "Stores cookie preferences", duration: "1 year" }
            ]
        },
        {
            icon: BarChart,
            title: "Performance & Analytics",
            description: "Help us understand how visitors interact with our website",
            color: "from-purple-500 to-pink-500",
            cookies: [
                { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years" },
                { name: "_gid", purpose: "Google Analytics - distinguishes users", duration: "24 hours" },
                { name: "_gat", purpose: "Google Analytics - throttle requests", duration: "1 minute" }
            ]
        },
        {
            icon: Settings,
            title: "Functionality Cookies",
            description: "Enable enhanced functionality and personalization",
            color: "from-emerald-500 to-teal-500",
            cookies: [
                { name: "theme_preference", purpose: "Remembers dark/light mode", duration: "1 year" },
                { name: "language_pref", purpose: "Stores language preference", duration: "1 year" },
                { name: "user_region", purpose: "Customizes content by location", duration: "6 months" }
            ]
        },
        {
            icon: Target,
            title: "Marketing & Advertising",
            description: "Track browsing habits for relevant advertisements (with consent)",
            color: "from-orange-500 to-red-500",
            cookies: [
                { name: "_fbp", purpose: "Facebook Pixel - tracks conversions", duration: "3 months" },
                { name: "IDE", purpose: "Google DoubleClick - ad targeting", duration: "1 year" }
            ]
        }
    ];

    const controlMethods = [
        {
            icon: Settings,
            title: "Browser Settings",
            description: "Control cookies directly through your browser preferences",
            color: "from-blue-500 to-indigo-500",
            steps: [
                "View and delete cookies individually",
                "Block third-party cookies",
                "Block all cookies from specific sites",
                "Delete all cookies when closing browser"
            ]
        },
        {
            icon: Globe,
            title: "Opt-Out Tools",
            description: "Use industry-standard opt-out mechanisms",
            color: "from-purple-500 to-pink-500",
            tools: [
                { name: "Google Analytics", link: "Browser Add-on" },
                { name: "NAI Opt-out", link: "Network Advertising Initiative" },
                { name: "DAA Opt-out", link: "Digital Advertising Alliance" }
            ]
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                {/* Hero Section */}
                <section className="relative overflow-hidden hero-gradient py-32 lg:py-40">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
                    </div>

                    <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md mb-8"
                            >
                                <Cookie className="w-12 h-12 text-white" />
                            </motion.div>

                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                                Cookie Policy
                            </h1>
                            <p className="text-xl text-white/80 mb-4">
                                Understanding how we use cookies
                            </p>
                            <p className="text-sm text-white/60">
                                Last Updated: February 13, 2026
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* What Are Cookies */}
                <section className="relative -mt-16 z-10">
                    <div className="container-custom max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-xl">
                                    <Info className="w-10 h-10 text-white" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Cookies are small text files placed on your device when you visit a website. They help websites work efficiently, remember your preferences, and provide valuable insights to improve your experience.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Cookie Types */}
                <section className="section-padding">
                    <div className="container-custom max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Types of Cookies We Use
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Different cookies serve different purposes
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {cookieTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 shadow-lg`}>
                                        <type.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{type.title}</h3>
                                    <p className="text-muted-foreground mb-6">{type.description}</p>

                                    <div className="space-y-4">
                                        {type.cookies.map((cookie, idx) => (
                                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <code className="text-sm font-mono font-bold text-secondary">{cookie.name}</code>
                                                    <span className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-foreground whitespace-nowrap">
                                                        {cookie.duration}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{cookie.purpose}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Control Methods */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                How to Control Cookies
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                You're in control of your cookie preferences
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {controlMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 shadow-lg`}>
                                        <method.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{method.title}</h3>
                                    <p className="text-muted-foreground mb-6">{method.description}</p>

                                    {method.steps && (
                                        <ul className="space-y-3">
                                            {method.steps.map((step, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-foreground/80">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {method.tools && (
                                        <div className="space-y-3">
                                            {method.tools.map((tool, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                                                    <span className="font-semibold text-foreground">{tool.name}</span>
                                                    <span className="text-sm text-secondary">{tool.link}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Browser Instructions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Browser-Specific Instructions</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { name: "Chrome", path: "Settings → Privacy → Cookies" },
                                    { name: "Firefox", path: "Options → Privacy → Cookies" },
                                    { name: "Safari", path: "Preferences → Privacy" },
                                    { name: "Edge", path: "Settings → Privacy → Cookies" }
                                ].map((browser, idx) => (
                                    <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                        <h4 className="font-bold text-foreground mb-2">{browser.name}</h4>
                                        <p className="text-sm text-muted-foreground">{browser.path}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

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
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Questions About Cookies?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Our privacy team can help you understand and manage your cookie preferences.
                                    </p>
                                    <a href="mailto:operations@innovoramind.com" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-colors">
                                        <Mail className="w-4 h-4" />
                                        operations@innovoramind.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Consent Notice */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800"
                        >
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-foreground mb-2">Your Consent</h4>
                                    <p className="text-sm text-muted-foreground">
                                        By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
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

export default CookiePolicy;
