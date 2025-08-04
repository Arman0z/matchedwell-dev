import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ASSETS } from '../constants/assets';

interface ForCoachesProps {
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
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const ForCoaches = React.memo<ForCoachesProps>(({ id = "for-coaches" }) => {
  return (
    <section id={id} className="relative bg-gray-50 overflow-hidden py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-8 lg:px-16">
        {/* Left side image with overlay */}
        <motion.div 
          className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <img 
            src={ASSETS.FOR_COACHES} 
            alt="Professional Coach"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Overlay card */}
          <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-sm">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Join Our Elite Network</h3>
            <p className="font-sans text-gray-600">
              Work with Fortune 500 executives and high-growth leaders who are ready to invest in transformation.
            </p>
          </div>
          
        </motion.div>
        
        {/* Right side content */}
        <motion.div 
          className="flex-1 flex flex-col justify-center order-1 lg:order-2 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={simpleVariants}
        >
          <p className="text-primary uppercase font-sans font-medium text-sm tracking-wider mb-6">
            FOR ELITE COACHES
          </p>
          
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Engineer Perfect Matches.
          </h2>
          
          <p className="font-sans text-lg text-gray-600 mb-10">
            Focus on what you do best—transforming leaders. We handle everything else, from client acquisition to administrative support, so you can grow your practice stress-free.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Premium Client Pipeline</h3>
                <p className="font-sans text-gray-600">
                  Access pre-qualified executives from leading organizations who are committed to growth and have budgets to match.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Administrative Excellence</h3>
                <p className="font-sans text-gray-600">
                  We manage scheduling, contracts, payments, and progress tracking—you just show up and coach.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Continuous Support</h3>
                <p className="font-sans text-gray-600">
                  From onboarding to ongoing development, our team ensures every engagement runs smoothly.
                </p>
              </div>
            </div>
          </div>
          
          <Button>
            Apply to Our Network
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

ForCoaches.displayName = 'ForCoaches';

export default ForCoaches;