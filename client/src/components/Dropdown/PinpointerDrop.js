import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { PinContext } from 'components/Main/MypageMain';
import { genPinIconType } from 'utils/genPinIconType';
import SmilePuppy from 'assets/img/icons/smilePuppy.png';

function Index() {
  const { pinpointers, setPinpointers } = useContext(PinContext);

  const onHandlePinClick = (pin) => {
    setPinpointers({ ...pinpointers, clickedPin: pin });
  };

  return (
    <>
      <DropdownUl
        className="pinpointer-dropdownUl"
        pinLength={pinpointers.pins.length}
      >
        {pinpointers.pins.map((pin) => (
          <DropdownLi
            className="flex-center-R"
            onClick={() => onHandlePinClick(pin)}
          >
            <img src={genPinIconType(pin.iconType)} alt="icon type" />
            <div className="location">{pin.location}</div>
          </DropdownLi>
        ))}
      </DropdownUl>
    </>
  );
}

const DropdownUl = styled.ul`
  position: absolute;
  top: 46px;
  right: 0px;
  width: 20rem;
  max-height: 30rem;
  overflow-y: auto;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 1.5rem;
  transition: all 0.3s linear;
  display: block;
  opacity: 1;
  display: none;
  opacity: 0;
  border: 1px solid gray;

  & img[alt~='icon'] {
    width: 20%;
  }

  & li:not(:first-of-type) {
    margin-top: 1rem;
  }

  //@ if no pin
  ${({ pinLength }) =>
    !pinLength &&
    css`
      height: 20rem;
      &:after {
        content: '';
        background: url(${SmilePuppy}) no-repeat center/80%;
        background-color: ${({ theme }) => theme.colors.mainColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

const DropdownLi = styled.li`
  background-color: white;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.thirdColor};
  padding: 1rem;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.thirdColor};

    & > .location {
      color: white;
    }
  }

  & > .location {
    margin-left: 2rem;
    flex: 1;
    text-align: center;
    font-size: 1.6rem;

    @media screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }
`;
export default Index;
