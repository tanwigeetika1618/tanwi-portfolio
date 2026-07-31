import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  duration: number;
  delay: number;
  emoji: string;
}

const penguinEmojis = ['🐧', '🐧', '🐧', '⭐', '🐧', '💫', '🐧', '✨', '🐧', '🌟'];

export default function ShootingStars() {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const createStars = () => {
      const newStars: ShootingStar[] = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 30,
        angle: 25 + Math.random() * 20,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 12,
        emoji: penguinEmojis[Math.floor(Math.random() * penguinEmojis.length)],
      }));
      setStars(newStars);
    };

    createStars();
    const interval = setInterval(createStars, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, Math.cos(star.angle * Math.PI / 180) * 500],
            y: [0, Math.sin(star.angle * Math.PI / 180) * 500],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 8 + Math.random() * 6,
            ease: 'easeOut',
          }}
        >
          <span className="text-sm md:text-base drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
            {star.emoji}
          </span>
          {/* Trail */}
          <motion.div
            className="absolute top-1/2 right-full w-16 h-px origin-right"
            style={{
              background: 'linear-gradient(to left, rgba(255,255,255,0.4), transparent)',
              transform: `rotate(${star.angle}deg)`,
            }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: star.duration * 0.6,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 8 + Math.random() * 6,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
