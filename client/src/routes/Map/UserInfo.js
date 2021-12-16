import femaleIcon from 'assets/img/profile/pngwing/pngwing1.png';
import maleIcon from 'assets/img/profile/pngwing/pngwing2.png';
import profile from 'assets/img/profile/profile.png';
import styled from 'styled-components/macro';
import Liked from './Liked';

Index.defaultProps = {
  puppyName: '멍멍이',
  userName: '홍길동',
  puppyAge: 7,
  introduction: '여기는 소개글 입니다.',
  profileImg: { profile },
};
// TODO : 만약 Line. 8 ~ 14의 [ Index.defaultProps ... profile }, ] 가 보인다면, 그냥 지워 주세요.

export default function Index({
  profileImg,
  puppyName,
  userName,
  puppyAge,
  introduction,
}) {
  return (
    <UserInfo>
      <div
        className="imgContainer"
        style={{ margin: '1rem', boxSizing: 'borderBox' }}
      >
        <img
          // props 변경하기
          src={profile}
          alt=""
          style={{ width: ' 60px', height: '60px' }}
        ></img>
        <Liked />
      </div>
      <div
        className="profileInfo"
        style={{
          margin: '1.2rem',
          width: '100%',
          boxSizing: ' border-box',
        }}
      >
        <div className="puppyNameInfo">{puppyName}</div>
        <div clasName="userNameInfo">{userName}</div>
        <div className="puppyAgeInfo">{puppyAge}살</div>
        <div className="genderIcon">
          <img src={femaleIcon} style={{ width: '15px', height: '15px' }}></img>
          <img src={maleIcon} style={{ width: '15px', height: '15px' }}></img>
        </div>
        <div
          className="introductionContainer"
          style={{
            paddingRight: '10px',
          }}
        >
          <div
            className="introduction"
            style={{
              width: '100%',
              height: '90px',
              boxSizing: 'border-box',
              border: 'none',
              borderRadius: '2rem',
              outline: 'none',
              padding: '10px',
              backgroundColor: '#f7f1ed',
              color: 'grey',
            }}
          >
            {introduction}
          </div>
        </div>
      </div>
    </UserInfo>
  );
}

const UserInfo = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;
