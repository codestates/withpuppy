import React from 'react';
import styled from 'styled-components';
import { BaseMain } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/store';
import MypageHeader from 'components/Header/Homeheader';

function Index() {
  const dispatch = useDispatch();
  const {
    socialData: {
      data: { email, nickname, thumbImg },
    },
  } = useSelector(selectUser);

  return (
    <MypageMain>
      <h1>{nickname} 님 어서오세요~!</h1>
      <p>email : {email}</p>
      <img src={thumbImg} alt="" />
    </MypageMain>
  );
}

const MypageMain = styled(BaseMain)`
  & img {
    width: 30%;
    border: 2px solid ${({ theme }) => theme.colors.indigo};
    outline: 3px solid ${({ theme }) => theme.colors.mainColor};
    outline-offset: 5px;
    border-radius: 12px;
  }
`;

export default Index;
