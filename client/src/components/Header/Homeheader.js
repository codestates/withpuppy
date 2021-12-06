import React, { useState } from 'react';
import { BaseHeader } from './index';
import styled from 'styled-components';
import PuppyLogo from 'assets/img/logo/puppyLogo.png';
import { Link } from 'react-router-dom';
import { BaseBtn } from 'components/Button';
import LoginSignUpModal from 'components/Modal/LoginSignUpModal';
import LogoutModal from 'components/Modal/LogoutModal';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/store';

function Index() {
  const [loginSingUpOpen, setLoginOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const onHandleLoginOpen = () => setLoginOpen((prev) => !prev);
  const onHandleLogoutOpen = () => setLogoutOpen((prev) => !prev);

  const propForLoginSignUpModal = {
    loginSingUpOpen,
    onHandleLoginOpen,
  };

  const propForLogoutModal = {
    logoutOpen,
    onHandleLogoutOpen,
  };

  const { loginState } = useSelector(selectUser);

  return (
    <>
      {loginSingUpOpen && <LoginSignUpModal {...propForLoginSignUpModal} />}
      {logoutOpen && <LogoutModal {...propForLogoutModal} />}
      <BaseHeader>
        <HeaderNav>
          <Link to="/" className="Logo">
            <img src={PuppyLogo} alt="" className="header-logoImg" />
          </Link>

          <div className="AuthContainer">
            {loginState ? (
              <>
                <BaseBtn onClick={onHandleLogoutOpen}>로그아웃</BaseBtn>
                <BaseBtn
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/mypage';
                  }}
                >
                  마이페이지
                </BaseBtn>
              </>
            ) : (
              <BaseBtn onClick={onHandleLoginOpen}>로그인</BaseBtn>
            )}
          </div>
        </HeaderNav>
      </BaseHeader>
    </>
  );
}

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .Logo {
    display: flex;
    align-items: center;

    .header-logoImg {
      width: 15rem;
    }

    .header-logoTitle {
      font-size: 1.5rem;
      margin-left: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  & .AuthContainer {
    & > *:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

export default Index;
