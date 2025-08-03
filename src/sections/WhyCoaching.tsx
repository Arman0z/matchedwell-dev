import { motion } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, scaleFadeVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';

interface WhyCoachingProps {
  id?: string;
}

const WhyCoaching: React.FC<WhyCoachingProps> = ({ id = "why-coaching" }) => {
  return (
    <section id={id} className="relative py-20 px-6 lg:px-8 bg-gradient-subtle">
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
          <motion.h2 
            className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInVariants}
          >
            The Secret Weapon of High-Performance Organizations.
          </motion.h2>
          <motion.p 
            className="font-sans text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            Transform your leadership capacity and unlock exponential growth with precision-matched executive coaching.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
        >
          {/* Card 1 - Limited Bandwidth */}
          <motion.div 
            className="relative h-[32rem] group preserve-3d transition-transform duration-700 hover:rotate-y-180"
            variants={scaleFadeVariants}
          >
            {/* Front Side */}
            <div className="relative h-full">
              {/* Main image box */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-stone-200 shadow-lg backface-hidden overflow-hidden">
                <img src="/assets/15.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              {/* Overlapping text box */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-2xl border border-stone-200 shadow-lg p-8 backface-hidden">
                <h3 className="font-serif text-xl font-bold text-gray-900 text-center">Limited Bandwidth</h3>
              </div>
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-gradient-elegant p-12 rounded-2xl shadow-elegant backface-hidden rotate-y-180">
              <div className="h-full flex flex-col justify-center text-white">
                <p className="text-white/90 text-lg leading-relaxed">
                  Your leaders are drowning in day-to-day operations, leaving no time for strategic growth and team development.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2 - Talent Retention */}
          <motion.div 
            className="relative h-[32rem] group preserve-3d transition-transform duration-700 hover:rotate-y-180"
            variants={scaleFadeVariants}
          >
            {/* Front Side */}
            <div className="relative h-full">
              {/* Main image box */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-stone-200 shadow-lg backface-hidden overflow-hidden">
                <img src="/assets/13.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              {/* Overlapping text box */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-2xl border border-stone-200 shadow-lg p-8 backface-hidden">
                <h3 className="font-serif text-xl font-bold text-gray-900 text-center">Talent Retention</h3>
              </div>
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-gradient-elegant p-12 rounded-2xl shadow-elegant backface-hidden rotate-y-180">
              <div className="h-full flex flex-col justify-center text-white">
                <p className="text-white/90 text-lg leading-relaxed">
                  High performers are leaving for companies that invest in their growth and provide clear career development paths.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 3 - Revenue Targets */}
          <motion.div 
            className="relative h-[32rem] group preserve-3d transition-transform duration-700 hover:rotate-y-180"
            variants={scaleFadeVariants}
          >
            {/* Front Side */}
            <div className="relative h-full">
              {/* Main image box */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-stone-200 shadow-lg backface-hidden overflow-hidden">
                <img src="/assets/12.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              {/* Overlapping text box */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-2xl border border-stone-200 shadow-lg p-8 backface-hidden">
                <h3 className="font-serif text-xl font-bold text-gray-900 text-center">Revenue Targets</h3>
              </div>
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-gradient-elegant p-12 rounded-2xl shadow-elegant backface-hidden rotate-y-180">
              <div className="h-full flex flex-col justify-center text-white">
                <p className="text-white/90 text-lg leading-relaxed">
                  Missed opportunities and poor execution are preventing your organization from hitting ambitious growth goals.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCoaching;