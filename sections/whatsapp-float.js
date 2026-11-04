import '../assets/section-whatsapp-float.css';
import icon from '../assets/icon-whatsapp-float.svg';
import { WHATSAPP_URL, external } from '../snippets/whatsapp';

// botão flutuante do WhatsApp, fixo no canto inferior direito de todas as páginas
export default function WhatsappFloat() {
  return (
    <a href={WHATSAPP_URL} {...external} className="whatsapp-float" aria-label="Fale conosco pelo WhatsApp">
      <img src={icon.src} alt="" />
    </a>
  );
}
