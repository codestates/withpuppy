// //! 댓글 클릭시 생성되는 사용자 모달창입니다.

// import React, { useRef, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { UserModalStyle } from './UserModalStyle';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
  
// `;

// const Button = styled.button`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

// function UserModal() {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(prev => !prev);
//   };

//   return (
//     <>
//       <Container className="flex-center-C">
//         <Button onClick={openModal}>클릭했을때임</Button>
//         <UserModalStyle showModal={showModal} setShowModal={setShowModal} />
//       </Container>
//     </>
//   );
// }

// export default UserModal;


import { useState } from 'react';
import styled from 'styled-components';
import Liked from "./Liked";
import je from 'assets/img/profile/예수님.png';



export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
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
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 500px;

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
`
const UserCard = styled.div`
  margin-top: 3rem;

  border-radius: 12px;
  height: 280px;
  width: 240px;
  background-color: white;
`
const UserImg = styled.div`
`
export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? 'Open Modal' : 'Opened!'}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className='close-btn'>&times;</span>
            <div className='desc'>
            <ModalContent>
         
            <UserImg>
              <img src={je} alt='' width="80px"/>
            </UserImg>
            <Liked></Liked>
           
            <UserCard className="flex-center-C" >
            <Text>닉네임</Text>
            <Text>강아지 이름</Text>
            <Text>강아지 소개글</Text>
           
            </UserCard>
            {/* <Text>로그인 후 이용해주세요!</Text>
            <Button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                  }} >login
                      </Button> */}
          </ModalContent></div>
          </ModalView>
        </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};