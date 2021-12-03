// nickname
export function validNickname(nickname) {
  return nickname.length <= 10;
}

// email
export function validEmail(email) {
  //첫시작은 단어, 중간에 _/-/. 가 끼어있을 수 있음. 특수문자 미포함
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]{1,}.[a-zA-Z]{2,3}$/i;

  return reg.test(email);
}

//password
export function validPassword(password) {
  //0. 길이 5 ~ 10
  if (password.length < 5 || password.length >= 11)
    return { state: false, reason: '비밀번호가 너무 깁니다' };

  //1. 특수문자 1개이상
  const special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,}/g;
  if (!special.test(password))
    return { state: false, reason: '특수문자는 1개 이상 포함해야 합니다' };

  //2. 대문자 1개 이상
  const capital = /[A-Z]{1,}/g;
  if (!capital.test(password))
    return { state: false, reason: '대문자는 1개 이상 포함해야 합니다' };

  //3. 숫자 1개 이상
  const number = /[0-9]{1,}/g;
  if (!number.test(password))
    return { state: false, reason: '숫나는 1개 이상 포함해야 합니다' };

  return { state: true };
}
