import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ASSETS } from '../constants/assets';

interface ForBusinessProps {
  id?: string;
}

const simpleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0],
      opacity: { duration: 0.6 },
      scale: { duration: 0.8 }
    }
  }
};

const ForBusiness = React.memo<ForBusinessProps>(({ id = "for-business" }) => {
  return (
    <section id={id} className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-8 lg:px-16">
        {/* Left side content */}
        <motion.div 
          className="flex-1 flex flex-col justify-center max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={simpleVariants}
        >
          <p className="text-primary uppercase font-sans font-medium text-sm tracking-wider mb-6">
            FUEL PERFORMANCE. DRIVE SUCCESS.
          </p>
          
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Today's Contributors into Tomorrow's Leaders.
          </h2>
          
          <p className="font-sans text-lg text-gray-600 mb-10">
            Companies see an average 7x ROI on coaching investment. We handle the entire process—from matching to measurement—so you stay focused on running the business while your talent operates at peak.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">7x Average ROI on Your Investment</h3>
                <p className="font-sans text-gray-600">
                  Boost revenue through enhanced performance, improved client relationships, and stronger decision-making. Every dollar invested in coaching returns measurable business impact.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Reduce Turnover by 40%</h3>
                <p className="font-sans text-gray-600">
                  Create a culture where top talent thrives. Individual coaching shows your people they're valued, dramatically improving retention and saving recruitment costs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Zero Time Investment Required</h3>
                <p className="font-sans text-gray-600">
                  We handle everything—matching, onboarding, progress tracking. You focus on strategy while we develop your team. White-glove service for executive teams.
                </p>
              </div>
            </div>
          </div>
          
          <Button>
            Book a Consultation Today
          </Button>
        </motion.div>
        
        {/* Right side image with stats overlay */}
        <motion.div 
          className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <motion.img 
            src={ASSETS.FOR_BUSINESS} 
            alt="Business professionals in meeting"
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          />
          
        </motion.div>
      </div>
    </section>
  );
});

ForBusiness.displayName = 'ForBusiness';

export default ForBusiness;