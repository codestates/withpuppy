import React from 'react';
import { BaseHeader } from './index';
import styled from 'styled-components';
import TestLogo from 'assets/img/logo/testLogo.png';
import { Link } from 'react-router-dom';
import { BaseBtn } from 'components/Button';

function Index() {
  return (
    <BaseHeader>
      <HeaderNav>
        <Link to="/" className="Logo">
          <img src={TestLogo} alt="" className="header-logoImg" />
          <span className="header-logoTitle">Metaverse</span>
        </Link>

        <div className="AuthContainer">
          <BaseBtn>로그인</BaseBtn>
          <BaseBtn>회원가입</BaseBtn>
        </div>
      </HeaderNav>
    </BaseHeader>
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
      width: 5rem;
    }

    .header-logoTitle {
      font-size: 1.5rem;
      margin-left: 1rem;
      font-weight: 500;
    }
  }

  & .AuthContainer {
    & :first-of-type {
      margin-right: 1rem;
    }
  }
`;

export default Index;
