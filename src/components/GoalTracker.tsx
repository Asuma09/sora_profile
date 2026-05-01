/**
 * GoalTracker.tsx - 目標トラッカーセクション
 *
 * Editorial風: 枠なしで大型の進捗数値 + マイルストーンリスト。
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Languages, Cloud, CheckCircle2, Circle, LucideIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const goalIcons: Record<string, LucideIcon> = {
  'french-cert': Languages,
  'aws-cert': Cloud,
};

const GoalTracker: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.goals[language];

  return (
    <section id="goals" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-400 mb-8"
        >
          <span className="font-display italic text-sm">06</span>
          <span className="h-px w-8 bg-accent-400/50" />
          Goals
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 max-w-4xl"
        >
          What's{' '}
          <span className="italic text-accent-300">next.</span>
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

        {/* Goals */}
        <div className="space-y-16">
          {t.items.map((goal, goalIndex) => {
            const Icon = goalIcons[goal.id];
            const completedCount = goal.milestones.filter((m) => m.completed).length;

            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: goalIndex * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-slate-800 pt-12"
              >
                {/* Progress number */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-[7rem] lg:text-[9rem] leading-[0.8] text-white tracking-tight">
                      {goal.progress}
                    </span>
                    <span className="font-display text-3xl text-accent-400">%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                    <span>{t.target}: {goal.deadline}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 h-px bg-slate-800 relative">
                    <motion.div
                      className="absolute top-0 left-0 h-px bg-accent-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl text-white leading-tight mb-2">
                      {goal.title}
                    </h3>
                    <p className="font-display italic text-accent-300">
                      {goal.titleJa}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-accent-400 mb-3">
                      {t.milestones} · {completedCount}/{goal.milestones.length}
                    </p>
                    <ul className="space-y-1">
                      {goal.milestones.map((milestone, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-4 py-2 border-b border-slate-800"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                        >
                          {milestone.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" strokeWidth={1.5} />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" strokeWidth={1.5} />
                          )}
                          <span
                            className={`font-serif-jp text-sm md:text-base ${
                              milestone.completed
                                ? 'text-slate-400 line-through'
                                : 'text-slate-300'
                            }`}
                          >
                            {milestone.label}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoalTracker;
