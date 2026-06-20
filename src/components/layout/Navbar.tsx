import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/content';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Top info bar — hidden on mobile */}
      <div className="bg-[#0A3D62] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 lg:gap-6">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-[#F39C12] transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-[#F39C12] transition-colors">
              <Mail size={14} />
              <span className="hidden lg:inline">{companyInfo.email}</span>
            </a>
          </div>
          <div className="text-gray-300 text-xs hidden md:block truncate ml-4">
            {companyInfo.workingHours}
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Logo variant="dark" to="/" size="md" />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm xl:text-base transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#0A3D62]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button to="/quote" variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 -mr-2 text-gray-700 hover:text-[#0A3D62] transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#F39C12] bg-[#F39C12]/10'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button to="/quote" variant="primary" size="md" className="w-full">
                    Get a Quote
                  </Button>
                </div>
                <div className="pt-4 space-y-3 text-sm text-gray-600 border-t">
                  <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-[#0A3D62] transition-colors">
                    <Phone size={16} className="text-[#F39C12]" />
                    <span>{companyInfo.phone}</span>
                  </a>
                  <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-[#0A3D62] transition-colors">
                    <Mail size={16} className="text-[#F39C12]" />
                    <span>{companyInfo.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
