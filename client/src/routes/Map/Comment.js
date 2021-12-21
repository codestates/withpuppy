// import { colors } from '@react-spring/shared';
// import { Container } from 'components/Footer/FooterStyle';
import { Modal } from './UserModal';
import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Liked from './Liked';
import je from 'assets/img/profile/예수님.png';
import { selectUser } from 'redux/store';

function Comment(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const { id, name, content, message } = props;
  const { loginState, userData } = useSelector(selectUser);
  const writer = message.UserId === userData.id;

  return (
    <Container key={id}>
      <ModalBtn
        onClick={openModalHandler}
        className={!writer ? 'incomming' : ''}
      >
        {
          isOpen === false ? (
            <Content>{message.text}</Content>
          ) : (
            <Content>{message.text}</Content>
          )
          // '닫아주세요'
        }
      </ModalBtn>
      {isOpen === true ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className="close-btn">
              &times;
            </span>
            <div className="desc">
              <ModalContent>
                <UserImg>
                  <img src={je} alt="" width="80px" />
                </UserImg>
                <Liked></Liked>

                <UserCard className="flex-center-C">
                  <Text>닉네임</Text>
                  <Text>강아지 이름</Text>
                  <Text>강아지 소개글</Text>
                </UserCard>
              </ModalContent>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
      {/*     
        <Chat1>
          <Frame >
            <Name>{name}</Name>   
            <Content >{content}</Content>
     
          </Frame>
        </Chat1> */}
      {/* <Chat2>
        <Frame1 >
          <Name1>
            {name}
        </Name1>
        <Content>
            {content}
           </Content> 
        </Frame1>
        </Chat2> */}
      {/* <button onClick={UserModal}>hi</button> */}
    </Container>
  );
}
const Chating = styled.div`
  color: red;
`;
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

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   height: 100vh;
`;

export const ModalBtn = styled.button`
  background-color: #febeb0;

  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  display: flex;
  text-align: end;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  float: right;
  gap: 13px;
  margin-bottom: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.thirdColor};
  }

  &.incomming {
    color: ${({ theme }) => theme.colors.pointColor1};
    border: 1px solid gray;
    background-color: ${({ theme }) => theme.colors.mainColor};
    float: left;

    &:hover {
      color: ${({ theme }) => theme.colors.mainColor};
      background-color: ${({ theme }) => theme.colors.thirdColor};
    }
  }
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  border-radius: 10px;
  background-color: #febeb0;
  width: 300px;
  height: 500px;
  padding: 1.5rem;
  > span.close-btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  /* button {
    border-radius: 10px;
    background: #FEBEB0;
    color: #fff;
    border: none;
  } */
`;
const Text = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 2rem;
`;
const UserCard = styled.div`
  margin-top: 3rem;

  border-radius: 12px;
  height: 250px;
  width: 240px;
  background-color: white;
`;
const UserImg = styled.div``;

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
