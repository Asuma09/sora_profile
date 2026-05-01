/**
 * Skills.tsx - スキルセクション
 *
 * カテゴリマトリクス方式: スキルをカテゴリ別にグループ化し、
 * 大型のスキル名 + 小さなレベルドットで表現。カードなし。
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Languages,
  BarChart3,
  Gem,
  Layers,
  Award,
  Globe,
  LucideIcon,
} from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const skillIcons: Record<string, LucideIcon> = {
  react: Layers,
  aws: Cloud,
  french: Languages,
  r: BarChart3,
  ruby: Gem,
  vite: Globe,
  secretary: Award,
};

type Skill = {
  id: string;
  name: string;
  category: string;
  description: string;
  level: number;
};

const Skills: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.skills[language];

  // Group skills by category
  const grouped = (t.items as Skill[]).reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    },
    {}
  );
  const categoryOrder = Object.keys(grouped);

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-400 mb-8"
        >
          <span className="font-display italic text-sm">04</span>
          <span className="h-px w-8 bg-accent-400/50" />
          Skills
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 max-w-4xl"
        >
          Toolkit{' '}
          <span className="italic text-accent-300">& craft.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif-jp text-base md:text-lg text-slate-300 max-w-2xl mb-20"
        >
          {t.sectionSubtitle}
        </motion.p>

        {/* Categories */}
        <div className="space-y-16 md:space-y-20">
          {categoryOrder.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-slate-800 pt-12"
            >
              {/* Category label */}
              <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start gap-4 lg:gap-2">
                <span className="font-display italic text-accent-400 text-sm">
                  0{catIdx + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white">
                  {category}
                </h3>
              </div>

              {/* Skills in category */}
              <div className="lg:col-span-9 space-y-8">
                {grouped[category].map((skill) => {
                  const Icon = skillIcons[skill.id] ?? Award;
                  const dots = 5;
                  const filled = Math.round((skill.level / 100) * dots);

                  return (
                    <div
                      key={skill.id}
                      className="group grid grid-cols-12 gap-4 items-center py-4 hover:bg-slate-900/30 -mx-4 px-4 rounded-sm transition-colors"
                    >
                      {/* Icon */}
                      <div className="col-span-1">
                        <Icon
                          className="w-5 h-5 text-slate-300 group-hover:text-accent-400 transition-colors"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Name + description */}
                      <div className="col-span-11 md:col-span-7">
                        <h4 className="font-display text-2xl md:text-3xl text-white leading-none mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-slate-300 font-serif-jp">
                          {skill.description}
                        </p>
                      </div>

                      {/* Level dots */}
                      <div className="col-span-12 md:col-span-4 flex items-center gap-3 md:justify-end">
                        <div className="flex gap-1.5">
                          {Array.from({ length: dots }).map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                              className={`block w-2 h-2 rounded-full ${
                                i < filled ? 'bg-accent-400' : 'bg-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-display italic text-accent-300 text-sm w-10 text-right">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
