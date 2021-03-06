import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const ModalContainer = styled.div`
  width: 282px;
  height: 187px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  z-index: 100;
  padding: 1rem;
  position: fixed;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: 0.05px solid ${({ theme }) => theme.colors.pointColor2};
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
  background-color: ${({ theme }) => theme.colors.pointColor1};
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
  background-color: ${({ theme }) => theme.colors.thirdColor};
  border-radius: 8px;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Jua';
`;
