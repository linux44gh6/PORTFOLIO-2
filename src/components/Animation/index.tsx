
import { motion } from 'framer-motion';

export const AnimatedText = ({ children }:{children: React.ReactNode}) => {
  return (
    <motion.div
      initial={{ 
        transform: 'translateY(100px)', 
        opacity: 0 
      }}
      whileInView={{ 
        transform: 'translateY(0px)', 
        opacity: 1 
      }}
      viewport={{ 
        once: false, 
        amount: 0.2,  // Triggers when 20% of element is visible
        margin: "0px 0px -50px 0px" // Adjusts trigger point (negative = earlier)
      }}
      transition={{ 
        duration: 1,
        ease: [0.16, 0.77, 0.47, 0.97], // Custom easing curve
        type: "spring", // Optional: for bounce effect
        damping: 10,   // Spring physics
        stiffness: 100 // Spring physics
      }}
    >
      {children}
    </motion.div>
  );
};


export const AnimatedTextSide = ({ children,duration }:{children: React.ReactNode,duration:number}) => {
  return (
    <motion.div
      initial={{ 
        transform: 'translateX(-100px)', 
        opacity: 0 
      }}
      whileInView={{ 
        transform: 'translateX(0px)', 
        opacity: 1 
      }}
      viewport={{ 
        once: false, 
        amount: 0.,  // Triggers when 20% of element is visible
        margin: "0px 0px -50px 0px" // Adjusts trigger point (negative = earlier)
      }}
      transition={{ 
        duration: duration,
        ease: [0.16, 0.77, 0.47, 0.97], // Custom easing curve

        type: "spring", // Optional: for bounce effect
        damping: 10,   // Spring physics
        stiffness: 100 // Spring physics
      }}
    >
      {children}
    </motion.div>
  );
}
export const AnimatedTextSideRight = ({ children,duration }:{children: React.ReactNode,duration:number}) => {
  return (
    <motion.div
      initial={{ 
        transform: 'translateX(100px)', 
        opacity: 0 
      }}
      whileInView={{ 
        transform: 'translateX(0px)', 
        opacity: 1 
      }}
      viewport={{ 
        once: false, 
        amount: 0.,  // Triggers when 20% of element is visible
        margin: "0px 0px -50px 0px" // Adjusts trigger point (negative = earlier)
      }}
      transition={{ 
        duration: duration,
        ease: [0.16, 0.77, 0.47, 0.97], // Custom easing curve

        type: "spring", // Optional: for bounce effect
        damping: 10,   // Spring physics
        stiffness: 100 // Spring physics
      }}
    >
      {children}
    </motion.div>
  );
}