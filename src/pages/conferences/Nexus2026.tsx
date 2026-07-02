import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
  Calendar, MapPin, Video, Code, Shield, Cloud, Component, CheckCircle2, Trophy, Crosshair, ClipboardList, Target, Award, ExternalLink, Users, User, PlayCircle
} from 'lucide-react';

import zohaImg from '@/assets/advisors/ZR.jpeg';
import joeImg from '@/assets/advisors/advisor-2.png';
import ezinneImg from '@/assets/advisors/advisor-6.jpeg';
import firasImg from '@/assets/advisors/Dr firas.jpeg';
import katarzynaImg from '@/assets/advisors/katarzyna.png';
import profOlukemiImg from '@/assets/image copy.png';
import emeraldImg from '@/assets/image copy 6.png';
import drSaleemImg from '@/assets/image copy 3.png';
import fatimahImg from '@/assets/image copy 4.png';
import hassanImg from '@/assets/image copy 5.png';
import truptiImg from '@/assets/image copy 7.png';
import pankajImg from '@/assets/image copy 10.png';
import mrugendraImg from '@/assets/image copy 11.png';
import nandanImg from '@/assets/image copy 12.png';
import satishImg from '@/assets/image copy 14.png';
import sushantImg from '@/assets/image copy 15.png';
import maniImg from '@/assets/image copy 16.png';
import okopiImg from '@/assets/image copy 17.png';
import anshumanImg from '@/assets/image copy 18.png';
import jitenderImg from '@/assets/image copy 19.png';
import shamalImg from '@/assets/image copy 21.png';
import veeramaniImg from '@/assets/image copy 22.png';
import navinImg from '@/assets/image copy 23.png';
import profAlexanderImg from '@/assets/image copy 24.png';
import profElNamakiImg from '@/assets/image copy 25.png';
import drShamilaImg from '@/assets/image copy 26.png';
import amberImg from '@/assets/image copy 27.png';
import awardWinnersImg from '@/assets/WhatsApp Image 2026-07-02 at 8.10.50 AM.jpeg';

// Dynamically load all images added today for the glimpses section
const glimpsesGlob = import.meta.glob('@/assets/WhatsApp Image 2026-06-29*.jpeg', { eager: true });
const glimpseImages = Object.values(glimpsesGlob).map((module: any) => module.default);

const videoGlimpseData = [
  { id: "112r47Q99Drjvg2VSSYgmGyE_22IqchyS818Cg2BaVBE", name: "Dr. Shamila Ahmed Hashi" },
  { id: "1YeJLgiP3kVk-bNxxpV3cd6IyPwjMIeeR2YE1SI_JotU", name: "Mr. Amber Rastogi" },
  { id: "1NhiFLgn1GlRZD8V4b2iqfcrjLQUTiqQaDbqNdniEYyw", name: "Mrugendra Madalagi" },
  { id: "1WklB3B6ap9Lf1NyCPD2MBL1varz5TDmVHY430P-GsXs", name: "Prof. Dr. M.S.S. EI Namaki" },
  { id: "1Z7V_PF_wFV0_VOvWC44CifcWWiImVwJq2vUMmngIF6M", name: "Navin Kumar Chhibber" },
  { id: "1tMLL9TRLl7FriKNcvUeHXNCYqG78-iJm44jG8igJj7E", name: "Pankaj Arora" },
  { id: "1HieP_LYJVBg0M-oSXcT5j9OLPg-xRSyF5dDqI24uAlE", name: "Shamal Chandrakant Bhole" },
  { id: "1lshh-tfhnwuj3dOIW4XOLEyPCYhb-IEB4itTt22Udvc", name: "Sri Harsha Anand Pushkala" },
  { id: "1KjO82XaLFsjS7XDi1N7uKTOdKOumcXrdTrSSz20va3o", name: "Trupti Raikar" },
  { id: "1KJNXW_TljNZFNBw3fK5UAeOVcIEU28InrnW1fu1DG6g", name: "Mani Tahriri" },
  { id: "188910FwNwDP5vzIm-19s1FFSW9WQpfjgqh9h3Gh5oAA", name: "Prof. Dr. Alexander Bull" },
  { id: "1G1pUfozEZWfPy8bKQEPLlvpAxXMOclDMRpIcWNwbFDg", name: "Fatimah Alneel" }
];

