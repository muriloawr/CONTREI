import Image from 'next/image';
import '../assets/section-hero.css';
import textura from '../assets/hero-textura.webp';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';
import { external } from '../snippets/whatsapp';

// `variant` vira o modificador `hero--{variant}` (posições da foto/textos de cada página); aceita vários, separados por espaço
// `image` é opcional: hero só com textura (ex.: Consultoria)
export default function Hero({ variant = '', image, alt, sizes, title, text, cta }) {
  return (
    <section className={['hero', ...variant.split(' ').filter(Boolean).map((v) => `hero--${v}`)].join(' ')}>
      <Image src={textura} alt="" sizes="100vw" className="hero__texture" />
      <Image src={textura} alt="" sizes="100vw" className="hero__texture hero__texture--mirror" />
      <div className="hero__inner">
        {image && (
          <>
            <Image src={image} alt={alt} sizes={sizes} loading="eager" fetchPriority="high" className="hero__image" />
            <span className="hero__fade" />
          </>
        )}
        <h1 className="hero__title">{title}</h1>
        <div className="hero__content">
          <p className="hero__text">{text}</p>
          <a href={cta.href} {...(cta.href.startsWith('http') ? external : {})} className="button hero__cta">
            {cta.label}
            <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
            <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
          </a>
        </div>
      </div>
    </section>
  );
}
