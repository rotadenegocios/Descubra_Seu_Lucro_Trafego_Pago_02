import React from 'react'
import { Icon, Reveal, SectionHead, StatusMark } from '../ui/ui.jsx'

export function Problems({ page }) {
  const { problems } = page

  return (
    <section className="problems-section section" id="diagnostico">
      <div className="container">
        <SectionHead eyebrow={problems.eyebrow} title={problems.title} text={problems.text} center />

        <div className="problem-grid">
          {problems.items.map(([icon, title, text], index) => (
            <Reveal className="card problem-card" key={title} delay={index * 60}>
              <span className="problem-card__icon">
                <Icon name={icon} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="stat-row">
          {problems.stats.map(([number, label], index) => (
            <Reveal className="stat-card" key={number} delay={index * 60}>
              <strong>{number}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="alert-box">
          <Icon name="alert" />
          <p>{problems.alert}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function Transformations({ page }) {
  const { transformations } = page

  return (
    <section className="transform-section section">
      <div className="container">
        <SectionHead eyebrow={transformations.eyebrow} title={transformations.title} />

        <div className="transform-grid">
          {transformations.items.map(([title, text], index) => (
            <Reveal className="card transform-card" key={title} delay={index * 60}>
              <StatusMark />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Compare({ page }) {
  const { compare } = page

  return (
    <section className="compare-section section">
      <div className="container">
        <SectionHead eyebrow={compare.eyebrow} title={compare.title} center />

        <div className="compare-grid">
          <Reveal className="card compare-card compare-card--without">
            <h3>{compare.without.title}</h3>
            <ul>
              {compare.without.items.map((item) => (
                <li key={item}>
                  <StatusMark negative />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card compare-card compare-card--with" delay={80}>
            <span className="compare-card__badge">Melhor opção</span>
            <h3>{compare.with.title}</h3>
            <ul>
              {compare.with.items.map((item) => (
                <li key={item}>
                  <StatusMark />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
