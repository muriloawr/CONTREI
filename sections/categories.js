'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../assets/section-categories.css';
import lines from '../snippets/lines';
import fotoGestao from '../assets/categories-gestao.webp';
import fotoSaude from '../assets/categories-saude.webp';
import fotoTecnologia from '../assets/categories-tecnologia.webp';
import fotoConsultoria from '../assets/categories-consultoria.webp';
import ringGestao from '../assets/categories-ring-gestao.svg';
import ringSaude from '../assets/categories-ring-saude.svg';
import ringTecnologia from '../assets/categories-ring-tecnologia.svg';
import ringConsultoria from '../assets/categories-ring-consultoria.svg';
import iconGestao from '../assets/categories-icon-gestao.svg';
import iconSaude from '../assets/categories-icon-saude.svg';
import iconTecnologia from '../assets/categories-icon-tecnologia.svg';
import iconConsultoria from '../assets/categories-icon-consultoria.svg';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

const categories = [
  {
    key: 'gestao',
    label: 'Gestão',
    photo: fotoGestao,
    ring: ringGestao,
    icon: iconGestao,
    title: 'Gestão[dm]Documental & Legal',
    text: 'Suas obrigatoriedades de SST e compliance no piloto automático com a metodologia Contrei. Tenha documentos e laudos sempre em dia, eliminando riscos de multas.',
    tags: ['Laudos Técnicos', 'eSocial', 'PGR', 'PCMSO', 'LTCAT'],
  },
  {
    key: 'saude',
    label: 'Saúde',
    photo: fotoSaude,
    ring: ringSaude,
    icon: iconSaude,
    title: 'Saúde Ocupacional[dm]& Bem-estar',
    text: 'Cuidado clínico preventivo e[m] ergonomia para quem faz sua[m] empresa acontecer. Gestão[m] completa com agendamento[m] ágil de ASO e controle[m] preditivo de absenteísmo.',
    tags: ['ASO Nacional', 'Exames Clínicos', 'Ambulatório', 'Ergonomia NR-17', 'Absenteísmo'],
  },
  {
    key: 'tecnologia',
    label: 'Tecnologia',
    photo: fotoTecnologia,
    ring: ringTecnologia,
    icon: iconTecnologia,
    title: 'Tecnologia & Dados',
    text: 'Visibilidade total de SST e[m] saúde corporativa sem planilhas[m] manuais. Painéis gerenciais em[m] tempo real com relatórios prontos[m] para auditorias corporativas.',
    tags: ['Plataforma BI', 'indicadores de SST', 'Dashboard', 'LGPD'],
  },
  {
    key: 'consultoria',
    label: 'Consultoria',
    photo: fotoConsultoria,
    ring: ringConsultoria,
    icon: iconConsultoria,
    title: 'Consultoria, Perícias[dm]& Atendimento',
    text: 'Engenharia de segurança sênior[m] e assistência[d] técnica pericial[m] em todo o Brasil. Suporte[d] que[m] vai além do papel para proteger[m] sua[d] operação judicialmente.',
    tags: ['Terceirização SESMT', 'Perícias Trabalhistas', 'Treinamentos EAD', 'Medições Ambientais'],
  },
];

// clicar num quadrante do anel troca a foto, o anel (quadrante ativo em azul claro) e o card
export default function Categories() {
  const [active, setActive] = useState(0);
  const current = categories[active];
  const state = (i) => (i === active ? ' is-active' : '');

  return (
    <section id="solucoes" className="categories">
      <div className="categories__inner">
        <div className="categories__photos">
          {categories.map((c, i) => (
            <Image
              key={c.key}
              src={c.photo}
              alt=""
              sizes="(min-width: 1024px) min(1600px, 105vw), 672px"
              className={`categories__photo categories__photo--${c.key}${state(i)}`}
            />
          ))}
        </div>

        <div className="categories__ring" role="group" aria-label="Categorias de serviços">
          {categories.map((c, i) => (
            <img key={c.key} src={c.ring.src} alt="" className={`categories__ring-img${state(i)}`} />
          ))}
          {categories.map((c, i) => (
            <button
              key={c.key}
              type="button"
              className={`categories__slice categories__slice--${c.key}`}
              aria-label={c.label}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="categories__card" aria-live="polite">
          {/* a key remonta o conteúdo a cada troca, o que dispara o fade de entrada */}
          <div key={current.key} className="categories__content">
            <div className="categories__text">
              <div className="categories__head">
                <img src={current.icon.src} alt="" className="categories__icon" />
                <h3 className="categories__title">{lines(current.title)}</h3>
              </div>
              <p className="categories__desc">{lines(current.text)}</p>
            </div>
            <div className="categories__actions">
              <ul className="categories__tags">
                {current.tags.map((tag) => (
                  <li key={tag} className="categories__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <a href="#proposta" className="button">
                Ver serviços
                <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
                <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
