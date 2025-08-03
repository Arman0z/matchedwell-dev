import { motion } from 'framer-motion';
import { fadeInVariants, slideFromLeftVariants, scaleFadeVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';

interface ForBusinessProps {
  id?: string;
}

const ForBusiness: React.FC<ForBusinessProps> = ({ id = "for-business" }) => {
  return (
    <section id={id} className="relative py-20 px-6 lg:px-8 bg-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={eagerViewport}
          variants={staggerContainerVariants}
        >
          <SectionTag label="For Business" className="text-gray-700" />
          <motion.h2 
            className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInVariants}
          >
            Fuel Performance. Retain Talent. Drive Revenue.
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-8"
            variants={fadeInVariants}
          />
          <motion.p 
            className="font-sans text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            Transform your high-potential leaders into revenue-driving executives with our precision-matched coaching programs.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainerVariants}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-elegant rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">ROI You Can Count, Culture You Can Feel.</h3>
                  <p className="font-sans text-gray-600">
                    Our matched coaches deliver measurable business impact while strengthening your unique culture. Average 7× ROI with improved leadership effectiveness and team performance.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-elegant rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Individualized, Not Pre-Packaged.</h3>
                  <p className="font-sans text-gray-600">
                    Every engagement is custom-designed based on comprehensive assessments, your strategic objectives, and the individual's unique development needs.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                variants={slideFromLeftVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-elegant rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">High-Touch, Executive-Ready Support.</h3>
                  <p className="font-sans text-gray-600">
                    From C-suite to emerging leaders, our coaches understand the unique pressures of executive roles and provide confidential, strategic guidance.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              variants={fadeInVariants}
            >
              <button className="group inline-flex items-center justify-center bg-gradient-elegant text-white px-8 py-4 rounded-full font-sans font-medium text-lg hover:shadow-elegant-hover transform hover:-translate-y-1 transition-all duration-300">
                Drive Measurable ROI
                <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={scaleFadeVariants}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-deep-teal/20 to-light-teal/20 rounded-3xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Business professionals in meeting"
              className="relative rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;