import React, { useState, useMemo, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/store';
import axios from 'redux/Async/axios';
import { changeProfile } from 'redux/Slices/User';

function Tumbnail({ imgUrl, type }) {
  const { userData } = useSelector(selectUser);
  const dispatch = useDispatch();
  const imgRef = useRef(null);

  const [validSize, setValidSize] = useState({
    status: 'ready',
    reason: '',
  });

  const onHandleImageSumbit = async (e) => {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    //파일 용량이 5mb를 넘을 경우
    if (file.size > maxSize) {
      setValidSize({
        status: 'reject',
        reason: '파일 용량은 5mb 이하여야 합니다',
      });

      e.target.value = null;

      return setTimeout(
        () => setValidSize({ status: 'ready', reason: '' }),
        1500,
      );
    }

    //괜찮을 경우
    const formData = new FormData();
    let selectType;

    if (type === 'user') {
      selectType = {
        key: 'userId',
        value: userData.id,
        imageType: 'userImg',
      };
    } else if (type === 'puppy') {
      selectType = {
        key: 'puppyId',
        value: userData.puppy.id,
        imageType: 'puppyImg',
      };
    }

    formData.append(selectType.key, selectType.value);
    formData.append(selectType.imageType, file);

    try {
      const response = await axios.put(`/${type}/${type}profile`, formData);
      // console.log(response);
      e.target.value = null;

      dispatch(changeProfile({ type, newUrl: response.data }));

      // window.location.reload();
    } catch (err) {
      setValidSize({
        status: 'reject',
        reason: '이미지 업로드가 실패했습니다',
      });

      return setTimeout(
        () => setValidSize({ status: 'ready', reason: '' }),
        1500,
      );
    }
  };

  return (
    <ThumbnailContainer validSize={validSize}>
      <label htmlFor="upload">
        <img
          ref={imgRef}
          src={imgUrl}
          alt=""
          onError={() => {
            return (imgRef.current.src =
              'https://raw.githubusercontent.com/chltjdrhd777/chltjdrhd777-final-prototype-imgs/main/defaultImg.jpeg');
          }}
        />
      </label>
      <input
        type="file"
        onChange={onHandleImageSumbit}
        id="upload"
        accept="image/*"
      />

      <FontAwesomeIcon icon={faCog} className="cog" />
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  position: relative;

  & > label {
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    cursor: pointer;

    & img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  & > input {
    transition: border 0.4s;
    ${({ validSize }) =>
      validSize.status === 'reject'
        ? css`
            border: 3px solid ${({ theme }) => theme.colors.thirdColor};
          `
        : css`
            border: 1px solid transparent;
          `}

    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    font-size: 0%; //input에 폰트사이즈 옵션을 주는순간, 해당 width와 height을 onClick 영역이 가득메운다
    cursor: pointer;
    position: relative;
    display: flex;
    outline: none;
  }

  &:before {
    content: '${({ validSize }) => validSize.reason}';
    color: ${({ theme }) => theme.colors.thirdColor};
    width: 200%;
    position: absolute;
    top: -25px;
    left: -30px;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    & > label {
      width: 11rem;
      height: 11rem;
    }
    & > input {
      width: 11rem;
      height: 11rem;
    }
  }

  & .cog {
    position: absolute;
    bottom: 0;
    right: 6px;
    background: white;
    border-radius: 50%;
    padding: 3px;
    border: 1px solid ${({ theme }) => theme.colors.pointColor2};

    color: ${({ theme }) => theme.colors.pointColor2};
  }
`;

export default Tumbnail;
