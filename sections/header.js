'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../assets/section-header.css';
import logo from '../assets/logo.webp';
import iconMenu from '../assets/icon-menu.svg';

/*
  Itens do menu. `href`: link direto; `items`: abre um submenu com [rótulo, link].
  Item de submenu sem link (`[rótulo]`) aparece normal, mas ainda não leva a lugar nenhum.
*/
const menu = [
  { label: 'Início', href: '/' },
  { label: 'Sobre nós', href: '#' }, // página ainda não existe
  { label: 'Nossas soluções', href: '/#solucoes' }, // por enquanto, a seção de soluções da home
  {
    label: 'Contato',
    // ainda sem links
    items: [
      ['Proposta comercial'],
      ['Credenciamento'],
      ['Cadastro médico'],
      ['Trabalhe conosco'],
      ['Fornecedores'],
      ['Ouvidoria'],
      ['Canal de denúncias'],
      ['Imprensa'],
    ],
  },
  {
    label: 'Já sou cliente',
    // ainda sem links
    items: [
      ['SOC'],
      ['MAESTRO'],
      ['Agenda digital'],
      ['BI - Dashboard'],
      ['Treinamento online'],
      ['Solicitação de proposta comercial'],
      ['Chat com pós-vendas'],
    ],
  },
];

export default function Header() {
  const nav = useRef(null);

  // os submenus fecham ao clicar fora deles ou com Esc (abrir um fecha o outro); escolher um link também fecha o menu mobile
  useEffect(() => {
    const dropdowns = () => nav.current.querySelectorAll('.header__dropdown');
    const onClick = (e) => {
      dropdowns().forEach((d) => {
        if (!d.firstChild.contains(e.target)) d.open = false; // o próprio título abre e fecha
      });
      if (e.target.closest('.header__nav a') && nav.current.matches(':popover-open')) nav.current.hidePopover();
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') dropdowns().forEach((d) => (d.open = false));
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <Image src={logo} alt="Contrei" sizes="233px" loading="eager" />
      </Link>
      <button type="button" className="header__menu" popoverTarget="menu" aria-label="Abrir menu">
        <img src={iconMenu.src} alt="" />
      </button>
      <nav ref={nav} id="menu" popover="auto" className="header__nav">
        {/* com "/" na frente as âncoras funcionam também a partir das outras páginas */}
        {menu.map((m) =>
          m.items ? (
            <details key={m.label} className="header__dropdown">
              <summary>
                {m.label}
                <span className="header__chevron" aria-hidden="true" />
              </summary>
              <div className="header__submenu">
                {m.items.map(([label, href]) =>
                  href ? (
                    <Link key={label} href={href}>
                      {label}
                    </Link>
                  ) : (
                    <a key={label} href="#" onClick={(e) => e.preventDefault()}>
                      {label}
                    </a>
                  ),
                )}
              </div>
            </details>
          ) : (
            <Link key={m.label} href={m.href}>
              {m.label}
            </Link>
          ),
        )}
        <a href="/#proposta" className="header__cta">Solicitar Proposta</a>
      </nav>
    </header>
  );
}
