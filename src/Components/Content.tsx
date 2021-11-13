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
        한 마음 되어 참된 사랑의 결실을 맺게 되었습니다.<br/>
        오셔서 축복해 주시면 큰 기쁨이겠습니다.<br/>
      </Text>
      <Gap size={2}/>
      <Text>
        박장보 박춘희의 장남 <b>박경민</b>
        <Gap />
        이주삼 장선식의 장녀 <b>이현진</b>
        <Gap size={2}/>
        2021년 12월 12일 오전 11시
        <Gap />
        오페라웨딩홀 4층 아델리아홀
        <Gap size={4} />
      </Text>
      <Header title="신부 측 피로연" />
      <Text>
        거리가 멀어 참석하기 어려운 분들을 위해<br/>

        혼례에 앞서 별도의 자리를 마련했습니다.<br/>

        함께 자리해주셔서 두 사람의 행복한 앞날을<br/>

        축복해주시면 감사하겠습니다.<br/>
        <Gap size={2}/>
        2021년 12월 4일 토요일 12시 <br/>
        <Gap />
        충청남도 보령시 남포면 보령남로 195<br/>
        <Gap />
        행복한웨딩홀 1층<br/>
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