import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import TempleScience from './pages/TempleScience'
import Blogs from './pages/blogs'
import Contact from './pages/contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Donate from './pages/Donate'

import WhyProtectTemples from "./pages/WhyProtectTemples";
import BenefitsofRenovatingTemples from "./pages/BenefitsofRenovatingTemples";
import PreservingHindu from "./pages/PreservingHindu";
import Kumbhabhishekam from "./pages/Kumbhabhishekam";

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ourstory' element={<OurStory/>}/>
        <Route path='/current-projects' element={<Projects/>}/>
        <Route path='/temple-science' element={<TempleScience/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>}/>

        <Route path="/temple-science/Why-Protect-Temples" element={<WhyProtectTemples />} />
        <Route path="/temple-science/Benefits-of-Renovating-Temples" element={<BenefitsofRenovatingTemples/>}/>
        <Route path="/temple-science/hindu-temples" element={<PreservingHindu />} />
        <Route path="/temple-science/temple-kumhabhishekam" element={<Kumbhabhishekam />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
