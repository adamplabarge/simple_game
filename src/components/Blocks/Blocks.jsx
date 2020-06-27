import React, { useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import { useGameContext } from 'hooks/game'
import { PLAYER_SIZE } from 'utils/constants'
import { isBetween } from 'utils/helpers'

const checkForBlockCollision = (block, position) => {
  const x1 = isBetween(block.left, block.left + block.size, position.left)
  const x2 = isBetween(block.left, block.left + block.size, position.left + PLAYER_SIZE)
  const y1 = isBetween(block.top, block.top + block.size, position.top)
  const y2 = isBetween(block.top, block.top + block.size, position.top + PLAYER_SIZE)

  return x1 && x2 && y1 && y2
}

const Blocks = ({
  blocks
}) => {

  const {
    direction,
    position,
    setHasCollision,
    setNoCollision,
    collision
  } = useGameContext()

  const collisionBlock = blocks.find(block => checkForBlockCollision(block, position)) || false

  const checkForCollisionsCallback = useCallback(() => {
    if (collisionBlock) {
      setHasCollision(collisionBlock)
    } else {
      setNoCollision()
    }
  }, [collision])

  useEffect(() => {
    checkForCollisionsCallback()
  }, [collision])

  return (
    <>
      {
        blocks.map(
          ({id, ...rest}) =>
            <GameBlock
              key={id}
              {...rest}
              id={id}
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
    size,
    collisionBlock,
    id
  } = props

  const backgroundColor = id === collisionBlock.id ? 'red' : 'khaki'

  return `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${size}px;
    height: ${size}px;
    border-width: 5px;
    background-color: ${backgroundColor};
    z-index: 5;
  `
})

export default Blocks