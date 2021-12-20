import lightStar from '../../assets/img/icons/lightStar.png';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'redux/Async/axios';

export default function Index({ userName }) {
  const [isLiked, setIsLiked] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(async () => {
    if (userName) {
      const likeInfo = await axios.get('/like/?username=' + userName);

      console.log('!@#', likeInfo);

      setIsLiked(likeInfo.data.isLiked);
      setCounter(likeInfo.data.likesCount);
    }
  }, [userName]);

  const Toggle = () => {
    setIsLiked((curIsLiked) => !curIsLiked);
    if (isLiked === true) {
      const likeCancelReq = async () => {
        await axios.post('/like/cancel', { username: userName });
      };
      likeCancelReq();

      setCounter((curCounter) => curCounter - 1);
    } else {
      const likeReq = async () => {
        await axios.post('/like/', { username: userName });
      };
      likeReq();

      setCounter((curCounter) => curCounter + 1);
    }
  };

  return (
    <StarBox>
      <LikeBtn className="flex-center-R" onClick={Toggle}>
        ⭐️ {counter}
      </LikeBtn>
    </StarBox>
  );
}

const StarBox = styled.div`
  position: relative;
  margin-top: 15px;
`;

const LikeBtn = styled.button`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  text-align: center;
  margin: 0;
  background-color: white;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  cursor: pointer;
  left: 50%;
  border-radius: 20px;
  box-sizing: border-box;
  border: none;
  transform: translate(-50%, -50%);
  box-shadow: 2px 8px 25px 0 rgba(0, 0, 0, 0.2);
`;
