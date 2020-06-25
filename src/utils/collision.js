import {
  INITIAL_BOARD_POSITION,
  BOARD_SIZE,
  PIECE_SIZE,
  THING_INITIAL_POSITION,
  THING_SIZE,
  DIRECTION
} from './constants'
import { isBetween } from 'utils'

export const canMoveUp = ({ top, left }) => {
  const boardTop = INITIAL_BOARD_POSITION.top
  const willHitThing = doesMoveHitThing(DIRECTION.UP, { top, left })
  
  if (!willHitThing) {
    if (top > boardTop)
      return true
  }
  return false
}

export const canMoveRight = ({ top, left }) => {
  const boardRight = INITIAL_BOARD_POSITION.left + BOARD_SIZE - PIECE_SIZE 
  const willHitThing = doesMoveHitThing(DIRECTION.RIGHT, { top, left })
    
  if (left < boardRight && !willHitThing)
    return true
  return false
}

export const canMoveDown = ({ top, left  }) => {
  const boardBottom = INITIAL_BOARD_POSITION.top + BOARD_SIZE - PIECE_SIZE
  const willHitThing = doesMoveHitThing(DIRECTION.DOWN, { top, left })
  
  if (top < boardBottom && !willHitThing)
    return true
  return false
}

export const canMoveLeft = ({ top, left }) => {
  const boardLeft = INITIAL_BOARD_POSITION.left
  const willHitThing = doesMoveHitThing(DIRECTION.LEFT, { top, left })
  
  if (left > boardLeft && !willHitThing)
    return true
  return false
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