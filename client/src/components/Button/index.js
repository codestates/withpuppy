import styled from 'styled-components';

// 기초 버튼 형태 설정
// 스타일적인 케이스 확장이면 (ex, 가입관련 버튼/구매하기 버튼 등등...) => index.js파일에
// 특정 기능들이 추가되야 한다면 (ex, useState을 써야하는 버튼, 계속 달라지는 자식들 등) => 특정 js 파일에
export const BaseBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.pointColor1};
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  padding: 0.7rem;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.subColor};
    color: ${({ theme }) => theme.colors.mainColor};
  }

  & > a {
    color: white;
    margin: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const BaseOauthBtn = styled(BaseBtn)`
  width: 5rem;
  height: 5rem;
  border-radius: 25%;
  overflow: hidden;
  padding: 0;
  background-color: transparent;

  & img {
    width: 100%;
    height: 100%;
  }
`;
