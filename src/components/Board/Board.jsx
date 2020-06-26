import React from 'react'
import styled from '@emotion/styled'
import {
  GAME_BOARD_BOARDER_SIZE,
} from 'utils/constants'

const Board = ({
  className,
}) => {
  return (
    <div className={className} />
  )
}
 
const defaultBorderColor = '#023202'
const GameBoard = styled(Board)(props => {
  const {
    collision,
    boardSize,
    position: {
      top,
      left
    }} = props
    
  const borderColor = collision ? 'red' : defaultBorderColor
  const { side } = collision
  const hasHitSide = side ? collision[side.toLowerCase()] : false

  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    height: ${boardSize}px;
    width: ${boardSize}px;
    background-color: green;
    border: ${GAME_BOARD_BOARDER_SIZE}px solid;
    ${hasHitSide ? `border-color: ${defaultBorderColor};` : ``}
    border-${hasHitSide ? `${side.toLowerCase()}-` : ``}color: ${borderColor};

  `
})

export default GameBoard