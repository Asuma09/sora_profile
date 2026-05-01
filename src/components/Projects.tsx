/**
 * Projects.tsx - プロジェクトセクション
 *
 * Editorial風マガジングリッド: 1枚大 + 残り小サイズ。
 * 枠線のカードを排除し、番号付きの大型タイポで表現。
 */

import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Chrome,
  Cloud,
  ExternalLink,
  X,
  LucideIcon,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const projectIcons: Record<string, LucideIcon> = {
  'chrome-extension': Chrome,
  'aws-study': Cloud,
  'tango-app': BookOpen,
};

const statusLabelColors: Record<string, string> = {
  completed: 'text-green-400',
  'in-progress': 'text-accent-400',
  planned: 'text-slate-400',
};

type ProjectItem = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  url?: string;
  tags: string[];
  status: string;
  highlights: string[];
};

const Projects: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.projects[language];
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const items = t.items as ProjectItem[];
  const [featured, ...rest] = items;

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-400 mb-8"
        >
          <span className="font-display italic text-sm">05</span>
          <span className="h-px w-8 bg-accent-400/50" />
          Projects
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 max-w-4xl"
        >
          Things{' '}
          <span className="italic text-accent-300">I've built.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif-jp text-base md:text-lg text-slate-300 max-w-2xl mb-20"
        >
          {t.sectionSubtitle}
        </motion.p>

        {/* Featured project */}
        {featured && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedProject(featured.id)}
            className="group block w-full text-left mb-20 md:mb-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-800 pb-12">
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="font-display italic text-accent-400 text-sm block mb-2">
                  Featured · 01
                </span>
                <span className="font-display text-[10rem] leading-[0.8] text-outline text-white/80">
                  01
                </span>
              </div>

              {/* Title + description */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs uppercase tracking-[0.2em] ${statusLabelColors[featured.status]}`}
                  >
                    ● {t.status[featured.status as keyof typeof t.status]}
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-6xl text-white leading-[1.02] mb-4 group-hover:text-accent-400 transition-colors">
                  {featured.title}
                </h3>
                <p className="font-serif-jp text-lg text-slate-300 max-w-xl leading-relaxed">
                  {featured.description}
                </p>
              </div>

              {/* CTA */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <div className="inline-flex items-center gap-2 text-slate-300 group-hover:text-accent-400 transition-colors">
                  <span className="font-display italic">
                    {t.viewMore}
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </motion.button>
        )}

        {/* Rest of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {rest.map((project, idx) => {
            const Icon = projectIcons[project.id];
            return (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                className="group text-left"
              >
                {/* Number */}
                <span className="font-display italic text-accent-400 text-sm block mb-3">
                  0{idx + 2}
                </span>

                {/* Icon + status */}
                <div className="flex items-center justify-between mb-4">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-slate-300 group-hover:text-accent-400 transition-colors"
                      strokeWidth={1.5}
                    />
                  )}
                  <span
                    className={`text-xs uppercase tracking-[0.2em] ${statusLabelColors[project.status]}`}
                  >
                    ● {t.status[project.status as keyof typeof t.status]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl md:text-4xl text-white leading-tight mb-3 group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-serif-jp text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-3">
                      {i > 0 && <span className="text-slate-700">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-slate-900 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.96, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {items.map((project) => {
                  if (project.id !== selectedProject) return null;
                  const Icon = projectIcons[project.id];

                  return (
                    <div key={project.id} className="p-8 md:p-12">
                      {/* Close */}
                      <div className="flex justify-end mb-6">
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-slate-800 transition-colors"
                          aria-label="Close"
                        >
                          <X className="w-5 h-5 text-slate-300" />
                        </button>
                      </div>

                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        {Icon && (
                          <Icon className="w-8 h-8 text-accent-400" strokeWidth={1.5} />
                        )}
                        <span
                          className={`text-xs uppercase tracking-[0.2em] ${statusLabelColors[project.status]}`}
                        >
                          ● {t.status[project.status as keyof typeof t.status]}
                        </span>
                      </div>

                      <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-2">
                        {project.title}
                      </h2>
                      <p className="font-display italic text-accent-300 mb-8">
                        {project.titleJa}
                      </p>

                      {/* Overview */}
                      <div className="mb-8">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent-400 mb-3">
                          {t.overview}
                        </p>
                        <p className="font-serif-jp text-base md:text-lg text-slate-300 leading-[1.9]">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent-400 mb-4">
                          {t.features}
                        </p>
                        <ul className="space-y-2 border-t border-slate-800">
                          {project.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-baseline gap-4 py-3 border-b border-slate-800 text-slate-300"
                            >
                              <span className="font-display italic text-accent-400 text-sm">
                                0{idx + 1}
                              </span>
                              <span className="font-serif-jp">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech */}
                      <div className="mb-8">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent-400 mb-4">
                          {t.technologies}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-300">
                          {project.tags.map((tag, i) => (
                            <span key={tag} className="flex items-center gap-4">
                              {i > 0 && <span className="text-slate-700">·</span>}
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* URL */}
                      {project.url && (
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-accent-400 mb-3">
                            {t.link}
                          </p>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-white border-b border-accent-400 pb-1 hover:gap-3 transition-all"
                          >
                            <span className="font-display italic">{project.url}</span>
                            <ExternalLink className="w-4 h-4 text-accent-400" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
