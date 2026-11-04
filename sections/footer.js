import Image from 'next/image';
import Link from 'next/link';
import '../assets/section-footer.css';
import logo from '../assets/logo.webp';
import instagram from '../assets/footer-icon-instagram.svg';
import linkedin from '../assets/footer-icon-linkedin.svg';
import vanzak from '../assets/footer-vanzak.svg';
import socTree from '../assets/footer-soc-tree.webp';

const columns = [
  [
    'Institucional',
    [
      ['Home', '/'],
      ['Sobre a Contrei', '/#sobre'],
      ['Unidades', '/#unidades'],
      ['Serviços', '/nossos-servicos'],
    ],
  ],
  [
    'Ajuda',
    [
      ['Proposta Comercial', '/#proposta'],
      ['Credenciamento', '#'],
      ['Trabalhe Conosco', '#'],
      ['Ouvidoria', '#'],
      ['Política de Privacidade', '#'],
    ],
  ],
];

// no desktop ficam dentro de "Fale Com a Gente"; no mobile, abaixo do acordeão
function Socials({ className }) {
  return (
    <div className={`footer__socials ${className}`}>
      <a href="#" aria-label="Instagram"><img src={instagram.src} alt="" /></a>
      <a href="#" aria-label="LinkedIn"><img src={linkedin.src} alt="" /></a>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__shape" aria-hidden="true" />
        <div className="footer__row">
          <Link href="/" className="footer__logo">
            <Image src={logo} alt="Contrei" sizes="291px" />
          </Link>
          <div className="footer__nav">
            <div className="footer__accordion">
              {columns.map(([title, links], i) => (
                <details key={title} className="footer__column" open={i === 0}>
                  <summary>{title}</summary>
                  <ul className="footer__list">
                    {links.map(([label, href]) => (
                      <li key={label}><Link href={href}>{label}</Link></li>
                    ))}
                  </ul>
                </details>
              ))}
              <details className="footer__column">
                <summary>Fale Com a Gente</summary>
                <address className="footer__contact">
                  <p>Minas Gerais: <a href="tel:+553232282252" className="footer__tel">(32) 3228-2252</a></p>
                  <p>São Paulo: <a href="tel:+551140811978" className="footer__tel">(11) 4081-1978</a></p>
                  <p>
                    Rio de Janeiro: <a href="tel:+552123912252" className="footer__tel">(21) 2391-2252</a>
                    <br />
                    <a href="mailto:comercial@contrei.com">comercial@contrei.com</a>
                  </p>
                  <p>Segunda a Sexta-feira das 9h às 18h</p>
                </address>
                <Socials className="footer__socials--desktop" />
              </details>
            </div>
            <Socials className="footer__socials--mobile" />
          </div>
        </div>
        <div className="footer__final">
          <p className="footer__copy">Contrei © 16.839.755/0001-14</p>
          <div className="footer__badges">
            <Image src={socTree} alt="Selo SOC Tree – Contrei, CNPJ 16.839.755/0001-14" sizes="144px" className="footer__seal" />
            <img src={vanzak.src} alt="Vanzak Labs" className="footer__vanzak" />
          </div>
        </div>
      </footer>
    </>
  );
}
