export const moveUp = ({ top, left }, progress) => {
  return {
    top: top - progress,
    left
  }
}

export const moveRight = ({ top, left }, progress) => {
  return {
    top,
    left: left + progress
  }
}

export const moveDown = ({ top, left }, progress) => {
  return {
    top: top + progress,
    left
  }
}

export const moveLeft = ({ top, left }, progress) => {
  return {
    top,
    left: left - progress
  } 
}

export const nextMoveUp = moveUp
export const nextMoveRight = moveRight
export const nextMoveDown = moveDown
export const nextMoveLeft = moveLeft