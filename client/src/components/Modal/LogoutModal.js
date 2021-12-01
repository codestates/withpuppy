import LogoutModal from '.';
import sadPuppyIcon from 'assets/img/icons/sadPuppy.png';
import styled from 'styled-components';
import { BaseBtn } from 'components/Button';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/Async/signOut';
import { useNavigate } from 'react-router-dom';

function Index({ onHandleLogoutOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleLogOutConfirm = async () => {
    // Todo
    // 리덕스 유저정보 삭제
    // 토큰 삭제
    // 서버에서 카카오 토큰 만료작업
    try {
      await dispatch(signOut()).unwrap();
      onHandleLogoutOpen();
      navigate('/');
    } catch (rejected) {
      console.log(rejected);
    }
  };

  return (
    <LogoutModal onHandleOpenState={onHandleLogoutOpen}>
      <LogoutContainer className="flex-center-C">
        <img src={sadPuppyIcon} alt="" />
        <span>정말 갈거냐멍?</span>
        <LogoutBtnContainer>
          <LogoutBtn onClick={onHandleLogOutConfirm}>예</LogoutBtn>
          <LogoutBtn onClick={onHandleLogoutOpen}>아니오</LogoutBtn>
        </LogoutBtnContainer>
      </LogoutContainer>
    </LogoutModal>
  );
}

const LogoutContainer = styled.div`
  height: 50%;

  & img {
    height: 100%;
    margin-bottom: 2rem;
  }

  & span {
    color: white;
    margin-bottom: 2rem;
  }
`;
const LogoutBtnContainer = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-evenly;
`;
const LogoutBtn = styled(BaseBtn)`
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 1.5rem;
  width: 10rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.secondColor};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export default Index;
