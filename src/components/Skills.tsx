/**
 * Skills.tsx - スキルセクションコンポーネント
 * 
 * このコンポーネントは技術スキルと資格を視覚的に表示します。
 * 各スキルはカードUIで表現され、習熟度をプログレスバーで示します。
 * 
 * 主な機能:
 * - グリッドレイアウトによるスキルカード表示（4列レスポンシブ）
 * - 各スキルのアイコン、カテゴリ、説明、習熟度を表示
 * - アニメーション付きプログレスバー
 * - ホバー時のスケールエフェクト
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

/**
 * skillIcons - スキルIDとアイコンのマッピング
 * 
 * @description 各スキルの識別子に対応するLucideアイコンを定義
 *              翻訳データのskill.idと一致させる必要がある
 */
const skillIcons: Record<string, LucideIcon> = {
  react: Layers,      // React → レイヤーアイコン
  aws: Cloud,         // AWS → クラウドアイコン
  french: Languages,  // フランス語 → 言語アイコン
  r: BarChart3,       // R言語 → チャートアイコン
  ruby: Gem,          // Ruby → 宝石アイコン
  vite: Globe,        // Vite → グローブアイコン
  secretary: Award,   // 秘書検定 → 賞アイコン
};

/**
 * containerVariants - スキルグリッドのアニメーション設定
 * 
 * @description staggerChildrenで子要素を0.1秒間隔で順次表示
 *              スキルカードが次々と現れる演出を実現
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // 0.1秒間隔で順次表示
    },
  },
};

/**
 * cardVariants - スキルカードのアニメーション設定
 * 
 * @description フェードイン + スケール + 上方向スライドの複合アニメーション
 *              カードが「ポップアップ」するような動きを実現
 */
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Skills - スキルセクションコンポーネント
 * 
 * @description 技術スキルと資格をカードグリッドで表示
 *              各カードには習熟度プログレスバーを含む
 * 
 * @returns {JSX.Element} スキルセクション要素
 */
const Skills: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.skills[language];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/50">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.sectionTitle} <span className="text-blue-400">{t.sectionTitleAccent}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {t.items.map((skill) => {
            const IconComponent = skillIcons[skill.id];
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="h-full p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  {/* Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-4">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{t.proficiency}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
