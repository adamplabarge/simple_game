import React from 'react'
import styled from '@emotion/styled'

const Board = ({
  className,
}) => {
  return (
    <div className={className} />
  )
}
 
const GameBoard = styled(Board)(props => {
  const {
    boardSize,
    position: {
      top,
      left
    }} = props
    
  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    height: ${boardSize}px;
    width: ${boardSize}px;
    background-color: green;
  `
})

export default GameBoard