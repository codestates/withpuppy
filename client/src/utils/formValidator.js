// nickname
export function validNickname(nickname) {
  if (nickname.length > 8) {
    return {
      state: false,
      reason: '닉네임은 7자 이내여야 합니다',
    };
  }

  return { state: true, reason: '' };
}

// email
export function validEmail(email) {
  //첫시작은 단어, 중간에 _/-/. 가 끼어있을 수 있음. 특수문자 미포함
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]{1,}.[a-zA-Z]{2,3}$/i;

  if (email.length && !reg.test(email)) {
    return { state: false, reason: '유효한 이메일 형식이 아닙니다' };
  }

  return { state: true, reason: '' };
}

//password
export function validPassword(password) {
  if (password) {
    //0. 길이 5 ~ 10
    if (password.length < 5)
      return {
        state: false,
        reason: '비밀번호는 5자 이상입니다',
      };

    if (password.length >= 11)
      return {
        state: false,
        reason: '비밀번호는 10자 이하입니다',
      };

    //1. 특수문자 1개이상
    // eslint-disable-next-line
    const special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,}/g;
    if (!special.test(password))
      return {
        state: false,
        reason: '특수문자는 1개 이상 포함해야 합니다',
      };

    //2. 대문자 1개 이상
    const capital = /[A-Z]{1,}/g;
    if (!capital.test(password))
      return {
        state: false,
        reason: '대문자는 1개 이상 포함해야 합니다',
      };

    //3. 숫자 1개 이상
    const number = /[0-9]{1,}/g;
    if (!number.test(password))
      return {
        state: false,
        reason: '숫자는 1개 이상 포함해야 합니다',
      };
  }

  return { state: true, reason: '' };
}

//confirm password
export function validConfirmPassword(confirm, password) {
  console.log(password);
  if (confirm) {
    if (!password)
      return {
        state: false,
        reason: '비밀번호를 먼저 입력해주세요',
      };

    if (password !== confirm)
      return {
        state: false,
        reason: '비밀번호가 일치하지 않습니다',
      };
  }

  return { state: true, reason: '' };
}
