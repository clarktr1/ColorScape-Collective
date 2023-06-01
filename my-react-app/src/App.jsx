import { useState } from 'react'
import React from 'react';
import Header from './components/Header'
import Hero from './components/hero'
import About from './components/about'
import ControlledCarousel from './components/Gallery'
import Contact from './components/Contact'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
        <ControlledCarousel />
        <Subscribe animationClass='fade-in' />
      <Footer />
    </>
  )
}

export default App