const expertsData = [
  {
    "name": "Andreza Malena Guedes da Costa Silva",
    "designation": "IPM / International Research Delegate / Data Science & Applied Research",
    "country": "Brazil"
  },
  {
    "name": "Fatimah Alneel",
    "designation": "The University of Arizona / Academic Delegate",
    "country": "United States"
  },
  {
    "name": "Samsar Naouel",
    "designation": "Faculty of Medicine, Oran / Medical Research & Healthcare Innovation",
    "country": "Algeria"
  },
  {
    "name": "PEYELINGA NDANGIATO JOMPLIN",
    "designation": "Privé",
    "country": "Algérie"
  },
  {
    "name": "Marghescu Cristina-Florentina",
    "designation": "University Politehnica of Bucharest (UPB) / Research Delegate / Engineering & Technical Research",
    "country": "Romania"
  },
  {
    "name": "DIAKITE SAMBA KANI",
    "designation": "Ministère de l'Environnement et du Développement Durable",
    "country": "Guinée"
  },
  {
    "name": "Pauline Efeti Luma",
    "designation": "Hasselt university",
    "country": "Belgium"
  },
  {
    "name": "Gail Narinesingh",
    "designation": "The University of the West Indies",
    "country": "Trinidad"
  },
  {
    "name": "Fatemeh Doostgharin",
    "designation": "Quranic reaserch",
    "country": "Iran"
  },
  {
    "name": "KHADRAN MOHAMMED A ALSAHAIMI",
    "designation": "Jamia Hamdard / Conference Delegate / Research Scholar in Applied Sciences",
    "country": "Saudi Arabia"
  },
  {
    "name": "James Abdul Malik",
    "designation": "Academy for Cultural Diplomacy / International Delegate / International Relations & Cultural Studies",
    "country": "Germany"
  },
  {
    "name": "TRAORE Parfait Doubassi",
    "designation": "Université Norbert Zongo, Laboratoire de Mathématiques Informatique et Applications",
    "country": "Burkina Faso"
  },
  {
    "name": "Halima ALMaktoumi",
    "designation": "Sohar University, Academic Research & Higher Education",
    "country": "Oman"
  }
];

