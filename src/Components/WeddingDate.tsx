import React from 'react'
import propose from 'assets/propose.png'
import propose2 from 'assets/propose2.png'

import styled from 'styled-components'

const WeddingDate = () => {
  const today = new Date()
  const weddingDay = new Date(2021,11,12)
  const gap = weddingDay.getTime() - today.getTime()
  const result = Math.ceil(gap / (1000*60*60*24))
  return (
    <Container>
      <img src={propose2} alt="propose" width="100%" />
      <Content>
        D - Day <br/>
        {result}
      </Content>
    </Container>
  )
}
const Container = styled.div`
  position: relative;
`
const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 18%;
  text-align: left;
  color: #fff;
  font-weight: 500;
  font-size: 6vw;
  line-height:9vw;
`
export default WeddingDate