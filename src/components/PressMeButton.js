import { signal, state } from 'cerebral/tags'
import { connect } from '@cerebral/react'
import React from 'react'
import styled from 'react-emotion'

// Create a <Wrapper> react component that renders a <div> with
// some padding and a papayawhip background
const Wrapper = styled('div')`
  color: black;
  background-color: lightblue;
`

export default connect(
  {
    buttonClicked: signal`pressMeButtonClicked`,
    buttonHasBeenClicked: state`buttonHasBeenClicked`
  },
  ({ buttonClicked, buttonHasBeenClicked }) => {
    const buttonCaption = buttonHasBeenClicked ? 'You clicked me!' : 'Click me'
    return (
      <Wrapper
        onClick={() => {
          buttonClicked()
        }}
      >
        {buttonCaption}
      </Wrapper>
    )
  }
)