const judgesData = [
  {
    name: "Taleb Hammad",
    organisation: "EyesNY",
    designation: "DBA / executive director",
    country: "USA",
    image: "/images/judges/taleb.png",
    bio: "Experienced executive director with a demonstrated history of working in database administration."
  },
  {
    name: "Tamar Makharoblidze",
    organisation: "School Of Arts and Sciences Ilai State University.",
    designation: "Professor",
    country: "Georgia",
    image: "/images/judges/tamar.png",
    bio: "Professor specializing in advanced academic research and higher education."
  },
  {
    name: "Trupti Raikar",
    designation: "SAP Technology Architect",
    country: "USA",
    image: truptiImg,
    bio: "SAP Technology Architect providing strategic guidance for technology initiatives."
  },
  {
    name: "Ezinne Esther Arisa",
    designation: "Candy Rainbow Creations",
    country: "South Africa",
    image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg",
    bio: "Creative leader and professional driving innovation in the South African region."
  },
  {
    name: "Dr. Saleem Abu Jaber",
    organisation: "Achva Academic College",
    designation: "Academic Advisor Head & Senior Lecturer",
    country: "Israel",
    image: drSaleemImg,
    bio: "Academic Advisor Head & Senior Lecturer focused on advancing academic methodologies."
  },
  {
    name: "Fatimah Alneel",
    organisation: "The University of Arizona",
    designation: "PhD Higher Education",
    country: "Saudi Arabia",
    image: fatimahImg,
    bio: "Higher Education professional committed to educational development."
  },
  {
    name: "Dr. Sushant Kumar Dubey",
    organisation: "Amity University, Patna",
    designation: "Assistant Professor",
    country: "India",
    image: sushantImg,
    bio: "Assistant Professor and researcher in modern technologies."
  },
  {
    name: "Okopi Fredrick",
    organisation: "Unique UJ SERVICE LIMITES",
    designation: "CEO",
    country: "Nigeria",
    image: okopiImg,
    bio: "CEO driving strategic business services in Nigeria."
  },
  {
    name: "Emerald Abena Amponsah Baffour",
    organisation: "G-Fash Networks",
    designation: "CEO",
    country: "Ghana",
    image: emeraldImg,
    bio: "CEO leading technological advancements and network solutions."
  },
  {
    name: "Shamal Chandrakant Bhole",
    designation: "Technical Leader, Crypto Risk & Compliance Infrastructure",
    country: "USA",
    image: shamalImg,
    bio: "Technical Leader specializing in Crypto Risk and Compliance Infrastructure."
  },
  {
    name: "Prof. Olukemi Ajibike Aluko",
    organisation: "Obafemi Awolowo University",
    designation: "Professor",
    country: "Nigeria",
    image: profOlukemiImg,
    bio: "Professor involved in extensive academic and international research."
  },
  {
    name: "Marghescu Cristina-Florentina",
    organisation: "University Politehnica of Bucharest (UPB)",
    designation: "PhD Researcher in Mathematics",
    country: "Romania",
    image: "/images/judges/cristina.jpeg",
    bio: "PhD Researcher in Mathematics."
  },
  {
    name: "Pankaj Arora",
    designation: "Healthcare Supply Chain Leader",
    country: "United States",
    image: pankajImg,
    bio: "Leader in Healthcare Supply Chain optimizations."
  },
  {
    name: "Mrugendra Madalagi",
    designation: "Technical Architect",
    country: "USA",
    image: mrugendraImg,
    bio: "Skilled Technical Architect in modern software design."
  },
  {
    name: "Satish Kabade",
    designation: "Product Technical Expert",
    country: "New York, USA",
    image: satishImg,
    bio: "Expert in technical product strategy and development."
  },
  {
    name: "Navin Kumar Chhibber",
    designation: "AI/ML, GenAI and Data Platforms Leader, Product Engineering and Digital Transformation Expert, USA",
    country: "USA",
    image: navinImg,
    bio: "AI/ML, GenAI and Data Platforms Leader, Product Engineering and Digital Transformation Expert."
  },
  {
    name: "Prof. Dr. Alexander Bull",
    organisation: "DGUV University of Applied Sciences",
    designation: "Professor",
    country: "Germany",
    image: profAlexanderImg,
    bio: "Professor at DGUV University of Applied Sciences."
  },
  {
    name: "Prof. Dr. M.S.S. EI Namaki",
    organisation: "Artificial Intelligence technologies (AIT) / Maastricht School of Management",
    designation: "Dean / Retired Dean",
    country: "Canada / Netherlands",
    image: profElNamakiImg,
    bio: "Retired Dean, Maastricht School of Management, Netherlands. Dean, Artificial Intelligence technologies (AIT), Canada."
  },
  {
    name: "Dr. Shamila Ahmed Hashi",
    organisation: "Al-Huda School",
    designation: "Computer & Network Security Fundamentals Instructor",
    country: "USA",
    image: drShamilaImg,
    bio: "Computer & Network Security Fundamentals Instructor at Al-Huda School, College Park, MD, USA."
  },
  {
    name: "Mr. Amber Rastogi",
    designation: "Distributed Systems & Cloud Computing",
    country: "USA",
    image: amberImg,
    bio: "Distributed Systems & Cloud Computing expert."
  }
];

