import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import React from 'react'
import { css } from 'react-emotion'

export default connect(
  {
    title: state`title`
  },
  ({ title, inputChanged }) => {
    const wrapperStyle = css`
      color: #aa44aa;
    `

    return <h1 className={wrapperStyle}>{title}</h1>
  }
)
