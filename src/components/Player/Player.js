import React, { useReducer } from 'react'
import styled from '@emotion/styled'
import {
  PLAYER_SIZE,
  INPUT_DIRECTIONS,
  ACCELERATION_STEPS,
  STOP
} from 'utils/constants'
import useKey from 'react-keyboard-input-hook'
import {
  playerReducer,
  playerInitialState,
  movePlayer,
  stopPlayer
} from 'state/player'
import useInterval from 'hooks/interval'

const isStepAllowed = step => step < ACCELERATION_STEPS.length


const Piece = () => {
  
  const [{
    step,
    position,
    direction
  }, dispatch] = useReducer(playerReducer, playerInitialState)

  useInterval(() => {
    if (isStepAllowed(step)) {
      dispatch(movePlayer(direction, ACCELERATION_STEPS[step], step + 1))
    } else {
      dispatch(stopPlayer())
    }
  }, direction !== STOP ? 30 : null)

  const handleKeyInput = ({ keyName }) => {
    // kicks off and resets
    dispatch(movePlayer(INPUT_DIRECTIONS[keyName], ACCELERATION_STEPS[0], 0,))
  }

  useKey(handleKeyInput)

 return (
  <GamePiece
    position={position}
    style={{
      top: position.top,
      left: position.left
    }}
  />
 )
}
 
const GamePiece = styled.div(props => {
  return `
    position: absolute;
    width: ${PLAYER_SIZE}px;
    height: ${PLAYER_SIZE}px;
    background-color: cornflowerblue;
    z-index: 5;
  `
})

export default Piece
