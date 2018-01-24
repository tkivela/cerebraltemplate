import { Container } from '@cerebral/react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import controller from './controller'

ReactDOM.render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.getElementById('root')
)

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
