import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { eras } from '../eras/eraData';

export default function ScrollMascot({ activeEra }: { activeEra: number }) {
  const { scrollYProgress } = useScroll();

  const rawY = useTransform(scrollYProgress, [0, 1], [80, window.innerHeight - 120]);
  const y = useSpring(rawY, { stiffness: 50, damping: 20 });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 5, -5]);
  const smoothRotate = useSpring(rotate, { stiffness: 80, damping: 15 });

  const currentColor = eras[activeEra]?.color || '#fff';

  return (
    <motion.div
      className="fixed left-5 z-40 hidden lg:flex flex-col items-center gap-1 pointer-events-none select-none"
      style={{ y }}
    >
      {/* Trail line going up */}
      <div className="w-px h-8 bg-gradient-to-t from-gray-600/30 to-transparent" />

      {/* Mascot body */}
      <motion.div
        style={{ rotate: smoothRotate }}
        className="relative"
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full blur-lg opacity-30 transition-colors duration-700"
          style={{ backgroundColor: currentColor }}
        />

        {/* The mascot - a cute astronaut penguin */}
        <div className="relative w-10 h-10 flex items-center justify-center text-2xl">
          🧑‍🚀
        </div>
      </motion.div>

      {/* Trail line going down */}
      <motion.div
        className="w-px h-16 origin-top"
        style={{
          background: `linear-gradient(to bottom, ${currentColor}40, transparent)`,
        }}
        animate={{ scaleY: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />

      {/* Exhaust particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: currentColor,
            bottom: -20 - i * 8,
            left: '50%',
            opacity: 0.3 - i * 0.1,
          }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.3 - i * 0.1, 0, 0.3 - i * 0.1],
            scale: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            delay: i * 0.3,
            ease: 'easeOut',
          }}
        />
      ))}
    </motion.div>
  );
}
