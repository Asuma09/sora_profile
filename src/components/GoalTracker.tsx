/**
 * GoalTracker.tsx - 目標トラッカーセクションコンポーネント
 * 
 * このコンポーネントは現在取り組んでいる目標と
 * その進捗状況を視覚的に表示します。
 * 
 * 主な機能:
 * - 目標カードの2カラムグリッド表示
 * - プログレスバーによる進捗率の可視化
 * - マイルストーンのチェックリスト表示
 * - 目標期限の表示
 * - カラーテーマ（青/オレンジ）による視覚的区別
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Target, Languages, Cloud, CheckCircle2, Circle, LucideIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

/**
 * goalIcons - 目標IDとアイコンのマッピング
 * 
 * @description 各目標に対応するLucideアイコンを定義
 *              翻訳データのgoal.idと一致させる
 */
const goalIcons: Record<string, LucideIcon> = {
  'french-cert': Languages,  // 仏検 → 言語アイコン
  'aws-cert': Cloud,         // AWS認定 → クラウドアイコン
};

/**
 * GoalTracker - 目標トラッカーコンポーネント
 * 
 * @description 目標と進捗状況をカード形式で表示
 *              各目標にはプログレスバーとマイルストーンリストを含む
 * 
 * @returns {JSX.Element} 目標トラッカーセクション要素
 */
const GoalTracker: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.goals[language];

  return (
    <section id="goals" className="py-24 px-4 bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.sectionTitle} <span className="text-blue-400">{t.sectionTitleAccent}</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* Goals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((goal, goalIndex) => {
            const IconComponent = goalIcons[goal.id];
            const completedCount = goal.milestones.filter((m) => m.completed).length;
            
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: goalIndex * 0.2 }}
                className="group"
              >
                <div className="h-full p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        goal.color === 'blue'
                          ? 'bg-blue-600/10'
                          : 'bg-orange-600/10'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent
                        className={`w-7 h-7 ${
                          goal.color === 'blue' ? 'text-blue-400' : 'text-orange-400'
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-sm text-slate-400">{goal.titleJa}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-400">
                        {goal.progress}%
                      </span>
                      <p className="text-xs text-slate-500">{t.target}: {goal.deadline}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          goal.color === 'blue'
                            ? 'bg-gradient-to-r from-blue-600 to-blue-400'
                            : 'bg-gradient-to-r from-orange-600 to-orange-400'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>{t.start}</span>
                      <span>{completedCount}/{goal.milestones.length} {t.milestonesComplete}</span>
                      <span>{t.achieved}</span>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-slate-300 mb-3">
                      {t.milestones}
                    </h4>
                    {goal.milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {milestone.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            milestone.completed
                              ? 'text-slate-300 line-through'
                              : 'text-slate-400'
                          }`}
                        >
                          {milestone.label}
                        </span>
                      </motion.div>
                    ))}
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
