/**
 * About.tsx - 自己紹介セクション
 *
 * Manifesto風: 3つの柱を縦に大きな数字付きで読み物として表示。
 * カード枠を排除し、活字と余白で階層を作る。
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Languages, Palette, LucideIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const pillarIcons: Record<string, LucideIcon> = {
  engineering: Cloud,
  linguistics: Languages,
  creativity: Palette,
};

const pillarAccents: Record<string, string> = {
  engineering: 'text-blue-400',
  linguistics: 'text-accent-400',
  creativity: 'text-rose-400',
};

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.about[language];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-400 mb-8"
        >
          <span className="font-display italic text-sm">02</span>
          <span className="h-px w-8 bg-accent-400/50" />
          About
        </motion.div>

        {/* Big section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 max-w-4xl"
        >
          Three pillars,{' '}
          <span className="italic text-accent-300">one identity.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif-jp text-base md:text-lg text-slate-300 max-w-2xl mb-24"
        >
          {t.sectionSubtitle}
        </motion.p>

        {/* Pillars - vertical manifesto */}
        <div className="space-y-20 md:space-y-28">
          {t.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.id];
            const accentClass = pillarAccents[pillar.id];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left: number + icon */}
                <div className="lg:col-span-4 flex items-start gap-6">
                  <span
                    className={`font-display text-[10rem] lg:text-[14rem] leading-[0.8] text-outline ${accentClass}`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon
                    className={`w-8 h-8 mt-4 ${accentClass}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Right: content */}
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.3em] ${accentClass} mb-3`}
                    >
                      {pillar.subtitle}
                    </p>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="font-serif-jp text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    {pillar.description}
                  </p>

                  {/* Highlights - inline list */}
                  <ul className="pt-4 space-y-2 border-t border-slate-800 max-w-2xl">
                    {pillar.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-4 py-2 text-slate-300 hover:text-slate-200 transition-colors"
                      >
                        <span
                          className={`font-display italic text-sm ${accentClass}`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-sm md:text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
