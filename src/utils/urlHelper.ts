/**
 * Netlify холбоос үүсгэгч туслах функц
 * Хэрэглэгчийн заавар: "index.html дахь холбоос, зургийн өмнө https://[НЕТЛИФАЙ].netlify.app/ нэм"
 */
export function formatNetlifyUrl(pathOrUrl: string, subdomain: string): string {
  if (!pathOrUrl) return '';
  
  // Хэрэв шууд бүрэн http/https холбоос байвал
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  // Цэвэр subdomain нэр гаргах
  const cleanSub = subdomain.trim().replace(/^https?:\/\//, '').replace(/\.netlify\.app\/?.*$/, '');
  const base = `https://${cleanSub || 'anhbayar'}.netlify.app`;
  
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl.slice(1) : pathOrUrl;
  return `${base}/${cleanPath}`;
}
