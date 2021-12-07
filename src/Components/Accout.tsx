import React, { useState } from 'react';
import styled from 'styled-components';
import Gap from './Common/Gap';
import Header from './Header';

const Account:React.FC = () => {
  const [groom, setGroom] = useState(false)
  const [bride , setBride] = useState(false)
  const toggleGroom = () => setGroom(!groom)
  const toggleBride = () => setBride(!bride)
  const handleCopyClipBoard = async (who: string, text: string) => {
    await navigator.clipboard.writeText(text);
    alert(`${who} 측 계좌번호가 복사되었습니다.`)
  }
  const copyGroom = () => {
    handleCopyClipBoard('신랑','국민은행 478102-04-157028')
  }
  const copyBride = () => {
    handleCopyClipBoard('신부', ' 국민은행 92343938249')
  }
  return (
    <Container>
      <Gap />
      <Header title="마음 전하실 곳" />
      <ShowAccount onClick={toggleGroom}>
        신랑 측 계좌번호 보기
      </ShowAccount>
      <AccountDetail show={groom}>
        <Gap />
        박경민<br/>
        국민은행 478102-04-157028
        <Copy onClick={copyGroom}>복사</Copy>
      </AccountDetail>
      <Gap />
      <ShowAccount onClick={toggleBride}>
        신부 측 계좌번호 보기
        <Arrow>
          <span></span>
        </Arrow>
      </ShowAccount>
      <AccountDetail show={bride}>
        <Gap />
        이현진<br/>
        국민은행 92343938249
        <Copy onClick={copyBride}>복사</Copy>
      </AccountDetail>
    </Container>
  )
}
const Container = styled.div`
  background-color: #F4F4F6;
  margin-bottom: 100px;
`
const ShowAccount = styled.div`
  cursor: pointer;
  background-color: #DDDAD8;
  padding: 1em;
`
const Arrow = styled.div`

`
const AccountDetail = styled.div<{show:boolean}>`
  height: ${props => props.show ? '100px' : '0px'};
  line-height: 30px;
  overflow: hidden;
  padding-left: 10%;
  text-align : left;
  transition: height 0.3s ease-in;
`

const Copy = styled.button`
  padding: 8px 12px;
  margin-left: 1em;
  background-color: #999;
  border-radius: 4px;
  color: #fff;
`
export default Account