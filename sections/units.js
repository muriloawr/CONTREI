import Image from 'next/image';
import '../assets/section-units.css';
import Slider from '../snippets/slider';
import fotoSaoPaulo from '../assets/units-sao-paulo.webp';
import fotoRioDeJaneiro from '../assets/units-rio-de-janeiro.webp';
import iconPhone from '../assets/units-icon-phone.svg';
import iconMail from '../assets/units-icon-mail.svg';
import iconClock from '../assets/units-icon-clock.svg';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

const saoPaulo = {
  name: 'Unidade São Paulo',
  address: 'Rua Alameda Santos, 1767/1773 | Cerqueira César – São Paulo/SP',
  phone: '(11) 4081-1978',
  email: 'comercial.sp@contrei.com',
  hours: 'Segunda à Sexta, das 8h às 18h',
  photo: fotoSaoPaulo,
};

const rioDeJaneiro = {
  name: 'Unidade Rio de Janeiro',
  address: 'Rua México, 31 – Sala 703 | Centro – Rio de Janeiro/RJ',
  phone: '(21) 2391-2252',
  email: 'comercial.rj@contrei.com',
  hours: 'Segunda à Sexta, das 8h às 18h',
  photo: fotoRioDeJaneiro,
};

// EXEMPLO: São Paulo e Rio repetidos para preencher os 8 cards até chegarem os dados reais das unidades
const units = [saoPaulo, rioDeJaneiro, saoPaulo, rioDeJaneiro, saoPaulo, rioDeJaneiro, saoPaulo, rioDeJaneiro];

const mapsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

// carrossel: 3 cards por página no desktop, 2 no tablet e 1 no celular (--per-view em section-units.css)
export default function Units() {
  return (
    <section className="units">
      <h2 className="title units__title">Nossas unidades próprias</h2>
      <Slider className="units__slider">
        {units.map((u, i) => (
          <article key={i} className="units__card">
            <Image src={u.photo} alt={`Fachada da ${u.name}`} sizes="(min-width: 1024px) 500px, (min-width: 640px) 50vw, 100vw" className="units__photo" />
            <div className="units__body">
              <h3 className="units__name">{u.name}</h3>
              <p className="units__address">{u.address}</p>
              <ul className="units__info">
                <li>
                  <img src={iconPhone.src} alt="" />
                  <a href={`tel:+55${u.phone.replace(/\D/g, '')}`}>{u.phone}</a>
                </li>
                <li>
                  <img src={iconMail.src} alt="" />
                  <a href={`mailto:${u.email}`}>{u.email}</a>
                </li>
                <li>
                  <img src={iconClock.src} alt="" />
                  {u.hours}
                </li>
              </ul>
              <a href={mapsUrl(u.address)} target="_blank" rel="noopener noreferrer" className="button units__maps">
                Abrir no Google Maps
                <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
                <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
              </a>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
