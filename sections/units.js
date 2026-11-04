import Image from 'next/image';
import '../assets/section-units.css';
import Slider from '../snippets/slider';
import EqualCards from '../snippets/equal-cards';
import fotoSede from '../assets/units-sede.webp';
import fotoCentro from '../assets/units-centro.webp';
import fotoLourdes from '../assets/units-lourdes.webp';
import fotoContagem from '../assets/units-contagem.webp';
import fotoBetim from '../assets/units-betim.webp';
import fotoMontesClaros from '../assets/units-montes-claros.webp';
import logo from '../assets/coverage-logo.svg';
import iconPhone from '../assets/units-icon-phone.svg';
import iconWhatsapp from '../assets/units-icon-whatsapp.svg';
import iconMail from '../assets/units-icon-mail.svg';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

/*
  Contatos de cada unidade, na ordem em que aparecem no card:
  - { phone: '(31) 3228-2250', ext: 'Ramal 4' }  telefone (ramal opcional)
  - { whatsapp: '(31) 98711-6462' }              WhatsApp
  - { email: 'x@contrei.com' }                   e-mail
  - { dept: 'Comercial', phone, email }          setor: nome e telefone em negrito, e-mail embaixo
  - { label: 'Agendamento de Exames:' }          subtítulo de um grupo de contatos
  `contacts` aparece sempre (telefone, WhatsApp e um e-mail); `more` fica escondido em "Ver mais contatos".
  `maps` é o link do Google Maps da unidade (sem ele, o botão busca pelo endereço).
  `photo` é opcional: sem foto, o card mostra o símbolo da Contrei no lugar.
*/
const units = [
  {
    name: 'Sede Administrativa',
    maps: 'https://www.google.com.br/maps/place/Contrei/@-19.9338071,-43.929753,17z/data=!3m1!4b1!4m6!3m5!1s0xa699c00ff20701:0xbd07f79179f16189!8m2!3d-19.9338122!4d-43.9271781!16s%2Fg%2F1pv1yjd7z',
    photo: fotoSede,
    address: ['Rua Gonçalves Dias, 229', 'Bairro Funcionários', 'Belo Horizonte/MG'],
    contacts: [{ phone: '(31) 3228-2250' }, { email: 'comercial@contrei.com' }],
    more: [
      { dept: 'Comercial', phone: '(31) 3228-2252', email: 'comercial@contrei.com' },
      { dept: 'Engenharia', phone: '(31) 3228-2256', email: 'engenharia@contrei.com' },
      { dept: 'Ergonomia', phone: '(31) 3228-2220', email: 'ergonomia@contrei.com' },
      { dept: 'Ouvidoria', phone: '(31) 3228-2218', email: 'ouvidoria@contrei.com' },
      { dept: 'Financeiro', phone: '(31) 3228-2253', email: 'faturamento@contrei.com' },
    ],
  },
  {
    name: 'Clínica Centro',
    maps: 'https://www.google.com.br/maps/place/Contrei/@-19.9192568,-43.9400634,17z/data=!3m1!4b1!4m6!3m5!1s0xa699fb3ed992fd:0x3c3fc64e02057375!8m2!3d-19.9192619!4d-43.9374885!16s%2Fg%2F11bx1srdzh',
    photo: fotoCentro,
    address: ['Rua dos Carijós, 244 –', '5º, 6º e 9º andares', 'Bairro Centro – BH/MG'],
    contacts: [
      { label: 'Agendamento de Exames:' },
      { phone: '(31) 3214-5250', ext: 'Ramal 4' },
      { whatsapp: '(31) 98711-6462' },
      { email: 'gerencia.cesmor@contrei.com' },
    ],
  },
  {
    name: 'Clínica Lourdes',
    maps: 'https://www.google.com.br/maps/place/Contrei+-+Intelig%C3%AAncia+em+Sa%C3%BAde,+Seguran%C3%A7a+e+Ergonomia+do+Trabalho/@-19.9297833,-43.9421183,17z/data=!3m1!4b1!4m6!3m5!1s0xa6990050cbb429:0x7e356a7333d5d8a4!8m2!3d-19.9297884!4d-43.9395434!16s%2Fg%2F11y8w2_wtv',
    photo: fotoLourdes,
    address: ['Rua Bernardo Guimarães, 1587 –', 'Bairro Lourdes – BH/MG'],
    contacts: [{ phone: '(31) 3228-2250', ext: 'Ramal 2280' }, { email: 'comercial01@contrei.com' }],
    more: [
      { dept: 'Comercial', phone: '(31) 3228-2276', email: 'comercial01@contrei.com' },
      { dept: 'Gestão de processos e qualidade', phone: '(31) 98490-3906', email: 'projetos03@contrei.com' },
      { dept: 'E-social', phone: '(31) 3228-2224', email: 'soc@contrei.com' },
      { dept: 'Pós-vendas', phone: '(31) 3228-2218', email: 'posvendas@contrei.com' },
    ],
  },
  {
    name: 'Clínica Contagem',
    maps: 'https://www.google.com.br/maps/place/Contrei/@-19.9396904,-44.0362685,16.75z/data=!4m6!3m5!1s0xa695e9887f1999:0x2b978c4765430b70!8m2!3d-19.9391598!4d-44.0341398!16s%2Fg%2F1td3mv35',
    photo: fotoContagem,
    address: ['Av. José Faria da Rocha, 5119', 'Bairro Eldorado', 'Contagem/MG'],
    contacts: [
      { label: 'Agendamento de Exames:' },
      { phone: '(31) 3395-4611', ext: 'Ramal 4' },
      { whatsapp: '(31) 98711-6463' },
      { email: 'gerencia.cestcon@contrei.com' },
    ],
  },
  {
    name: 'Clínica Betim',
    maps: 'https://www.google.com.br/maps/place/Contrei/@-19.9714967,-44.205665,17z/data=!3m1!4b1!4m6!3m5!1s0xa6c39442362869:0xc1d5f203dd393b53!8m2!3d-19.9715018!4d-44.2030901!16s%2Fg%2F12m9hn8ts',
    photo: fotoBetim,
    address: ['Av. Marechal Rondon, 28', 'Bairro Brasileia', 'Betim/MG'],
    contacts: [
      { label: 'Agendamento de Exames:' },
      { phone: '(31) 3594-2131', ext: 'Ramal 4' },
      { whatsapp: '(31) 98711-6465' },
      { email: 'gerencia.cestbem@contrei.com' },
    ],
  },
  {
    name: 'Unidade Montes Claros',
    maps: 'https://www.google.com/maps/place/Contrei+Medicina+e+Seguran%C3%A7a+do+Trabalho/@-16.7146367,-43.8709322,17z/data=!3m1!4b1!4m6!3m5!1s0x754ab566adda9c7:0x3ad3f00658139deb!8m2!3d-16.7146419!4d-43.8660613!16s%2Fg%2F11byv9s1j6',
    photo: fotoMontesClaros,
    address: ['Rua Carbono, 160 e 168', 'Bairro Vila Brasília', 'Montes Claros/MG'],
    contacts: [
      { label: 'Agendamento de Exames / Comercial:' },
      { phone: '(38) 3224-7461' },
      { whatsapp: '(38) 98406-5266' },
      { email: 'gerenciaengenhariamoc@contrei.com' },
    ],
    more: [{ email: 'gerenciamedicinamoc@contrei.com' }],
  },
  {
    name: 'Unidade São Paulo',
    maps: 'https://www.google.com/maps/place/Brasil+Smart+Offices+Paulista/@-23.5627418,-46.6580565,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59c8d86c56a7:0xb2f8d6a9b814aefd!8m2!3d-23.5627467!4d-46.6554816!16s%2Fg%2F11btrrh_4q',
    address: ['Alameda Santos, 1767/1773 –', 'Cerqueira César – São Paulo/SP'],
    contacts: [{ whatsapp: '(11) 4081-1978' }, { email: 'comercial.sp@contrei.com' }],
  },
  {
    name: 'Unidade Rio de Janeiro',
    maps: 'https://www.google.com/maps/place/R.+M%C3%A9xico,+31+-+Sl+703+-+Centro,+Rio+de+Janeiro+-+RJ,+20031-144/@-22.9118703,-43.1759586,17z/data=!4m6!3m5!1s0x99816a129b8fb9:0x13fe3caa4208d54!8m2!3d-22.9114347!4d-43.1744684!16s%2Fg%2F11fmrdq3qr',
    address: ['R. México, 31 – Sala 703 – Centro –', 'Rio de Janeiro/RJ'],
    contacts: [{ whatsapp: '(21) 2391-2252' }, { email: 'comercial.rj@contrei.com' }],
  },
];

