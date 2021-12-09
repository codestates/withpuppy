import profile from '../../assets/img/profile/profile.png';
import pngwing1 from '../../assets/img/profile/pngwing/pngwing1.png';
import pngwing2 from '../../assets/img/profile/pngwing/pngwing2.png';
import styled from 'styled-components/macro';
import Liked from './Liked';
import { Column } from 'components/Footer/FooterStyle';

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
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
        <img src={profile} alt="" style={{ width: '90px' }}></img>
        <Liked />
      </div>
      <div className="profileInfo" style={{ paddingLeft: '2rem' }}>
        <div style={{ fontSize: '20px' }}>{puppyName}</div>
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
                width: '390px',
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
