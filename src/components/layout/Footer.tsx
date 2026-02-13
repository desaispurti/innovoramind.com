import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import seal from '@/assets/seal.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="InnovoraMind Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-display font-bold text-xl">
                InnovoraMind
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A premier New Mexico-based enterprise delivering world-class conferences, research innovations, and technology solutions across 10 major business domains.
            </p>
            {/* Company Seal */}
            <div className="flex items-center gap-3 pt-2">
              <img src={seal} alt="InnovoraMind LLC - New Mexico LLC Formation, ISO 9001:2015 | ISO/IEC 27001:2022" className="w-20 h-20 object-contain rounded-lg bg-white/10 p-1" />
              <div className="text-xs text-primary-foreground/60 leading-relaxed">
                <p className="font-semibold text-primary-foreground/80">InnovoraMind LLC</p>
                <p>ISO 9001:2015 | ISO/IEC 27001:2022</p>
                <p>1209 Mountain Road Pl NE, Ste H</p>
                <p>Albuquerque, NM 87110, USA</p>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Solutions', 'Registrations', 'Funding & Grants'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Tech Innovation', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  1209 Mountain Road Pl NE, Ste H<br />
                  Albuquerque, NM 87110, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:Events@innovoramind.com" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Events@innovoramind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} InnovoraMind. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};