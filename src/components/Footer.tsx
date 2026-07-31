import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-[#020208]" />

      {/* Subtle stars in footer */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="text-5xl"
          >
            🚀
          </motion.div>

          <h3 className="text-2xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Still Exploring. Still Building.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-violet-400">
              Still Dreaming.
            </span>
          </h3>

          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Every planet I've visited has shaped the engineer I am today.
            But the best part? There are infinite worlds left to discover.
            If you're building something exciting or just want to say hi — I'm always up for a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/tanwi-geetika-591486196/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 to-violet-600 text-white text-sm font-medium transition-all hover:shadow-xl hover:shadow-rose-600/20 hover:scale-105"
            >
              Let's Build Something Together 🚀
            </a>
            <a
              href="mailto:tengverified@gmail.com"
              className="px-8 py-3.5 rounded-full border border-gray-700 hover:border-rose-500/50 text-gray-300 hover:text-rose-300 text-sm font-medium transition-all hover:scale-105"
            >
              Drop Me a Message ✉️
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6">
            <a href="https://github.com/tanwigeetika1618" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors text-sm">GitHub</a>
            <span className="text-gray-800">·</span>
            <a href="https://www.linkedin.com/in/tanwi-geetika-591486196/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors text-sm">LinkedIn</a>
            <span className="text-gray-800">·</span>
            <a href="mailto:tengverified@gmail.com" className="text-gray-600 hover:text-white transition-colors text-sm">Email</a>
          </div>

          <div className="pt-10 border-t border-gray-800/30 mt-8">
            <p className="text-gray-700 text-xs">
              Designed & Built with ❤️ by Tanwi Geetika &copy; {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
