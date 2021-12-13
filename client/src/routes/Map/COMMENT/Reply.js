import React, { useState, useEffect } from "react";
import WriteReply from "./WriteReply";
import axios from "axios";
import styled from "styled-components";
import { CreateReplyBox } from "./ReplysStyled";

import {
  ReplysUl,
  ReplyLi,
  ReplysSection,
  ReplyDeleteBtn,
} from "./ReplysStyled"

// import deleteBtn from "../image/x-mark.png";
// axios.defaults.withCredentials = true;

function Replys({
  isLogin,
  userInfo,
  selectedContent,
  replyList,
  replyListHandler,
}) {
  const [selectedReplyId, setselectedReplyId] = useState("");

  useEffect(() => {
    if (selectedReplyId) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/deletecomment`, {
          postId: selectedContent.id,
          userId: userInfo.id,
          id: selectedReplyId,
        }, {withCredentials: true})
        .then((res) => {
          // console.log("댓글 삭제 요청 응답", res.data);
          if (res.data.message === "delete!") {
            replyListHandler(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedReplyId]);

  const deleteReply = (e) => {
    e.preventDefault();
    // console.log(e.target.parentElement.getAttribute("id"));
    setselectedReplyId(e.target.parentElement.getAttribute("id"));
  };

  return (
    <>
      <ReplysSection>
        <A11yHidden>댓글</A11yHidden>
        <ReplysUl>
          {replyList
            ? replyList.map((el) => {
                return (
                  <ReplyLi key={el.id} id={el.id}>
                    <p>&#64;{el.user.nickname}</p>
                    <p style={{ marginTop: "-10px" }}>{el.contents}</p>
                    {isLogin && el.user.nickname === userInfo.nickname ? (
                      <ReplyDeleteBtn
                        // src={deleteBtn}
                        // onClick={(e) => deleteReply(e)}
                      />
                    ) : null}
                  </ReplyLi>
                );
              })
            : null}
        </ReplysUl>      
        <WriteReply
        isLogin={isLogin}
        userInfo={userInfo}
        selectedContent={selectedContent}
        replyListHandler={replyListHandler}
      />

      </ReplysSection>

    </>
  );
}

export const A11yHidden = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  -webkit-clip-path: polygon(0 0, 0 0, 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
`;


export const Btn = styled.button`
  font-size: 16px;
  border: 0;
  background-color: transparent;
  margin-left: 25px;
  width: 30px;
  height: 30px;
`;

export const Legend = styled.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  -webkit-clip-path: polygon(0 0, 0 0, 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
`
export default Replys;

//! styled 수정

// 스크롤바 영역 구하기
  const Summary = styled.div`
  overflow: scroll;
  min-height: 62vh;
  /* border: 1px solid black; */
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
    bottom: 0px;
    padding: 15px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-direction:column;
    background-color: #f7f1ed;
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
  `
  
  const CommtentSend = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 12px;
  
    background-color: #ffffff;
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
    background-color: #ffffff;
    width: 100%;
  `
  const InputCon = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 2rem;
    background-color: white;
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

