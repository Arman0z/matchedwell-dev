import React from 'react';
import { motion } from 'framer-motion';

interface SectionTagProps {
  label: string;
  className?: string;
}

const SectionTag: React.FC<SectionTagProps> = ({ label, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`inline-block mb-8 ${className}`}
    >
      <div className="relative">
        {/* Main tag box */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full">
          <span className="text-sm font-sans font-medium tracking-wider uppercase text-current">
            {label}
          </span>
        </div>
        
        {/* Subtle shadow for depth */}
        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full -z-10 transform translate-y-1" />
      </div>
    </motion.div>
  );
};

export default SectionTag;