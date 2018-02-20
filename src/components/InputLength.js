import { connect } from '@cerebral/react'
import { css } from 'react-emotion'
import React from 'react'

import inputLengthCompute from '../modules/app/computes/inputLength'

export default connect(
  {
    inputLength: inputLengthCompute
  },
  ({ inputLength }) => {
    const wrapperStyle = css`
      color: black;
    `

    return <h2 className={wrapperStyle}>Greeting length: {inputLength}</h2>
  }
)
