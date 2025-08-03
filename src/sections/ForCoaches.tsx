import { motion } from 'framer-motion';
import { fadeInVariants, slideFromLeftVariants, scaleFadeVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';

interface ForCoachesProps {
  id?: string;
}

const ForCoaches: React.FC<ForCoachesProps> = ({ id = "for-coaches" }) => {
  return (
    <section id={id} className="relative py-20 px-6 lg:px-8 bg-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionTag label="For Coaches" className="text-gray-700" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={eagerViewport}
          >
            <motion.h2 
              className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={fadeInVariants}
            >
              Grow Your Practice Stress-Free
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-primary mb-8"
              variants={fadeInVariants}
            />
            <motion.p 
              className="font-sans text-xl text-gray-600 mb-8"
              variants={fadeInVariants}
            >
              Focus on what you do best—transforming leaders. We handle client acquisition, administrative support, and ensure perfect-fit matches for sustainable engagements.
            </motion.p>
            
            <motion.div 
              className="space-y-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainerVariants}
            >
              <motion.div 
                className="flex items-start gap-4"
                variants={slideFromLeftVariants}
              >
                <div className="w-12 h-12 bg-gradient-elegant text-white rounded-full flex items-center justify-center font-serif font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Qualified Clients</h4>
                  <p className="font-sans text-gray-600">Pre-vetted executives from Fortune 500 companies ready to invest in their development with budgets to match.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4"
                variants={slideFromLeftVariants}
              >
                <div className="w-12 h-12 bg-gradient-elegant text-white rounded-full flex items-center justify-center font-serif font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Predictable Income</h4>
                  <p className="font-sans text-gray-600">Consistent flow of matched clients means stable revenue and the freedom to focus on coaching excellence.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4"
                variants={slideFromLeftVariants}
              >
                <div className="w-12 h-12 bg-gradient-elegant text-white rounded-full flex items-center justify-center font-serif font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Full Support</h4>
                  <p className="font-sans text-gray-600">We manage scheduling, contracts, payments, and progress tracking—you just show up and coach.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className="group inline-flex items-center justify-center bg-gradient-elegant text-white px-8 py-4 rounded-full font-sans font-medium text-lg hover:shadow-elegant-hover transform hover:-translate-y-1 transition-all duration-300"
              variants={fadeInVariants}
            >
              Apply to Our Network
              <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="relative max-w-md mx-auto lg:ml-auto lg:mr-0"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={scaleFadeVariants}
          >
            <img 
              src="/assets/solo_sky_shot.jpg" 
              alt="Professional Coach"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <motion.div 
              className="absolute -bottom-6 left-6 right-6 bg-white p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-serif text-xl font-bold text-deep-teal">$150K</div>
                  <div className="font-sans text-xs text-gray-600">Avg Annual</div>
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-deep-teal">20hrs</div>
                  <div className="font-sans text-xs text-gray-600">Per Week</div>
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-deep-teal">100%</div>
                  <div className="font-sans text-xs text-gray-600">Remote</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForCoaches;