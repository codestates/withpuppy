// import { colors } from '@react-spring/shared';
// import { Container } from 'components/Footer/FooterStyle';
import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UserModal from './UserModal';

class Comment extends Component {
  render() {


    const { id, name, content } = this.props;

    return (
      <>
  
      <Container>
        {/* onClick={alert('유저 모달창기능 구현')} */}
        <Chat1>
          <Frame>
            <Name>{name}</Name>
            <Content>{content}</Content>
     
          </Frame>
        </Chat1>
        {/* <Chat2>
        <Frame1 >
          <Name1>
            {name}
        </Name1>
        <Content>
            {content}
           </Content> 
        </Frame1>
        </Chat2> */}       <button onClick={UserModal}>hi</button>
      </Container>
      </>
    );
  }
}
const Chat1 = styled.div`
  display: flex;
  text-align: end;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  float: right;
  gap: 13px;
  margin-bottom: 2rem;
`;
const Chat2 = styled.div`
  display: flex;
  /* text-align: center; */
  flex-direction: column;
  justify-content: flex-start;
  float: left;
  gap: 13px;
  margin-bottom: 2rem;
`;

const Name1 = styled.div`
  font-size: 1.5rem;
  color: white;
`;
const Frame1 = styled.div`
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
  background-color: #febeb0;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.thirdColor};
  }
`;
const Name = styled.div`
  font-size: 1.5rem;
  color: #3c3c3c;
`;

const Content = styled.div`
  font-size: 2.5rem;
`;

const Container = styled.div`
  flex: 1;
`;

const Frame = styled.div`
  /* float: right; */
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
  background-color: white;
  /* margin: 1rem; */
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.thirdColor};
  }
`;

// const Chat = styled.div`
//   background-color: white;
//   display: flex;
//   text-align: center;
//   float: right;
//   position: relative;
//   display: flex;
//   bottom: 0px;
//   padding: 10px;
//   border-radius: 20px;
//   /* width: 100%; */
//   display: flex;
//   flex-direction: column;

//   /* &:hover {
//     color: ${({ theme }) => theme.colors.mainColor};
//     background-color: ${({ theme }) => theme.colors.thirdColor}; */
//   /* } */
// `;
export default Comment;
