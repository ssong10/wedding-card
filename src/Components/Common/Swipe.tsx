import React, { useState,useEffect } from 'react' 
interface SwipeProps {
  callback: (num:number) => void;
}
const Swipe:React.FC<SwipeProps> = ({children,callback}) => {
  const [prev,setPrev] = useState(0)
  const [now, setNow] = useState(0)
  const moveStart = (e:React.MouseEvent<HTMLDivElement>) => {
    console.log('moveStart')
    setPrev(e.clientX)
  }
  const moveEnd = (e:React.MouseEvent<HTMLDivElement>) => {
    console.log('moveEnd')
    setNow(e.clientX)
    move()
  }
  useEffect(()=>{
    console.log(prev,now)
  },[prev,now])
  const move = () => {
    if (prev > now) {
      callback(1)
    } else {
      callback(-1)
    }
  }
  const moveStart_touch = (e:React.TouchEvent<HTMLDivElement>) => {
    console.log('touch_start')

    setPrev(e.touches[0].pageX)
  }
  const moveEnd_touch = (e:React.TouchEvent<HTMLDivElement>) => {
    console.log('touch_end')

    setNow(e.changedTouches[0].pageX)
    move()
  }
  return (
    <div
      draggable
      onMouseDown={moveStart}
      onMouseUp={moveEnd}
      onTouchStart={moveStart_touch}
      onTouchEnd={moveEnd_touch}
    >
      {children}
    </div>
  )
}
export default Swipe