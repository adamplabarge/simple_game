import { DIRECTIONS } from 'utils/constants'

const moveUp = ({ top, left }, progress) => {
  return {
    top: top - progress,
    left
  }
}

const moveRight = ({ top, left }, progress) => {
  return {
    top,
    left: left + progress
  }
}

const moveDown = ({ top, left }, progress) => {
  return {
    top: top + progress,
    left
  }
}

const moveLeft = ({ top, left }, progress) => {
  return {
    top,
    left: left - progress
  } 
}

const moves = {
  [DIRECTIONS.UP]: moveUp,
  [DIRECTIONS.RIGHT]: moveRight,
  [DIRECTIONS.DOWN]: moveDown,
  [DIRECTIONS.LEFT]: moveLeft,
}

export const handleMove = (direction, position, progress, forcePosition)=> {
  if (forcePosition) 
    return moves[direction](position, 0)
  return moves[direction](position, progress)
}