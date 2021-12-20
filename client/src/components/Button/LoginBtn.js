import React from 'react';
import styled, { css } from 'styled-components';
import { BaseBtn } from './';

export const LoginBtn = styled(BaseBtn)`
  width: 50%;
  min-height: 5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  border-radius: 7px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.pointColor2};
  }

  &:active {
    transform: translateY(2px);
  }

  position: relative;
  transition: all 0.3s ease;
  ${({ status }) =>
    status === 'reject' &&
    css`
      color: ${({ theme }) => theme.colors.mainColor};
      background-color: ${({ theme }) => theme.colors.thirdColor};
      &:hover {
        color: ${({ theme }) => theme.colors.mainColor};
        background-color: ${({ theme }) => theme.colors.thirdColor};
      }
    `}

  &:before,
  &:after {
    position: absolute;
    content: '';
    opacity: ${({ status }) => (status === 'reject' ? 100 : 0)};
    visibility: ${({ status }) => (status === 'reject' ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    z-index: 20000;
    top: -10rem;
    right: -10rem;
    ${({ status }) =>
      status === 'reject' &&
      css`
        @keyframes shake {
          0% {
            transform: rotate(2deg);
          }
          50% {
            transform: rotate(-3deg);
          }
          70% {
            transform: rotate(3deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }

        animation: shake 0.5s ease-in forwards;
      `}
  }

  &:after {
    content: '${({ status }) => status === 'reject' && '칸을 다 채워주세요!'}';
    background-color: ${({ theme }) => theme.colors.thirdColor};
    width: 15rem;
    height: 8rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.mainColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    @media screen and (max-width: 950px) {
      width: 10.5rem;
      height: 5.5rem;
      top: -7rem;
      right: -7rem;
      font-size: 1.3rem;
      padding: 0.3rem;
    }
  }
`;
