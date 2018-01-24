/* eslint-env jest */
import { CerebralTest } from 'cerebral/test'

import app from '../index'

it('modify state correctly after inputChanged signal', async () => {
  const cerebral = CerebralTest(app)

  await cerebral.runSignal('inputChanged', { inputValue: 'Joe' })
  expect(cerebral.getState('title')).toEqual('Hello Joe')
})

it('should show Hello world with empty inputChanged signal', async () => {
  const cerebral = CerebralTest(app)

  await cerebral.runSignal('inputChanged', { inputValue: '' })
  expect(cerebral.getState('title')).toEqual('Hello world')
})
