import React from 'react';
import ResponseModal from './ResponseModal';
import QuestionPuppy from 'assets/img/icons/questionPuppy.png';

export default function Index({ title }) {
  return (
    <ResponseModal>
      <span>{title}</span>
      <img src={QuestionPuppy} alt="" className="errorImg" />
    </ResponseModal>
  );
}
