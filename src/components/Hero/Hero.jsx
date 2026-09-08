import React from 'react'
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
              <span aria-hidden="true"></span>
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
          <iframe
            src={hero.videoEmbedUrl}
            title={hero.videoTitle || 'Descubra Seu Lucro'}
            loading="eager"
            scrolling="no"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </figure>
      </div>
    </section>
  )
}
