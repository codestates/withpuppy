import React from 'react';
import ResponseModal from './ResponseModal';
import RunningDog from 'assets/img/icons/runningDog.gif';

export default function Index() {
  return (
    <ResponseModal>
      <span>잠시만 기다려주세요</span>
      <img src={RunningDog} alt="" />
    </ResponseModal>
  );
}
