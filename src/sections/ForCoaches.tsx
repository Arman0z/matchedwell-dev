import { motion } from 'framer-motion';
import { fadeInVariants, slideFromLeftVariants, scaleFadeVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';

interface ForCoachesProps {
  id?: string;
}

const ForCoaches: React.FC<ForCoachesProps> = ({ id = "for-coaches" }) => {
  return (
    <section id={id} className="relative bg-gray-50 overflow-hidden py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-8 lg:px-16">
        {/* Left side image with overlay */}
        <motion.div 
          className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={scaleFadeVariants}
        >
          <img 
            src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/forcoaches.png" 
            alt="Professional Coach"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay card */}
          <motion.div 
            className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Join Our Elite Network</h3>
            <p className="font-sans text-gray-600">
              Work with Fortune 500 executives and high-growth leaders who are ready to invest in transformation.
            </p>
          </motion.div>
          
          {/* Stats at bottom */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">$500+</div>
                <div className="font-sans text-xs lg:text-sm text-gray-600">Per Hour</div>
              </div>
              <div>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">95%</div>
                <div className="font-sans text-xs lg:text-sm text-gray-600">Match Success</div>
              </div>
              <div>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-1">4.9/5</div>
                <div className="font-sans text-xs lg:text-sm text-gray-600">Coach Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side content */}
        <div className="flex-1 flex flex-col justify-center order-1 lg:order-2">
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
              FOR ELITE COACHES
            </motion.p>
            
            <motion.h2 
              className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              variants={fadeInVariants}
            >
              We Engineer Perfect Matches.
            </motion.h2>
            
            <motion.p 
              className="font-sans text-lg text-gray-600 mb-10"
              variants={fadeInVariants}
            >
              Focus on what you do best—transforming leaders. We handle everything else, from client acquisition to administrative support, so you can grow your practice stress-free.
            </motion.p>
            
            <div className="space-y-6 mb-10">
              <motion.div 
                className="flex items-start"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Premium Client Pipeline</h3>
                  <p className="font-sans text-gray-600">
                    Access pre-qualified executives from leading organizations who are committed to growth and have budgets to match.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Administrative Excellence</h3>
                  <p className="font-sans text-gray-600">
                    We manage scheduling, contracts, payments, and progress tracking—you just show up and coach.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-1 h-16 bg-primary mr-6"></div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2">Continuous Support</h3>
                  <p className="font-sans text-gray-600">
                    From onboarding to ongoing development, our team ensures every engagement runs smoothly.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeInVariants}
            >
              <button className="group inline-flex items-center justify-center bg-primary text-white px-8 py-4 font-sans font-medium text-lg hover:bg-blue-700 transition-all duration-300">
                Apply to Our Network
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForCoaches;