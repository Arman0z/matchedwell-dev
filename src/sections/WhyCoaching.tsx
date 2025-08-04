import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTag from '../components/SectionTag';
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
  hoverDescription: string;
  image: string;
  hoverImage: string;
  delay: number;
}

const Card = React.memo<CardProps>(({ title, description, hoverDescription, image, hoverImage, delay }) => {
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
              {title}
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
      description: "Top performers promoted for individual success now juggle untrained leadership duties – leaving less time for individual contribution, to grow teams and drive revenue.",
      hoverDescription: "Precision-matched coaches help leaders delegate effectively, prioritize strategically, and reclaim 15+ hours per week for high-impact work. Transform firefighters into visionaries.",
      image: ASSETS.WHY_COACHING_1,
      hoverImage: ASSETS.WHY_COACHING_1_5
    },
    {
      title: "Talent Retention",
      description: "Without investment in development and engagement, burnout and turnover rise – your best people walk away, taking your investment with them.",
      hoverDescription: "Individual coaching creates a culture where top talent thrives. Reduce turnover by 40%, save recruitment costs, and build a reputation as an employer who invests in excellence.",
      image: ASSETS.WHY_COACHING_2,
      hoverImage: ASSETS.WHY_COACHING_2_5
    },
    {
      title: "Revenue Targets",
      description: "Revenue targets are either falling short or leaving growth on the table – competitors are gaining ground.",
      hoverDescription: "When your people operate at peak performance, revenue follows. Our clients see 20-30% improvement in team productivity and measurable impact on bottom-line results.",
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
          <SectionTag label="Why Coaching" className="text-gray-700" />
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Your Best People Are <span className="text-primary">Operating</span><br />
            at 60% of Their Potential
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Every legend has a coach. Companies see an average ROI of 7x their coaching investment. <br className="hidden lg:block" />It's time to unlock the full potential of your top talent.
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