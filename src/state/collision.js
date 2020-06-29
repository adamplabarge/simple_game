import {
  OPPOSITE_DIRECTIONS,
  DIRECTIONS,
  PLAYER_SIZE
} from 'utils/constants'
import { handleMove } from 'utils/move'

const HAS_COLLISION = 'HAS_COLLISION'
const NO_COLLISION = 'NO_COLLISION'

export const collisionActions = {
  HAS_COLLISION,
  NO_COLLISION
}

const findCollisionPosition = (direction, collisionBlock, position) => {
  const collisionSide = OPPOSITE_DIRECTIONS[direction]

  switch (collisionSide) {
    case DIRECTIONS.UP: 
      return {
        top: collisionBlock.top - PLAYER_SIZE,
        left: position.left
      }
    case DIRECTIONS.RIGHT:
      return {
        top: position.top,
        left: collisionBlock.left + collisionBlock.width
      }
    case DIRECTIONS.DOWN:
      return {
        top: collisionBlock.top + collisionBlock.height,
        left: position.left
      }
    case DIRECTIONS.LEFT:
      return {
        top: position.top,
        left: collisionBlock.left - PLAYER_SIZE
      }
    default:
      return position
  }
}

export const collisionReducer = (state, { type, collisionBlock }) => {
  switch (type) {
    case HAS_COLLISION:
      const { direction, position } = state
      const forcedPosition = findCollisionPosition(direction, collisionBlock, position)
      return {
        ...state,
        collisionBlock,
        collision: true,
        position: handleMove(direction, forcedPosition, null, true),
        step: 0,
      }
    case NO_COLLISION:
      return {
        ...state,
        collisionBlock: {},
        collision: false
      }
    default:
      return state
  }
}