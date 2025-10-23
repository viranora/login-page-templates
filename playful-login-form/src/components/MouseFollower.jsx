import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Fare pozisyonunu takip edecek küçük bir baloncuk
const Bubble = ({ mouseX, mouseY, hue }) => {
  // mouseX/Y'yi biraz gecikmeyle takip etmesi için spring kullanabiliriz
  // ama basitlik için direkt transform kullanalım.
  // Farklı hızlarda hareket etmeleri için transform'u ayarlayalım
  const slowX = useTransform(mouseX, (latest) => latest / 2 - 50); 
  const slowY = useTransform(mouseY, (latest) => latest / 2 - 50);
  const fastX = useTransform(mouseX, (latest) => latest * 1.2 - 100);
  const fastY = useTransform(mouseY, (latest) => latest * 1.2 - 100);

  return (
    <>
      <motion.div
        className="absolute w-16 h-16 rounded-full opacity-40 blur-md"
        style={{
          translateX: slowX,
          translateY: slowY,
          backgroundColor: `hsl(${hue}, 100%, 70%)`, // Renk tonunu kullan
        }}
      />
      <motion.div
        className="absolute w-8 h-8 rounded-full opacity-60 blur-sm"
        style={{
          translateX: fastX,
          translateY: fastY,
          backgroundColor: `hsl(${hue + 60}, 100%, 80%)`, // Farklı bir renk tonu
        }}
      />
    </>
  );
};

// Bu component fare pozisyonunu dinler ve baloncukları yönetir
const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fare hareketini dinle ve motion value'ları güncelle
  React.useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Farklı renklerde birkaç baloncuk seti oluşturalım
  const hues = [220, 280, 340]; // Mavi, Mor, Pembe tonları

  return (
    <div className="fixed inset-0 z-0 pointer-events-none"> 
      {/* pointer-events-none önemli, fare tıklamalarını engellemesin */}
      {hues.map(hue => (
        <Bubble key={hue} mouseX={mouseX} mouseY={mouseY} hue={hue} />
      ))}
    </div>
  );
};

export default MouseFollower;