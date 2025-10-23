import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// Yaylanma animasyonu ayarı
const spring = { type: "spring", stiffness: 300, damping: 15 };
const bounceSpring = { type: "spring", stiffness: 500, damping: 10 }; // Daha sert yay

// Label animasyonu: Yukarı zıpla ve küçül
const labelVariants = {
  inactive: { y: 0, scale: 1, color: '#6B7280' },
  active:   { y: -24, scale: 0.85, color: '#EC4899' },
};

// Göz ikonu animasyonu
const iconVariants = { /* ... önceki gibi ... */ };

const PlayfulInput = ({ label, type = 'text', value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password';
  const hasValue = value.length > 0;

  const currentType = isPassword ? (isVisible ? 'text' : 'password') : type;
  const labelAnimateState = isFocused || hasValue ? 'active' : 'inactive';

  const toggleVisibility = (e) => { /* ... önceki gibi ... */ };

  return (
    <div className="relative mt-8">
      <motion.label
        htmlFor={label}
        className="absolute left-3 top-3 origin-left pointer-events-none"
        variants={labelVariants}
        initial="inactive"
        animate={labelAnimateState}
        transition={spring}
      >
        {label}
      </motion.label>
      
      <motion.input
        id={label}
        type={currentType}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-3 py-3 bg-white rounded-xl text-gray-800 text-lg
                   border-2 border-transparent focus:border-playful-pink
                   focus:outline-none focus:ring-2 focus:ring-playful-pink/50
                   transition-all duration-200 shadow-md"
        // GÜNCELLEME: Odaklanınca hafifçe Zıplama efekti
        whileFocus={{ scale: 1.05, y: -2 }} 
        transition={bounceSpring} // Daha sert yay kullan
      />
      
      {isPassword && (
        <button /* ... önceki gibi ... */>
          <AnimatePresence mode="wait">
             {/* ... Göz / Çizik Göz ... */}
          </AnimatePresence>
        </button>
      )}
    </div>
  );
};

export default PlayfulInput;