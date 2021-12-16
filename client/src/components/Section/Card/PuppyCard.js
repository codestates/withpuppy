import React, { useState, useRef } from 'react';
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
import useForm from 'hooks/useMypageForm';
import FemaleIcon from 'assets/img/profile/pngwing/pngwing1.png';
import MaleIcon from 'assets/img/profile/pngwing/pngwing2.png';

function PuppyCard() {
  const { userData } = useSelector(selectUser);
  const { values, infoChange, onHandleChange, onHandleEdit, onHandleSubmit } =
    useForm({
      puppyName: '',
      gender: '',
      age: '',
      breed: '',
      introduction: '',
    });

  const numberInputRef = useRef(null);

  function maxLengthCheck(element) {
    if (element.value > element.maxLength) {
      element.value = element.value.slice(0, element.maxLength);
    }
  }

  return (
    <BaseCard className="puppyCard">
      <span className="puppyCardTitle">내 강아지 정보</span>

      <PuppyInfoContainer className="flex-center-C">
        <Tumbnail imgUrl={userData.puppy.puppyProfile} type="puppy" />

        <CardInputForm onSubmit={(e) => e.preventDefault()}>
          <CardInputContainer>
            <div className="title">강아지 이름</div>
            {infoChange ? (
              <input
                type="text"
                value={values.puppyName}
                className="card-input"
                name="puppyName"
                maxLength="12"
                onChange={(e) => onHandleChange(e.target.name, e.target.value)}
              />
            ) : (
              <div className="value">{userData.puppy.puppyName}</div>
            )}
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">강아지 성별</div>
            {infoChange ? (
              <div type="text" className="card-input gender">
                <div
                  className={`image-wrapper flex-center-R ${
                    values.gender === 'male' ? 'active' : ''
                  }`}
                  onClick={() => {
                    onHandleChange('gender', 'male');
                  }}
                >
                  <img src={MaleIcon} alt="male-icon" />
                </div>

                <div
                  className={`image-wrapper flex-center-R ${
                    values.gender === 'female' ? 'active' : ''
                  }`}
                  onClick={() => {
                    onHandleChange('gender', 'female');
                  }}
                >
                  <img src={FemaleIcon} alt="female-icon" />
                </div>
              </div>
            ) : (
              <div className="value">
                {userData.puppy.gender === 'male' ? (
                  <img src={MaleIcon} alt="male-icon" />
                ) : (
                  <img src={FemaleIcon} alt="female-icon" />
                )}
              </div>
            )}
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">강아지 나이</div>
            {infoChange ? (
              <input
                type="number"
                value={values.age}
                className="card-input"
                name="age"
                max="100"
                placeholder="0"
                maxLength="3"
                ref={numberInputRef}
                onInput={(e) => {
                  maxLengthCheck(numberInputRef.current);
                }}
                onChange={(e) => onHandleChange(e.target.name, e.target.value)}
              />
            ) : (
              <div className="value">{userData.puppy.age}</div>
            )}
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">강아지 견종</div>
            {infoChange ? (
              <input
                type="text"
                value={values.breed}
                className="card-input"
                name="breed"
                maxLength="5"
                onChange={(e) => onHandleChange(e.target.name, e.target.value)}
              />
            ) : (
              <div className="value">{userData.puppy.breed}</div>
            )}
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">소개글</div>
            {infoChange ? (
              <input
                type="text"
                value={values.introduction}
                className="card-input puppy-introduction"
                name="introduction"
                maxLength="20"
                onChange={(e) => onHandleChange(e.target.name, e.target.value)}
              />
            ) : (
              <div className="value puppy-value">
                {userData.puppy.introduction || '왕 왕!'}
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
              <EditBtn onClick={() => onHandleSubmit('puppy')}>
                완료하기
              </EditBtn>
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
  padding: 2rem;
`;

const EditBtn = styled(BaseBtn)`
  width: 15rem;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 12px;
`;

export default PuppyCard;
