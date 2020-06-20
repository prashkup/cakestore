import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import { createBrowserHistory } from 'history'

import { Navbar, Footer } from './ui-elements'
import HomeView from './views/HomeView'
import CartView from './views/CartView'
import AboutView from './views/AboutView'
import CheckoutView from './views/CheckoutView'

const history = createBrowserHistory()

function App({ store }) {
  return (
    <div className="app">
      <Provider store={store}>
        <Navbar title="Cakestore" />
        <main style={{ paddingTop: '80px' }}>
          <Router history={history}>
            <HomeView path="/" />
            <CartView path="/cart" />
            <AboutView path="/about" />
            <CheckoutView path="/checkout" />
          </Router>
        </main>
        <Footer />
      </Provider>
    </div>
  )
}

export default App
