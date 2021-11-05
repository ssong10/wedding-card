import React from 'react'
import main from 'assets/main.jpg'
import styled from 'styled-components'
const Main = () => {
  return (
    <Container>
      <img src={main} alt="wedding" width="100%" />
    </Container>
  )
}

export default Main

const Container = styled.div`
  width: 100%;
`