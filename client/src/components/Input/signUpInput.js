import React, { useRef, useContext, useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BaseInputContainer } from '.';
import { signUpCtx } from 'components/Modal/LoginSignUpModal';
import { debounce } from 'utils/debounce';

function Index({ label, type, validator }) {
  const inputRef = useRef(null);
  const { values, onHandleChange } = useContext(signUpCtx);
  const [valid, setValid] = useState({ state: true, reason: '' });

  const validatorMemo = useMemo(debounce, []);

  useEffect(() => {
    validatorMemo(() => {
      const validateResult = validator(values[label], values.password);
      setValid(validateResult);
    });
  }, [values[label]]);

  return (
    <SignUpInputContainer
      label={
        !valid.state
          ? valid.reason
          : label === 'confirm'
          ? 'confirm password'
          : label
      }
      validState={valid.state}
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <input
        ref={inputRef}
        type={type}
        value={values[label]}
        onChange={(e) => {
          onHandleChange(label, e.target.value);
        }}
      />
    </SignUpInputContainer>
  );
}

const SignUpInputContainer = styled(BaseInputContainer)`
  width: 80%;

  &::before {
    content: '${({ label }) => label}';
    position: absolute;
    font-size: 2rem;
    top: -3rem;
    left: 2rem;
    text-transform: uppercase;
    color: ${({ validState, theme }) =>
      validState ? 'white' : theme.colors.thirdColor};

    @media screen and (max-width: 850px) {
      font-size: 1.5rem;
    }
  }
`;

export default Index;
