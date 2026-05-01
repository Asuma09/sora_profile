/**
 * Profile.tsx - プロフィールセクション
 *
 * Editorial風: 左に大型ポートレート、右に情報。
 * フレーム枠なし、余白と活字で階層を作る。
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Profile: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.profile?.[language] || {
    name: '',
    title_position: '',
    location: '',
    bio: '',
  };

  return (
    <section
      id="profile"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-400 mb-16"
        >
          <span className="font-display italic text-sm">01</span>
          <span className="h-px w-8 bg-accent-400/50" />
          Profile
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame offset */}
              <div className="absolute -inset-4 border border-accent-400/30 rounded-sm pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 font-display italic text-accent-400/60 text-sm">
                — portrait
              </div>

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-gradient-to-b from-amber-200 to-orange-100">
                <img
                  src="https://res.cloudinary.com/dh2oukvu9/image/upload/v1769665682/%E8%A2%AB%E5%86%99%E4%BD%93_ohcgx2.png"
                  alt="Sora Asuma"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Name */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
                {language === 'ja' ? '名前' : 'Name'}
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none">
                {t.name}
              </h2>
            </div>

            {/* Divider */}
            <div className="h-px w-16 bg-accent-400" />

            {/* Meta */}
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-base md:text-lg">{t.title_position}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-base md:text-lg">{t.location}</span>
              </div>
            </div>

            {/* Bio */}
            <p className="font-serif-jp text-base md:text-lg text-slate-300 leading-[1.9] max-w-2xl">
              {t.bio}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-white border-b border-accent-400 pb-1 hover:gap-3 transition-all"
              >
                <span className="font-display italic">
                  {language === 'ja' ? 'プロジェクトを見る' : 'See Projects'}
                </span>
                <ArrowRight className="w-4 h-4 text-accent-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
