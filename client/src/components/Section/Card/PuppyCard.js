import React, { useState } from 'react';
import BaseCard from './BaseCard';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/store';
import {
  CardInputForm,
  CardInputContainer,
  CardButtonContainer,
} from 'components/Section';
import { BaseBtn } from 'components/Button';
import Tumbnail from 'components/Icon/Tumbnail';

function PuppyCard() {
  const { userData } = useSelector(selectUser);
  const [puppyInfo, setPuppyInfo] = useState({
    puppyName: '',
    gender: '',
    age: '',
    breed: '',
  });
  const [infoChange, setInfoChange] = useState(false);

  const onHandleEdit = () => {
    setInfoChange((prev) => !prev);
  };

  return (
    <BaseCard className="puppyCard">
      <span className="puppyCardTitle">내 강아지 정보</span>

      <PuppyInfoContainer className="flex-center-C">
        <Tumbnail imgUrl={userData.puppy.puppyProfile} type="puppy" />

        <CardInputForm>
          <CardInputContainer>
            <div className="title">강아지 이름</div>
            <div className="value">{userData.puppy.puppyName}</div>
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">강아지 성별</div>
            <div className="value">{userData.puppy.gender}</div>
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">강아지 나이</div>
            <div className="value">{userData.puppy.age}</div>
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">강아지 견종</div>
            <div className="value">{userData.puppy.breed}</div>
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">소개글</div>
            <div className="value">
              {userData.puppy.introduction || '왕 왕!'}
            </div>
          </CardInputContainer>
        </CardInputForm>

        <CardButtonContainer>
          {infoChange ? (
            <>
              <EditBtn onClick={onHandleEdit} className="cancel-btn">
                취소하기
              </EditBtn>
              <EditBtn>완료하기</EditBtn>
            </>
          ) : (
            <EditBtn onClick={onHandleEdit}>수정하기</EditBtn>
          )}
        </CardButtonContainer>
      </PuppyInfoContainer>
    </BaseCard>
  );
}

const PuppyInfoContainer = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
`;

const EditBtn = styled(BaseBtn)`
  width: 15rem;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 12px;
`;

export default PuppyCard;
