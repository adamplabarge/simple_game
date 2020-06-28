import React from 'react'
import styled from '@emotion/styled'
import Blocks from 'components/Blocks'

const Sides = ({
  data
}) => {
  return (
    <>
      <SideBlock data={data} />
    </>
  )
}

const SideBlock = styled(Blocks)(props => {
  const {
    data: {
      top,
      left,
      width,
      height
    }
  } = props 

  return `
    width: ${width}px;
    height: ${height}px;
    top: ${top}px;
    left: ${left}px;
    border-width: 0;
  `
})

export default Sides