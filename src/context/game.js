import React, { createContext, useReducer } from 'react'
import {
  playerReducer,
  playerInitialState,
  playerActions
} from 'state/player'

const GameContext = createContext()

const withGameContext = (Component) => {

  return function GameContextWrap(props) {

    const [state, dispatch] = useReducer(playerReducer, playerInitialState)
    const createAction = action => payload => dispatch({
      type: action,
      ...payload
    })
  
    const context = {
      ...state,
      movePlayer: createAction(playerActions.MOVE_PLAYER),
      stopPlayer: createAction(playerActions.STOP_PLAYER)
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