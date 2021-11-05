import React from 'react';
import Main from 'Components/Main';
import Account from 'Components/Accout';
import Gap from 'Components/Common/Gap';
import Header from 'Components/Header';
import styled from 'styled-components'
import PhoneCall from 'Components/PhoneCall';
import Slides from 'Components/Slides';
import Location from 'Components/Location';
const App = () => {
  return (
    <Center>
      <Main />
      <Header title="모시는 글" />
      <Text>
        저희 결혼식에 초대합니다.<br/>
        오랜 기다림 속에서 저희 두사람,<br/>
        한 마음 되어 참된 사랑의 결실을 맺게 되었습니다.<br/>
        오셔서 축복해 주시면 큰 기쁨이겠습니다.<br/>
      </Text>
      <Gap size={2}/>
      <Text>
        박장보 박춘희의 장남 <b>박경민</b>
        <Gap />
        이주삼 장선식의 장녀 <b>이현진</b>
      </Text>
      <Gap size={2}/>
      <Text>
        2021년 12월 12일 오전 11시
        <Gap />
        오페라웨딩홀 4층 아델리아홀
      </Text>
      <Gap size={4} />
      <Header title="마음 전하실 곳" />
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

const Text = styled.div`
  font-size: 18px;
  color: #666;
  line-height: 28px;
`
export default App;
