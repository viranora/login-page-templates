import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBlob from '../components/AnimatedBlob';
import AnimatedInput from '../components/AnimatedInput';
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid';

// 1. YENİ: "Welcome" animasyonu için variant'lar
const welcomeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // İlk harfin başlaması için gecikme
      staggerChildren: 0.1, // Harfler arasındaki gecikme
    },
  },
};

const welcomeLetterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // Yaylanma efekti
      stiffness: 100,
      damping: 12,
    },
  },
};

const LivingLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = useMemo(() => {
    if (email.length === 0) return null;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const blobColor = isValidEmail === null ? 'bg-indigo-500' : (isValidEmail ? 'bg-green-500' : 'bg-red-500');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Giriş yapıldı:', email, password);
    }, 2000);
  };

  const welcomeText = "Welcome"; // Animasyon yapılacak metin

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden px-4">
      
      {/* Arka Plan Blob'ları (Değişiklik Yok) */}
      <div className="absolute inset-0 filter blur-[100px]">
        <AnimatedBlob
          className={`w-96 h-96 ${blobColor} opacity-30 transition-colors duration-1000`} 
          animationProps={{ /* ... props ... */ }} // Önceki koddaki gibi
        />
        <AnimatedBlob
          className="w-80 h-80 bg-purple-500 opacity-30"
          animationProps={{ /* ... props ... */ }} // Önceki koddaki gibi
        />
      </div>

      {/* 2. YENİ BÖLÜM: Animasyonlu "Welcome" Başlığı */}
      <motion.h1
        className="text-6xl font-bold text-white mb-10 z-10 flex" // z-10 ekledik
        variants={welcomeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {welcomeText.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={welcomeLetterVariants}
            className="inline-block" // Harflerin yanyana durması için
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Form Kartı (z-10 eklendi, flex-col parent'a eklendi) */}
      <motion.form // Formun da animasyonla gelmesini sağlayalım (Bonus)
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }} // Welcome'dan sonra gelsin
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"
      >
        {/* KİLİT İKONU (Değişiklik Yok) */}
        <div className="flex justify-center mb-4">
          <AnimatePresence mode="wait">
            {isPasswordFocused ? (
              <motion.div key="open" /* ... props ... */ transition={{ duration: 0.2 }}>
                <LockOpenIcon className="w-12 h-12 text-indigo-300" />
              </motion.div>
            ) : (
              <motion.div key="closed" /* ... props ... */ transition={{ duration: 0.2 }}>
                <LockClosedIcon className="w-12 h-12 text-gray-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* E-posta Input'u (Değişiklik Yok) */}
        <AnimatedInput
          label="E-posta"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* Şifre Input'u (Değişiklik Yok) */}
        <div 
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        >
          <AnimatedInput
            label="Şifre"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {/* GİRİŞ BUTONU (Değişiklik Yok) */}
        <div className="mt-8">
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full h-12 px-6 py-3 bg-indigo-600 rounded-lg text-lg font-semibold text-white
                       transition-all duration-300 hover:bg-indigo-700
                       disabled:bg-gray-500 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div key="loader" /* ... props ... */ transition={{ duration: 0.15 }}>
                  {/* Loader SVG */}
                  <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"/>
                </motion.div>
              ) : (
                <motion.span key="text" /* ... props ... */ transition={{ duration: 0.15 }}>
                  Giriş Yap
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

      </motion.form>
    </div>
  );
};

export default LivingLoginPage;