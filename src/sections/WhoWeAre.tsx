import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';
import { ASSETS } from '../constants/assets';

interface WhoWeAreProps {
  id?: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Strategic Talent Selection',
    description: 'Partner with leadership to identify high-impact employees based on role criticality, growth trajectory, and performance opportunity.',
    position: 'top-left'
  },
  {
    id: 2,
    title: 'Individual Deep Dive',
    description: 'Build rapport and uncover personal goals, leadership style, and development edges through tailored intake sessions.',
    position: 'top-right'
  },
  {
    id: 3,
    title: 'Precision Matching',
    description: 'Research, vet, and facilitate chemistry calls with 2-3 coaches aligned to strategic goals, personality, and culture fit.',
    position: 'bottom-left'
  },
  {
    id: 4,
    title: 'Ongoing Accountability',
    description: 'Monthly check-ins and quarterly reviews ensure alignment, track ROI, and optimize outcomes for sustained development.',
    position: 'bottom-right'
  }
];

const WhoWeAre: React.FC<WhoWeAreProps> = ({ id = "who-we-are" }) => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<number | null>(null);

  const getQuadrantStyles = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 rounded-tl-full';
      case 'top-right':
        return 'top-0 right-0 rounded-tr-full';
      case 'bottom-left':
        return 'bottom-0 left-0 rounded-bl-full';
      case 'bottom-right':
        return 'bottom-0 right-0 rounded-br-full';
      default:
        return '';
    }
  };

  const getDescriptionPosition = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 items-start justify-start text-left';
      case 'top-right':
        return 'top-0 right-0 items-start justify-end text-right';
      case 'bottom-left':
        return 'bottom-0 left-0 items-end justify-start text-left';
      case 'bottom-right':
        return 'bottom-0 right-0 items-end justify-end text-right';
      default:
        return '';
    }
  };

  return (
    <section id={id} className="relative py-24 bg-gray-900 text-white overflow-hidden">
      {/* Animated background with subtle parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <img 
          src={ASSETS.WHO_WE_ARE}
          alt="Executive office"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
          animate={{
            opacity: [0.2, 0.3, 0.2],
            x: [-100, 100, -100],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={eagerViewport}
          variants={staggerContainerVariants}
        >
          <SectionTag label="Who We Are" className="text-white" />
          <motion.h2 
            className="font-serif text-5xl lg:text-6xl mb-4"
            variants={fadeInVariants}
          >
            Start Building Your <span className="text-primary">Winning Formula</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
            variants={fadeInVariants}
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.p 
            className="font-sans text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            MatchedWell leads a targeted, collaborative process to cultivate your firm's winning formula—aligning culture with execution. Leadership stays focused while top talent operates at peak.
          </motion.p>
        </motion.div>
        
        {/* Premium Interactive Circle with Background Text */}
        <motion.div 
          className="relative mx-auto my-20 max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInVariants}
        >
          {/* Background description areas */}
          <div className="absolute inset-0 w-full h-full">
            {processSteps.map((step) => (
              <AnimatePresence key={`bg-${step.id}`}>
                {hoveredQuadrant === step.id && (
                  <motion.div
                    className={`absolute w-1/2 h-1/2 flex p-8 ${getDescriptionPosition(step.position)}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="max-w-xs">
                      {step.position.includes('right') ? (
                        <>
                          <motion.p 
                            className="font-sans text-gray-400 leading-relaxed mb-4"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {step.description}
                          </motion.p>
                          <motion.div 
                            className="w-16 h-1 bg-primary/60 ml-auto"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            style={{ transformOrigin: 'right' }}
                          />
                        </>
                      ) : (
                        <>
                          <motion.div 
                            className="w-16 h-1 bg-primary/60 mb-4"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          />
                          <motion.p 
                            className="font-sans text-gray-400 leading-relaxed"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {step.description}
                          </motion.p>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Circle container */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Animated rotating border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #0080FF, #71C9CD, #0080FF)',
                  padding: '2px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gray-900" />
              </motion.div>

              {/* Main circle container with glassmorphism */}
              <div className="absolute inset-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden">
                {/* Animated dividers */}
                <motion.div 
                  className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent -translate-x-1/2"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                
                {/* Quadrants */}
                {processSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    className={`absolute w-1/2 h-1/2 ${getQuadrantStyles(step.position)} cursor-pointer group`}
                    onHoverStart={() => setHoveredQuadrant(step.id)}
                    onHoverEnd={() => setHoveredQuadrant(null)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        borderRadius: step.position.includes('top-left') ? '100% 0 0 0' :
                                     step.position.includes('top-right') ? '0 100% 0 0' :
                                     step.position.includes('bottom-left') ? '0 0 0 100%' :
                                     '0 0 100% 0'
                      }}
                    />
                    
                    {/* Title only */}
                    <div className="relative h-full flex items-center justify-center p-6">
                      <h3 className="font-serif text-lg lg:text-xl text-center leading-tight group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium Features Grid */}
        <motion.div 
          className="mt-32 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
        >
          {[
            'Sharper Judgment Under Pressure',
            'Emotional Control in High-Stress Situations',
            'Clear, Concise Executive Communication',
            'Consistent High-Standard Execution',
            'Leadership Readiness & Delegation',
            'Self-Awareness & Continuous Growth'
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              className="group flex items-center"
              variants={fadeInVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <span className="font-sans text-lg group-hover:text-primary transition-colors">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;