import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Gerekli ikonları @heroicons/react'tan import ediyoruz
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// Animasyon "variant"ları (varyantları)
const labelVariants = {
  default: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
  focused: {
    transition: { staggerChildren: 0.03, staggerDirection: 1 },
  },
};

const letterVariants = {
  default: { y: 0, fontSize: '1.125rem', color: '#9CA3AF' },
  focused: { y: -28, fontSize: '0.875rem', color: '#E5E7EB' },
};

// 1. PROPS GÜNCELLENDİ: 'type' prop'unu alıyoruz
const AnimatedInput = ({ label, type = 'text', value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  
  // 2. YENİ STATE'LER: Şifre görünürlüğü için
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === 'password'; // Bu bir şifre alanı mı?
  
  // Input'un 'type'ını dinamik olarak belirle
  const currentType = isPassword ? (isVisible ? 'text' : 'password') : type;

  const animateState = isFocused || hasValue ? 'focused' : 'default';

  // 3. YENİ FONKSİYON: İkona tıklandığında görünürlüğü değiştir
  const toggleVisibility = (e) => {
    e.preventDefault(); // Formun submit olmasını engelle
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative mt-10">
      <motion.label
        htmlFor={label}
        className="absolute left-3 flex"
        variants={labelVariants}
        initial="default"
        animate={animateState}
        onClick={() => document.getElementById(label)?.focus()}
        style={{ cursor: 'text' }}
      >
        {label.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.label>
      
      <input
        id={label}
        type={currentType} // 4. 'type' güncellendi
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-3 pt-5 pb-2 bg-white/5 rounded-lg text-white
                   border-2 border-white/20 focus:border-indigo-400
                   focus:outline-none transition-colors
                   pr-10" // 5. İkonun sığması için sağdan padding eklendi
      />
      
      {/* 6. YENİ BÖLÜM: Animasyonlu Göz İkonu */}
      {isPassword && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-[1.125rem] z-10 text-gray-400 hover:text-indigo-300 transition-colors"
          title={isVisible ? "Şifreyi Gizle" : "Şifreyi Göster"}
        >
          <AnimatePresence mode="wait">
            {isVisible ? (
              <motion.div
                key="eye-slash"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <EyeSlashIcon className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="eye"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <EyeIcon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      )}
    </div>
  );
};

export default AnimatedInput;