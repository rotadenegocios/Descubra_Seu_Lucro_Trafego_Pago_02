import React, { useEffect, useState } from 'react'
import './MobileBar.css'

export function MobileBar({ page, onOpen }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mobile-bar${isVisible ? ' is-visible' : ''}`} aria-hidden={!isVisible}>
      <div>
        <small>{page.offer.actionKicker}</small><strong>{page.offer.actionTitle}</strong>
      </div>
      <button
        type="button"
        className="cta cta--primary"
        data-cta-source="mobile"
        tabIndex={isVisible ? 0 : -1}
        onClick={(event) => onOpen('mobile', event.currentTarget)}
      >
        <span>{page.navCta}</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
