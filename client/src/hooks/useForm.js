import React, { useState } from 'react';
import {
  validNickname,
  validEmail,
  validPassword,
  validConfirmPassword,
} from 'utils/formValidator';

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);
  const [submitState, setSubmitState] = useState({
    status: 'ready',
    result: {},
  });

  const onHandleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const onHandleSignupSubmit = () => {
    let validationBeforeSubmit;

    validationBeforeSubmit = validNickname(values.nickname);
    validationBeforeSubmit = validEmail(values.email);
    validationBeforeSubmit = validPassword(values.password);
    validationBeforeSubmit = validConfirmPassword(
      values.confirm,
      values.password,
    );

    if (Object.values(values).includes('') || !validationBeforeSubmit.state) {
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
