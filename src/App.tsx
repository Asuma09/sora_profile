/**
 * App.tsx - メインアプリケーションコンポーネント
 * 
 * このファイルはReactアプリケーションのエントリーポイントであり、
 * 全体のレイアウト構成と言語切り替え機能を管理します。
 * 
 * 主な機能:
 * - LanguageContext: アプリ全体で言語設定を共有するためのContext API
 * - 各セクションコンポーネントの配置と構成
 */

import { useState, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import About from './components/About';
import History from './components/History';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GoalTracker from './components/GoalTracker';
import Footer from './components/Footer';

/**
 * LanguageContext - 言語設定を管理するContext
 * 
 * @description React Context APIを使用して、アプリケーション全体で
 *              言語設定（日本語/英語）を共有します。
 *              子コンポーネントはuseContext(LanguageContext)で
 *              現在の言語とsetLanguage関数にアクセスできます。
 * 
 * @property {('ja' | 'en')} language - 現在選択されている言語コード
 *           'ja': 日本語, 'en': 英語
 * @property {function} setLanguage - 言語を切り替えるための関数
 */
export const LanguageContext = createContext<{
  language: 'ja' | 'en';
  setLanguage: (lang: 'ja' | 'en') => void;
}>({
  language: 'ja',
  setLanguage: () => {},
});

/**
 * App - ルートコンポーネント
 * 
 * @description アプリケーション全体の構造を定義し、
 *              LanguageContextを提供して子コンポーネントに
 *              言語設定を伝播します。
 * 
 * @returns {JSX.Element} レンダリングされたアプリケーション
 */
const App: React.FC = () => {
  /**
   * useState - 言語状態管理フック
   * 
   * @description 現在の言語設定を保持し、初期値は'ja'（日本語）
   *              setLanguageで'ja'または'en'に切り替え可能
   */
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>
          <Hero />
          <Profile />
          <About />
          <History />
          <Skills />
          <Projects />
          <GoalTracker />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
