import {
  INITIAL_BOARD_POSITION,
  BOARD_SIZE,
  PIECE_SIZE,
  THING_INITIAL_POSITION,
  THING_SIZE,
  DIRECTION,
  GAME_BOARD_BOARDER_SIZE,
  SIDES,
  MOVEMENT_STEPS
} from './constants'
import { isBetween } from 'utils'
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

export const canMove = (position, step, direction) => {
  const progress = MOVEMENT_STEPS[step]
  switch (direction) {
    case DIRECTION.UP: 
      const pieceCanMoveUp = canMoveUp(position, progress)
      if (!pieceCanMoveUp.collision) {
        return {
          moveTo: moveUp(position, progress),
          collision: false,
        }
      } 
      
      return pieceCanMoveUp

    case DIRECTION.RIGHT:
      const pieceCanMoveRight = canMoveRight(position, progress)
      if (!pieceCanMoveRight.collision) {
        return {
          moveTo: moveRight(position, progress),
          collision: false
        }
      } 
      return pieceCanMoveRight
      
    case DIRECTION.DOWN:
      const pieceCanMoveDown = canMoveDown(position, progress)
      if (!pieceCanMoveDown.collision) {
        return {
          moveTo: moveDown(position, progress),
          collision: false
        }
      } 
      
      return pieceCanMoveDown

    case DIRECTION.LEFT:
      const pieceCanMoveLeft = canMoveLeft(position, progress)
      if (!pieceCanMoveLeft.collision) {
        return {
          moveTo: moveLeft(position, progress),
          collision: false
        }
      }
      return pieceCanMoveLeft
      
    default:
      return {
        moveTo: position,
        collision: false
      }
  }
}

export const canMoveUp = ({ top, left }, progress) => {
  const nextMove = nextMoveUp({ top, left }, progress)
  // const hitThing = doesMoveHitThing(DIRECTION.UP, nextMove)
  const hitTop = willHitTop(top) 

  // if (hitTop || hitThing)
  if(hitTop)
    return {
      collision: true,
      top: hitTop,
      // thing: hitThing,
      side: SIDES.TOP
    }
  
    return {
      collision: false,
    }
}

export const canMoveRight = ({ top, left }, progress) => {
  const nextMove = nextMoveRight({ top, left }, progress)
  // const hitThing = doesMoveHitThing(DIRECTION.RIGHT, nextMove)
  const hitRight = willHitRight(left)
  
  // if (hitRight || hitThing)
  if (hitRight)
    return {
      collision: true,
      right: hitRight,
      // thing: hitThing,
      side: SIDES.RIGHT
    }

  return {
    collision: false,
  }
}

export const canMoveDown = ({ top, left  }, progress) => {
  const nextMove = nextMoveDown({ top, left }, progress)
  // const hitThing = doesMoveHitThing(DIRECTION.DOWN, nextMove)
  const hitBottom = willHitBottom(top)

  // if (hitBottom || hitThing)
  if (hitBottom)
    return {
      collision: true,
      bottom: hitBottom,
      // thing: hitThing,
      side: SIDES.BOTTOM
    }

  return {
    collision: false,
  }
}

export const canMoveLeft = ({ top, left }, progress) => {
  const nextMove = nextMoveLeft({ top , left }, progress)
  // const hitThing = doesMoveHitThing(DIRECTION.LEFT, nextMove)
  const hitLeft = willHitLeft(left)

  // if (hitLeft || hitThing)
  if (hitLeft)
    return {
      collision: true,
      left: hitLeft,
      // thing: hitThing,
      side: SIDES.LEFT
    }

  return {
    collision: false,
  }
}

const doesMoveHitThing = (direction, { top, left }) => {
  let collisionHeight = false
  let collisionWidth = false 

  const thingTop = THING_INITIAL_POSITION.top
  const thingRight = THING_INITIAL_POSITION.left + THING_SIZE
  const thingBottom = THING_INITIAL_POSITION.top + THING_SIZE
  const thingLeft = THING_INITIAL_POSITION.left

  const pieceTop = top
  const pieceRight = left + PIECE_SIZE
  const pieceBottom = top + PIECE_SIZE
  const pieceLeft = left

  if (isBetween(thingTop, thingBottom, pieceTop)
    || isBetween(thingTop, thingBottom, pieceBottom)) {
      collisionHeight = true
    }

  if (isBetween(thingLeft, thingRight, pieceRight)
    || isBetween(thingLeft, thingRight, pieceLeft)) {
      collisionWidth = true
    }

  return collisionWidth && collisionHeight
}

export const willHitTop = (moveUpTo) => {
  const topWall = INITIAL_BOARD_POSITION.top
  return moveUpTo <= topWall + GAME_BOARD_BOARDER_SIZE
} 

export const willHitRight = (moveRightTo) => {
  const rightWall = INITIAL_BOARD_POSITION.left + BOARD_SIZE - PIECE_SIZE 
  return moveRightTo >= rightWall - GAME_BOARD_BOARDER_SIZE
}

export const willHitBottom = (moveDownTo) => {
  const bottomWall = INITIAL_BOARD_POSITION.top + BOARD_SIZE - PIECE_SIZE
  return moveDownTo >= bottomWall - GAME_BOARD_BOARDER_SIZE
}

export const willHitLeft = (moveLeftTo) => {
  const leftWall = INITIAL_BOARD_POSITION.left
  return moveLeftTo <= leftWall + GAME_BOARD_BOARDER_SIZE
}