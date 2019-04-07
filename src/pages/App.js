import React from 'react'
import { Link } from 'react-website'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import './App.scss'

export default ({ children }) => (
  <div>
    <Navigation />
  <div className="container">
    <div>
      <section className="main-content">
        { children }
      </section>
    </div>
  </div>
  </div>
)