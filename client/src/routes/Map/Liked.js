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
      <LikeBtn onClick={Toggle}>⭐️ {counter}</LikeBtn>
    </StarBox>
  );
}

const StarBox = styled.div`
  position: relative;
  margin-top: 18px;
`;

const LikeBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  font-size: 15px;
  position: absolute;
  width: 75px;
  height: 30px;
  margin: 0;
  top: 50%;
  left: 53%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 4px 20px 0 rgba(0, 0, 0, 0.2);
`;
