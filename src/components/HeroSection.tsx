import { motion } from 'framer-motion';
import Scene3D from './Scene3D/Scene3D';
import MobileFallback from './Scene3D/MobileFallback';
import { useIsMobile } from '../hooks/useIsMobile';

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative w-full h-[55vh] md:h-[60vh]">
        {isMobile ? <MobileFallback /> : <Scene3D />}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none z-10" />
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center space-y-5 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-rose-400/70 text-xs md:text-sm font-mono uppercase"
          >
            Mission Control Online
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight"
          >
            Hello, I am{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-violet-500">
              Tanwi Geetika
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Software Engineer at Red Hat | Ansible Org
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="text-gray-600 text-sm"
          >
            Scroll down to explore the planets of my journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="flex items-center justify-center gap-3 pt-2"
          >
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanwi-geetika-591486196/', hoverColor: 'hover:border-blue-500/50 hover:text-blue-400' },
              { label: 'Email', href: 'mailto:tengverified@gmail.com', hoverColor: 'hover:border-red-500/50 hover:text-red-400' },
              { label: 'GitHub', href: 'https://github.com/tanwigeetika1618', hoverColor: 'hover:border-purple-500/50 hover:text-purple-400' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group relative px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-400 transition-all duration-300 hover:bg-white/[0.06] ${link.hoverColor}`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-8 mb-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-rose-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
