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
const cutMoveShort = (direction, keyName) => isOppositeDirection(direction, keyName)
const isOppositeDirection = (direction, keyName) => OPPOSITE_INPUT_DIRECTIONS[keyName] === direction
const isAnyOtherDirection = (direction, keyName) => direction !== INPUT_DIRECTIONS[keyName]

const Piece = () => {

  const {
    movePlayer,
    stopPlayer,
    direction,
    step,
    position,
    collision,
    collisionBlock: {
      direction: collisionDirection
    }
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
    if (!collision && cutMoveShort(direction, keyName)) {
      return stopPlayer()
    }

    if (collision) {
      if (isAnyOtherDirection(collisionDirection, keyName)) {        
        return movePlayer({
          direction: INPUT_DIRECTIONS[keyName],
          progress: ACCELERATION_STEPS[0],
          step: 0
        })
      } else {
        return stopPlayer()
      }  
    } 
    
    if (!collision) {
      return movePlayer({
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