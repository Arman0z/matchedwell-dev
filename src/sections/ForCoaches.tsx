import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ASSETS } from '../constants/assets';
import { fadeInVariants, defaultViewport } from '../hooks/useScrollAnimation';

interface ForCoachesProps {
  id?: string;
}

// Optimized image variants for smooth loading
const imageContainerVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const,
      delay: 0.2
    }
  }
};

const ForCoaches = React.memo<ForCoachesProps>(({ id = "for-coaches" }) => {
  return (
    <section id={id} className="relative bg-gray-50 overflow-hidden py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-8 lg:px-16">
        {/* Left side image with overlay */}
        <motion.div 
          className="relative w-full lg:w-[45%] h-[580px] lg:h-[720px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          variants={imageContainerVariants}
        >
          <img 
            src={ASSETS.FOR_COACHES} 
            alt="Professional Coach"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 will-change-transform"
            loading="lazy"
            decoding="async"
            style={{ contentVisibility: 'auto' }}
          />
          
          {/* Overlay card */}
          <motion.div 
            className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 max-w-xs"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-1.5">Join Our Elite Network</h3>
            <p className="font-sans text-sm text-gray-600">
              Work with Fortune 500 executives and high-growth leaders who are ready to invest in transformation
            </p>
          </motion.div>
          
        </motion.div>
        
        {/* Right side content */}
        <motion.div 
          className="flex-1 flex flex-col justify-center order-1 lg:order-2 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInVariants}
        >
          <p className="text-primary uppercase font-sans font-medium text-base tracking-wider mb-6">
            For Coaches
          </p>
          
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Coaches, Grow Your Practice <span className="text-primary">Stress-Free</span>
          </h2>
          
          <p className="font-sans text-lg text-gray-600 mb-10">
            Join an elite network where Fortune 500 executives and high-growth leaders come to you. We handle the matchmaking, contracts, and logistics—you focus on delivering transformation.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Pre-Vetted Executive Clients Only</h3>
                <p className="font-sans text-gray-600">
                  Work exclusively with high-performers who are invested, engaged, and ready for change. Every client is committed to growth and values the transformative power of coaching.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">We Handle 100% of the Business Side</h3>
                <p className="font-sans text-gray-600">
                  Contracts, invoicing, scheduling, progress reports—all managed for you. Spend your time coaching, not chasing payments or managing logistics.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Long-Term Engagements, Premium Rates</h3>
                <p className="font-sans text-gray-600">
                  Our clients commit to 6-12 month engagements minimum. Build deep relationships, see real transformation, and earn what you're worth.
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