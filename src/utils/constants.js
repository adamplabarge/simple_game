export const INITIAL_BOARD_POSITION = Object.freeze({
  top: 0,
  left: 0
})

export const INTIAL_PIECE_POSITION = Object.freeze({
  top: 10,
  left: 10
})

export const STEP_SIZE = 5
export const BOARD_SIZE = 100
export const GAME_BOARD_BOARDER_SIZE = 5

export const PIECE_SIZE = 10

export const THING_SIZE = 20
export const THING_INITIAL_POSITION = Object.freeze({
  top: 40,
  left: 50
})

const ARROW_UP = 'ArrowUp'
const ARROW_RIGHT = 'ArrowRight'
const ARROW_DOWN = 'ArrowDown'
const ARROW_LEFT = 'ArrowLeft'

export const DIRECTION = Object.freeze({
  'UP': ARROW_UP,
  'RIGHT': ARROW_RIGHT,
  'DOWN': ARROW_DOWN,
  'LEFT': ARROW_LEFT
})

const TOP = 'TOP'
const RIGHT = 'RIGHT'
const BOTTOM = 'BOTTOM'
const LEFT = 'LEFT'
export const SIDES = Object.freeze({
  TOP,
  RIGHT,
  BOTTOM,
  LEFT
})