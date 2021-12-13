import React, { useState, useEffect } from 'react';
import BaseCard from './BaseCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/store';
import {
  CardInputForm,
  CardInputContainer,
  CardButtonContainer,
} from 'components/Section';
import { BaseBtn } from 'components/Button';
import Tumbnail from 'components/Icon/Tumbnail';
import useForm from 'hooks/useMypageForm';
import { Spinner } from 'components/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getPinpointerInfo } from 'redux/Async/getPinpointerInfo';
import { logout } from 'redux/Slices/User';

function UserCard() {
  const { userData } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pinpointers, setPinpointers] = useState([]);
  console.log(pinpointers);

  // 2. get pinpointers
  const getPins = async () => {
    try {
      const {
        data: { pinpointers },
      } = await dispatch(getPinpointerInfo(navigate)).unwrap();

      setPinpointers(pinpointers);
    } catch (err) {
      navigate('/');
      dispatch(logout());
    }
  };

  useEffect(() => getPins(), []);

  const {
    values,
    infoChange,
    submitState,
    onHandleChange,
    onHandleEdit,
    onHandleSubmit,
  } = useForm({
    nickname: '',
    phone: '',
  });

  return (
    <BaseCard>
      <span>내 정보</span>

      <PinButton className="flex-center-R">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </PinButton>

      <UserInfoContainer className="flex-center-C">
        <Tumbnail imgUrl={userData.thumbImg} type="user" />

        <CardInputForm onSubmit={(e) => e.preventDefault()}>
          <CardInputContainer>
            <div className="title">닉네임</div>
            {infoChange ? (
              <input
                type="text"
                className="card-input"
                value={values.nickname}
                name="nickname"
                maxLength="7"
                onChange={(e) => onHandleChange(e.target.name, e.target.value)}
              />
            ) : (
              <div className="value">{userData.nickname}</div>
            )}
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">이메일</div>
            <div className="value email">{userData.email}</div>
          </CardInputContainer>

          <CardInputContainer validPhone={submitState}>
            <div className="title">연락처</div>
            {infoChange ? (
              <input
                type="text"
                className="card-input phoneInput"
                value={values.phone}
                name="phone"
                maxLength="13"
                placeholder="000-000-0000"
                onChange={(e) => onHandleChange(e.target.name, e.target.value)}
              />
            ) : (
              <div className="value phone">
                {userData.phone || '010-000-0000'}
              </div>
            )}
          </CardInputContainer>
        </CardInputForm>

        <CardButtonContainer>
          {infoChange ? (
            <>
              <EditBtn onClick={onHandleEdit} className="cancel-btn">
                취소하기
              </EditBtn>
              <EditBtn onClick={() => onHandleSubmit('user')}>
                {submitState.status === 'loading' ? <Spinner /> : '완료하기'}
              </EditBtn>
            </>
          ) : (
            <EditBtn onClick={onHandleEdit}>수정하기</EditBtn>
          )}
        </CardButtonContainer>
      </UserInfoContainer>
    </BaseCard>
  );
}

const PinButton = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10000;

  & svg {
    color: ${({ theme }) => theme.colors.pointColor2};
  }

  &:before {
    content: 'My Pins';
    position: absolute;
    bottom: -15px;
    font-size: 1rem;
  }
`;

const pinDropDown = styled.div``;

const UserInfoContainer = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 2rem;
`;

const EditBtn = styled(BaseBtn)`
  width: 15rem;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 12px;
`;

export default UserCard;
