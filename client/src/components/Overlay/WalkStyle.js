import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 556px;
  height: 383px;
  background-color: #ffffff;
  border-radius: 12px;
  z-index: 1000;
  padding: 3rem;
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
  margin: 30px;
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
  height: 64px;
  width: 200px;
  background-color: #e87676;
  border: none;
  vertical-align: top;
  font-size: 30px;
  font-family: 'Jua';
  line-height: auto;
  color: #ffffff;
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
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: #3d5a5b;
  color: white;
`;

export const MiniModalContainer = styled.div`
  width: 556px;
  height: 200px;
  background-color: #febeb0;
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
  color: #ffffff;
  cursor: pointer;
  float: right;
`;

export const Modal = styled.button`
  width: 80px;
  height: 80px;
  background-color: #e97676;
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
