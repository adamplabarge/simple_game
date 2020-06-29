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
    top: 40,
    left: 80,
    width: 40,
    height: 40,
    id: 1,
  },
  {
    top: 130,
    left: 60,
    width: 100,
    height: 60,
    id: 2,
  },
  {
    top: 200,
    left: 230,
    width: 40,
    height: 40,
    id: 3
  },
  {
    top: 240,
    left: 40,
    width: 100,
    height: 20,
    id: 4
  },
  {
    top: 40,
    left: 200,
    width: 20,
    height: 100,
    id: 5
  }
]

const Blocks = ({
  data,
  className
}) => {

  const blocksData = data ? data : defaultBlocks

  const {
    position: {
      top,
      left
    },
    direction,
    setHasCollision,
    setNoCollision,
  } = useGameContext()

  const collisionBlock = useMemo(
    () => blocksData.find(block => checkForBlockCollision(block, { top, left })) || false
    , [top, left, blocksData]
  )

  const checkForCollisionsCallback = useCallback(() => {
    if (collisionBlock) {
      setHasCollision({ collisionBlock: {
        ...collisionBlock,
        direction
      } })
    } else {
      setNoCollision()
    }
  }, [collisionBlock, setHasCollision, setNoCollision, direction])

  useEffect(() => {
    checkForCollisionsCallback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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