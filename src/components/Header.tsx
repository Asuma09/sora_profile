/**
 * Header.tsx - ヘッダーナビゲーションコンポーネント
 * 
 * このコンポーネントは画面上部に固定表示されるナビゲーションヘッダーを提供します。
 * 
 * 主な機能:
 * - スクロール検知による背景色の変化（透明 → 半透明ブラー効果）
 * - デスクトップ・モバイル両対応のレスポンシブナビゲーション
 * - 言語切り替えボタン（日本語/英語）
 * - Framer Motionによるアニメーション効果
 * 
 * 使用ライブラリ:
 * - framer-motion: スムーズなアニメーション
 * - lucide-react: アイコン（Menu, X, Code2）
 */

import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

/**
 * Header - ナビゲーションヘッダーコンポーネント
 * 
 * @description 固定ヘッダーを表示し、スクロール位置に応じて
 *              背景スタイルを動的に変更します。
 *              モバイル表示ではハンバーガーメニューを提供。
 * 
 * @returns {JSX.Element} ヘッダー要素
 */
const Header: React.FC = () => {
  /**
   * isScrolled - スクロール状態を管理
   * true: 50px以上スクロールされた状態（背景色を変更）
   * false: ページ上部（透明背景）
   */
  const [isScrolled, setIsScrolled] = useState(false);
  
  /**
   * isMobileMenuOpen - モバイルメニューの開閉状態
   * true: メニュー展開中, false: メニュー閉じている
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  /**
   * LanguageContextから言語設定を取得
   * language: 現在の言語, setLanguage: 言語変更関数
   */
  const { language, setLanguage } = useContext(LanguageContext);
  
  /** 現在の言語に対応する翻訳テキストを取得 */
  const t = translations.header[language];

  /**
   * navItems - ナビゲーションメニュー項目の配列
   * 各項目にはラベルとアンカーリンクが設定されている
   */
  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.history, href: '#history' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.goals, href: '#goals' },
  ];

  /**
   * useEffect - スクロールイベントリスナーの設定
   * 
   * @description コンポーネントマウント時にスクロールイベントを監視し、
   *              50px以上スクロールされたらisScrolledをtrueに設定。
   *              クリーンアップ関数でイベントリスナーを解除。
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white font-bold text-base sm:text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            <span className="hidden sm:inline">Portfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors text-xs sm:text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-slate-700 rounded-lg p-1">
              <motion.button
                onClick={() => setLanguage('ja')}
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded transition-all ${
                  language === 'ja'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                日本語
              </motion.button>
              <motion.button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                English
              </motion.button>
            </div>
            <motion.a
              href="https://instagram.com/sora051209/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Instagram
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
          >
            <nav className="flex flex-col px-3 sm:px-4 py-3 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 sm:py-3 px-3 sm:px-4 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Language Switcher Mobile */}
              <div className="mt-3 flex gap-2 px-3 sm:px-4 py-2 sm:py-3">
                <button
                  onClick={() => {
                    setLanguage('ja');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 text-sm font-medium rounded transition-all ${
                    language === 'ja'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 text-sm font-medium rounded transition-all ${
                    language === 'en'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
              <a
                href="https://instagram.com/sora051209/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white text-center text-sm font-medium rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Instagram
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
