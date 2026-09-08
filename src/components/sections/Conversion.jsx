import React from 'react'
import { Cta, Icon, Reveal, SectionHead, StatusMark } from '../ui/ui.jsx'
import { businessInfo } from '../../config/content.js'

export function Proof({ page }) {
  const { proof } = page

  return (
    <section className="proof-section section" id="depoimentos">
      <div className="container">
        <SectionHead eyebrow={proof.eyebrow} title={proof.title} center />

        <Reveal className="proof-card">
          <strong>{proof.number}</strong>
          <p>{proof.text}</p>
        </Reveal>

        <div className="video-grid">
          {proof.videos.map((video) => (
            <div className="video-card" key={video.id}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <div className="quote-grid">
          {proof.quotes.map(([text, segment, author], index) => (
            <Reveal className="card quote-card" key={text} delay={index * 60}>
              <div className="quote-card__stars" aria-label="5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Icon name="star" key={star} />
                ))}
              </div>
              <p>{text}</p>
              <footer>
                <span className="quote-card__avatar" aria-hidden="true">
                  {author.charAt(0)}
                </span>
                <div>
                  <strong>{author}</strong>
                  <small>{segment}</small>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Authority({ page }) {
  const { authority } = page

  return (
    <section className="authority-section section">
      <div className="container authority-layout">
        <Reveal className="authority-photo">
          <img src={page.mentorImage} alt={authority.name} loading="lazy" decoding="async" />
        </Reveal>

        <div>
          <p className="eyebrow">{authority.eyebrow}</p>
          <h2 className="section-title">{authority.title}</h2>
          {authority.paragraphs.map((paragraph) => (
            <p className="authority-text" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <div className="authority-mentor">
            <strong>{authority.name}</strong>
            <p>{authority.role}</p>
            <ul>
              {authority.credentials.map((item) => (
                <li key={item}>
                  <StatusMark />
                  {item}
                </li>
              ))}
            </ul>
            <a className="authority-whatsapp" href={page.whatsapp} target="_blank" rel="noreferrer">
              {authority.whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Offer({ page, onOpen }) {
  const { offer } = page

  return (
    <section className="offer-section section" id="oferta">
      <div className="container">
        <SectionHead eyebrow={offer.eyebrow} title={offer.title} text={offer.text} center />

        <Reveal className="offer-card">
          <div className="offer-card__list">
            <h3>{offer.cardTitle}</h3>
            <ul>
              {offer.cardItems.map((item) => (
                <li key={item}>
                  <StatusMark />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="offer-card__action">
            <span>{offer.actionKicker}</span><h3>{offer.actionTitle}</h3><p>{offer.actionText}</p>
            <Cta label={offer.cta} source="offer" onOpen={onOpen} className="cta--block" />
          </div>
        </Reveal>

        <Reveal className="guarantee">
          <span className="guarantee__seal">
            <Icon name="shield" />7 dias
          </span>
          <div>
            <h3>{offer.guarantee.title}</h3>
            <p>{offer.guarantee.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Receive({ page }) {
  const { receive } = page

  return (
    <section className="receive-section section">
      <div className="container">
        <SectionHead eyebrow={receive.eyebrow} title={receive.title} center />

        <ol className="receive-grid">
          {receive.steps.map(([number, title, text], index) => (
            <Reveal as="li" className="receive-step" key={number} delay={index * 60}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Faq({ page }) {
  const { faq } = page
  const columns = [
    faq.items.filter((_, index) => index % 2 === 0),
    faq.items.filter((_, index) => index % 2 !== 0),
  ]

  return (
    <section className="faq-section section" id="faq">
      <div className="container container--narrow">
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} center />

        <div className="faq-list">
          {columns.map((items, columnIndex) => (
            <div className="faq-column" key={columnIndex}>
              {items.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta({ page, onOpen }) {
  const { finalCta } = page

  return (
    <section className="final-section section">
      <div className="container">
        <Reveal className="final-card">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.text}</p>
          <Cta label={finalCta.cta} source="final" onOpen={onOpen} />
          <small>{finalCta.note}</small>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer({ page }) {
  const { footer } = page

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <img
            className="site-footer__logo"
            src={page.brandLogo}
            alt="Rota de NegÃ³cios"
            loading="lazy"
            decoding="async"
          />
          <p className="site-footer__tagline">{footer.tagline}</p>
        </div>

        <div>
          <h3>{footer.linksTitle}</h3>
          <ul>
            {page.nav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{footer.contactTitle}</h3>
          <ul>
            <li>
              <a href={page.whatsapp} target="_blank" rel="noreferrer">
                {footer.whatsappLabel}
              </a>
            </li>
            <li>{businessInfo.street}</li>
            <li>
              {businessInfo.city} Â· CEP {businessInfo.postalCode}
            </li>
            <li>CNPJ {businessInfo.cnpj}</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
