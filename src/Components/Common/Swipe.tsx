import React, { useState,useEffect, useRef } from 'react' 
interface SwipeProps {
  callback: (num:number) => void;
}
const Swipe:React.FC<SwipeProps> = ({children,callback}) => {
  const swipeRef = useRef<HTMLDivElement>(null)
  const [prev,setPrev] = useState(0)
  const [now, setNow] = useState(0)
  useEffect(()=> {
    if (now) {
      if (prev > now) {
        callback(1)
      } else {
        callback(-1)
      }
    }
  },[ now ])
  useEffect(()=>{
    document.addEventListener('mouseup', moveEnd)
    document.addEventListener('mousemove',moveMouse)
    return () => {
      document.removeEventListener('mouseup', moveEnd)
    }
  },[])
  const moveStart = (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('moveStart')
    setPrev(e.clientX)
  }
  const moveEnd = (e: MouseEvent) => {
    e.preventDefault()
    console.log('moveEnd')
    setNow(e.clientX)
  }
  const moveMouse = (e:MouseEvent) => {
    if (swipeRef.current) {
      dragItem(e.clientX)
      swipeRef.current.style.transform = `translateY(${e.clientX})`
    }
  }
  const dragItem = (x:number) => {
    console.log(x)
    console.log(prev)
  }
  const moveStart_touch = (e:React.TouchEvent<HTMLDivElement>) => {
    console.log('touch_start')

    setPrev(e.touches[0].pageX)
  }
  const moveEnd_touch = (e:React.TouchEvent<HTMLDivElement>) => {
    console.log('touch_end')

    setNow(e.changedTouches[0].pageX)
  }
  return (
    <div
      ref={swipeRef}
      onMouseDown={moveStart}
      onTouchStart={moveStart_touch}
      onTouchEnd={moveEnd_touch}
    >
      {children}
    </div>
  )
}
export default Swipe