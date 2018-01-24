/* eslint-env jest */
import { Container } from '@cerebral/react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import controller from '../controller'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Container controller={controller}>
      <App />
    </Container>,
    div
  )
})
