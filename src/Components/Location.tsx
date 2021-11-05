import React, { useEffect , useRef } from 'react'
import styled from 'styled-components'
import Header from './Header'

declare global {
  interface Window {
    kakao: any;
  }
}

const Location = () => {
  const mapRef = useRef(null)
  useEffect(()=> {
    const mapContainer = mapRef.current
    const position = new window.kakao.maps.LatLng(36.3481,127.38355)
    let options = {
      center: position,
      level: 4
    }
    const map = new window.kakao.maps.Map(mapContainer, options)
    
    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    const marker = new window.kakao.maps.Marker({
      position
    })
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    marker.setMap(map)
    // const iwPosition = new window.kakao.maps.LatLng(36.3481,127.38355);
    // const iwContent = `<div style="text-align:center;width:100%;"><span style="font-family:'Gothic';font-size:14px;text-align:center;width:100%">더 오페라 웨딩홀</span></div>`
    // var infowindow = new window.kakao.maps.InfoWindow({
    //   position : iwPosition, 
    //   content : iwContent 
    // });
    // infowindow.open(map, marker); 
  },[])
  return (
    <div>
      <Header title="Location"/>
      <Map ref={mapRef} id="map" />
    </div>
  )
}
const Map = styled.div`
  width: 100%;
  height: 60vw; 
`
export default Location