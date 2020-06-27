import React from 'react'
import styled from '@emotion/styled'

const Blocks = ({
  blocks
}) => {

  return (
    <>
      {
        blocks.map(
          ({id, ...rest}) =>
            <GameBlock
              key={id}
              {...rest}
            />
        )
      }
    </>
  )
}
 
const GameBlock = styled.div(props => {
  const {
    top,
    left,
    size
  } = props

  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${size}px;
    height: ${size}px;
    border-width: 5px;
    background-color: khaki;
    z-index: 5;
  `
})

export default Blocks