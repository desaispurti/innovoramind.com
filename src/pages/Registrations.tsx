import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Users, Mail, Phone, Building2, User, CheckCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  {
    icon: Calendar,
    title: 'Full Conference Access',
    description: 'Attend all sessions, workshops, and keynote presentations'
  },
  {
    icon: Users,
    title: 'Networking Opportunities',
    description: 'Connect with industry leaders and fellow researchers'
  },
  {
    icon: CheckCircle,
    title: 'Certificate of Attendance',
    description: 'Official conference participation certificate'
  },
  {
    icon: MapPin,
    title: 'Hybrid Participation',
    description: 'Choose between in-person or virtual attendance'
  }
];

const Registrations = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const organization = formData.get('organization') as string;
    const position = formData.get('position') as string;
    const country = formData.get('country') as string;
    const comments = formData.get('comments') as string;

    try {
      // Create professional email template
      const emailSubject = `[Event Registration] ${firstName} ${lastName}`;
      const emailBody = `Dear InnovoraMind Team,

I would like to register for your upcoming event. Please find my details below:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Organization: ${organization}
Position: ${position}
Country: ${country}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL COMMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${comments || 'No additional comments'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please send me information about upcoming events, registration fees, and participation details.

Best regards,
${firstName} ${lastName}

---
This registration was submitted via the InnovoraMind website.
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
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Register for Our <span className="text-gradient">Conferences</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Join world-class conferences featuring leading experts, groundbreaking research, and unparalleled networking opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Attend?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience exceptional value and opportunities at our conferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Registration Form
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete the form below and our team will contact you with conference details and payment information.
              </p>
            </motion.div>

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
                  <h3 className="font-display text-3xl font-bold text-foreground mb-4">Registration Received</h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">
                    Thank you for registering. Our team will review your details and contact you shortly with conference information.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus('idle')}
                    className="rounded-full px-8"
                  >
                    Submit Another Registration
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
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                        <User className="w-5 h-5 text-secondary" />
                        Personal Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-foreground/70 ml-1">First Name</Label>
                          <Input id="firstName" name="firstName" placeholder="John" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-foreground/70 ml-1">Last Name</Label>
                          <Input id="lastName" name="lastName" placeholder="Doe" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground/70 ml-1">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground/70 ml-1">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-secondary" />
                        Professional Information
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-foreground/70 ml-1">Organization/Institution</Label>
                        <Input id="organization" name="organization" placeholder="Company or University" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-foreground/70 ml-1">Position/Title</Label>
                        <Input id="position" name="position" placeholder="e.g., Research Scientist, Professor" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-foreground/70 ml-1">Country</Label>
                        <Input id="country" name="country" placeholder="Country" required className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <div className="space-y-2">
                        <Label htmlFor="comments" className="text-foreground/70 ml-1">Additional Comments or Questions</Label>
                        <Textarea
                          id="comments"
                          name="comments"
                          placeholder="Share any special requirements, questions, or additional information..."
                          rows={4}
                          className="rounded-2xl bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        />
                      </div>
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
                        'Submit Registration Request'
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
      </section>
    </Layout>
  );
};

export default Registrations;