import React from 'react'
import styled from '@emotion/styled'
import {
  THING_SIZE,
  THING_INITIAL_POSITION
} from 'utils/constants'

const Thing = ({
  className
}) => {

 return (
  <div className={className} />
 )
}
 
const BlockingThing = styled(Thing)(props => {
  const { collision } = props

  const borderColor = collision.thing ? 'orange' : 'yellow'

  return `
    position: absolute;
    top: ${THING_INITIAL_POSITION.top}px;
    left: ${THING_INITIAL_POSITION.left}px;
    width: ${THING_SIZE}px;
    height: ${THING_SIZE}px;
    border: 5px solid;
    border-color: ${borderColor};
    background-color: yellow;
    z-index: 5;
  `
})

export default BlockingThing