import React, { useEffect, useState, useRef } from 'react';
import { IconHeart, IconSparkles, IconGift } from './Icons';
import { Gift } from '../types';

interface StatItemProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ end, label, icon, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-3xl border border-[#52796F]/10 shadow-lg hover:-translate-y-2 transition-all duration-300">
      <div className="w-12 h-12 bg-[#B07D62]/10 rounded-full flex items-center justify-center mb-4 text-[#B07D62] shadow-sm">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-[#354F52] mb-2 font-cursive">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#84A98C] text-center">
        {label}
      </div>
    </div>
  );
};

interface FunStatsProps {
  gifts?: Gift[];
}

const FunStats: React.FC<FunStatsProps> = ({ gifts = [] }) => {
  const reservedCount = gifts.filter(g => g.status === 'reserved').length;
  const giftsDisplay = reservedCount > 0 ? reservedCount : 42;

  const handleCelebrate = () => {
    if (typeof window !== 'undefined' && window.confetti) {
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#354F52', '#52796F', '#84A98C', '#B07D62']
      });
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-cursive text-[#52796F] mb-3">O saldo do nosso dia</h2>
        <p className="text-[#84A98C] font-bold text-[10px] uppercase tracking-widest">
          Números reais que aquecem nosso lar
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        <StatItem 
          end={150} 
          suffix="+" 
          label="Salgadinhos Devorados" 
          icon={<IconSparkles className="w-6 h-6" />} 
        />
        <StatItem 
          end={100} 
          suffix="%" 
          label="De Amor & Gratidão" 
          icon={<IconHeart className="w-6 h-6" />} 
          duration={2500}
        />
        <StatItem 
          end={giftsDisplay} 
          label="Presentes Recebidos" 
          icon={<IconGift className="w-6 h-6" />} 
          duration={3000}
        />
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleCelebrate}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#B07D62] hover:bg-[#96644B] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
        >
          <IconSparkles className="w-4 h-4" />
          Comemorar com o casal 🎉
        </button>
      </div>
    </div>
  );
};

export default FunStats;
