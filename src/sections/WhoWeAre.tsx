import { motion } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, slideFromLeftVariants, blurFocusVariants, defaultViewport, eagerViewport, fastStaggerContainerVariants } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';
import { ASSETS } from '../constants/assets';

interface WhoWeAreProps {
  id?: string;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ id = "who-we-are" }) => {
  return (
    <section id={id} className="relative py-24 bg-gray-900 text-white">
      {/* Executive luxury background */}
      <motion.div 
        className="absolute inset-0"
        initial="hidden"
        whileInView="visible"
        viewport={eagerViewport}
        variants={blurFocusVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <img 
          src={ASSETS.WHO_WE_ARE}
          alt="Executive office"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
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
            className="w-24 h-1 bg-primary mx-auto mb-8"
            variants={fadeInVariants}
          />
          <motion.p 
            className="font-sans text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            MatchedWell leads a targeted, collaborative process to cultivate your firm's winning formula—aligning culture with execution. Leadership stays focused while top talent operates at peak.
          </motion.p>
        </motion.div>
        
        {/* Circle with 4 Quadrants */}
        <motion.div 
          className="flex justify-center items-center my-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInVariants}
        >
          <div className="relative w-[600px] h-[600px]">
            {/* Main circle container */}
            <div className="absolute inset-0 rounded-full border-4 border-white/30 bg-white/5 backdrop-blur-sm">
              {/* Vertical divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2"></div>
              {/* Horizontal divider */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2"></div>
              
              {/* Top Left Quadrant */}
              <motion.div 
                className="absolute top-0 left-0 w-1/2 h-1/2 p-12 flex flex-col justify-center items-center text-center"
                variants={slideFromLeftVariants}
              >
                <h3 className="font-serif text-xl mb-2">Strategic Talent Selection</h3>
                <p className="font-sans text-sm text-gray-300">
                  Partner with leadership to identify high-impact employees based on role criticality, growth trajectory, and performance opportunity.
                </p>
              </motion.div>
              
              {/* Top Right Quadrant */}
              <motion.div 
                className="absolute top-0 right-0 w-1/2 h-1/2 p-12 flex flex-col justify-center items-center text-center"
                variants={slideFromLeftVariants}
              >
                <h3 className="font-serif text-xl mb-2">Individual Deep Dive</h3>
                <p className="font-sans text-sm text-gray-300">
                  Build rapport and uncover personal goals, leadership style, and development edges through tailored intake sessions.
                </p>
              </motion.div>
              
              {/* Bottom Left Quadrant */}
              <motion.div 
                className="absolute bottom-0 left-0 w-1/2 h-1/2 p-12 flex flex-col justify-center items-center text-center"
                variants={slideFromLeftVariants}
              >
                <h3 className="font-serif text-xl mb-2">Precision Matching</h3>
                <p className="font-sans text-sm text-gray-300">
                  Research, vet, and facilitate chemistry calls with 2-3 coaches aligned to strategic goals, personality, and culture fit.
                </p>
              </motion.div>
              
              {/* Bottom Right Quadrant */}
              <motion.div 
                className="absolute bottom-0 right-0 w-1/2 h-1/2 p-12 flex flex-col justify-center items-center text-center"
                variants={slideFromLeftVariants}
              >
                <h3 className="font-serif text-xl mb-2">Ongoing Accountability</h3>
                <p className="font-sans text-sm text-gray-300">
                  Monthly check-ins and quarterly reviews ensure alignment, track ROI, and optimize outcomes for sustained development.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fastStaggerContainerVariants}
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
              className="flex items-center"
              variants={fadeInVariants}
            >
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-sans text-lg">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;