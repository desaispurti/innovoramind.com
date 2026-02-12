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
    // You can get a free access key from https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      // Simulate API call for now, or use a real service like Web3Forms
      // For a real implementation, uncomment below:
      /*
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
      */

      // Mocking success for demonstration of the professional flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (error) {
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
                        <p className="text-red-500 text-sm text-center font-medium">
                          There was an error sending your message. Please try again.
                        </p>
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