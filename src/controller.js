import { Controller } from 'cerebral'

import app from './modules/app'

const Devtools =
  process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
    ? null
    : require('cerebral/devtools').default

export default Controller(app, {
  devtools:
    Devtools &&
    Devtools({
      host: 'localhost:8585',
      // By default the devtools tries to reconnect
      // to debugger when it can not be reached, but
      // we don't want that
      reconnect: false
    })
})
