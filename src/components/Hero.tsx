/**
 * Hero.tsx - ヒーローセクション
 *
 * Editorial風の分割レイアウト: 左に巨大なセリフタイポ、右に幾何学ビジュアル。
 */

import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const roles = {
  ja: ['Engineer', 'Linguist', 'Creator'],
  en: ['Engineer', 'Linguist', 'Creator'],
};

const Hero: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.hero[language];
  const name = translations.profile[language].name;

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles[language].length);
    }, 2400);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950/40" />

      {/* Animated ambient blobs (subtle) */}
      <motion.div
        className="absolute w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-3xl"
        style={{ top: '-10%', left: '-10%' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-accent-400/10 rounded-full blur-3xl"
        style={{ bottom: '-10%', right: '-5%' }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: typography */}
        <div className="lg:col-span-8 space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-accent-400"
          >
            <span className="h-px w-10 bg-accent-400" />
            Portfolio · 2026
          </motion.div>

          {/* Massive name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[15vw] lg:text-[10rem] leading-[0.9] tracking-tight text-white"
          >
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
                className="inline-block"
              >
                {char === ' ' || char === '　' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Rotating role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-baseline gap-4 text-2xl md:text-3xl"
          >
            <span className="font-display italic text-slate-300">—</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-display italic text-accent-400"
              >
                {roles[language][roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="font-display italic text-slate-300 hidden md:inline">
              & beyond
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-xl text-base md:text-lg text-slate-300 leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Title as quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-slate-100 tracking-wide"
          >
            Technology <span className="text-accent-400">×</span> Language{' '}
            <span className="text-accent-400">×</span> Creativity
          </motion.p>

          {/* Subtle subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-slate-300"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Right: geometric visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:flex lg:col-span-4 relative aspect-square items-center justify-center"
        >
          {/* Concentric rings */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-blue-500/20"
              style={{
                width: `${100 - i * 18}%`,
                height: `${100 - i * 18}%`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 40 + i * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
          {/* Center dot with orbiting accent */}
          <div className="absolute w-3 h-3 rounded-full bg-accent-400" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-0 w-2 h-2 rounded-full bg-blue-400" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-accent-300" />
          </motion.div>
          {/* Year label */}
          <div className="absolute bottom-0 font-display italic text-accent-300 text-sm">
            {language === 'ja' ? '令和八年' : 'MMXXVI'}
          </div>
        </motion.div>
      </div>

      {/* Keywords ticker at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-300"
      >
        <span className="h-px flex-1 bg-slate-700" />
        {t.keywords.map((kw, i) => (
          <span key={kw} className={i === 0 ? 'text-slate-300' : ''}>
            {kw}
          </span>
        ))}
        <span className="h-px flex-1 bg-slate-700" />
      </motion.div>
    </section>
  );
};

export default Hero;
