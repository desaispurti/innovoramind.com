import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileText } from 'lucide-react';

const certificates = [
    {
        title: "ISO/IEC 27001:2022 Certified",
        description: "Recognized for Information Security Management System (ISMS). We prioritize data security, integrity, and confidentiality in all our operations.",
        icon: ShieldCheck,
        image: "/cert-iso.png",
    },
    {
        title: "Registered Trademark",
        description: "InnovoraMind is a registered trademark under Class 41, covering Education, Providing of Training, Entertainment, Sporting and Cultural Activities.",
        icon: Award,
        image: "/cert-trademark.png",
    },
    {
        title: "Authorized Service Provider",
        description: "Verified compliance with national and international standards for delivering academic and professional services.",
        icon: FileText,
        image: "/cert-auth.png",
    }
];

export const CertificatesSection = () => {
    return (
        <section className="section-padding bg-muted/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        Official Recognitions
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                        Our <span className="text-gradient">Certifications & Accreditations</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We are committed to quality, security, and excellence. Our certifications reflect our dedication to maintaining the highest standards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 flex flex-col">
                                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Certificate Verification
                                        </p>
                                    </div>
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                                        <cert.icon className="w-5 h-5 text-primary" />
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
