import { StrictMode } from 'react'
import * as React from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App'

// import React = require('react')

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
