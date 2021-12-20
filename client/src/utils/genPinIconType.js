import Bob from 'assets/img/icons/보브.png';
import Yuna from 'assets/img/icons/유나.png';
import Iko from 'assets/img/icons/이코.png';
import Caden from 'assets/img/icons/카덴.png';
import Felix from 'assets/img/icons/펠릭스.png';
import Hiro from 'assets/img/icons/히로.png';

// 사용법
// pinPointer table 에 있는 IconType 컬럼에 저장된 값을 인자로 넣으면 된다

// <img src ={genPinIconType("히로")}

export function genPinIconType(iconTypeName) {
  switch (iconTypeName) {
    case '보브':
      return Bob;
    case '유나':
      return Yuna;
    case '이코':
      return Iko;
    case '카덴':
      return Caden;
    case '펠릭스':
      return Felix;
    case '히로':
      return Hiro;
    default:
      return Bob;
  }
}
