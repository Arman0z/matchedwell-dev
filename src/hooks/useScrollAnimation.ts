import { Variants } from 'framer-motion';

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide from left animation
export const slideFromLeftVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Slide from right animation
export const slideFromRightVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Scale fade animation
export const scaleFadeVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Stagger container for children animations
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Fast stagger container
export const fastStaggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Blur to focus animation
export const blurFocusVariants: Variants = {
  hidden: { 
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

// Default viewport configuration
export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: "-50px"
};

// Eager viewport configuration (triggers earlier)
export const eagerViewport = {
  once: true,
  amount: 0.1,
  margin: "-100px"
};