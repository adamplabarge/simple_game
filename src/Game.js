import React from 'react'
import styled from '@emotion/styled'
import Board from 'components/Board'
import Player from 'components/Player'
import Blocks from 'components/Blocks'
import { withGameContext } from 'context/game'

const Game = () => {
  return (
    <GameArea>
      <Board />
      <Player />
      <Blocks />
    </GameArea>
  )
}

const GameArea = styled.div`
`

export default withGameContext(Game)