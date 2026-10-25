import React from 'react';
import { User, Sparkles, Clock, HeartHandshake, Zap, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { aboutAnandData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
          <User className="w-3.5 h-3.5" />
          <span>Танилцуулга</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Миний тухай
        </h2>
        
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Намайг Ананд гэдэг, би 16 настай. Инстаграм дээр богино бичлэг, Reels хийдэг контент бүтээгч бөгөөд хүмүүст бичлэгээ сонирхолтой, хөгжилтэй (fun) байдлаар хүргэхийг зорьдог.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Quick Persona Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-indigo-500 p-0.5 shadow-lg shadow-pink-500/20">
                <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-2xl font-extrabold text-white">
                  A
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Ананд</h3>
                <p className="text-pink-400 text-sm font-semibold flex items-center gap-1.5 mt-0.5">
                  <span>16 настай</span>
                  <span>·</span>
                  <span>Instagram Creator (@g.an5nd)</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
              <p className="p-4 rounded-2xl bg-white/5 border border-white/10">
                "Би аливаа контентыг үзэгчдэд хүргэхдээ уйтгартай, хэт албаны байхаас зайлсхийдэг. Хүмүүс бичлэгийг үзээд инээмсэглэж, найзууддаа хуваалцахыг хүсэх тийм л хөгжилтэй, сонирхолтой өнгө аясыг бүрдүүлдэг."
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold text-white">Цаг сайн баримталдаг</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="text-xs font-semibold text-white">Соёлтой, боловсон</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white">Сэтгэлээсээ ханддаг</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-white">Шуурхай эргэх холбоо</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Холбогдох утас: <strong className="text-white">88712038</strong></span>
            <span className="text-pink-400 font-semibold">@g.an5nd</span>
          </div>
        </div>

        {/* Right Column: Танай байгууллагатай хамтарвал юу өгч чадах вэ? (Бодит, хэтрүүлэггүй) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                Байгууллагуудад санал болгох давуу тал
              </span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
              Би танай байгууллагатай хамтарвал:
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Хэтрүүлэг, хийсвэр амлалт биш — бодит хариуцлага, залуусын амьд сонирхол дээр суурилсан хамтын ажиллагаа.
            </p>

            <div className="space-y-4">
              {aboutAnandData.whyCollaborate.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-pink-300 dark:hover:border-pink-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 italic">
              "Байгууллагынхаа өнгө төрхийг залууст сонирхолтойгоор хоногшуулаарай"
            </span>
            <a
              href="#collaboration"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 dark:text-pink-400 hover:underline"
            >
              <span>Үнийн санал & Хамтрах нөхцөл үзэх →</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
