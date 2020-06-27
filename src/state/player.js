import {
  DIRECTIONS,
  STOP
} from 'utils/constants'
import {
  moveUp,
  moveRight,
  moveDown,
  moveLeft
} from 'utils/move'

export const playerInitialState = {
  position: {
    top: 10,
    left: 10
  },
  step: 0,
  direction: STOP
}

export const playerReducer = (state, { type, progress, step, direction }) => {
  switch (type) {
    case DIRECTIONS.UP:
      return {
        ...state,
        position: moveUp(state.position, progress),
        step,
        direction
      }
    case DIRECTIONS.RIGHT:
      return {
        ...state,
        position: moveRight(state.position, progress),
        step,
        direction
      }
    case DIRECTIONS.DOWN:
      return {
        ...state,
        position: moveDown(state.position, progress),
        step,
        direction
      }
    case DIRECTIONS.LEFT:
      return {
        ...state,
        position: moveLeft(state.position, progress),
        step,
        direction
      }
    case STOP:
      return {
        ...state,
        step: 0,
        direction
      }
    default:
      return state
  }
} 