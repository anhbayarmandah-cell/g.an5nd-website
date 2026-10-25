import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Instagram, PhoneCall } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface SpaceEduHeroProps {
  profile: PortfolioProfile;
  netlifySubdomain: string;
  onExploreProjects: () => void;
}

type PlanetKey = 'earth' | 'venus' | 'mars';

interface PlanetInfo {
  name: string;
  titleMn: string;
  descMn: string;
  video: string;
  poster: string;
  cutout: string;
}

const PLANETS: Record<PlanetKey, PlanetInfo> = {
  earth: {
    name: 'EARTH',
    titleMn: 'ДЭЛХИЙ ГАРАГ',
    descMn: 'Анандын албан ёсны ертөнц. Залуусын сэтгэлд хүрэх сонирхолтой, хөгжилтэй (fun) контентууд.',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_3ffb4889-c520-432d-8458-038009eb40df.mp4',
    poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png',
    cutout: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202005_3346cc4d-ec3b-44ab-825c-b18e49f5021a.png'
  },
  venus: {
    name: 'VENUS',
    titleMn: 'СУГАР ГАРАГ',
    descMn: 'Хамгийн халуун, эрчимтэй, хурдтай, сонирхол татах видео монтаж ба Reels өгүүлэмж.',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_b211cd74-013b-4dd3-bfd0-64491d8696fa.mp4',
    poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png',
    cutout: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202012_640b239a-d08a-4200-adb2-741bbe129ac8.png'
  },
  mars: {
    name: 'MARS',
    titleMn: 'АНГАРАГ ГАРАГ',
    descMn: 'Бүтээлч байдал, шинэ санаа, брэндүүдтэй хамтарсан өндөр үр дүнтэй маркетингийн шийдлүүд.',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_51eae59a-2459-4c84-907c-cc5edfe5fea7.mp4',
    poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png',
    cutout: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202018_3d559490-f613-4ed7-a3bb-3b7e9fc90fb8.png'
  }
};

const PLANET_ORDER: PlanetKey[] = ['earth', 'venus', 'mars'];

export const SpaceEduHero: React.FC<SpaceEduHeroProps> = ({
  profile,
  netlifySubdomain,
  onExploreProjects,
}) => {
  const [featured, setFeatured] = useState<PlanetKey>('earth');

  // Бусад 2 гараг
  const otherPlanets = PLANET_ORDER.filter((p) => p !== featured);
  const leftPlanet = otherPlanets[0];
  const rightPlanet = otherPlanets[1];

  const current = PLANETS[featured];

  return (
    <section id="home" className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#04101f] text-white">
      
      {/* Background looping Video or Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          key={current.video}
          autoPlay
          muted
          loop
          playsInline
          poster={current.poster}
          className="w-full h-full object-cover opacity-60 transition-opacity duration-700"
        >
          <source src={current.video} type="video/mp4" />
        </video>
        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-transparent to-[#04101f]/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Eyebrow & Greeting */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Сайн байна уу, та Анандын вэбсайттай холбогдлоо!</span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <a
              href="https://instagram.com/g.an5nd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-400/30 text-xs font-bold transition-colors cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram: @g.an5nd</span>
            </a>
            <span className="text-xs text-slate-300 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              Ананд · 16 настай · Fun Reels Creator
            </span>
          </div>
        </div>

        {/* Planet Serif Name */}
        <h1 className="font-['Prata',serif] text-5xl sm:text-7xl lg:text-8xl font-normal tracking-wider text-white mb-3">
          {current.name}
        </h1>

        {/* Mongolian Title */}
        <div className="text-sm font-semibold tracking-widest text-cyan-300 uppercase mb-4">
          Ананд — Reels контент & Маркетинг хамтрал
        </div>

        {/* Cyan line */}
        <div className="w-20 h-1 bg-cyan-400 rounded-full mb-6" />

        {/* Description */}
        <p className="max-w-xl text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
          Instagram дээр Reels богино бичлэг хийдэг бөгөөд хүмүүст бичлэгээ сонирхолтой, хөгжилтэй (fun) байдлаар хүргэхийг зорьдог. Брэнд, байгууллагуудтай хамтран өндөр хандалттай видео бүтээхэд бэлэн байна.
        </p>

        {/* CTA + Flanking Planets */}
        <div className="relative flex items-center justify-center gap-6 sm:gap-12 mt-4">
          
          {/* Left Planet Button */}
          <button
            onClick={() => setFeatured(leftPlanet)}
            className="group flex flex-col items-center gap-2 p-2 transition-transform hover:scale-105 active:scale-95"
            title={`Шилжих: ${PLANETS[leftPlanet].name}`}
          >
            <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full overflow-hidden p-1 bg-white/10 backdrop-blur-md border border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
              <img
                src={PLANETS[leftPlanet].cutout}
                alt=""
                className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(121,220,232,0.4)]"
              />
            </div>
            <span className="font-['Prata',serif] text-xs sm:text-sm tracking-widest text-white/80 group-hover:text-cyan-300">
              {PLANETS[leftPlanet].name}
            </span>
          </button>

          {/* Center Get Started / Explore Button */}
          <a
            href="#collaboration"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-extrabold text-sm tracking-wider shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-105 active:scale-98 transition-all cursor-pointer text-decoration-none"
          >
            МАРКЕТИНГ & REELS ХАМТРАЛ
          </a>

          {/* Right Planet Button */}
          <button
            onClick={() => setFeatured(rightPlanet)}
            className="group flex flex-col items-center gap-2 p-2 transition-transform hover:scale-105 active:scale-95"
            title={`Шилжих: ${PLANETS[rightPlanet].name}`}
          >
            <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full overflow-hidden p-1 bg-white/10 backdrop-blur-md border border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
              <img
                src={PLANETS[rightPlanet].cutout}
                alt=""
                className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(121,220,232,0.4)]"
              />
            </div>
            <span className="font-['Prata',serif] text-xs sm:text-sm tracking-widest text-white/80 group-hover:text-cyan-300">
              {PLANETS[rightPlanet].name}
            </span>
          </button>

        </div>

      </div>

    </section>
  );
};
