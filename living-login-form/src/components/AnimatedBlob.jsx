import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBlob = ({ className, animationProps }) => {
  return (
    <motion.div
      className={`absolute rounded-[999px] ${className}`}
      animate={{
        scale: animationProps.scale,
        x: animationProps.x,
        y: animationProps.y,
        borderRadius: animationProps.borderRadius,
      }}
      transition={{
        duration: 15, // Yavaş hareket
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  );
};

export default AnimatedBlob;