const technicalJudgesData = [
  {
    name: "Nandan Sharma",
    designation: "Technology, Delivery & Innovation Leader",
    country: "United States",
    image: nandanImg,
    bio: "Leader driving innovation and successful technology delivery."
  },
  {
    name: "Hassan Mohammad Karimi",
    organisation: "Amirkabir University of Technology",
    designation: "Researcher",
    country: "Iran",
    image: hassanImg,
    bio: "Researcher specializing in technology and academic advancements."
  },
  {
    name: "Anshuman Khandelwal",
    designation: "Technical Review & Evaluation Judge",
    image: anshumanImg,
    bio: "Expert Technical Review & Evaluation Judge."
  },
  {
    name: "Jitender Yadav",
    designation: "Technical Review & Evaluation Judge",
    image: jitenderImg,
    bio: "Professional Technical Review & Evaluation Judge."
  },
  {
    name: "Veeramani Sampathkumar",
    designation: "Fintech Technology Leader",
    country: "USA",
    image: veeramaniImg,
    bio: "Fintech Technology Leader."
  }
];

const chiefTechDirectorData = [
  {
    name: "Mani Tahriri",
    organisation: "Mentor, Professor in Computer Engineering",
    designation: "Director of Technology & Chief Technology Presenter",
    country: "Spain",
    image: maniImg,
    bio: "Renowned mentor and Professor in Computer Engineering, leading technology strategies."
  }
];

const directorsData = [
  {
    name: "Dr. Zoha Rahman",
    organisation: "Centre for Big Data & Machine Learning",
    designation: "Board Member",
    country: "USA",
    image: zohaImg,
    bio: "Expert in Big Data and Machine Learning."
  },
  {
    name: "Dr. Joe Perez",
    organisation: "NC Department of Health & Human Services",
    designation: "Head of Data Strategy",
    country: "Raleigh, NC, USA",
    image: joeImg,
    bio: "Experienced data strategist and analytics leader."
  },
  {
    name: "Ezinne Esther Arisa",
    organisation: "Global Centre for Responsible Technology",
    designation: "Independent Director",
    country: "South Africa",
    image: ezinneImg,
    bio: "Advocate for responsible and ethical technology adoption."
  },
  {
    name: "Dr. Katarzyna Antosz",
    organisation: "European Academy of Engineering Sciences",
    designation: "Board Member & Research Strategist",
    country: "Poland",
    image: katarzynaImg,
    bio: "Research strategist driving engineering advancements."
  },
  {
    name: "Dr. Firas Zeidan",
    organisation: "Institute for Technology & Human Progress",
    designation: "Advisory Board Member",
    country: "Lebanon",
    image: firasImg,
    bio: "Advisor specializing in the intersection of technology and human progress."
  }
];

const hostsData = [
  {
    name: "Dr. Aida Mehrad",
    organisation: "C3S Business School",
    designation: "Chairperson & Chief Program Moderator",
    country: "Spain",
    image: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg"
  }
];

