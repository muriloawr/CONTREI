'use client';

import { useEffect, useRef } from 'react';

// Deixa os cards de uma seção com a mesma altura mínima (a do maior card com os <details> fechados),
// para que um <details> aberto faça crescer só o próprio card. Uso: <EqualCards card=".units__card" />
// A altura vai na variável --card-h da seção; o CSS da seção usa `min-height: var(--card-h)`.
export default function EqualCards({ card }) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current.parentElement;
    const measure = () => {
      let max = 0;
      section.querySelectorAll(card).forEach((el) => {
        let h = el.offsetHeight;
        // desconta o conteúdo dos <details> abertos (só o resumo conta)
        el.querySelectorAll('details[open]').forEach((d) => {
          h -= d.offsetHeight - d.querySelector('summary').offsetHeight;
        });
        max = Math.max(max, h);
      });
      section.style.setProperty('--card-h', `${max}px`);
    };
    const remeasure = () => {
      section.style.removeProperty('--card-h');
      measure();
    };
    remeasure();
    document.fonts?.ready.then(remeasure);
    window.addEventListener('resize', remeasure);
    return () => window.removeEventListener('resize', remeasure);
  }, [card]);

  return <span ref={ref} hidden />;
}
