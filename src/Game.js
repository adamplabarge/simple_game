import React from 'react'
import styled from '@emotion/styled'
import Board from 'components/Board'
import Player from 'components/Player'
import Blocks from 'components/Blocks'

const Game = () => {

  const blocksData = [
    {
      top: 20,
      left: 40,
      size: 40,
      id: 1,
    },
    {
      top: 100,
      left: 60,
      size: 60,
      id: 2,
    },
    {
      top: 200,
      left: 200,
      size: 40,
      id: 3
    }
  ]

  return (
    <GameArea>
      <Board />
      <Player />
      <Blocks blocks={blocksData} />
    </GameArea>
  )
}

const GameArea = styled.div`
`

export default Game;