import React from 'react'
import styled from '@emotion/styled'
import {
  GAME_BOARD_SIZE,
  GAME_BOARD_BORDER_SIZE,
  SIDES
} from 'utils/constants'
import { useGameContext } from 'hooks/game'
import Sides from './Sides'

const sidesData = [
  {
    top: 0,
    left: 0,
    width: GAME_BOARD_SIZE,
    height: GAME_BOARD_BORDER_SIZE,
    id: SIDES.TOP,
  },
  {
    top: 0,
    left: GAME_BOARD_SIZE - GAME_BOARD_BORDER_SIZE,
    width: GAME_BOARD_BORDER_SIZE,
    height: GAME_BOARD_SIZE,
    id: SIDES.RIGHT,
  },
  {
    top: GAME_BOARD_SIZE - GAME_BOARD_BORDER_SIZE,
    left: 0,
    width: GAME_BOARD_SIZE,
    height: GAME_BOARD_BORDER_SIZE,
    id: SIDES.BOTTOM
  },
  {
    top: 0,
    left: 0,
    width: GAME_BOARD_BORDER_SIZE,
    height: GAME_BOARD_SIZE,
    id: SIDES.LEFT
  }
]

const Board = () => {

  const {
    direction,
    position
  } = useGameContext()

  return (
    <GameBoard>
      <Sides data={sidesData} />
    </GameBoard>
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
  `
})

export default Board