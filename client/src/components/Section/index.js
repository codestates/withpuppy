import styled from 'styled-components';

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

  @media screen and (max-width: 919px) {
    min-width: 60rem;

    &.puppyCard {
      margin-top: 5rem;

      & > span {
        left: 0;
      }
    }
  }

  @media screen and (max-width: 700px) {
    min-width: 45rem;
  }
`;

export const CardInputForm = styled.form`
  width: 80%;
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  text-align: center;
  margin-top: 3rem;
`;
export const CardInputContainer = styled.div`
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  line-height: 1;
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;

  & .title {
    flex: 0.4;
  }

  & .value {
    flex: 0.6;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.pointColor1};

    &.email,
    &.phone {
      font-size: 2rem;
    }
  }

  & span {
    display: inline-block;
    width: 6rem;

    @media screen and (min-width: 1400px) {
      width: 8rem;
      font-size: 3rem;
    }
  }
`;

export const CardButtonContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  & > .cancel-btn {
    background-color: white;
    color: ${({ theme }) => theme.colors.pointColor1};
    border: 1px solid ${({ theme }) => theme.colors.pointColor1};

    &:hover {
    }
  }

  & > *:last-child {
    margin-left: 1rem;
  }
`;
