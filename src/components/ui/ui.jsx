import React, { useEffect, useRef, useState } from 'react'
import './ui.css'

const ICONS = {
  down: <><path d="M5 6v12h14" /><path d="m8 9 3.5 4L14 10l3 3.5" /><path d="M17 13.5h-2.6M17 13.5V11" /></>,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /></>,
  chart: <><path d="M4 19h16" /><rect x="6" y="11" width="3" height="5" /><rect x="11" y="7" width="3" height="9" /><rect x="16" y="13" width="3" height="3" /></>,
  alert: <><path d="M12 4.5 3.5 19h17z" /><path d="M12 10v4M12 16.5v.01" /></>,
  validator: <><circle cx="12" cy="12" r="8.5" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  calculator: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2" /></>,
  tax: <><path d="M6 3h9l3 3v15H6z" /><path d="M14 3v4h4M9 11h6M9 15h6M9 18h4" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" /></>,
  gift: <><path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13" /><path d="M12 7c-3.5 0-5-1-5-2.5S9.7 2 12 7Zm0 0c3.5 0 5-1 5-2.5S14.3 2 12 7Z" /></>,
  infinity: <path d="M8.1 8.2c2.2 0 5.6 7.6 8.1 7.6a3.8 3.8 0 0 0 0-7.6c-2.5 0-5.9 7.6-8.1 7.6a3.8 3.8 0 1 1 0-7.6Z" />,
  services: <><path d="M4 20h16M7 16V8m5 8V4m5 12v-6" /><path d="m5 6 3-3 3 2 4-3 4 2" /></>,
  discount: <><path d="m4 12 8-8 8 8-8 8Z" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="15" r="1" /><path d="m15.5 8.5-7 7" /></>,
  guide: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23Z" /><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23Z" /></>,
  excel: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 9h16M9 9v12" /><path d="m12.5 12.5 4 5M16.5 12.5l-4 5" /></>,
  sheets: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 9h16M4 15h16M10 9v12M15 9v12" /></>,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  desktop: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  star: <path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />,
  shield: <><path d="M12 3 5 6v6c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6z" /><path d="m9 12 2.2 2.2L15.5 10" /></>,
  bolt: <path d="M13.5 3 6 13.5h5L10.5 21 18 10.5h-5z" />,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" /></>,
}

export function Icon({ name, className = '' }) {
  if (!ICONS[name]) return null

  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

export function StatusMark({ negative = false }) {
  return (
    <span className={`status-mark ${negative ? 'status-mark--negative' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 16 16">
        {negative ? <path d="m4 4 8 8m0-8-8 8" /> : <path d="m2.8 8.2 3.1 3.1 7.3-7.1" />}
      </svg>
    </span>
  )
}

export function Cta({ label, source, onOpen, variant = 'primary', className = '' }) {
  return (
    <button
      type="button"
      className={`cta cta--${variant} ${className}`}
      data-cta-source={source}
      onClick={(event) => onOpen(source, event.currentTarget)}
    >
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </button>
  )
}

export function SectionHead({ eyebrow, title, text, center = false, children }) {
  return (
    <div className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
      {children}
    </div>
  )
}

// Revela o bloco quando ele entra na tela. Sem JS de scroll continuo: um
// observer por elemento, desconectado depois da primeira aparicao.
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function currency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
