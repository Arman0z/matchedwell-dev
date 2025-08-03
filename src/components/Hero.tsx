import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Full Screen */}
      <motion.img 
        src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/matchedwell_hero.png" 
        alt="Executive coaching" 
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.9, ease: "easeOut" }}
      />
      {/* Dark overlay for text contrast */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content Container - Split positioning */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-between text-center px-8 md:px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Tagline - Positioned middle right */}
        <div className="w-full flex items-center justify-end pt-32 md:pt-40 lg:pt-48">
          <motion.p 
            className="text-white text-xl md:text-2xl lg:text-3xl font-sans font-bold tracking-[0.3em] uppercase mr-0 md:mr-8 lg:mr-16"
            variants={itemVariants}
          >
            Every Legend Has A Coach
          </motion.p>
        </div>

        {/* Bottom Section - Logo and Tagline */}
        <div className="flex flex-col items-center justify-end pb-16 md:pb-20 lg:pb-24">
          {/* Logo Image - 5x larger */}
          <motion.div
            className="-mb-44 md:-mb-52 lg:-mb-60"
            variants={itemVariants}
          >
            <img 
              src="https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/matchedwell/matchedwell_logo_white.svg"
              alt="MatchedWell"
              className="h-96 md:h-[32rem] lg:h-[40rem] w-auto max-w-[90vw]"
            />
          </motion.div>

          {/* Bottom Tagline - positioned below logo */}
          <motion.p 
            className="text-white text-2xl md:text-3xl lg:text-4xl font-sans tracking-widest capitalize text-center"
            variants={itemVariants}
          >
            The missing link for driving real results
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;