import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Phone, 
  Instagram, 
  PhoneCall 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('88712038');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Glow decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact info */}
          <div className="lg:col-span-6">
            <span className="px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
              Холбоо барих
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Шууд холбогдох
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Маркетинг хамтын ажиллагаа, Reels видео бүтээлт болон бусад ажил хэрэгч санал хүсэлтээр дараах сувгуудаар шууд холбогдоорой.
            </p>

            <div className="space-y-4">
              
              {/* Phone item (88712038) */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Утасны дугаар
                    </span>
                    <a
                      href="tel:88712038"
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors tracking-wide"
                    >
                      88712038
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:88712038"
                    className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Залгах</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Хуулах"
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

              {/* Email item (anand75io@moes.edu.mn) */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Gmail / И-мэйл хаяг
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 ml-2"
                  title="Хуулах"
                >
                  {copiedEmail ? (
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

              {/* Instagram item (@g.an5nd) */}
              <a
                href="https://instagram.com/g.an5nd"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border border-pink-500/20 hover:border-pink-500/50 backdrop-blur-md transition-all text-decoration-none"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-pink-300 uppercase tracking-wider font-semibold block">
                      Instagram хаяг руу шууд орох
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                      @g.an5nd
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-pink-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Нээх</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Location item */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Байршил
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Instagram shortcut button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://instagram.com/g.an5nd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-600/20 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @g.an5nd руу үсрэх</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Message Form with "Таны дугаар" field right under Gmail/Email */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-sky-400" />
              <span>Шууд зурвас илгээх</span>
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Мэдээллээ үлдээгээрэй, бид тантай тун удахгүй утсаар болон и-мэйлээр эргэн холбогдоно.
            </p>

            {formSent ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  Зурвас илгээгдлээ!
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Таны үлдээсэн дугаар болон и-мэйлээр тун удахгүй эргэн холбогдох болно. Баярлалаа.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Таны нэр */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Таны нэр <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Жишээ: Батболд"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                {/* Gmail / И-мэйл хаяг */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    И-мэйл хаяг <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Жишээ: batbold@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                {/* ХҮСЭЛТИЙН ДАГУУ: Gmail хаягийн доор "Таны дугаар" гэдэг шинэ цэс/талбар */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
                    <span>Таны дугаар (Утас) <span className="text-rose-400">*</span></span>
                    <span className="text-[11px] text-sky-400 font-normal">Холбогдох дугаар</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Жишээ: 88712038 эсвэл таны дугаар"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                {/* Зурвас */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Зурвас / Тайлбар <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Хамтран ажиллах төсөл эсвэл санал хүсэлтийн талаар дэлгэрэнгүй бичнэ үү..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Зурвас илгээх</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
