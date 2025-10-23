import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FuturisticInput from '../components/FuturisticInput'; // Yeni input'u import et

// "Kapı" Panelleri için animasyon
const panelVariants = {
  initial: { x: 0 },
  animate: { 
    x: 0, 
    transition: { duration: 0.1 } // Başlangıçta anında gelsinler
  },
  exit: { // Çıkış (açılma) animasyonu
    x: '100%', 
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Yumuşak çıkış
  }
};

// Formun ve içindekilerin animasyonu
const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5, // Kapılar açıldıktan sonra başla
      when: "beforeChildren", // Önce container gelsin
      staggerChildren: 0.2, // Sonra içindekiler gelsin
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Yüklenme İkonu (Basit dönen çizgi)
const LoadingSpinner = () => (
    <motion.div 
        key="loader"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className="w-6 h-6 border-2 border-t-neon-blue border-white/20 rounded-full animate-spin"
    />
);

const FuturisticLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Formu gösterme durumu

  // Sayfa yüklendikten kısa bir süre sonra kapıları aç
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true); // Bu, kapıların 'exit' animasyonunu tetikleyecek
    }, 500); // 0.5 saniye bekle
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Giriş yapıldı:', email, password);
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      
      {/* İsteğe Bağlı Arka Plan Efekti: Yavaşça hareket eden çizgiler */}
      {/* <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern animate-pan"></div> */}
      {/* (Bunun için Tailwind'e ek config gerekebilir) */}

      {/* Açılan "Kapı" Panelleri */}
      <AnimatePresence>
        {!showForm && ( // Sadece form gizliyken göster
          <>
            {/* Sol Panel */}
            <motion.div
              key="left-panel"
              className="absolute top-0 left-0 bottom-0 w-1/2 bg-gray-800/80 backdrop-blur-sm z-20 border-r border-neon-blue/30 shadow-lg"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit={{ ...panelVariants.exit, x: '-100%' }} // Sola doğru çık
            />
            {/* Sağ Panel */}
            <motion.div
              key="right-panel"
              className="absolute top-0 right-0 bottom-0 w-1/2 bg-gray-800/80 backdrop-blur-sm z-20 border-l border-neon-blue/30 shadow-lg"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit={{ ...panelVariants.exit, x: '100%' }} // Sağa doğru çık
            />
          </>
        )}
      </AnimatePresence>

      {/* Giriş Formu (Kapıların arkasında, z-10) */}
      <motion.form 
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm p-8 bg-black/50 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 space-y-6"
        variants={formContainerVariants}
        initial="hidden"
        animate={showForm ? "visible" : "hidden"} // showForm true olunca görünür yap
      >
        <motion.h1 
          className="text-3xl font-light text-center text-neon-blue mb-8 tracking-widest"
          variants={formItemVariants}
        >
          AUTHENTICATE
        </motion.h1>

        {/* E-posta Input'u */}
        <motion.div variants={formItemVariants}>
          <FuturisticInput
            placeholder="User ID / Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        
        {/* Şifre Input'u */}
        <motion.div variants={formItemVariants}>
          <FuturisticInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>
        
        {/* Giriş Butonu */}
        <motion.div variants={formItemVariants} className="pt-4">
          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 px-6 py-3 border border-neon-blue rounded-lg text-lg font-semibold 
                       text-neon-blue hover:bg-neon-blue/10 active:bg-neon-blue/20
                       transition-all duration-300 flex items-center justify-center
                       disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <motion.span 
                  key="text" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  ACCESS
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

      </motion.form>
    </div>
  );
};

export default FuturisticLoginPage;