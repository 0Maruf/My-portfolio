import { useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navber from './Component/Navber'
import About from './Component/About'
import { Typewriter } from "react-simple-typewriter";
import Education from './Component/Education';
import Skills from './Component/Skills';
import Projects from './Component/Projects';

function App() {
  

  return (
    <>
 <Navber/>
 <About/>
 <Education/> 
       <Skills/>
       <Projects/>
    </>
  )
}

export default App
