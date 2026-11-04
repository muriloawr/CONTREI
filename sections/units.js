import Image from 'next/image';
import '../assets/section-units.css';
import Slider from '../snippets/slider';
import fotoSede from '../assets/units-sede.webp';
import fotoBh1 from '../assets/units-bh-1.webp';
import fotoBh2 from '../assets/units-bh-2.webp';
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
  `photo` é opcional: sem foto, o card mostra o símbolo da Contrei no lugar.
*/
const units = [
  {
    name: 'Sede Administrativa',
    photo: fotoSede,
    address: ['Rua Gonçalves Dias, 229', 'Bairro Funcionários', 'Belo Horizonte/MG'],
    contacts: [
      { phone: '(31) 3228-2250' },
      { dept: 'Comercial', phone: '(31) 3228-2252', email: 'comercial@contrei.com' },
      { dept: 'Engenharia', phone: '(31) 3228-2256', email: 'engenharia@contrei.com' },
      { dept: 'Ergonomia', phone: '(31) 3228-2220', email: 'ergonomia@contrei.com' },
      { dept: 'Ouvidoria', phone: '(31) 3228-2218', email: 'ouvidoria@contrei.com' },
      { dept: 'Financeiro', phone: '(31) 3228-2253', email: 'faturamento@contrei.com' },
    ],
  },
  {
    name: 'Clínica BH 1',
    photo: fotoBh1,
    address: ['Rua dos Carijós, 244 –', '5º, 6º e 9º andares', 'Bairro Centro – BH/MG'],
    contacts: [
      { label: 'Agendamento de Exames:' },
      { phone: '(31) 3214-5250', ext: 'Ramal 4' },
      { whatsapp: '(31) 98711-6462' },
      { email: 'gerencia.cesmor@contrei.com' },
    ],
  },
  {
    name: 'Clínica BH 2',
    photo: fotoBh2,
    address: ['Rua Bernardo Guimarães, 1587 –', 'Bairro Lourdes – BH/MG'],
    contacts: [
      { phone: '(31) 3228-2250', ext: 'Ramal 2280' },
      { dept: 'Comercial', phone: '(31) 3228-2276', email: 'comercial01@contrei.com' },
      { dept: 'Gestão de processos e qualidade', phone: '(31) 98490-3906', email: 'projetos03@contrei.com' },
      { dept: 'E-social', phone: '(31) 3228-2224', email: 'soc@contrei.com' },
      { dept: 'Pós-vendas', phone: '(31) 3228-2218', email: 'posvendas@contrei.com' },
    ],
  },
  {
    name: 'Clínica Contagem',
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
    photo: fotoMontesClaros,
    address: ['Rua Carbono, 160 e 168', 'Bairro Vila Brasília', 'Montes Claros/MG'],
    contacts: [
      { label: 'Agendamento de Exames / Comercial:' },
      { phone: '(38) 3224-7461' },
      { whatsapp: '(38) 98406-5266' },
      { email: 'gerenciaengenhariamoc@contrei.com' },
      { email: 'gerenciamedicinamoc@contrei.com' },
    ],
  },
  {
    name: 'Unidade São Paulo',
    address: ['Alameda Santos, 1767/1773 –', 'Cerqueira César – São Paulo/SP'],
    contacts: [{ whatsapp: '(11) 4081-1978' }, { email: 'comercial.sp@contrei.com' }],
  },
  {
    name: 'Unidade Rio de Janeiro',
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
              <ul className="units__info">
                {u.contacts.map((c, i) => (
                  <Contact key={i} c={c} />
                ))}
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
