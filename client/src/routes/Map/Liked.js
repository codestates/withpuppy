import lightStar from '../../assets/img/icons/lightStar.png';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

export default function Index() {
  const [isLiked, setIsLiked] = useState(true);
  const [counter, setCounter] = useState(0);

  const Toggle = () => {
    setIsLiked((curIsLiked) => !curIsLiked);
    if (isLiked === true) {
      setCounter((curCounter) => curCounter + 1);
    } else {
      setCounter((curCounter) => curCounter - 1);
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
