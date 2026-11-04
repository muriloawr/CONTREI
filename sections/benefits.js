import Image from 'next/image';
import '../assets/section-benefits.css';
import Slider from '../snippets/slider';
import lines from '../snippets/lines';
import mulher from '../assets/benefits-mulher.webp';
import colaboradores from '../assets/benefits-colaboradores.webp';
import iconObrigacoes from '../assets/benefits-icon-obrigacoes.svg';
import iconClinicas from '../assets/benefits-icon-clinicas.svg';
import iconBi from '../assets/benefits-icon-bi.svg';
import iconFaturamento from '../assets/benefits-icon-faturamento.svg';
import iconLocal from '../assets/benefits-icon-local.svg';
import iconAtendimento from '../assets/benefits-icon-atendimento.svg';
import iconErgonomia from '../assets/benefits-icon-ergonomia.svg';
import iconIntegridade from '../assets/benefits-icon-integridade.svg';

// banners disponíveis: <Benefits banner="rh-juridico" /> ou <Benefits banner="colaboradores" />
const banners = {
  'rh-juridico': {
    photo: mulher,
    alt: 'Mulher trabalhando no notebook em um escritório',
    eyebrow: 'Para o seu RH & Jurídico',
    title: 'Menos burocracia,[dm] mais foco estratégico.',
    cards: [
      ['obrigacoes', iconObrigacoes, 'Obrigações legais e[d] NRs[m] monitoradas[d] continuamente[m] sem[d] correria de última hora.'],
      ['clinicas', iconClinicas, 'Fim do tempo[d] desperdiçado[m] ligando[d] para clínicas e[dm] alimentando planilhas[dm] manuais.'],
      ['bi', iconBi, 'Plataforma BI com[d] relatórios[m] gerenciais[d] consolidados[m] prontos[d] para a diretoria.'],
      ['faturamento', iconFaturamento, 'Faturamento único e[dm] centralizado para todas[d] as[m] suas filiais pelo país.'],
    ],
  },
  colaboradores: {
    photo: colaboradores,
    alt: 'Colaboradores sorrindo, um deles com capacete de segurança',
    eyebrow: 'Para os Seus Colaboradores',
    title: 'Cuidado humano que chega[d] onde o trabalho acontece.',
    cards: [
      ['local', iconLocal, 'Exames admissionais e[d] periódicos agendados[d] com proximidade da[d] residência ou posto.'],
      ['atendimento', iconAtendimento, 'Atendimento[d] humanizado e[d] infraestrutura de ponta[d] em toda a rede[d] credenciada.'],
      ['ergonomia', iconErgonomia, 'Programas[d] ergonômicos práticos[d] que trazem alívio e[d] conforto no dia a dia.'],
      ['integridade', iconIntegridade, 'Cultura de preservação[d] da integridade física[d] em todas as fases[d] operacionais.'],
    ],
  },
};

// cada filho do <Slider> é um banner; com mais de um aparecem as setas e os dots
export default function Benefits({ banner = 'rh-juridico' }) {
  const b = banners[banner];
  return (
    <section className={`benefits benefits--${banner}`}>
      <Slider className="benefits__slider">
        <div key={banner} className="benefits__slide">
          <div className="benefits__photo">
            <Image src={b.photo} alt={b.alt} sizes="(min-width: 1024px) min(64.9vw, 1246px), 755px" />
          </div>
          <span className="benefits__fade" />
          <span className="benefits__top" />
          <div className="benefits__heading">
            <p className="benefits__eyebrow">{b.eyebrow}</p>
            <h2 className="benefits__title">{lines(b.title)}</h2>
          </div>
          <ul className="benefits__cards">
            {b.cards.map(([key, icon, text]) => (
              <li key={key} className="benefits__card">
                <span className="benefits__icon">
                  <img src={icon.src} alt="" className={`benefits__icon-img benefits__icon-img--${key}`} />
                </span>
                <p className="benefits__text">{lines(text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Slider>
    </section>
  );
}
