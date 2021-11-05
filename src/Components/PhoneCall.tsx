import React from 'react'
import styled from 'styled-components'
import call from 'assets/call.png'
const PhoneCall = () => {
  return (
    <Container>
      <CallBox>
        <CallContent>
        <b>신랑</b>에게<br/>
        전화걸기
        </CallContent>
        <a href="tel:01077706812">
          <Call>
            <img src={call} alt="" width="32px"/>
          </Call>
        </a>
      </CallBox>
      <CallBox>
        <CallContent>
          <b>신부</b>에게<br/>
          전화  걸기
        </CallContent>
        <a href="tel:01023439382">
          <Call>
            <img src={call} alt="" width="32px"/>
          </Call>
        </a>
      </CallBox>
    </Container>
  )
}

const Container = styled.div`
  background-color: #eee;
  display:flex;
  padding: 2em 0em;
`

const CallBox = styled.div`
  padding: 1em;
  width: 50%;
  &: last-child {
    border-left: 1px dashed #888;
  }
`
const CallContent = styled.div`
  display:inline-block;
`
const Call =styled.div`
  display:inline-block;
  padding-top: 14px; 
  border : 2px solid #999;
  margin-left: 20px;
  background-color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
export default PhoneCall