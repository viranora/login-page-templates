// src/pages/PlayfulLoginPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlayfulInput from '../components/PlayfulInput';
import MouseFollower from '../components/MouseFollower'; // Arka planı import et

// Yeni "Montaj" Animasyonu Variantları
const containerVariants = {
  hidden: { opacity: 1 }, // Başlangıçta görünür ama elemanlar dışarıda
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3, // Elemanların gelme aralığı arttı
    },
  },
};

// Her eleman için farklı başlangıç pozisyonu ve rotasyon
const titleVariants = {
  hidden: { opacity: 0, y: -100, rotate: -15 },
  visible: { 
    opacity: 1, y: 0, rotate: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 10 } 
  },
};
const emailVariants = {
  hidden: { opacity: 0, x: -100, rotate: 10 },
  visible: { 
    opacity: 1, x: 0, rotate: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 10 } 
  },
};
const passwordVariants = {
  hidden: { opacity: 0, x: 100, rotate: -10 },
  visible: { 
    opacity: 1, x: 0, rotate: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 10 } 
  },
};
const buttonVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  visible: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { type: 'spring', stiffness: 100, damping: 10 } 
  },
};


// Buton yüklenme animasyonu için "yaylanmalı" loader
const PlayfulLoader = () => (
  <motion.div 
    className="flex space-x-1"
    initial="start"
    animate="end"
  >
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="w-3 h-3 bg-white rounded-full"
        variants={{
          start: { y: "0%" },
          end: { y: ["0%", "-50%", "0%"] } // Yukarı aşağı zıplama
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: i * 0.1, // Her top farklı zamanda başlasın
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.div>
);


const PlayfulLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Form gönderimini simüle et
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return; // Zaten yükleniyorsa tekrar gönderme
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Giriş yapıldı:', email, password);
      // Başarılı/Başarısız durumuna göre bir şeyler yapılabilir
    }, 2000);
  };

  return (
    // Ana container artık direkt body gradient'ını kullanıyor
    <div className="flex items-center justify-center min-h-screen p-4 overflow-hidden"> 
      {/* Fare takip eden baloncukları ekle */}
      <MouseFollower />

      {/* Form Kartı (Animasyonlu Container) */}
      <motion.form 
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm p-8 bg-white/80 rounded-3xl shadow-2xl space-y-4 backdrop-blur-sm border border-white/30" // Daha opak, blur eklendi
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text 
                     bg-gradient-to-r from-playful-pink via-purple-500 to-playful-cyan mb-8" // Gradient başlık
          variants={titleVariants} // Başlık animasyonu
        >
          Let's Play!
        </motion.h1>

        {/* E-posta Input'u */}
        <motion.div variants={emailVariants}>
          <PlayfulInput
            label="E-posta"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        
        {/* Şifre Input'u */}
        <motion.div variants={passwordVariants}>
          <PlayfulInput
            label="Şifre"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>
        
        {/* Giriş Butonu */}
        <motion.div variants={buttonVariants} className="pt-4">
          <motion.button 
            type="submit"
            disabled={isLoading}
            className={`w-full h-14 px-6 py-3 bg-gradient-to-r from-playful-cyan via-blue-500 to-purple-600 
                       rounded-xl text-xl font-bold text-white shadow-lg
                       transition-all duration-300 flex items-center justify-center
                       ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl'}`} // Farklı gradient
            whileTap={{ scale: 0.90, rotate: -2 }} // Daha belirgin tıklama efekti
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div 
                  key="loader" 
                  initial={{ opacity: 0, scale: 0.5 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.5 }} 
                  transition={{ duration: 0.15 }}
                >
                  <PlayfulLoader />
                </motion.div>
              ) : (
                <motion.span 
                  key="text" 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }} 
                  transition={{ duration: 0.15 }}
                >
                  Go!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

      </motion.form>
    </div>
  );
};

export default PlayfulLoginPage;