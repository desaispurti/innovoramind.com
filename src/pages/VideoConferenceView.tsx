import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Youtube, ArrowLeft, ExternalLink, Play, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const conferenceVideos: Record<string, any[]> = {
    'icdms-26': [
        { id: 1, title: 'Keynote Speech: Digital Transformation', speaker: 'Dr. Sarah Chen', duration: '45:20', url: '' },
        { id: 2, title: 'AI in Social Innovation', speaker: 'Prof. Michael Roberts', duration: '32:15', url: '' },
        { id: 3, title: 'Future of Data Analytics', speaker: 'Dr. Emily Johnson', duration: '28:40', url: '' },
    ],
    'icgbis-26': [
        { id: 4, title: 'Global Business Trends', speaker: 'James Anderson', duration: '41:10', url: '' },
        { id: 5, title: 'Innovation Strategy Panel', speaker: 'Dr. Robert Martinez', duration: '55:30', url: '' },
    ],
    'icdtis-26': [
        { id: 6, title: 'IT Systems of Tomorrow', speaker: 'Dr. Anna Wilson', duration: '38:20', url: '' },
        { id: 7, title: 'Cloud Integration Workshop', speaker: 'Prof. Mark Thompson', duration: '42:15', url: '' },
    ],
};

const VideoConferenceView = () => {
    const { id } = useParams();
    const videos = id ? conferenceVideos[id] || [] : [];
    const conferenceTitle = id?.toUpperCase().replace('-', ' ') || 'Conference';

    return (
        <Layout>
            <section className="hero-gradient py-12 lg:py-20">
                <div className="container-custom">
                    <Link to="/proceedings" className="inline-flex items-center text-primary-foreground/70 hover:text-white mb-8 group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Proceedings
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                            {conferenceTitle} <span className="text-secondary">Video Archive</span>
                        </h1>
                        <p className="text-xl text-white/70">
                            Watch full sessions and keynote presentations from our past events.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.length > 0 ? (
                            videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* YouTube Placeholder / Thumbnail */}
                                    <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                                        {video.url ? (
                                            <iframe
                                                className="w-full h-full"
                                                src={video.url.replace('watch?v=', 'embed/')}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <div className="text-center group-hover:scale-110 transition-transform duration-500">
                                                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-600/20">
                                                    <Play className="w-8 h-8 text-white fill-current" />
                                                </div>
                                                <span className="text-muted-foreground text-sm font-medium">Video URL to be added</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                                            YT 4K
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-display font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <User className="w-4 h-4 text-secondary" />
                                                {video.speaker}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4 text-secondary" />
                                                {video.duration}
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Button asChild className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold h-10">
                                                <a href={video.url || '#'} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    On YouTube
                                                </a>
                                            </Button>
                                            <Button variant="outline" className="h-10 border-border/50">
                                                Watch Now
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <Youtube className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-2">Videos coming soon</h3>
                                <p className="text-muted-foreground">We are currently processing the recordings from this conference.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default VideoConferenceView;
