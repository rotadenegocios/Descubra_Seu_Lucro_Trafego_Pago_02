import React, { useEffect, useState } from 'react'
import './Header.css'

export function Header({ page, onOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#topo" aria-label="Rota de Negócios">
          <img src={page.brandLogo} alt="Rota de Negócios" width="150" height="40" />
        </a>

        <nav className={`site-nav${isMenuOpen ? ' is-open' : ''}`} aria-label="Seções da página">
          <ul>
            {page.nav.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="cta cta--ghost site-header__cta"
            data-cta-source="header"
            onClick={(event) => onOpen('header', event.currentTarget)}
          >
            {page.navCta}
          </button>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
