import styled from 'styled-components';
import KakaoBtn from 'components/Button/KakaoBtn';
import GoogleBtn from 'components/Button/GoogleBtn';
import LoginModal from '.';

function Index({ onHandleLoginOpen }) {
  return (
    <LoginModal onHandleOpenState={onHandleLoginOpen}>
      <LoginFormContainer className="flex-center-C">
        <KakaoBtn />
        <GoogleBtn />
      </LoginFormContainer>
    </LoginModal>
  );
}

const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Index;
