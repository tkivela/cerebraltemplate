import { Module } from 'cerebral'

import inputChanged from './signals/inputChanged'
import pressMeButtonClicked from './signals/pressMeButtonClicked'

export default Module({
  state: {
    title: 'Hello world',
    buttonHasBeenClicked: false
  },
  signals: {
    inputChanged,
    pressMeButtonClicked
  }
})
