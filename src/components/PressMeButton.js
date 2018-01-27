import { signal, state } from 'cerebral/tags'
import { connect } from '@cerebral/react'
import React from 'react'
import { css } from 'react-emotion'

export default connect(
  {
    buttonClicked: signal`pressMeButtonClicked`,
    buttonHasBeenClicked: state`buttonHasBeenClicked`
  },
  ({ buttonClicked, buttonHasBeenClicked }) => {
    const buttonCaption = buttonHasBeenClicked ? 'You clicked me!' : 'Click me'

    const wrapperStyle = css`
      color: black;
      background-color: lightblue;
    `

    return (
      <div
        className={wrapperStyle}
        onClick={() => {
          buttonClicked()
        }}
      >
        {buttonCaption}
      </div>
    )
  }
)
