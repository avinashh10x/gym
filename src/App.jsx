import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Join from './Component/JoinUs/Join'
import Classes from './Component/Classes/Classes'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import GalleryPage from './Pages/GalleryPage'
import MemberPage from './Pages/MemberPage'
import ClassesPage from './Pages/ClassesPage'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<MemberPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
