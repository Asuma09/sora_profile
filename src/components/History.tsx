/**
 * History.tsx - 履歴・経歴セクションコンポーネント
 * 
 * このコンポーネントは教育、キャリア、学習経歴などを
 * タイムライン形式で表示します。
 * 
 * 主な機能:
 * - タイムラインレイアウト（レスポンシブ対応）
 * - 年号、タイトル、説明の表示
 * - スクロール連動のアニメーション
 * - 交互配置でビジュアル化
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

/**
 * History - 履歴・経歴セクションコンポーネント
 * 
 * @description 教育・キャリア経歴をタイムライン形式で表示
 * 
 * @returns {JSX.Element} Historyセクション要素
 */
const History: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.history?.[language] || {
    sectionTitle: 'History',
    sectionTitleAccent: 'Timeline',
    sectionSubtitle: 'My Journey',
    items: [],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-900/50" id="history">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest text-blue-400 mb-4"
          >
            {t.sectionSubtitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t.sectionTitle}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.sectionTitleAccent}
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {t.items?.map((item: any, index: number) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Content */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    {/* Year/Period */}
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={18} className="text-blue-400" />
                      <span className="text-sm text-blue-400 font-semibold uppercase tracking-wide">
                        {item.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                    {/* Category/Type */}
                    {item.category && (
                      <p className="text-sm text-gray-400 mb-3">{item.category}</p>
                    )}

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {item.highlights.map((highlight: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                            <Award size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex md:w-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900 ring-offset-4 ring-offset-blue-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
