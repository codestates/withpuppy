import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validPhone } from 'utils/formValidator';
import { modifyMypageInfo } from 'redux/Async/modifyMypageInfo';
import { selectUser } from 'redux/store';

function useMypageForm(initialValues) {
  //@ STATE ////////////////////////////////
  const dispatch = useDispatch();
  const { userData } = useSelector(selectUser);

  const [values, setValues] = useState(initialValues);
  const [submitState, setSubmitState] = useState({
    status: 'ready',
    reason: '',
  });
  const [infoChange, setInfoChange] = useState(false);

  //# HANDLER /////////////////////////////
  const onHandleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const onResetValues = () => {
    setValues(initialValues);
    setSubmitState({ status: 'ready', reason: '' });
  };

  const onHandleEdit = () => {
    setInfoChange((prev) => !prev);
    onResetValues();
  };

  const onHandleSubmit = async (type) => {
    //! type = user or puppy

    //0. if already clicked || empty => no action
    if (submitState.status === 'loading' || submitState.status === 'reject') {
      return;
    }

    //1. ready state
    setSubmitState({
      status: 'loading',
      reason: '',
    });

    //2. check varification for user phone case
    if (type === 'user' && values.phone) {
      const phoneValidTest = validPhone(values.phone);

      if (!phoneValidTest.state) {
        setSubmitState({
          status: 'reject',
          reason: phoneValidTest.reason,
        });

        return setTimeout(
          () => setSubmitState({ status: 'ready', reason: '' }),
          1000,
        );
      }
    }

    //3. if ok
    try {
      let dataToSend = { ...values };

      Object.keys(dataToSend).forEach((key) => {
        if (dataToSend[key] === '') {
          delete dataToSend[key];
        }
      });

      const params = { type, ...dataToSend };

      if (type === 'user') {
        params['userId'] = userData.id;
      }

      if (type === 'puppy') {
        params['userId'] = userData.id;
        params['puppyId'] = userData.puppy.id;
      }

      await dispatch(modifyMypageInfo(params)).unwrap();
      onHandleEdit();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    values,
    infoChange,
    submitState,
    onHandleChange,
    onResetValues,
    onHandleEdit,
    onHandleSubmit,
  };
}

export default useMypageForm;
