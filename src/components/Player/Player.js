import React, { useReducer, useState } from 'react'
import styled from '@emotion/styled'
import {
  PLAYER_SIZE,
  INPUT_DIRECTIONS,
  MOVEMENT_STEPS,
  STOP
} from 'utils/constants'
import useKey from 'react-keyboard-input-hook'
import {
  playerReducer,
  playerInitialState
} from 'state/player'
import useInterval from 'hooks/interval'

const isStepAllowed = step => step < MOVEMENT_STEPS.length

const Piece = () => {
  
  const [direction, setDirection] = useState(false)
  const [{ step, position }, dispatch] = useReducer(playerReducer, playerInitialState)

  useInterval(() => {
    if (isStepAllowed(step)) {
      dispatch({ type: direction, progress: MOVEMENT_STEPS[step], step: step + 1})
    } else {
      dispatch({ type: STOP, progress: 0, step: 0 })
      setDirection(false)
    }
  }, direction ? 50 : null)

  const handleKeyInput = ({ keyName }) => {
    setDirection(INPUT_DIRECTIONS[keyName])
  }

  useKey(handleKeyInput)

 return (
  <GamePiece
    position={position}
  />
 )
}
 
const GamePiece = styled.div(props => {
  const { position: {
    top,
    left
  }} = props

  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${PLAYER_SIZE}px;
    height: ${PLAYER_SIZE}px;
    background-color: cornflowerblue;
    z-index: 5;
  `
})

export default Piece
