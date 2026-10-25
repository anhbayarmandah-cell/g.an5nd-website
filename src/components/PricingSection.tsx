import React from 'react';
import { Check, Sparkles, PhoneCall, HelpCircle, ArrowUpRight } from 'lucide-react';
import { pricingPackages } from '../data/portfolioData';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Үнийн санал & Багцууд</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Хамтын ажиллагааны нөхцөл
        </h2>
        
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Танай байгууллагын зорилго, төсөвт нийцсэн уян хатан контент бүтээх багцууд. Бид танай бүтээгдэхүүний онцлогт тохируулан үнийг харилцан тохиролцож шийддэг.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 relative ${
              pkg.popular
                ? 'bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl border-2 border-pink-500 scale-105 z-10'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{pkg.badge || 'Хамгийн эрэлттэй'}</span>
              </div>
            )}

            <div>
              {/* Top info */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {pkg.title}
                </h3>
                {!pkg.popular && pkg.badge && (
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {pkg.badge}
                  </span>
                )}
              </div>

              {/* Price Note */}
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6">
                <span className="text-[11px] uppercase tracking-wider block font-semibold text-pink-500 dark:text-pink-400 mb-1">
                  Үнийн нөхцөл:
                </span>
                <p className="text-xs font-medium leading-relaxed opacity-90">
                  {pkg.priceNote}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider block opacity-70">
                  Багцад багтсан ажлууд:
                </span>
                {pkg.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                      pkg.popular ? 'bg-pink-500/20 text-pink-400' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug opacity-90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom details & CTA */}
            <div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs mb-6 space-y-1.5 opacity-80">
                <div className="flex justify-between">
                  <span>Хугацаа:</span>
                  <span className="font-semibold">{pkg.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span>Зорилго:</span>
                  <span className="font-semibold truncate max-w-[180px]">{pkg.idealFor}</span>
                </div>
              </div>

              <a
                href="#collaboration"
                className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:opacity-95'
                    : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90'
                }`}
              >
                <span>Энэ багцаар санал илгээх</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Note about negotiation & direct hotline */}
      <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Төсөвтөө тааруулж уян хатан ярилцах уу?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Танай төсөв болон бүтээгдэхүүний өвөрмөц онцлогт тохируулан үнийн дүнг чөлөөтэй тохиролцох боломжтой.
            </p>
          </div>
        </div>

        <a
          href="tel:88712038"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Шууд ярилцах: 88712038</span>
        </a>
      </div>

    </section>
  );
};
