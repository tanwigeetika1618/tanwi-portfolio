import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-[#020208]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-4xl">🪐</p>

          <h3 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] text-white">
            The Universe Keeps Expanding...
          </h3>

          <p className="text-gray-500 max-w-md mx-auto">
            Every planet shaped who I am today. New worlds are being discovered right now.
            Want to explore together?
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/tanwi-geetika-591486196/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-rose-600/25"
            >
              Let's Connect
            </a>
            <a
              href="mailto:tengverified@gmail.com"
              className="px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-300 text-sm font-medium transition-all"
            >
              Say Hello
            </a>
          </div>

          <div className="pt-12 border-t border-gray-800/50 mt-12">
            <p className="text-gray-600 text-xs">
              Designed & Built with ❤️ by Tanwi Geetika &copy; {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
