/**
 * BackgroundText.tsx - ページ全体に散りばめる背景タイポグラフィ
 *
 * bungosd.com ライクな詩的な背景レイヤー。
 * ページの絶対配置レイヤーとして全セクションにまたがり、
 * 巨大な日英の活字を薄く散らし、ゆっくり漂わせる。
 */

import { motion } from 'framer-motion';

type Word = {
  text: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  rotate: number;
  italic?: boolean;
  outline?: boolean;
  font: 'display' | 'serif-jp';
};

const words: Word[] = [
  // Hero帯
  { text: '言葉', top: '6vh', left: '-2%', size: 'text-[22vw] md:text-[14rem]', rotate: -4, font: 'serif-jp', outline: true },
  { text: 'Verse', top: '28vh', right: '4%', size: 'text-[9vw] md:text-[6rem]', rotate: 6, font: 'display', italic: true },

  // Profile帯
  { text: '対話', top: '80vh', left: '55%', size: 'text-[18vw] md:text-[12rem]', rotate: 5, font: 'serif-jp' },
  { text: 'Curiosity.', top: '108vh', left: '-2%', size: 'text-[8vw] md:text-[5.5rem]', rotate: -8, font: 'display', italic: true, outline: true },

  // About帯
  { text: '創造', top: '150vh', right: '-2%', size: 'text-[22vw] md:text-[15rem]', rotate: 3, font: 'serif-jp', outline: true },
  { text: 'Craft', top: '180vh', left: '8%', size: 'text-[10vw] md:text-[7rem]', rotate: -5, font: 'display', italic: true },
  { text: '橋渡し', top: '215vh', left: '60%', size: 'text-[14vw] md:text-[10rem]', rotate: 7, font: 'serif-jp' },

  // History帯
  { text: '旅路', top: '260vh', left: '-3%', size: 'text-[24vw] md:text-[16rem]', rotate: -6, font: 'serif-jp', outline: true },
  { text: 'Chapters.', top: '300vh', right: '6%', size: 'text-[9vw] md:text-[6rem]', rotate: 4, font: 'display', italic: true },
  { text: '令和', top: '355vh', left: '48%', size: 'text-[20vw] md:text-[13rem]', rotate: -3, font: 'serif-jp' },

  // Skills帯
  { text: '技術', top: '430vh', right: '-4%', size: 'text-[22vw] md:text-[15rem]', rotate: 5, font: 'serif-jp', outline: true },
  { text: 'Discipline', top: '470vh', left: '4%', size: 'text-[8vw] md:text-[5.5rem]', rotate: -7, font: 'display', italic: true },

  // Projects帯
  { text: '制作', top: '540vh', left: '58%', size: 'text-[18vw] md:text-[12rem]', rotate: 6, font: 'serif-jp', outline: true },
  { text: 'Things I built.', top: '580vh', left: '-2%', size: 'text-[9vw] md:text-[6rem]', rotate: -4, font: 'display', italic: true },

  // Goals帯
  { text: '未来', top: '660vh', right: '-2%', size: 'text-[22vw] md:text-[15rem]', rotate: -5, font: 'serif-jp' },
  { text: "What's next.", top: '710vh', left: '6%', size: 'text-[9vw] md:text-[6rem]', rotate: 5, font: 'display', italic: true, outline: true },
];

const fontClass = (f: Word['font']) => (f === 'display' ? 'font-display' : 'font-serif-jp');

const BackgroundText: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
    >
      {words.map((w, i) => {
        const duration = 9 + (i % 5) * 1.3;
        const drift = 14 + (i % 4) * 4;
        const sway = 6 + (i % 3) * 3;
        const baseStyle = w.outline
          ? {
              WebkitTextStroke: '1.5px rgba(251, 191, 36, 0.22)',
              color: 'transparent',
            }
          : { color: 'rgba(248, 250, 252, 0.09)' };

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, rotate: w.rotate }}
            animate={{
              opacity: 1,
              rotate: [w.rotate - 1.5, w.rotate + 1.5, w.rotate - 1.5],
              y: [0, -drift, 0],
              x: [0, sway * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              opacity: { duration: 2, delay: i * 0.15 },
              rotate: {
                duration: duration * 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              },
              y: {
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              },
              x: {
                duration: duration * 1.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              },
            }}
            style={{
              top: w.top,
              left: w.left,
              right: w.right,
              willChange: 'transform',
              ...baseStyle,
            }}
            className={`absolute ${fontClass(w.font)} ${w.italic ? 'italic' : ''} ${w.size} whitespace-nowrap leading-none tracking-tight`}
          >
            {w.text}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BackgroundText;
