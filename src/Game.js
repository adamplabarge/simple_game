import React, { useState } from 'react'
import useKey from 'react-keyboard-input-hook'
import GameBoard from 'components/Board'
import Piece from 'components/Piece'
import Thing from 'components/Thing'
import {
  BOARD_SIZE,
  DIRECTION,
  INTIAL_PIECE_POSITION,
  INITIAL_BOARD_POSITION
} from 'utils/constants'
import {
  moveUp,
  moveRight,
  moveDown,
  moveLeft,
  nextMoveUp,
  nextMoveRight,
  nextMoveDown,
  nextMoveLeft,
} from 'utils/move'
import {
  canMoveUp,
  canMoveRight,
  canMoveDown,
  canMoveLeft,
} from 'utils/collision'

function Game() {

  const [position, setPosition] = useState(INTIAL_PIECE_POSITION)
  const [collision, setCollision] = useState(false)

  const handleKeyInput = ({ keyName }) => {
    switch (keyName) {
      case DIRECTION.UP: 
        if (canMoveUp(nextMoveUp(position))) {
          setPosition(moveUp(position))
          setCollision(false)
        } else {
          setCollision(true)
        }
        break
      case DIRECTION.RiGHT:
        if (canMoveRight(nextMoveRight(position))) {
          setPosition(moveRight(position))
          setCollision(false)
        } else {
          setCollision(true)
        }
        break
      case DIRECTION.DOWN:
        if (canMoveDown(nextMoveDown(position))) {
          setPosition(moveDown(position))
          setCollision(false)
        } else {
          setCollision(true)
        }
        break
      case DIRECTION.LEFT:
        if (canMoveLeft(nextMoveLeft(position))) {
          setPosition(moveLeft(position))
          setCollision(false)
        } else {
          setCollision(true)
        }
        break
      default:
        return
    }
  }

  useKey(handleKeyInput)

  return (
    <div>
      <GameBoard
        position={INITIAL_BOARD_POSITION}
        boardSize={BOARD_SIZE}
      />
      <Piece
        collision={collision}
        position={position}
      />
      <Thing
        collision={collision}
      />
    </div>
  )
}
 
export default Game;