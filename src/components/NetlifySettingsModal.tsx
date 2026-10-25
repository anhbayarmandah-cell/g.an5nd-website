import React, { useState } from 'react';
import { X, Globe, Check, AlertCircle, RefreshCw } from 'lucide-react';

interface NetlifySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSubdomain: string;
  onSaveSubdomain: (newSubdomain: string) => void;
}

export const NetlifySettingsModal: React.FC<NetlifySettingsModalProps> = ({
  isOpen,
  onClose,
  currentSubdomain,
  onSaveSubdomain,
}) => {
  const [val, setVal] = useState(currentSubdomain);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = val.trim().replace(/^https?:\/\//, '').replace(/\.netlify\.app\/?.*$/, '');
    onSaveSubdomain(clean || 'anhbayar');
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const previewBase = `https://${val.trim() || 'anhbayar'}.netlify.app`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Netlify холбоосын тохиргоо
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Холбоос болон зургийн үндсэн URL
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Таны өгсөн дүрмийн дагуу (<strong>https://[НЕТЛИФАЙ].netlify.app/</strong>) бүх бүтээлийн холбоос, зургийн замд энэхүү домэйн угтвар залгагдана.
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Netlify дэд домэйн (Subdomain)
            </label>
            <div className="flex items-center rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden focus-within:border-sky-500 bg-white dark:bg-slate-950">
              <span className="px-3 text-xs text-slate-400 font-mono bg-slate-50 dark:bg-slate-900 py-3 border-r border-slate-200 dark:border-slate-800">
                https://
              </span>
              <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="жишээ: anhbayar"
                className="w-full px-3 py-3 text-xs sm:text-sm font-mono text-slate-900 dark:text-white focus:outline-none bg-transparent"
              />
              <span className="px-3 text-xs text-slate-400 font-mono bg-slate-50 dark:bg-slate-900 py-3 border-l border-slate-200 dark:border-slate-800">
                .netlify.app
              </span>
            </div>
          </div>

          {/* Realtime Preview */}
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            Одоогийн үүсэх хаяг: <span className="font-mono text-sky-600 dark:text-sky-400 font-semibold">{previewBase}/</span>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setVal('anhbayar')}
              className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Анхны утга</span>
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Амжилттай хадгалагдлаа!</span>
                </>
              ) : (
                <span>Хадгалах & Шинэчлэх</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
