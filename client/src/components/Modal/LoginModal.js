import styled from 'styled-components';
import KakaoBtn from 'components/Button/KakaoBtn';
import GoogleBtn from 'components/Button/GoogleBtn';
import LoginModal from '.';
import twoDog from 'assets/img/icons/twoDog.png';
import bigDog from 'assets/img/icons/bigDog.png';
import InputBar from 'components/Input';
import { BaseBtn } from 'components/Button';

function Index({ onHandleLoginOpen }) {
  return (
    <LoginModalWrapper>
      <LoginModal className="loginModal" onHandleOpenState={onHandleLoginOpen}>
        <LoginFormContainer className="flex-center-C">
          <span className="loginTitle">로그인</span>
          <InputBar type="text" label="ID" />
          <InputBar type="password" label="PASSWORD" />
          <LoginBtn>로그인</LoginBtn>
          <KakaoBtn />
          <GoogleBtn />
        </LoginFormContainer>

        <img className="dogImg twoDogImg" src={twoDog} alt="" />
        <img className="dogImg bigDogImg" src={bigDog} alt="" />
      </LoginModal>
    </LoginModalWrapper>
  );
}

const LoginModalWrapper = styled.div`
  & > .loginModal {
    width: 45%;
    height: 77%;
    min-height: 50rem;
  }

  & img.dogImg {
    position: absolute;
    z-index: -1;

    &.twoDogImg {
      bottom: 1rem;
      left: 2rem;
    }

    &.bigDogImg {
      bottom: 1rem;
      right: 2rem;
    }
  }
`;

const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;

  & .loginTitle {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const LoginBtn = styled(BaseBtn)`
  width: 30rem;
  height: 5rem;
  margin: 3rem;
  border-radius: 7px;
`;

export default Index;
