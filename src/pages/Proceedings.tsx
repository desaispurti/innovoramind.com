import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Search, Calendar, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const conferenceProceedings = [
  {
    id: 'icdms-26',
    title: 'ICDMS-26: Digital Management & AI Science',
    date: 'February 2026',
    location: 'Singapore | Hybrid',
    videos: '15'
  },
  {
    id: 'icgbis-26',
    title: 'ICGBIS-26: Global Tech & Business Strategy',
    date: 'March 2026',
    location: 'Virtual Mode',
    videos: '12'
  },
  {
    id: 'icdtis-26',
    title: 'ICDTIS-26: IT Transformation & Innovation',
    date: 'April 2026',
    location: 'Hybrid Mode',
    videos: '20'
  }
];

const Proceedings = () => {
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
              Conference <span className="text-gradient">Video Vault</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Watch recorded sessions, keynotes, and technical presentations from our past international conferences.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search conferences..."
                className="pl-12 h-14 bg-primary-foreground text-foreground rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Recorded Sessions' },
              { value: '45+', label: 'Global Summits' },
              { value: '12+', label: 'Speaker Tracks' },
              { value: '50K+', label: 'Session Views' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Groups */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-6">
            {conferenceProceedings.map((conf, index) => (
              <motion.div
                key={conf.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-[32px] bg-card border border-border hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                    <Youtube className="w-40 h-40" />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 flex items-center justify-center shrink-0 border border-red-500/5">
                          <Play className="w-8 h-8 text-red-600 fill-current" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {conf.title}
                          </h3>
                          <div className="flex flex-wrap gap-6 text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-secondary" />
                              {conf.date}
                            </span>
                            <span className="flex items-center gap-2">
                              <Search className="w-5 h-5 text-secondary" />
                              {conf.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Youtube className="w-5 h-5 text-red-600" />
                              {conf.videos} Record Sessions
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <Button asChild className="rounded-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 font-bold px-12 h-12 shadow-lg shadow-secondary/20">
                        <Link to={`/proceedings/${conf.id}`}>
                          View Conference Videos
                          <Play className="ml-2 w-4 h-4 fill-current" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proceedings;