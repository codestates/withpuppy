//! 댓글창 입니다

import React, { useRef, useEffect, useState, Component } from 'react';
import styled from 'styled-components';
import { BaseIcon } from 'components/Icon';
import Icon2 from "../../../assets/img/icons/Icon.png";
import UserModal from './UserModal';
import { ModalStyle } from './ModalStyle';
import axios from 'redux/Async/axios';
import {useSelector } from 'react-redux';
import {  ReplyTextContent, ReplyBtn, CreateReplyBox} from "./ReplysStyled";

//? 모달 주석부분
// function IModal() {
//   const user = useSelector(state => state.user)
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(prev => !prev);
//   };

//   return (
//     <>
//       <Container className="flex-center-C">
//         <Button onClick={openModal}>로그인</Button>
//         <ModalStyle showModal={showModal} setShowModal={setShowModal} />
//       </Container>
//     </>
//   );
// }
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

function  WriteReply({ isLogin, userInfo, selectedContent, replyListHandler }) {
    const [replyValue, setReplyValue] = useState("");
    
    const inputReplyHandler = (e) => {
      setReplyValue(e.target.value);
    };
  
    const requestReply = (e) => {
      if (!replyValue) {
        return alert("댓글을 입력하세요.");
      }
      if (!isLogin) {
        return alert("로그인 후 등록 가능합니다.");
      }
      const payload = {
        postId: selectedContent.id,
        userId: userInfo.id,
        comments: replyValue,
      };

      axios
      .post(`${process.env.REACT_APP_API_URL}/createComment`, payload, {withCredentials: true})
      .then((res) => {
        // 등록한 댓글이 추가됨
        // console.log("댓글 등록 요청 응답", res.data);
        if (res.data.message === "create!") {
          replyListHandler(res.data.data);
          setReplyValue("");
          e.target.previousSibling.value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
    };

    return (
      <CreateReplyBox>
        <ReplyTextContent
          onChange={(e) => inputReplyHandler(e)}
          placeholder="Message here !"
        />
        <ReplyBtn onClick={(e) => requestReply(e)}>
          <img src={Icon2} alt=""/>
        </ReplyBtn>
      </CreateReplyBox>
    );
  }

// 스크롤바 영역 구하기
  const Summary = styled.div`
  overflow: scroll;

  `
  const EditBtn = styled.div`
    height: 20px;
    width: 58px;  
    background-color: #e97676;
    float: right;
    margin: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    color: white;

  `

  const Text1 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 15px;
    font-family: Jua;
    line-height: auto;
    color: #7b7b7b;
  `
  const Text2 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 15px;

    line-height: auto;
    color: #000000;
    
  `

  const Text3 = styled.div`
    text-align: center;
    vertical-align: top;
    font-size: 12px;
    align-items: center;
    line-height: 20px;
    color: #ffffff;
  `
  
  const CommentComponent = styled.div`
    position:relative;
    display: flex;
    height: 60%;
    padding: 15px;
    border-radius: 20px;

    flex-direction:column;
    background-color: #F7F1ED;
  `
  const Chat1 = styled.div`
    display: flex;
    text-align: center;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-end;
    float: right;
    gap: 13px;
  `
    const Chat2 = styled.div`
    display: flex;
    text-align: center;
    flex-direction:column;
    justify-content: flex-start;
    float: left;
    gap: 13px;
  `
  const Frame2 = styled.div`
    float: right;
    margin-bottom: 2rem;
    flex-direction:column;
    border-radius: 15px;
    height: 80px;
    width: 400px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    background-color: white;

    &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    background-color: #FEBEB0;
  }

  &:active {
    transform: translateY(2px);
  }
  `
  const Frame3 = styled.div`
    float: right;
    margin-bottom: 2rem;
    flex-direction:column;
    border-radius: 15px;
    height: 80px;
    width: 400px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    background-color: #FEBEB0;

    &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    background-color: white;
  }

  &:active {
    transform: translateY(2px);
  }
  `
  
  const CommtentSend = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 12px;
  
    background-color: white;
    position: absolute;
    bottom: 0px;
    margin-bottom: 1.5rem;
    width: 95%;
  `
  const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 6px 8px;
    gap: 10px;
    width: 100%;
  `
  const InputCon = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 2rem;
    padding: 0.5rem 2rem;
    align-items: center;
    cursor: pointer;
    position: relative;
  
    & span.inputLabel {
      font-size: 1.3rem;
      margin-right: 2rem;
      color: ${({ theme }) => theme.colors.thirdColor};
      flex: 0.25;
      text-transform: uppercase;
    }
  
    & input {
      border: none;
      width: 70%;
      height:50%;
      background-color: transparent;
      font-size: 2rem;
      outline: none;
      flex: 0.75;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.pointColor2};
    }
  `;

  export default WriteReply;