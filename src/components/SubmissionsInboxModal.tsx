import React, { useState, useEffect } from 'react';
import {
  X,
  Inbox,
  Mail,
  Phone,
  PhoneCall,
  Copy,
  Check,
  Trash2,
  Download,
  Calendar,
  Briefcase,
  Clock,
  Sparkles,
  ExternalLink,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import {
  SubmissionItem,
  getSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
  clearAllSubmissions,
  exportSubmissionsCSV
} from '../utils/submissionsStorage';
import { RECIPIENT_EMAIL } from '../utils/emailSender';

interface SubmissionsInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmissionsInboxModal: React.FC<SubmissionsInboxModalProps> = ({
  isOpen,
  onClose
}) => {
  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'collaboration' | 'contact'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadData = () => {
    setSubmissions(getSubmissions());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => loadData();
    window.addEventListener('submissions_updated', handleUpdate);
    return () => window.removeEventListener('submissions_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleStatus = (id: string, current: SubmissionItem['status']) => {
    const nextStatus = current === 'new' ? 'contacted' : 'new';
    updateSubmissionStatus(id, nextStatus);
    loadData();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Энэ хүсэлтийг устгах уу?')) {
      deleteSubmission(id);
      loadData();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Бүх хадгалагдсан хүсэлтүүдийг бүрмөсөн цэвэрлэх үү?')) {
      clearAllSubmissions();
      loadData();
    }
  };

  const filtered = submissions.filter((s) => {
    if (filterType === 'all') return true;
    return s.type === filterType;
  });

  const newCount = submissions.filter((s) => s.status === 'new').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center shadow-md">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  Ирсэн хүсэлтүүд & Зурвасууд
                </h3>
                {newCount > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-500 text-white text-[11px] font-bold">
                    {newCount} шинэ
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ирсэн бүх хүсэлт <span className="font-semibold text-sky-600 dark:text-sky-400">{RECIPIENT_EMAIL}</span> руу илгээгдэж, энд хадгалагдана.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {submissions.length > 0 && (
              <button
                onClick={exportSubmissionsCSV}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                title="Excel / CSV татах"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV татах</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Хаах"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter bar & Actions */}
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              Бүгд ({submissions.length})
            </button>

            <button
              onClick={() => setFilterType('collaboration')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'collaboration'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              Хамтын ажиллагаа ({submissions.filter((s) => s.type === 'collaboration').length})
            </button>

            <button
              onClick={() => setFilterType('contact')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === 'contact'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              Шууд зурвас ({submissions.filter((s) => s.type === 'contact').length})
            </button>
          </div>

          {submissions.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={exportSubmissionsCSV}
                className="sm:hidden inline-flex items-center gap-1 text-xs text-sky-600 font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>
              <button
                onClick={handleClearAll}
                className="text-xs text-rose-500 hover:text-rose-600 font-medium transition-colors cursor-pointer"
              >
                Бүгдийг цэвэрлэх
              </button>
            </div>
          )}
        </div>

        {/* Submissions List Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Inbox className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Одоогоор хүсэлт бүртгэгдээгүй байна
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
                Хэрэглэгч вэбсайтын <strong>Хамтран ажиллах хүсэлт илгээх</strong> эсвэл <strong>Шууд зурвас илгээх</strong> маягтыг бөглөхөд энд автоматаар харагдах болно.
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all ${
                  item.status === 'new'
                    ? 'bg-slate-50/90 dark:bg-slate-800/60 border-sky-400/30 dark:border-sky-500/20 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-80'
                }`}
              >
                {/* Item Top row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        item.type === 'collaboration'
                          ? 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300'
                          : 'bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300'
                      }`}
                    >
                      {item.type === 'collaboration' ? 'Хамтын ажиллагаа' : 'Шууд зурвас'}
                    </span>

                    <button
                      onClick={() => handleToggleStatus(item.id, item.status)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                        item.status === 'new'
                          ? 'bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300'
                          : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                      }`}
                      title="Төлөв солих"
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span>{item.status === 'new' ? 'Шинэ хүсэлт' : 'Холбогдсон'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.createdAt}</span>
                    </span>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-950/60 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Устгах"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Primary sender details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    {item.brandName && (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Байгууллага / Брэнд:
                        <span className="text-slate-900 dark:text-white font-extrabold text-sm ml-1.5">
                          {item.brandName}
                        </span>
                      </div>
                    )}
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Хариуцсан хүн / Нэр:
                      <span className="text-slate-900 dark:text-white font-bold text-sm ml-1.5">
                        {item.senderName}
                      </span>
                    </div>
                  </div>

                  {/* Actions for phone & email */}
                  <div className="flex flex-wrap items-center sm:justify-end gap-2">
                    {/* Call button */}
                    <a
                      href={`tel:${item.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold shadow-sm transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{item.phone}</span>
                    </a>

                    {/* Copy phone */}
                    <button
                      onClick={() => handleCopy(item.phone, `phone_${item.id}`)}
                      className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs transition-colors cursor-pointer"
                      title="Утас хуулах"
                    >
                      {copiedId === `phone_${item.id}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Email button */}
                    <a
                      href={`mailto:${item.email}?subject=Хариу: ${encodeURIComponent(item.brandName || item.senderName)} - Анандтай хамтрах`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shadow-sm transition-colors"
                      title={item.email}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>И-мэйл бичих</span>
                    </a>
                  </div>
                </div>

                {/* Additional Collaboration fields if available */}
                {(item.collabType || item.category || item.deadline || item.budget) && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs mb-3">
                    {item.collabType && (
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Формат</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.collabType}</span>
                      </div>
                    )}
                    {item.category && (
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Чиглэл</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.category}</span>
                      </div>
                    )}
                    {item.deadline && (
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Дедлайн</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.deadline}</span>
                      </div>
                    )}
                    {item.budget && (
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Төсөв</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.budget}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Message body */}
                <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>Зурвасын агуулга:</span>
                  </div>
                  {item.message}
                </div>

                {/* Delivery status indicator */}
                <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{RECIPIENT_EMAIL} руу имэйлээр илгээгдсэн</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span>
            💡 Зөвлөмж: Утсаар яаралтай ярихдаа <strong>88712038</strong> дугаараар холбогдоно.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs cursor-pointer ml-auto"
          >
            Хаах
          </button>
        </div>
      </div>
    </div>
  );
};
