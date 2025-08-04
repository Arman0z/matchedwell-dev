import { motion } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, defaultViewport, fastStaggerContainerVariants } from '../hooks/useScrollAnimation';
import { ASSETS } from '../constants/assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeInVariants} className="relative">
            <div className="absolute z-10" style={{ left: '-7px', top: '-83px' }}>
              <img 
                src={ASSETS.LOGO_WHITE}
                alt="MatchedWell"
                className="h-48 w-auto"
              />
            </div>
            <div className="pt-1">
              <h4 className="font-serif text-lg mb-4 opacity-0">Hidden Title</h4>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                Excellence is rarely achieved solo. We connect high-performing professionals with world-class coaches.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInVariants}>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <motion.ul 
              className="space-y-2 text-sm text-gray-400"
              variants={fastStaggerContainerVariants}
            >
              <motion.li variants={fadeInVariants}><a href="#" className="hover:text-primary transition-colors">About Us</a></motion.li>
              <motion.li variants={fadeInVariants}><a href="#" className="hover:text-primary transition-colors">Our Process</a></motion.li>
              <motion.li variants={fadeInVariants}><a href="#" className="hover:text-primary transition-colors">Success Stories</a></motion.li>
              <motion.li variants={fadeInVariants}><a href="#" className="hover:text-primary transition-colors">Blog</a></motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div variants={fadeInVariants}>
            <h4 className="font-serif text-lg mb-4">Solutions</h4>
            <motion.ul 
              className="space-y-2 text-sm text-gray-400"
              variants={fastStaggerContainerVariants}
            >
              <motion.li variants={fadeInVariants}><a href="#for-business" className="hover:text-primary transition-colors">For Business</a></motion.li>
              <motion.li variants={fadeInVariants}><a href="#for-coaches" className="hover:text-primary transition-colors">For Coaches</a></motion.li>
              <motion.li variants={fadeInVariants}><a href="#" className="hover:text-primary transition-colors">Resources</a></motion.li>
              <motion.li variants={fadeInVariants}><a href="#" className="hover:text-primary transition-colors">FAQ</a></motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div variants={fadeInVariants}>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <p className="text-sm text-gray-400">
              <a href="mailto:info@getmatchedwell.com" className="hover:text-primary transition-colors">
                info@getmatchedwell.com
              </a>
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInVariants}
        >
          <p>&copy; 2025 MatchedWell. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;