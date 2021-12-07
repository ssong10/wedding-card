import React from 'react'
import styled from 'styled-components'
import Gap from './Common/Gap'
import Header from './Header'

const Content = () => {
  return (
    <div>
      <Header title="모시는 글" />
      <Text>
        저희 결혼식에 초대합니다.<br/>
        오랜 기다림 속에서 저희 두사람,<br/>
        한 마음 되어 참된 사랑의 결실을<br/>
        맺게 되었습니다.<br/>
        오셔서 축복해 주시면 큰 기쁨이겠습니다.<br/>
      </Text>
      <Gap size={2}/>
      <Text>
        박장보 · 박춘희의 장남 <b>박경민</b>
        <Gap />
        이주삼 · 장선식의 장녀 <b>이현진</b>
        <Gap size={2}/>
        2021년 12월 12일 오전 11시
        <Gap />
        오페라웨딩홀 4층 아델리아홀
        <Gap size={4} />
      </Text>
      <Gap size={4} />
    </div>
  )
}

const Text = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 28px;
  font-family: "나눔세리프" , "Noto Serif KR";
`
export default Content