import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PuppyLogo from "../assets/puppyLogo.png";

import { HeaderButton } from "./HeaderButton";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <>
    <BaseHeader>
      <HeaderNav>
        <img
          width="130"
          height="40"
          src={PuppyLogo}
          alt=""
          className="header-logoImg"
        />
        <div className="AuthContainer">
          {user ? (
            <>
              <HeaderButton size="small" onClick={onLogin} label="로그아웃" />
              <HeaderButton
                primary
                size="small"
                onClick={onCreateAccount}
                label="마이페이지"
              />
            </>
          ) : (
            <HeaderButton size="small" onClick={onLogout} label="로그인" />
          )}
        </div>
      </HeaderNav>
    </BaseHeader>
  </>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export const BaseHeader = styled.header`
  width: 97%;
  height: 7%;
  min-height: 3rem;
  padding: 1rem 2rem;
  transition: opacity 0.5s, height 0.5s;
  z-index: 100;
  background-color: #f7f1ed;
  font-family: "Jua";
  display: flex;

  &.MapHeader {
    position: relative;
    background-color: white;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.25);
  }

  font-size: 1.5rem;
`;

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
      color: #f7f1ed;
    }
  }

  & .AuthContainer {
    & > *:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;
