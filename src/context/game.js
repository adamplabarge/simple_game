import React, { createContext, useReducer } from 'react'
import {
  playerReducer,
  playerInitialState,
  playerActions
} from 'state/player'
import { 
  collisionReducer,
  collisionActions
} from 'state/collision'
import { combineReducers } from 'state/utils'

const GameContext = createContext()

const withGameContext = (Component) => {

  return function GameContextWrap(props) {

    const [state, dispatch] = useReducer(
      combineReducers(playerReducer, collisionReducer), 
      {...playerInitialState, ...{ collision: false }}
    )
    const createAction = action => payload => dispatch({
      type: action,
      ...payload
    })
  
    const context = {
      ...state,
      movePlayer: createAction(playerActions.MOVE_PLAYER),
      stopPlayer: createAction(playerActions.STOP_PLAYER),
      setHasCollision: createAction(collisionActions.HAS_COLLISION),
      setNoCollision: createAction(collisionActions.NO_COLLISION),
    }
  
    return(
      <GameContext.Provider value={context}>
        <Component {...props} />
      </GameContext.Provider>
    )
  }
}


export {
  GameContext,
  withGameContext
}