//! 비로그인으로 댓글 입력 또는 전송시 생성되는 모달창입니다.

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalStyle } from './ModalStyle';

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

export default IModal;