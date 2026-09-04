import React, { useState } from 'react'
import { Cta, Icon, Reveal, SectionHead, StatusMark } from '../ui/ui.jsx'

// Mini representacoes de cada planilha. Sao mockups: nenhum dado real do usuario.
function SheetPreview({ type }) {
  if (type === 'margin') {
    return (
      <div className="sheet sheet--pricing" aria-hidden="true">
        <div className="sheet__row">
          <span>Margem líquida</span><b>24,8%</b>
        </div>
        <div className="sheet__row">
          <span>Lucro líquido</span><b>R$ 12.430</b>
        </div>
        <div className="sheet__row sheet__row--total">
          <span>Resultado do mês</span><b>Positivo</b>
        </div>
      </div>
    )
  }

  if (type === 'prolabore') {
    return (
      <div className="sheet sheet--tax" aria-hidden="true">
        <div className="sheet__bars">
          {[
            ['Lucro líquido', 68, 'margin'],
            ['Pró-labore', 24, 'tax'],
            ['Reserva', 8, 'cost'],
          ].map(([label, value, tone]) => (
            <div className="sheet__bar" key={label}>
              <span>{label}</span>
              <i className={`sheet__bar-fill sheet__bar-fill--${tone}`} style={{ width: `${value}%` }} />
              <b>{value}%</b>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="sheet sheet--validator" aria-hidden="true">
      {[
        ['Receitas', 'R$ 48.320', 'profit'],
        ['Despesas', 'R$ 21.940', 'even'],
        ['Lucro líquido', 'R$ 12.430', 'profit'],
      ].map(([name, value, status]) => (
        <div className="sheet__row" key={name}>
          <span>{name}</span>
          <b>{value}</b>
          <i className={`dot dot--${status}`} />
        </div>
      ))}
    </div>
  )
}

export function Tools({ page, onOpen }) {
  const { tools } = page

  return (
    <section className="tools-section section" id="ferramentas">
      <div className="container">
        <SectionHead eyebrow={tools.eyebrow} title={tools.title} text={tools.text} center />

        <div className="tool-grid">
          {tools.items.map((tool, index) => (
            <Reveal className="card tool-card" key={tool.name} delay={index * 70}>
              <span className="tool-card__icon">
                <Icon name={tool.icon} />
              </span>
              <h3>{tool.name}</h3>
              <p>{tool.text}</p>
              <SheetPreview type={tool.preview} />
              <span className="tool-card__metric">{tool.metric}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="dialog-card">
          <h3>{tools.dialog.title}</h3>
          <ul className="dialog-list">
            {tools.dialog.messages.map(([tone, author, text]) => (
              <li className={`dialog-line dialog-line--${tone}`} key={text}>
                <span>{author}</span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <footer>
            <p>{tools.dialog.note}</p>
            <Cta label={page.hero.cta} source="tools" onOpen={onOpen} variant="secondary" />
          </footer>
        </Reveal>
      </div>
    </section>
  )
}

export function Flow({ page }) {
  const { flow } = page

  return (
    <section className="flow-section section">
      <div className="container flow-layout">
        <div>
          <SectionHead eyebrow={flow.eyebrow} title={flow.title} text={flow.text} />
          <ul className="flow-benefits">
            {flow.benefits.map((item) => (
              <li key={item}>
                <StatusMark />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ol className="flow-steps">
          {flow.steps.map(([number, title, text], index) => (
            <Reveal as="li" className="flow-step" key={number} delay={index * 70}>
              <span className="flow-step__number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Board({ page }) {
  const { board } = page

  return (
    <section className="board-section section">
      <div className="container">
        <SectionHead eyebrow={board.eyebrow} title={board.title} text={board.text} center />

        <Reveal className="board-card">
          <div className="board-scroll">
            <table className="board-table">
              <thead>
                <tr>
                  {board.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {board.rows.map(([name, cost, today, minimum, status]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{cost}</td>
                    <td>{today}</td>
                    <td>{minimum}</td>
                    <td>
                      <span className={`tag tag--${status}`}>
                        {board.legend.find(([key]) => key === status)?.[1]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="board-footer">
            <ul className="board-legend">
              {board.legend.map(([key, label]) => (
                <li key={key}>
                  <i className={`dot dot--${key}`} />
                  {label}
                </li>
              ))}
            </ul>
            <p>{board.note}</p>
          </footer>
        </Reveal>
      </div>
    </section>
  )
}

export function Where({ page }) {
  const { where } = page
  const topItems = where.items.slice(0, 3)
  const bottomItems = where.items.slice(3)

  function renderCards(items, offset = 0) {
    return items.map(([icon, title, text], index) => (
      <Reveal className="card where-card" key={title} delay={(index + offset) * 50}>
        <Icon name={icon} />
        <h3>{title}</h3>
        <p>{text}</p>
      </Reveal>
    ))
  }

  return (
    <section className="where-section section">
      <div className="container">
        <SectionHead eyebrow={where.eyebrow} title={where.title} text={where.text} center />

        <div className="where-grid where-grid--top">{renderCards(topItems)}</div>

        <div className="where-gallery">
          {where.images.map(([src, alt], index) => (
            <Reveal className="where-shot" key={src} delay={index * 70}>
              <img src={src} alt={alt} loading="lazy" decoding="async" />
            </Reveal>
          ))}
        </div>

        <div className="where-grid where-grid--bottom">{renderCards(bottomItems, 3)}</div>
      </div>
    </section>
  )
}

export function Bonus({ page }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { bonus } = page
  const active = bonus.tabs[activeIndex]

  return (
    <section className="bonus-section section" id="bonus">
      <div className="container">
        <SectionHead eyebrow={bonus.eyebrow} title={bonus.title} center />

        <div className="bonus-tabs" role="tablist" aria-label={bonus.title}>
          {bonus.tabs.map((tab, index) => (
            <button
              type="button"
              role="tab"
              id={`bonus-tab-${index}`}
              aria-selected={activeIndex === index}
              aria-controls={`bonus-panel-${index}`}
              className={activeIndex === index ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
              key={tab.label}
            >
              <Icon name={tab.icon} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div
          className="bonus-panel"
          id={`bonus-panel-${activeIndex}`}
          role="tabpanel"
          aria-labelledby={`bonus-tab-${activeIndex}`}
        >
          <div className="bonus-panel__icon">
            <Icon name={active.icon} />
          </div>
          <div className="bonus-panel__copy">
            <span>{active.name}</span>
            <h3>{active.headline}</h3>
            <p>{active.text}</p>
            <ul>
              {active.benefits.map((benefit) => (
                <li key={benefit}>
                  <StatusMark />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
