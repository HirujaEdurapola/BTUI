import { useState } from 'react'
import './App.css'
import DisplayHero from './components/Hero'
import About from './components/About'
import Slider from './components/Slider'
import DNC from './components/DNC'
import Curve from './components/Curve'
import Post from './components/Post'

function App() {

  return (
    <>
   <DisplayHero></DisplayHero>
   <About></About>
   <Slider></Slider>
   <DNC></DNC>
   <Curve></Curve>
   <Post></Post>
   </>
  )
}

export default App
