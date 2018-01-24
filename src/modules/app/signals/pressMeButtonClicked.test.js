/* eslint-env jest */
import { CerebralTest } from 'cerebral/test'

import app from '../index'

it('modify state correctly after pressMeButtonClicked signal', async () => {
  const cerebral = CerebralTest(app)

  expect(cerebral.getState('buttonHasBeenClicked')).toEqual(false)
  await cerebral.runSignal('pressMeButtonClicked')
  expect(cerebral.getState('buttonHasBeenClicked')).toEqual(true)
})
