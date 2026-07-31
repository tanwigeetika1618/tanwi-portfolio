import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eras } from '../../eras/eraData';

interface NavbarProps {
  activeEra: number;
  scrollToEra: (index: number) => void;
  progress: number;
}

export default function Navbar({ activeEra, scrollToEra, progress }: NavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Vertical progress line on the far left */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gray-900/30 z-50">
        <motion.div
          className="w-full bg-gradient-to-b from-rose-400 via-pink-500 to-violet-500"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Side navbar - vertical on right side */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8, type: 'spring' }}
          className="flex flex-col items-end gap-2"
        >
          {/* Home anchor */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 flex items-center justify-center text-sm hover:bg-white/10 hover:scale-110 transition-all mb-2"
            title="Back to top"
          >
            🚀
          </button>

          {/* Era dots (planets) */}
          {eras.map((era, i) => {
            const isActive = activeEra === i;
            const isHovered = hoveredIndex === i;

            return (
              <div key={era.id} className="flex items-center gap-2">
                {/* Label (shows on hover or active) */}
                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.span
                      initial={{ opacity: 0, x: 10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs font-medium whitespace-nowrap px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{
                        color: era.color,
                        backgroundColor: `${era.color}15`,
                        border: `1px solid ${era.color}30`,
                      }}
                    >
                      {era.emoji} {era.title}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <button
                  onClick={() => scrollToEra(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex items-center justify-center transition-all duration-300"
                  title={era.title}
                >
                  {/* Glow ring for active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute w-7 h-7 rounded-full"
                      style={{
                        backgroundColor: `${era.color}20`,
                        boxShadow: `0 0 15px ${era.color}40`,
                      }}
                    />
                  )}
                  <div
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'scale-125'
                        : 'opacity-40 hover:opacity-100 hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: era.color,
                      boxShadow: isActive ? `0 0 10px ${era.color}` : 'none',
                    }}
                  />
                </button>
              </div>
            );
          })}
        </motion.div>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/40 rounded-full px-3 py-2 flex items-center gap-2 shadow-2xl"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-white/10 transition-all"
          >
            🚀
          </button>
          <div className="w-px h-5 bg-gray-700" />
          {eras.map((era, i) => (
            <button
              key={era.id}
              onClick={() => scrollToEra(i)}
              className="relative p-1"
              title={era.title}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeEra === i ? 'scale-125' : 'opacity-40'
                }`}
                style={{
                  backgroundColor: era.color,
                  boxShadow: activeEra === i ? `0 0 8px ${era.color}` : 'none',
                }}
              />
            </button>
          ))}
        </motion.div>
      </nav>
    </>
  );
}
