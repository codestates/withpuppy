import React, { useState, useMemo } from 'react';
import {
  validNickname,
  validEmail,
  validPassword,
  validConfirmPassword,
} from 'utils/formValidator';
import { debounce } from 'utils/debounce';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/Async/signUp';
import { signIn } from 'redux/Async/signIn';

function useForm({ initialValues }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialValues);
  const [submitState, setSubmitState] = useState({
    status: 'ready',
    result: {},
  });

  const debounceMomo = useMemo(() => debounce(900), []);

  const onHandleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const onHandleLoginSubmit = async (onHandleLoginOpen) => {
    //1. 폼에 빈칸이 하나라도 있을 경우
    if (Object.values(values).includes('')) {
      setSubmitState({
        status: 'reject',
      });

      debounceMomo(() => {
        setSubmitState({
          status: 'ready',
        });
      });

      return;
    }

    //2. 폼이 다 작성되어 있을 경우
    setSubmitState({ status: 'loading' });

    try {
      await dispatch(
        signIn({
          email: values.email,
          password: values.password,
        }),
      ).unwrap();

      setTimeout(() => {
        onResetchanges();

        setSubmitState({
          status: 'ready',
        });

        onHandleLoginOpen();
      }, 1000);
    } catch (err) {
      console.log(err);
      setSubmitState({
        status: 'fail',
      });

      setTimeout(() => {
        onResetchanges();

        setSubmitState({
          status: 'ready',
        });
      }, 1000);
    }
  };

  const onHandleSignupSubmit = async (clickEvent, onHandleFormToggle) => {
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
      });

      debounceMomo(() => {
        setSubmitState({
          status: 'ready',
        });
      });

      return;
    }

    setSubmitState({ status: 'loading' });
    //TODO 여기에서 dispatch로 유저생성을 기다린 후, 결과에 따라 submitState를 전환한다.

    try {
      await dispatch(
        signUp({
          nickname: values.nickname,
          email: values.email,
          password: values.password,
        }),
      ).unwrap();

      setTimeout(() => {
        setSubmitState({
          status: 'ready',
        });

        setTimeout(() => {
          onHandleFormToggle();
        }, 500);
      }, 1000);
    } catch (err) {
      console.log(err);
      setSubmitState({
        status: 'fail',
      });

      setTimeout(() => {
        onResetchanges();

        setSubmitState({
          status: 'ready',
        });
      }, 1000);
    }
  };

  const onResetchanges = () => {
    setValues(initialValues);
  };

  return {
    values,
    submitState,
    onHandleChange,
    onHandleLoginSubmit,
    onHandleSignupSubmit,
    onResetchanges,
  };
}

export default useForm;
