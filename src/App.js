import React from 'react'
import './App.css'

import Navbar from './components/navbar'
import Description from './components/description'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <Navbar title='Cakestore' />
      <main style={{paddingTop: '80px'}}></main>
      <Description />
      <Footer />
    </div>
  )
}

export default App