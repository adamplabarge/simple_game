import React from 'react'
import styled from '@emotion/styled'
import { PIECE_SIZE } from 'utils/constants'

const Piece = ({
  className
}) => {

 return (
  <div className={className} />
 )
}
 
const GamePiece = styled(Piece)(props => {
  const {
    collision,
    position: {
      top,
      left
    }} = props

  const backgroundColor = collision ? 'red' : 'pink'

  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${PIECE_SIZE}px;
    height: ${PIECE_SIZE}px;
    background-color: ${backgroundColor};
    z-index: 5;
  `
})

export default GamePiece