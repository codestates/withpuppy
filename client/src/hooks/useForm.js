import React, { useState, useMemo } from 'react';
import {
  validNickname,
  validEmail,
  validPassword,
  validConfirmPassword,
} from 'utils/formValidator';
import { debounce } from 'utils/debounce';

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);
  const [submitState, setSubmitState] = useState({
    status: 'ready',
    result: {},
  });

  const debounceMomo = useMemo(() => debounce(800), []);

  console.log(submitState);

  const onHandleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const onHandleSignupSubmit = () => {
    let validationBeforeSubmit;

    //하나라도 충족 안됬을 때 에러상태 저장
    validationBeforeSubmit = validNickname(values.nickname);
    validationBeforeSubmit = validEmail(values.email);
    validationBeforeSubmit = validPassword(values.password);
    validationBeforeSubmit = validConfirmPassword(
      values.confirm,
      values.password,
    );

    //에러상태일시 reject 후 다시 ready
    if (Object.values(values).includes('') || !validationBeforeSubmit.state) {
      setSubmitState({
        status: 'reject',
        result: {},
      });

      debounceMomo(() => {
        setSubmitState({
          status: 'ready',
          result: {},
        });
      });

      return;
    }

    setSubmitState({ ...submitState, status: 'loading' });
    //TODO 여기에서 dispatch로 유저생성을 기다린 후, 결과에 따라 submitState를 전환한다.
  };

  const onResetchanges = () => {
    setValues(initialValues);
  };

  return {
    values,
    submitState,
    onHandleChange,
    onHandleSignupSubmit,
    onResetchanges,
  };
}

export default useForm;
