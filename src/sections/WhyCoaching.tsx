import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants/assets';

interface WhyCoachingProps {
  id?: string;
}

const simpleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

interface CardProps {
  title: string;
  description: string;
  hoverTitle: string;
  hoverDescription: string;
  image: string;
  hoverImage: string;
  delay: number;
}

const Card = React.memo<CardProps>(({ title, description, hoverTitle, hoverDescription, image, hoverImage, delay }) => {
  const [hoverImageLoaded, setHoverImageLoaded] = useState(false);

  // Preload hover image when card comes into view
  React.useEffect(() => {
    const img = new Image();
    img.src = hoverImage;
    img.onload = () => setHoverImageLoaded(true);
  }, [hoverImage]);

  return (
    <motion.div 
      className="h-[32rem] overflow-hidden rounded-2xl border border-stone-200 shadow-lg bg-white relative group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      transition={{ delay }}
    >
      {/* Default state: Image top, text bottom */}
      <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:opacity-0 z-10">
        <div className="h-2/3 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Smooth expanding overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white transform origin-bottom transition-all duration-500 ease-out scale-y-100 group-hover:scale-y-[3] opacity-0 group-hover:opacity-100 z-20"></div>
      
      {/* Hover state: Text top, image bottom */}
      <div className="absolute inset-0 overflow-hidden z-30">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:delay-300">
          <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
            <h3 className="font-serif text-2xl font-bold text-primary mb-3 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              {hoverTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed transform transition-all duration-500 delay-75 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              {hoverDescription}
            </p>
          </div>
          <div className="h-2/3 overflow-hidden">
            {hoverImageLoaded ? (
              <img 
                src={hoverImage} 
                alt={title}
                className="w-full h-full object-cover transform transition-transform duration-700 scale-110 group-hover:scale-100"
              />
            ) : (
              <div className="w-full h-full bg-gray-100" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

const WhyCoaching = React.memo<WhyCoachingProps>(({ id = "why-coaching" }) => {
  const cards = [
    {
      title: "Limited Bandwidth",
      description: "Your best leaders are drowning in daily operations instead of driving strategy.",
      hoverTitle: "Strategic Focus",
      hoverDescription: "Reclaim 15+ hours per week for high-impact work with precision-matched executive coaching.",
      image: ASSETS.WHY_COACHING_1,
      hoverImage: ASSETS.WHY_COACHING_1_5
    },
    {
      title: "Talent Retention",
      description: "Top performers leave for companies that invest in their growth.",
      hoverTitle: "Employee Loyalty",
      hoverDescription: "Reduce turnover by 40% and save recruitment costs with individual development.",
      image: ASSETS.WHY_COACHING_2,
      hoverImage: ASSETS.WHY_COACHING_2_5
    },
    {
      title: "Revenue Targets",
      description: "Competitors are gaining ground while you leave growth on the table.",
      hoverTitle: "Growth Acceleration",
      hoverDescription: "See 20-30% improvement in team productivity and measurable revenue impact.",
      image: ASSETS.WHY_COACHING_3,
      hoverImage: ASSETS.WHY_COACHING_3_5
    }
  ];

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
          viewport={{ once: true, amount: 0.3 }}
          variants={simpleVariants}
        >
          <div className="inline-block mb-8">
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 px-8 py-3 rounded-full">
              <span className="text-sm font-sans font-semibold tracking-wider uppercase text-primary">
                Why Coaching
              </span>
            </div>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The <span className="text-primary">Secret Advantage</span> of<br />
            High-Performance Organizations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Your best people are your biggest investment - and your greatest opportunity for growth. <br className="hidden lg:block" />MatchedWell ensures they reach their full potential without adding to your workload.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={card.title}
              {...card}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

WhyCoaching.displayName = 'WhyCoaching';

export default WhyCoaching;