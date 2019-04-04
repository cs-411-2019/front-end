import React from 'react'
import { Route } from 'react-website'

import App from './pages/App'
import Home from './pages/Home/Home'
import Beers from './pages/Beers/Beers'
import Reviews from './pages/Reviews/Reviews'

export default (
  <Route path="/" Component={ App }>
    <Route Component={ Home }/>
    <Route path="beers" Component={ Beers }/>
    <Route path="reviews" Component={ Reviews } />
  </Route>
)