import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/hero'
import About from './components/about'
import ControlledCarousel from './components/Gallery'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contact />
    </>
  )
}

export default App
