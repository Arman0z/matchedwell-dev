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
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
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
            FOR FORWARD-THINKING ORGANIZATIONS
          </p>
          
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Today's Contributors into Tomorrow's Leaders.
          </h2>
          
          <p className="font-sans text-lg text-gray-600 mb-10">
            Build a leadership pipeline that scales with your ambitions. Our precision-matched coaches help your high-performers unlock their full potential while staying aligned with your culture and strategic goals.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Strategic Talent Selection</h3>
                <p className="font-sans text-gray-600">
                  We identify your highest-potential leaders and match them with coaches who understand your industry, culture, and objectives.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Individual Deep Dive</h3>
                <p className="font-sans text-gray-600">
                  Each engagement begins with comprehensive assessments to understand strengths, gaps, and growth opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Measurable Impact</h3>
                <p className="font-sans text-gray-600">
                  Track progress with our proprietary ROI framework that connects coaching outcomes to business results.
                </p>
              </div>
            </div>
          </div>
          
          <Button>
            Get Your Custom Talent Proposal
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
          <img 
            src={ASSETS.FOR_BUSINESS} 
            alt="Business professionals in meeting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
        </motion.div>
      </div>
    </section>
  );
});

ForBusiness.displayName = 'ForBusiness';

export default ForBusiness;