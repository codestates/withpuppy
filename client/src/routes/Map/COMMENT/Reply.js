//! 댓글창 입니다

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BaseIcon } from 'components/Icon';
import Icon2 from "../../../assets/img/icons/Icon.png";
import UserModal from './UserModal';
import { ModalStyle } from './ModalStyle';


//! 상태보내기로 모달 보내기 : prop


function IModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container className="flex-center-C">
        <Button onClick={openModal}>로그인</Button>
        <ModalStyle showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const UserComment = () => {
    return (
      <>
      <CommentComponent>
        <Summary>
        <Chat1  >
          <Frame2 onClick={IModal}>
          
          <Text1>댓글 작성자</Text1>
          {/* <Text1>{commentUser}</Text1> */}
          <Text2>hihi</Text2>
          {/* <Text2>{comment}</Text2> */}
          {/* <EditBtn >
                 <Text3>DELETE</Text3>
              </EditBtn>
              <EditBtn  >
                 <Text3>EDIT</Text3>
              </EditBtn> */}
          </Frame2>
        </Chat1 >
        <Chat2>
          <Frame3>
          <Text1>댓글 작성자</Text1>
          <Text2>댓글 내용</Text2>

              <EditBtn>
                 <Text3>DELETE</Text3>
              </EditBtn>
              <EditBtn>
                 <Text3>EDIT</Text3>
              </EditBtn>
   
 
          </Frame3>
        </Chat2 >
        
        <Chat2>
          <Frame3>
          <Text1>댓글 작성자</Text1>
          <Text2>댓글 내용</Text2>

              <EditBtn>
                 <Text3>DELETE</Text3>
              </EditBtn>
              <EditBtn>
                 <Text3>EDIT</Text3>
              </EditBtn>
   
 
          </Frame3>
        </Chat2 >
        </Summary>
        <CommtentSend>
          <Input >
          <InputCon>    
          <input 
          // onChage={this.getValue}
          type="text"
          placeholder="Comment here !"
          maxLength="100"
          />
          </InputCon>
          </Input>
          <BaseIcon
          onClick={IModal}
          type="submit">
            <img src={Icon2} alt="" 
            />
          </BaseIcon>
        </CommtentSend>
      </CommentComponent>
      </>
    )
  }
//! 댓글 수정 기능 
// const onEdit = event => {
//   event.preventDefault();
//   axios
//         .patch()
//         .then()
//         .catch(() => {
//           dispatch({ type: '' });
//           dispatch({
//             type: '',
//             payload: '서버 요청에 실패했습니다.',
//           });
//         });
//     } else if (!result) {
//       dispatch({ type: '' });
//       dispatch({
//         type: '',
//         payload: '로그인이 필요한 서비스입니다!',
//       });
    

//! 댓글 삭제 기능
// const onDelete = event => {

// }




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

  export default UserComment;