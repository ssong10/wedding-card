import React from 'react'
import styled from 'styled-components'

interface GapProps {
  size?: number
}

const Gap:React.FC<GapProps> = ({size}) => {
  return <GapContainer Size={size}/>
}

const GapContainer = styled.div<{Size?:number}>`
  height: ${props => props.Size || 1}em;
`

export default Gap