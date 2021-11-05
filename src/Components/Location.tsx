import React, { useEffect , useRef } from 'react'
import styled from 'styled-components'
import Header from './Header'
import google from 'assets/google-map.png'
import kakao from 'assets/kakao-map.png'
import naver from 'assets/naver-map.png'

declare global {
  interface Window {
    kakao: any;
  }
}

const Location = () => {
  const mapRef = useRef(null)
  useEffect(()=> {
    const mapContainer = mapRef.current
    const position = new window.kakao.maps.LatLng(36.3480402821751,127.383551474267)
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
      <SearchMaps>
        <SearchMap>
          <a href="https://goo.gl/maps/6rVzcjkmGvZQd91X7">
            <img src={google} alt="google-map" width="100%"/>
          </a>
        </SearchMap>
        <SearchMap>
          <a href="http://naver.me/xmrtjmxg">
            <img src={naver} alt="naver-map" width="100%"/>
          </a>
        </SearchMap>
        <SearchMap>
          <a href="https://map.kakao.com/?itemId=1518140833">
            <img src={kakao} alt="kakao-map" width="100%"/>
          </a>
        </SearchMap>
      </SearchMaps>
      <Content>
        <Title>더오페라웨딩홀</Title>
        대전 서구 둔산남로 50<br/>
        (탄방동 587번지)<br/>
        042.363.5000
      </Content>
    </div>
  )
}

const Map = styled.div`
  width: 90%;
  height: 50vw;
  margin: auto;
`
const SearchMaps = styled.div`
  display: flex;
  margin-top: 1em;
  width: 100%;
  justify-content:center;
  gap: 10%;
`
const SearchMap = styled.div`
  width: 60px;
`

const Content = styled.p`
  font-size: 16px;
  font-family: sans-serif, 'Gothic';
`
const Title = styled.span`
  font-size: 18px;
  margin: 0;
  padding: 0;
  font-weight: bold;
`
export default Location