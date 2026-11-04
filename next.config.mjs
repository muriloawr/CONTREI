// PREVIEW=1 gera uma versão 100% estática (pasta `out/`) para a prévia no Cloudflare.
// Sem PREVIEW, o build continua o padrão do Next.js (servidor + otimização de imagens).
const isPreview = process.env.PREVIEW === '1';

/** @type {import('next').NextConfig} */
const nextConfig = isPreview
  ? {
      output: 'export',
      // A otimização de imagens do next/image precisa de servidor; na prévia as imagens vão como estão.
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_PREVIEW: '1' },
    }
  : {};

export default nextConfig;
