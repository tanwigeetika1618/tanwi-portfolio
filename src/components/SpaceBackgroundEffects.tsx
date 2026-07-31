import { motion } from 'framer-motion';

let shipIdCounter = 0;

function Spaceship({ className, style, flip }: { className?: string; style?: React.CSSProperties; flip?: boolean }) {
  const id = `ship-${shipIdCounter++}`;
  return (
    <div className={className} style={{ ...style, transform: flip ? 'scaleX(-1)' : undefined, position: 'relative' }}>
      <svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        {/* Outer hull glow */}
        <ellipse cx="100" cy="50" rx="64" ry="22" fill="none" stroke="url(#glimmer-${id})" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
        </ellipse>
        {/* Main body - metallic shimmer */}
        <ellipse cx="100" cy="50" rx="60" ry="18" fill={`url(#bodyGrad-${id})`} />
        {/* Body shine streak */}
        <ellipse cx="90" cy="44" rx="40" ry="4" fill="#fff" opacity="0.08">
          <animate attributeName="opacity" values="0.04;0.12;0.04" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Dome - glowing */}
        <ellipse cx="100" cy="42" rx="22" ry="18" fill={`url(#domeGrad-${id})`} opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="100" cy="42" rx="22" ry="18" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5">
          <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="96" cy="36" rx="7" ry="5" fill="#fff" opacity="0.15" />
        {/* Pulsing bottom lights */}
        <ellipse cx="65" cy="58" rx="5" ry="2.5" fill="#fbbf24" opacity="0.9">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="85" cy="60" rx="4" ry="2" fill="#34d399" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="100" cy="61" rx="5" ry="2.5" fill="#fbbf24" opacity="0.9">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="0.8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="115" cy="60" rx="4" ry="2" fill="#f472b6" opacity="0.8">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.1s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="135" cy="58" rx="5" ry="2.5" fill="#fbbf24" opacity="0.9">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
        </ellipse>
        {/* Engine glow - pulsing */}
        <ellipse cx="100" cy="64" rx="32" ry="8" fill="#3b82f6" opacity="0.12">
          <animate attributeName="opacity" values="0.08;0.2;0.08" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="ry" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Tractor beam - shimmering */}
        <path d="M78 62 L55 105 L145 105 L122 62" fill={`url(#beamGrad-${id})`} opacity="0.04">
          <animate attributeName="opacity" values="0.02;0.06;0.02" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Sparkle points around ship */}
        <circle cx="42" cy="48" r="1" fill="#fff" opacity="0.6">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="r" values="0.5;1.5;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="158" cy="46" r="1" fill="#fff" opacity="0.4">
          <animate attributeName="opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="r" values="0.5;1.5;0.5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="100" cy="30" r="0.8" fill="#93c5fd" opacity="0.5">
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="75" cy="38" r="0.6" fill="#c4b5fd" opacity="0.4">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="130" cy="40" r="0.7" fill="#fbbf24" opacity="0.3">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        <defs>
          <linearGradient id={`bodyGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b0bcd0" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#8892a8" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#a0aec0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6b7a90" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id={`domeGrad-${id}`} cx="45%" cy="40%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id={`glimmer-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="30%" stopColor="#c4b5fd" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#c4b5fd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`beamGrad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Alien({ className, style, variant = 0 }: { className?: string; style?: React.CSSProperties; variant?: number }) {
  const colors = [
    { skin: '#4ade80', eye: '#fff', pupil: '#1a1a2e' },
    { skin: '#a78bfa', eye: '#fef08a', pupil: '#312e81' },
    { skin: '#2dd4bf', eye: '#fff', pupil: '#134e4a' },
  ];
  const c = colors[variant % 3];

  return (
    <svg viewBox="0 0 100 150" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Big head */}
      <ellipse cx="50" cy="45" rx="30" ry="35" fill={c.skin} opacity="0.85" />
      {/* Large eyes */}
      <ellipse cx="38" cy="42" rx="10" ry="12" fill={c.eye} opacity="0.9" />
      <ellipse cx="62" cy="42" rx="10" ry="12" fill={c.eye} opacity="0.9" />
      <ellipse cx="39" cy="44" rx="5" ry="7" fill={c.pupil} />
      <ellipse cx="63" cy="44" rx="5" ry="7" fill={c.pupil} />
      <circle cx="36" cy="40" r="2.5" fill="#fff" opacity="0.6" />
      <circle cx="60" cy="40" r="2.5" fill="#fff" opacity="0.6" />
      {/* Small mouth */}
      <ellipse cx="50" cy="62" rx="4" ry="2" fill={c.pupil} opacity="0.5" />
      {/* Antenna */}
      <line x1="50" y1="10" x2="50" y2="2" stroke={c.skin} strokeWidth="1.5" opacity="0.7" />
      <circle cx="50" cy="1" r="2.5" fill={c.skin} opacity="0.8" />
      {/* Thin body */}
      <path d="M42 78 L50 75 L58 78 L55 110 L45 110 Z" fill={c.skin} opacity="0.7" />
      {/* Arms */}
      <path d="M42 82 L28 95 L25 92" stroke={c.skin} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M58 82 L72 95 L75 92" stroke={c.skin} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Legs */}
      <path d="M46 110 L42 135 L38 138" stroke={c.skin} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M54 110 L58 135 L62 138" stroke={c.skin} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function SpaceBackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* ===== BIG MOON ===== */}
      <div
        className="absolute rounded-full"
        style={{
          width: '280px',
          height: '280px',
          top: '5%',
          right: '8%',
          background: 'radial-gradient(circle at 40% 35%, #e8e0d4, #c9bfae 40%, #a89b8a 70%, #8a7e6f 100%)',
          boxShadow: '0 0 80px rgba(200, 190, 170, 0.15), 0 0 200px rgba(200, 190, 170, 0.06)',
          opacity: 0.12,
        }}
      >
        {/* Moon craters */}
        <div className="absolute rounded-full" style={{ width: 40, height: 40, top: '25%', left: '30%', background: 'rgba(0,0,0,0.08)', borderRadius: '50%' }} />
        <div className="absolute rounded-full" style={{ width: 25, height: 25, top: '50%', left: '55%', background: 'rgba(0,0,0,0.06)', borderRadius: '50%' }} />
        <div className="absolute rounded-full" style={{ width: 18, height: 18, top: '35%', left: '65%', background: 'rgba(0,0,0,0.07)', borderRadius: '50%' }} />
        <div className="absolute rounded-full" style={{ width: 30, height: 30, top: '60%', left: '25%', background: 'rgba(0,0,0,0.05)', borderRadius: '50%' }} />
      </div>

      {/* Moon glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          top: '2%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(200,190,170,0.06), transparent 60%)',
        }}
      />

      {/* ===== GLIMMERING SPACESHIPS ROAMING ===== */}
      <motion.div
        className="absolute"
        style={{ top: '12%', left: '-8%' }}
        animate={{ x: [0, window.innerWidth * 1.15, 0], y: [0, 20, -10, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
      >
        <Spaceship className="w-[140px] md:w-[180px] opacity-[0.14]" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: '38%', right: '-5%' }}
        animate={{ x: [0, -window.innerWidth * 1.1, 0], y: [0, -15, 10, 0] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear', delay: 4 }}
      >
        <Spaceship className="w-[110px] md:w-[150px] opacity-[0.12]" flip />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: '62%', left: '-6%' }}
        animate={{ x: [0, window.innerWidth * 1.1, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear', delay: 8 }}
      >
        <Spaceship className="w-[100px] md:w-[130px] opacity-[0.11]" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: '85%', right: '-4%' }}
        animate={{ x: [0, -window.innerWidth * 1.05, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 32, ease: 'linear', delay: 12 }}
      >
        <Spaceship className="w-[90px] md:w-[120px] opacity-[0.10]" flip />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: '25%', left: '-10%' }}
        animate={{ x: [0, window.innerWidth * 1.2, 0], y: [0, -25, 15, 0] }}
        transition={{ repeat: Infinity, duration: 35, ease: 'linear', delay: 16 }}
      >
        <Spaceship className="w-[70px] md:w-[95px] opacity-[0.08]" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: '52%', right: '-6%' }}
        animate={{ x: [0, -window.innerWidth * 0.9, 0], y: [0, 35, 0] }}
        transition={{ repeat: Infinity, duration: 26, ease: 'linear', delay: 20 }}
      >
        <Spaceship className="w-[80px] md:w-[105px] opacity-[0.09]" flip />
      </motion.div>

      {/* ===== ALIENS ===== */}
      <motion.div
        className="absolute opacity-[0.08]"
        style={{ right: '5%', top: '35%' }}
        animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        <Alien className="w-[80px] md:w-[110px]" variant={0} />
      </motion.div>

      <motion.div
        className="absolute opacity-[0.07]"
        style={{ left: '8%', top: '55%' }}
        animate={{ y: [0, -12, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
      >
        <Alien className="w-[70px] md:w-[100px]" variant={1} />
      </motion.div>

      <motion.div
        className="absolute opacity-[0.06]"
        style={{ right: '12%', top: '80%' }}
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
      >
        <Alien className="w-[60px] md:w-[90px]" variant={2} />
      </motion.div>

      <motion.div
        className="absolute opacity-[0.07]"
        style={{ left: '15%', top: '20%' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 3 }}
      >
        <Alien className="w-[65px] md:w-[85px]" variant={0} />
      </motion.div>

      {/* ===== COMETS ===== */}
      {[
        { top: '12%', left: '10%', angle: 30, duration: 4, delay: 0, size: 6 },
        { top: '28%', left: '70%', angle: 25, duration: 3.5, delay: 6, size: 5 },
        { top: '50%', left: '20%', angle: 35, duration: 5, delay: 3, size: 7 },
        { top: '65%', left: '80%', angle: 28, duration: 4.5, delay: 9, size: 4 },
        { top: '85%', left: '40%', angle: 22, duration: 3, delay: 12, size: 6 },
        { top: '8%', left: '50%', angle: 32, duration: 4, delay: 15, size: 5 },
      ].map((comet, i) => (
        <motion.div
          key={`comet-${i}`}
          className="absolute"
          style={{ top: comet.top, left: comet.left }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            x: [0, Math.cos(comet.angle * Math.PI / 180) * 800],
            y: [0, Math.sin(comet.angle * Math.PI / 180) * 800],
          }}
          transition={{
            duration: comet.duration,
            delay: comet.delay,
            repeat: Infinity,
            repeatDelay: 10 + Math.random() * 8,
            ease: 'easeOut',
          }}
        >
          {/* Comet head */}
          <div
            className="rounded-full"
            style={{
              width: comet.size,
              height: comet.size,
              background: 'radial-gradient(circle, #fff, #93c5fd)',
              boxShadow: '0 0 10px rgba(147, 197, 253, 0.6), 0 0 20px rgba(147, 197, 253, 0.3)',
            }}
          />
          {/* Comet tail */}
          <div
            className="absolute top-1/2 right-full origin-right"
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(to left, rgba(147, 197, 253, 0.5), rgba(196, 181, 253, 0.2), transparent)',
              transform: `translateY(-50%)`,
            }}
          />
          <div
            className="absolute top-1/2 right-full origin-right"
            style={{
              width: '40px',
              height: '4px',
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.3), transparent)',
              transform: `translateY(-50%)`,
              filter: 'blur(1px)',
            }}
          />
        </motion.div>
      ))}

      {/* ===== NEBULA GLOW BLOBS ===== */}
      {[
        { top: '10%', left: '70%', color: 'rgba(139, 92, 246, 0.05)', size: 350 },
        { top: '30%', left: '5%', color: 'rgba(236, 72, 153, 0.04)', size: 400 },
        { top: '55%', left: '75%', color: 'rgba(59, 130, 246, 0.05)', size: 320 },
        { top: '75%', left: '10%', color: 'rgba(139, 92, 246, 0.04)', size: 380 },
        { top: '90%', left: '60%', color: 'rgba(236, 72, 153, 0.05)', size: 350 },
      ].map((blob, i) => (
        <motion.div
          key={`nebula-${i}`}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 5 + i, delay: i * 0.5, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
