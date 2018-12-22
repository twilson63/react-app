import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/home'

export default () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}
