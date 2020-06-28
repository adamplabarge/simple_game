const HAS_COLLISION = 'HAS_COLLISION'
const NO_COLLISION = 'NO_COLLISION'

export const collisionActions = {
  HAS_COLLISION,
  NO_COLLISION
}

export const collisionReducer = (state, { type, collisionBlock }) => {
  switch (type) {
    case HAS_COLLISION:
      return {
        ...state,
        collisionBlock,
        collision: true
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