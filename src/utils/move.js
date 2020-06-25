import { STEP_SIZE } from './constants'

export const moveUp = ({ top, left}) => {
  return {
    top: top - STEP_SIZE,
    left
  }
}

export const moveRight = ({ top, left}) => {
  return {
    top,
    left: left + STEP_SIZE
  }
}

export const moveDown = ({ top, left}) => {
  return {
    top: top + STEP_SIZE,
    left
  }
}

export const moveLeft = ({ top, left}) => {
  return {
    top,
    left: left - STEP_SIZE
  } 
}

export const nextMoveUp = moveUp
export const nextMoveRight = moveRight
export const nextMoveDown = moveDown
export const nextMoveLeft = moveLeft