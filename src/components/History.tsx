/**
 * History.tsx - 履歴・経歴セクション
 *
 * Editorial風: 左に超大型のセリフ年号、右にテキスト。
 * 年号がビジュアル的な主役。
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Cloud,
  Code,
  GraduationCap,
  Languages,
  LucideIcon,
} from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const historyIcons: Record<string, LucideIcon> = {
  'university-entry': GraduationCap,
  'secretary-cert': Award,
  'programming-start': Code,
  'french-cert': Languages,
  'italian-start': Languages,
  'aws-start': Cloud,
  'portfolio-development': Briefcase,
};

type HistoryItem = {
  id: string;
  period: string;
  title: string;
  category?: string;
  description: string;
  highlights?: string[];
};

/** "2024年4月" / "April 2024" / "2026年〜現在" から年だけ抽出 */
const extractYear = (period: string): string => {
  const match = period.match(/\d{4}/);
  return match ? match[0] : period.slice(0, 4);
};

/** 月部分を抽出 (なければ空) */
const extractMonth = (period: string): string => {
  const jaMatch = period.match(/(\d{1,2})月/);
  if (jaMatch) return `${jaMatch[1]}月`;
  const enMatch = period.match(
    /(January|February|March|April|May|June|July|August|September|October|November|December)/i
  );
  if (enMatch) return enMatch[1].slice(0, 3);
  if (period.includes('現在') || period.toLowerCase().includes('present')) {
    return period.match(/[〜-]\s*(現在|Present)/i)?.[1] ?? '';
  }
  return '';
};

const History: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.history?.[language] || {
    sectionTitle: 'History',
    sectionTitleAccent: 'Timeline',
    sectionSubtitle: 'My Journey',
    items: [] as HistoryItem[],
  };

  return (
    <section id="history" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-400 mb-8"
        >
          <span className="font-display italic text-sm">03</span>
          <span className="h-px w-8 bg-accent-400/50" />
          History
        </motion.div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 max-w-4xl"
        >
          A journey{' '}
          <span className="italic text-accent-300">in chapters.</span>
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

        {/* Entries - each a tall row with huge year */}
        <div className="space-y-24 md:space-y-32">
          {(t.items as HistoryItem[])?.map((item) => {
            const Icon = historyIcons[item.id] ?? Award;
            const year = extractYear(item.period);
            const month = extractMonth(item.period);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
              >
                {/* Year - huge outlined */}
                <div className="lg:col-span-5 relative">
                  <p className="font-display italic text-accent-400 text-sm mb-2 tracking-wide">
                    {month || '—'}
                  </p>
                  <h3 className="font-display text-[18vw] lg:text-[12rem] leading-[0.85] text-outline text-white/80 tracking-tight">
                    {year}
                  </h3>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 lg:pt-8 space-y-5">
                  {/* Category + icon */}
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-accent-400" strokeWidth={1.5} />
                    {item.category && (
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="font-serif-jp text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="pt-4 space-y-1 border-t border-slate-800 max-w-xl">
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-baseline gap-4 py-1.5 text-slate-300 text-sm"
                        >
                          <span className="font-display italic text-accent-400 text-xs">
                            0{idx + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default History;
