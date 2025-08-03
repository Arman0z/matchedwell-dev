import { motion } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, slideFromLeftVariants, blurFocusVariants, defaultViewport, eagerViewport, fastStaggerContainerVariants } from '../hooks/useScrollAnimation';

interface OurSolutionProps {
  id?: string;
}

const OurSolution: React.FC<OurSolutionProps> = ({ id = "our-solution" }) => {
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
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
          <motion.h2 
            className="font-serif text-5xl md:text-6xl mb-6"
            variants={fadeInVariants}
          >
            Precision Matching, Built for Impact.
          </motion.h2>
          <motion.p 
            className="font-sans text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            We handle the entire coaching ecosystem end-to-end, from strategic matching to ROI optimization.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
        >
          {[
            {
              step: 1,
              title: "Strategic Assessment",
              description: "Deep dive into your organization's culture, goals, and unique challenges to understand exactly what success looks like."
            },
            {
              step: 2,
              title: "Precision Matching",
              description: "Leverage our proprietary algorithm and human expertise to find coaches who align with your specific needs."
            },
            {
              step: 3,
              title: "Seamless Onboarding",
              description: "Structured kickoff process ensures immediate alignment between coaches, leaders, and organizational objectives."
            },
            {
              step: 4,
              title: "Continuous Optimization",
              description: "Regular progress tracking and adjustments to maximize ROI and ensure lasting transformation."
            }
          ].map((item) => (
            <motion.div 
              key={item.step} 
              className="relative group"
              variants={slideFromLeftVariants}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 h-full hover:bg-white/20 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white flex items-center justify-center font-serif text-2xl">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl mb-4 mt-4">{item.title}</h3>
                <p className="font-sans text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
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
            'Executive Leadership Development',
            'High-Potential Talent Acceleration',
            'Team Performance Optimization',
            'Culture Transformation',
            'Succession Planning',
            'M&A Integration Support'
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

export default OurSolution;