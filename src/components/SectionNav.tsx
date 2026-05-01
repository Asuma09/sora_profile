/**
 * SectionNav.tsx - 縦ドットナビゲーション（デスクトップのみ）
 *
 * 画面右端に現在のセクションを示すドットインジケーターを表示。
 * クリックで該当セクションへスクロール。
 */

import { useEffect, useState } from 'react';

const sections = [
  { id: 'profile', num: '01', label: 'Profile' },
  { id: 'about', num: '02', label: 'About' },
  { id: 'history', num: '03', label: 'History' },
  { id: 'skills', num: '04', label: 'Skills' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'goals', num: '06', label: 'Goals' },
];

const SectionNav: React.FC = () => {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-5">
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span
              className={`font-display italic text-xs transition-all duration-300 ${
                isActive
                  ? 'opacity-100 text-accent-400 translate-x-0'
                  : 'opacity-0 text-slate-300 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {section.num} · {section.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-2.5 bg-accent-400'
                  : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-slate-400'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default SectionNav;
