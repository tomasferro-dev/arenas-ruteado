// Seguimiento de conversiones de Google Ads.
// Cada valor es el "send_to" completo que entrega Google Ads, con la forma
// 'AW-18529547397/etiqueta'. Mientras un valor esté vacío, ese evento no se envía.
const CONVERSIONS = {
  whatsapp: 'AW-18529547397/ste1CKO4-KwdEIXpyYNF',
  telefono: 'AW-18529547397/oijyCMCt_qwdEIXpyYNF',
  formulario: 'AW-18529547397/nXtSCOGk-qwdEIXpyYNF',
} as const;

export type ConversionKind = keyof typeof CONVERSIONS;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(kind: ConversionKind) {
  const sendTo = CONVERSIONS[kind];
  if (!sendTo || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: sendTo });
}

// Un único listener cubre todos los enlaces de WhatsApp y de teléfono del sitio.
export function initClickTracking() {
  document.addEventListener('click', (e) => {
    const link = (e.target as Element | null)?.closest?.('a[href]');
    const href = link?.getAttribute('href') ?? '';
    if (href.startsWith('https://wa.me/')) trackConversion('whatsapp');
    else if (href.startsWith('tel:')) trackConversion('telefono');
  });
}
