import { useState, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GoalTracker from './components/GoalTracker';
import Footer from './components/Footer';

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
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>
          <Hero />
          <About />
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
