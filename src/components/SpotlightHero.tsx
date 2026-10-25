import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Eye, Sparkles, Layers, Code2, Globe, Play, Shuffle, Instagram, PhoneCall } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface SpotlightHeroProps {
  profile: PortfolioProfile;
  netlifySubdomain: string;
  onExploreProjects: () => void;
}

export const SpotlightHero: React.FC<SpotlightHeroProps> = ({
  profile,
  netlifySubdomain,
  onExploreProjects
}) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const backImgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Хэрэглэгчийн хавсаргасан загварын зургууд
  const HERO_FRONT = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/658f62c6-fdb2-41b9-aa0f-10837f9e72cb.png';
  const HERO_BACK = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260914_123603_5ac5732a-900b-4919-9d9c-3c454194b0a5.png';

  const [isAwake, setIsAwake] = useState(false);
  const [activeIdentityIndex, setActiveIdentityIndex] = useState(0);

  const avatars = [
    { id: 1, url: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/caf08036-c63c-4d0c-9b81-43c5a7a49343.png', hue: '0deg', sat: 1 },
    { id: 2, url: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/599a5a28-c9f1-44f9-b01b-adb8b22e8c12.png', hue: '-15deg', sat: 1.2 },
    { id: 3, url: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc804805-b23c-40ba-97b0-9ab2ba3efb5d.png', hue: '25deg', sat: 1.3 },
    { id: 4, url: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0cb0c1f0-f84a-47bb-bfa1-43b6c7f1575d.png', hue: '180deg', sat: 0.9 },
    { id: 5, url: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/64e651b1-a8ba-44e8-8fbe-e85fcd6e5cf0.png', hue: '-40deg', sat: 1.1 },
  ];

  // SPOTLIGHT REVEAL (Загвар дээрх гол хөдөлгөөн)
  useEffect(() => {
    const stack = stackRef.current;
    const back = backImgRef.current;
    const canvas = canvasRef.current;
    if (!stack || !back || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SPOTLIGHT_R = 190;
    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = stack.offsetWidth || 500;
      canvas.height = stack.offsetHeight || 600;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const onPointerMove = (e: PointerEvent) => {
      const r = stack.getBoundingClientRect();
      const sx = stack.offsetWidth / (r.width || 1);
      const sy = stack.offsetHeight / (r.height || 1);
      mouse.x = (e.clientX - r.left) * sx;
      mouse.y = (e.clientY - r.top) * sy;
    };

    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    stack.addEventListener('pointermove', onPointerMove);
    stack.addEventListener('pointerleave', onPointerLeave);

    const render = (x: number, y: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.62, 'rgba(255,255,255,1)');
      grad.addColorStop(0.82, 'rgba(255,255,255,0.4)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fill();

      const url = canvas.toDataURL();
      back.style.maskImage = `url(${url})`;
      back.style.webkitMaskImage = `url(${url})`;
    };

    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.12;
      smooth.y += (mouse.y - smooth.y) * 0.12;
      render(smooth.x, smooth.y);
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      stack.removeEventListener('pointermove', onPointerMove);
      stack.removeEventListener('pointerleave', onPointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNextAvatar = () => {
    setActiveIdentityIndex((prev) => (prev + 1) % avatars.length);
  };

  const currentAvatar = avatars[activeIdentityIndex];

  return (
    <section id="home" className="relative min-h-[95vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background radial gradient & ambient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_25%,#e0f2fe_0%,#dbeafe_35%,#f1f5f9_70%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_50%_25%,#0f172a_0%,#020617_80%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-300/25 dark:bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Ghost Typography (ЗАГВАР-ын арын том футуристик бичиг) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-1 overflow-hidden opacity-35 dark:opacity-15">
        <span className="text-[14vw] font-black tracking-tighter text-slate-400/30 whitespace-nowrap">
          ANAND
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Танилцуулга ба Текстүүд */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-pink-500/10 border border-sky-300/40 dark:border-sky-700/50 backdrop-blur-md shadow-sm mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                Сайн байна уу, та Анандын вэбсайттай холбогдлоо!
              </span>
            </div>

            {/* Status pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <a
                href="https://instagram.com/g.an5nd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-300 border border-pink-400/30 text-xs font-bold transition-colors cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: @g.an5nd</span>
              </a>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Ананд · 16 настай
              </span>
              <span className="text-xs font-mono text-pink-600 dark:text-pink-400 font-semibold px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
                Fun & Creative Reels
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6">
              Ананд
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-sky-500 dark:from-pink-400 dark:via-purple-300 dark:to-sky-300">
                Instagram Reels & Маркетинг
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              Сайн байна уу! Би Инстаграм дээр богино бичлэг, Reels хийдэг бөгөөд хүмүүст бичлэгээ сонирхолтой, хөгжилтэй (fun) байдлаар хүргэхийг зорьдог. Брэнд, байгууллагуудтай хамтран залууст зориулсан сонирхолтой, өндөр хандалттай маркетинг Reels хийхэд бэлэн байна.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#collaboration"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Маркетинг & Reels хамтрал</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://instagram.com/g.an5nd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-pink-600 dark:text-pink-300 font-semibold text-sm border border-pink-200 dark:border-pink-900/60 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @g.an5nd</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm border border-slate-200/80 dark:border-slate-700 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Холбогдох (88712038)</span>
              </a>
            </div>

            {/* Glass Card (Influencer & Contact quick summary) */}
            <div className="w-full max-w-lg p-5 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/60 dark:border-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold tracking-wider">
                    REELS CREATOR
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Байгууллагын хамтын ажиллагаа нээлттэй
                  </span>
                </div>
                
                {/* Spotlight/Awake trigger */}
                <button
                  onClick={() => setIsAwake(!isAwake)}
                  className={`p-2 rounded-xl transition-all ${
                    isAwake 
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                  title="Амьд горимыг асаах / унтраах"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-normal">
                Хулганаа баруун талын дүрстэй зураг дээр гүйлгэж <strong>Spotlight Reveal</strong> (нууц давхарга гэрэлтэх) эффектийг туршаарай!
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Netlify дээр бэлэн
                  </span>
                </div>
                <button
                  onClick={handleNextAvatar}
                  className="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-semibold hover:underline"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Өнгө солих</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: ЗАГВАР-ын SPOTLIGHT REVEAL (Хулгана дагадаг гэрлийн тусгал) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The Interactive Hero Card */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[36px] p-4 bg-gradient-to-b from-white/80 via-white/40 to-white/20 dark:from-slate-800/80 dark:to-slate-900/40 backdrop-blur-2xl border border-white/70 dark:border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.18)] flex items-center justify-center overflow-hidden">
              
              {/* Subtle radial sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-transparent to-indigo-500/10 pointer-events-none" />

              {/* Tag top-right */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                <span>Interactive Reveal</span>
              </div>

              {/* The Hero Stack */}
              <div
                ref={stackRef}
                className={`relative w-full h-full max-h-[480px] cursor-crosshair select-none transition-transform duration-500 ${
                  isAwake ? 'scale-105' : ''
                }`}
              >
                {/* Front layer (white/silver android base layer) */}
                <img
                  src={HERO_FRONT}
                  alt="Ананд — Instagram Reels бүтээгч"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10 transition-all duration-300 drop-shadow-[0_15px_25px_rgba(14,165,233,0.2)]"
                  style={{
                    filter: `hue-rotate(${currentAvatar.hue}) saturate(${currentAvatar.sat})`,
                  }}
                />

                {/* Back layer (gunmetal reveal layer revealed by canvas mask) */}
                <img
                  ref={backImgRef}
                  src={HERO_BACK}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20"
                />

                {/* Canvas mask (hidden offscreen, rendered to dataURL mask) */}
                <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
              </div>

              {/* Floating interactive avatar selector at bottom */}
              <div className="absolute bottom-4 inset-x-4 z-30 flex items-center justify-between p-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 pl-2">
                  Загварын өнгө:
                </span>
                <div className="flex items-center gap-1.5">
                  {avatars.map((av, idx) => (
                    <button
                      key={av.id}
                      onClick={() => setActiveIdentityIndex(idx)}
                      className={`w-7 h-7 rounded-full overflow-hidden border-2 transition-transform ${
                        activeIdentityIndex === idx
                          ? 'border-sky-500 scale-110 shadow-sm'
                          : 'border-white/80 dark:border-slate-700 hover:scale-105'
                      }`}
                      title={`Загвар 0${av.id}`}
                    >
                      <img src={av.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Instruction tooltip */}
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 text-center">
              <span>💡 Дээрх зураг дээр хулганаа хөдөлгөж давхаргыг нээнэ</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
