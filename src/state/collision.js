import { useReducer } from 'react'

const HAS_COLLISION = 'HAS_COLLISION'

export const collisionActions = {
  HAS_COLLISION
}

export const collisionReducer = (state, action) => {
  switch (action.type) {
    case HAS_COLLISION :
      return state
    default:
      return state
  }
}