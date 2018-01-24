import { set, when } from 'cerebral/operators'
import { state, props, string } from 'cerebral/tags'

export default [
  when(props`inputValue`),
  {
    true: set(state`title`, string`Hello ${props`inputValue`}`),
    false: set(state`title`, 'Hello world')
  }
]
