import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default Compute(state`title`, inputValue => {
  if (inputValue) {
    return inputValue.length
  } else {
    return 0
  }
})
