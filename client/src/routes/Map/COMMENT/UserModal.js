//! 댓글 클릭시 생성되는 사용자 모달창입니다.

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserModalStyle } from './UserModalStyle';

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
function UserModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container className="flex-center-C">
        <Button onClick={openModal}>클릭했을때임</Button>
        <UserModalStyle showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

export default UserModal;