import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { companyInfo, socialLinks, navLinks, services } from '../../data/content';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-[#1A252F] text-white">
      {/* CTA Band */}
      <div className="bg-[#0A3D62] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Ready to Build Your Dream Project?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Contact us today for a free consultation and quote.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-[#0A3D62] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                <Phone size={18} />
                Call Now
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#F39C12] text-white font-semibold rounded-lg hover:bg-[#E67E22] transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 sm:mb-6">
              <Logo variant="light" to="/" size="md" />
            </div>
            <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Building Rwanda's future with excellence and innovation. Professional engineering and construction services since 2010.
            </p>
            <div className="flex gap-3">
              {[
                { href: socialLinks.facebook, Icon: Facebook },
                { href: socialLinks.twitter, Icon: Twitter },
                { href: socialLinks.linkedin, Icon: Linkedin },
                { href: socialLinks.instagram, Icon: Instagram },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#F39C12] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#F39C12] transition-colors text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-[#F39C12] transition-colors text-sm sm:text-base">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-gray-400 hover:text-[#F39C12] transition-colors text-sm sm:text-base">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-0.5 text-[#F39C12]" size={18} />
                <span className="text-gray-400 text-sm sm:text-base">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#F39C12] flex-shrink-0" size={18} />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-[#F39C12] transition-colors text-sm sm:text-base">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#F39C12] flex-shrink-0" size={18} />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-[#F39C12] transition-colors text-sm sm:text-base break-all">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-gray-800 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-400">{companyInfo.workingHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-[#F39C12] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#F39C12] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
