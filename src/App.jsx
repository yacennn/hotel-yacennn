import React from 'react'
import Header from './components/Header'
import Accueil from './components/Accueil'
import Services from './components/Services'
import Chambres from './components/Chambres'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Header />
      <Accueil />
      <Services />
      <Chambres />
      <Contact />
    </div>
  )
}

export default App