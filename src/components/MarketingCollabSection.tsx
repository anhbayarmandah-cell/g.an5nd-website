import React, { useState } from 'react';
import { 
  Instagram, 
  Video, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Clock, 
  Briefcase,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { brandCollabInfo, profileData } from '../data/portfolioData';

export const MarketingCollabSection: React.FC = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    phone: '',
    email: '',
    collabType: 'Reels бичлэг (15-60 сек)',
    category: 'Спорт & Хувцас загвар',
    message: '',
    deadline: '',
    budget: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('88712038');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Маягтын өгөгдлийг цэвэрлэх
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        brandName: '',
        contactPerson: '',
        phone: '',
        email: '',
        collabType: 'Reels бичлэг (15-60 сек)',
        category: 'Спорт & Хувцас загвар',
        message: '',
        deadline: '',
        budget: '',
      });
    }, 6000);
  };

  return (
    <section id="collaboration" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-400/30 text-pink-600 dark:text-pink-300 text-xs font-bold tracking-wide uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" />
          <span>Брэнд & Байгууллагын Хамтын Ажиллагаа</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Маркетинг & Reels хамтрал
        </h2>
        
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Би Instagram дээр богино хэмжээний Reels видео хийдэг бөгөөд хүмүүст бичлэгээ сонирхолтой, хөгжилтэй (fun) байдлаар хүргэхийг зорьдог. 
          Танай брэнд, бүтээгдэхүүнийг залуус болон сошиал үзэгчдэд сонирхолтой, органик, өндөр хандалттай байдлаар хүргэхэд бэлэн байна.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Creator Profile & Guidelines for Brands */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Instagram Influencer Quick Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-white/10">
            {/* Background Instagram Gradient Mesh */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-bl from-pink-500/30 to-amber-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-600/25 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold">
                  <Video className="w-3.5 h-3.5 text-pink-400" />
                  <span>Reels Creator</span>
                </div>
                
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Хамтралд бэлэн" />
              </div>

              {/* Influencer Name & Handle */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-lg">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-white font-extrabold text-2xl">
                    A
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Ананд</h3>
                  <a
                    href="https://instagram.com/g.an5nd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@g.an5nd</span>
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">16 настай · Instagram Reels Бүтээгч</p>
                </div>
              </div>

              {/* Direct Instagram CTA Button */}
              <a
                href="https://instagram.com/g.an5nd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-xs tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 hover:opacity-95 transition-all mb-6 group cursor-pointer"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Instagram профайл руу шууд орох (@g.an5nd)</span>
              </a>

              {/* Quick Contact hotline: 88712038 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                      Холбоо барих шууд утас
                    </span>
                    <a 
                      href="tel:88712038"
                      className="text-base font-extrabold text-white tracking-wider hover:text-emerald-400 transition-colors"
                    >
                      88712038
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-1 cursor-pointer"
                  title="Дугаар хуулах"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Хуулагдлаа</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Хуулах</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Highlights & Collaboration Formats */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-sky-500" />
              <span>Хамтын ажиллагааны төрлүүд</span>
            </h4>
            
            <div className="space-y-3">
              {brandCollabInfo.contentTypes.map((item, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mb-0.5">
                    {item.title}
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Note for Brands */}
            <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/70 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <span>
                <strong>Байгууллагуудад сануулах нь:</strong> Хамтын ажиллагааны санал илгээхдээ контентоор хүргэх гол мессеж, цаг хугацаа болон бүтээгдэхүүний онцлогийг тодорхой бичвэл үр дүнтэй, шуурхай эргэн холбогдоно.
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Required Questionnaire Form for Brands */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl relative">
            
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                Заавал асуух асуулга
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Хамтран ажиллах хүсэлт илгээх
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Надтай хамтрах сонирхолтой брэнд, байгууллагууд дараах мэдээллийг бөглөж илгээнэ үү.
              </p>
            </div>

            {submitted ? (
              <div className="py-14 text-center px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                  Хүсэлтийг амжилттай хүлээн авлаа!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                  Баярлалаа! Танай байгууллагын саналыг шалгаад <span className="font-bold text-slate-900 dark:text-white">{formData.phone || 'өгсөн дугаараар'}</span> тун удахгүй эргэн холбогдох болно. Мөн яаралтай бол <a href="tel:88712038" className="text-sky-600 font-bold underline">88712038</a> дугаарт шууд холбогдож болно.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram: @g.an5nd</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. Брэндийн нэр & Холбогдох менежер */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      1. Байгууллага / Брэндийн нэр <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Жишээ: Apex Sports, Cafe..."
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      2. Хариуцсан менежерийн нэр <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Жишээ: Батзориг"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* 3. Утасны дугаар & И-мэйл хаяг */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      3. Холбоо барих утасны дугаар <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Жишээ: 9911****, 88******"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      4. И-мэйл хаяг <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Жишээ: contact@brand.mn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* 5. Хамтын ажиллагааны формат & Чиглэл */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      5. Хүсэж буй контентын формат <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.collabType}
                      onChange={(e) => setFormData({ ...formData, collabType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    >
                      <option value="Reels бичлэг (15-60 сек)">Reels бичлэг (15-60 сек)</option>
                      <option value="Story сурталчилгаа (Холбоостой)">Story сурталчилгаа (Холбоостой)</option>
                      <option value="Эвент / Нээлтэд оролцох">Эвент / Нээлтэд оролцох</option>
                      <option value="Цуврал хамтрал (Brand Ambassador)">Цуврал хамтрал (Brand Ambassador)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      6. Бүтээгдэхүүн, үйлчилгээний чиглэл <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    >
                      <option value="Спорт & Хувцас загвар">Спорт & Хувцас загвар</option>
                      <option value="Хоол, Кофе шоф, Ресторан">Хоол, Кофе шоф, Ресторан</option>
                      <option value="Технологи, Гаджет">Технологи, Гаджет</option>
                      <option value="Арга хэмжээ, Энтертайнмент">Арга хэмжээ, Энтертайнмент</option>
                      <option value="Сургалт, Боловсрол">Сургалт, Боловсрол</option>
                      <option value="Бусад">Бусад</option>
                    </select>
                  </div>
                </div>

                {/* 7. Хүргэх гол мессеж */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    7. Контентын үндсэн санаа & Хүргэх гол мессеж <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Бичлэгээр ямар санаа гаргахыг хүсэж байна вэ? (Жишээ: Шинэ пүүзний сурталчилгаа, сагсан бөмбөгийн сорил, салбарын нээлтийн уур амьсгал г.м)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none placeholder:text-slate-400"
                  />
                </div>

                {/* 8. Дедлайн & Төсвийн санал */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>8. Товлосон хугацаа (Дедлайн)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Жишээ: Энэ 7 хоногийн амралтын өдөр"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>9. Төсвийн төлөвлөгөө / Санал</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Жишээ: Хамтран ярилцах, эсвэл санал"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Хамтран ажиллах хүсэлт илгээх</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2.5">
                    Шууд яаралтай ярихыг хүсвэл: <a href="tel:88712038" className="font-bold text-sky-600 dark:text-sky-400 underline">88712038</a> дугаарт холбогдоорой.
                  </p>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
