import 보브 from '../../assets/img/icons/보브.png';
import 유나 from '../../assets/img/icons/유나.png';
import 이코 from '../../assets/img/icons/이코.png';
import 카덴 from '../../assets/img/icons/카덴.png';
import React, { useRef, useEffect, useState } from 'react';
import MapHeader from 'components/Header/Homeheader';
import { useDispatch, useSelector } from 'react-redux';
import { addMap } from 'redux/Slices/Map';
import Example from './Example';
import { faBlackTie, faUber } from '@fortawesome/free-brands-svg-icons';
import UserInfo from './UserInfo';
import Walk from 'components/Overlay/Walk';
import styled from 'styled-components';
import { SearchBar, SearchBtn, SearchContainer } from './MapStyle';
import WriteReply from './COMMENT/WriteReply';
import { BaseIcon } from 'components/Icon';
import petchingPuppyImg from '../../assets/img/profile/petchingPuppyImg.png';
import Icon2 from '../../assets/img/icons/Icon.png';
import IModal from './COMMENT/Modal';
import UserModal from './COMMENT/UserModal';
import Replys from './COMMENT/Reply';
import { Row } from 'components/Footer/FooterStyle';
// import makeMarker from './utils';
import { customOverlay } from './customOverlay';
import { useNavigate } from 'react-router-dom';
import axios from 'redux/Async/axios';

const SEOUL_COORDINATION = [37.529789809685475, 126.96470201104091];

function Index() {
  const mapRef = useRef(null);
  const { kakao } = window;
  const dispatch = useDispatch();

  const [CommentLists, setCommentLists] = useState([]);
  const [isWalkOpen, setIsWalkOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');
  const [isMarkerSelected, setIsMarkerSelected] = useState(false);
  const [coordinate, setCoordinate] = useState([]);
  const [latlng, setLatlng] = useState([]);
  const [pinpointers, setPinpointers] = useState([]);

  const navigate = useNavigate();

  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment));
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPlace(inputText);
    console.log(inputText);

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(inputText, placesSearchCB);

    setInputText('');
  };

  const mapClickHandler = (e) => {
    if (isWalkOpen === false) {
      setIsWalkOpen(true);
    }
    if (e.target.tagName === 'IMG') {
      setIsWalkOpen(false);
    }
  };

  const getPins = async () => {
    try {
      const response = await axios.get('/map/allpins');
      setPinpointers(response.data.pinpointers);
      //console.log(pinpointers);
    } catch (err) {
      console.log('error!!!!!');
    }
  };

  async function placesSearchCB(pin, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      let bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < pin.length; i++) {
        bounds.extend(new kakao.maps.LatLng(pin[i].y, pin[i].x));
      }

      window.map.setBounds(bounds);
      // const newMap = map.setBounds(bounds);

      try {
        // const result = {
        //   level: '',
        //   x: '',
        //   y: '',
        // };
        console.log(window.map.getLevel());
        const response = await axios.get('/map/allpins');
        for (let i = 0; i < response.data.pinpointers.length; i++) {
          displayMarkerandOverlay(response.data.pinpointers[i], pin);
        }
      } catch (err) {
        console.log('error!!!!!');
      }
    }
  }

  /*
  1. 서버에서 필터링
  2. 이미지 바꿔끼워보고
  3. 깃북 수정.
  */

  const imageCandidates = [보브, 이코, 유나, 카덴];
  const imageSrc =
      imageCandidates[Math.floor(Math.random() * imageCandidates.length)],
    imageSize = new kakao.maps.Size(40, 40),
    imageOption = { offset: new kakao.maps.Point(22, 69) };
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption,
  );

  function displayMarkerandOverlay(data, pin) {
    console.log(pin);
    //const position = new kakao.maps.LatLng(data.y, data.x);
    const position = new kakao.maps.LatLng(data.lat, data.lng);
    // const position2 = new kakao.maps.LatLng(pin[0].y, pin[0].x);

    console.log(data, position);

    let marker = new kakao.maps.Marker({
      map: window.map,
      position: position,
      image: markerImage,
      clickable: true,
    });

    let wrapper = document.createElement('div');
    wrapper.innerHTML = customOverlay;

    let closeBtn = wrapper.firstChild.querySelector('.close-button');

    closeBtn.addEventListener('click', function () {
      console.log('hello world');
      setIsMarkerSelected(false);
      overlay.setMap(null);
    });

    let overlay = new kakao.maps.CustomOverlay({
      content: wrapper.firstChild,
      map: window.map,
      position: marker.getPosition(),
      xAnchor: 1,
      yAnchor: 1,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      setIsMarkerSelected(true);
      overlay.setMap(window.map);
    });

    //장소가 바뀔 떄마다, 좌표들이 무한대로 늘어남을 방지하기 위해 비워준다.
    // setCoordinate([]);
    // setPinpointers([]);

    marker.setMap(window.map);
    //오버레이들이 화면에 한방에 안뜨게 아예 마커만 보이게 설정
    overlay.setMap(null);
  }

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(...SEOUL_COORDINATION),
      level: 7,
    };

    //장소 검색시, 이를 좌표화.
    try {
      const map = new kakao.maps.Map(mapRef.current, mapOptions);

      // dispatch(addMap(map));
      window.map = map;
      // setMap(map);

      // 클릭한 위도, 경도 정보를 가져와서 스테이트 변화.
      kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        let latlng = mouseEvent.latLng;
        let array = [latlng.getLat(), latlng.getLng()];
        setLatlng(array);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <MapHeader className="MapHeader" />
      <MapMain>
        {isWalkOpen === true ? (
          <Walk
            setIsWalkOpen={setIsWalkOpen}
            latlng={latlng}
            pinpointers={pinpointers}
          ></Walk>
        ) : null}
        <MapContainer
          ref={mapRef}
          searchPlace={place}
          className="MapContainer"
          onClick={mapClickHandler}
        >
          <SearchContainer
            className="inputForm"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <SearchBar
              placeholder="장소 검색"
              onChange={onChange}
              value={inputText}
            ></SearchBar>
            <SearchBtn type="submit">검색</SearchBtn>
          </SearchContainer>
        </MapContainer>
        <UserInfoContainer>
          <UserContainer>
            {isMarkerSelected ? (
              <UserCard>
                <UserInfo
                  puppyName="강아지 이름 테스트 입니다"
                  userName="사람 이름 테스트 입니다"
                  puppyAge={7}
                  introduceTo="소개글 테스트 입니다"
                ></UserInfo>
                <Replys></Replys>
              </UserCard>
            ) : (
              <div
                className="titleContent"
                style={{ textAlign: 'center', paddingTop: '80%' }}
              >
                <Title>핀을 클릭해서 친구들을 만나보세요</Title>
                <MainImg src={petchingPuppyImg}></MainImg>
              </div>
            )}
          </UserContainer>
        </UserInfoContainer>
      </MapMain>
    </>
  );
}

