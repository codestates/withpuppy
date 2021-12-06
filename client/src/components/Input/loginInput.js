import React, { useRef, useContext } from 'react';
import { BaseInputContainer } from './';
import { loginCtx } from 'components/Modal/LoginSignUpModal';

function Index({ label, type }) {
  const inputRef = useRef(null);
  const { values, onHandleChange } = useContext(loginCtx);

  return (
    <BaseInputContainer
      onClick={(e) => {
        inputRef.current.focus();
      }}
    >
      <span className="inputLabel">{label}</span>
      <input
        ref={inputRef}
        type={type}
        value={values[label]}
        onChange={(e) => {
          onHandleChange(label, e.target.value);
        }}
      />
    </BaseInputContainer>
  );
}

export default Index;
