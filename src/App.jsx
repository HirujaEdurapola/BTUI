import { useState } from 'react'
import './App.css'
import DisplayHero from './components/Hero'
import About from './components/About'
import Slider from './components/Slider'

function App() {

  return (
    <>
   <DisplayHero></DisplayHero>
   <About></About>
   <Slider></Slider>
   </>
  )
}

export default App
