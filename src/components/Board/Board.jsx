import React from 'react'
import styled from '@emotion/styled'
import {
  GAME_BOARD_SIZE,
  GAME_BOARD_BORDER_SIZE
} from 'utils/constants'
import { useGameContext } from 'hooks/game'

const Board = () => {

  const {
    direction,
    position
  } = useGameContext()

  return (
    <GameBoard />
  )
}
 
const GameBoard = styled.div(props => {
  return `
    width: ${GAME_BOARD_SIZE}px;
    height: ${GAME_BOARD_SIZE}px;
    background-color: green;
    position: absolute;
    top: 0;
    left: 0;
    border-width: ${GAME_BOARD_BORDER_SIZE}px;
    border-color: khaki;
    border-style: solid;
  `
})

export default Board