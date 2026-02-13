import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';
import seal from '@/assets/seal.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-white/5">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="InnovoraMind Logo" className="w-12 h-12 rounded-full object-cover transition-transform group-hover:scale-110" />
              <span className="font-display font-bold text-2xl tracking-tight">
                InnovoraMind
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A premier New Mexico-based enterprise delivering world-class conferences, research innovations, and technology solutions across 10 major business domains.
            </p>
            {/* ISO Seal */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <img src={seal} alt="InnovoraMind LLC" className="w-14 h-14 object-contain" />
              <div className="text-[10px] text-slate-400 leading-tight">
                <p className="font-bold text-slate-200 mb-1">InnovoraMind LLC</p>
                <p>ISO 9001:2015 | ISO/IEC 27001:2022</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[{ label: 'Solutions', path: '/solutions' }, { label: 'Registrations', path: '/registrations' }, { label: 'Funding & Grants', path: '/funding-grants' }].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-secondary transition-all text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Resources</h4>
            <ul className="space-y-4">
              {[{ label: 'Tech Innovation', path: '/tech-innovation' }, { label: 'About Us', path: '/about' }, { label: 'Contact', path: '/contact' }].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-secondary transition-all text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  1209 Mountain Road Pl NE,<br />
                  Ste H, Albuquerque, NM 87110, USA
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <a href="mailto:Events@innovoramind.com" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                  Events@innovoramind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left leading-relaxed">
            © {currentYear} InnovoraMind LLC. All rights reserved. <br className="md:hidden" />
            A New Mexico Enterprise Division.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-slate-500 hover:text-secondary text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};