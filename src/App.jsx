import React, { useEffect, useRef, useState } from 'react'
import { profitPage } from './config/profitPage.jsx'
import { Header } from './components/Header/Header.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { MobileBar } from './components/MobileBar/MobileBar.jsx'
import { PurchaseFormModal } from './components/PurchaseFormModal/PurchaseFormModal.jsx'
import { Compare, Problems, Transformations } from './components/sections/Diagnosis.jsx'
import { Board, Bonus, Flow, Tools, Where } from './components/sections/Product.jsx'
import {
  Authority,
  Faq,
  FinalCta,
  Footer,
  Offer,
  Proof,
  Receive,
} from './components/sections/Conversion.jsx'
import './components/sections/sections.css'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ctaSource, setCtaSource] = useState('')
  const triggerRef = useRef(null)
  const page = profitPage

  useEffect(() => {
    document.title = `${page.title} | Rota de Negócios`
  }, [page.title])

  function openModal(source, trigger) {
    triggerRef.current = trigger
    setCtaSource(source)
    setIsModalOpen(true)
  }

  return (
    <>
      <Header page={page} onOpen={openModal} />

      <main>
        <Hero page={page} onOpen={openModal} />
        <Problems page={page} />
        <Tools page={page} onOpen={openModal} />
        <Flow page={page} />
        <Board page={page} />
        <Where page={page} />
        <Transformations page={page} />
        <Compare page={page} />
        <Proof page={page} />
        <Authority page={page} />
        <Bonus page={page} />
        <Offer page={page} onOpen={openModal} />
        <Receive page={page} />
        <Faq page={page} />
        <FinalCta page={page} onOpen={openModal} />
      </main>

      <Footer page={page} />
      <MobileBar page={page} onOpen={openModal} />

      <PurchaseFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        page={page}
        ctaSource={ctaSource}
        returnFocusRef={triggerRef}
      />
    </>
  )
}
