import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string
};

const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    <Container>
      <Title>
      </Title>
      {title}
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding-bottom: 1em;
  margin: 2em 3em;
`

const Title = styled.span`
  font-size: 20px;
`
export default Header