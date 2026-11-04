import Image from 'next/image';
import '../assets/section-clients.css';
import minerva from '../assets/clients-minerva.webp';
import minasGerais from '../assets/clients-minas-gerais.webp';
import ge from '../assets/clients-ge.webp';
import sebrae from '../assets/clients-sebrae.webp';
import senac from '../assets/clients-senac.webp';
import gerdau from '../assets/clients-gerdau.webp';

const logos = [
  [minerva, 'Minerva Foods'],
  [minasGerais, 'Governo de Minas Gerais'],
  [ge, 'GE'],
  [sebrae, 'Sebrae'],
  [senac, 'Senac'],
  [gerdau, 'Gerdau'],
];

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__heading">
        <p className="clients__eyebrow">Siga o exemplo das maiores do mercado brasileiro</p>
        <h2 className="clients__title">Empresas que escolheram a Contrei:</h2>
      </div>
      <div className="clients__viewport">
        <ul className="clients__track">
          {logos.map(([src, alt]) => (
            <li key={alt} className="clients__item">
              <Image src={src} alt={alt} sizes="153px" loading="eager" className="clients__logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
