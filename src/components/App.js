import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import React from 'react'
import styled from 'react-emotion'

import Title from './Title'
import InputLength from './InputLength'
import PressMeButton from './PressMeButton'

// Create a <Wrapper> react component that renders a <div> with
// some padding and a papayawhip background
const Wrapper = styled('div')`
  padding: 4em;
  background: papayawhip;
  width: 300px;
  word-wrap: break-word;
  text-align: center;
`

export default connect(
  {
    title: state`title`,
    inputChanged: signal`inputChanged`
  },
  ({ title, inputChanged }) => {
    return (
      <Wrapper>
        <Title />
        <input
          placeholder='Type your name'
          onChange={event => inputChanged({ inputValue: event.target.value })}
        />
        <InputLength />
        <PressMeButton />
      </Wrapper>
    )
  }
)
