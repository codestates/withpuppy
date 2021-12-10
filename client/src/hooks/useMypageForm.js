import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'utils/debounce';

function useMypageForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    setValues,
  };
}

export default useMypageForm;
