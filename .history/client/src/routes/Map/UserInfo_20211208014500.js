import profile from '../../assets/img/profile/profile.png';
import pngwing1 from '../../assets/img/profile/pngwing/pngwing1.png';
import pngwing2 from '../../assets/img/profile/pngwing/pngwing2.png';

import styled from 'styled-components/macro';

const UserInfo = styled.div`
  flex-direction: row;
  padding-top: 20px;
  display: flex;
`;

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
        <img
          src={profile}
          alt=""
          style={{ paddingBottom: '100px', width: '90px' }}
        ></img>
      </div>

      <div className="profileInfo" style={{ paddingLeft: '2rem' }}>
        <div style={{ fontSize: '20px' }}>
          {puppyName}
          <span
            className="stars"
            style={{
              float: 'right',
              paddingRight: '20px',
            }}
          >
            <div
              className="numberOfStars"
              style={{
                width: '70px',
                height: '33px',
                boxShadow:
                  '0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.17)',
              }}
            ></div>
          </span>
        </div>

        <div style={{ fontSize: '20px' }}>{userName}</div>
        <div style={{ fontSize: '20px' }}>{puppyAge}살</div>
        <div style={{ fontSize: '20px' }}>
          <span className="gender">
            <img
              src={pngwing1}
              alt=""
              style={{ width: '20px', height: '20px' }}
            ></img>
            <img
              src={pngwing2}
              alt=""
              style={{ width: '20px', height: '20px' }}
            ></img>
          </span>
        </div>
        <div
          style={{
            paddingRight: '20px',
            paddingBottom: '30px',
          }}
        >
          <div className="introduceTo">
            <div
              style={{
                width: '350px',
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
