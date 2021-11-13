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
import { useSwipeable } from 'react-swipeable'

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
  const handlers = useSwipeable({
    onSwipedRight: () => Swiper(show-1),
    onSwipedLeft: () => Swiper(show+1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const [ fullScreen, setFullScreen ] = useState(false)
  const showImg = useRef<any>(null)
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
  const Swiper = (idx:number) => {
    if (idx === -1) {
      setShow(0)
      return
    }
    if (idx === IMGS.length) {
      setShow(IMGS.length -1)
    }
    setShow(idx)
  }
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
      const element = showImg.current
      setFullScreen(true)
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      }
    }
  }
  const exitFullScreen = () => {
    setFullScreen(false)
  }
  return (
    <Container>
      <Header title="Gallery" />
      <MainImgContainer ref={showImg}>
        {
          show !== 0 && 
          <ShortPrev onClick={()=> setShow(show-1)} fullScreen={fullScreen} /> 
        }
          <MainSlider 
            index={show}
          >
            {IMGS.map((img,idx) => 
              <ImgContainer
                {...handlers}
                key={idx}
              >
                <Img src={img.url} alt="wedding" fullScreen={fullScreen}/>
              </ImgContainer>
            )}
          </MainSlider>
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
              <img height="100%" width="80%" src={img.url} alt="wedding" />
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
    </Container>
  )
}
const Container = styled.div`
  margin-bottom: 5em;
`
const MainImgContainer = styled.div`
  position: relative;
  display:flex;
  overflow: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display:none;
  }
  &: hover > button {
    opacity: 1;
  };
`

const Img = styled.img<{fullScreen:boolean}>`
  ${props => props.fullScreen ?
    'height : 90vh;' :
    'width: 60vw'
  }
`
const SlideContainer =  styled.div`
  position: relative;
  display:flex;
  height: 20vw;
  overflow: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display:none;
  }
`

const FullScreenButton = styled.button`
  opacity: 0;

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
  width: 40px;
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
  width: 40px;
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
  left: 10%;
  height: 40px;
  line-height: 40px;
  ${props => props.fullScreen && `
    font-size: 24px
  `}
`
const ShortNext = styled(Next)<{fullScreen:boolean}>`
  opacity: 0;
  top: 50%;
  right: 10%;
  height: 40px;
  line-height: 40px;
  ${props => props.fullScreen && `
    font-size: 24px
  `}
`
const Slide = styled.div<{index:number}>`
  display:flex;
  position:relative;
  left: ${props => -20 * props.index + 'vw'};
  margin: 0;
  padding-left:0px;
  transition: left 1s;
`
const ImgContainer = styled.div`
  width: 100vw;
  margin:auto;
`
const MainSlider = styled.div<{index:number}>`
  display:flex;
  position:relative;
  left: ${props => -100 * props.index + 'vw'};
  margin: 0;
  padding-left:0px;
  transition: left 1s;
`
export default Slides