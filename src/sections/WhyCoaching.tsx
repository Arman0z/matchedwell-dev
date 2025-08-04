import { motion } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, scaleFadeVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';

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
          <SectionTag label="Why Coaching" className="text-gray-700" />
          <motion.h2 
            className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            variants={fadeInVariants}
          >
            The <span className="text-primary">Secret Advantage</span> of<br />
            High-Performance Organizations
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-8"
            variants={fadeInVariants}
          />
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
          {/* Box 1 - Limited Bandwidth */}
          <motion.div 
            className="h-[32rem] overflow-hidden rounded-2xl border border-stone-200 shadow-lg bg-white relative group"
            variants={scaleFadeVariants}
          >
            {/* Default state: Image top, text bottom */}
            <div className="absolute inset-0 transition-opacity duration-700 ease-out group-hover:opacity-0 group-hover:delay-200 z-10">
              <div className="h-2/3 overflow-hidden">
                <img src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/whycoaching1.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Limited Bandwidth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your leaders are drowning in day-to-day operations, leaving no time for strategic growth.
                </p>
              </div>
            </div>
            
            {/* Expanding overlay animation */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white transform origin-bottom transition-all duration-700 ease-out scale-y-100 group-hover:scale-y-[3] opacity-0 group-hover:opacity-100 z-20"></div>
            
            {/* Hover state: Text top, image bottom */}
            <div className="absolute inset-0 overflow-hidden z-30">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-[600ms]">
                <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">Limited Bandwidth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your leaders are drowning in day-to-day operations, leaving no time for strategic growth.
                  </p>
                </div>
                <div className="h-2/3 overflow-hidden">
                  <img src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/whycoaching1.5.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Downward expanding reveal mask */}
              <div className="absolute inset-0 bg-white transform origin-top transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-full group-hover:delay-[400ms] z-40"></div>
            </div>
          </motion.div>
          
          {/* Box 2 - Talent Retention */}
          <motion.div 
            className="h-[32rem] overflow-hidden rounded-2xl border border-stone-200 shadow-lg bg-white relative group"
            variants={scaleFadeVariants}
          >
            {/* Default state: Image top, text bottom */}
            <div className="absolute inset-0 transition-opacity duration-700 ease-out group-hover:opacity-0 group-hover:delay-200 z-10">
              <div className="h-2/3 overflow-hidden">
                <img src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/whycoaching2.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Talent Retention</h3>
                <p className="text-gray-600 leading-relaxed">
                  High performers are leaving for companies that invest in their growth and development.
                </p>
              </div>
            </div>
            
            {/* Expanding overlay animation */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white transform origin-bottom transition-all duration-700 ease-out scale-y-100 group-hover:scale-y-[3] opacity-0 group-hover:opacity-100 z-20"></div>
            
            {/* Hover state: Text top, image bottom */}
            <div className="absolute inset-0 overflow-hidden z-30">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-[600ms]">
                <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">Talent Retention</h3>
                  <p className="text-gray-600 leading-relaxed">
                    High performers are leaving for companies that invest in their growth and development.
                  </p>
                </div>
                <div className="h-2/3 overflow-hidden">
                  <img src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/whycoaching2.5.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Downward expanding reveal mask */}
              <div className="absolute inset-0 bg-white transform origin-top transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-full group-hover:delay-[400ms] z-40"></div>
            </div>
          </motion.div>
          
          {/* Box 3 - Revenue Targets */}
          <motion.div 
            className="h-[32rem] overflow-hidden rounded-2xl border border-stone-200 shadow-lg bg-white relative group"
            variants={scaleFadeVariants}
          >
            {/* Default state: Image top, text bottom */}
            <div className="absolute inset-0 transition-opacity duration-700 ease-out group-hover:opacity-0 group-hover:delay-200 z-10">
              <div className="h-2/3 overflow-hidden">
                <img src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/whycoaching3.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Revenue Targets</h3>
                <p className="text-gray-600 leading-relaxed">
                  Missed opportunities and poor execution are preventing your growth goals.
                </p>
              </div>
            </div>
            
            {/* Expanding overlay animation */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white transform origin-bottom transition-all duration-700 ease-out scale-y-100 group-hover:scale-y-[3] opacity-0 group-hover:opacity-100 z-20"></div>
            
            {/* Hover state: Text top, image bottom */}
            <div className="absolute inset-0 overflow-hidden z-30">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-[600ms]">
                <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">Revenue Targets</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Missed opportunities and poor execution are preventing your growth goals.
                  </p>
                </div>
                <div className="h-2/3 overflow-hidden">
                  <img src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/whycoaching3.5.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Downward expanding reveal mask */}
              <div className="absolute inset-0 bg-white transform origin-top transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-full group-hover:delay-[400ms] z-40"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCoaching;