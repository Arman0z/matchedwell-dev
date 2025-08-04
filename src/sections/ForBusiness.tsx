import { motion } from 'framer-motion';
import { fadeInVariants, slideFromLeftVariants, scaleFadeVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';

interface ForBusinessProps {
  id?: string;
}

const ForBusiness: React.FC<ForBusinessProps> = ({ id = "for-business" }) => {
  return (
    <section id={id} className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-8 lg:px-16">
        {/* Left side content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
            variants={staggerContainerVariants}
            className="max-w-2xl"
          >
            <motion.p 
              className="text-primary uppercase font-sans font-medium text-sm tracking-wider mb-6"
              variants={fadeInVariants}
            >
              FOR FORWARD-THINKING ORGANIZATIONS
            </motion.p>
            
            <motion.h2 
              className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              variants={fadeInVariants}
            >
              Transform Today's Contributors into Tomorrow's Leaders.
            </motion.h2>
            
            <motion.p 
              className="font-sans text-lg text-gray-600 mb-10"
              variants={fadeInVariants}
            >
              Build a leadership pipeline that scales with your ambitions. Our precision-matched coaches help your high-performers unlock their full potential while staying aligned with your culture and strategic goals.
            </motion.p>
            
            <div className="space-y-6 mb-10">
              <motion.div 
                className="flex items-start"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Strategic Talent Selection</h3>
                  <p className="font-sans text-gray-600">
                    We identify your highest-potential leaders and match them with coaches who understand your industry, culture, and objectives.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Individual Deep Dive</h3>
                  <p className="font-sans text-gray-600">
                    Each engagement begins with comprehensive assessments to understand strengths, gaps, and growth opportunities.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Measurable Impact</h3>
                  <p className="font-sans text-gray-600">
                    Track progress with our proprietary ROI framework that connects coaching outcomes to business results.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeInVariants}
            >
              <button className="group inline-flex items-center justify-center bg-primary text-white px-8 py-4 font-sans font-medium text-lg hover:bg-blue-700 transition-all duration-300">
                Get Your Custom Talent Proposal
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right side image with stats overlay */}
        <motion.div 
          className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={scaleFadeVariants}
        >
          <img 
            src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/forbusiness.png" 
            alt="Business professionals in meeting"
            className="w-full h-full object-cover"
          />
          
          {/* Stats overlay */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">87%</div>
                <div className="font-sans text-xs lg:text-sm text-gray-600">Performance Increase</div>
              </div>
              <div>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">94%</div>
                <div className="font-sans text-xs lg:text-sm text-gray-600">Retention Rate</div>
              </div>
              <div>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">7.2×</div>
                <div className="font-sans text-xs lg:text-sm text-gray-600">Revenue Growth</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForBusiness;