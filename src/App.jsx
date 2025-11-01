import { useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navber from './Component/Navber'
import { Typewriter } from "react-simple-typewriter";
import Education from './Component/Education';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Banner from './Component/Banner';
import About from './Component/About';
import ContactSection from './Component/ContactSection';
import FooterSection from './Component/FooterSection';

function App() {


  return (
    <>
      <Navber />
      <Banner />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ContactSection />
      <FooterSection/>

    </>
  )
}

export default App
