import { connect } from '@cerebral/react'
import React from 'react'
import styled from 'react-emotion'

import inputLengthCompute from '../modules/app/computes/inputLength'

// Create a <Wrapper> react component that renders a <h2>
const Wrapper = styled('h2')`
  color: black;
`

export default connect(
  {
    inputLength: inputLengthCompute
  },
  ({ inputLength }) => {
    return <Wrapper>Greeting length: {inputLength}</Wrapper>
  }
)
