import React, { useState } from 'react';
import { ExternalLink, Tag, Calendar, Layers, Sparkles, FolderGit2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { formatNetlifyUrl } from '../utils/urlHelper';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  netlifySubdomain: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  netlifySubdomain,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Бүгд');

  // Категорийн жагсаалт гаргах
  const categories = ['Бүгд', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'Бүгд'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Портфолио төслүүд</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Миний бүтээлүүд
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Бүтээл бүрийн карт дээр дарж тусдаа шинэ цонхонд шууд нээн үзэх боломжтой.
            Холбоосууд <span className="font-mono text-sky-600 dark:text-sky-400 font-medium">https://{netlifySubdomain}.netlify.app/</span> хаягтай уялдан нээгдэнэ.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 mt-6 md:mt-0 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: Нэгдсэн массив (Array)-аар гүйж карт бүрийг үүсгэнэ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          const finalProjectUrl = formatNetlifyUrl(project.url, netlifySubdomain);
          const finalImageUrl = formatNetlifyUrl(project.image, netlifySubdomain);

          return (
            <a
              key={project.id}
              href={finalProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)] hover:border-sky-300/60 dark:hover:border-sky-500/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-decoration-none"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={finalImageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badges on top */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-slate-800 dark:text-white shadow-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" />
                      Онцлох
                    </span>
                  )}
                </div>

                {/* External link action icon button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-slate-800 dark:text-white group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-sm">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>

                {/* Year tag at bottom right */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Link URL preview */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* URL path hint */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    <span className="truncate max-w-[220px]">
                      {finalProjectUrl.replace(/^https?:\/\//, '')}
                    </span>
                    <span className="text-sky-500 font-semibold group-hover:underline flex items-center gap-1">
                      Шинэ цонхонд нээх →
                    </span>
                  </div>
                </div>

              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
