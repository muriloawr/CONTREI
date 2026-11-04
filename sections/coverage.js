import '../assets/section-coverage.css';
import lines from '../snippets/lines';
import logo from '../assets/coverage-logo.svg';

export default function Coverage() {
  return (
    <section id="unidades" className="coverage">
      <div className="coverage__inner">
        <div className="coverage__content">
          <h2 className="title">{lines('Uma clínica credenciada perto[d] de cada unidade[m] da sua empresa.')}</h2>
          <p className="coverage__text">
            {lines(
              'Nascemos em Minas Gerais e[m] preservamos esse centro de[d] competência técnica, mas hoje proporcionamos governança[d] unificada para indústrias e corporações espalhadas de norte a sul.[dm][dm]' +
                'Com mais de 2.500 clínicas próprias e credenciadas em todos os estados,[d] sua empresa agenda exames exatamente onde os colaboradores[d] operam, sem transtornos de deslocamento ou logística complexa.',
            )}
          </p>
        </div>
        <div className="coverage__art" aria-hidden="true">
          <div className="coverage__map">
            <span className="coverage__texture coverage__texture--1" />
            <span className="coverage__texture coverage__texture--2" />
            <span className="coverage__texture coverage__texture--3" />
          </div>
          <img src={logo.src} alt="" className="coverage__logo" />
        </div>
      </div>
    </section>
  );
}
