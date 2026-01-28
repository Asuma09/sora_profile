import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Chrome,
  Cloud,
  ExternalLink,
  X,
  LucideIcon,
} from 'lucide-react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const projectIcons: Record<string, LucideIcon> = {
  'chrome-extension': Chrome,
  'aws-study': Cloud,
};

const statusColors: Record<string, string> = {
  completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  'in-progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  planned: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Projects: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations.projects[language];
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-4 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.sectionTitle} <span className="text-blue-400">{t.sectionTitleAccent}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {t.items.map((project) => {
            const IconComponent = projectIcons[project.id];
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="h-full p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-blue-500/20"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-7 h-7 text-blue-400" />
                    </motion.div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}
                    >
                      {t.status[project.status as keyof typeof t.status]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-4">{project.titleJa}</p>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="w-1 h-1 bg-blue-400 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View more indicator */}
                  <motion.div
                    className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    {t.viewMore}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl border border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {t.items.map((project) => {
                  if (project.id !== selectedProject) return null;
                  const IconComponent = projectIcons[project.id];

                  return (
                    <div key={project.id} className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center">
                              <IconComponent className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-white mb-1">
                                {project.title}
                              </h2>
                              <p className="text-blue-400 font-medium">
                                {project.titleJa}
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <X className="w-6 h-6 text-slate-400" />
                        </button>
                      </div>

                      {/* Status */}
                      <div className="mb-6">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}
                        >
                          {t.status[project.status as keyof typeof t.status]}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {t.overview}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {t.features}
                        </h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 text-slate-300"
                            >
                              <motion.span
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {t.technologies}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              className="px-3 py-1 text-sm bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ type: 'spring', stiffness: 200 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Close button */}
                      <motion.button
                        onClick={() => setSelectedProject(null)}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t.close}
                      </motion.button>
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
