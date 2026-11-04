import Hero from '../sections/hero';
import medica from '../assets/hero-medica.webp';
// import About from '../sections/about'; // oculta por enquanto
import Categories from '../sections/categories';
import Clients from '../sections/clients';
import Banner from '../sections/banner';
import Steps from '../sections/steps';
import Stats from '../sections/stats';
import Benefits from '../sections/benefits';
import Differentials from '../sections/differentials';
import Seals from '../sections/seals';
import Coverage from '../sections/coverage';
import Contact from '../sections/contact';
import Units from '../sections/units';
import Faq from '../sections/faq';
import { WHATSAPP_URL } from '../snippets/whatsapp';

// EXEMPLO: perguntas e respostas provisórias, até chegarem os textos definitivos
const faq = [
  {
    question: 'Quais serviços a Contrei oferece?',
    answer:
      'Atuamos em quatro frentes integradas: Gestão Documental & Legal (PGR, PCMSO, LTCAT e eSocial), Saúde Ocupacional (exames, ASO e ergonomia), Tecnologia & Dados (plataforma BI e indicadores de SST) e Consultoria, Perícias & Atendimento.',
  },
  {
    question: 'A Contrei atende empresas com filiais em outros estados?',
    answer:
      'Sim. Além das unidades próprias em Minas Gerais, São Paulo e Rio de Janeiro, contamos com mais de 2.500 clínicas credenciadas em todo o Brasil, com faturamento único e centralizado para todas as suas filiais.',
  },
  {
    question: 'Como funciona o agendamento de exames ocupacionais?',
    answer:
      'Sua equipe solicita o exame pelos nossos canais e o colaborador é encaminhado para a clínica mais próxima da residência ou do posto de trabalho. O ASO e os resultados ficam disponíveis na plataforma.',
  },
  {
    question: 'A Contrei faz o envio dos eventos de SST ao eSocial?',
    answer:
      'Sim. Transmitimos os eventos S-2210, S-2220 e S-2240 dentro dos prazos e acompanhamos cada retorno, evitando multas por atraso ou omissão.',
  },
  {
    question: 'Como solicito uma proposta para a minha empresa?',
    answer:
      'Basta clicar em "Solicitar Proposta" ou falar com um dos nossos consultores. Antes de apresentar a proposta, fazemos um diagnóstico dos setores e riscos da sua operação.',
  },
];

export default function Index() {
  return (
    <>
      {/* 1. Pioneirismo... */}
      <Hero
        image={medica}
        alt="Médica examinando um paciente com estetoscópio"
        sizes="(min-width: 1024px) min(52.3vw, 1004px), 506px"
        title="Pioneirismo na Medicina e Segurança do Trabalho"
        text="Tecnologia e atendimento exclusivo para a gestão completa de Saúde, Ergonomia e Segurança do Trabalho."
        cta={{ href: WHATSAPP_URL, label: 'Solicitar Proposta' }}
      />
      {/* 2. Gestão / Saúde / Tecnologia / Consultoria (mesma seção de Nossos Serviços) */}
      <Categories />
      {/* Oculta por enquanto (não está na nova ordem): <About /> — "Referência em Minas Gerais" */}
      {/* 3. Uma clínica credenciada... */}
      <Coverage />
      {/* 4. Nossas unidades próprias (carrossel) */}
      <Units />
      {/* 5. Compromisso rigoroso... */}
      <Seals />
      {/* 6 e 7. Carrossel: Menos burocracia... / Cuidado humano que chega onde o trabalho acontece */}
      <Benefits />
      {/* 8. Nossos resultados não aparecem... */}
      <Differentials />
      {/* 9. Empresas que escolheram a Contrei */}
      <Clients />
      {/* 10. Transforme a burocracia do eSocial */}
      <Banner />
      {/* 11. Do diagnóstico ao resultado */}
      <Steps />
      {/* 12. Excelência traduzida */}
      <Stats />
      {/* 13. Fale com nossos consultores */}
      <Contact />
      {/* 14. Dúvidas frequentes */}
      <Faq
        eyebrow="Dúvidas Frequentes"
        title="Perguntas frequentes[d] sobre a Contrei"
        text="Reunimos as dúvidas mais comuns[d] de RHs e gestores sobre a gestão[d] de Saúde e Segurança do Trabalho."
        items={faq}
        variant="light"
      />
    </>
  );
}
