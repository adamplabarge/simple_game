import { useContext } from 'react'
import { GameContext } from 'context/game'

export const useGameContext = () => useContext(GameContext)
