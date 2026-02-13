import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Rocket, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Interior Gradient & Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-indigo-950 border border-white/10" />

          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative px-8 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-secondary-foreground mb-8">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Accelerate Your Digital Evolution</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Transform Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary">
                  Enterprise with AI?
                </span>
              </h2>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                Join InnovoraMind at the forefront of technological innovation.
                We deliver scalable solutions that empower global enterprises to define the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all group">
                  <Link to="/contact">
                    Partner With Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 border-white/20 text-white hover:bg-white/5 font-semibold text-lg rounded-xl backdrop-blur-sm transition-all">
                  <Link to="/solutions">
                    Explore Solutions
                  </Link>
                </Button>
              </div>

              {/* Trust metrics */}
              <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-slate-400 text-sm">Business Domains</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-slate-400 text-sm">Innovations Shared</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">99%</div>
                  <div className="text-slate-400 text-sm">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">Global</div>
                  <div className="text-slate-400 text-sm">Research Network</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating icons for visual interest */}
          <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden xl:block opacity-20">
            <Rocket className="w-16 h-16 text-secondary animate-bounce" />
          </div>
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block opacity-20">
            <Globe className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};