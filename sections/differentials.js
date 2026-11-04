import '../assets/section-differentials.css';
import Slider from '../snippets/slider';
import lines from '../snippets/lines';
import iconCustos from '../assets/differentials-icon-custos.svg';
import iconRendimento from '../assets/differentials-icon-rendimento.svg';
import iconNormas from '../assets/differentials-icon-normas.svg';
import iconFinanceiro from '../assets/differentials-icon-financeiro.svg';
import { WHATSAPP_URL, external } from '../snippets/whatsapp';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

const prevencao =
  'Prevenção e controle pontual[m] são[d] sempre mais econômicos[m] do que arcar[d] com multas[m] ou passivos trabalhistas.';

const cards = [
  ['custos', iconCustos, 'Redução de Custos', prevencao],
  ['rendimento', iconRendimento, 'Maior Rendimento', 'Colaboradores seguros e com saúde[d] em dia mantêm a motivação elevada[d] e reduzem o índice de absenteísmo.'],
  ['normas', iconNormas, 'Respeito às normas', 'Operação 100% alinhada às Normas[d] Regulamentadoras, à legislação previdenciária[d] e às regras do Ministério do Trabalho.'],
  ['financeiro', iconFinanceiro, 'Impacto Financeiro', prevencao],
];

// no desktop os cards ficam numa grade 2×2; no mobile o <Slider> vira carrossel com dots
export default function Differentials() {
  return (
    <section className="differentials">
      <div className="differentials__heading">
        <p className="differentials__eyebrow">Porque a Contrei é diferente?</p>
        <h2 className="differentials__title">{lines('Nossos resultados[d] não aparecem[d] apenas no relatório.')}</h2>
      </div>
      <Slider className="differentials__slider">
        {cards.map(([key, icon, title, text]) => (
          <div key={key} className="differentials__card">
            <div className="differentials__card-head">
              <span className="differentials__icon">
                <img src={icon.src} alt="" className={`differentials__icon-img differentials__icon-img--${key}`} />
              </span>
              <h3 className="differentials__card-title">{title}</h3>
            </div>
            <p className="differentials__card-text">{lines(text)}</p>
          </div>
        ))}
      </Slider>
      {/* o botão só existe no Figma mobile */}
      <a href={WHATSAPP_URL} {...external} className="button differentials__cta">
        Quero um diagnóstico para a minha empresa
        <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
        <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
      </a>
    </section>
  );
}
