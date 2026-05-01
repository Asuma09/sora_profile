/**
 * Header.tsx - ヘッダーナビゲーション
 *
 * 固定ヘッダー + 言語スイッチ + ハンバーガーメニュー。
 * Editorialスタイル（serifロゴ + minimalリンク）。
 */

import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations.header[language];

  const navItems = [
    { label: t.about, href: '#about', num: '02' },
    { label: t.history, href: '#history', num: '03' },
    { label: t.skills, href: '#skills', num: '04' },
    { label: t.projects, href: '#projects', num: '05' },
    { label: t.goals, href: '#goals', num: '06' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - serif wordmark */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-white tracking-tight hover:text-accent-400 transition-colors"
          >
            Sora<span className="text-accent-400">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex items-baseline gap-1.5 text-slate-300 hover:text-accent-400 transition-colors text-sm"
              >
                <span className="font-display italic text-xs text-slate-400 group-hover:text-accent-400 transition-colors">
                  {item.num}
                </span>
                {item.label}
              </motion.a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
              <button
                onClick={() => setLanguage('ja')}
                className={`transition-colors ${
                  language === 'ja' ? 'text-accent-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                JA
              </button>
              <span className="text-slate-700">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-accent-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-3 py-3 text-slate-300 hover:text-accent-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-display italic text-xs text-slate-400">
                    {item.num}
                  </span>
                  <span className="text-base">{item.label}</span>
                </a>
              ))}
              <div className="flex gap-4 pt-6 mt-2 border-t border-slate-800 text-sm uppercase tracking-wider">
                <button
                  onClick={() => {
                    setLanguage('ja');
                    setIsMobileMenuOpen(false);
                  }}
                  className={language === 'ja' ? 'text-accent-400' : 'text-slate-400'}
                >
                  JA
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className={language === 'en' ? 'text-accent-400' : 'text-slate-400'}
                >
                  EN
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
