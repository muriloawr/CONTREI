// Na prévia (PREVIEW=1) bloqueia indexação, para o domínio provisório não aparecer no Google.
export const dynamic = 'force-static';

export default function robots() {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW === '1';
  return {
    rules: isPreview ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' },
  };
}
