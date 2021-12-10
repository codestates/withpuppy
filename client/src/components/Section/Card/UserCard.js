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

function UserCard() {
  const { userData } = useSelector(selectUser);
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    phone: '',
  });
  const [infoChange, setInfoChange] = useState(false);

  const onHandleEdit = () => {
    setInfoChange((prev) => !prev);
  };

  return (
    <BaseCard className="puppyCard">
      <span className>내 정보</span>

      <PuppyInfoContainer className="flex-center-C">
        <Tumbnail imgUrl={userData.thumbImg} type="user" />

        <CardInputForm>
          <CardInputContainer>
            <div className="title">닉네임</div>
            <div className="value">{userData.nickname}</div>
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">이메일</div>
            <div className="value email">{userData.email}</div>
          </CardInputContainer>

          <CardInputContainer>
            <div className="title">연락처</div>
            <div className="value phone">
              {userData.phone || '010-000-0000'}
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

export default UserCard;

// import React, { useState } from 'react';
// import BaseCard from './BaseCard';
// import styled from 'styled-components';
// import Thumbnail from 'components/Icon/Tumbnail';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/store';
// import {
//   CardInputForm,
//   CardInputContainer,
//   CardButtonContainer,
// } from 'components/Section';
// import { BaseBtn } from 'components/Button';

// function UserCard() {
//   const { userData } = useSelector(selectUser);
//   const [nickname, setNickname] = useState('');
//   const [phone, setPhone] = useState('');
//   const [infoChange, setInfoChange] = useState(false);

//   const onHandleEdit = () => {
//     setInfoChange((prev) => !prev);
//   };

//   return (
//     <BaseCard>
//       <span>내 정보</span>

//       <UserInfoContainer className="flex-center-C">
//         <Thumbnail imgUrl={userData.thumbImg} />

//         <CardInputForm>
//           <CardInputContainer>
//             <div className="title">닉네임</div>
//             <div className="value">{userData.nickname}</div>
//           </CardInputContainer>

//           <CardInputContainer>
//             <div className="title">이메일</div>
//             <div className="value">ee</div>
//           </CardInputContainer>

//           <CardInputContainer>
//             <div className="title">연락처</div>
//             <div className="value">01ee</div>
//           </CardInputContainer>
//         </CardInputForm>

//         <CardButtonContainer>
//           {infoChange ? (
//             <>
//               <EditBtn onClick={onHandleEdit} className="cancel-btn">
//                 취소하기
//               </EditBtn>
//               <EditBtn>완료하기</EditBtn>
//             </>
//           ) : (
//             <EditBtn onClick={onHandleEdit}>수정하기</EditBtn>
//           )}
//         </CardButtonContainer>
//       </UserInfoContainer>
//     </BaseCard>
//   );
// }

// const UserInfoContainer = styled.article`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const EditBtn = styled(BaseBtn)`
//   width: 15rem;
//   padding: 1.5rem;
//   font-size: 2rem;
//   border-radius: 12px;
// `;

// export default UserCard;