const Nexus2026 = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial Summit Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/85 bg-gradient-to-t from-slate-950 via-slate-950/70 flex items-center"></div>
        </div>

        <div className="container-custom relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary backdrop-blur-md mb-6">
              <Code className="w-4 h-4 mr-2" />
              Global Virtual Summit
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Nexus Industrial Summit <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">2026</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              Join the ultimate convergence of AI, Data Science, Cloud, Cybersecurity, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white font-medium">June 28, 2026 (Sunday) • EDT / UTC</span>
              </div>
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Video className="w-5 h-5 text-primary mr-3" />
                <span className="text-white font-medium">Virtual Event</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-background relative">
        <div className="container-custom space-y-24">

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-16">

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About the Summit</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-8 text-justify">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/80">
                    Nexus Industrial Summit 2026 is an international virtual summit that brings together researchers, industry professionals, technology leaders, entrepreneurs, educators, and students from around the world to discuss advancements in Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, Machine Learning, and Digital Transformation.
                  </p>
                  <p>
                    We are bringing together the brightest minds to focus on global collaboration, knowledge sharing, research dissemination, industry-academia partnerships, innovation and emerging technologies, and professional networking.
                  </p>
                </div>
              </motion.div>

              {/* About InnovoraMind Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">About InnovoraMind</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    InnovoraMind LLC, a leader in Enterprise IT Solutions, AI, and Digital Transformation, is proud to host the Nexus Industrial Summit. Drawing upon our extensive background in leveraging cutting-edge technologies for enterprise success, we aim to cultivate a community of innovators who can address the complex challenges of tomorrow's digital landscape.
                  </p>
                </div>
              </motion.div>

              {/* Objective Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Objective</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <ul className="text-muted-foreground text-lg leading-relaxed list-disc list-inside space-y-2">
                    <li>Promoting innovation and digital transformation</li>
                    <li>Encouraging interdisciplinary collaboration</li>
                    <li>Supporting research and industry engagement</li>
                    <li>Creating opportunities for international networking</li>
                    <li>Facilitating discussions on real-world technological challenges</li>
                  </ul>
                </div>
              </motion.div>

              {/* Agenda Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-accent rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Agenda</h2>
                </div>

                <div className="space-y-6 mt-8">
                  {[
                    { time: "09:00 AM EDT / 13:00 UTC", title: "Opening Ceremony & Welcome Address", desc: "Welcome address and summit inauguration." },
                    { time: "10:00 AM EDT / 14:00 UTC", title: "Global Keynote Session", desc: "Insights and visions from leading industry experts." },
                    { time: "12:00 PM EDT / 16:00 UTC", title: "Expert Panel Discussions", desc: "Interactive debates on emerging technologies." },
                    { time: "02:00 PM EDT / 18:00 UTC", title: "Research & Innovation Presentations", desc: "Showcasing groundbreaking research and innovation." },
                    { time: "04:00 PM EDT / 20:00 UTC", title: "Industry Case Studies & Technology Insights", desc: "Real-world applications and technological advancements." },
                    { time: "06:00 PM EDT / 22:00 UTC", title: "International Networking Session", desc: "Global connection and collaboration opportunities." },
                    { time: "08:00 PM EDT / 00:00 UTC", title: "Awards, Recognition & Closing Ceremony", desc: "Honoring achievements and concluding the event." },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center bg-card p-4 rounded-2xl border border-border/50 shadow-sm hover:border-accent/50 transition-colors">
                      <div className="bg-accent/10 text-accent font-bold px-4 py-2 rounded-xl sm:w-40 text-center mb-4 sm:mb-0 sm:mr-6">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Evaluation Criteria Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Recognition Criteria</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: Component, title: "Innovation & Originality", desc: "Originality of the idea and creative approach to solving industry problems." },
                    { icon: Target, title: "Research Contribution", desc: "Depth of research and potential to advance the field." },
                    { icon: Shield, title: "Industry Relevance", desc: "How well the solution addresses practical, real-world industry challenges." },
                    { icon: Crosshair, title: "Technology Impact", desc: "Potential for significant technological advancement and scalability." },
                    { icon: ClipboardList, title: "Presentation Excellence", desc: "Clarity, professionalism, and quality of the presentation." }
                  ].map((crit, idx) => (
                    <div key={idx} className="bg-background border border-border p-6 rounded-2xl">
                      <crit.icon className="w-8 h-8 text-emerald-500 mb-4" />
                      <h4 className="font-bold text-lg mb-2">{crit.title}</h4>
                      <p className="text-sm text-muted-foreground">{crit.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-card border border-border p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 text-foreground">Selection & Recognition Transparency</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Presentations and research will be reviewed by an international multidisciplinary panel of experts from academia and industry. Submissions are independently evaluated against predefined recognition criteria.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participants who meet the high standards of our recognition criteria will be eligible for various awards and certifications, reflecting their excellence in Knowledge Exchange, Innovation, Research and Industry Collaboration.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Sidebar Registration / Status */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border shadow-2xl sticky top-32"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">Status</h3>
                  <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                    Event Concluded
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  The Nexus Industrial Summit 2026 has successfully concluded. Thank you to all our speakers, participants, and partners for making it a massive success!
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="#glimpses"
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    View Event Highlights
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Event Date
                  </div>
                  <p className="text-xs text-muted-foreground">Held on June 28, 2026</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Board of Directors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Board of Directors</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {directorsData.map((director, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {director.image ? (
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{director.name}</h3>
                  {director.designation && (
                    <p className="text-sm font-medium text-blue-500 mb-1">{director.designation}</p>
                  )}
                  {director.organisation && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-grow">{director.organisation}</p>
                  )}
                  {director.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-blue-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {director.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Event Host Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Event Host</h2>
            </div>

            <div className="flex justify-center">
              {hostsData.map((host, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-teal-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full max-w-sm w-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {host.image ? (
                      <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{host.name}</h3>
                  {host.designation && (
                    <p className="text-sm font-medium text-teal-500 mb-1">{host.designation}</p>
                  )}
                  {host.organisation && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-grow">{host.organisation}</p>
                  )}
                  {host.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-teal-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {host.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Director of Technology & Chief Technology Presenter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Director of Technology & Chief Technology Presenter</h2>
            </div>

            <div className="flex justify-center">
              {chiefTechDirectorData.map((director, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-cyan-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full max-w-sm w-full">
                  <div className="w-32 h-32 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {director.image ? (
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover object-[center_20%]" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{director.name}</h3>
                  {director.designation && (
                    <p className="text-sm font-medium text-cyan-500 mb-1">{director.designation}</p>
                  )}
                  {director.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{director.organisation}</p>
                  )}
                  {director.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{director.bio}</p>
                  )}
                  {director.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-cyan-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {director.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Review & Evaluation Judges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Technical Review & Evaluation Judges</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalJudgesData.map((judge, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-amber-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full relative">
                  <div className="absolute top-4 right-4 bg-amber-500/10 text-amber-500 px-2 py-1 rounded text-xs font-bold border border-amber-500/20">
                    Judge
                  </div>
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm mt-2">
                    {judge.image ? (
                      <img src={judge.image} alt={judge.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{judge.name}</h3>
                  {judge.designation && (
                    <p className="text-sm font-medium text-amber-500 mb-1">{judge.designation}</p>
                  )}
                  {judge.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{judge.organisation}</p>
                  )}
                  {judge.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{judge.bio}</p>
                  )}
                  {judge.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-amber-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {judge.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Judges Section (Panel Speakers) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Panel Speakers</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {judgesData.map((judge, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-pink-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full relative">

                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm mt-2">
                    {judge.image ? (
                      <img src={judge.image} alt={judge.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{judge.name}</h3>
                  {judge.designation && (
                    <p className="text-sm font-medium text-pink-500 mb-1">{judge.designation}</p>
                  )}
                  {judge.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{judge.organisation}</p>
                  )}
                  {judge.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{judge.bio}</p>
                  )}
                  {judge.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-pink-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {judge.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>



          {/* Experts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Meet our distinguished experts</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {expertsData.map((expert, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-lg transition-all flex flex-col h-full">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{expert.name}</h3>
                  {expert.country !== "N/A" && (
                    <div className="flex items-center text-sm font-medium text-purple-500/80 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {expert.country}
                    </div>
                  )}
                  {expert.designation !== "N/A" && (
                    <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{expert.designation}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards and Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-yellow-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Awards and Recognition</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Global Innovation Excellence Award", desc: "Recognizes outstanding innovation and visionary solutions." },
                { title: "Industry Leadership Award", desc: "Honors excellence in demonstrating significant industry impact and leadership." },
                { title: "Research Impact Award", desc: "Awarded for exceptional contributions to research and technological advancement." },
                { title: "Emerging Professional Award", desc: "Celebrates promising talent and emerging leaders in the field." },
                { title: "Outstanding Presentation Award", desc: "Recognizes the most compelling, clear, and impactful presentation." }
              ].map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-muted border border-border/50 p-6 rounded-2xl hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-card border border-border p-6 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certifications & Digital Credentials</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Participants will receive:
                  </p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside mb-4 space-y-1">
                    <li>Certificate of Participation</li>
                    <li>Certificate of Presentation</li>
                    <li>Certificate of Excellence (Award Recipients)</li>
                    <li>Speaker Appreciation Certificate</li>
                    <li>Panel Recognition Certificate</li>
                  </ul>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">
                    All certificates include:
                  </p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Unique Certificate ID</li>
                    <li>QR Code Verification</li>
                    <li>Digital Authentication</li>
                    <li>Online Verification Portal</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border p-6 rounded-2xl flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Research Publication Showcase</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Selected top presentations may be featured in official summit proceedings or a showcase page to highlight your work to a global audience.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">International Participation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nexus Industrial Summit 2026 is an international professional and academic event that welcomes researchers, professionals, students, innovators, entrepreneurs, and technology leaders from across the globe. The summit promotes international collaboration, innovation, and knowledge exchange across emerging technology domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Event Glimpses / Highlights Section */}
          <motion.div
            id="glimpses"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-10 border-t border-border/50"
          >
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                <Video className="w-4 h-4 mr-2" />
                Event Highlights
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Glimpses of Nexus 2026</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Relive the incredible moments, insightful presentations, and expert discussions from our virtual summit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8">
              {glimpseImages.length > 0 ? (
                glimpseImages.map((imgSrc, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 8) * 0.1 }}
                    key={index}
                    className="group"
                  >
                    <div className="relative bg-card rounded-2xl border border-border/50 shadow-md hover:shadow-2xl hover:border-primary/50 hover:shadow-primary/10 overflow-hidden transition-all duration-500 hover:-translate-y-2">
                      {/* Browser Frame Header */}
                      <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        <div className="ml-3 text-[10px] text-muted-foreground font-mono bg-background/50 px-2 py-0.5 rounded border border-border/30 flex-grow text-center truncate opacity-70">
                          nexus-2026-img-{index + 1}
                        </div>
                      </div>
                      
                      {/* Image Container with CSS Scaling to hide taskbars */}
                      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                        <img 
                          src={imgSrc} 
                          alt={`Nexus 2026 Glimpse ${index + 1}`} 
                          className="w-full h-full object-cover object-top origin-top scale-[1.08] group-hover:scale-[1.12] transition-transform duration-700 ease-out"
                        />
                        {/* Subtle inner shadow for depth */}
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  Loading images or no images found for this date.
                </div>
              )}
            </div>
          </motion.div>

          {/* Video Glimpses / Highlights Section */}
          <motion.div
            id="video-glimpses"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                <Video className="w-4 h-4 mr-2" />
                Video Highlights
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Video Glimpses of Nexus 2026</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Watch some of the best moments and insightful talks from the virtual summit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
              {videoGlimpseData.map((video, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  key={index}
                  className="group"
                >
                  <div className="relative bg-card rounded-2xl border border-border/50 shadow-md hover:shadow-2xl hover:border-primary/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col">
                    {/* Browser Frame Header */}
                    <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <div className="ml-3 text-[10px] text-muted-foreground font-mono bg-background/50 px-2 py-0.5 rounded border border-border/30 flex-grow text-center truncate opacity-70">
                        nexus-2026-video-{index + 1}
                      </div>
                    </div>
                    
                    {/* Video Container */}
                    <div className="relative aspect-video bg-muted overflow-hidden w-full">
                      <iframe
                        src={`https://drive.google.com/file/d/${video.id}/preview`}
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen"
                        title={video.name}
                      ></iframe>
                    </div>

                    {/* Speaker Info */}
                    <div className="p-4 bg-card border-t border-border/50 mt-auto">
                      <h3 className="font-bold text-foreground text-center">{video.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Award Winners Section */}
          <motion.div
            id="award-winners"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                <Award className="w-4 h-4 mr-2" />
                Recognition & Excellence
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Nexus 2026 Award Winners</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Celebrating the outstanding achievements and contributions of our esteemed participants and visionaries.
              </p>
            </div>
            
            <div className="flex justify-center px-4 md:px-8 mb-16">
              <div className="relative max-w-6xl w-full flex justify-center items-center drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src={awardWinnersImg} 
                  alt="Nexus 2026 Award Winners" 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Nexus2026;
