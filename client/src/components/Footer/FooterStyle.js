import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Box = styled.div`
  padding: 40px 40px;
  background: ${({ theme }) => theme.colors.pointColor1};
  position: relative;
  bottom: 0;
  width: 100%;
  height: 300px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  justify-content: space-between;
  grid-gap: 20px;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
  margin-right: 40px;
  text-decoration: none;
`;

export const BottomLogo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export const Github = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FooterImage = styled.img`
  width: 50px;
  height: 60px;
  margin-bottom: 20px;
  cursor: pointer;
`;
