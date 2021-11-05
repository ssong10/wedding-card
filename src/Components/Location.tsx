import React, { useEffect , useRef } from 'react'
import styled from 'styled-components'
import Header from './Header'

declare global {
  interface Window {
    kakao: any;
  }
}

const Location = () => {
  const mapRef = useRef<any>(null)
  const roadmapControl = useRef<null| HTMLSpanElement>(null)
  const skyviewControl = useRef<null| HTMLSpanElement>(null)
  useEffect(()=> {
    const mapContainer = document.getElementById('map')
    const position = new window.kakao.maps.LatLng(36.3481,127.38355)
    let options = {
      center: position,
      level: 4
    }
    const map = new window.kakao.maps.Map(mapContainer, options)
    mapRef.current = map
    const marker = new window.kakao.maps.Marker({
      position
    })
    marker.setMap(map)
  },[])
  const setMapType = (maptype: string) => {
    if (mapRef.current && roadmapControl.current && skyviewControl.current) {
      const map = mapRef.current
      if (maptype === 'roadmap') {
          map.setMapTypeId(window.kakao.maps.MapTypeId.ROADMAP);
          roadmapControl.current.className = 'selected_btn';
          skyviewControl.current.className = 'btn';
      } else {
          map.setMapTypeId(window.kakao.maps.MapTypeId.HYBRID);    
          skyviewControl.current.className = 'selected_btn';
          roadmapControl.current.className = 'btn';
      }
    }
  }
  const zoomIn = () => {
    if (mapRef.current) {
      const map = mapRef.current
      map.setLevel(map.getLevel() - 1);
    }
  }

  const zoomOut = () => {
    if (mapRef.current) {
      const map = mapRef.current
      map.setLevel(map.getLevel() + 1);
    }
  }
  return (
    <div>
      <Header title="Location"/>
      <Map id="map">
        <div className="custom_typecontrol radius_border">
          <span ref={roadmapControl} id="btnRoadmap" className="selected_btn" onClick={()=>setMapType('roadmap')}>지도</span>
          <span ref={skyviewControl} id="btnSkyview" className="btn" onClick={()=> setMapType('skyview')}>스카이뷰</span>
        </div>
        <div className="custom_zoomcontrol radius_border"> 
          <span onClick={zoomIn}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" /></span>  
          <span onClick={zoomOut}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" /></span>
        </div>
      </Map>
    </div>
  )
}
const Map = styled.div`
  width: 100%;
  height: 200px; 
`
export default Location