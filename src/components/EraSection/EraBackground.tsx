import { motion } from 'framer-motion';

function FloatingEmoji({ emoji, style, duration = 4, delay = 0 }: { emoji: string; style: React.CSSProperties; duration?: number; delay?: number }) {
  return (
    <motion.div
      className="absolute opacity-[0.07] text-2xl select-none"
      style={style}
      animate={{ y: [0, -18, 0], rotate: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration, delay, ease: 'easeInOut' }}
    >
      {emoji}
    </motion.div>
  );
}

const backgrounds: Record<string, React.ReactNode> = {
  'college-journey': (
    <>
      {['📚', '🎒', '📝', '🏫', '🔬', '📖'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${12 + i * 15}%`, top: `${18 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
    </>
  ),
  leadership: (
    <>
      {['👑', '🏛️', '🤝', '📢', '🎯', '🗣️'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 16}%`, top: `${15 + (i % 3) * 30}%` }} duration={3.5 + i} delay={i * 0.6} />
      ))}
    </>
  ),
  'college-fests': (
    <>
      {['🎊', '🎉', '🎈', '🎭', '🎵', '🎪', '✨', '🎆'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${5 + i * 12}%`, top: `${10 + (i % 4) * 22}%` }} duration={3 + i * 0.5} delay={i * 0.4} />
      ))}
    </>
  ),
  'content-writing': (
    <>
      {['✍️', '📰', '📓', '🖊️', '📄', '💭'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${12 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }} duration={4 + i} delay={i * 0.7} />
      ))}
      {/* Floating text fragments */}
      {['draft', '"story"', '...', '<p>', 'blog'].map((t, i) => (
        <motion.span
          key={`t-${i}`}
          className="absolute font-mono text-amber-500/[0.06] text-xs select-none"
          style={{ left: `${8 + i * 18}%`, top: `${25 + (i % 2) * 40}%` }}
          animate={{ opacity: [0.03, 0.08, 0.03], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.8 }}
        >
          {t}
        </motion.span>
      ))}
    </>
  ),
  'graphic-design': (
    <>
      {['🎨', '🖌️', '🎭', '🖼️', '✏️', '🌈'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
      {/* Paint splatters */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`s-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 80 + 5}%`,
            top: `${Math.random() * 80 + 5}%`,
            width: `${30 + Math.random() * 40}px`,
            height: `${30 + Math.random() * 40}px`,
            background: ['#c084fc', '#f472b6', '#818cf8', '#a78bfa', '#fb7185', '#fbbf24'][i],
            opacity: 0.03,
            filter: 'blur(12px)',
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.02, 0.06, 0.02] }}
          transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: Math.random() * 2 }}
        />
      ))}
    </>
  ),
  'coding-journey': (
    <>
      {['💻', '⌨️', '🖥️', '🧑‍💻', '⚡', '🔧'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${18 + (i % 3) * 25}%` }} duration={4 + i} delay={i * 0.6} />
      ))}
      {/* Code rain */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`c-${i}`}
          className="absolute font-mono text-cyan-500/[0.05] text-[10px] leading-tight select-none"
          style={{ left: `${5 + i * 12}%`, top: '-5%' }}
          animate={{ y: ['0%', '105%'] }}
          transition={{ repeat: Infinity, duration: 10 + Math.random() * 6, delay: Math.random() * 5, ease: 'linear' }}
        >
          {Array.from({ length: 15 }, () => Math.random() > 0.5 ? '1' : '0').map((c, j) => <div key={j}>{c}</div>)}
        </motion.div>
      ))}
    </>
  ),
  hackathons: (
    <>
      {['🏆', '⏰', '💡', '🔥', '⚡', '🎯'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${12 + i * 15}%`, top: `${15 + (i % 3) * 28}%` }} duration={3 + i} delay={i * 0.5} />
      ))}
      {/* Pulsing timer circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full border border-orange-500/10"
          style={{ left: `${18 + i * 20}%`, top: `${25 + (i % 2) * 35}%`, width: `${50 + i * 15}px`, height: `${50 + i * 15}px` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.4, delay: i * 0.3 }}
        />
      ))}
    </>
  ),
  internships: (
    <>
      {['🏢', '💼', '🚀', '📊', '⚙️', '📋'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${18 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.6} />
      ))}
    </>
  ),
  redhat: (
    <>
      {['🎩', '🐧', '📦', '🔧', '🐍', '⚙️'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
      {/* Red nebula glow */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`n-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 25}%`,
            top: `${25 + (i % 2) * 35}%`,
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            background: `radial-gradient(circle, rgba(239,68,68,0.06), transparent)`,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 5 + i, delay: i * 0.8 }}
        />
      ))}
    </>
  ),
  'open-source': (
    <>
      {['🌍', '🤝', '📝', '🔀', '🌱', '🧩'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${18 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
      {/* Network nodes */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`n-${i}`}
          className="absolute w-2 h-2 rounded-full bg-green-500/10"
          style={{ left: `${8 + i * 13}%`, top: `${20 + (i % 4) * 18}%` }}
          animate={{ scale: [1, 2, 1], opacity: [0.06, 0.15, 0.06] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.5 }}
        />
      ))}
    </>
  ),
  devconf: (
    <>
      {['🎤', '🎙️', '📽️', '👏', '🌟', '💬'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${12 + i * 15}%`, top: `${15 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
      {/* Spotlight beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`s-${i}`}
          className="absolute origin-top"
          style={{ left: `${25 + i * 20}%`, top: '0', width: '1px', height: '100%', background: 'linear-gradient(to bottom, rgba(244,63,94,0.15), transparent 60%)' }}
          animate={{ rotate: [-12, 12, -12], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
        />
      ))}
    </>
  ),
  'ai-ml': (
    <>
      {['🤖', '🧠', '⚡', '🔮', '📡', '💡'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 28}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
      {/* AI text */}
      {['LLM', 'RAG', 'MCP', 'GPT', 'AI', 'ML'].map((t, i) => (
        <motion.span
          key={`t-${i}`}
          className="absolute font-mono text-violet-500/[0.06] text-xs select-none"
          style={{ left: `${8 + i * 15}%`, top: `${12 + (i % 3) * 30}%` }}
          animate={{ opacity: [0.03, 0.1, 0.03], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 + i * 0.3, delay: i * 0.4 }}
        >
          {t}
        </motion.span>
      ))}
    </>
  ),
  'devops-cloud': (
    <>
      {['☁️', '🐳', '⚙️', '🔄', '📦', '🏗️'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${10 + i * 15}%`, top: `${18 + (i % 3) * 25}%` }} duration={4 + i} delay={i * 0.6} />
      ))}
    </>
  ),
  projects: (
    <>
      {['💡', '🛠️', '🚀', '📐', '🧪', '⚡'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${12 + i * 14}%`, top: `${18 + (i % 3) * 25}%` }} duration={4 + i} delay={i * 0.5} />
      ))}
    </>
  ),
  'beyond-code': (
    <>
      {['🏋️', '🍳', '📺', '🎮', '☕', '🎵', '🌅', '📖'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${5 + i * 12}%`, top: `${10 + (i % 4) * 22}%` }} duration={3.5 + i * 0.4} delay={i * 0.4} />
      ))}
    </>
  ),
  travel: (
    <>
      {['🌏', '✈️', '🗺️', '⛰️', '🏖️', '🌄', '🎒', '📸'].map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{ left: `${5 + i * 12}%`, top: `${10 + (i % 4) * 22}%` }} duration={3 + i * 0.5} delay={i * 0.5} />
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
