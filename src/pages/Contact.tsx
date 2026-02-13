import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      // Create professional email template
      const emailSubject = `[Contact Form] ${subject}`;
      const emailBody = `Dear InnovoraMind Team,

I am reaching out through your website contact form with the following inquiry:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Email: ${email}
Subject: ${subject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I look forward to hearing from you soon.

Best regards,
${name}

---
This message was sent via the InnovoraMind contact form.
Timestamp: ${new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'America/Denver'
      })}`;

      // Encode the email components for URL
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=Events@innovoramind.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Simulate brief processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 800));

      // Try to open Gmail in new tab
      const gmailWindow = window.open(mailtoLink, '_blank');

      // Check if popup was blocked
      if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'undefined') {
        // Popup was blocked - show error
        setStatus('error');
        return;
      }

      // Show success message
      setStatus('success');
    } catch (error) {
      console.error('Error opening Gmail:', error);
      setStatus('error');
    }
  };

  return (
    <Layout>
      <section className="hero-gradient py-20 lg:py-28 text-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-accent underline decoration-accent/30 underline-offset-8">Us</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              For inquiries, event partnerships, or collaboration opportunities, connect with our global team. We prioritize supporting researchers and industry professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Official Channels</h2>
                <p className="text-muted-foreground">Our support team typically responds within 24 business hours.</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Mailing Address</h3>
                    <p className="text-muted-foreground leading-relaxed">1209 Mountain Road Pl NE, Ste H,<br />Albuquerque, NM 87110, USA</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0 border border-secondary/10">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Direct Email</h3>
                    <p className="text-muted-foreground font-medium">Events@innovoramind.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card border-2 border-green-500/20 p-10 md:p-16 rounded-3xl text-center shadow-2xl shadow-green-500/5"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-foreground mb-4">Message Received</h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">
                      Thank you for reaching out. Your inquiry has been logged, and a representative will contact you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setStatus('idle')}
                      className="rounded-full px-8"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-card border border-border/50 p-8 md:p-10 rounded-3xl shadow-xl shadow-foreground/5"
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground/70 ml-1">Full Name</Label>
                          <Input id="name" name="name" placeholder="John Doe" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground/70 ml-1">Email Address</Label>
                          <Input id="email" name="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground/70 ml-1">Inquiry Type / Subject</Label>
                        <Input id="subject" name="subject" placeholder="Conference Partnership" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground/70 ml-1">How can we assist you?</Label>
                        <Textarea id="message" name="message" rows={5} placeholder="Provide details about your inquiry..." required className="rounded-2xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                      >
                        {status === 'submitting' ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing Request...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            Send Message
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </Button>

                      {status === 'error' && (
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl">
                          <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-2">
                            ⚠️ Unable to open Gmail
                          </p>
                          <p className="text-red-600/80 dark:text-red-400/80 text-xs">
                            Your browser may have blocked the popup. Please allow popups for this site or email us directly at <a href="mailto:Events@innovoramind.com" className="underline font-semibold">Events@innovoramind.com</a>
                          </p>
                        </div>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;