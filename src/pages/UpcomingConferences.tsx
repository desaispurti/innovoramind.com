import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const conferences = [
  {
    title: 'ICDMS-26',
    date: 'February 22, 2026',
    location: 'Singapore',
    venue: 'Hybrid Mode',
    attendees: 'TBD',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    category: 'Management & Innovation',
    description: 'International Conference on Digital Management & Social Innovation. Organized by InnovoraMind.',
    tracks: ['Digital Management', 'Social Innovation', 'Sustainability', 'Global Transformation'],
    link: '/conferences/icdms-26'
  },
  {
    title: 'ICGBIS-26',
    date: 'March 15-17, 2026',
    location: 'TBD',
    venue: 'Hybrid Mode',
    attendees: 'TBD',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'Global Business',
    description: 'International Conference on Global Business & Innovation Strategy. A premier forum for business leaders.',
    tracks: ['Business Strategy', 'Global Markets', 'Innovation', 'Leadership'],
    link: '#'
  },
  {
    title: 'ICDTIS-26',
    date: 'April 8-10, 2026',
    location: 'TBD',
    venue: 'Hybrid Mode',
    attendees: 'TBD',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    category: 'Digital Tech',
    description: 'International Conference on Digital Transformation & Innovation Systems. Exploring the future of technology.',
    tracks: ['Digital Transformation', 'ICT', 'Systems Innovation', 'Big Data'],
    link: '#'
  },
  {
    title: 'ICAMIS-26',
    date: 'May 22-24, 2026',
    location: 'TBD',
    venue: 'Hybrid Mode',
    attendees: 'TBD',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    category: 'Management Info',
    description: 'International Conference on Advanced Management & Information Systems. Integrating data and management.',
    tracks: ['Information Systems', 'Strategic Management', 'Data Analytics', 'Enterprise Tech'],
    link: '#'
  }
];

const UpcomingConferences = () => {
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
              Upcoming <span className="text-gradient">Conferences</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Discover and register for our upcoming world-class conferences, summits, and symposiums across diverse domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conferences Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {conferences.map((conf, index) => (
              <motion.div
                key={conf.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="grid lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
                    <img
                      src={conf.image}
                      alt={conf.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                        {conf.category}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {conf.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{conf.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-secondary" />
                        {conf.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {conf.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-secondary" />
                        {conf.venue}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-secondary" />
                        {conf.attendees} Expected
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {conf.tracks.map((track) => (
                        <span key={track} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                          {track}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-4">
                      <Button asChild className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 group">
                        <Link to="/registrations">
                          Register Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>

                      {conf.link !== '#' ? (
                        <Button asChild variant="outline">
                          <Link to={conf.link}>Learn More</Link>
                        </Button>
                      ) : (
                        <Button variant="outline">Learn More</Button>
                      )}
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

export default UpcomingConferences;