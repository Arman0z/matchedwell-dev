import React from 'react';
import { ASSETS } from '../constants/assets';

interface NavigationProps {
  companyName?: string;
  ctaText?: string;
  ctaHref?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  companyName = "MatchedWell",
  ctaText = "Book a Consultation",
  ctaHref = "#contact"
}) => {
  // Navigation items configuration
  const navItems = [
    { label: 'Why Coaching', href: '#why-coaching' },
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'For Business', href: '#business' },
    { label: 'For Coaches', href: '#coaches' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-white shadow-lg py-4"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Company Logo - Clickable with hover effect */}
          <button 
            onClick={scrollToTop}
            className="transition-opacity cursor-pointer focus:outline-none hover:opacity-80"
            aria-label="Scroll to top"
          >
            <img 
              src={ASSETS.LOGO}
              alt={companyName}
              className="h-48 w-auto -my-20"
            />
          </button>
          
          {/* Center Navigation Links */}
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="relative transition-all group py-1 text-gray-800 hover:text-primary font-semibold text-base tracking-wide"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline on hover */}
                <span 
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left"
                  aria-hidden="true"
                ></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <a 
            href={ctaHref}
            className="bg-primary hover:bg-primary-dark text-white font-semibold text-base tracking-wide px-6 py-2.5 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;