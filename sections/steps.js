import Image from 'next/image';
import '../assets/section-steps.css';
import textura from '../assets/steps-textura.webp';
import prancheta from '../assets/steps-prancheta.webp';
import iconDiagnostico from '../assets/steps-icon-diagnostico.svg';
import iconEsocial from '../assets/steps-icon-esocial.svg';
import iconAuditoria from '../assets/steps-icon-auditoria.svg';
import iconPlano from '../assets/steps-icon-plano.svg';
import iconRede from '../assets/steps-icon-rede.svg';
import { WHATSAPP_URL, external } from '../snippets/whatsapp';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';
import lines from '../snippets/lines';

const steps = [
  ['diagnostico', iconDiagnostico, 'Diagnóstico', 'Mapeamos setores[d] e riscos[m] da sua[d] empresa antes[m] de[d] qualquer proposta.'],
  ['esocial', iconEsocial, 'eSocial & BI', 'Enviamos eventos[d] ao[m] eSocial e[d] disponibilizamos[dm] dashboards com[d] indicadores.'],
  ['auditoria', iconAuditoria, 'Auditoria', 'Revisamos[d] indicadores,[dm] antecipamos[d] mudanças[m] e apoiamos[d] fiscalizações.'],
  ['plano', iconPlano, 'Plano de Ação', 'Estruturamos[d] programas[dm] obrigatórios e[d] integramos[m] os dados[d] ao seu sistema.'],
  ['rede', iconRede, 'Rede Médica', 'Clínicas próximas[d] para[m] agendamento[d] de ASOs e[m] exames[d] complementares.'],
];

export default function Steps() {
  return (
    <section className="steps">
      <div className="steps__inner">
        <div className="steps__art">
          {/* forma girada 180° como no Figma; o miolo gira de volta para as imagens ficarem em pé */}
          <div className="steps__shape">
            <div className="steps__shape-inner">
              <Image src={textura} alt="" sizes="(min-width: 1024px) min(97.1vw, 1865px), 981px" className="steps__texture" />
            </div>
          </div>
          <span className="steps__glow" />
          <Image
            src={prancheta}
            alt="Mãos segurando uma prancheta com gráficos e apontando com uma caneta"
            sizes="(min-width: 1024px) min(66.4vw, 1275px), 672px"
            className="steps__image"
          />
        </div>
        <div className="steps__heading">
          <p className="steps__eyebrow">Como funciona o atendimento da Contrei?</p>
          <h2 className="steps__title">{lines('Do diagnóstico ao[m] resultado:[d] tudo o que[m] sua empresa precisa.')}</h2>
        </div>
        <ul className="steps__cards">
          {steps.map(([key, icon, title, text]) => (
            <li key={key} className="steps__card">
              <div className="steps__card-head">
                <span className="steps__icon">
                  <img src={icon.src} alt="" className={`steps__icon-img steps__icon-img--${key}`} />
                </span>
                <h3 className="steps__card-title">{title}</h3>
              </div>
              <p className="steps__card-text">{lines(text)}</p>
            </li>
          ))}
        </ul>
        <a href={WHATSAPP_URL} {...external} className="button steps__cta">
          Quero um diagnóstico para a minha empresa
          <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
          <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
        </a>
      </div>
    </section>
  );
}
