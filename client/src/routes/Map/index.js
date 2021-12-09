import React, { useRef, useEffect, useState } from 'react';
import MapHeader from 'components/Header/Homeheader';
import { useDispatch } from 'react-redux';
import { addMap } from 'redux/Slices/Map';
import Example from './Example';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import UserInfo from './UserInfo';
import CustomOverlayMap from 'components/CustomOverlay/CustomOverlayMap';
import Walk from 'components/Overlay/Walk';
import styled from 'styled-components';
import { Btn } from './MapStyle';
import { BaseIcon } from 'components/Icon';
import Icon2 from '../../assets/img/icons/Icon.png';
const SEOUL_COORDINATION = [37.529789809685475, 126.96470201104091];

function Index() {
  const mapRef = useRef(null);
  const { kakao } = window;
  const dispatch = useDispatch();

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(...SEOUL_COORDINATION),
      level: 7,
    };

    try {
      const map = new kakao.maps.Map(mapRef.current, mapOptions);
      dispatch(addMap(map));
    } catch (err) {
      console.log(err);
    }

    return () => {};
  }, []);

  const [isWalkOpen, setIsWalkOpen] = useState(false);
  const openWalkHandler = () => {
    setIsWalkOpen(!isWalkOpen);
    console.log('isWalkOpen', isWalkOpen);
  };

  return (
    <>
      <MapHeader className="MapHeader" />
      <MapMain>
        <MapContainer ref={mapRef} className="MapContainer">
          {/* <CustomOverlayMap></CustomOverlayMap> */}
          <Btn onClick={openWalkHandler} isWalkOpen={isWalkOpen}>
            산책등록
          </Btn>
          {isWalkOpen === true ? <Walk></Walk> : null}
        </MapContainer>
        <UserInfoContainer className="UserInfoContainer">
          <UserCard className="UserCard">
            <UserInfo
              puppyName="강아지 이름 테스트 입니다"
              userName="사람 이름 테스트 입니다"
              puppyAge={12}
              introduceTo="소개글 테스트 입니다"
            ></UserInfo>
            <Comment className="flex-center-C Reply">hello</Comment>
          </UserCard>
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
  & .UserInfoContainer {
    flex: 0.35;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 102rem;
    & .MapContainer {
      min-height: 20rem;
      max-height: 35rem;
    }
    & .UserInfoContainer {
      flex: 1;
    }
  }
  @media screen and (min-width: 1400px) {
    & .MapContainer {
      flex: 0.75;
    }
    & .UserInfoContainer {
      flex: 0.25;
    }
  }
`;

const MapContainer = styled.div`
  min-height: 50rem;
`;

const UserInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondColor};
`;

//# When pin clicked
const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 50rem;
  padding: 1.3rem;
  background-color: white;

  & .UserInfo {
    background-color: white;
    flex: 0.2;
  }

  & .Reply {
    background-color: red;
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

const Comment = () => {
  return (
    <>
      <CommentComponent>
        <Chat>
          <Frame2>
            <Text1>댓글 작성자</Text1>
            <Text2>댓글 내용</Text2>
            <Liked>
              <Rectangle11>
                <Text3>DELETE</Text3>
              </Rectangle11>
            </Liked>
            <Liked>
              <Rectangle11>
                <Text3>EDIT</Text3>
              </Rectangle11>
            </Liked>
          </Frame2>
        </Chat>
        <Chat>
          <Frame3>
            <Text1>댓글 작성자</Text1>
            <Text2>댓글 내용</Text2>
            <Liked>
              <Rectangle11>
                <Text3>DELETE</Text3>
              </Rectangle11>
            </Liked>
          </Frame3>
        </Chat>
        <CommtentSend>
          <Input>
            <InputCon>
              <input
                // onChage={this.getValue}
                type="text"
                placeholder="Comment here !"
                maxLength="100"
              />
            </InputCon>
          </Input>
          <BaseIcon>
            <img src={Icon2} alt="" />
          </BaseIcon>
        </CommtentSend>
      </CommentComponent>
    </>
  );
};
const Text1 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 15px;
  font-family: Jua;
  line-height: auto;
  color: #7b7b7b;
`;
const Text2 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 15px;
  font-family: Jua;
  line-height: auto;
  color: #000000;
`;
const Liked = styled.div`
  height: 20px;
  width: 58px;
  float: right;
  margin: 0.5rem;
`;
const Rectangle11 = styled.div`
  border-radius: 8px;
  height: 20px;
  width: 58px;
  background-color: #e87676;
`;
const Text3 = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 12px;
  align-items: center;
  line-height: 20px;
  color: #ffffff;
`;

const CommentComponent = styled.div`
  position: relative;
  display: flex;
  bottom: 0px;
  padding: 15px;
  border-radius: 20px;
  height: 639px;
  width: 558px;
  display: flex;
  flex-direction: column;
  background-color: #f7f1ed;
`;
const Chat = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: flex-start;
  align-items: flex-end; */
  gap: 13px;
`;
const Frame2 = styled.div`
  float: right;
  margin-bottom: 2rem;
  flex-direction: column;
  border-radius: 15px;
  height: 80px;
  width: 400px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  background-color: white;
`;
const Frame3 = styled.div`
  float: right;
  margin-bottom: 2rem;
  flex-direction: column;
  border-radius: 15px;
  height: 80px;
  width: 400px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  background-color: #febeb0;
`;

const CommtentSend = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 12px;
  gap: 12px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0px;
  margin-bottom: 1.5rem;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px 8px;
  gap: 10px;
  background-color: #ffffff;
  width: 455px;
`;
const InputCon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 2rem;
  background-color: white;
  padding: 0.5rem 2rem;
  align-items: center;
  cursor: pointer;
  position: relative;

  & span.inputLabel {
    font-size: 1.3rem;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.thirdColor};
    flex: 0.25;
    text-transform: uppercase;
  }

  & input {
    border: none;
    width: 70%;
    height: 50%;
    background-color: transparent;
    font-size: 2rem;
    outline: none;
    flex: 0.75;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pointColor2};
  }
`;
//! 비로그인으로 댓글 작성 시 에러메세지 보내기 (Message : 로그인이 필요한 서비스입니다)

//? 댓글 수정 기능 할것인지?

//? 댓글 삭제 가능 할것인지?

//# Before pin clicked
// const DogCard = styled.section``;

export default Index;
