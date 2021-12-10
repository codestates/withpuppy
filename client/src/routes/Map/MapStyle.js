import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

export const Btn = styled.button`
  width: 80px;
  height: 80px;
  background-color: #e97676;
  border-radius: 50%;
  z-index: 800;
  position: absolute;
  @media screen and (max-width: 900px) {
    top: 50%;
    bottom: 30%;
  }
  /* top: 80%; */
  bottom: 3rem;
  left: 5%;
  box-shadow: 0 3rem 2rem -1rem hsl(100 40% 10% / 90%);
  border: none;
  cursor: pointer;
  color: white;
`;

export const SearchBar = styled.input`
  width: 200px;
  height: 40px;
  background-color: white;
  color: black;
  border-radius: 4px;
  border: none;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #e97676;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
`;

export const SearchContainer = styled.form`
  width: 270px;
  height: 70px;
  background-color: #febeb0;
  margin: 10px;
  border-radius: 12px;
  z-index: 1000;
  padding: 1rem;
  position: absolute;
  @media screen and (max-width: 900px) {
    top: 50%;
    left: 60%;
  }
  @media screen and (max-width: 500px) {
    top: 50%;
    left: 40%;
  }
  top: 80%;
  left: 55%;
  outline-offset: -7px;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: none;
`;

export const MapMain = styled.main`
  display: flex;
  height: calc(100vh - 7rem);

  & .MapContainer {
    flex: 0.65;
  }

  & .UserInfoContainer {
    flex: 0.35;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 102rem;

    & .MapContainer {
      min-height: 20rem;
      max-height: 35rem;
    }

    & .UserInfoContainer {
      flex: 1;
    }
  }

  @media screen and (min-width: 1400px) {
    & .MapContainer {
      flex: 0.75;
    }

    & .UserInfoContainer {
      flex: 0.25;
    }
  }
`;

export const MapContainer = styled.div`
  min-height: 50rem;
  position: relative;
`;

export const UserInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondColor};
`;

//# When pin clicked
export const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 50rem;
  padding: 1.3rem;
  background-color: white;

  & .UserInfo {
    background-color: white;
    flex: 0.3;
  }

  & .Reply {
    background-color: red;
    flex: 0.7;
  }
`;

export const UserInfo = styled.div``;

export const Reply = styled.div``;

//# Before pin clicked
export const DogCard = styled.section``;
