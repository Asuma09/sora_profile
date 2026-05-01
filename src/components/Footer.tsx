/**
 * Footer.tsx - フッター
 *
 * Editorial風: 大型セリフの締めくくり + 最小限のリンク。
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const socialLinks = [
  { id: 'github', label: 'GitHub', icon: Github, url: 'https://github.com/Asuma09' },
  { id: 'instagram', label: 'Instagram', icon: Instagram, url: 'https://instagram.com/sora051209/' },
  { id: 'email', label: 'Email', icon: Mail, url: 'mailto:a.sora.1209@gmail.com' },
];

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.footer[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 md:pt-32 pb-12 px-6 md:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Big call-to-connect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent-400 mb-6">
            — {t.connect}
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8">
            Let's{' '}
            <span className="italic text-accent-400">connect.</span>
          </h2>

          {/* Social links - big inline */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-display text-2xl md:text-3xl text-white hover:text-accent-400 transition-colors"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="italic">{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            © {currentYear} · {t.copyright}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {t.madeWith} · React · Vite · Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
