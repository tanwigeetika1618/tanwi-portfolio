import { motion } from 'framer-motion';

function OrbitRing({ size, color, duration, opacity = 0.06 }: { size: number; color: string; duration: number; opacity?: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: `${color}`,
        opacity,
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
    >
      <div
        className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
      />
    </motion.div>
  );
}

const backgrounds: Record<string, React.ReactNode> = {
  'college-journey': (
    <>
      <OrbitRing size={300} color="#60a5fa" duration={20} />
      <OrbitRing size={200} color="#93c5fd" duration={15} opacity={0.04} />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.06]"
          style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%`, fontSize: `${28 + i * 6}px` }}
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.5, ease: 'easeInOut' }}
        >
          📚
        </motion.div>
      ))}
    </>
  ),
  internships: (
    <>
      <OrbitRing size={250} color="#f59e0b" duration={18} />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.06]"
          style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 3) * 28}%`, fontSize: `${25 + i * 5}px` }}
          animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.7, ease: 'easeInOut' }}
        >
          {['🏢', '💼', '🚀', '⚙️', '📊'][i]}
        </motion.div>
      ))}
    </>
  ),
  redhat: (
    <>
      <OrbitRing size={350} color="#ef4444" duration={25} />
      <OrbitRing size={220} color="#f87171" duration={16} opacity={0.04} />
      {/* Red nebula effect */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 40}%`,
            width: `${80 + i * 30}px`,
            height: `${80 + i * 30}px`,
            background: `radial-gradient(circle, ${['#ef444420', '#dc262620', '#f8717120', '#fca5a520'][i]}, transparent)`,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.8 }}
        />
      ))}
    </>
  ),
  'open-source': (
    <>
      <OrbitRing size={280} color="#4ade80" duration={22} />
      {/* Network constellation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 18}%`,
            backgroundColor: '#4ade80',
          }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.5 }}
        />
      ))}
    </>
  ),
  'ai-ml': (
    <>
      <OrbitRing size={320} color="#a78bfa" duration={20} />
      <OrbitRing size={180} color="#c4b5fd" duration={12} opacity={0.05} />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs"
          style={{ left: `${5 + i * 12}%`, top: `${10 + (i % 4) * 22}%`, color: `${['#a78bfa', '#c4b5fd', '#8b5cf6', '#ddd6fe'][i % 4]}15` }}
          animate={{ opacity: [0.04, 0.12, 0.04], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 + i * 0.3, delay: i * 0.4 }}
        >
          {['AI', '{ }', 'LLM', 'RAG', '0101', 'MCP', 'fn()', 'ML'][i]}
        </motion.div>
      ))}
    </>
  ),
  devconf: (
    <>
      <OrbitRing size={260} color="#f43f5e" duration={18} />
      {/* Spotlight beams from space */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute origin-top"
          style={{
            left: `${25 + i * 20}%`,
            top: '0',
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(244, 63, 94, 0.2), transparent 70%)',
          }}
          animate={{ rotate: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
        />
      ))}
    </>
  ),
  'devops-cloud': (
    <>
      <OrbitRing size={300} color="#22d3ee" duration={20} />
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.05]"
          style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 28}%`, fontSize: `${20 + i * 4}px` }}
          animate={{ y: [0, -10, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.6, ease: 'easeInOut' }}
        >
          {['☁️', '🐳', '⚙️', '🔧', '📦', '🔄'][i]}
        </motion.div>
      ))}
    </>
  ),
  projects: (
    <>
      <OrbitRing size={280} color="#fb923c" duration={22} />
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            left: `${15 + i * 22}%`,
            top: `${25 + (i % 2) * 35}%`,
            width: `${50 + i * 15}px`,
            height: `${50 + i * 15}px`,
            borderColor: `rgba(251, 146, 60, 0.1)`,
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.3 }}
        />
      ))}
    </>
  ),
  'beyond-code': (
    <>
      <OrbitRing size={240} color="#e879f9" duration={16} />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg"
          style={{ left: `${Math.random() * 85 + 5}%`, top: `${Math.random() * 85 + 5}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.04, 0.12, 0.04], rotate: [0, 180] }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        >
          {['🏋️', '🍳', '📺', '✨', '🎮', '🎵', '☕', '🌅'][i]}
        </motion.div>
      ))}
    </>
  ),
};

export default function EraBackground({ eraId }: { eraId: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {backgrounds[eraId] || null}
    </div>
  );
}
