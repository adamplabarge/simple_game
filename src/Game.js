import React, { useState, useEffect, useRef } from 'react'
import useKey from 'react-keyboard-input-hook'
import GameBoard from 'components/Board'
import Piece from 'components/Piece'
import Thing from 'components/Thing'
import {
  BOARD_SIZE,
  INTIAL_PIECE_POSITION,
  INITIAL_BOARD_POSITION,
  MOVEMENT_STEPS
} from 'utils/constants'
import {
  canMove
} from 'utils/collision'

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Game() {

  const [position, setPosition] = useState(INTIAL_PIECE_POSITION)
  const [collision, setCollision] = useState(false)
  const [direction, setDirection] = useState(false)
  const [step, setStep] = useState(0)

  useInterval(() => {
    if (direction) {
      if (step < MOVEMENT_STEPS.length) {
        const {
          moveTo,
          collision
        } = canMove(position, step, direction)
        
        if (!collision) {
          setPosition(moveTo)
          setStep(step + 1)
        } else {
          setPosition(position)
          setDirection(false)
          setStep(0)
        }

        setCollision(collision)
      
      } else {
        setDirection(false)
        setStep(0)
      }
    }
  }, 50)  

  const handleKeyInput = ({ keyName }) => {
    setDirection(keyName)
  }

  useKey(handleKeyInput)

  return (
    <div>
      <GameBoard
        position={INITIAL_BOARD_POSITION}
        boardSize={BOARD_SIZE}
        collision={collision}
      />
      <Piece
        collision={collision}
        position={position}
      />
      {/* <Thing
        collision={collision}
      /> */}
    </div>
  )
}
 
export default Game;