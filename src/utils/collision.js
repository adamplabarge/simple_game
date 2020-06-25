import {
  INITIAL_BOARD_POSITION,
  BOARD_SIZE,
  PIECE_SIZE,
  THING_INITIAL_POSITION,
  THING_SIZE,
  DIRECTION,
  GAME_BOARD_BOARDER_SIZE,
  SIDES
} from './constants'
import { isBetween } from 'utils'
import {
  nextMoveUp,
  nextMoveRight,
  nextMoveDown,
  nextMoveLeft,
} from 'utils/move'

export const canMoveUp = ({ top, left }) => {
  const nextMove = nextMoveUp({ top, left })
  const hitThing = doesMoveHitThing(DIRECTION.UP, nextMove)
  const boardTop = INITIAL_BOARD_POSITION.top
  const hitTop = willHitTop(nextMove.top, boardTop) 

  if (hitTop || hitThing)
    return {
      collision: true,
      top: hitTop,
      thing: hitThing,
      side: SIDES.TOP
    }
  return true
}

export const canMoveRight = ({ top, left }) => {
  const nextMove = nextMoveRight({ top, left })
  const hitThing = doesMoveHitThing(DIRECTION.RIGHT, nextMove)
  const boardRight = INITIAL_BOARD_POSITION.left + BOARD_SIZE - PIECE_SIZE 
  const hitRight = willHitRight(nextMove.left, boardRight)
  
  if (hitRight || hitThing)
    return {
      collision: true,
      right: hitRight,
      thing: hitThing,
      side: SIDES.RIGHT
    }

  return {
    collision: false,
  }
}

export const canMoveDown = ({ top, left  }) => {
  const nextMove = nextMoveDown({ top, left })
  const hitThing = doesMoveHitThing(DIRECTION.DOWN, nextMove)
  const boardBottom = INITIAL_BOARD_POSITION.top + BOARD_SIZE - PIECE_SIZE
  const hitBottom = willHitBottom(nextMove.top, boardBottom)

  if (hitBottom || hitThing)
    return {
      collision: true,
      bottom: hitBottom,
      thing: hitThing,
      side: SIDES.BOTTOM
    }

  return {
    collision: false,
  }
}

export const canMoveLeft = ({ top, left }) => {
  const nextMove = nextMoveLeft({ left , top })
  const hitThing = doesMoveHitThing(DIRECTION.LEFT, nextMove)
  const boardLeft = INITIAL_BOARD_POSITION.left
  const hitLeft = willHitLeft(nextMove.left, boardLeft)

  if (hitLeft || hitThing)
    return {
      collision: true,
      left: hitLeft,
      thing: hitThing,
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

export const willHitTop = (movePosition, top) => {
  return movePosition < top + GAME_BOARD_BOARDER_SIZE
} 

export const willHitRight = (movePosition, right) => {
  return movePosition > right - GAME_BOARD_BOARDER_SIZE
}

export const willHitBottom = (movePosition, bottom) => {
  return movePosition > bottom - GAME_BOARD_BOARDER_SIZE
}

export const willHitLeft = (movePosition, left) => {
  return movePosition < left + GAME_BOARD_BOARDER_SIZE
}