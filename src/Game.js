import React from 'react'
import styled from '@emotion/styled'
import Board from 'components/Board'
import Player from 'components/Player'
import Blocks from 'components/Blocks'
import { withGameContext } from 'context/game'
import { useGameContext } from 'hooks/game'
import { GAME_BOARD_SIZE } from 'utils/constants'

const Game = () => {
  const { direction } = useGameContext()
  return (
    <GameArea>
      <Board />
      <Player />
      <Blocks />
      <KeyPressed>
        <h3>{`Movement: \{ ${direction} \}`}</h3>
      </KeyPressed>
    </GameArea>
  )
}

const GameArea = styled.div`
  position: relative;
  width: ${GAME_BOARD_SIZE}px;
  height: ${GAME_BOARD_SIZE}px;
`

const KeyPressed = styled.div`
  position: absolute;
  color: khaki;
  font-size: 8px;
  top: 1px;
  margin: 0;
  line-height: 0.1;
  padding: 0;
  right: 7px;
`

export default withGameContext(Game)