import React from 'react';
import { Video, HeartHandshake, TrendingUp, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Video className="w-5 h-5 text-pink-500" />;
      case 1:
        return <HeartHandshake className="w-5 h-5 text-indigo-500" />;
      case 2:
      default:
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          Давуу тал & Ур чадвар
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Миний эзэмшсэн ур чадварууд
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Байгууллагуудтай хамтран ажиллахад чухал бүтээлч чадвар, өндөр хариуцлагатай ажлын хандлага болон сошиал маркетингийн мэдрэмж.
        </p>
      </div>

      {/* 3 Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div
            key={cat.title}
            className="flex flex-col justify-between p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {cat.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>
              )}

              {/* Skill Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-start mb-1 text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-slate-500 dark:text-slate-400 ml-2 shrink-0">
                        {skill.level}%
                      </span>
                    </div>

                    {skill.note && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5 mb-1.5 italic">
                        {skill.note}
                      </p>
                    )}

                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Өндөр хариуцлагатай</span>
              <span className="text-pink-500 font-bold">100% баталгаа</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
