import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from './components/navbar'
import Hero from './components/hero'
import Main from './components/main'
import Plans from './components/plans'
import HowSection from './components/howSection'
import Map from './components/map'
import Footer from './components/footer'
import Testimonials from './components/testimonials'
import Form from './components/form'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const appRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section',
          start: 'top 80%',
        },
      })
    }, appRef)

    return () => ctx.revert()
  }, [])


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    gsap.to('.mobile-menu', {
      x: isMenuOpen ? '100%' : '0%',
      duration: 0.3,
      ease: 'power2.inOut',
    })
  }

  return (
    <div ref={appRef} className="app font-sans">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
       <NavBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
       <Hero/>
       <Main/>
       <Plans/>
       <HowSection/>
       <Testimonials/>
       <Map/>
       <Form/>
       <Footer/>
    
    </div>
  )
}

export default App
