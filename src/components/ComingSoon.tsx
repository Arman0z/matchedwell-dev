import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="text-center max-w-xl mx-auto animate-fade-in">
        {/* Coming Soon Tag */}
        <div className="inline-block px-5 py-1.5 mb-6 bg-gray-100 text-gray-600 text-sm font-sans rounded-full">
          Coming Soon
        </div>

        {/* Logo Text */}
        <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8 tracking-wide">
          MatchedWell
        </h1>

        {/* Quote */}
        <div className="mb-12">
          <p className="text-base md:text-lg text-gray-600 mb-3 font-sans font-light leading-relaxed italic whitespace-nowrap">
            "Greatness isn't for the chosen few. Greatness is for the few who choose."
          </p>
          <p className="text-sm md:text-base text-gray-500 font-sans font-light">
            - Joshua Medcalf
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gray-300 mx-auto mb-12"></div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 font-light">
            For inquiries:
          </p>
          <a
            href="mailto:info@getmatchedwell.com"
            className="inline-block text-primary hover:text-primary/80 transition-colors duration-200 font-sans"
          >
            info@getmatchedwell.com
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-16 font-light">
          © 2025 MatchedWell. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;