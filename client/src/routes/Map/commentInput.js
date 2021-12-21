import React, { useCallback, useState, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import Icon2 from '../../assets/img/icons/Icon.png';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/store';
import axios from 'redux/Async/axios';

const CommentInput = ({ onInsert, pinpointerId, allPins, setAllPins }) => {
  const inputRef = useRef(null);
  const { loginState } = useSelector(selectUser);
  const [submitState, setSubmitState] = useState({
    state: 'ready',
    reason: '',
  });
  console.log(submitState, inputRef.current);

  const [value, setValue] = useState({
    name: '',
    content: '',
  });

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        name: value.name,
        content: e.target.value,
      });
    },
    [value],
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      onInsert(value.name, value.content);

      if (!loginState) {
        setValue({
          name: '',
          content: '',
        });

        inputRef.current.blur();

        setSubmitState({
          state: 'reject',
          reason: '로그인을 해주세요!',
        });

        setTimeout(() => {
          setSubmitState({
            state: 'ready',
            reason: '',
          });

          inputRef.current.focus();
        }, 1200);

        return;
      }

      if (loginState && pinpointerId) {
        const {
          data: { createdAt, text, writerId },
        } = await axios.post('/mypage/pinppinter/message', {
          pinpointerId,
          text: value.content,
        });

        const updatePinIdx = allPins.data.findIndex(
          (pin) => pin.pinpointerId === pinpointerId,
        );

        const copiedData = [...allPins.data];
        copiedData[updatePinIdx].messages.push({
          PinpointerId: pinpointerId,
          UserId: writerId,
          createdAt,
          text,
        });

        setAllPins({
          ...allPins,
          data: copiedData,
        });
      }

      setValue({
        name: '',
        content: '',
      });
    },
    [onInsert, value],
  );

  return (
    <>
      <CommentInsert className="CommentInsert" onSubmit={onSubmit}>
        <InputTexts submitState={submitState.state}>
          <input
            ref={inputRef}
            placeholder={submitState.reason || '댓글로 소통해요!'}
            value={value.content}
            onChange={onChangeContent}
          ></input>
        </InputTexts>
        <Button type="submit">
          <img src={Icon2} alt={''} />
        </Button>
      </CommentInsert>
    </>
  );
};
const Button = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
`;

const CommentInsert = styled.form`
  border-radius: 20px;
  display: flex;
  flex-direction: row;

  /* justify-content: flex-start; */
  align-items: center;
  padding: 10px 12px;
  /* margin : 2rem;
    margin-bottom: 3rem; */
  background-color: white;

  bottom: 0px;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 1.5rem;

  & input {
    border: none;
    width: 100%;
    height: 50%;
    background-color: transparent;
    font-size: 2rem;
    outline: none;
    flex: 0.75;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pointColor2};
  }
`;

const InputTexts = styled.div`
  & input::-webkit-input-placeholder {
    color: ${({ submitState, theme }) =>
      submitState === 'reject' ? theme.colors.thirdColor : ''};
  }
  background: white;
  width: 100%;
`;
export default CommentInput;
