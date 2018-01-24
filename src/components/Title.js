import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import React from 'react'
import styled from 'react-emotion'

// Create a <Wrapper> react component that renders a <div> with
// some padding and a papayawhip background
const TitleHeader = styled('h1')`
  color: #aa44aa;
`

export default connect(
  {
    title: state`title`
  },
  ({ title, inputChanged }) => {
    return <TitleHeader>{title}</TitleHeader>
  }
)
