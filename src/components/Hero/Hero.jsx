import React from 'react'
import dashboardMockup from '../../../assets/descubra-seu-lucro-dashboard-mockup.png'
import { Cta, Icon, StatusMark } from '../ui/ui.jsx'
import './Hero.css'

const TRUST_ICONS = ['bolt', 'shield', 'lock']

export function Hero({ page, onOpen }) {
  const { hero } = page

  return (
    <section className="hero-section" id="topo">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__lead">{hero.subheadline}</p>

          <ul className="hero__promises">
            {hero.promises.map((item) => (
              <li key={item}>
                <StatusMark />
                {item}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <Cta label={hero.cta} source="hero" onOpen={onOpen} />
            <a className="cta cta--secondary" href={hero.secondaryHref}>
              <span>{hero.secondaryCta}</span>
              <span aria-hidden="true">â†“</span>
            </a>
          </div>

          <ul className="hero__trust">
            {hero.trust.map((item, index) => (
              <li key={item}>
                <Icon name={TRUST_ICONS[index]} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero__product-mockup">
          <img
            src={dashboardMockup}
            alt="Painel financeiro do Método Descubra Seu Lucro em notebook e celular"
          />
        </figure>
      </div>
    </section>
  )
}
