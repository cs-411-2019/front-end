import React from 'react'
import { Link } from 'react-website'

import './App.css'

export default ({ children }) => (
  <div>
    <h1 className="main-title">
    	Increment the counters
    </h1>
    <ul className="main-menu">
      <li> <Link to="/"> Home </Link> </li>
      <li> <Link to="/beers"> Beers </Link> </li>
    </ul>
    <section className="main-content">
    	{ children }
    </section>
  </div>
)