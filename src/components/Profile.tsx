/**
 * Profile.tsx - プロフィールセクションコンポーネント
 * 
 * このコンポーネントはヒーローとAboutセクションの間に表示される
 * プロフィール情報セクションを提供します。
 * 
 * 主な機能:
 * - プロフィール画像の表示
 * - 基本情報（名前、タイトル、所在地など）の表示
 * - 言語対応のプロフィール説明
 * - スクロール連動のアニメーション
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

/**
 * Profile - プロフィールセクションコンポーネント
 * 
 * @description ユーザーの基本プロフィール情報を表示する
 *              セクション（Hero と About の間に配置）
 * 
 * @returns {JSX.Element} プロフィールセクション要素
 */
const Profile: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.profile?.[language] || {
    title: 'Profile',
    name: 'Your Name',
    title_position: 'Your Position',
    location: 'Your Location',
    bio: 'Your bio here',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="profile"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-b from-yellow-200 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300" />
              <img
                src="https://res.cloudinary.com/dh2oukvu9/image/upload/v1769665682/%E8%A2%AB%E5%86%99%E4%BD%93_ohcgx2.png"
                alt="Profile"
                className="relative w-full h-full rounded-2xl object-contain border-2 border-slate-700 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            className="flex-1 w-full text-center md:text-left"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {t.name}
            </motion.h2>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 text-blue-300 mb-4"
              variants={itemVariants}
            >
              <Briefcase size={18} sm={{ size: 20 }} className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" />
              <span className="text-base sm:text-lg">{t.title_position}</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 text-slate-400 mb-6"
              variants={itemVariants}
            >
              <MapPin size={18} sm={{ size: 20 }} className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" />
              <span className="text-sm sm:text-base">{t.location}</span>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed px-2 sm:px-0"
              variants={itemVariants}
            >
              {t.bio}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto"
              >
                {language === 'ja' ? 'プロジェクトを見る' : 'View Projects'}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </div>
    </motion.section>
  );
};

export default Profile;
