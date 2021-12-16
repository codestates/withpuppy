import femaleIcon from 'assets/img/profile/pngwing/pngwing1.png';
import maleIcon from 'assets/img/profile/pngwing/pngwing2.png';
import profile from 'assets/img/profile/profile.png';
import styled from 'styled-components/macro';
import Liked from './Liked';

export default function Index({
  profileImg,
  puppyName,
  userName,
  puppyAge,
  introduceTo,
}) {
  return (
    <UserInfo className="UserInfo">
      <div className="imgContainer">
        <img src={profileImg} alt="" style={{ width: '90px' }}></img>
        <Liked />
      </div>
      <div
        className="profileInfo"
        style={{ paddingLeft: '2rem', width: '100%', boxSizing: 'border-box' }}
      >
        <div style={{ fontSize: '20px' }}>{puppyName}</div>
        <div style={{ fontSize: '20px' }}>{userName}</div>
        <div style={{ fontSize: '20px' }}>{puppyAge}살</div>
        <div style={{ fontSize: '20px' }}>
          <span className="gender">
            <img
              src={femaleIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            ></img>
            <img
              src={maleIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            ></img>
          </span>
        </div>
        <div
          className="introductionContainer"
          style={{
            paddingRight: '20px',
            paddingBottom: '30px',
          }}
        >
          <div className="introduceTo">
            <div
              style={{
                boxSizing: 'border-box',
                height: '50px',
                border: 'none',
                borderRadius: '2rem',
                outline: 'none',
                color: '#fffff',
                fontSize: '20px',
                paddingLeft: '1.2rem',
                backgroundColor: '#f7f1ed',
              }}
            >
              {introduceTo}
            </div>
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
  padding: 2.5rem;
`;
