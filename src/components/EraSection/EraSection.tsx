import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import type { Era } from '../../eras/eraData';
import EraBackground from './EraBackground';

interface EraSectionProps {
  era: Era;
  index: number;
}

function Planet({ era }: { era: Era }) {
  return (
    <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto">
      {/* Planet glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-30"
        style={{ backgroundColor: era.planetColor }}
      />
      {/* Planet body */}
      <motion.div
        className="absolute inset-2 rounded-full overflow-hidden"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${era.planetColor}dd, ${era.gradientFrom}88, ${era.gradientFrom}44)`,
          boxShadow: `inset -8px -8px 20px rgba(0,0,0,0.5), inset 4px 4px 15px rgba(255,255,255,0.1), 0 0 40px ${era.planetColor}30`,
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      >
        {/* Surface texture bands */}
        <div className="absolute inset-0 opacity-20">
          {[20, 35, 50, 65, 80].map((top, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 rounded-full"
              style={{
                top: `${top}%`,
                height: '3px',
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
              }}
            />
          ))}
        </div>
        {/* Highlight */}
        <div
          className="absolute top-3 left-4 w-6 h-4 rounded-full opacity-20"
          style={{ backgroundColor: '#fff', filter: 'blur(4px)' }}
        />
      </motion.div>

      {/* Ring (if planet has one) */}
      {era.planetRing && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '180%',
            height: '40%',
            border: `2px solid ${era.planetRing}50`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%) rotateX(75deg)',
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        />
      )}

      {/* Planet name */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.2em] uppercase whitespace-nowrap"
        style={{ color: `${era.color}80` }}
      >
        ● {era.planet}
      </motion.p>
    </div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  };

  return (
    <div ref={ref} className="transition-transform duration-200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

function AchievementCard({ text, index, color }: { text: string; index: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <TiltCard>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group cursor-default">
          <div
            className="w-2 h-2 rounded-full mt-1.5 shrink-0 group-hover:scale-[2] transition-transform duration-500"
            style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}40` }}
          />
          <span className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors">{text}</span>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function EraImage({ src, index, color }: { src?: string; index: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <TiltCard>
        <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer">
          {src ? (
            <>
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to top, ${color}40, transparent)` }} />
            </>
          ) : (
            <div className="w-full h-full bg-white/[0.02] border border-dashed border-white/[0.08] flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl opacity-20 group-hover:opacity-50 transition-all inline-block">📷</span>
                <p className="text-[10px] text-gray-600 mt-1">Photo coming soon</p>
              </div>
            </div>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function EraSection({ era, index }: EraSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const planetY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const isEven = index % 2 === 0;

  return (
    <section
      data-era={era.id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-28 overflow-hidden"
    >
      <EraBackground eraId={era.id} />

      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at ${isEven ? '15% 40%' : '85% 40%'}, ${era.gradientFrom}, transparent 60%)` }}
      />

      {/* Connecting line from previous era */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-20 origin-top"
        style={{ background: `linear-gradient(to bottom, transparent, ${era.color}30)` }}
      />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Planet at the top of each era */}
        <motion.div style={{ y: planetY }} className="mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          >
            <Planet era={era} />
          </motion.div>
        </motion.div>

        {/* Era number + title center block */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2"
          >
            <span className="text-7xl md:text-8xl font-bold font-['Space_Grotesk'] opacity-[0.06]" style={{ color: era.color }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold -mt-10"
          >
            <span className="mr-3">{era.emoji}</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${era.gradientFrom}, ${era.gradientTo})` }}>
              {era.title}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base italic mt-3"
            style={{ color: era.color }}
          >
            "{era.subtitle}"
          </motion.p>
        </div>

        {/* Content grid */}
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-start`}>
          <div className="flex-1 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl"
            >
              {era.description}
            </motion.p>

            <div className="space-y-2.5 pt-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 font-medium">Highlights</p>
              {era.achievements.map((a, i) => (
                <AchievementCard key={i} text={a} index={i} color={era.color} />
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              {[0, 1, 2, 3].map((i) => (
                <EraImage key={i} src={era.images[i]} index={i} color={era.color} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom connector line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20" style={{ background: `linear-gradient(to bottom, ${era.color}30, transparent)` }} />
    </section>
  );
}
