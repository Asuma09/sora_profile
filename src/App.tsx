/**
 * App.tsx - メインアプリケーション
 *
 * レイアウト構成と言語切り替え（LanguageContext）を管理。
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
import SectionNav from './components/SectionNav';
import BackgroundText from './components/BackgroundText';

export const LanguageContext = createContext<{
  language: 'ja' | 'en';
  setLanguage: (lang: 'ja' | 'en') => void;
}>({
  language: 'ja',
  setLanguage: () => {},
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="relative min-h-screen bg-slate-950 text-white selection:bg-accent-400/30 selection:text-white overflow-x-hidden">
        <BackgroundText />
        <div className="relative z-10">
          <Header />
          <SectionNav />
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
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
