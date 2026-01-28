import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Heart, LucideIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

interface SocialLink {
  id: string;
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/',
    color: 'hover:text-white hover:bg-slate-700',
  },
  {
    id: 'email',
    name: 'Email',
    icon: Mail,
    url: 'mailto:a.sora.1209@gmail.com',
    color: 'hover:text-green-400 hover:bg-green-400/10',
  },
];

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.footer[language];
  const headerT = translations.header[language];
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: headerT.about, href: '#about' },
    { label: headerT.skills, href: '#skills' },
    { label: headerT.projects, href: '#projects' },
    { label: headerT.goals, href: '#goals' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.brandTitle}
            </h3>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h4 className="text-white font-semibold mb-4">{t.navigation}</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-white font-semibold mb-4">{t.connect}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} {t.copyright}
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            {t.madeWith} <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> {t.using}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
