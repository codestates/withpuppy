import 보브 from '../../assets/img/icons/보브.png';
import 유나 from '../../assets/img/icons/유나.png';
import 이코 from '../../assets/img/icons/이코.png';
import 카덴 from '../../assets/img/icons/카덴.png';
import React, { useRef, useEffect, useState } from 'react';
import MapHeader from 'components/Header/Homeheader';
import { useDispatch } from 'react-redux';
import { addMap } from 'redux/Slices/Map';
import Example from './Example';
import { faBlackTie, faUber } from '@fortawesome/free-brands-svg-icons';
import UserInfo from './UserInfo';
import Walk from 'components/Overlay/Walk';
import styled from 'styled-components';
import { Btn, SearchBar, SearchBtn, SearchContainer } from './MapStyle';
import UserComment from './COMMENT/Reply';
import { BaseIcon } from 'components/Icon';
import petchingPuppyImg from '../../assets/img/profile/petchingPuppyImg.png';
import Icon2 from '../../assets/img/icons/Icon.png';
import IModal from './COMMENT/Modal';
import UserModal from './COMMENT/UserModal';
import { Row } from 'components/Footer/FooterStyle';

const SEOUL_COORDINATION = [37.529789809685475, 126.96470201104091];



function Index() {
  const mapRef = useRef(null);
  const { kakao } = window;
  const dispatch = useDispatch();

  const [isWalkOpen, setIsWalkOpen] = useState(false);
  const openWalkHandler = () => {
    setIsWalkOpen(!isWalkOpen);
  };
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
    console.log(inputText);
  };

  const [isMarkerSelected, setIsMarkerSelected] = useState(false);

  const [coordinate, setCoordinate] = useState([]);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(...SEOUL_COORDINATION),
      level: 7,
    };

    //장소 검색시, 이를 좌표화.
    try {
      const map = new kakao.maps.Map(mapRef.current, mapOptions);

      dispatch(addMap(map));

      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(place, placesSearchCB);

      // 주소-좌표 변환 객체를 생성
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(place, placesSearchCB);

      let iwContent = document.createElement('div');
      iwContent.style.width = '282px';
      iwContent.style.height = '187px';
      iwContent.style.padding = '1rem';

      let iwContainer = document.createElement('div');
      iwContainer.style.display = 'flex';

      let imgSpan = document.createElement('span');
      imgSpan.style.marginRight = '5px';
      let sectionSpan1 = document.createElement('span');
      sectionSpan1.style.marginRight = '5px';
      let sectionSpan2 = document.createElement('span');
      sectionSpan2.style.marginRight = '5px';

      let profileImg = document.createElement('img');
      profileImg.src =
        'https://t1.daumcdn.net/cfile/tistory/21221F4258E793521D';
      profileImg.style.width = '79px';
      profileImg.style.height = '112px';

      let ownerName = document.createElement('div');
      ownerName.textContent = `보호자 이름`;
      ownerName.style.fontFamily = 'Jua';
      ownerName.style.fontSize = '14px';
      ownerName.style.marginBottom = '0.5em';
      ownerName.style.marginRight = '2em';

      let puppyName = document.createElement('div');
      puppyName.textContent = `강아지 이름`;
      puppyName.style.fontFamily = 'Jua';
      puppyName.style.fontSize = '14px';
      puppyName.style.marginBottom = '0.5em';
      puppyName.style.marginRight = '2em';

      let puppyInfo = document.createElement('div');
      puppyInfo.textContent = `소개글`;
      puppyInfo.style.fontFamily = 'Jua';
      puppyInfo.style.fontSize = '14px';
      puppyInfo.style.marginBottom = '0.5em';
      puppyInfo.style.marginRight = '2em';

      let breed = document.createElement('div');
      breed.textContent = `견종`;
      breed.style.fontFamily = 'Jua';
      breed.style.fontSize = '14px';
      breed.style.marginBottom = '0.5em';
      breed.style.marginRight = '2em';

      let age = document.createElement('div');
      age.textContent = `나이`;
      age.style.fontFamily = 'Jua';
      age.style.fontSize = '14px';
      age.style.marginBottom = '0.5em';
      age.style.marginRight = '2em';

      let gender = document.createElement('div');
      gender.textContent = `성별`;
      gender.style.fontFamily = 'Jua';
      gender.style.fontSize = '14px';
      gender.style.marginBottom = '0.5em';
      gender.style.marginRight = '2em';

      let btn = document.createElement('button');
      btn.textContent = `상대에게 연락하기`;
      btn.style.backgroundColor = '#e97676';
      btn.style.width = '250px';
      btn.style.height = '44px';
      btn.style.borderRadius = '8px';
      btn.style.border = 'none';
      btn.style.fontSize = '14px';
      btn.style.color = 'white';
      btn.style.fontFamily = 'Jua';
      btn.style.cursor = 'pointer';
      const event_handler = function () {
        console.log(btn.textContent);
      };
      btn.addEventListener('click', event_handler);

      let fakebtn = document.createElement('button');
      fakebtn.textContent = `로그인해서 상대의 정보를 확인해보세요!`;
      fakebtn.style.backgroundColor = '#e97676';
      fakebtn.style.width = '250px';
      fakebtn.style.height = '44px';
      fakebtn.style.borderRadius = '8px';
      fakebtn.style.border = 'none';
      fakebtn.style.fontSize = '14px';
      fakebtn.style.color = 'white';
      fakebtn.style.fontFamily = 'Jua';

      iwContent.append(iwContainer, btn);
      iwContainer.append(imgSpan, sectionSpan1, sectionSpan2);
      imgSpan.append(profileImg);
      sectionSpan1.append(ownerName, puppyName, breed, puppyInfo);
      sectionSpan2.append(age, gender);

      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: true,
      });

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
          // setCoordinate([]);

          for (let i = 0; i < data.length; i++) {
            displayMarkerandOverlay(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            coordinate.push([data[i].x, data[i].y]);
          }

          map.setBounds(bounds);
          console.log(coordinate);
        }
      }

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

      function displayMarkerandOverlay(place) {
        const position = new kakao.maps.LatLng(place.y, place.x);
        let marker = new kakao.maps.Marker({
          map: map,
          position: position,
          image: markerImage,
          clickable: true,
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          setIsMarkerSelected(true);
          infowindow.open(map, marker);
        });
        marker.setMap(map);

      }
    } catch (err) {
      console.log(err);
    }

    return () => { };
  }, [place]);

  return (
    <>
      <MapHeader className="MapHeader" />
      <MapMain>
        <MapContainer ref={mapRef} searchPlace={place} className="MapContainer">
          <SearchContainer className="inputForm" onSubmit={handleSubmit}>
            <SearchBar
              placeholder="장소 검색"
              onChange={onChange}
              value={inputText}
            ></SearchBar>
            <SearchBtn type="submit">검색</SearchBtn>
          </SearchContainer>
          <Btn onClick={openWalkHandler}>산책등록</Btn>
          {isWalkOpen === true ? (
            <Walk setIsWalkOpen={setIsWalkOpen}></Walk>
          ) : null}
          {/* <SearchBar type="text" placeholder="장소 검색"></SearchBar> */}
        </MapContainer>
        <UserContainer>
          {isMarkerSelected ? (
            <UserCard>
              <UserInfo
                puppyName="강아지 이름 테스트 입니다"
                userName="사람 이름 테스트 입니다"
                puppyAge={7}
                introduceTo="소개글 테스트 입니다"
              ></UserInfo>
              <UserComment className="flex-center-C Reply"></UserComment>
            </UserCard>
          ) : (
            <ContentTitle>
              <MainText>핀을 클릭해서 친구들을 만나보세요
              </MainText>
              <MainImg src={petchingPuppyImg} />
            </ContentTitle>
          )}
        </UserContainer>
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
const MapContainer = styled.div`
  min-height: 50rem;
  position: relative;
`;
const UserContainer = styled.div`
  z-index: 4;
  position: absolute;
  padding: 0;
  margin: 0;
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
`

const MainText = styled.div`
  font-size: 2.3rem;
  color:white;
`;

const MainImg = styled.img`
width: 70%;
height: 70%;
`;

const UserCard = styled.section`
  display: flex
  flex-direction: row;
  position: absolute;
  padding-left: 3%;
  height: calc(100vh - 7rem);
  width: 100%;
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
