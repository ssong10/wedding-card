import React from 'react';
import Main from 'Components/Main';
import Account from 'Components/Accout';
import Content from 'Components/Content';
import PhoneCall from 'Components/PhoneCall';
import Slides from 'Components/Slides';
import Location from 'Components/Location';
import styled from 'styled-components'
import WeddingDate from 'Components/WeddingDate';

const App = () => {
  return (
    <Center>
      <Main />
      <Content />
      <WeddingDate />
      <Account />
      <PhoneCall />
      <Slides />
      <Location />
    </Center>
  );
}

const Center = styled.div`
  text-align: center;
  font-size: 18px;
  min-height: 5000px;
`


export default App;
