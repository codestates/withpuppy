import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const ModalContainer = styled.div`
  width: 556px;
  height: 340px;
  @media screen and (max-width: 500px) {
    width: 480px;
    height: 300px;
    padding: 1rem;
  }
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  z-index: 1000;
  padding: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${({ theme }) => theme.animation.showDown} 0.5s forwards;
  outline-offset: -7px;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: 0.05px solid #e87676;
`;

export const InputContainer = styled.div`
  margin: 10px;
  padding: 2px;
`;

export const Info = styled.div`
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 6px;
  margin-top: 5px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const CloseIcon = styled.button`
  height: 24px;
  width: 24px;
  background-color: #ffa8a8;
  color: white;
  border-radius: 50%;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  float: right;
`;

export const EnrollBtn = styled.button`
  border-radius: 8px;
  @media screen and (max-width: 500px) {
    width: 130px;
    height: 40px;
    font-size: 16px;
  }
  height: 45px;
  width: 180px;
  background-color: #e87676;
  border: none;
  vertical-align: top;
  font-size: 24px;
  font-family: 'Jua';
  line-height: auto;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  background-color: #f6f6f6;
  border-radius: 5px;
  margin-left: 10px;
`;

export const SelectBtn = styled.button`
  border-radius: 8px;
  height: 40px;
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
    height: 34px;
    font-size: 14px;
    margin: 10px 10px 5px 10px;
  }
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.pointColor1};
  color: white;
  margin: 10px 10px 6px 10px;
`;

export const MiniModalContainer = styled.div`
  width: 556px;
  height: 200px;
  @media screen and (max-width: 500px) {
    width: 400px;
    height: 180px;
    font-size: 16px;
    margin: 5px;
  }
  background-color: ${({ theme }) => theme.colors.secondColor};
  margin: 10px;
  border-radius: 12px;
  z-index: 1000;
  padding: 3rem;
  position: fixed;
  outline-offset: -7px;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: none;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const MiniBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const SaveBtn = styled.button`
  border-radius: 8px;
  height: 30px;
  width: 100px;
  background-color: #e87676;
  border: none;
  vertical-align: top;
  font-size: 16px;
  font-family: 'Jua';
  line-height: auto;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  float: right;
`;

export const Modal = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.thirdColor};
  border-radius: 50%;
  z-index: 800;
  position: fixed;
  top: 80%;
  bottom: 20%;
  left: 5%;
  box-shadow: 0 3rem 2rem -1rem hsl(100 40% 10% / 90%);
  border: none;
  cursor: pointer;
`;

export const Address = styled.div`
  font-size: 16px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Icon = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ExtendOptions = styled.select`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grayTwo};
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;