const digits = (n) => n.replace(/\D/g, '');
const tel = (n) => `tel:+55${digits(n)}`;
const mapsUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.map((l) => l.replace(/ –$/, '')).join(', '))}`;

function Contact({ c }) {
  if (c.label) return <li className="units__label">{c.label}</li>;
  if (c.dept)
    return (
      <li className="units__dept">
        <a href={tel(c.phone)} className="units__strong">
          {c.dept} - {c.phone}
        </a>
        {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
      </li>
    );
  if (c.email)
    return (
      <li>
        <img src={iconMail.src} alt="" />
        <a href={`mailto:${c.email}`}>{c.email}</a>
      </li>
    );
  if (c.whatsapp)
    return (
      <li>
        <img src={iconWhatsapp.src} alt="WhatsApp" />
        <a href={`https://wa.me/55${digits(c.whatsapp)}`} target="_blank" rel="noopener noreferrer" className="units__strong">
          {c.whatsapp}
        </a>
      </li>
    );
  return (
    <li>
      <img src={iconPhone.src} alt="Telefone" />
      <a href={tel(c.phone)} className="units__strong">
        {c.phone}
        {c.ext && ` ${c.ext}`}
      </a>
    </li>
  );
}

// carrossel: 3 cards por página no desktop, 2 no tablet e 1 no celular (--per-view em section-units.css)
export default function Units() {
  return (
    <section className="units">
      <h2 className="title units__title">Nossas unidades próprias</h2>
      <Slider className="units__slider">
        {units.map((u) => (
          <article key={u.name} className="units__card">
            {u.photo ? (
              <Image
                src={u.photo}
                alt={`Foto da ${u.name}`}
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 50vw, 100vw"
                className="units__photo"
              />
            ) : (
              <div className="units__photo units__photo--empty">
                <img src={logo.src} alt="" />
              </div>
            )}
            <div className="units__body">
              <h3 className="units__name">{u.name}</h3>
              <p className="units__address">
                {u.address.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
              <div className="units__contacts">
                <ul className="units__info">
                  {u.contacts.map((c, i) => (
                    <Contact key={i} c={c} />
                  ))}
                </ul>
                {u.more && (
                  <details className="units__more">
                    <summary>
                      <span className="units__more-open">Ver mais contatos</span>
                      <span className="units__more-close">Ver menos</span>
                      <span className="units__more-chevron" aria-hidden="true" />
                    </summary>
                    <ul className="units__info">
                      {u.more.map((c, i) => (
                        <Contact key={i} c={c} />
                      ))}
                    </ul>
                  </details>
                )}
              </div>
              <a href={u.maps || mapsUrl(u.address)} target="_blank" rel="noopener noreferrer" className="button units__maps">
                Abrir no Google Maps
                <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
                <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
              </a>
            </div>
          </article>
        ))}
      </Slider>
      <EqualCards card=".units__card" />
    </section>
  );
}
