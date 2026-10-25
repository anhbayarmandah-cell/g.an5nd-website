import React from 'react';
import { 
  Eye, 
  TrendingUp, 
  MessageCircle, 
  Users, 
  Instagram, 
  Play, 
  Heart, 
  Share2, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { instagramStats, instagramReelsWorks } from '../data/portfolioData';

export const InstagramStatsSection: React.FC = () => {
  const getStatIcon = (name: string) => {
    switch (name) {
      case 'Eye':
        return <Eye className="w-5 h-5 text-pink-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-sky-500" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/30 text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>Инстаграм дата & Үзүүлэлт</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Миний бүтээлүүд & Хандалт
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Instagram <span className="font-bold text-pink-600 dark:text-pink-400">@g.an5nd</span> сувгийн Reels контентуудын бодит хүртээмж, үзэлт болон үзэгчдийн идэвхжүүлэлтийн тоон үзүүлэлтүүд.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <a
            href="https://instagram.com/g.an5nd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/20 transition-all cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>@g.an5nd профайл нээх</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {instagramStats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800">
                {getStatIcon(stat.icon)}
              </div>
              {stat.change && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300">
                  {stat.change}
                </span>
              )}
            </div>

            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              {stat.value}
            </div>
            
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              {stat.label}
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Sample Reels Works Grid with Real Stats */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Шилдэг Reels бүтээлүүд ба хандалтын тоо</span>
          </h3>
          <span className="text-xs text-slate-500">Шууд үзэх боломжтой</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {instagramReelsWorks.map((work) => (
            <a
              key={work.id}
              href={work.videoUrl || 'https://instagram.com/g.an5nd'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-pink-300 dark:hover:border-pink-800 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-decoration-none"
            >
              {/* Image Preview with Play button */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />

                {/* Badge top */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-pink-600/90 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                    {work.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                  <ExternalLink className="w-4 h-4" />
                </div>

                {/* Big Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-pink-600 transition-all shadow-xl">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay with Real Stats */}
                <div className="absolute bottom-4 inset-x-4 z-10 text-white">
                  <span className="text-[11px] font-mono uppercase text-pink-300 font-semibold tracking-wider block mb-1">
                    {work.theme}
                  </span>
                  <h4 className="text-base font-bold text-white line-clamp-2 mb-3 leading-snug">
                    {work.title}
                  </h4>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-4 gap-1 p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                    <div>
                      <span className="text-[10px] text-slate-300 block">Үзэлт</span>
                      <strong className="text-xs font-black text-amber-300">{work.views}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-300 block">Таалагдсан</span>
                      <strong className="text-xs font-bold text-white">{work.likes}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-300 block">Сэтгэгдэл</span>
                      <strong className="text-xs font-bold text-white">{work.comments}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-300 block">Share</span>
                      <strong className="text-xs font-bold text-white">{work.shares}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hook text info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium italic">
                    💡 Hook: {work.hook}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Instagram Reels дээр үзэх</span>
                  <span className="text-pink-600 dark:text-pink-400 font-bold group-hover:underline">Нээх →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};
