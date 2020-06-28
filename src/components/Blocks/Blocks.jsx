import React, { useEffect, useCallback, useMemo } from 'react'
import styled from '@emotion/styled'
import { useGameContext } from 'hooks/game'
import { PLAYER_SIZE } from 'utils/constants'
import { isBetween } from 'utils/helpers'

const checkForBlockCollision = (block, position) => {
  const x1 = isBetween(block.left, block.left + block.width, position.left)
  const x2 = isBetween(block.left, block.left + block.width, position.left + PLAYER_SIZE)
  const y1 = isBetween(block.top, block.top + block.height, position.top)
  const y2 = isBetween(block.top, block.top + block.height, position.top + PLAYER_SIZE)

  return (x1 || x2) && (y1 || y2)
}

const defaultBlocks = [
  {
    top: 20,
    left: 40,
    width: 40,
    height: 40,
    id: 1,
  },
  {
    top: 100,
    left: 60,
    width: 100,
    height: 60,
    id: 2,
  },
  {
    top: 200,
    left: 200,
    width: 40,
    height: 40,
    id: 3
  }
]

const Blocks = ({
  data,
  className
}) => {

  const blocksData = data ? data : defaultBlocks

  const {
    position,
    setHasCollision,
    setNoCollision,
  } = useGameContext()

  const collisionBlock = useMemo(
    () => blocksData.find(block => checkForBlockCollision(block, position)) || false
    , [position.top, position.left]
  )

  const checkForCollisionsCallback = useCallback(() => {
    if (collisionBlock) {
      setHasCollision(collisionBlock)
    } else {
      setNoCollision()
    }
  }, [collisionBlock])

  useEffect(() => {
    checkForCollisionsCallback()
  }, [collisionBlock])

  return (
    <>
      {
        blocksData.map(
          block =>
            <GameBlock
              className={className}
              key={block.id}
              {...block}
              collisionBlock={collisionBlock}
            />
        )
      }
    </>
  )
}
 
const GameBlock = styled.div(props => {
  const {
    top,
    left,
    width,
    height,
    collisionBlock,
    id
  } = props

  const backgroundColor = id === collisionBlock.id ? 'red' : 'khaki'

  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${width}px;
    height: ${height}px;
    border-width: 5px;
    background-color: ${backgroundColor};
    z-index: 5;
  `
})

export default Blocks