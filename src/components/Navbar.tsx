import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Instagram } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  currentNetlifySub: string;
  onOpenNetlifySettings: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Эхлэл', href: '#home' },
    { name: 'Миний тухай', href: '#about' },
    { name: 'Бүтээл & Дата', href: '#works' },
    { name: 'Ур чадвар', href: '#skills' },
    { name: 'Үнийн санал', href: '#pricing' },
    { name: 'Зарчим', href: '#principles' },
    { name: 'Хамтрах', href: '#collaboration' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group text-decoration-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-1.5">
                Ананд
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[10px] sm:text-[11px] text-pink-600 dark:text-pink-400 font-bold">
                Instagram Reels Creator
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'bg-white dark:bg-slate-900 text-pink-600 dark:text-pink-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Instagram Link */}
            <a
              href="https://instagram.com/g.an5nd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-400/30 text-pink-600 dark:text-pink-300 hover:bg-pink-500/20 text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="Instagram @g.an5nd"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>@g.an5nd</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href="tel:88712038"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800 text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors shadow-sm"
              title="Утас: 88712038"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>88712038</span>
            </a>

            {/* Email contact CTA */}
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity shadow-sm"
              title={profileData.email}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Холбогдох</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href="https://instagram.com/g.an5nd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="tel:88712038"
              className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300"
              title="88712038"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Цэс нээх"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/50 dark:border-slate-800 shadow-xl flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <a
                href="https://instagram.com/g.an5nd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @g.an5nd шууд нээх</span>
              </a>

              <a
                href="tel:88712038"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Утас: 88712038</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
