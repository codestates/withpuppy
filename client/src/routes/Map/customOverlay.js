import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import profile from '../../components/CustomOverlay/profile.png';
import { createGlobalStyle } from 'styled-components';
import CustomOverlayMap from '../../components/CustomOverlay/CustomOverlayMap';

export const ModalContainer = styled.div`
  width: 290px;
  height: 187px;
  background-color: white;
  border-radius: 12px;
  z-index: 200000;
  padding: 1rem;
  position: fixed;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: 0.05px solid #2f365f;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const ImgSpan = styled.span`
  margin-right: 5px;
`;

export const SectionSpan = styled.span`
  margin-right: 5px;
`;

export const Info = styled.div`
  font-family: 'Jua';
  font-size: 14px;
  margin-bottom: 0.5em;
  margin-right: 2em;
`;

export const ReqBtn = styled.button`
  width: 250px;
  height: 44px;
  background-color: #3d5a5b;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Jua';
`;

export const ContactBtn = styled.button`
  width: 250px;
  height: 44px;
  background-color: #e97676;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Jua';
`;

export const CloseIcon = styled.button`
  height: 24px;
  width: 24px;
  background-color: #ffa8a8;
  color: white;
  border-radius: 50%;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  float: right;
`;

export const Img = styled.img`
  width: 79px;
  height: 112px;
  border-radius: 4px;
`;

export const customOverlay = (data, pin) =>
  ReactDOMServer.renderToStaticMarkup(
    <>
      <ModalContainer key={data.lat}>
        <CloseIcon className="close-button">X</CloseIcon>
        <ModalContent>
          <ImgSpan>
            <Img src={pin.puppyProfile} alt="puppy-profile" />
          </ImgSpan>
          <SectionSpan>
            <Info>{pin.nickname}</Info>
            <Info>{pin.puppyName}</Info>
            <Info>{pin.breed}</Info>
            <Info>{pin.introduction}</Info>
          </SectionSpan>
          <SectionSpan>
            <Info>{pin.age}</Info>
            <Info>{pin.gender}</Info>
          </SectionSpan>
        </ModalContent>
        {/* <ReqBtn className="flex-center-C">
        로그인해서 상대의 연락처를 보세요!
      </ReqBtn> */}
        <ContactBtn className="flex-center-C contact-btn">
          사용자 카카오톡/연락처로 연락하기
        </ContactBtn>
      </ModalContainer>
    </>,
  );
