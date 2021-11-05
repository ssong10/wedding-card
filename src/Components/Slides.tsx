import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import wedding1 from 'assets/wedding1.jpg'
import wedding2 from 'assets/wedding2.jpg'
import wedding3 from 'assets/wedding3.jpg'
import wedding4 from 'assets/wedding4.jpg'
import wedding5 from 'assets/wedding5.jpg'
import wedding6 from 'assets/wedding6.jpg'
import wedding7 from 'assets/wedding7.jpg'
import wedding8 from 'assets/wedding8.jpg'
import wedding9 from 'assets/wedding9.jpg'
import Header from './Header'

const IMGS = [
  {
    url: wedding1
  },
  {
    url:wedding2
  },
  {
    url:wedding3
  },
  {
    url:wedding4
  },
  {
    url:wedding5
  },
  {
    url:wedding6
  },
  {
    url:wedding7
  },
  {
    url:wedding8
  },
  {
    url:wedding9
  },
]

const Slides = () => {
  const showImg = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(0)
  const [select, setSelect] = useState(0)
  useEffect(()=> {
    setSelect(show)
  },[show])
  const scrollPrev = () => {
    setSelect(select > 2 ? select - 3 : 0)
  }
  const scrollNext = () => {
    setSelect(select < IMGS.length - 4 ? select+3 : IMGS.length-1)
  }
  const fullScreen = () => {
    if (showImg.current) {
      if (showImg.current.requestFullscreen) {
        showImg.current.requestFullscreen();
      }
    }
  }
  return (
    <div>
      <Header title="Gallery" />
      <ShowImg ref={showImg}>
        <img src={IMGS[show].url} alt="wedding" width="60%"/>
        <Expand onClick={fullScreen}></Expand>
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
  position: relative;
  margin-bottom: 2em;
`
const SlideContainer =  styled.div`
  position: relative;
  display:flex;
  height: 20vw;
  overflow-y: hidden;
  white-space: no-wrap;
  &::-webkit-scrollbar {
    display:none;
  }
`
const Expand = styled.button`
  position:absolute;
  top: 5px;
  right: 10px;
  height: 24px;
  width: 24px;
  border-radius: 2px;
  background-color: rgba(0,0,0,0.5)
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
  background-color: rgba(0,0,0,0.4);
  height: 20vw;
  width: 30px;
  position: absolute;
  z-index: 10;
  line-height:20vw;
  &: after {
    color: #fff;
    content: "◀"
  }
`
const Next = styled.div`
  background-color: rgba(0,0,0,0.4);
  height: 20vw;
  width: 30px;
  line-height:20vw;
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