import React from 'react'
import './App.css'

import { Navbar, Description, Footer } from './ui-elements'

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