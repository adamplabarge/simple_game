import React from 'react'
import styled from '@emotion/styled'
import {
  PLAYER_SIZE,
  INPUT_DIRECTIONS,
  OPPOSITE_INPUT_DIRECTIONS,
  ACCELERATION_STEPS,
  STOP
} from 'utils/constants'
import useKey from 'react-keyboard-input-hook'
import useInterval from 'hooks/interval'
import { useGameContext } from 'hooks/game'

const isStepAllowed = step => step < ACCELERATION_STEPS.length

const isOppositeDirection = (direction, keyName) => {
  return OPPOSITE_INPUT_DIRECTIONS[keyName] === direction
}

const Piece = () => {

  const {
    movePlayer,
    stopPlayer,
    direction,
    step,
    position,
    collision
  } = useGameContext()

  useInterval(() => {
    if (!collision && isStepAllowed(step)) {
      movePlayer({
        direction,
        progress: ACCELERATION_STEPS[step],
        step: step + 1
      })
    } else {
      stopPlayer()
    }
  }, direction !== STOP ? 50 : null)

  const handleKeyInput = ({ keyName }) => {
    if (collision || isOppositeDirection(direction, keyName)) {
      stopPlayer()
    } else {
      movePlayer({
        direction: INPUT_DIRECTIONS[keyName],
        progress: ACCELERATION_STEPS[0],
        step: 0
      })
    }
  }

  useKey(handleKeyInput)

 return (
  <GamePiece
    collision={collision}
    position={position}
    style={{
      top: position.top,
      left: position.left
    }}
  />
 )
}
 
const GamePiece = styled.div(props => {
  const { collision } = props
  const backgroundColor = collision ? 'red' : 'cornflowerblue'
  return `
    position: absolute;
    width: ${PLAYER_SIZE}px;
    height: ${PLAYER_SIZE}px;
    background-color: ${backgroundColor};
    z-index: 5;
  `
})

export default Piece