const MapMain = styled.main`
  display: flex;
  height: calc(100vh - 7rem);
  & .MapContainer {
    flex: 0.65;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 102rem;
    & .MapContainer {
      min-height: 20rem;
      max-height: 35rem;
    }
  }
  @media screen and (min-width: 1400px) {
    & .MapContainer {
      flex: 0.75;
    }
  }
`;

const Title = styled.div``;

const MapContainer = styled.div`
  min-height: 50rem;
  position: relative;
`;

const UserInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondColor};
`;

const UserContainer = styled.div`
  /* @media screen and (max-width: px) {
  } */
  align-items: center;
  width: 30%;
  height: 100%;
  background: #febeb0;
  position: fixed;
  top: 10;
  right: 0;
  width: 35%;
  @media screen and (max-width: 850px) {
    display: none;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;

const ContentTitle = styled.div`
  text-align: center;
  padding-top: 75%;
  padding-bottom: 25%;
`;

const MainText = styled.div`
  font-size: 2.3rem;
  color: white;
`;

const MainImg = styled.img`
  width: 70%;
  height: 70%;
`;

const UserCard = styled.section`
  display: flex;
  flex-direction: column;

  position: fixed;
  height: 100%;
  min-height: 50rem;
  background-color: white;

  & .UserInfo {
    background-color: white;
    flex: 0.2;
  }

  & .Reply {
    flex: 0.8;
  }

  @media screen and (min-width: 567px) and (max-width: 900px) {
    & .UserInfo {
      flex: 0.3;
    }

    & .Reply {
      flex: 0.7;
    }
  }
`;

export default Index;
