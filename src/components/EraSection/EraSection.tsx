import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Era } from '../../eras/eraData';
import EraBackground from './EraBackground';

interface EraSectionProps {
  era: Era;
  index: number;
}

function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [transform, setTransform] = useState('perspective(800px) rotateX(0) rotateY(0)');
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <div
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

function AchievementCard({
  text,
  index,
  color,
}: {
  text: string;
  index: number;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
    >
      <TiltCard>
        <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group cursor-default">
          <div
            className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 group-hover:scale-[2] transition-transform duration-500"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}40`,
            }}
          />
          <span className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors">
            {text}
          </span>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function EraImage({ src, index, color }: { src?: string; index: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <TiltCard>
        <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer">
          {src ? (
            <>
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${color}40, transparent)`,
                }}
              />
            </>
          ) : (
            <div className="w-full h-full bg-white/[0.02] border border-dashed border-white/[0.08] flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${color}08, transparent 70%)`,
                }}
              />
              <div className="text-center relative z-10">
                <span className="text-2xl opacity-20 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 inline-block">
                  📷
                </span>
                <p className="text-[10px] text-gray-600 mt-1 group-hover:text-gray-400 transition-colors">
                  Photo coming soon
                </p>
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
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <section
      data-era={era.id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden"
    >
      {/* Animated themed background */}
      <EraBackground eraId={era.id} />

      {/* Background gradient orb */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '15% 40%' : '85% 40%'}, ${era.gradientFrom}, transparent 60%)`,
        }}
      />

      {/* Decorative side line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-6 md:left-12 top-0 bottom-0 w-px origin-top"
        style={{ backgroundColor: `${era.color}15` }}
      >
        {/* Pulse dot on the line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{
            backgroundColor: era.color,
            top: '50%',
            boxShadow: `0 0 12px ${era.color}60`,
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      <div className="container mx-auto px-8 md:px-20 relative z-10">
        <div
          className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
        >
          {/* Content side */}
          <div className="flex-1 space-y-6">
            {/* Era number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span
                className="text-6xl md:text-7xl font-bold font-['Space_Grotesk'] opacity-[0.08]"
                style={{ color: era.color }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold -mt-8"
            >
              <span className="mr-3 inline-block">{era.emoji}</span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${era.gradientFrom}, ${era.gradientTo})`,
                }}
              >
                {era.title}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-base md:text-lg italic font-light"
              style={{ color: era.color }}
            >
              "{era.subtitle}"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl"
            >
              {era.description}
            </motion.p>

            {/* Achievements */}
            <div className="space-y-3 pt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium"
              >
                Highlights
              </motion.p>
              {era.achievements.map((achievement, i) => (
                <AchievementCard key={i} text={achievement} index={i} color={era.color} />
              ))}
            </div>
          </div>

          {/* Visual side - Image gallery */}
          <div className="flex-1 w-full max-w-md">
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

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${era.color}20, transparent)`,
        }}
      />
    </section>
  );
}
