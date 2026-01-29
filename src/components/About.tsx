/**
 * About.tsx - 自己紹介セクションコンポーネント
 * 
 * このコンポーネントは「3つの柱」（Engineering, Linguistics, Creativity）
 * を中心とした自己紹介セクションを提供します。
 * 
 * 主な機能:
 * - 3カラムのカードレイアウト（レスポンシブ対応）
 * - 各カードに アイコン、タイトル、説明、ハイライトリストを表示
 * - スクロール連動のスタガーアニメーション
 * - ホバー時のグロー効果
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Languages, Palette, LucideIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

/**
 * pillarIcons - 各柱に対応するアイコンのマッピング
 * 
 * @description pillar.idをキーとして、対応するLucideアイコンを返す
 * @example pillarIcons['engineering'] // Cloud アイコン
 */
const pillarIcons: Record<string, LucideIcon> = {
  engineering: Cloud,       // エンジニアリング → クラウドアイコン
  linguistics: Languages,   // 言語学 → 言語アイコン
  creativity: Palette,      // クリエイティビティ → パレットアイコン
};

/**
 * containerVariants - コンテナのアニメーション設定
 * 
 * @description Framer Motionのvariants機能を使用
 *              子要素に対してstaggerChildren（順次表示）効果を適用
 * @property {object} hidden - 初期状態（非表示）
 * @property {object} visible - 表示状態（子要素を0.2秒間隔で順次表示）
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // 子要素を0.2秒間隔で順次表示
    },
  },
};

/**
 * cardVariants - 各カードのアニメーション設定
 * 
 * @description 個々のカードがフェードイン＋上方向へスライドするアニメーション
 * @property {object} hidden - 初期状態（透明、下に50px移動）
 * @property {object} visible - 表示状態（不透明、元の位置）
 */
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

/**
 * About - 自己紹介セクションコンポーネント
 * 
 * @description 3つの柱を3カラムカードで表示し、
 *              各柱の詳細情報（ハイライト）をリスト形式で示す
 * 
 * @returns {JSX.Element} Aboutセクション要素
 */
const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.about[language];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.sectionTitle} <span className="text-blue-400">{t.sectionTitleAccent}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* 3-Column grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {t.pillars.map((pillar) => {
            const IconComponent = pillarIcons[pillar.id];
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className="group relative"
              >
                <div className="h-full p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                    </motion.div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4 text-sm sm:text-base">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 text-sm sm:text-base">{pillar.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 sm:space-y-3">
                    {pillar.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
