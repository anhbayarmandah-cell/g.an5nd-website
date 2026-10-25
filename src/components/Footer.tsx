import React from 'react';
import { ArrowUp, Instagram, Phone, Mail, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top / Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-base shadow-md shadow-pink-500/20">
              A
            </div>
            <div>
              <p className="text-base font-extrabold text-slate-900 dark:text-white">
                Ананд — Instagram Reels & Маркетинг
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                16 настай · Утас: 88712038 · {profileData.email}
              </p>
            </div>
          </div>

          {/* Social / Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://instagram.com/g.an5nd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300 text-xs font-bold hover:bg-pink-100 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram: @g.an5nd</span>
            </a>

            <a
              href="tel:88712038"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>88712038</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profileData.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 hover:border-pink-300 transition-all shadow-sm flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Хуудасны эхлэл рүү очих"
            >
              <span>Дээш очих</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ХЭРЭГЛЭГЧИЙН ШААРДЛАГА: Хамгийн доор нь "Your vision, my creativity. our impact" уриа үгийг байршуулах */}
        <div className="pt-10 border-t border-slate-200/60 dark:border-slate-800/80 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 text-[11px] font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-pink-500" />
            <span>Collab Slogan</span>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-300 dark:to-indigo-300 select-all">
            Your vision, my creativity. our impact.
          </h3>

          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Ананд (@g.an5nd). Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>

      </div>
    </footer>
  );
};
