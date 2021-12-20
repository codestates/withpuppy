import React, { useState } from 'react';
import { BaseHeader } from './index';
import styled, { css } from 'styled-components';
import PuppyLogo from 'assets/img/logo/puppyLogo.png';
import { Link } from 'react-router-dom';
import { BaseBtn } from 'components/Button';
import LoginSignUpModal from 'components/Modal/LoginSignUpModal';
import LogoutModal from 'components/Modal/LogoutModal';
import { selectUser } from 'redux/store';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Index({ className }) {
  const navigate = useNavigate();
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

  const { loginState, updatedMessages } = useSelector(selectUser);

  return (
    <>
      {loginSingUpOpen && <LoginSignUpModal {...propForLoginSignUpModal} />}
      {logoutOpen && <LogoutModal {...propForLogoutModal} />}
      <BaseHeader className={className}>
        <HeaderNav>
          <Link to="/" className="Logo">
            <img src={PuppyLogo} alt="" className="header-logoImg" />
          </Link>

          <div className="AuthContainer">
            {loginState ? (
              <>
                <UpdateAlarmContainer
                  updatedMessages={updatedMessages}
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  <FontAwesomeIcon icon={faBell} />
                </UpdateAlarmContainer>
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
  width: 100%;
  height: 100%;
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

const UpdateAlarmContainer = styled.div`
  display: inline-block;
  margin-right: 3rem;
  transform: translatey(6px);
  position: relative;
  cursor: pointer;

  & svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.pointColor2};
  }

  &:before {
    ${({ updatedMessages }) =>
      updatedMessages.length &&
      css`
        content: '${({ updatedMessages }) => updatedMessages.length}';
      `}
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: -15px;
    left: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.thirdColor};
    color: white;
    margin-left: -5px;
    font-size: 1.3rem;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
`;

export default Index;
