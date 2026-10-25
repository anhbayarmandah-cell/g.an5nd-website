import React from 'react';
import { ShieldAlert, ShieldCheck, Ban, CheckCircle2, AlertOctagon } from 'lucide-react';
import { ethicsPrinciples } from '../data/portfolioData';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Контентын ёс зүй & Зарчим</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Анхаарах зүйлс & Миний зарчим
        </h2>
        
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Би өөрийн үзэгч, залуусын итгэлийг хамгийн түрүүнд тавьдаг. Иймээс дараах хориотой сэдвүүд болон бүтээгдэхүүнийг <span className="font-bold text-rose-600 dark:text-rose-400">хэзээ ч сурталчлахгүй</span> гэдгийг албан ёсоор мэдэгдэж байна.
        </p>
      </div>

      {/* Principles 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ethicsPrinciples.map((item) => {
          const isForbidden = item.status === 'forbidden';

          return (
            <div
              key={item.id}
              className={`p-7 rounded-3xl backdrop-blur-xl border transition-all ${
                isForbidden
                  ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/50 hover:border-rose-400'
                  : 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-2xl shrink-0 ${
                    isForbidden
                      ? 'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400'
                      : 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  {isForbidden ? (
                    <Ban className="w-6 h-6" />
                  ) : (
                    <ShieldCheck className="w-6 h-6" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isForbidden
                          ? 'bg-rose-600 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {isForbidden ? 'Хатуу хориглоно' : 'Миний үнэт зүйл'}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance Banner for Ethical Brands */}
      <div className="mt-8 p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertOctagon className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-300">
            <strong>Цэвэр, ёс зүйт хамтрал:</strong> Танай брэндийн нэр хүнд манай сувгаар дамжин зөвхөн эерэг, соёлтой, найдвартай байдлаар түгэх болно.
          </p>
        </div>
        <div className="shrink-0 text-xs font-semibold text-pink-400">
          Ёс зүйн баталгаа ✓
        </div>
      </div>

    </section>
  );
};
