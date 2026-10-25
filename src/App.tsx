import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SpotlightHero } from './components/SpotlightHero';
import { SpaceEduHero } from './components/SpaceEduHero';
import { AboutSection } from './components/AboutSection';
import { InstagramStatsSection } from './components/InstagramStatsSection';
import { SkillsSection } from './components/SkillsSection';
import { PricingSection } from './components/PricingSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { MarketingCollabSection } from './components/MarketingCollabSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { profileData, DEFAULT_NETLIFY_SUBDOMAIN } from './data/portfolioData';
import { Sparkles, Orbit } from 'lucide-react';

export default function App() {
  const [netlifySubdomain] = useState<string>(DEFAULT_NETLIFY_SUBDOMAIN);
  const [heroTheme, setHeroTheme] = useState<'nival' | 'space'>('nival');
  const [activeSection, setActiveSection] = useState('home');

  const handleExploreCollab = () => {
    const el = document.getElementById('collaboration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'works', 'skills', 'pricing', 'principles', 'collaboration', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors selection:bg-pink-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        currentNetlifySub={netlifySubdomain}
        onOpenNetlifySettings={() => {}}
        activeSection={activeSection}
      />

      {/* Floating Theme Switcher between Nival & SpaceEdu */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-pink-500/10">
          <button
            onClick={() => setHeroTheme('nival')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              heroTheme === 'nival'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Nival: Гэрлийн тусгалтай футуристик загвар"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nival загвар</span>
          </button>

          <button
            onClick={() => setHeroTheme('space')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              heroTheme === 'space'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400'
            }`}
            title="SpaceEdu: Гараг сэлгэх сансрын загвар"
          >
            <Orbit className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Сансрын загвар</span>
          </button>
        </div>
      </div>

      <main>
        {/* 1. Hero Section (Dynamic) */}
        {heroTheme === 'nival' ? (
          <SpotlightHero
            profile={profileData}
            netlifySubdomain={netlifySubdomain}
            onExploreProjects={handleExploreCollab}
          />
        ) : (
          <SpaceEduHero
            profile={profileData}
            netlifySubdomain={netlifySubdomain}
            onExploreProjects={handleExploreCollab}
          />
        )}

        {/* 2. "Миний тухай" (About Section) */}
        <AboutSection />

        {/* 3. "Миний бүтээлүүд" & Инстаграм аккаунтын үзэлт, хандалтын тоо */}
        <InstagramStatsSection />

        {/* 4. "Миний эзэмшсэн ур чадварууд" (3 хэсэг бүхий ур чадвар) */}
        <SkillsSection />

        {/* 5. "Хамтын ажиллагааны нөхцөл & Үнийн санал" (Reel хийх багцууд) */}
        <PricingSection />

        {/* 6. "Анхаарах зүйлс & Миний зарчим" (Мөрийтэй тоглоом, ёс бус зүйл сурталчлахгүй) */}
        <PrinciplesSection />

        {/* 7. Хамтын ажиллагааны маягт (Marketing Collaboration Form) */}
        <MarketingCollabSection />

        {/* 8. Холбоо барих хэсэг (Contact Section) */}
        <ContactSection />
      </main>

      {/* 9. Footer (Хамгийн доор: "Your vision, my creativity. our impact.") */}
      <Footer />

    </div>
  );
}
