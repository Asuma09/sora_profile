/**
 * Hero.tsx - ヒーローセクションコンポーネント
 * 
 * このコンポーネントはページのファーストビューとなる
 * メインビジュアルセクションを提供します。
 * 
 * 主な機能:
 * - ダイナミックなグラデーション背景アニメーション
 * - 浮遊する光の粒子エフェクト
 * - タイトル・サブタイトル・説明文の表示
 * - スキルキーワードのタグ表示
 * - スクロールインジケーター
 * 
 * アニメーション:
 * - Framer Motionによるスムーズなフェードイン
 * - 背景の光球が緩やかに移動
 * - アイコンのスプリングアニメーション
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Sparkles } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

/**
 * iconComponents - ヒーローセクションに表示するアイコン設定
 * 
 * @description 3つの柱（Technology, Language, Creativity）を
 *              象徴するアイコンとその表示遅延時間を定義
 * @property {LucideIcon} Icon - 表示するアイコンコンポーネント
 * @property {number} delay - アニメーション開始までの遅延（秒）
 */
const iconComponents = [
  { Icon: Code2, delay: 0.2 },      // Technology（コード）
  { Icon: Globe, delay: 0.4 },      // Language（グローバル）
  { Icon: Sparkles, delay: 0.6 },   // Creativity（創造性）
];

/**
 * Hero - ヒーローセクションコンポーネント
 * 
 * @description 画面全体を使ったインパクトのあるファーストビュー。
 *              背景アニメーション、タイトル、キーワードタグを表示。
 * 
 * @returns {JSX.Element} ヒーローセクション要素
 */
const Hero: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.hero[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30" />
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '-10%',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-l from-blue-500/15 to-transparent rounded-full blur-3xl"
          style={{
            top: '10%',
            right: '-10%',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            marginLeft: '-160px',
            marginTop: '-160px',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {iconComponents.map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, type: 'spring', stiffness: 200 }}
              className="p-4 bg-blue-600/10 rounded-xl border border-blue-500/20 backdrop-blur-sm"
            >
              <Icon className="w-8 h-8 text-blue-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-2 sm:mb-4 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-slate-400 mb-6 sm:mb-8 mx-auto leading-relaxed text-center max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {t.description}
        </motion.p>

        {/* Keywords */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {t.keywords.map((keyword, index) => (
            <motion.span
              key={keyword}
              className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
