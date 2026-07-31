import { motion } from 'framer-motion';

export default function MobileFallback() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0020] via-[#050515] to-[#050510]" />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Distant planet with rings */}
      <div className="absolute top-8 right-6">
        <motion.div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-violet-600 opacity-60"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-3 rounded-full border border-pink-400/30"
          style={{ transform: 'translate(-50%, -50%) rotateX(70deg)' }}
        />
      </div>

      {/* Small planet */}
      <motion.div
        className="absolute top-20 left-8 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-50"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />

      {/* Nebula glow */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-rose-600/10 blur-3xl" />

      {/* Rocket */}
      <motion.div
        className="absolute bottom-[30%] left-1/2 -translate-x-1/2 text-5xl"
        animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        🚀
      </motion.div>

      {/* Astronaut */}
      <motion.div
        className="absolute bottom-[38%] left-[58%] text-3xl"
        animate={{ y: [0, -8, 0], rotate: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
      >
        🧑‍🚀
      </motion.div>

      {/* Exhaust trail */}
      <motion.div
        className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-orange-400/40 to-transparent rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      />
    </div>
  );
}
