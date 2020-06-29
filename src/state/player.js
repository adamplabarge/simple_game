import { STOP } from 'utils/constants'
import { handleMove } from 'utils/move'

export const playerInitialState = {
  position: {
    top: 10,
    left: 10
  },
  step: 0,
  direction: STOP,
  progress: 0,
}

const MOVE_PLAYER = 'MOVE_PLAYER'
const STOP_PLAYER = 'STOP_PLAYER'
export const playerActions = {
  MOVE_PLAYER,
  STOP_PLAYER
}

export const playerReducer = (state, { type, progress, step, direction }) => {
  switch (type) {
    case MOVE_PLAYER:
      return {
        ...state,
        position: handleMove(direction, state.position, progress),
        step,
        direction
      }    
    case STOP_PLAYER:
      return {
        ...state,
        step: 0,
        direction: STOP
      }
    default:
      return state
  }
} 