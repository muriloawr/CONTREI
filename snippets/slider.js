'use client';

import { Children, useEffect, useRef, useState } from 'react';
import Dots from './dots';

// slider com rolagem nativa (arrasta no touch); setas e dots só aparecem com mais de uma página.
// Cards por página: a seção define `--per-view` no CSS do slider (padrão 1, pode mudar por breakpoint);
// a largura de cada slide e o número de dots seguem esse valor.
// `autoplay` (ms) passa para o próximo sozinho; o tempo recomeça a cada troca e pausa com o mouse em cima.
export default function Slider({ className = '', autoplay = 0, children }) {
  const root = useRef(null);
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const slides = Children.toArray(children);
  const pages = Math.ceil(slides.length / perView);

  useEffect(() => {
    const read = () => setPerView(Math.max(1, parseInt(getComputedStyle(root.current).getPropertyValue('--per-view'), 10) || 1));
    read();
    window.addEventListener('resize', read);
    return () => window.removeEventListener('resize', read);
  }, []);

  const go = (i) => {
    const el = track.current;
    el.scrollTo({ left: ((i + pages) % pages) * el.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!autoplay || paused || pages < 2) return;
    const t = setTimeout(() => go(active + 1), autoplay);
    return () => clearTimeout(t);
  }, [autoplay, paused, pages, active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={root}
      className={`slider ${className}`}
      onMouseEnter={autoplay ? () => setPaused(true) : undefined}
      onMouseLeave={autoplay ? () => setPaused(false) : undefined}
    >
      <div
        ref={track}
        className="slider__track"
        onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
      >
        {slides.map((slide) => (
          <div key={slide.key} className="slider__slide">
            {slide}
          </div>
        ))}
      </div>
      {pages > 1 && (
        <>
          <button type="button" className="slider__arrow slider__arrow--prev" aria-label="Slide anterior" onClick={() => go(active - 1)}>
            <span className="slider__chevron" />
          </button>
          <button type="button" className="slider__arrow slider__arrow--next" aria-label="Próximo slide" onClick={() => go(active + 1)}>
            <span className="slider__chevron" />
          </button>
          <div className="slider__dots">
            <Dots count={pages} active={Math.min(active, pages - 1)} onSelect={go} />
          </div>
        </>
      )}
    </div>
  );
}
