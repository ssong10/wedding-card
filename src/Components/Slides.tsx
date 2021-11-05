import React, { useState } from 'react'
import styled from 'styled-components'

const IMGS = [
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_111634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_121634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_131634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_141634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_151634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_161634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_171634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_181634182379'
  },
  {
    url:'http://mwedding.net/upData/PL1212/PL1212_1634182379_191634182379'
  },
]

const Slides = () => {
  const [show, setShow] = useState(0)
  const [select, setSelect] = useState(0)
  const scrollPrev = () => {
    setSelect(select > 2 ? select - 3 : 0)
  }
  const scrollNext = () => {
    setSelect(select < IMGS.length - 4 ? select+3 : IMGS.length-1)
  }
  return (
    <div>
      <ShowImg>
        <img src={IMGS[show].url} alt="wedding" width="60%"/>
      </ShowImg>
      <SlideContainer>
        {select !== 0 && 
          <Prev onClick={scrollPrev}/>
        }
        <Slide index={select}>
          <Thumb/>
          <Thumb/>
          {IMGS.map((img,idx) => 
            <Thumb 
              key={idx}
              onClick={()=>setShow(idx)}
              select={idx===show}
            >
              <img height="100%" src={img.url} alt="wedding" />
              <Layout
                select={idx===show}
              />
            </Thumb>
          )}
          <Thumb/>
          <Thumb/>
        </Slide>
        {select !== IMGS.length -1 && 
          <Next onClick={scrollNext}/>
        }
      </SlideContainer>
    </div>
  )
}
const ShowImg = styled.div`
  margin-bottom: 2em;
`
const SlideContainer =  styled.div`
  position: relative;
  display:flex;
  height: 20vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: no-wrap;
  &::-webkit-scrollbar {
    display:none;
  }
`

const Thumb = styled.div<{select?:boolean}>`
  position: relative;
  width: 20vw;
  ${props => props.select && `
    opacity: 0.5}
  `}

`

const Layout = styled.div<{select?:boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${props => props.select && 'background-color: rgb(0,0,0,0.4)'}
`
const Prev = styled.div`
  background-color: rgba(0,0,0,0.2);
  height: 20vw;
  width: 30px;
  position: absolute;
  z-index: 10;
  &: after {
    color: #fff;
    content: "◀"
  }
`
const Next = styled.div`
  background-color: rgba(0,0,0,0.2);
  height: 20vw;
  width: 30px;
  position: absolute;
  z-index: 10;
  right: 0;
  &: after {
    color: #fff;
    content: "▶"
  }
`
const Slide = styled.div<{index:number}>`
  display:flex;
  position:relative;
  list-style: none;
  left: ${props => -20 * props.index + 'vw'};
  margin: 0;
  padding-left:0px;
  transition: left 1s;
`
export default Slides