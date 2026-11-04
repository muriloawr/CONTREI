import { Manrope, DM_Sans } from 'next/font/google';
import '../assets/base.css';
import Header from '../sections/header';
import Footer from '../sections/footer';
import WhatsappFloat from '../sections/whatsapp-float';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const dmSans = DM_Sans({ subsets: ['latin'], axes: ['opsz'], variable: '--font-dm-sans' });

export const metadata = {
  title: 'Contrei',
  // Prévia no Cloudflare (PREVIEW=1): não indexar o domínio provisório.
  ...(process.env.NEXT_PUBLIC_PREVIEW === '1' && { robots: { index: false, follow: false } }),
};

export default function Theme({ children }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
