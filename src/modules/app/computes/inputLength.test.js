/* eslint-env jest */
import { runCompute } from 'cerebral/test'
import inputLength from './inputLength'

it('calculates input length correctly', () => {
  const result = runCompute(inputLength, {
    state: {
      title: 'Hello Joe'
    }
  })

  const expectedResult = 9

  expect(result).toEqual(expectedResult)
})
