import React, { useReducer, useState } from 'react'
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
  playerInitialState
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
      dispatch({
        type: direction,
        progress: ACCELERATION_STEPS[step],
        step: step + 1,
        direction
      })
    } else {
      dispatch({
        type: STOP,
        progress: 0,
        step: 0,
        direction: STOP
      })
    }
  }, direction !== STOP ? 30 : null)

  const handleKeyInput = ({ keyName }) => {
    // kicks off and resets
    dispatch({
      type: INPUT_DIRECTIONS[keyName],
      progress: ACCELERATION_STEPS[0],
      step: 0,
      direction: INPUT_DIRECTIONS[keyName]
    })
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
