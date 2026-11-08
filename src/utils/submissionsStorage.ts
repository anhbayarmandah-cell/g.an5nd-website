export interface SubmissionItem {
  id: string;
  type: 'collaboration' | 'contact';
  createdAt: string;
  timestamp: number;
  senderName: string;
  email: string;
  phone: string;
  brandName?: string;
  collabType?: string;
  category?: string;
  message: string;
  deadline?: string;
  budget?: string;
  status: 'new' | 'contacted' | 'archived';
  emailDelivered: boolean;
}

const STORAGE_KEY = 'anand_portfolio_submissions_v1';

export const getSubmissions = (): SubmissionItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.sort((a, b) => b.timestamp - a.timestamp);
    }
    return [];
  } catch (error) {
    console.error('Failed to read submissions from localStorage:', error);
    return [];
  }
};

export const saveSubmission = (
  item: Omit<SubmissionItem, 'id' | 'createdAt' | 'timestamp' | 'status'>
): SubmissionItem => {
  const existing = getSubmissions();
  const now = new Date();
  
  const newItem: SubmissionItem = {
    ...item,
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: now.toLocaleString('mn-MN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }),
    timestamp: now.getTime(),
    status: 'new',
  };

  const updated = [newItem, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Trigger window event so any listening UI updates in real-time
    window.dispatchEvent(new Event('submissions_updated'));
  } catch (error) {
    console.error('Failed to save submission to localStorage:', error);
  }

  return newItem;
};

export const updateSubmissionStatus = (id: string, status: SubmissionItem['status']): void => {
  const existing = getSubmissions();
  const updated = existing.map((sub) => (sub.id === id ? { ...sub, status } : sub));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('submissions_updated'));
  } catch (error) {
    console.error('Failed to update submission status:', error);
  }
};

export const deleteSubmission = (id: string): void => {
  const existing = getSubmissions();
  const updated = existing.filter((sub) => sub.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('submissions_updated'));
  } catch (error) {
    console.error('Failed to delete submission:', error);
  }
};

export const clearAllSubmissions = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('submissions_updated'));
  } catch (error) {
    console.error('Failed to clear submissions:', error);
  }
};

export const exportSubmissionsCSV = (): void => {
  const submissions = getSubmissions();
  if (submissions.length === 0) return;

  const headers = ['Төрөл', 'Огноо', 'Брэнд/Байгууллага', 'Нэр', 'Утас', 'И-мэйл', 'Формат', 'Чиглэл', 'Дедлайн', 'Төсөв', 'Зурвас', 'Төлөв'];
  const rows = submissions.map((s) => [
    s.type === 'collaboration' ? 'Хамтын ажиллагаа' : 'Шууд зурвас',
    `"${s.createdAt}"`,
    `"${(s.brandName || '').replace(/"/g, '""')}"`,
    `"${(s.senderName || '').replace(/"/g, '""')}"`,
    `"${(s.phone || '').replace(/"/g, '""')}"`,
    `"${(s.email || '').replace(/"/g, '""')}"`,
    `"${(s.collabType || '').replace(/"/g, '""')}"`,
    `"${(s.category || '').replace(/"/g, '""')}"`,
    `"${(s.deadline || '').replace(/"/g, '""')}"`,
    `"${(s.budget || '').replace(/"/g, '""')}"`,
    `"${(s.message || '').replace(/"/g, '""')}"`,
    s.status === 'new' ? 'Шинэ' : s.status === 'contacted' ? 'Холбогдсон' : 'Архивлагдсан'
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `anand_huseltuud_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
