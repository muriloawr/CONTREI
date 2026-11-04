import '../assets/section-faq.css';
import lines from '../snippets/lines';

// Figma 504:3769. Accordion nativo (<details>, como o do footer): o 1º item vem aberto; `items`: [{ question, answer }].
// Textos aceitam as quebras de lines().
// `variant="light"`: fundo azul bem claro e textos escuros (usado na home)
export default function Faq({ eyebrow, title, text, items, variant }) {
  return (
    <section className={variant ? `faq faq--${variant}` : 'faq'}>
      <div className="faq__heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="title">{lines(title)}</h2>
        </div>
        <p className="faq__text">{lines(text)}</p>
      </div>
      <div className="faq__list">
        {items.map(({ question, answer }, i) => (
          <details key={question} className="faq__item" open={i === 0}>
            <summary className="faq__question">
              <span>{lines(question)}</span>
            </summary>
            {answer && <p className="faq__answer">{lines(answer)}</p>}
          </details>
        ))}
      </div>
    </section>
  );
}
