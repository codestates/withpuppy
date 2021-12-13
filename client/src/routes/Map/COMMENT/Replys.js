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