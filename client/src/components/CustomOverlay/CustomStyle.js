import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 282px;
  height: 187px;
  background-color: #ffffff;
  border-radius: 12px;
  z-index: 100;
  padding: 1rem;
  position: fixed;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${({ theme }) => theme.animation.showDown} 0.5s forwards;
  outline-offset: -7px; */
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: 0.05px solid #2f365f;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const ImgSpan = styled.span`
  margin-right: 5px;
`;

export const SectionSpan = styled.span`
  margin-right: 5px;
`;

export const Info = styled.div`
  font-family: 'Jua';
  font-size: 14px;
  margin-bottom: 0.5em;
  margin-right: 2em;
`;

export const ReqBtn = styled.button`
  width: 250px;
  height: 44px;
  background-color: #3d5a5b;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Jua';
`;

export const ContactBtn = styled.button`
  width: 250px;
  height: 44px;
  background-color: #e97676;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Jua';
`;
