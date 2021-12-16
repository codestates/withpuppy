import styled, { css } from 'styled-components/macro';

export const BaseSection = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
`;

export const CardSection = styled.section`
  width: 45%;
  min-width: 40rem;
  height: 50rem;
  min-height: 55rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 4px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 0 2rem 2rem 2rem;
  position: relative;

  & > span {
    position: absolute;
    top: -8%;
    color: white;
    font-size: 2.5rem;
    &.puppyCardTitle {
      right: 0;
    }
  }

  font-size: 2rem;
`;

export const CardInputForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardInputContainer = styled.div`
  display: flex;
  height: 5rem;
  border-bottom: 1px solid gray;
  position: relative;

  & input {
    border: none;
    height: 4rem;
    margin: auto 0;
    outline: 2px solid ${({ theme }) => theme.colors.secondColor};
    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  ${({ validPhone }) =>
    validPhone &&
    validPhone.status === 'reject' &&
    validPhone.reason === '전화번호 형식이 아닙니다' &&
    css`
      & input {
        color: ${({ theme }) => theme.colors.thirdColor};
      }

      &:before {
        content: '${validPhone.reason}';
        position: absolute;
        font-size: 1.5rem;
        top: 5.5rem;
        right: 0;
        color: ${({ theme }) => theme.colors.thirdColor};
      }
    `};

  & .title {
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 680px) {
      font-size: 2rem;
    }
  }

  & .value {
    flex: 0.6;
    color: ${({ theme }) => theme.colors.pointColor1};
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1400px) {
      font-size: 3rem;

      &.puppy-value {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 1000px) {
      font-size: 2rem;

      &.puppy-value {
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 680px) {
      font-size: 1.5rem;

      &.puppy-value {
        font-size: 1.2rem;
      }
    }
  }

  & .card-input {
    flex: 0.6;
    width: 80%;
    border: none;
    text-align: center;

    &.gender {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;

      & .image-wrapper {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.mainColor};
        padding: 0.7rem 1rem;
        border-radius: 50%;
        border: 1px solid lightgray;
        & img {
          width: 2.5rem;
        }

        &.active {
          @keyframes active {
            0% {
              background-color: #fdffcd;
            }
            25% {
              background-color: #ffebbb;
            }
            50% {
              background-color: #fdffcd;
            }
            75% {
              background-color: #ffebbb;
            }
            100% {
              background-color: #fdffcd;
            }
          }

          animation: active 0.5s forwards;
        }
      }

      & .image-wrapper:nth-child(2) {
        margin-left: 3rem;
      }
    }

    @media screen and (min-width: 1400px) {
      font-size: 3rem;

      &.puppy-introduction {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 1000px) {
      font-size: 2rem;

      &.puppy-introduction {
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 680px) {
      font-size: 1.5rem;

      &.puppy-introduction {
        font-size: 1.2rem;
      }
    }
  }
`;

export const CardButtonContainer = styled.div`
  display: flex;

  & > .cancel-btn {
    background-color: white;
    color: ${({ theme }) => theme.colors.pointColor1};
    outline: 1px solid ${({ theme }) => theme.colors.pointColor1};
  }

  & > *:last-child {
    margin-left: 1rem;
  }

  @media screen and (max-width: 520px) {
    & button {
      width: 10rem;
      font-size: 1.5rem;
    }
  }
`;
