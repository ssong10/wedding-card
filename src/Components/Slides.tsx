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
import { ReactComponent as Full } from 'assets/fullscreen.svg'
import { ReactComponent as Close } from 'assets/closeFullScreen.svg'
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
  const [ fullScreen, setFullScreen ] = useState(false)
  const showImg = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(0)
  const [select, setSelect] = useState(0)
  useEffect(()=> {
    setSelect(show)
  },[show])
  useEffect(()=> {
    document.addEventListener('fullscreenchange',(e) => {
      if (!document.fullscreenElement) {
        setFullScreen(false)
      }
    })
  },[])
  useEffect(()=> {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setFullScreen(false)
    }
  },[ fullScreen ])
  const scrollPrev = () => {
    setSelect(select > 2 ? select - 3 : 0)
  }
  const scrollNext = () => {
    setSelect(select < IMGS.length - 4 ? select+3 : IMGS.length-1)
  }
  const requestFullScreen = () => {
    if (showImg.current) {
      if (showImg.current.requestFullscreen) {
        showImg.current.requestFullscreen();
        setFullScreen(true)
      }
    }
  }
  const exitFullScreen = () => {
    setFullScreen(false)
  }
  return (
    <div>
      <Header title="Gallery" />
      <MainImgContainer ref={showImg}>
        {
          show !== 0 && 
          <ShortPrev onClick={()=> setShow(show-1)} fullScreen={fullScreen} /> 
        }
          <Img src={IMGS[show].url} alt="wedding" fullScreen={fullScreen}/>
        {
          show !== IMGS.length-1 &&
          <ShortNext onClick={()=> setShow(show+1)} fullScreen={fullScreen}/>
        }
        <FullScreenButton>
          { fullScreen 
            ? <Close onClick={exitFullScreen} />
            : <Full onClick={requestFullScreen} />
          }
        </FullScreenButton>
      </MainImgContainer>
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
              <img height="100%" width="auto" src={img.url} alt="wedding" />
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
const MainImgContainer = styled.div`
  position: relative;
  margin: 2em 10%;
  &: hover > button {
    opacity: 1;
  }
`

const Img = styled.img<{fullScreen:boolean}>`
  ${props => props.fullScreen ?
    'height : 100vh;' :
    'width: 30vw'
  }
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

const FullScreenButton = styled.button`
  padding: 0;
  position:absolute;
  top: 5px;
  right: 10px;
  height: 30px;
  width: 30px;
  border-radius: 2px;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
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
const Prev = styled.button`
  width: 30px;
  line-height: 20vw;
  left: 0;
  top: 0;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  &: after {
    color: #fff;
    content: "◀"
  }
  transition: opacity 0.3s;
`
const Next = styled.button`
  top: 0;
  right: 0;
  width: 30px;
  line-height:20vw;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  &: after {
    color: #fff;
    content: "▶"
  }
`
const ShortPrev = styled(Prev)<{fullScreen:boolean}>`
  opacity: 0;
  top: 50%;
  left: 20%;
  height: 30px;
  line-height: 30px;
  ${props => props.fullScreen && `
    font-size: 24px
  `}
`
const ShortNext = styled(Next)<{fullScreen:boolean}>`
  opacity: 0;
  top: 50%;
  right: 20%;
  height: 30px;
  line-height: 30px;
  ${props => props.fullScreen && `
    font-size: 24px
  `}
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