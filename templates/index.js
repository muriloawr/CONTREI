import Hero from '../sections/hero';
import medica from '../assets/hero-medica.webp';
import About from '../sections/about';
import Clients from '../sections/clients';
import Banner from '../sections/banner';
import Steps from '../sections/steps';
import Stats from '../sections/stats';
import Benefits from '../sections/benefits';
import Differentials from '../sections/differentials';
import Seals from '../sections/seals';
import Coverage from '../sections/coverage';
import Contact from '../sections/contact';

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
        cta={{ href: '#proposta', label: 'Solicitar Proposta' }}
      />
      {/* 2. Preencher — por enquanto fica a seção "Referência em Minas Gerais" */}
      <About />
      {/* 3. Uma clínica credenciada... */}
      <Coverage />
      {/* 4. Preencher */}
      {/* 5. Compromisso rigoroso... */}
      <Seals />
      {/* 6. Menos burocracia, mais foco estratégico... */}
      <Benefits />
      {/* 7. Preencher */}
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
      {/* 14. Preencher */}
    </>
  );
}
