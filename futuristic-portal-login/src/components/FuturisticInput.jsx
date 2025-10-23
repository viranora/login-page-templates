import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// Göz ikonu animasyonu (Aynen kalabilir)
const iconVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  transition: { duration: 0.15 }
};

const FuturisticInput = ({ placeholder, type = 'text', value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password';
  
  const currentType = isPassword ? (isVisible ? 'text' : 'password') : type;

  const toggleVisibility = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <motion.input
        type={currentType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-black/20 text-gray-200 
                   border border-white/10 rounded-lg 
                   placeholder-gray-500
                   focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue
                   transition-all duration-300" // Neon mavi focus efekti
        // Odaklanınca hafif parlama efekti 
        whileFocus={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }} 
      />
      
      {/* Göz İkonu */}
      {isPassword && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-neon-blue transition-colors"
          title={isVisible ? "Şifreyi Gizle" : "Şifreyi Göster"}
        >
          <AnimatePresence mode="wait">
            {isVisible ? (
              <motion.div key="eye-slash" {...iconVariants}>
                <EyeSlashIcon className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="eye" {...iconVariants}>
                <EyeIcon className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      )}
    </div>
  );
};

export default FuturisticInput;